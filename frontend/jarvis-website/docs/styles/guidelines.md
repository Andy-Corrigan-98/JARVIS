# Styling Guidelines

This document outlines the styling standards and best practices for the JARVIS website.

## Technology Stack

- **TailwindCSS**: Primary styling framework
- **CSS Modules**: For complex component-specific styles
- **CSS Variables**: For theme configuration
- **clsx/cn**: For conditional class merging

## Design System

### Colors

```typescript
// tailwind.config.ts color palette
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
  },
  // Add other color schemes
}
```

### Typography

```typescript
// Font scale
fontSize: {
  xs: ['0.75rem', { lineHeight: '1rem' }],
  sm: ['0.875rem', { lineHeight: '1.25rem' }],
  base: ['1rem', { lineHeight: '1.5rem' }],
  lg: ['1.125rem', { lineHeight: '1.75rem' }],
  xl: ['1.25rem', { lineHeight: '1.75rem' }],
  '2xl': ['1.5rem', { lineHeight: '2rem' }],
  // etc.
}
```

### Spacing

Follow the TailwindCSS spacing scale:
- 4px = 1
- 8px = 2
- 16px = 4
- etc.

### Breakpoints

```typescript
screens: {
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1536px',
}
```

## CSS Architecture

### File Structure

```
styles/
├── globals.css     # Global styles and CSS variables
├── components/     # Component-specific styles
├── layouts/        # Layout-specific styles
└── utilities/      # Utility classes and mixins
```

### Class Naming

1. Use TailwindCSS utility classes by default
2. For custom classes, follow this pattern:
   - Component: `component-name`
   - Variant: `component-name--variant`
   - State: `component-name--state`

## Best Practices

### 1. Utility-First Approach

```tsx
// Prefer this:
<div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">

// Over this:
<div className="card">
```

### 2. Component Composition

```tsx
// Button.tsx
const Button = ({ variant = 'primary', size = 'md', className, ...props }) => {
  return (
    <button
      className={cn(
        'rounded-md font-medium focus:outline-none focus:ring-2',
        {
          'bg-blue-500 hover:bg-blue-600': variant === 'primary',
          'bg-gray-500 hover:bg-gray-600': variant === 'secondary',
        },
        {
          'px-4 py-2 text-sm': size === 'sm',
          'px-6 py-3 text-base': size === 'md',
          'px-8 py-4 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    />
  )
}
```

### 3. Responsive Design

```tsx
// Mobile-first approach
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
```

### 4. Dark Mode

```tsx
// Use Tailwind's dark mode utilities
<div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
  Dark mode compatible
</div>
```

### 5. State Management

```tsx
// Handle different states
<button className={cn(
  'px-4 py-2 rounded',
  'bg-blue-500 hover:bg-blue-600',
  'disabled:opacity-50 disabled:cursor-not-allowed',
  'focus:outline-none focus:ring-2 focus:ring-blue-500',
)}>
  Click me
</button>
```

## Performance Considerations

1. Use `@apply` sparingly
2. Purge unused styles in production
3. Minimize custom CSS
4. Use CSS variables for dynamic values

## Accessibility

1. Maintain sufficient color contrast
2. Provide focus styles
3. Support reduced motion
4. Use semantic HTML

## Theme Customization

### CSS Variables

```css
:root {
  --color-primary: theme('colors.blue.500');
  --color-secondary: theme('colors.gray.500');
  /* Add other theme variables */
}
```

### Extended Theme

```typescript
// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
    },
  },
}
```

## Common Patterns

### 1. Cards

```tsx
<div className="rounded-lg bg-white shadow-md p-6 hover:shadow-lg transition-shadow">
  Card content
</div>
```

### 2. Forms

```tsx
<form className="space-y-4">
  <input className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500" />
</form>
```

### 3. Navigation

```tsx
<nav className="flex items-center space-x-4">
  <a className="text-gray-600 hover:text-gray-900">Link</a>
</nav>
```

## Style Guide Maintenance

1. Regular audits of utility usage
2. Documentation of new patterns
3. Performance monitoring
4. Accessibility testing

For more specific styling examples and patterns, refer to the component documentation. 