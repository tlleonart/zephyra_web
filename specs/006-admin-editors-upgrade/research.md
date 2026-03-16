# Research: Admin Editors Upgrade

**Feature**: 006-admin-editors-upgrade | **Date**: 2026-03-16

## R1: Projects Loading Bug

**Root cause**: Convex `useQuery` returns `undefined` during SSR and before WebSocket connects. The `ProyectosPageContent` and `ProyectoDetailContent` are client components that depend on Convex WebSocket. If there's a hydration mismatch or the ConvexProvider isn't ready when the component mounts, the query stays `undefined` and never resolves.

**Fix**: Check how other public pages (homepage, blog) handle this successfully. The homepage had a similar fix applied previously (`ClientOnly` wrapper or `force-dynamic` + proper Convex client initialization). Apply the same pattern to proyectos pages.

**Key files to compare**:
- `src/app/(public)/page.tsx` (homepage — works)
- `src/app/(public)/proyectos/page.tsx` (broken)

## R2: WysiwygEditor Reuse

**Decision**: Import the existing WysiwygEditor component from `src/features/blog/components/WysiwygEditor/` into ProjectForm. No need to move it to a shared location — the import path is straightforward.

**Current WysiwygEditor features** (already working in BlogForm):
- TipTap with StarterKit (headings H2/H3, bold, italic, strike, lists, blockquote)
- Image insertion (URL prompt)
- Link insertion (URL prompt)
- YouTube embed (URL prompt)
- Table insertion (3x3 with header row)
- Undo/Redo
- Toolbar with all buttons

**No changes needed to WysiwygEditor itself** — just import and use in ProjectForm.

## R3: Slug Field Behavior

**Decision**: Add slug as an Input field in the sidebar of ProjectForm, below the "Publicación" card.

**Create mode**: Auto-generate slug from title (on blur or as user types). Show as read-only initially with an "Edit" button to enable manual editing.
Actually, simpler approach: just show the slug field, auto-fill it when title changes (if slug hasn't been manually edited), let user edit freely.

**Edit mode**: Show current slug, allow editing. Validate on submit.

**Validation rules**:
- Only lowercase a-z, 0-9, and hyphens
- No leading/trailing hyphens
- Max 100 characters
- Uniqueness checked server-side (backend already handles this)

## R4: Blog publishedAt Field

**Decision**: Add a date input field in the BlogForm sidebar, inside the "Publicación" card.

**Backend change needed**: `convex/blogPosts.ts` update mutation currently doesn't accept `publishedAt`. Need to add `publishedAt: v.optional(v.number())` to the args and handle it in the update handler.

**Frontend**: Use a native HTML `<input type="datetime-local">` for the date picker. Convert between Unix timestamp (Convex) and datetime-local string format.

**Create mode**: Default to current date/time when status is "published". Hidden/disabled when draft.
**Edit mode**: Show current publishedAt, allow changing to any date.
