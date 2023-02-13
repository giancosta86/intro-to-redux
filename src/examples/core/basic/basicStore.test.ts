import { createBasicStore } from "./basicStore";
import { addBear, clearBears, failToAddBear } from "../actions/bears";

describe("Basic store via Redux core", () => {
  it("should have correct initial state", () => {
    const store = createBasicStore();

    const initialState = store.getState();

    expect(initialState).toEqual([{ name: "Yogi" }]);
  });

  it("should support adding a bear", () => {
    const store = createBasicStore();

    store.dispatch(addBear("Bubu"));

    const actualState = store.getState();

    expect(actualState).toEqual([{ name: "Yogi" }, { name: "Bubu" }]);
  });

  it("should support clearing the bears array", () => {
    const store = createBasicStore();

    store.dispatch(clearBears());

    const actualState = store.getState();

    expect(actualState).toEqual([]);
  });

  it("should send events even when the state does not change", () => {
    const store = createBasicStore();

    let notificationCount = 0;

    store.subscribe(() => notificationCount++);

    store.dispatch(clearBears());
    store.dispatch(clearBears());
    store.dispatch(clearBears());

    expect(notificationCount).toBe(3);
  });

  it("should throw the reducer's error on dispatch when the reducer fails", () => {
    const store = createBasicStore();

    expect(() => store.dispatch(failToAddBear("Bubu"))).toThrow(
      new Error("Reducer error")
    );

    expect(store.getState()).toEqual([{ name: "Yogi" }]);
  });
});
