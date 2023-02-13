import { createBasicStore } from "./basicStore";
import { addBear, clearBears } from "../actions/bears";

const store = createBasicStore();
console.log(store.getState());

store.dispatch(addBear("Bubu"));
console.log(store.getState());

store.dispatch(clearBears());
console.log(store.getState());
