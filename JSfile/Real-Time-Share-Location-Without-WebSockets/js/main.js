const Utils = {
  // Generate a random ID
  generateId: () => Math.random().toString(36).substr(2, 9),

  // Generate a random share code
  generateShareCode: () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let result = ""
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
  },

  // Format timestamp
  formatTime: (timestamp) => new Date(timestamp).toLocaleTimeString(),

  // Format date
  formatDate: (timestamp) => new Date(timestamp).toLocaleDateString(),

  // Calculate distance between two coordinates
  calculateDistance: function (lat1, lng1, lat2, lng2) {
    const R = 6371 // Radius of the Earth in kilometers
    const dLat = this.deg2rad(lat2 - lat1)
    const dLng = this.deg2rad(lng2 - lng1)
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * Math.sin(dLng / 2) * Math.sin(dLng / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    const d = R * c // Distance in kilometers
    return d
  },

  deg2rad: (deg) => deg * (Math.PI / 180),

  // Debounce function
  debounce: (func, wait) => {
    let timeout
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout)
        func(...args)
      }
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  },

  // Show notification
  showNotification: (message, type = "info") => {
    // Create notification element
    const notification = document.createElement("div")
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm ${
      type === "success"
        ? "bg-green-500 text-white"
        : type === "error"
          ? "bg-red-500 text-white"
          : type === "warning"
            ? "bg-yellow-500 text-white"
            : "bg-blue-500 text-white"
    }`
    notification.innerHTML = `
            <div class="flex items-center">
                <i class="fas ${
                  type === "success"
                    ? "fa-check-circle"
                    : type === "error"
                      ? "fa-exclamation-circle"
                      : type === "warning"
                        ? "fa-exclamation-triangle"
                        : "fa-info-circle"
                } mr-2"></i>
                <span>${message}</span>
                <button class="ml-4 text-white hover:text-gray-200" onclick="this.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `

    document.body.appendChild(notification)

    // Auto remove after 5 seconds
    setTimeout(() => {
      if (notification.parentElement) {
        notification.remove()
      }
    }, 5000)
  },
}

// Global error handler
window.addEventListener("error", (event) => {
  console.error("Global error:", event.error)
  Utils.showNotification("An unexpected error occurred", "error")
})

// Global unhandled promise rejection handler
window.addEventListener("unhandledrejection", (event) => {
  console.error("Unhandled promise rejection:", event.reason)
  Utils.showNotification("An unexpected error occurred", "error")
})

// Export Utils for use in other files
window.Utils = Utils
