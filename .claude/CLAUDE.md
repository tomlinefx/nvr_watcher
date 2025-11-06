# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 application using the App Router architecture, React 19, TypeScript, and Tailwind CSS 4. The project has React Compiler enabled for automatic optimizations.

## Development Commands

```bash
# Development server (runs on http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Architecture

### App Router Structure
- Uses Next.js App Router (not Pages Router)
- All routes are defined in `src/app/` directory
- `src/app/layout.tsx` is the root layout that wraps all pages
- `src/app/page.tsx` is the home page (/)
- Server Components are the default; use `"use client"` directive for Client Components

### Styling
- Tailwind CSS 4 with PostCSS
- Global styles in `src/app/globals.css`
- Custom fonts: Geist Sans and Geist Mono loaded via `next/font/google`
- Font CSS variables: `--font-geist-sans` and `--font-geist-mono`

### TypeScript Configuration
- Path alias: `@/*` maps to `./src/*`
- Strict mode enabled
- Target: ES2017
- JSX: react-jsx (modern JSX transform)

### React Compiler
- Enabled via `reactCompiler: true` in `next.config.ts`
- Automatically optimizes React components for better performance
- No manual memoization needed in most cases

## Key Technologies

- **Next.js 16.0.0** - React framework with App Router
- **React 19.2.0** - Latest React with new features
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **ESLint** - Code linting with Next.js config
