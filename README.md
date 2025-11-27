# 2048 Cat GIFs 🐱

A modern implementation of the classic 2048 game featuring adorable cat GIFs from Tumblr.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

## ✨ Features

- 🎮 **Classic 2048 Gameplay** - Swipe or use arrow keys to combine tiles
- 🐈 **Cat GIF Integration** - Every tile is an adorable cat GIF from Tumblr
- 📱 **PWA Support** - Install as a standalone app, works offline
- ♿ **Accessibility First** - ARIA labels, keyboard navigation, screen reader support
- 🎨 **Modern CSS** - CSS custom properties, dark mode support, reduced motion
- 🚀 **Vite Build System** - Lightning-fast HMR and optimized production builds
- 🧪 **Comprehensive Testing** - Unit tests (Vitest) and E2E tests (Playwright)
- 📊 **Firebase Analytics** - Performance monitoring and analytics (v12)
- 💾 **Local Storage** - Score persistence across sessions
- 🎯 **TypeScript Ready** - JSDoc annotations with type checking

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0 or Yarn >= 1.22.0

### Installation

```bash
# Clone the repository
git clone https://github.com/cascadiacollections/tumblr-2048.git
cd tumblr-2048

# Install dependencies
yarn install
# or
npm install

# Start development server
yarn dev
# or
npm run dev
```

The game will open automatically at `http://localhost:8080`

## 📦 Available Scripts

### Development

- `yarn dev` - Start Vite development server with HMR
- `yarn serve` - Serve using http-server (legacy)
- `yarn start` - Alias for `yarn dev`

### Building

- `yarn build` - Build for production (includes Pug compilation)
- `yarn build:pug` - Compile Pug templates to HTML
- `yarn build:pug:watch` - Watch and compile Pug templates
- `yarn preview` - Preview production build

### Testing

- `yarn test` - Run unit tests in watch mode
- `yarn test:run` - Run unit tests once
- `yarn test:coverage` - Run tests with coverage report
- `yarn test:ui` - Open Vitest UI
- `yarn test:e2e` - Run E2E tests with Playwright
- `yarn test:e2e:ui` - Open Playwright UI
- `yarn test:e2e:debug` - Debug E2E tests

### Code Quality

- `yarn lint` - Lint JavaScript files
- `yarn lint:fix` - Auto-fix linting issues
- `yarn format` - Format all files with Prettier
- `yarn format:check` - Check formatting
- `yarn validate` - Run format check, lint, and tests

## 🏗️ Project Structure

```
tumblr-2048/
├── .github/              # GitHub configuration
│   ├── copilot-*.md     # AI assistant documentation
│   └── dependabot.yml   # Automated dependency updates
├── .husky/              # Git hooks
├── js/                  # Game logic (vanilla JavaScript)
│   ├── application.js
│   ├── game_manager.js
│   ├── grid.js
│   ├── html_actuator.js
│   ├── keyboard_input_manager.js
│   ├── local_score_manager.js
│   └── tile.js
├── src/views/           # Pug templates
│   └── index.pug
├── style/               # CSS files
│   ├── main.css
│   └── progrecss.css    # Progress bar (modernized 2025)
├── tests/               # Test files
│   ├── unit/           # Vitest unit tests
│   └── e2e/            # Playwright E2E tests
├── manifest.json        # PWA manifest
├── sw.js               # Service worker
├── vite.config.js      # Vite configuration
├── vitest.config.js    # Vitest configuration
├── playwright.config.js # Playwright configuration
└── jsconfig.json       # JavaScript/TypeScript configuration
```

## 🧪 Testing

### Unit Tests

Unit tests are written with Vitest and focus on game logic:

```bash
# Watch mode
yarn test

# Run once
yarn test:run

# With coverage
yarn test:coverage
```

### End-to-End Tests

E2E tests use Playwright to test across browsers:

```bash
# Run all tests
yarn test:e2e

# Interactive UI mode
yarn test:e2e:ui

# Debug mode
yarn test:e2e:debug
```

Tests run on:

- Desktop: Chrome, Firefox, Safari
- Mobile: Pixel 5 (Chrome), iPhone 12 (Safari)

## ♿ Accessibility

This game implements comprehensive accessibility features:

- **ARIA Labels**: All interactive elements properly labeled
- **Keyboard Navigation**: Full keyboard control with arrow keys
- **Screen Readers**: Live regions announce game state changes
- **Focus Management**: Visible focus indicators
- **Reduced Motion**: Respects `prefers-reduced-motion`
- **High Contrast**: Supports `prefers-contrast: high`
- **Dark Mode**: Automatic dark mode via `prefers-color-scheme`

## 📱 Progressive Web App

Install the game as a standalone app:

1. Visit the game in your browser
2. Click the install icon in the address bar
3. Or use "Add to Home Screen" on mobile

PWA features:

- **Offline Support**: Play without an internet connection
- **Fast Loading**: Assets cached for instant startup
- **Native Feel**: Runs in standalone window
- **Auto Updates**: Service worker updates automatically

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
# ... other Firebase config

# Tumblr API
VITE_TUMBLR_API_KEY=your_api_key
VITE_TUMBLR_BLOG_URL=your_blog.tumblr.com
```

### Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

## 🤝 Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests: `yarn validate`
5. Commit with conventional commits: `git commit -m 'feat: add amazing feature'`
6. Push to your fork: `git push origin feature/amazing-feature`
7. Open a Pull Request

Git hooks will automatically:

- Format code with Prettier
- Lint with ESLint
- Run tests before push

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details.

## 🙏 Credits

- **Original 2048**: [Gabriele Cirulli](http://gabrielecirulli.com)
- **Cat GIFs**: Tumblr API
- **Made by**: [Kevin T. Coughlin](https://github.com/kevintcoughlin)
- **With assistance from**: [GitHub Copilot](https://github.com/features/copilot) and Claude Sonnet

### Inspiration

- [1024](https://play.google.com/store/apps/details?id=com.veewo.a1024) by Veewo Studio
- [Threes](http://asherv.com/threes/) by Asher Vollmer

## 🔒 Security

See [SECURITY.md](SECURITY.md) for security policy and reporting vulnerabilities.

## 📚 Documentation

- [Setup Guide](SETUP.md) - Detailed setup instructions
- [Contributing Guide](CONTRIBUTING.md) - How to contribute
- [Security Policy](SECURITY.md) - Security practices
- [Copilot Instructions](.github/copilot-instructions.md) - AI assistant guide

## 🌟 What's New (2025)

This version includes major modernizations:

✅ **No jQuery** - Pure vanilla JavaScript, 30KB+ smaller
✅ **Firebase v12** - Latest version with modular imports
✅ **Vite Build System** - Modern bundling and HMR
✅ **Comprehensive Tests** - Unit and E2E testing
✅ **PWA Support** - Install and play offline
✅ **Accessibility** - WCAG 2.1 AA compliant
✅ **Modern CSS** - CSS Variables, dark mode, reduced motion
✅ **Git Hooks** - Automated code quality checks
✅ **Security** - Environment variables, CSP, .gitattributes

---

**[Play Now!](https://tumblr-2048.netlify.app)** | **[Report Bug](https://github.com/cascadiacollections/tumblr-2048/issues)** | **[Request Feature](https://github.com/cascadiacollections/tumblr-2048/issues)**
