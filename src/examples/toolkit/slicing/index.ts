import { createToolkitStore } from "./toolkitStore";
import { addBear, clearBears } from "./slices/bears";
import { addRanger } from "./slices/rangers";

const store = createToolkitStore();

store.dispatch(addBear("Bubu"));

store.dispatch(addRanger({ name: "Smith", stars: 4 }));

store.dispatch(clearBears());
