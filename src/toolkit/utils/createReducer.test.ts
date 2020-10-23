import { createAction, createReducer } from "@reduxjs/toolkit"

describe("createReducer()", () => {
  type State = number

  const add = createAction<number>("ops/add")
  const negate = createAction("ops/negate")

  it("should return a reducer with no switch construct", () => {
    const reducer = createReducer(0, (builder) => {
      builder
        .addCase(add, (state, action) => {
          return state + action.payload
        })

        .addCase(negate, (state) => {
          return -state
        })
    })

    expect(reducer(6, add(9))).toBe(15)
    expect(reducer(8, negate())).toBe(-8)

    expect(reducer(7, { type: "dodo" })).toBe(7)
  })
})
