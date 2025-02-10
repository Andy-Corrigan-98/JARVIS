# Component Guidelines

This document outlines the standards and best practices for creating and maintaining components in the JARVIS website.

## Component Organization

Components are organized in the root `components/` directory:

1. **Core Components**
   - Basic, reusable UI elements
   - Built on top of Material UI components
   - Examples: CTA, FeatureCard, Hero
   - Should be highly reusable and customizable

2. **Page Components**
   - Components specific to certain pages/routes
   - Composed of core components and Material UI components
   - Can be more specialized

## Component Structure

```typescript
// Example component structure
import { type FC } from 'react'
import { Box, Typography, Button } from '@mui/material'

interface CTAProps {
  title: string
  description: string
  buttonText: string
  sx?: SxProps
}

export const CTA: FC<CTAProps> = ({
  title,
  description,
  buttonText,
  sx,
}) => {
  return (
    <Box sx={{ textAlign: 'center', py: 8, ...sx }}>
      <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
        {title}
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }}>
        {description}
      </Typography>
      <Button variant="contained" color="primary">
        {buttonText}
      </Button>
    </Box>
  )
}
```

## Naming Conventions

- Component files: PascalCase (e.g., `Button.tsx`)
- Component folders: kebab-case (e.g., `feature-card/`)
- Props interfaces: ComponentNameProps (e.g., `CTAProps`)
- Event handlers: handleEventName (e.g., `handleClick`)

## Props Guidelines

1. Always type props using TypeScript interfaces
2. Use descriptive prop names
3. Include `sx` prop for style customization when needed
4. Document complex props
5. Use children prop for content projection when appropriate

## Styling Guidelines

1. Use Material UI's `sx` prop for component styling
2. Utilize theme tokens for colors, spacing, etc.
3. Create styled components for reusable styles
4. Follow Material Design principles
5. Use Material UI's responsive utilities

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
 * Call-to-action component with customizable title, description, and button text.
 * @component
 * @example
 * ```tsx
 * <CTA
 *   title="Get Started"
 *   description="Join us today"
 *   buttonText="Sign Up"
 * />
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