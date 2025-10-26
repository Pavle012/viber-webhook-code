export default {
  async fetch(request, env, ctx) {
    // Viber will send a POST request to verify the webhook
    if (request.method === "POST") {
      const body = await request.text();
      console.log("Viber webhook called:", body);
      return new Response("ok", { status: 200 });
    }

    // Optional: reply to GET to show it's alive
    return new Response("Viber webhook running.", { status: 200 });
  },
};
