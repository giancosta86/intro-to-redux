import { Bear } from "../../model/Bear"

const ADD_BEAR = "bears/add"

interface AddBearAction {
  type: typeof ADD_BEAR
  name: string
}

export function addBear(name: string): AddBearAction {
  return {
    type: ADD_BEAR,
    name
  }
}

const CLEAR_BEARS = "bears/clear"

interface ClearBearsAction {
  type: typeof CLEAR_BEARS
}

export function clearBears(): ClearBearsAction {
  return {
    type: CLEAR_BEARS
  }
}

export type BearsAction = AddBearAction | ClearBearsAction

export function bearReducer(
  state: ReadonlyArray<Bear> = [{ name: "Yogi" }],
  action: BearsAction
): ReadonlyArray<Bear> {
  switch (action.type) {
    case ADD_BEAR:
      return [...state, { name: action.name }]

    case CLEAR_BEARS:
      return state.length ? [] : state

    default:
      return state
  }
}
