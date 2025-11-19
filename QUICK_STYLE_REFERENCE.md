# 🎨 Quick Style Reference

## CSS Variables Cheat Sheet

### Colors
```scss
--color-dark         // #292828 (main dark)
--color-dark-grey    // #6D6B6B (lighter dark)
--color-accent       // #AFFF9A (green)
--color-contrast     // #E7AB4B (orange)
--color-light-text   // #EFEFEF (light gray)
--color-white        // #ffffff
--color-error        // #ff6b6b (red)
```

### Spacing
```scss
--spacing-xs    // 4px
--spacing-sm    // 8px
--spacing-md    // 16px  ⭐ Most common
--spacing-lg    // 24px
--spacing-xl    // 36px
--spacing-2xl   // 48px
```

### Transitions
```scss
--transition-fast  // 0.2s ease
--transition-base  // 0.3s ease  ⭐ Most common
--transition-slow  // 0.4s ease
```

### Shadows
```scss
--shadow-sm          // Subtle
--shadow-md          // Medium
--shadow-lg          // Large (hover cards)
--shadow-accent      // Orange glow
--shadow-focus       // Green glow (focus)
```

## Common Patterns

### Button/Interactive Element
```scss
.your-button {
  cursor: pointer;
  transition: all var(--transition-base);
  
  &:hover {
    transform: translateY(-2px);
    background-color: var(--color-accent);
  }
  
  &:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }
  
  &:active {
    transform: translateY(0);
  }
}
```

### Card with Hover
```scss
.your-card {
  transition: transform var(--transition-base), 
              box-shadow var(--transition-base);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg);
  }
}
```

### Form Input
```scss
input {
  border: 1px solid var(--color-border);
  transition: border-color var(--transition-base),
              box-shadow var(--transition-base);
  
  &:focus {
    border-color: var(--color-border-focus);
    outline: none;
    box-shadow: var(--shadow-focus);
  }
}
```

### Using Spacing
```scss
// Instead of random numbers
gap: 16px;           // ❌ Don't
gap: var(--spacing-md);  // ✅ Do

padding: 24px;       // ❌ Don't
padding: var(--spacing-lg);  // ✅ Do
```

## Quick Tips

1. **Always use variables** for colors, spacing, transitions
2. **Add cursor: pointer** to clickable elements
3. **Use translateY()** instead of scale() for hovers
4. **Add focus-visible** for accessibility
5. **Use em** for letter-spacing, not %
6. **Add transitions** to interactive elements

That's it! Keep it consistent. 🎨
