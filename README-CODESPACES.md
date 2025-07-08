# GitHub Codespaces Development Guide for Tumblr 2048

This document provides a comprehensive guide for developing the Tumblr 2048 game using GitHub Codespaces.

## Quick Start

### Option 1: One-Click Setup
1. Navigate to the repository on GitHub
2. Click the green "Code" button
3. Select "Codespaces" tab
4. Click "Create codespace on main"
5. Wait for the environment to set up (this may take 2-3 minutes)
6. The development server will start automatically and open in your browser

### Option 2: Using the GitHub CLI
```bash
gh codespace create --repo cascadiacollections/tumblr-2048
```

## Development Workflow

### Automatic Setup
When your Codespace starts, the following happens automatically:
- Node.js 18 environment is configured
- All dependencies are installed via `npm install`
- Development server starts on port 8080
- Browser automatically opens to the running game

### Manual Commands
If you need to restart services manually:

```bash
# Install dependencies
npm install

# Start development server
npm start

# The game will be available at http://localhost:8080
```

### VS Code Integration

#### Available Tasks
Access these through the Command Palette (Ctrl+Shift+P):
- **Install Dependencies**: Runs `npm install`
- **Start Development Server**: Runs `npm start` (default build task - Ctrl+Shift+B)
- **Open in Browser**: Opens the game in a new browser tab
- **Stop Development Server**: Terminates the running server

#### Debugging
1. Open the Debug panel (Ctrl+Shift+D)
2. Select "Launch Chrome" configuration
3. Press F5 to start debugging
4. Set breakpoints in your JavaScript files

#### Live Development
- The Live Server extension is pre-configured to work on port 8080
- Changes to HTML, CSS, and JavaScript files will automatically refresh the browser
- Use Ctrl+S to save and trigger automatic refresh

## Project Structure

```
tumblr-2048/
├── .devcontainer/          # GitHub Codespaces configuration
│   └── devcontainer.json   # Container and environment setup
├── .vscode/                # VS Code workspace settings
│   ├── launch.json         # Debug configurations
│   ├── settings.json       # Editor and extension settings
│   └── tasks.json          # Build and development tasks
├── js/                     # JavaScript game logic
│   ├── application.js      # Main application entry point
│   ├── game_manager.js     # Core game mechanics
│   ├── grid.js             # Game grid management
│   ├── html_actuator.js    # DOM manipulation
│   ├── keyboard_input_manager.js  # Input handling
│   ├── local_score_manager.js     # Score persistence
│   └── tile.js             # Individual tile logic
├── style/                  # CSS stylesheets
│   ├── main.css            # Main game styles
│   └── progrecss.css       # Progress bar styles
├── meta/                   # App metadata and icons
├── index.html              # Main HTML file
├── package.json            # Node.js dependencies and scripts
└── README.md               # Main project documentation
```

## Key Features

### Game Mechanics
- **2048 Game Logic**: Classic sliding tile puzzle
- **Tumblr Integration**: Uses Tumblr API to fetch cat GIFs for tiles
- **Local Storage**: Saves high scores locally
- **Responsive Design**: Works on desktop and mobile devices

### Development Features
- **Hot Reload**: Automatic browser refresh on file changes
- **Debug Support**: Chrome DevTools integration
- **TypeScript Support**: IntelliSense for JavaScript files
- **Linting**: Code quality checks and formatting

## Troubleshooting

### Common Issues

#### Port 8080 Already in Use
If you see an error about port 8080 being in use:
1. Check if another process is using the port: `lsof -i :8080`
2. Kill the process: `kill -9 <PID>`
3. Restart the development server: `npm start`

#### Tumblr API Issues
If images aren't loading:
- Check browser console for CORS errors
- Verify internet connectivity in the Codespace
- The game uses a public Tumblr API endpoint that may have rate limits

#### Dependencies Not Installing
If `npm install` fails:
1. Clear npm cache: `npm cache clean --force`
2. Delete node_modules: `rm -rf node_modules`
3. Reinstall: `npm install`

#### Browser Not Opening Automatically
If the browser doesn't open automatically:
1. Check the Ports tab in VS Code
2. Click the globe icon next to port 8080
3. Or manually navigate to the forwarded URL

### Performance Tips

#### For Faster Startup
- Use the "Prebuilt" Codespace option if available
- Keep your Codespace running between sessions (pause instead of delete)

#### For Better Development Experience
- Use the integrated terminal (Ctrl+`) for command-line operations
- Install the "Thunder Client" extension for API testing
- Use the Git integration in VS Code for version control

## Advanced Configuration

### Custom Extensions
To add more VS Code extensions:
1. Edit `.devcontainer/devcontainer.json`
2. Add extension IDs to the `extensions` array
3. Rebuild the container

### Environment Variables
Add environment variables to `.devcontainer/devcontainer.json`:
```json
{
  "containerEnv": {
    "NODE_ENV": "development",
    "DEBUG": "true"
  }
}
```

### Additional Services
To add databases or other services:
1. Use the `features` section in `devcontainer.json`
2. Or modify the `docker-compose.yml` if needed

## Contributing

When making changes:
1. Create a new branch: `git checkout -b feature/your-feature`
2. Make your changes and test them
3. Commit your changes: `git commit -am "Add new feature"`
4. Push to your fork: `git push origin feature/your-feature`
5. Create a Pull Request on GitHub

## Support

- **Repository Issues**: [GitHub Issues](https://github.com/cascadiacollections/tumblr-2048/issues)
- **Codespaces Documentation**: [GitHub Codespaces Docs](https://docs.github.com/en/codespaces)
- **VS Code Documentation**: [VS Code Docs](https://code.visualstudio.com/docs)

Happy coding! 🎮