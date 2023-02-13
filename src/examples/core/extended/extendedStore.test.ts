import { createExtendedStore } from "./extendedStore";
import { addBear } from "../actions/bears";
import { addRanger } from "../actions/rangers";

describe("Extended store via Redux core", () => {
  it("should have correct initial state", () => {
    const store = createExtendedStore();

    const initialState = store.getState();

    expect(initialState).toEqual({
      bears: [{ name: "Yogi" }],
      rangers: []
    });
  });

  it("should support adding a bear", () => {
    const store = createExtendedStore();

    store.dispatch(addBear("Bubu"));

    const actualState = store.getState();

    expect(actualState).toEqual({
      bears: [{ name: "Yogi" }, { name: "Bubu" }],
      rangers: []
    });
  });

  it("should support adding a ranger", () => {
    const store = createExtendedStore();

    store.dispatch(addRanger("Smith", 4.5));

    const actualState = store.getState();

    expect(actualState).toEqual({
      bears: [{ name: "Yogi" }],
      rangers: [{ name: "Smith", stars: 4.5 }]
    });
  });

  describe("dispatch()", () => {
    it("should return the dispatched action", () => {
      const store = createExtendedStore();

      const actionToDispatch = addRanger("Smith", 6);

      const dispatchReturnValue = store.dispatch(actionToDispatch);

      expect(dispatchReturnValue).toBe(actionToDispatch);
    });
  });
});
