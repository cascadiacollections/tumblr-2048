# Modern Node.js Enlistment

## Prerequisites

- Node.js 18+ (managed via `.nvmrc`)
- npm 9+ or Yarn 1.22+

## Quick Start

### Using npm:

```bash
# Install dependencies
npm install

# Start development server
npm start
```

### Using Yarn:

```bash
# Install dependencies
yarn install

# Start development server
yarn start
```

## Available Scripts

Run with `npm run <script>` or `yarn <script>`:

- `start` - Start development server (alias for `dev`)
- `dev` - Start http-server with auto-open browser on port 8080
- `serve` - Start http-server without auto-opening browser
- `lint` - Run ESLint to check code quality
- `lint:fix` - Run ESLint and automatically fix issues
- `format` - Format code with Prettier
- `format:check` - Check if code is formatted correctly
- `validate` - Run both format check and linting

## Development Tools

### Pug Templates

This project uses [Pug](https://pugjs.org/) for HTML templating.

**Source files:** `src/views/*.pug`  
**Compiled output:** `*.html` (project root)

Pug files are automatically compiled during development:

```bash
npm run build:pug        # One-time build
npm run build:pug:watch  # Watch mode
npm run dev              # Development with watch
```

### ESLint

This project uses ESLint 9 with the new flat config format (`eslint.config.js`). Run `npm run lint` to check for issues or `npm run lint:fix` to automatically fix them.

### Prettier

Code formatting is handled by Prettier. The configuration is in `.prettierrc.json`. Run `npm run format` to format all files.

### EditorConfig

EditorConfig helps maintain consistent coding styles. Make sure your editor has EditorConfig support enabled.

## Node Version Management

This project uses Node.js 24 (as specified in `.nvmrc`). If you use nvm:

```bash
nvm use
```

## VS Code Integration

Recommended extensions are listed in `.vscode/extensions.json`. VS Code will prompt you to install them when you open the project.

### Recommended Extensions

- **GitHub Copilot** - AI-powered code suggestions
- **GitHub Copilot Chat** - Conversational AI assistant
- **Prettier** - Code formatting
- **ESLint** - Code linting
- **Live Server** - Development server
- **EditorConfig** - Consistent coding styles

Workspace settings in `.vscode/settings.json` configure:

- Auto-formatting on save with Prettier
- ESLint auto-fix on save
- Consistent line endings
- GitHub Copilot enabled for all file types

### GitHub Copilot Integration

This project includes comprehensive GitHub Copilot configuration:

- **`.github/copilot-instructions.md`** - Project-specific guidance for Copilot
- **`.github/copilot-workspace.yml`** - Workspace context and patterns
- **`.github/copilot-prompts.md`** - Custom prompts and usage tips
- **`.copilotignore`** - Files to exclude from Copilot context
- **`.vscode/settings.copilot.json`** - Copilot-specific VS Code settings

#### Using Copilot Effectively

1. **Code Generation**: Ask Copilot to follow project patterns and ESLint rules
2. **Code Review**: Use `/review` in Copilot Chat to check code quality
3. **Debugging**: Describe issues with context about which files are affected
4. **Refactoring**: Request modernization while maintaining compatibility
5. **Documentation**: Ask for explanations of complex game logic

See `.github/copilot-prompts.md` for detailed usage examples.

## Code Quality

Before committing changes:

```bash
# Using npm
npm run validate

# Using Yarn
yarn validate
```

This runs both Prettier format checking and ESLint to ensure code quality.

## Package Manager Notes

This project supports both **npm** and **Yarn**. Choose the one you prefer:

- If using **npm**: Use `npm install` and `npm run <script>`
- If using **Yarn**: Use `yarn install` and `yarn <script>`

**Note**: Don't mix package managers in the same project. Stick with one to avoid lockfile conflicts.
