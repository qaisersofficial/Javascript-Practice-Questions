// Google Maps rendering and management
const MapRenderer = {
  map: null,
  userMarker: null,
  friendMarkers: {},
  infoWindows: {},

  // Default map configuration
  config: {
    zoom: 15,
    center: { lat: 40.7128, lng: -74.006 }, // Default to NYC
    styles: [
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
    ],
  },

  // Initialize the map
  init: async function () {
    return new Promise((resolve, reject) => {
      if (typeof google === "undefined") {
        reject(new Error("Google Maps API not loaded"))
        return
      }

      // Get user's current location for initial center
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.config.center = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            }
            this.createMap()
            resolve()
          },
          () => {
            // Use default location if geolocation fails
            this.createMap()
            resolve()
          },
        )
      } else {
        this.createMap()
        resolve()
      }
    })
  },

  // Create the map instance
  createMap: function () {
    const mapElement = document.getElementById("map")
    if (!mapElement) {
      throw new Error("Map container not found")
    }

    this.map = new google.maps.Map(mapElement, {
      zoom: this.config.zoom,
      center: this.config.center,
      styles: this.config.styles,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: false,
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_BOTTOM,
      },
    })

    // Add click listener for map
    this.map.addListener("click", (event) => {
      this.closeAllInfoWindows()
    })

    console.log("Map initialized")
  },

  // Update user's location marker
  updateUserLocation: function (location) {
    const position = new google.maps.LatLng(location.lat, location.lng)

    if (this.userMarker) {
      // Update existing marker
      this.userMarker.setPosition(position)
    } else {
      // Create new marker
      this.userMarker = new google.maps.Marker({
        position: position,
        map: this.map,
        title: "Your Location",
        icon: {
          url:
            "data:image/svg+xml;charset=UTF-8," +
            encodeURIComponent(`
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="8" fill="#3B82F6" stroke="#FFFFFF" stroke-width="2"/>
                            <circle cx="12" cy="12" r="3" fill="#FFFFFF"/>
                        </svg>
                    `),
          scaledSize: new google.maps.Size(24, 24),
          anchor: new google.maps.Point(12, 12),
        },
        zIndex: 1000,
      })

      // Add info window for user marker
      const infoWindow = new google.maps.InfoWindow({
        content: this.createUserInfoContent(location),
      })

      this.userMarker.addListener("click", () => {
        this.closeAllInfoWindows()
        infoWindow.open(this.map, this.userMarker)
      })

      this.infoWindows["user"] = infoWindow
    }

    // Update info window content
    if (this.infoWindows["user"]) {
      this.infoWindows["user"].setContent(this.createUserInfoContent(location))
    }
  },

  // Add friend marker to map
  addFriendMarker: function (friend) {
    if (!friend.location) {
      return
    }

    const position = new google.maps.LatLng(friend.location.lat, friend.location.lng)

    // Remove existing marker if it exists
    if (this.friendMarkers[friend.id]) {
      this.friendMarkers[friend.id].setMap(null)
    }

    // Create friend marker
    const marker = new google.maps.Marker({
      position: position,
      map: this.map,
      title: friend.name,
      icon: {
        url:
          "data:image/svg+xml;charset=UTF-8," +
          encodeURIComponent(`
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="8" fill="#10B981" stroke="#FFFFFF" stroke-width="2"/>
                        <circle cx="12" cy="12" r="3" fill="#FFFFFF"/>
                    </svg>
                `),
        scaledSize: new google.maps.Size(24, 24),
        anchor: new google.maps.Point(12, 12),
      },
      zIndex: 999,
    })

    // Add info window for friend marker
    const infoWindow = new google.maps.InfoWindow({
      content: this.createFriendInfoContent(friend),
    })

    marker.addListener("click", () => {
      this.closeAllInfoWindows()
      infoWindow.open(this.map, marker)
    })

    this.friendMarkers[friend.id] = marker
    this.infoWindows[friend.id] = infoWindow
  },

  // Remove friend marker
  removeFriendMarker: function (friendId) {
    if (this.friendMarkers[friendId]) {
      this.friendMarkers[friendId].setMap(null)
      delete this.friendMarkers[friendId]
    }

    if (this.infoWindows[friendId]) {
      this.infoWindows[friendId].close()
      delete this.infoWindows[friendId]
    }
  },

  // Center map on user's location
  centerOnUser: function () {
    if (this.userMarker) {
      this.map.setCenter(this.userMarker.getPosition())
      this.map.setZoom(16)
    } else if (typeof LocationTracker !== "undefined" && typeof LocationTracker.currentPosition !== "undefined") {
      const position = new google.maps.LatLng(LocationTracker.currentPosition.lat, LocationTracker.currentPosition.lng)
      this.map.setCenter(position)
      this.map.setZoom(16)
    }
  },

  // Close all info windows
  closeAllInfoWindows: function () {
    Object.values(this.infoWindows).forEach((infoWindow) => {
      infoWindow.close()
    })
  },

  // Create info window content for user
  createUserInfoContent: function (location) {
    const timeAgo = this.getTimeAgo(location.timestamp)
    return `
            <div class="p-2">
                <h3 class="font-semibold text-blue-800 mb-2">Your Location</h3>
                <p class="text-sm text-gray-600 mb-1">
                    <i class="fas fa-map-marker-alt mr-1"></i>
                    ${location.lat.toFixed(6)}, ${location.lng.toFixed(6)}
                </p>
                <p class="text-sm text-gray-600 mb-1">
                    <i class="fas fa-crosshairs mr-1"></i>
                    Accuracy: ±${Math.round(location.accuracy)}m
                </p>
                <p class="text-xs text-gray-500">
                    <i class="fas fa-clock mr-1"></i>
                    Updated ${timeAgo}
                </p>
            </div>
        `
  },

  // Create info window content for friend
  createFriendInfoContent: function (friend) {
    const timeAgo = this.getTimeAgo(friend.location.timestamp)
    return `
            <div class="p-2">
                <h3 class="font-semibold text-green-600 mb-2">${friend.name}</h3>
                <p class="text-sm text-gray-600 mb-1">
                    <i class="fas fa-map-marker-alt mr-1"></i>
                    ${friend.location.lat.toFixed(6)}, ${friend.location.lng.toFixed(6)}
                </p>
                <p class="text-sm text-gray-600 mb-1">
                    <i class="fas fa-crosshairs mr-1"></i>
                    Accuracy: ±${Math.round(friend.location.accuracy)}m
                </p>
                <p class="text-xs text-gray-500">
                    <i class="fas fa-clock mr-1"></i>
                    Updated ${timeAgo}
                </p>
                <p class="text-xs text-gray-500 mt-2">
                    <i class="fas fa-share-alt mr-1"></i>
                    Code: ${friend.shareCode}
                </p>
            </div>
        `
  },

  // Get time ago string
  getTimeAgo: (timestamp) => {
    const now = Date.now()
    const diff = now - timestamp

    if (diff < 60000) {
      // Less than 1 minute
      return "just now"
    } else if (diff < 3600000) {
      // Less than 1 hour
      const minutes = Math.floor(diff / 60000)
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`
    } else if (diff < 86400000) {
      // Less than 1 day
      const hours = Math.floor(diff / 3600000)
      return `${hours} hour${hours > 1 ? "s" : ""} ago`
    } else {
      const days = Math.floor(diff / 86400000)
      return `${days} day${days > 1 ? "s" : ""} ago`
    }
  },

  // Callback for Google Maps API
  initCallback: () => {
    console.log("Google Maps API loaded")
  },
}

// Export MapRenderer for use in other files
window.MapRenderer = MapRenderer
