# Tasks: Admin Editors Upgrade

**Input**: Design documents from `/specs/006-admin-editors-upgrade/`
**Prerequisites**: plan.md, spec.md, research.md

## Format: `[ID] [P?] [Story] Description`

---

## Phase 1: Bug Fix — Projects Loading (US1)

**Goal**: Fix the projects page not loading until F5.

- [x] T001 [US1] Diagnose loading issue: compare `src/app/(public)/proyectos/page.tsx` with working pages (homepage, blog) to identify the hydration/Convex pattern difference
- [x] T002 [US1] Fix `src/app/(public)/proyectos/page.tsx` — apply the same pattern used in working public pages (ClientOnly wrapper or proper Convex client initialization)
- [x] T003 [US1] Fix `src/app/(public)/proyectos/[slug]/page.tsx` — same fix as T002
- [x] T004 [US1] Verify both pages load on first visit without F5 using Playwright

**Checkpoint**: Projects pages load reliably on first visit.

---

## Phase 2: WYSIWYG Editor for Projects (US2)

**Goal**: Replace the plain textarea in the project editor with the existing WysiwygEditor component.

- [x] T005 [US2] Update `src/features/projects/components/ProjectForm/ProjectForm.tsx`: import WysiwygEditor from blog components, replace the description textarea with WysiwygEditor component
- [x] T006 [US2] Verify the project detail page (`src/components/public/ProyectoDetailContent.tsx`) already renders HTML description correctly — no changes expected since it already uses innerHTML rendering
- [x] T007 [US2] Test: create a new project with formatted content (headings, bold, lists, images, links) and verify it renders correctly on the public detail page

**Checkpoint**: Project descriptions can be edited with rich text formatting.

---

## Phase 3: Slug Editing for Projects (US3)

**Goal**: Add a slug field to the project editor form.

- [x] T008 [P] [US3] Update `src/features/projects/components/ProjectForm/ProjectForm.tsx`: add slug state, add Input field in sidebar for slug, auto-generate slug from title on create, allow manual editing, validate format (lowercase, numbers, hyphens only)
- [x] T009 [US3] Update `src/features/projects/components/ProjectForm/ProjectForm.tsx`: pass slug to create/update mutations, show error if duplicate slug returned from backend
- [x] T010 [US3] Test: edit a project slug and verify the public page URL updates correctly

**Checkpoint**: Project slugs are editable from the admin editor.

---

## Phase 4: Blog Date Editing (US4)

**Goal**: Allow editing the publication date of blog posts.

- [x] T011 [P] [US4] Update `convex/blogPosts.ts`: add `publishedAt: v.optional(v.number())` to the update mutation args, handle it in the update handler
- [x] T012 [US4] Update `src/features/blog/components/BlogForm/BlogForm.tsx`: add publishedAt state, add date input field in sidebar (datetime-local), convert between timestamp and string format, pass to create/update mutations
- [x] T013 [US4] Test: edit a blog post's publication date and verify it persists correctly

**Checkpoint**: Blog publication dates are editable from the admin editor.

---

## Phase 5: Polish & Validation

- [x] T014 Run `npx tsc --noEmit` to verify no type errors
- [x] T015 Run `npm run build` to verify production build succeeds

---

## Dependencies & Execution Order

- **Phase 1 (US1)**: No dependencies — start immediately (highest priority bug fix)
- **Phase 2 (US2)**: No dependencies on Phase 1 — can run in parallel
- **Phase 3 (US3)**: Depends on Phase 2 (same file: ProjectForm.tsx)
- **Phase 4 (US4)**: Independent of Phases 2-3 (different files). T011 (backend) and T012 (frontend) target different files.
- **Phase 5**: After all phases complete.

### Parallel Opportunities

- T001-T004 (US1) can run in parallel with T005-T007 (US2)
- T011 (backend) can run in parallel with T008 (frontend)
- Phase 4 is independent of Phases 2-3

---

## Notes

- Total: 15 tasks across 5 phases
- WysiwygEditor already exists — no new dependencies needed
- Backend mutations already support slug updates for both projects and blog posts
- Only blogPosts.update needs a new field (publishedAt)
