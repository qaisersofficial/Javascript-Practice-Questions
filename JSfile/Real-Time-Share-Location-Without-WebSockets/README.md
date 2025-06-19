# Real-Time Location Sharing Web Application

A modern, responsive web application for real-time location sharing built with vanilla HTML, CSS (Tailwind), and JavaScript. Share your location securely with friends and family using simple share codes.

## Features

###  Interactive Map
- Google Maps integration with custom markers
- Real-time location updates
- Smooth marker animations
- Custom map styling

### Social Sharing
- Generate unique share codes
- Add friends using their share codes
- View multiple friends' locations simultaneously
- Real-time location synchronization

### Authentication
- User registration and login [local storage]
- Secure session management
- Profile management
- Privacy controls [hashed password but without bcrypt]

### Responsive Design
- Mobile-first approach
- Works on all screen sizes
- Touch-friendly interface
- Progressive Web App ready

### Privacy & Security
- Location sharing controls
- Granular privacy settings
- Secure data handling
- Optional location history

## Getting Started

### Prerequisites
- Modern web browser with geolocation support
- Google Maps API key (for production use)
- Web server (for local development)

## Usage

### Getting Started
1. **Register an Account**
   - Click "Sign Up" on the landing page
   - Fill in your details and create an account
   - Or use demo credentials: \`john@example.com\` / \`password\`

2. **Enable Location Access**
   - Grant location permissions when prompted
   - Your location will appear on the map with a blue marker

3. **Share Your Location**
   - Find your unique share code in the sidebar
   - Share this code with friends and family
   - They can use it to see your location

4. **Add Friends**
   - Enter a friend's share code in the "View Others" section like demo code
   - Their location will appear on the map with a green marker
   - View their details by clicking on their marker

### Dashboard Features
- **Profile Management**: Update your name and view your share code
- **Privacy Settings**: Control location sharing and visibility
- **Location History**: View your past location data
- **Statistics**: See your usage statistics

## File Structure

\`\`\`
Real-Time-Share-Location-Without-WebSockets/
├── index.html              # Landing/Login page
├── map.html               
├── dashboard.html
├── style.css           
├── js/
│   ├── main.js           # Utility functions and common code
│   ├── auth.js           # Authentication logic
│   ├── api-client.js     # API communication (mocked)
│   ├── location-tracker.js # Geolocation handling
│   └── map-renderer.js   # Google Maps integration
└── README.md             # This file
\`\`\`

## Technical Details

### Architecture
- **Frontend-Only**: No backend required for demo purposes
- **Local Storage**: User data and settings stored locally
- **Mock API**: Simulated backend responses for demonstration
- **Modular Design**: Separate modules for different functionalities

### Technologies Used
- **HTML5**: Semantic markup and structure
- **Tailwind CSS**: Utility-first CSS framework
- **Vanilla JavaScript**: No frameworks or libraries
- **Google Maps API**: Interactive mapping
- **Geolocation API**: Browser location services
- **Local Storage**: Client-side data persistence


## Configuration

### Google Maps API Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the Maps JavaScript API
4. Create credentials (API key)
5. Restrict the API key to your domain (recommended)
6. Replace the API key in \`map.html\`:
   ```
   <script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_ACTUAL_API_KEY&callback=MapRenderer.initCallback"></script>
   ```

## Demo Accounts

For testing purposes, the application includes demo accounts:

| Email | Password | Share Code |
|-------|----------|------------|
| john@example.com | password | DEMO01 |
| jane@example.com | password | DEMO02 |

## Security Considerations

⚠️ **Important**: This is a frontend-only demonstration. For production use:

1. **Implement proper backend authentication**
2. **Use HTTPS for all communications**
3. **Validate and sanitize all user inputs**
4. **Implement rate limiting**
5. **Use secure session management**
6. **Encrypt sensitive data**
7. **Implement proper CORS policies**

## Troubleshooting

### Common Issues

**Location not updating**
- Check browser location permissions
- Ensure HTTPS 
- Verify GPS/location services are enabled

**Map not loading**
- Verify Google Maps API key is correct
- Check browser console for errors
- Ensure internet connection is stable

**Friends not appearing**
- Verify share codes are entered correctly
- Check that friends have location sharing enabled
- Refresh the page and try again

### Browser Console Errors
- Open Developer Tools (F12)
- Check Console tab for error messages
- Most issues will be logged with helpful descriptions

## Contributing

This is a demonstration project, but improvements are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request


---

**Note**: The purpose to design this project for practicing and revising my some of javascript topics.
