import { createAsyncStore } from "./asyncStore"
import { readWikipediaTitle, readGcWebsiteTitle } from "./asyncActions"

describe("Async store via Redux Toolkit", () => {
  describe("dispatch()", () => {
    it("should become async and return the Promise returned by the thunk", async () => {
      const store = createAsyncStore()

      const dispatchResult = await store.dispatch(readGcWebsiteTitle())
      expect(dispatchResult.payload).toBe("Gianluca Costa's Creations")
    })

    it("should trigger subscribe() for each serializable sub-action", async () => {
      const store = createAsyncStore()

      let concreteDispatchCount = 0

      store.subscribe(() => concreteDispatchCount++)

      await store.dispatch(readWikipediaTitle())
      expect(concreteDispatchCount).toBe(2 * 1)

      await store.dispatch(readGcWebsiteTitle())
      expect(concreteDispatchCount).toBe(2 * 2)

      await store.dispatch(readWikipediaTitle())
      expect(concreteDispatchCount).toBe(2 * 3)
    })

    it("should support any thunk returning a promise", async () => {
      const store = createAsyncStore()

      let ready = false

      const dispatchResult = await store.dispatch(
        () =>
          new Promise((resolve) => {
            setTimeout(() => {
              ready = true
              resolve(92)
            }, 2000)
          })
      )

      expect(ready).toBe(true)
      expect(dispatchResult).toBe(92)
    })

    it("should also return a rejected promise", async () => {
      const store = createAsyncStore()
      let ready = false

      const failingPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          ready = true
          reject(new Error("TestError"))
        }, 2000)
      })

      const dispatchResult = store.dispatch(() => failingPromise)

      dispatchResult
        .then(() => fail())
        .catch((err) => {
          expect(err).toEqual(new Error("TestError"))
          expect(ready).toBe(true)
        })
    })
  })
})
