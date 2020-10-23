import { addBear, clearBears } from "../core/actions/bears"
import { createMerryStore } from "./merryStore"

const store = createMerryStore(96)

store.dispatch(addBear("Bubu"))
store.dispatch(clearBears())
