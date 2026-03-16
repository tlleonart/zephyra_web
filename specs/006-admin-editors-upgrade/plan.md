# Implementation Plan: Admin Editors Upgrade

**Feature**: 006-admin-editors-upgrade
**Date**: 2026-03-16

## Technical Context

- TypeScript 5.7.2, Node.js 20.9+
- Next.js 15.1.0, React 19.0.0
- Convex 1.17.4 (database + file storage + real-time queries)
- TipTap WYSIWYG editor (already installed: @tiptap/react, @tiptap/starter-kit, extensions)

## Constitution Check

| Principle | Status | Notes |
|-----------|--------|-------|
| I. Calidad del Código | PASS | Reutiliza componente existente (WysiwygEditor) |
| II. Estándares de Testing | PASS | Manual testing via quickstart.md |
| III. Consistencia en UX | PASS | Mismo editor visual en blog y proyectos |
| IV. Documentación | PASS | Spec documenta todos los cambios |
| V. Performance | PASS | Fix del bug de carga mejora la experiencia |

## Root Cause Analysis: Projects Loading Bug (US1)

**Symptom**: La página `/proyectos` a veces no muestra contenido hasta hacer F5.

**Analysis**: La página usa `export const dynamic = 'force-dynamic'` en el page.tsx del server component, y el contenido real se carga en `ProyectosPageContent` (client component) usando `useQuery(api.projects.listPublic)`. El problema es que Convex `useQuery` depende de la conexión WebSocket al servidor de Convex. En el primer render del server, el componente se renderiza como HTML sin datos (porque `useQuery` retorna `undefined` en SSR). Luego en el cliente, React necesita hidratar y conectar el WebSocket de Convex. Si hay un timing issue o la hidratación falla silenciosamente, el contenido queda en estado de loading.

**Fix approach**: Envolver el componente que usa Convex queries con el wrapper `ClientOnly` que ya se usa en otros componentes del proyecto (ver fix previo para la homepage), o asegurar que el ConvexProvider está correctamente inicializado para estas rutas. Verificar que el patrón usado en la homepage (que funciona) sea el mismo en proyectos.

## Project Structure

Files to modify:

### US1: Fix carga de proyectos
- `src/app/(public)/proyectos/page.tsx` — Verificar/fix hidratación
- `src/app/(public)/proyectos/[slug]/page.tsx` — Verificar/fix hidratación

### US2: WYSIWYG en proyectos
- `src/features/projects/components/ProjectForm/ProjectForm.tsx` — Reemplazar textarea por WysiwygEditor

### US3: Slug editable en proyectos
- `src/features/projects/components/ProjectForm/ProjectForm.tsx` — Agregar campo de slug

### US4: Fecha editable en blog
- `src/features/blog/components/BlogForm/BlogForm.tsx` — Agregar date picker para publishedAt
- `convex/blogPosts.ts` — Agregar publishedAt a la mutación update

## Dependencies

- WysiwygEditor component: `src/features/blog/components/WysiwygEditor/` (already exists)
- WysiwygEditor CSS: `src/features/blog/components/WysiwygEditor/WysiwygEditor.module.css` (already exists)
- TipTap packages: already in package.json
- Convex mutations: projects.update already accepts slug, blogPosts.update needs publishedAt added
