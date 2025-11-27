# Pug Template Guide for GitHub Copilot

## Project Uses Pug Templates

This project uses Pug (formerly Jade) for HTML templating.

### File Structure

- Source templates: `src/views/*.pug`
- Compiled output: `*.html` (root directory)
- Layouts: `src/views/layouts/`
- Includes: `src/views/includes/`
- Mixins: `src/views/mixins/`

### When Suggesting HTML Changes

**Always suggest Pug syntax instead of HTML:**

❌ Don't suggest:

```html
<div class="container">
  <h1>Title</h1>
</div>
```

✅ Do suggest:

```pug
.container
  h1 Title
```

### Build Process

- Pug files are compiled to HTML automatically
- Watch mode enabled during development
- Changes to `.pug` files trigger rebuild

### Pug Syntax Quick Reference

**Elements:**

```pug
#id-name.class-name
  p Text content
  a(href='url', target='_blank') Link
```

**Loops:**

```pug
- for (let i = 0; i < 4; i++)
  .item= i
```

**Conditionals:**

```pug
if condition
  p Conditional content
else
  p Alternative
```

**Mixins:**

```pug
mixin button(text, type = 'primary')
  button(class=type)= text

+button('Click me')
```

**Includes:**

```pug
include includes/header.pug
```

**Extends:**

```pug
extends layouts/base.pug

block content
  p Page content
```

### Code Generation Guidelines

1. **Always use Pug syntax** for HTML structure
2. **Create reusable mixins** for repeated components
3. **Use includes** for partials like headers/footers
4. **Leverage layouts** for base page structure
5. **Use JavaScript expressions** for dynamic content
6. **Keep indentation consistent** (2 spaces)
7. **Use semantic class names** with BEM methodology
8. **Consider mobile-first** responsive design
9. **Include accessibility** attributes (ARIA labels)
10. **Maintain existing** project patterns

### Example: Game Grid Component

```pug
mixin gameGrid(size)
  .grid-container
    - for (let row = 0; row < size; row++)
      .grid-row
        - for (let col = 0; col < size; col++)
          .grid-cell(data-row=row, data-col=col)

+gameGrid(4)
```

### Integration with Project

- Pug templates compile before server starts
- Hot reload enabled in development
- Formatted with Prettier (prettier-plugin-pug)
- Follows project code style (2 spaces, single quotes)

### Common Patterns in This Project

**Grid Generation:**

```pug
- for (let i = 0; i < 4; i++)
  .grid-row
    - for (let j = 0; j < 4; j++)
      .grid-cell
```

**Script Includes:**

```pug
script(src='path/to/script.js')
```

**External Resources:**

```pug
script(src='https://example.com/lib.js', integrity='sha256-...', crossorigin='anonymous')
```

**Inline Scripts:**

```pug
script.
  var config = {
    key: 'value',
  };
  initApp(config);
```

### Benefits for AI Code Generation

1. **More concise** - Less verbose than HTML
2. **Structured** - Indentation enforces hierarchy
3. **Dynamic** - JavaScript expressions built-in
4. **Maintainable** - Easier to read and modify
5. **DRY** - Mixins and includes reduce repetition

### When to Create New Templates

- New pages: `src/views/pagename.pug`
- Reusable components: `src/views/includes/component.pug`
- Layout variations: `src/views/layouts/layout-name.pug`
- Utility mixins: `src/views/mixins/mixin-name.pug`

### Remember

- Source of truth: `.pug` files in `src/views/`
- Compiled output: `.html` files (don't edit directly)
- Build command: `npm run build:pug`
- Watch command: `npm run build:pug:watch`
- Dev server: `npm run dev` (includes watch)
