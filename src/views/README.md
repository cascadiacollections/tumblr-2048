# Pug Templates

This directory contains Pug template files that are compiled to HTML.

## Structure

```
src/views/
  ├── index.pug          # Main game template
  ├── layouts/           # Layout templates
  │   └── base.pug       # Base layout
  ├── includes/          # Reusable components
  │   ├── head.pug       # HTML head section
  │   ├── scripts.pug    # Script includes
  │   └── game.pug       # Game board component
  └── mixins/            # Pug mixins
      └── grid.pug       # Grid generation mixin
```

## Usage

### Development (with auto-rebuild)

```bash
npm run dev
# or
yarn dev
```

This watches Pug files and rebuilds HTML automatically when changes are detected.

### Manual Build

```bash
npm run build:pug
# or
yarn build:pug
```

### Watch Mode Only

```bash
npm run build:pug:watch
# or
yarn build:pug:watch
```

## Pug Syntax Overview

### Basic Elements

```pug
.class-name
  p#id-name Text content
  a(href='link') Link text
```

### Variables and Interpolation

```pug
- const title = 'My Title';
h1= title
p Hello #{ username }!
```

### Conditionals

```pug
if user
  p Welcome, #{ user.name }
else
  p Please log in
```

### Loops

```pug
each item in items
  li= item
```

### Mixins

```pug
mixin button(text, type)
  button(class=type)= text

+button('Submit', 'primary')
```

## Benefits of Using Pug

1. **Cleaner Syntax** - No closing tags, indentation-based
2. **Reusability** - Mixins and includes for DRY code
3. **Dynamic Content** - JavaScript expressions in templates
4. **Maintainability** - Easier to read and modify
5. **Less Code** - Significantly shorter than HTML

## File Organization Best Practices

- **layouts/** - Base page structures
- **includes/** - Reusable partial templates
- **mixins/** - Reusable template functions
- **pages/** - Individual page templates

## Compiled Output

Pug files in `src/views/` are compiled to HTML files in the project root.

Example:

- `src/views/index.pug` → `index.html`
- `src/views/about.pug` → `about.html`

## Resources

- [Pug Documentation](https://pugjs.org/)
- [Pug Syntax Reference](https://pugjs.org/api/reference.html)
- [Prettier Plugin for Pug](https://github.com/prettier/plugin-pug)
