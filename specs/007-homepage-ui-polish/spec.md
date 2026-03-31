# Feature Specification: Homepage UI Polish

**Feature Branch**: `007-homepage-ui-polish`
**Created**: 2026-03-31
**Status**: Draft
**Input**: User description: "Correcciones UI: distribución armónica de servicios en bloques, cards de equipo con recuadro secundario, y unificación de secciones Clientes y Alianzas"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Distribución armónica de servicios (Priority: P1)

Un visitante navega a la página de servicios y ve los servicios de cada bloque distribuidos de forma visualmente equilibrada. Por ejemplo, si un bloque tiene 4 servicios, se muestran en 2 filas de 2. Si tiene 5 servicios, se muestran 3 arriba y 2 abajo. Si tiene 7 servicios, se muestran 4 arriba y 3 abajo. En todos los casos, las cards ocupan todo el ancho disponible del contenedor, sin dejar espacios vacíos desproporcionados.

**Why this priority**: Es la corrección más visible y afecta múltiples bloques de servicios. Una distribución desbalanceada (3+1 en lugar de 2+2) genera una impresión de diseño poco profesional.

**Independent Test**: Se puede verificar visualmente navegando a cada bloque de servicios y confirmando que la distribución es equilibrada para cualquier cantidad de items.

**Acceptance Scenarios**:

1. **Given** un bloque de servicios con 4 items, **When** el visitante lo ve en desktop, **Then** se muestran en 2 filas de 2 cards, cada card ocupando el mismo ancho.
2. **Given** un bloque de servicios con 5 items, **When** el visitante lo ve en desktop, **Then** se muestran 3 cards en la primera fila y 2 en la segunda, y las 2 cards de abajo se distribuyen ocupando todo el ancho del contenedor.
3. **Given** un bloque de servicios con 3 items, **When** el visitante lo ve en desktop, **Then** se muestran las 3 cards en una sola fila ocupando todo el ancho.
4. **Given** un bloque de servicios con 6 items, **When** el visitante lo ve en desktop, **Then** se muestran en 2 filas de 3 cards.
5. **Given** un bloque con cualquier cantidad de servicios, **When** el visitante lo ve en tablet, **Then** se muestran en 2 columnas con distribución equilibrada.
6. **Given** un bloque con cualquier cantidad de servicios, **When** el visitante lo ve en mobile, **Then** se muestran en 1 columna.

---

### User Story 2 - Cards de equipo con recuadro secundario (Priority: P2)

Un visitante ve la sección de equipo y cada miembro aparece dentro de un recuadro en color `#E5DFD5` (beige cálido, color secundario de marca) y bordes redondeados, dando una apariencia más definida y profesional a cada tarjeta.

**Why this priority**: Mejora la identidad visual de la sección de equipo y alinea las cards con la paleta de marca.

**Independent Test**: Se puede verificar visualmente navegando a la sección de equipo y confirmando que cada card tiene un borde/fondo del color secundario con bordes redondeados.

**Acceptance Scenarios**:

1. **Given** la sección de equipo con miembros cargados, **When** el visitante la ve, **Then** cada card de miembro tiene fondo completo `#E5DFD5` (sin borde de línea).
2. **Given** una card de equipo, **When** se renderiza, **Then** tiene bordes redondeados consistentes con el sistema de diseño.
3. **Given** la sección de equipo, **When** se ve en cualquier tamaño de pantalla (desktop, tablet, mobile), **Then** los recuadros mantienen su apariencia y no se cortan ni deforman.

---

### User Story 3 - Unificación de Clientes y Alianzas (Priority: P2)

Un visitante ve una única sección titulada "Confían en nosotros" con subtítulo "Trabajamos con organizaciones comprometidas con la sostenibilidad". En esta sección aparecen los logos de clientes en una fila superior y los logos de alianzas en una fila inferior, todo bajo un mismo contenedor y título unificado.

**Why this priority**: Simplifica la navegación y da coherencia visual al agrupar contenido relacionado bajo un solo mensaje de confianza.

**Independent Test**: Se puede verificar navegando al homepage y confirmando que existe una sola sección con el título correcto, mostrando clientes arriba y alianzas abajo.

**Acceptance Scenarios**:

1. **Given** el homepage con clientes y alianzas cargados, **When** el visitante llega a la sección, **Then** ve un solo título "Confían en nosotros" y subtítulo "Trabajamos con organizaciones comprometidas con la sostenibilidad".
2. **Given** la sección unificada, **When** se renderiza, **Then** los logos de clientes aparecen en la fila superior y los logos de alianzas en la fila inferior.
3. **Given** que solo existen clientes pero no alianzas (o viceversa), **When** se renderiza la sección, **Then** se muestra solo la fila que tiene datos, sin espacios vacíos ni títulos de fila huérfanos.
4. **Given** que no existen ni clientes ni alianzas, **When** se renderiza el homepage, **Then** la sección no se muestra.
5. **Given** la sección unificada, **When** el visitante hace hover sobre un logo, **Then** el logo pasa de escala de grises a color, manteniendo el comportamiento actual.

---

### Edge Cases

- Bloque de servicios con 1 solo servicio: la card debe ocupar todo el ancho del contenedor.
- Bloque de servicios con 2 servicios: se muestran lado a lado en una fila.
- Sección de equipo sin miembros: la sección no se muestra (comportamiento actual).
- Logos de clientes o alianzas sin imagen válida: no se renderizan (comportamiento actual).

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: El sistema DEBE distribuir las cards de servicios dentro de cada bloque de forma equilibrada, dividiendo los items en filas donde la diferencia entre la fila con más items y la fila con menos items sea como máximo 1.
- **FR-002**: El sistema DEBE hacer que todas las cards de servicios ocupen el ancho completo disponible del contenedor, sin importar cuántas haya por fila.
- **FR-003**: La lógica de distribución de servicios DEBE aplicarse en desktop (3 columnas máx.) y tablet (2 columnas máx.), mientras que en mobile se mantiene 1 columna.
- **FR-004**: Cada card de la sección de equipo DEBE tener fondo completo `#E5DFD5` (beige cálido, color secundario de marca) con bordes redondeados, sin borde de línea.
- **FR-005**: Las secciones de Clientes y Alianzas DEBEN fusionarse en una única sección con título "Confían en nosotros" y subtítulo "Trabajamos con organizaciones comprometidas con la sostenibilidad".
- **FR-006**: En la sección unificada, los logos de clientes DEBEN aparecer en la fila superior y los de alianzas en la fila inferior.
- **FR-007**: La sección unificada DEBE mantener el efecto hover actual de los logos (escala de grises a color).
- **FR-008**: La sección unificada NO DEBE mostrarse si no existen ni clientes ni alianzas.

## Clarifications

### Session 2026-03-31

- Q: Color secundario exacto de la marca para el recuadro de cards de equipo → A: `#E5DFD5` (beige cálido)
- Q: Estilo del recuadro en cards de equipo (borde, fondo, o ambos) → A: Fondo completo `#E5DFD5` con bordes redondeados, sin borde de línea

## Assumptions

- **Color secundario de la marca**: El color secundario de la marca es `#E5DFD5` (beige cálido), confirmado por el equipo de Zephyra.
- **Distribución de filas en desktop**: Para bloques con más de 3 servicios, se asume que el máximo de columnas en desktop es 3 (consistente con el diseño actual), y se balancea entre filas. Por ejemplo: 4 items = 2+2, 5 items = 3+2, 7 items = 4+3.
- **Navegación**: Los anchor links actuales `#clientes` y `#alianzas` se unificarán en un solo anchor para la sección fusionada.
- **Datos**: Los clientes y alianzas seguirán viniendo de fuentes de datos separadas; solo cambia la presentación visual.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Todos los bloques de servicios muestran cards distribuidas de forma equilibrada, sin filas con una sola card cuando hay más de 3 items en el bloque.
- **SC-002**: El 100% de las cards de equipo muestran el recuadro con color secundario y bordes redondeados en todos los breakpoints.
- **SC-003**: La sección "Confían en nosotros" reemplaza completamente las dos secciones anteriores, mostrando un solo título y subtítulo.
- **SC-004**: Los logos de clientes y alianzas mantienen su interactividad (hover, enlaces) en la sección unificada.
- **SC-005**: No hay regresiones visuales en mobile y tablet para ninguna de las tres correcciones.
