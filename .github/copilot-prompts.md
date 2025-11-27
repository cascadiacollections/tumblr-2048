# GitHub Copilot Custom Prompts

This directory contains custom prompts and templates for GitHub Copilot Chat.

## Available Prompts

### Code Review Prompt

**Usage**: `/review`

Reviews code for:

- ESLint compliance
- Prettier formatting
- Mobile responsiveness
- Accessibility
- Error handling
- Browser compatibility
- Performance implications

### Feature Development Prompt

**Usage**: `/feature [feature name]`

Guides feature development with:

- Architecture planning
- Code structure following project patterns
- Testing considerations
- Mobile-first design
- Accessibility requirements
- Performance optimization

### Bug Fix Prompt

**Usage**: `/bugfix [issue description]`

Helps debug issues by:

- Analyzing relevant code paths
- Identifying potential causes
- Suggesting fixes with tests
- Checking for similar issues
- Verifying no regressions

### Refactor Prompt

**Usage**: `/refactor [code section]`

Refactors code while:

- Maintaining existing behavior
- Improving readability
- Following modern JavaScript patterns
- Preserving mobile compatibility
- Maintaining accessibility
- Optimizing performance

### Documentation Prompt

**Usage**: `/docs [component/function]`

Generates documentation including:

- Function/class purpose
- Parameter descriptions
- Return value details
- Usage examples
- Edge cases
- Related components

## Custom Instructions

When using Copilot Chat in this project:

1. **Always consider mobile-first design**
2. **Check accessibility impact of UI changes**
3. **Maintain consistency with existing patterns**
4. **Include error handling for API interactions**
5. **Test across different browsers**
6. **Follow ESLint and Prettier configurations**
7. **Keep bundle size minimal**
8. **Document complex logic**

## Example Chat Queries

### Adding a new feature

```
I want to add a pause button to the game.
Consider mobile touch, keyboard accessibility,
and maintain the existing UI style.
```

### Debugging an issue

```
The game doesn't restart properly after winning.
Check GameManager's restart logic and state management.
```

### Refactoring code

```
Refactor keyboard_input_manager.js to use
modern event listeners and clean up legacy code
while maintaining all functionality.
```

### Improving accessibility

```
Review the game UI for ARIA labels and
keyboard navigation. Suggest improvements
for screen reader compatibility.
```

### Performance optimization

```
Analyze the tile animation performance on mobile.
Suggest optimizations for smoother gameplay.
```

## Tips for Better Copilot Interactions

1. **Be specific**: Mention files, functions, or components by name
2. **Provide context**: Reference related code or requirements
3. **Set constraints**: Mention browser support, mobile needs, etc.
4. **Ask for explanations**: Request reasoning behind suggestions
5. **Request tests**: Ask for validation and edge case handling
6. **Iterate**: Refine suggestions through follow-up questions

## Workspace Context

Copilot has access to:

- All source files in `js/`, `style/`, and project root
- Configuration files (`.prettierrc.json`, `eslint.config.js`)
- Documentation (`README.md`, `SETUP.md`, `CONTRIBUTING.md`)
- GitHub Copilot instructions (`.github/copilot-instructions.md`)

Copilot ignores:

- `node_modules/`
- Build artifacts
- Binary files (images, fonts)
- Package lock files
- See `.copilotignore` for full list
