# Contributing to Tumblr 2048

Thank you for your interest in contributing to Tumblr 2048! We welcome contributions from the community and appreciate your help in making this project better.

## 🎯 Ways to Contribute

- 🐛 **Bug Reports**: Found a bug? Let us know!
- ✨ **Feature Requests**: Have an idea? We'd love to hear it!
- 📝 **Documentation**: Help improve our docs
- 🔧 **Code Contributions**: Submit bug fixes or new features
- 🎨 **UI/UX Improvements**: Make the game more beautiful and user-friendly

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [Git](https://git-scm.com/)
- A modern web browser

### Setting Up Your Development Environment

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:

   ```bash
   git clone https://github.com/YOUR_USERNAME/tumblr-2048.git
   cd tumblr-2048
   ```

3. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

4. **Start the development server**:

   ```bash
   npm start
   # or
   yarn start
   ```

5. **Open your browser** to `http://localhost:8080`

## 🔄 Making Changes

### Branch Naming Convention

Create a descriptive branch name using one of these prefixes:

- `feature/` - New features (e.g., `feature/add-dark-mode`)
- `fix/` - Bug fixes (e.g., `fix/tile-animation-glitch`)
- `docs/` - Documentation updates (e.g., `docs/update-readme`)
- `refactor/` - Code refactoring (e.g., `refactor/modernize-js`)
- `style/` - UI/UX improvements (e.g., `style/improve-mobile-layout`)

### Development Workflow

1. **Create a new branch** from `main`:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following our coding standards:
   - Use modern JavaScript (ES6+)
   - Add comments for complex logic
   - Ensure responsive design for mobile devices
   - Test your changes thoroughly

3. **Test your changes**:
   - Verify the game works correctly
   - Test on different browsers and devices
   - Check for console errors
   - Ensure Tumblr API integration still functions

4. **Commit your changes** with a descriptive message:
   ```bash
   git add .
   git commit -m "feat: add dark mode toggle functionality"
   ```

## 📋 Pull Request Process

### Before Submitting

- [ ] Code follows the project's style guidelines
- [ ] Self-review of your code changes
- [ ] Game functions correctly with your changes
- [ ] No console errors or warnings
- [ ] Responsive design maintained
- [ ] Documentation updated if needed

### Submitting Your PR

1. **Push your branch** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create a Pull Request** with:
   - Clear title describing the change
   - Detailed description of what was changed and why
   - Screenshots/GIFs for UI changes
   - Reference any related issues

3. **Link related issues** using keywords:
   - `Fixes #123` - Closes issue #123
   - `Resolves #456` - Resolves issue #456
   - `Related to #789` - References issue #789

## 🐛 Bug Reports

When reporting bugs, please include:

- **Browser and version**
- **Operating system**
- **Steps to reproduce**
- **Expected behavior**
- **Actual behavior**
- **Screenshots** (if applicable)
- **Console errors** (if any)

## 💡 Feature Requests

When suggesting features:

- **Describe the problem** you're trying to solve
- **Explain your proposed solution**
- **Consider alternatives** you've thought about
- **Add mockups or examples** if helpful

## 📝 Coding Standards

### JavaScript
- Use `const` and `let` instead of `var`
- Use arrow functions for callbacks
- Add JSDoc comments for functions
- Use template literals for string interpolation
- Handle errors gracefully

### CSS
- Use semantic class names
- Maintain responsive design principles
- Consider accessibility (a11y) requirements
- Use CSS custom properties for theming

### HTML
- Use semantic HTML elements
- Ensure proper accessibility attributes
- Validate markup when possible

## 🤝 Code of Conduct

We are committed to providing a welcoming and inclusive environment. Please:

- Be respectful and constructive in discussions
- Welcome newcomers and help them get started
- Focus on what's best for the community
- Show empathy towards other community members

## 📞 Getting Help

- **Questions?** Open a [Discussion](../../discussions)
- **Stuck?** Check existing [Issues](../../issues)
- **Need guidance?** Reach out to maintainers

## 🎉 Recognition

Contributors will be recognized in our [README](README.md) and release notes. Thank you for helping make Tumblr 2048 better!

---

*By contributing to this project, you agree that your contributions will be licensed under the same [MIT License](LICENSE.txt) that covers the project.*
