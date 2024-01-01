
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/chris/Dev/restaurant/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/chris/Dev/restaurant/src/pages/404.js")),
  "component---src-pages-background-js": preferDefault(require("/home/chris/Dev/restaurant/src/pages/background.js")),
  "component---src-pages-index-js": preferDefault(require("/home/chris/Dev/restaurant/src/pages/index.js")),
  "component---src-pages-test-js": preferDefault(require("/home/chris/Dev/restaurant/src/pages/test.js"))
}

