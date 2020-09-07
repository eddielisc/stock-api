import cheerio from "cheerio"

export async function handleRequest(): Promise<Response> {
  const response = await fetch(
    "https://www.morningstar.com/stocks/xhkg/01883/financials"
  )

  const $ = cheerio.load(await response.text())

  const json = JSON.stringify(
    {
      heading: $(".mdc-security-header__name-ticker").text(),
    },
    null,
    2
  )

  return new Response(json, {
    headers: { "content-type": "application/json;charset=UTF-8" },
  })
}
