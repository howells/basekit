# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Package Manager

**ALWAYS use pnpm for package management** - Never use npm or yarn.

## Development Commands

- `pnpm run dev` - Start development server with Turbopack (DO NOT RUN - user handles this)
- `pnpm run build` - Build the Next.js application (DO NOT RUN - user handles this) 
- `pnpm run start` - Start production server (DO NOT RUN - user handles this)
- `pnpm run lint` - Run ESLint to check code quality

**IMPORTANT**: Never run `pnpm run dev`, `pnpm run build`, or `pnpm run start`. The user handles all build and server commands themselves.

## Project Architecture

StencilUI is a React component library built on Next.js that combines patterns from shadcn/ui, Radix UI, and Tailwind UI with Base UI primitives and Tremor-inspired styling.

### Core Technology Stack

- **Base UI**: Provides accessible, unstyled primitives as the foundation
- **Next.js 15**: App router with Turbopack for development
- **React 19**: Latest React features
- **TypeScript**: Full type safety throughout
- **Tailwind CSS 4**: Utility-first styling
- **tailwind-variants**: Type-safe component variants
- **Framer Motion**: Animation library

### Component Architecture - Three-File Structure

Every component follows a strict three-file architecture:

1. **`component.tsx`** - Pure component implementation
   - Contains only component logic and styling
   - Uses tailwind-variants for type-safe variants
   - Exports component, variants, and TypeScript types
   - No configuration or preview code

2. **`config.tsx`** - Pure TypeScript configuration
   - Contains `ComponentConfig` object with metadata
   - Defines props for the prop explorer
   - Includes code examples and documentation
   - No React imports - pure data structure

3. **`example.tsx`** - Preview component for prop explorer
   - Handles prop transformations (e.g., string to icon components)
   - Provides interactive preview functionality
   - Bridges prop explorer system with pure component

### Component Directory Structure

```
src/components/ui/[component]/
├── [component].tsx    # Pure component implementation
├── config.tsx         # Component configuration
└── example.tsx        # Preview component
```

### Component Registry System

- All components must be registered in `src/lib/component-registry.ts`
- Import the `config.tsx` file and add to `componentRegistry` object
- Component categories: "ui", "inputs", "forms", "charts"

### Key Files

- `src/lib/component-config-types.ts` - TypeScript interfaces for component configuration
- `src/lib/component-registry.ts` - Central component registry
- `src/app/[category]/[component]/page.tsx` - Dynamic component documentation pages

### Component Development Workflow

1. **Research existing implementations** from shadcn/ui, Catalyst, etc.
2. **Create pure component** in `component.tsx` using Base UI primitives
3. **Apply Tremor-inspired styling** with tailwind-variants
4. **Create configuration** in `config.tsx` using `ComponentConfig` interface
5. **Build example component** in `example.tsx` for prop explorer
6. **Register component** in `component-registry.ts`
7. **Test prop explorer** functionality and icon handling

### Base UI Integration

- Use Base UI's `useRender` hook and `render` prop instead of custom `asChild` implementations
- Extend `useRender.ComponentProps<"element">` in component interfaces for proper typing
- Example: `<Button render={<a href="/link" />}>Link Button</Button>` instead of `<Button asChild><a href="/link">Link Button</a></Button>`
- This provides better TypeScript support and follows Base UI patterns

### Styling Conventions

- Use Tremor-inspired color palettes (grays, blues, semantic colors)
- Professional spacing and typography scales
- Dark mode support throughout
- tailwind-variants for component variants
- CSS custom properties for theming

### TypeScript Standards

- All components must have proper TypeScript types
- Use `VariantProps<typeof variants>` for variant props
- Extend `useRender.ComponentProps<"element">` for Base UI integration
- Export component, variants, and prop types
- **NEVER use `any` type or force casting with `as any`**
- Use proper type guards and strict typing instead of type assertions
- Prefer Base UI's `render` prop over custom `asChild` implementations

### Component Migration Process

When converting existing components to the new architecture:

1. **Extract component logic** to `component.tsx`
2. **Create configuration** in `config.tsx`
3. **Build example** in `example.tsx`
4. **Update registry** in `component-registry.ts`
5. **Remove old files** and update imports

### Icon Handling

- Icons are transformed in example components from string names to actual components
- Use Lucide React icons when possible
- Handle icon props in example.tsx, not in pure components