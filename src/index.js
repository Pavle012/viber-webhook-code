export default {
  async fetch(request, env, ctx) {
    if (request.method === "POST") {
      const body = await request.text();
      console.log("Webhook hit:", body);
      return new Response("ok", { status: 200 });
    }
    return new Response("Viber webhook alive!", { status: 200 });
  },
};
