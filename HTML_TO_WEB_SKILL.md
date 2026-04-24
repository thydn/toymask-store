# 🛠️ SKILL: html-to-web (The Fidelity Engine)

## 📌 CORE PRINCIPLE
**Absolute Fidelity:** The design system, layout, and CSS classes defined in the source HTML/CSS files are the "Source of Truth." The AI must replicate them 100% in the final web application without any unauthorized creative changes.

## 🔑 PRE-REQUISITES
- **Environment:** File `.env.skill` must be populated with:
  - `SKILL_GITHUB_TOKEN`: For automated repo creation/push.
  - `SKILL_SANITY_TOKEN`: For automated CMS project initialization.
  - `SKILL_VERCEL_TOKEN`: For automated deployment and environment syncing.

## 🔄 WORKFLOW PHASES

### Phase 1: Deep Extraction
- Read `index.html`, `products.html`, and related CSS files.
- Map all design tokens: Colors, Typography, Spacing, and Custom Utilities (e.g., `hard-shadow`, `stroke-text`).
- Identify dynamic data clusters for CMS mapping.

### Phase 2: Framework Foundation
- Initialize Next.js with Tailwind CSS v4.
- Inject original CSS tokens into `globals.css`.
- Ensure strict adherence to the original box model and grid systems.

### Phase 3: CMS Schema Derivation
- Generate Sanity schemas based on HTML content attributes.
- Ensure 1:1 mapping between HTML nodes and CMS fields.

### Phase 4: JSX Cloning
- Migrate HTML structures directly to React Components.
- Use identical class names and nesting patterns from the source.

### Phase 5: Data Binding
- Replace static placeholders with GROQ query results.
- Implement `ProductCard`, `CategoryList`, etc., as dynamic mirrors of the original HTML.

### Phase 6: Automated Infrastructure
- Use `gh` CLI to create and push to a new GitHub repo.
- Configure `next.config.ts` for image domain whitelisting.
- Use `vercel` CLI to link and deploy the project.

### Phase 7: Pixel-Perfect Validation
- Compare live deployment with original HTML screenshots.
- Zero deviation allowed in layout, padding, or typography weight.

---
*Created on 2026-04-24 by Antigravity AI Assistant.*
