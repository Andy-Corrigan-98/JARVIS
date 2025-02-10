# Component Guidelines

This document outlines the standards and best practices for creating and maintaining components in the JARVIS website.

## Component Organization

Components are organized into three main categories:

1. **UI Components** (`components/ui/`)
   - Basic, reusable UI elements
   - Examples: Button, Input, Card
   - Should be highly reusable and customizable

2. **Layout Components** (`components/layout/`)
   - Page structure components
   - Examples: Header, Footer, Sidebar
   - Should be consistent across pages

3. **Feature Components** (`components/features/`)
   - Feature-specific components
   - Examples: UserProfile, DocumentViewer
   - Can be more specialized and less reusable

## Component Structure

```typescript
// Example component structure
import { type FC } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
}

export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
}) => {
  return (
    <button
      className={cn(
        'base-styles',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </button>
  )
}
```

## Naming Conventions

- Component files: PascalCase (e.g., `Button.tsx`)
- Component folders: kebab-case (e.g., `user-profile/`)
- Props interfaces: ComponentNameProps (e.g., `ButtonProps`)
- Event handlers: handleEventName (e.g., `handleClick`)

## Props Guidelines

1. Always type props using TypeScript interfaces
2. Use descriptive prop names
3. Provide default values where appropriate
4. Document complex props
5. Use children prop for content projection

## Styling Guidelines

1. Use TailwindCSS for styling
2. Utilize the `cn()` utility for class merging
3. Create consistent variants
4. Support className prop for customization
5. Follow responsive design principles

## Component Documentation

Each component should include:

1. JSDoc comments describing purpose
2. Props documentation
3. Usage examples
4. Notes about variants/states
5. Any important considerations

Example:
```typescript
/**
 * Primary button component with multiple variants and sizes.
 * @component
 * @example
 * ```tsx
 * <Button variant="primary" size="md">
 *   Click me
 * </Button>
 * ```
 */
```

## Best Practices

1. **Composition Over Inheritance**
   - Prefer component composition
   - Use higher-order components sparingly

2. **Single Responsibility**
   - Each component should do one thing well
   - Split complex components into smaller ones

3. **Performance**
   - Use React.memo for expensive components
   - Optimize re-renders
   - Lazy load when appropriate

4. **Accessibility**
   - Include proper ARIA attributes
   - Ensure keyboard navigation
   - Test with screen readers

5. **Testing**
   - Write unit tests for components
   - Test different states and variants
   - Include accessibility tests

## Error Handling

1. Provide meaningful error states
2. Use error boundaries where appropriate
3. Handle loading states gracefully
4. Validate props with TypeScript

## State Management

1. Use local state for UI-specific state
2. Lift state up when needed
3. Consider using context for shared state
4. Document state dependencies

## Component Review Checklist

- [ ] TypeScript types are complete
- [ ] Props are properly documented
- [ ] Component is accessible
- [ ] Tests are written
- [ ] Styling follows guidelines
- [ ] Performance is considered
- [ ] Error states are handled
- [ ] Documentation is complete

For more specific guidelines about particular component types, refer to their respective documentation in this directory. 