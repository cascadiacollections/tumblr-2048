# GitHub Copilot Quick Reference

## 🚀 Quick Tips

### Code Completion

- Press `Tab` to accept inline suggestions
- Press `Alt+]` (Windows/Linux) or `Option+]` (Mac) to see next suggestion
- Press `Alt+[` (Windows/Linux) or `Option+[` (Mac) to see previous suggestion
- Press `Ctrl+Enter` to see multiple suggestions in panel

### Chat Commands

- `/explain` - Explain selected code
- `/fix` - Suggest fixes for problems
- `/tests` - Generate test cases
- `/help` - Show available commands
- `@workspace` - Reference entire workspace context

## 💡 Best Practices for This Project

### When Adding Features

```
Add a [feature name] that:
- Follows the existing GameManager pattern
- Includes mobile touch support
- Has proper error handling
- Maintains accessibility standards
- Works on iOS Safari and Chrome
```

### When Fixing Bugs

```
Fix [issue description] in [file.js]:
- Check the [component] class
- Maintain backward compatibility
- Test on mobile devices
- Verify no ESLint errors
```

### When Refactoring

```
Refactor [function/class] to:
- Use modern ES6+ syntax
- Keep the same public API
- Improve readability
- Maintain mobile performance
- Follow project patterns in [related_file.js]
```

### When Documenting

```
Document [function/class]:
- Purpose and responsibility
- Parameters and return values
- Usage examples
- Related components
- Known limitations
```

## 🎯 Project-Specific Context

### Architecture

- **GameManager**: Core game state and logic
- **Grid**: Data structure for tiles
- **HTMLActuator**: DOM updates and Tumblr API
- **KeyboardInputManager**: Input handling
- **LocalScoreManager**: Score persistence

### Code Style

- Single quotes for strings
- 2-space indentation
- Semicolons required
- Use `const`/`let` over `var`
- Follow ESLint rules

### Mobile-First

- Touch event support required
- Test on iOS Safari
- Consider viewport sizes
- Optimize animations
- Minimize DOM updates

### Accessibility

- Keyboard navigation
- ARIA labels
- Screen reader support
- Sufficient contrast
- Focus indicators

## 📝 Common Queries

### "Review this code for mobile compatibility"

Copilot will check:

- Touch event handling
- Viewport responsiveness
- Performance on mobile devices
- CSS animations

### "Make this function more modern"

Copilot will suggest:

- ES6+ syntax
- Arrow functions
- Destructuring
- Template literals
- Modern array methods

### "Add error handling to this API call"

Copilot will add:

- Try-catch blocks
- Fallback values
- User-friendly messages
- Retry logic if appropriate

### "Improve accessibility of this component"

Copilot will suggest:

- ARIA attributes
- Keyboard event handlers
- Focus management
- Semantic HTML
- Screen reader text

## ⚙️ Configuration Files

| File                              | Purpose                          |
| --------------------------------- | -------------------------------- |
| `.github/copilot-instructions.md` | Comprehensive project guidelines |
| `.github/copilot-workspace.yml`   | Workspace structure and patterns |
| `.github/copilot-prompts.md`      | Detailed prompt examples         |
| `.copilotignore`                  | Files excluded from context      |
| `.vscode/settings.copilot.json`   | VS Code Copilot settings         |

## 🔍 Context Optimization

### Included in Context

- All `.js` files in `js/`
- All `.css` files in `style/`
- Configuration files (ESLint, Prettier, etc.)
- Documentation (README, SETUP, etc.)

### Excluded from Context

- `node_modules/`
- Lock files (package-lock.json, yarn.lock)
- Build artifacts
- Binary files (images, fonts)
- Log files

## 🎨 Example Conversations

### Feature Development

**You**: "I want to add an undo button. Consider mobile UI and game state management."

**Copilot**: Will suggest code that:

- Adds state history to GameManager
- Creates a mobile-friendly button
- Includes keyboard shortcut
- Handles edge cases
- Maintains accessibility

### Bug Fix

**You**: "The game doesn't save high score after refresh. Check LocalScoreManager."

**Copilot**: Will analyze:

- localStorage implementation
- State persistence logic
- Timing issues
- Browser compatibility

### Code Review

**You**: "/review this function for performance"

**Copilot**: Will check:

- DOM manipulation frequency
- Event listener efficiency
- Memory leaks
- Mobile performance impact

## 📚 Learn More

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [VS Code Copilot Guide](https://code.visualstudio.com/docs/copilot/overview)
- Project Setup: See `SETUP.md`
- Contributing: See `CONTRIBUTING.md`
