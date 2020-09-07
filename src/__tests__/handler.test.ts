import { handleRequest } from "../handler"
import "jest-fetch-mock"

describe("handler", () => {
  it("should return correct json", async () => {
    const result = await handleRequest()
    const payload = await result.json()
    expect(payload).toStrictEqual({
      heading: expect.any(String),
    })
  })
})
