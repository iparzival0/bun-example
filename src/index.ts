const server = Bun.serve({
  port: 8000,
  fetch(req) {
    return new Response("Hello world! Ananı sikim Türkiye'ye gelmişiz.");
  },
});

console.log(`Listening on http://localhost:${server.port}...`)