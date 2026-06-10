export async function POST(req) {
  const data = await req.json();

  await fetch(process.env.DISCORD_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      content: JSON.stringify(data, null, 2)
    })
  });

  return Response.json({ ok: true });
}
