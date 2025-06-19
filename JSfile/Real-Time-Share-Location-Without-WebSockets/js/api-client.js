/* API Client for handling backend communication
since this is a frontend-only project, i'll simulate API responses */

const ApiClient = {
  baseUrl: "https://apiip.net/api/check?accessKey={7yourapikey}",

  // simulate network delay
  delay: (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms)),

  // get current user's location data
  getCurrentLocation: async function () {
    await this.delay()

    const user = window.Auth.getCurrentUser()
    if (!user) {
      throw new Error("User not authenticated")
    }

    // Return mock location data
    return {
      id: user.id,
      lat: 40.7128 + (Math.random() - 0.5) * 0.01,
      lng: -74.006 + (Math.random() - 0.5) * 0.01,
      timestamp: Date.now(),
      accuracy: Math.floor(Math.random() * 10) + 5,
    }
  },

  // update user's location
  updateLocation: async function (lat, lng, accuracy = 10) {
    await this.delay(200)

    const user = window.Auth.getCurrentUser()
    if (!user) {
      throw new Error("User not authenticated")
    }

    // storing location in localStorage (simulating backend storage)
    const locationData = {
      userId: user.id,
      lat: lat,
      lng: lng,
      accuracy: accuracy,
      timestamp: Date.now(),
    }

    // Get existing locations
    const locations = JSON.parse(localStorage.getItem("userLocations") || "{}")
    locations[user.id] = locationData
    localStorage.setItem("userLocations", JSON.stringify(locations))

    return locationData
  },

  // Get friend's location by share initial only two demo friend, but can be add more dynamically.
  getFriendByCode: async function (shareCode) {
    await this.delay()

    const user = window.Auth.getUserByShareCode(shareCode)
    if (!user) {
      return null
    }

    // Get friend's location
    const locations = JSON.parse(localStorage.getItem("userLocations") || "{}")
    const friendLocation = locations[user.id]

    return {
      id: user.id,
      name: user.name,
      shareCode: user.shareCode,
      location: friendLocation || {
        lat: 40.7128 + (Math.random() - 0.5) * 0.02,
        lng: -74.006 + (Math.random() - 0.5) * 0.02,
        timestamp: Date.now() - Math.random() * 300000, // Random time within last 5 minutes
        accuracy: Math.floor(Math.random() * 15) + 5,
      },
    }
  },

  // Get all friends' locations
  getFriendsLocations: async function () {
    await this.delay()

    const user = window.Auth.getCurrentUser()
    if (!user) {
      throw new Error("User not authenticated")
    }

    // Get user's friends list
    const friendsList = JSON.parse(localStorage.getItem(`friends_${user.id}`) || "[]")
    const locations = JSON.parse(localStorage.getItem("userLocations") || "{}")

    const friendsWithLocations = []

    for (const friendCode of friendsList) {
      const friend = window.Auth.getUserByShareCode(friendCode)
      if (friend) {
        const friendLocation = locations[friend.id]
        friendsWithLocations.push({
          id: friend.id,
          name: friend.name,
          shareCode: friend.shareCode,
          location: friendLocation || {
            lat: 40.7128 + (Math.random() - 0.5) * 0.02,
            lng: -74.006 + (Math.random() - 0.5) * 0.02,
            timestamp: Date.now() - Math.random() * 600000,
            accuracy: Math.floor(Math.random() * 20) + 5,
          },
        })
      }
    }

    return friendsWithLocations
  },

  // Add friend by share code
  addFriend: async function (shareCode) {
    await this.delay()

    const user = window.Auth.getCurrentUser()
    if (!user) {
      throw new Error("User not authenticated")
    }

    const friend = window.Auth.getUserByShareCode(shareCode)
    if (!friend) {
      throw new Error("Friend not found")
    }

    // Add to friends list
    const friendsList = JSON.parse(localStorage.getItem(`friends_${user.id}`) || "[]")
    if (!friendsList.includes(shareCode)) {
      friendsList.push(shareCode)
      localStorage.setItem(`friends_${user.id}`, JSON.stringify(friendsList))
    }

    return friend
  },

  // Remove friend
  removeFriend: async function (shareCode) {
    await this.delay()

    const user = window.Auth.getCurrentUser()
    if (!user) {
      throw new Error("User not authenticated")
    }

    const friendsList = JSON.parse(localStorage.getItem(`friends_${user.id}`) || "[]")
    const updatedList = friendsList.filter((code) => code !== shareCode)
    localStorage.setItem(`friends_${user.id}`, JSON.stringify(updatedList))

    return true
  },

  // Get location history
  getLocationHistory: async function (limit = 50) {
    await this.delay()

    const user = window.Auth.getCurrentUser()
    if (!user) {
      throw new Error("User not authenticated")
    }

    // Generate mock history data
    const history = []
    const now = Date.now()

    for (let i = 0; i < limit; i++) {
      history.push({
        id: window.Utils.generateId(),
        lat: 40.7128 + (Math.random() - 0.5) * 0.05,
        lng: -74.006 + (Math.random() - 0.5) * 0.05,
        timestamp: now - i * 300000, // Every 5 minutes
        accuracy: Math.floor(Math.random() * 15) + 5,
      })
    }

    return history
  },

  // Send location sharing request
  sendSharingRequest: async function (targetUserId) {
    await this.delay()

    // Simulate sending a sharing request
    if (window.Utils) {
      window.Utils.showNotification("Sharing request sent!", "success")
    }
    return true
  },

  // Get sharing requests
  getSharingRequests: async function () {
    await this.delay()

    // Return mock sharing requests
    return [
      {
        id: window.Utils.generateId(),
        fromUser: {
          id: "demo1",
          name: "John Doe",
          shareCode: "DEMO01",
        },
        timestamp: Date.now() - 300000,
        status: "pending",
      },
    ]
  },
}

// Export ApiClient for use in other files
window.ApiClient = ApiClient
