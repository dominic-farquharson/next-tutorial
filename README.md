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

### Populating <head>

`Head` component is provided to append elements to the `<head>` of the page.

Use the key prop to avoid duplicates. Onlhy the second meta element will be rendered.

```html
import Head from 'next/head'
export default () => (
  <div>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
    </Head>
    <Head>
      <meta name="viewport" content="initial-scale=1.2, width=device-width" key="viewport" />
    </Head>
    <p>Hello world!</p>
  </div>
)
```

### Loading data

`getInitialProps` is an async static method. It can asynchronously fetch anything that resolves to a JavaScript plain Object, which populates props.

For the initial page load, getInitialProps will execute on the server only. getInitialProps will only be executed on the client when navigating to a different route via the Link component or using the routing APIs.

getInitialProps can only be used in pages. Can not be used in child components.

For stateless components

```html
const Page = ({ stars }) =>
  <div>
    Next stars: {stars}
  </div>

Page.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}

export default Page
```

getInitialProps receives a context object with the following properties:

* pathname - path section of URL
* query - query string section of URL parsed as an object
* asPath - String of the actual path (including the query) shows in the browser
* req - HTTP request object (server only)
* res - HTTP response object (server only)
* jsonPageRes - Fetch Response object (client only)
* err - Error object if any error is encountered during the rendering

### Routing

Client side routing can be performed using a `<Link>` component.

```javascript
// pages/index.js
import Link from 'next/link';

export default () => (
  <div>
    Click{' '}
    <Link href="/about">
      <a>here</a>
    </Link>{' '}
    to read more
  </div>
);
```

```javascript
// pages/about.js
export default () => <p>Welcome to About!</p>;
```

Client-side routing behaves exactly like the browser:

* The component is fetched
* If it defines getInitialProps, data is fetched. If an error occurs, `_error.js` is rendered
* After 1 and 2 complete, pushState is performed and the new component is rendered

Each top-level component receives a url property with the following API:

* pathname - String of the current path excluding the query string
* query - Object with the parsed query string. Defaults to {}
* asPath - String of the actual path (including the query) shows in - the browser
* push(url, as=url) - performs a pushState call with the given url
* replace(url, as=url) - performs a replaceState call with the given url

Imperatively

You can also do client-side page transitions using the next/router

```javascript
import Router from 'next/router';

export default () => (
  <div>
    Click <span onClick={() => Router.push('/about')}>here</span> to read more
  </div>
);
```

`With <Link>`

You can add prefetch prop to any <Link> and Next.js will prefetch those pages in the background.

```javascript
<Link prefetch href="/about" />
```
