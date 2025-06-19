// Authentication module
const Auth = {
  // Mock user database (in a real app, this would be handled by the backend)
  users: JSON.parse(localStorage.getItem("users") || "[]"),
  currentUser: JSON.parse(localStorage.getItem("currentUser") || "null"),

  // Register a new user
  register: async function (name, email, password) {
    return new Promise((resolve) => {
      // Simulate API delay
      setTimeout(() => {
        // Check if user already exists
        const existingUser = this.users.find((user) => user.email === email)
        if (existingUser) {
          resolve(false)
          return
        }

        // Create new user
        const newUser = {
          id: window.Utils.generateId(),
          name: name,
          email: email,
          password: password, // In a real app, this would be hashed
          shareCode: window.Utils.generateShareCode(),
          createdAt: Date.now(),
        }

        this.users.push(newUser)
        localStorage.setItem("users", JSON.stringify(this.users))
        resolve(true)
      }, 1000)
    })
  },

  // Login user
  login: async function (email, password) {
    return new Promise((resolve) => {
      // Simulate API delay
      setTimeout(() => {
        const user = this.users.find((u) => u.email === email && u.password === password)
        if (user) {
          // Create session token (simplified)
          const token = btoa(
            JSON.stringify({
              userId: user.id,
              email: user.email,
              timestamp: Date.now(),
            }),
          )

          // Store user session
          this.currentUser = {
            id: user.id,
            name: user.name,
            email: user.email,
            shareCode: user.shareCode,
            token: token,
          }

          localStorage.setItem("currentUser", JSON.stringify(this.currentUser))
          localStorage.setItem("authToken", token)
          resolve(true)
        } else {
          resolve(false)
        }
      }, 1000)
    })
  },

  // Logout user
  logout: function () {
    this.currentUser = null
    localStorage.removeItem("currentUser")
    localStorage.removeItem("authToken")
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    const token = localStorage.getItem("authToken")
    const user = localStorage.getItem("currentUser")

    if (!token || !user) {
      return false
    }

    try {
      const tokenData = JSON.parse(atob(token))
      // Check if token is not older than 24 hours
      const isValid = Date.now() - tokenData.timestamp < 24 * 60 * 60 * 1000
      return isValid
    } catch (error) {
      return false
    }
  },

  // Get current user
  getCurrentUser: function () {
    return this.currentUser || JSON.parse(localStorage.getItem("currentUser") || "null")
  },

  // Update user information
  updateUser: function (updatedUser) {
    // Update in users array
    const userIndex = this.users.findIndex((u) => u.id === updatedUser.id)
    if (userIndex !== -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...updatedUser }
      localStorage.setItem("users", JSON.stringify(this.users))
    }

    // Update current user
    this.currentUser = { ...this.currentUser, ...updatedUser }
    localStorage.setItem("currentUser", JSON.stringify(this.currentUser))
  },

  // Get user by share code
  getUserByShareCode: function (shareCode) {
    return this.users.find((user) => user.shareCode === shareCode)
  },
}

// Initialize with some demo users for testing
if (Auth.users.length === 0) {
  const demoUsers = [
    {
      id: "demo1",
      name: "John Doe",
      email: "john@example.com",
      password: "password",
      shareCode: "DEMO01",
      createdAt: Date.now(),
    },
    {
      id: "demo2",
      name: "Jane Smith",
      email: "jane@example.com",
      password: "password",
      shareCode: "DEMO02",
      createdAt: Date.now(),
    },
  ]

  Auth.users = demoUsers
  localStorage.setItem("users", JSON.stringify(demoUsers))
}

// Export Auth for use in other files
window.Auth = Auth
