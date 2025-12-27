# dledwith.com
My simple, personal website.

## Stack
- Hosted on GitHub Pages (deployed from this repo)
- Custom domain: dledwith.com
- No hosting cost (just the domain registration)

## Structure
- `_config.yml`: Jekyll/GitHub Pages config (title, base URL, etc.)
- `_layouts/default.html`: global HTML shell (head, navbar, footer)
- `_includes/`: shared fragments such as the navbar and footer
- `index.html`: homepage content
- `pages/`: additional pages (`projects.html`, `cv.html`, `contact.html`)
- `css/` + `js/`: local assets

All HTML documents have YAML front matter so GitHub Pages processes Liquid tags like `{% include %}` and the `relative_url` filter.

### Contact form
GitHub Pages cannot run server-side code, so the old `/api/contact` endpoint has been removed. Until a third-party form service (Formspree, Basin, StaticForms, etc.) is configured, visitors should email `dledwith@gmail.com` directly. When you add a hosted form endpoint, update `pages/contact.html` accordingly.

## Local dev
1. `bundle install`
2. `bundle exec jekyll serve`

That runs the same GitHub Pages build locally, enabling Liquid includes and relative URL filtering.
