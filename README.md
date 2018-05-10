# Next.js

### Setup

Install dependencies:
`yarn add next react react-dom`

Add Scripts

```json
{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
}
```

The file system is the main API. Every `.js` file becomes a route that is automatically processed and rendered.

Next.js comes with:

* Webpack and babel for auto transipilation and bundling
* Hot code reloading
* Server rendering / indexing of `./pages`
* Static file serving `./static` mapped to `/static`

### CSS

styled-jsx is bundled.

### Images

Place images within a `static` directory in your project's root. You can then reference it with `/static` URLS.

Ex: `/static/my-image.png`
