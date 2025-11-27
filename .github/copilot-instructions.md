# GitHub Copilot Instructions

This file provides context and guidelines for GitHub Copilot when assisting with this project.

## Project Overview

This is a 2048 game clone that uses the Tumblr API to fetch cat GIFs. It's built with vanilla JavaScript, HTML, and CSS.

## Code Style Guidelines

### JavaScript

- Use modern ES6+ syntax where possible, but maintain compatibility with the existing codebase
- Follow ESLint rules defined in `eslint.config.js`
- Use Prettier for consistent formatting (see `.prettierrc.json`)
- Prefer `const` and `let` over `var` for new code
- Use single quotes for strings
- Add semicolons at the end of statements
- Use 2-space indentation

### HTML

- Use semantic HTML5 elements
- Maintain consistent indentation (2 spaces)
- Include appropriate ARIA labels for accessibility

### CSS

- Follow existing naming conventions for classes
- Use kebab-case for class names
- Maintain mobile-first responsive design approach
- Group related properties together

## Architecture

- **GameManager** (`js/game_manager.js`): Core game logic and state management
- **Grid** (`js/grid.js`): Grid data structure and tile management
- **HTMLActuator** (`js/html_actuator.js`): DOM manipulation and rendering
- **KeyboardInputManager** (`js/keyboard_input_manager.js`): Keyboard and touch input handling
- **LocalScoreManager** (`js/local_score_manager.js`): Score persistence using localStorage
- **Tile** (`js/tile.js`): Individual tile representation

## Key Features

- Touch and keyboard controls
- Local score persistence
- Tumblr API integration for cat GIF tiles
- Firebase analytics integration
- Responsive mobile design

## Development Workflow

### Package Managers

This project supports both npm and Yarn. Use the same package manager consistently.

### Available Scripts

- `npm start` / `yarn start` - Start development server
- `npm run lint` / `yarn lint` - Run ESLint
- `npm run lint:fix` / `yarn lint:fix` - Auto-fix linting issues
- `npm run format` / `yarn format` - Format code with Prettier
- `npm run validate` / `yarn validate` - Run format check and lint

### Testing Changes

1. Run linter: `npm run lint` or `yarn lint`
2. Format code: `npm run format` or `yarn format`
3. Start dev server: `npm start` or `yarn start`
4. Test in browser at `http://localhost:8080`

## Common Tasks

### Adding New Features

1. Follow existing code structure and patterns
2. Update relevant manager classes
3. Test across mobile and desktop
4. Ensure accessibility standards are met
5. Run validation before committing

### Fixing Bugs

1. Identify the relevant manager/component
2. Check for related code in dependencies
3. Test fix across different screen sizes
4. Verify no regression in existing features

### API Integration

- Tumblr API calls are made in `html_actuator.js`
- Handle API rate limits gracefully
- Provide fallback UI for failed requests
- Cache responses when appropriate

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

## Accessibility

- Ensure keyboard navigation works
- Add ARIA labels for game state
- Maintain sufficient color contrast
- Test with screen readers

## Performance Considerations

- Minimize DOM manipulation
- Use CSS transforms for animations
- Lazy load images when possible
- Keep bundle size minimal

## Git Workflow

- Write clear, descriptive commit messages
- Reference issues in commits when applicable
- Keep commits focused and atomic
- Test before pushing

## Dependencies

- jQuery 3.7.1 - DOM manipulation (legacy, consider modern alternatives)
- Firebase 8.6.8 - Analytics and performance monitoring
- http-server - Development server
- ESLint 9 - Code linting
- Prettier 3 - Code formatting

## Notes for Copilot

- When suggesting code changes, maintain consistency with existing patterns
- Prioritize readability and maintainability
- Consider mobile performance implications
- Suggest modern JavaScript alternatives when refactoring legacy code
- Always include error handling for API calls
- Document complex logic with clear comments
- Consider accessibility in all UI changes
