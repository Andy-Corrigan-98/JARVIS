# Styling Guidelines

This document outlines the styling standards and best practices for the JARVIS website.

## Technology Stack

- **Material UI**: Primary UI component library and styling framework
- **Theme Configuration**: Custom theme setup in `theme/theme.ts`
- **CSS Variables**: For font configuration
- **Emotion**: MUI's built-in CSS-in-JS solution

## Design System

### Theme Configuration

Our theme is configured in `theme/theme.ts` using Material UI's `createTheme`:

```typescript
// theme/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#e0f2fe',
      main: '#0284c7',
      dark: '#0369a1',
    },
    secondary: {
      main: '#2563eb',
    },
    text: {
      primary: '#111827',
      secondary: '#4b5563',
    },
  },
  typography: {
    fontFamily: 'var(--font-geist-sans)',
    // Typography variants configuration
  },
  components: {
    // Component customization
  },
});
```

### Colors

Colors are defined in our theme's palette configuration:

```typescript
palette: {
  primary: {
    light: '#e0f2fe',
    main: '#0284c7',
    dark: '#0369a1',
  },
  secondary: {
    main: '#2563eb',
  },
  text: {
    primary: '#111827',
    secondary: '#4b5563',
  },
}
```

### Typography

Typography is managed through Material UI's typography system:

```typescript
typography: {
  fontFamily: 'var(--font-geist-sans)',
  h1: {
    fontWeight: 700,
  },
  h2: {
    fontWeight: 700,
  },
  h3: {
    fontWeight: 600,
  },
  // ... other variants
}
```

### Component Customization

Components can be customized globally through the theme:

```typescript
components: {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'none',
        fontWeight: 500,
      },
    },
  },
}
```

## Best Practices

### 1. Theme-First Approach

```tsx
// Prefer using theme properties:
<Box sx={{ 
  color: 'primary.main',
  typography: 'h4',
  mt: 2
}}>

// Over hard-coded values:
<Box sx={{ 
  color: '#0284c7',
  fontSize: '2rem',
  marginTop: '16px'
}}>
```

### 2. Component Styling

```tsx
// Using sx prop for one-off styles
<Box
  sx={{
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    p: 2,
    bgcolor: 'background.paper',
    borderRadius: 1,
  }}
>
  Content
</Box>

// Using styled for reusable components
import { styled } from '@mui/material/styles';

const StyledCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
}));
```

### 3. Responsive Design

```tsx
// Using breakpoints
<Box
  sx={{
    width: {
      xs: '100%',    // 0px+
      sm: '540px',   // 600px+
      md: '720px',   // 900px+
      lg: '960px',   // 1200px+
      xl: '1140px',  // 1536px+
    },
  }}
>
  Responsive container
</Box>
```

### 4. Theme Extensions

When adding new theme values:

```typescript
declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      main: string;
      light: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      main: string;
      light: string;
    };
  }
}
```

## Performance Considerations

1. Use `styled` components for frequently reused styles
2. Memoize dynamic styles when appropriate
3. Use theme tokens instead of hard-coded values
4. Minimize style recalculations

## Accessibility

1. Use semantic MUI components
2. Follow ARIA best practices
3. Ensure sufficient color contrast
4. Support keyboard navigation

## Common Patterns

### 1. Cards

```tsx
<Card>
  <CardContent>
    <Typography variant="h5" component="h2">
      Card Title
    </Typography>
    <Typography color="text.secondary">
      Card content
    </Typography>
  </CardContent>
</Card>
```

### 2. Forms

```tsx
<Box component="form" sx={{ '& > *': { mb: 2 } }}>
  <TextField 
    fullWidth
    label="Label"
    variant="outlined"
  />
</Box>
```

### 3. Navigation

```tsx
<AppBar position="static">
  <Toolbar>
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      Logo
    </Typography>
    <Button color="inherit">Link</Button>
  </Toolbar>
</AppBar>
```

## Style Guide Maintenance

1. Regular theme token audits
2. Documentation of new patterns
3. Performance monitoring
4. Accessibility testing

For more specific styling examples and patterns, refer to the component documentation. 