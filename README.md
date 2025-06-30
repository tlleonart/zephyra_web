This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```
zephyra_web
├─ .eslintignore
├─ .eslintrc.json
├─ components.json
├─ lib
│  └─ prisma.ts
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ prisma
│  ├─ migrations
│  │  ├─ 20250625064532_initial
│  │  │  └─ migration.sql
│  │  ├─ 20250625065551_added_projects
│  │  │  └─ migration.sql
│  │  └─ migration_lock.toml
│  └─ schema.prisma
├─ public
│  ├─ b_corp.webp
│  ├─ desarrollo_sostenible.webp
│  └─ huella_carbono.webp
├─ README.md
├─ src
│  ├─ app
│  │  ├─ actions.ts
│  │  ├─ api
│  │  │  ├─ employees
│  │  │  │  └─ route.ts
│  │  │  └─ send-mail
│  │  │     └─ route.ts
│  │  ├─ blog
│  │  │  └─ [slug]
│  │  │     └─ page.tsx
│  │  ├─ favicon.ico
│  │  ├─ fonts
│  │  │  ├─ GeistMonoVF.woff
│  │  │  └─ GeistVF.woff
│  │  ├─ generated
│  │  ├─ globals.css
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  └─ modules
│     ├─ blog
│     │  ├─ Blog.tsx
│     │  └─ components
│     │     └─ CallToAction.tsx
│     ├─ employee
│     │  └─ services
│     │     └─ employeeService.ts
│     ├─ home
│     │  ├─ components
│     │  │  ├─ BlogCard.tsx
│     │  │  ├─ employee-card.tsx
│     │  │  ├─ index.ts
│     │  │  ├─ OpenContactModalButton.tsx
│     │  │  ├─ ProjectsDropdown.tsx
│     │  │  ├─ sections
│     │  │  │  ├─ BlogSection.tsx
│     │  │  │  ├─ ClientsSection.tsx
│     │  │  │  ├─ index.ts
│     │  │  │  ├─ ProjectsSection.tsx
│     │  │  │  ├─ ServicesSection.tsx
│     │  │  │  ├─ team-section
│     │  │  │  │  ├─ empty-state.tsx
│     │  │  │  │  ├─ error-state.tsx
│     │  │  │  │  ├─ team-call-to-action.tsx
│     │  │  │  │  ├─ team-content.tsx
│     │  │  │  │  ├─ team-section.tsx
│     │  │  │  │  └─ team-skeleton.tsx
│     │  │  │  └─ welcome-section
│     │  │  │     ├─ welcome-background.tsx
│     │  │  │     ├─ welcome-content.tsx
│     │  │  │     ├─ welcome-hero-text.tsx
│     │  │  │     └─ welcome-section.tsx
│     │  │  ├─ ServicesCarousel.tsx
│     │  │  ├─ ServicesCarouselCard.tsx
│     │  │  └─ ServicesCarouselContactButton.tsx
│     │  ├─ Home.tsx
│     │  ├─ images
│     │  │  ├─ background.jpg
│     │  │  ├─ camila.jpeg
│     │  │  ├─ capacitaciones.jpg
│     │  │  ├─ certificaciones.jpg
│     │  │  ├─ cibic.jpg
│     │  │  ├─ cibic.webp
│     │  │  ├─ colectar.png
│     │  │  ├─ colectar.webp
│     │  │  ├─ comunicacion.jpg
│     │  │  ├─ diseño.jpg
│     │  │  ├─ estefania.jpeg
│     │  │  ├─ genero.jpg
│     │  │  ├─ huella.jpg
│     │  │  ├─ informes.jpg
│     │  │  ├─ juana.jpeg
│     │  │  ├─ limansky.jpeg
│     │  │  ├─ limansky.webp
│     │  │  ├─ magdalena.png
│     │  │  ├─ magu.jpeg
│     │  │  ├─ martina.jpeg
│     │  │  ├─ mdg.png
│     │  │  ├─ mdg.webp
│     │  │  ├─ melisa.jpeg
│     │  │  ├─ natalia.jpg
│     │  │  ├─ projects.jpg
│     │  │  ├─ weBanner.jpg
│     │  │  ├─ welcomeBanner.jpeg
│     │  │  └─ zephyra-logo.webp
│     │  └─ index.ts
│     └─ shared
│        ├─ components
│        │  ├─ BackgroundDecoration.tsx
│        │  ├─ carousel.tsx
│        │  ├─ ContactForm.tsx
│        │  ├─ Footer.tsx
│        │  ├─ header
│        │  │  ├─ header-component.tsx
│        │  │  ├─ header-content.tsx
│        │  │  ├─ header-logo.tsx
│        │  │  ├─ header-navigation.tsx
│        │  │  ├─ mobile-menu-button.tsx
│        │  │  ├─ mobile-menu.tsx
│        │  │  └─ navigation-link.tsx
│        │  ├─ index.ts
│        │  ├─ Logo.tsx
│        │  ├─ modals
│        │  │  ├─ BaseModal.tsx
│        │  │  ├─ ContactModal.tsx
│        │  │  └─ ModalContainer.tsx
│        │  ├─ Navbar.tsx
│        │  ├─ Navlink.tsx
│        │  ├─ NewsletterForm.tsx
│        │  └─ ui
│        │     ├─ accordion.tsx
│        │     ├─ Button.tsx
│        │     ├─ dialog.tsx
│        │     ├─ input.tsx
│        │     ├─ label.tsx
│        │     ├─ section.tsx
│        │     ├─ textarea.tsx
│        │     └─ titled-section.tsx
│        ├─ hooks
│        │  └─ useCarousel.tsx
│        ├─ images
│        │  ├─ biotonomi.webp
│        │  ├─ crowe.webp
│        │  ├─ flor_light.jpg
│        │  ├─ flor_light_big.png
│        │  ├─ fundacion-rosario.webp
│        │  └─ light_logo.png
│        ├─ infraestructure
│        │  └─ hooks
│        │     ├─ useContactModal.tsx
│        │     └─ useModal.tsx
│        ├─ lib
│        │  ├─ clients.ts
│        │  ├─ dummy-blog-data.ts
│        │  ├─ employees.ts
│        │  ├─ header-links.ts
│        │  └─ utils.ts
│        ├─ types
│        │  └─ api.types.ts
│        └─ utils
│           └─ errorHandler.ts
├─ tailwind.config.ts
└─ tsconfig.json

```
