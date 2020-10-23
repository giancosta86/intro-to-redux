import { createAction } from "@reduxjs/toolkit"

describe("The action creator returned by createAction()", () => {
  it("should have a toString() method returning the action type", () => {
    const actionCreator = createAction("basicCreator")

    expect(actionCreator.toString()).toBe("basicCreator")
  })

  it("should have a match() method testing the action type", () => {
    const alphaCreator = createAction("alpha")
    const betaCreator = createAction("beta")

    const alphaAction = alphaCreator()

    expect(alphaCreator.match(alphaAction)).toBe(true)
    expect(betaCreator.match(alphaAction)).toBe(false)
  })

  describe("when the preparer is omitted and no type parameter is given", () => {
    it("should have no parameters and return actions with undefined payload", () => {
      const actionCreator = createAction("noArg")

      const action = actionCreator()

      expect(action.type).toBe("noArg")
      expect(action.payload).toBe(undefined)
    })
  })

  describe("when the preparer is omitted but the type parameter is a primitive", () => {
    it("should have one parameter, which becomes the payload of the actions", () => {
      const actionCreator = createAction<number>("primitiveArg")
      const action = actionCreator(90)

      expect(action.type).toBe("primitiveArg")
      expect(action.payload).toBe(90)
    })
  })

  describe("when the preparer is omitted but the type parameter is an object", () => {
    it("should have one parameter, which becomes the payload of the actions", () => {
      const actionCreator = createAction<{ name: string; age: number }>(
        "objectArg"
      )
      const action = actionCreator({ name: "Yogi", age: 34 })

      expect(action.type).toBe("objectArg")
      expect(action.payload).toEqual({ name: "Yogi", age: 34 })
    })
  })

  describe("when the preparer is given", () => {
    it("should have the same parameters as the preparer and return actions whose payload is created by the preparer", () => {
      const actionCreator = createAction(
        "withPreparer",
        (x: number, y: number) => ({
          payload: {
            alpha: x + y,
            beta: x - y,
            gamma: x * y
          }
        })
      )

      const action = actionCreator(3, 2)

      expect(action.type).toBe("withPreparer")
      expect(action.payload).toEqual({
        alpha: 5,
        beta: 1,
        gamma: 6
      })
    })
  })
})
