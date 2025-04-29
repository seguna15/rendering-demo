# Notes

## Streaming

- this is a strategy for progressive UI rendering from the server
- Work is broken down into smaller chunks & streamed to the client as soon as they are ready
- allowing parts of the page to be shown right away, without waiting for everything to load
- it is powerful for improving initial load time and handling UI elements that depend on slower data fetches, which would normally hold up the route.
- Streaming is built into the app router

## Server and client composition  patterns

### server components

- These are used for server features like, fetching data, accessing backend resources, - keeping sensitive information (API Keys, tokens etc)
- handling large dependencies server-side so that clients can have less js files to - download.

### client component

- interactivity
- handling event listeners
- managing state and lifecycle effects
- working with browser specific APIs
- implementing custom hooks
- using react class components

## Server only code

- some codes are built specifically to run on server
- like modules or functions that work with multiple libraries, handle env variable, communicate directly with DB or process sensitive info
- seeing as JS codes can be shared between modules  avoid placing server codes in client components as it will increase your load time and create vulnerability by exposing sensitive keys and business logic
- you can use "server-only" package to detect and throw error when you accidentally put server codes in client components.

```bash
npm i server-only 
```

#### Third -party packages

- Server components have introduced an exciting new paradigm in React
- Third-party packages are including the 'use client' directive making it clear where they should run
- Many npm packages have not cut up with this development and they might fail in server components but work in client components

- We can wrap our third party packages in client components
- npm i react-slick slick-carousel @types/react-slick
