export async function GET(req: Request): Promise<Response> {
  const { method } = req;
  const { searchParams } = new URL(req.url);
  const param = searchParams.get("id");

  if (method === "GET") {
    try {
      const response = await fetch(
        `https://www.linkedin.com/feed/update/${param}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        return new Response("Failed", {
          status: 200,
        });
      }

      const data = await response.text();
      return new Response(JSON.stringify(data), {
        status: 200,
      });
    } catch (error) {
      console.log(error);
      return new Response("Failed to fetch", {
        status: 400,
      });
    }
  } else {
    return new Response("Not allowed", {
      status: 400,
    });
  }
}
