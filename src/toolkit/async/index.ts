import { readWikipediaTitle, readGcWebsiteTitle } from "./asyncActions"
import { createAsyncStore } from "./asyncStore"

const store = createAsyncStore()

store.dispatch(readGcWebsiteTitle())

store.dispatch(readWikipediaTitle())
