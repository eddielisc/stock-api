import { handleRequest } from "../handler"
import "jest-fetch-mock"

describe("handler", () => {
  it("should return empty json when id not found", async () => {
    const request = new Request("https://xx.com")
    const result = await handleRequest(request)
    const payload = await result.json()
    expect(payload).toStrictEqual({})
  })

  it("should return correct json", async () => {
    const request = new Request("https://xx.com/?id=5")
    const result = await handleRequest(request)
    const payload = await result.json()
    expect(payload).toStrictEqual({
      id: "00005",
    })
  })
})
