import cheerio from "cheerio"

export async function handleRequest(request: Request): Promise<Response> {
  const requestUrl = new URL(request.url)
  const id = requestUrl.searchParams.get("id")
  const headers = { "content-type": "application/json;charset=UTF-8" }

  if (!id) {
    return new Response("{}", {
      headers,
    })
  }

  const stockId = id.padStart(5, "0")
  const response = await fetch(
    `https://www.morningstar.com/stocks/xhkg/${stockId}/financials`
  )

  const $ = cheerio.load(await response.text())

  const json = JSON.stringify(
    {
      id: $(".mdc-security-header__name-ticker").text().trim(),
    },
    null,
    2
  )

  return new Response(json, {
    headers,
  })
}
