# Streaming

- this is a strategy for progressive UI rendering from the server
- Work is broken down into smaller chunks & streamed to the client as soon as they are ready
- allowing parts of the page to be shown right away, without waiting for everything to load
- it is powerful for improving initial load time and handling UI elements that depend on slower data fetches, which would normally hold up the route.
- Streaming is built into the app router
