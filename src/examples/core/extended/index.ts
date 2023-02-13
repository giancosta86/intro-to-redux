import { createExtendedStore } from "./extendedStore";
import { addBear, clearBears } from "../actions/bears";
import { addRanger } from "../actions/rangers";

const store = createExtendedStore();

store.dispatch(addBear("Bubu"));

store.dispatch(addRanger("Smith", 3.5));

store.dispatch(clearBears());
