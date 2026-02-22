# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal technical blog built with Gatsby, using the @lekoarts/gatsby-theme-minimal-blog theme. Content is written in MDX format. Deployed to Netlify.

## Development Commands

```bash
# Start development server
npm run develop
# or
npm start
# Note: If port 8000 is in use, add -- -p 8001 to use alternate port

# Build for production (cleans cache first, uses prefix-paths for deployment)
npm run build

# Serve production build locally
npm run serve

# Clean Gatsby cache and public directory
npm run clean
```

## Architecture

### Theme Shadowing Pattern

This project uses [Gatsby theme shadowing](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/) to customize the @lekoarts/gatsby-theme-minimal-blog theme. Shadowed files are placed in `src/@lekoarts/gatsby-theme-minimal-blog/` to override theme defaults.

Currently shadowed:
- `src/@lekoarts/gatsby-theme-minimal-blog/texts/` - Hero, about, and bottom text sections
- `src/@lekoarts/gatsby-theme-minimal-blog/components/footer.tsx` - Custom footer with author attribution

### Content Structure

```
content/
├── posts/        # Blog posts (MDX files with frontmatter)
│   └── [post-slug]/
│       ├── index.mdx
│       └── [images].png
└── pages/        # Static pages
    └── about/
        └── index.mdx
```

**Blog Post Format:**
```mdx
---
title: Post Title
date: YYYY-MM-DD
tags:
  - Tag-Name
---

import Comments from "components/Comments";

[Content here]

<Comments />
```

### Component Imports

Webpack is configured with an alias for components. Use either:
- `import Comments from "components/Comments"` (preferred - uses webpack alias)
- `import Comments from "../../../src/components/Comments"` (avoid)

Path mapping in tsconfig.json: `"components/*": ["src/components/*"]`

### TypeScript Configuration

- JSX pragma: `theme-ui` (`jsxImportSource: "theme-ui"`)
- This enables Theme UI's `sx` prop on all JSX elements without explicit imports
- When creating components, you can use `sx` prop for styling directly

### Key Dependencies

- **Gatsby 5** - Static site generator
- **Theme UI** - Styling system (used by the theme)
- **Giscus** - Comment system backed by GitHub Discussions (repo: mljlynch/blog-comments)
- **MDX** - Markdown with JSX support

## Site Configuration

All site metadata and plugin configuration lives in `gatsby-config.ts`:
- Site title, description, URL
- Navigation links
- External social links — add to `externalLinks` array in the `@lekoarts/gatsby-theme-minimal-blog` plugin options; no theme shadowing needed
- Plugin options (sitemap, manifest, feed)

Note: The RSS feed (`/rss.xml`) only generates during `npm run build`, not `npm run develop`. Clicking it in dev will 404 — this is expected.

## Creating New Blog Posts

Use the `/new-post` skill for automated post creation, which will:
- Prompt for title, slug, and tags
- Create the directory structure
- Generate index.mdx with proper frontmatter
- Include the Comments component

Manual steps:
1. Create a new directory: `content/posts/[slug]/`
2. Add `index.mdx` with frontmatter (title, date, tags)
3. Co-locate any images in the same directory
4. Import and add `<Comments />` component at the end if you want comments
5. Run `npm run develop` to preview

## Customizing the Theme

To override any component or section from the minimal-blog theme:
1. Identify the file path in `node_modules/@lekoarts/gatsby-theme-minimal-blog/`
2. Create the same path structure under `src/@lekoarts/gatsby-theme-minimal-blog/`
3. Add your customized version

Example: To override the blog listing template, create `src/@lekoarts/gatsby-theme-minimal-blog/components/blog-list-item.tsx`

## Git Workflow

- **Always push after committing** - User preference is to push all commits to remote immediately
- Repository: `https://github.com/mljlynch/blog.git`

## Deployment

- Hosted on Netlify
- Automatically deploys on push to main branch
- Build command: `npm run build`
