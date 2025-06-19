// Location tracking module
const LocationTracker = {
  watchId: null,
  isTracking: false,
  isSharing: true,
  currentPosition: null,
  updateInterval: null,

  // Configuration
  config: {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 60000,
    updateFrequency: 5000, // Update every 5 seconds
  },

  // Initialize location tracking
  init: async function () {
    if (!navigator.geolocation) {
      throw new Error("Geolocation is not supported by this browser")
    }

    // Check for location permission
    if (navigator.permissions) {
      try {
        const permission = await navigator.permissions.query({ name: "geolocation" })
        if (permission.state === "denied") {
          this.showLocationBanner()
          return false
        }
      } catch (error) {
        console.log("Permission query not supported")
      }
    }

    return true
  },

  // Start tracking user's location
  startTracking: function () {
    if (this.isTracking) {
      return
    }

    this.isTracking = true

    // Get initial position
    this.getCurrentPosition()

    // Set up continuous tracking
    this.watchId = navigator.geolocation.watchPosition(
      this.onLocationSuccess.bind(this),
      this.onLocationError.bind(this),
      this.config,
    )

    // Set up periodic updates to server
    this.updateInterval = setInterval(() => {
      if (this.currentPosition && this.isSharing) {
        this.sendLocationUpdate()
      }
    }, this.config.updateFrequency)

    console.log("Location tracking started")
  },

  // Stop tracking
  stopTracking: function () {
    if (!this.isTracking) {
      return
    }

    this.isTracking = false

    if (this.watchId) {
      navigator.geolocation.clearWatch(this.watchId)
      this.watchId = null
    }

    if (this.updateInterval) {
      clearInterval(this.updateInterval)
      this.updateInterval = null
    }

    console.log("Location tracking stopped")
  },

  // Get current position once
  getCurrentPosition: function () {
    navigator.geolocation.getCurrentPosition(
      this.onLocationSuccess.bind(this),
      this.onLocationError.bind(this),
      this.config,
    )
  },

  // Handle successful location retrieval
  onLocationSuccess: function (position) {
    this.currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
      accuracy: position.coords.accuracy,
      timestamp: Date.now(),
    }

    // Update map if available
    if (typeof MapRenderer !== "undefined" && MapRenderer && MapRenderer.updateUserLocation) {
      MapRenderer.updateUserLocation(this.currentPosition)
    }

    // Dispatch custom event
    window.dispatchEvent(
      new CustomEvent("locationUpdate", {
        detail: this.currentPosition,
      }),
    )

    // Hide location banner if shown
    this.hideLocationBanner()
  },

  // Handle location errors
  onLocationError: function (error) {
    let message = "Unable to retrieve your location"

    switch (error.code) {
      case error.PERMISSION_DENIED:
        message = "Location access denied by user"
        this.showLocationBanner()
        break
      case error.POSITION_UNAVAILABLE:
        message = "Location information is unavailable"
        break
      case error.TIMEOUT:
        message = "Location request timed out"
        break
    }

    console.error("Location error:", message)
    if (window.Utils) {
      window.Utils.showNotification(message, "error")
    }
  },

  // Send location update to server
  sendLocationUpdate: async function () {
    if (!this.currentPosition || !this.isSharing) {
      return
    }

    try {
      if (window.ApiClient) {
        await window.ApiClient.updateLocation(
          this.currentPosition.lat,
          this.currentPosition.lng,
          this.currentPosition.accuracy,
        )
      }
    } catch (error) {
      console.error("Failed to update location:", error)
    }
  },

  // Toggle location sharing
  toggleSharing: function () {
    this.isSharing = !this.isSharing

    if (window.Utils) {
      if (this.isSharing) {
        window.Utils.showNotification("Location sharing enabled", "success")
      } else {
        window.Utils.showNotification("Location sharing paused", "warning")
      }
    }

    // Save setting
    localStorage.setItem("locationSharing", this.isSharing.toString())
  },

  // Check if sharing is enabled
  getSharingStatus: function () {
    return this.isSharing
  },

  // Request location permission
  requestPermission: function () {
    this.getCurrentPosition()
  },

  // Show location permission banner
  showLocationBanner: () => {
    const banner = document.getElementById("locationBanner")
    if (banner) {
      banner.classList.remove("hidden")
    }
  },

  // Hide location permission banner
  hideLocationBanner: () => {
    const banner = document.getElementById("locationBanner")
    if (banner) {
      banner.classList.add("hidden")
    }
  },

  // Get current position data
  getCurrentLocationData: function () {
    return this.currentPosition
  },
}

// Load sharing preference from localStorage
LocationTracker.isSharing = localStorage.getItem("locationSharing") !== "false"

// Export LocationTracker for use in other files
window.LocationTracker = LocationTracker
