import { createToolkitStore } from "./toolkitStore"
import { addBear, clearBears } from "./slices/bears"
import { addRanger } from "./slices/rangers"
import { Bear } from "../../model/Bear"
import { Ranger } from "../../model/Ranger"

describe("Store created via Redux Toolkit and slices", () => {
  it("should have correct initial state", () => {
    const store = createToolkitStore()

    const initialState = store.getState()

    expect(initialState).toEqual({
      bears: [{ name: "Yogi" }],
      rangers: []
    })
  })

  it("should support adding a bear", () => {
    const store = createToolkitStore()

    store.dispatch(addBear("Bubu"))

    const actualState = store.getState()

    expect(actualState).toEqual({
      bears: [{ name: "Yogi" }, { name: "Bubu" }],
      rangers: []
    })
  })

  it("should support clearing the bears array", () => {
    const store = createToolkitStore()

    store.dispatch(clearBears())

    const actualState = store.getState()

    expect(actualState).toEqual({
      bears: [],
      rangers: []
    })
  })

  it("should support adding a ranger", () => {
    const store = createToolkitStore()

    store.dispatch(addRanger({ name: "Smith", stars: 4.5 }))

    const actualState = store.getState()

    expect(actualState).toEqual({
      bears: [{ name: "Yogi" }],
      rangers: [{ name: "Smith", stars: 4.5 }]
    })
  })
})
