# Feature Specification: Admin Editors Upgrade

**Feature**: 006-admin-editors-upgrade
**Created**: 2026-03-16
**Priority**: P1

## Overview

Mejorar los editores del panel de administración para que usuarios sin conocimientos técnicos puedan gestionar contenido de forma intuitiva, con un editor visual rico (WYSIWYG) para las descripciones de proyectos, edición de slugs en proyectos, y edición de fecha de publicación en artículos del blog. Además, resolver el bug donde la página pública de proyectos no carga hasta hacer F5.

## User Stories

### US1 (P1): Carga confiable de proyectos

**Como** visitante del sitio, **quiero** que la página de proyectos cargue correctamente en la primera visita, **para** poder ver el contenido sin necesidad de refrescar la página manualmente.

### US2 (P1): Editor visual para descripción de proyectos

**Como** administrador sin conocimientos técnicos, **quiero** editar la descripción de los proyectos con un editor visual tipo blog (negrita, cursiva, encabezados, listas, imágenes, links, videos, tablas), **para** poder dar formato rico al contenido sin escribir código.

### US3 (P2): Edición de slug en proyectos

**Como** administrador, **quiero** poder editar el slug (URL) de un proyecto desde el editor, **para** tener control sobre las URLs que se publican y poder corregirlas si es necesario.

### US4 (P2): Edición de fecha de publicación en artículos del blog

**Como** administrador, **quiero** poder editar la fecha de publicación de un artículo del blog, **para** poder antedatar o programar artículos según la estrategia de contenido.

## Functional Requirements

- **FR-001**: La página pública `/proyectos` DEBE cargar los datos de proyectos en la primera visita sin requerir F5
- **FR-002**: La página de detalle `/proyectos/[slug]` DEBE cargar en la primera visita sin requerir F5
- **FR-003**: El editor de proyectos DEBE usar el mismo componente WYSIWYG (WysiwygEditor) que ya usa el editor de blog
- **FR-004**: El campo de descripción del proyecto DEBE soportar: encabezados (H2, H3), negrita, cursiva, tachado, listas con viñetas, listas numeradas, citas, enlaces, imágenes, videos de YouTube, tablas
- **FR-005**: La descripción del proyecto DEBE guardarse como HTML y renderizarse correctamente en la vista pública (ya funciona así con contenido sanitizado del admin)
- **FR-006**: El editor de proyectos DEBE incluir un campo editable de slug con validación de formato (solo minúsculas, números y guiones)
- **FR-007**: Al crear un proyecto, el slug DEBE generarse automáticamente desde el título
- **FR-008**: Al editar un proyecto, el slug DEBE poder modificarse manualmente
- **FR-009**: Si el slug editado ya existe para otro proyecto, DEBE mostrar un error claro
- **FR-010**: El editor de blog DEBE incluir un campo de fecha de publicación editable
- **FR-011**: La fecha de publicación DEBE mostrarse con un selector de fecha (date picker)
- **FR-012**: Al crear un artículo como "publicado", la fecha DEBE ser la actual por defecto
- **FR-013**: Al editar un artículo, la fecha DEBE poder cambiarse a cualquier fecha pasada o futura

## Success Criteria

- **SC-001**: La página `/proyectos` carga en la primera visita sin F5 en el 100% de los casos
- **SC-002**: Un usuario sin conocimientos técnicos puede dar formato al texto de un proyecto usando solo botones visuales
- **SC-003**: Los slugs de proyectos se pueden editar y se validan correctamente
- **SC-004**: La fecha de publicación del blog se puede modificar desde el editor
- **SC-005**: No se introducen regresiones en funcionalidades existentes (blog editor, listados, etc.)

## Edge Cases

- **EC-001**: El slug editado contiene caracteres especiales o espacios — se debe sanitizar o rechazar
- **EC-002**: Dos proyectos con el mismo slug — debe mostrar error, no permitir duplicados
- **EC-003**: Blog post sin fecha de publicación (borrador que nunca se publicó) — al publicar, usar fecha actual
- **EC-004**: Contenido WYSIWYG muy largo con muchas imágenes embebidas — no debe romper el guardado
- **EC-005**: Página de proyectos visitada con conexión lenta — debe mostrar skeletons, luego cargar (no quedarse en blanco)

## Assumptions

- El componente WysiwygEditor basado en TipTap ya existe y funciona correctamente en el blog
- La mutación projects.update ya acepta el campo slug (confirmado en el código)
- La mutación blogPosts.update ya acepta el campo slug (confirmado en el código)
- El campo publishedAt ya existe en el schema de blogPosts como v.optional(v.number())
- La vista pública de proyectos ya renderiza HTML en la descripción

## Out of Scope

- Editor visual para el extracto (excerpt) de proyectos — sigue siendo texto plano
- Editor de slug para artículos del blog (ya funciona en el backend pero no se necesita en la UI por ahora)
- Programación de publicación automática de artículos del blog (solo editar la fecha mostrada)
- Optimización de imágenes embebidas dentro del WYSIWYG
- Migración de descripciones existentes de texto plano a HTML
