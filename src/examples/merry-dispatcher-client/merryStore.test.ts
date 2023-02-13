import { createMerryStore } from "./merryStore";
import { addBear } from "../core/actions/bears";

describe("Store with custom middleware", () => {
  describe("dispatch()", () => {
    it("should return the value returned by the middleware", () => {
      const store = createMerryStore(198);

      const dispatchReturn = store.dispatch(addBear("Yogi"));

      expect(dispatchReturn).toBe(198);
    });
  });
});
