# Innovation Hub

A personal collection of ideas, prototypes and applications for social housing. The homepage is built around an interactive cutaway house: each room connects to projects about residents, warmer homes, community or housing services.

Built with the existing Next.js 14 App Router, React 18, TypeScript and Tailwind CSS setup. The GitHub/Vercel deployment workflow is unchanged.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. To check the production build:

```bash
npm run build
npm start
```

## Project structure

```text
app/
  page.tsx                  Homepage, featured work, approach and contact
  globals.css               Shared colours, typography and responsive styles
  layout.tsx                Metadata and the skip-to-content link
  icon.svg                  Site icon
  apps/                     Existing long-form project briefs
components/
  HouseExplorer.tsx         Room selection, lighting and optional house movement
  ProjectDirectory.tsx      All projects, with room filters
  ProjectLink.tsx           Shared project links and status indicators
  SiteChrome.tsx            Shared header and footer
  Icon.tsx                  Existing line-icon style
lib/
  projects.ts               Project registry, room definitions and featured IDs
public/
  house-of-ideas.png         Original house illustration
  *.png                     Existing project screenshots
  *.html                    Existing standalone application prototypes
```

## Add or update an idea

Edit `lib/projects.ts`. Every project needs a unique `id`, `name`, `tagline`, `description`, `href`, `status`, `room`, `kind`, `tags` and `iconPath`. Use one of the existing room IDs:

- `welcome`: resident services and journeys
- `warmth`: warmer homes and fuel poverty
- `reading`: books and shared conversations
- `office`: repairs, processes and regulation
- `loft`: foresight and asset intelligence
- `community`: skills, volunteering, collective buying and social value

Statuses are `Live`, `Beta`, `Prototype` or `Concept`. They describe the portfolio entry and are not automated uptime checks. `kind` is `app` for a tool or `brief` for a written idea. HTTPS destinations open in a new tab; local pages and prototypes stay in the same tab.

The house and the project list use this registry, so counts and room groupings update together. Add a `preview` with `src`, meaningful `alt`, `width` and `height` when a real project screenshot is available. Add a project's ID to `featuredProjectIds` to feature it on the homepage.

Room `x`/`y` positions are percentages of the square house artwork. If the image changes, update those positions to match. Smaller screens show numbered hotspots and a separate room selector with full labels.

## Motion and accessibility

House movement responds only to a mouse pointer and can be paused. The preference is stored on the current device when storage is available. The operating system's reduced-motion preference takes priority, disables the house movement control and removes animated transitions. Lighting is a separate optional daylight/evening control. Both modes keep the room buttons readable.

Room controls and filters are native buttons with visible keyboard focus and selected states. A skip link leads to the main content. All projects render as ordinary links before JavaScript loads; the complete directory remains available if interactive features are unavailable. A missing house image also leaves the labelled room selector available.

## Contact placeholder

Contact details intentionally remain a placeholder, as requested. Replace the `contact-placeholder` element in `app/page.tsx` with a real email or profile link when ready. There is no active form or mail sent to a dummy address.

## Existing project pages

The four routes in `app/apps/` retain their content and now share the new header, footer, colours and heading style. The old `/#discovery` anchor still leads to the collection, so existing bookmarks continue to work. Standalone applications in `public/*.html` retain their own designs and behaviour.

## Deployment

Run `npm run build`, review the changes, then commit and push to the GitHub repository connected to Vercel. Vercel continues to use the existing Next.js configuration. No Sites migration or deployment configuration change is needed.

## Artwork

The house illustration was created with the built-in image-generation tool. Its original prompt and asset details are in `docs/house-artwork.md`. Existing application screenshots are retained. Images are served through Next.js Image so Vercel can resize and optimise them for each screen.
