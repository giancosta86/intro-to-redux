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

const FAIL_TO_ADD_BEAR = "bears/failToAdd"

interface FailToAddBearAction {
  type: typeof FAIL_TO_ADD_BEAR
  name: string
}

export function failToAddBear(name: string): FailToAddBearAction {
  return {
    type: FAIL_TO_ADD_BEAR,
    name
  }
}

export type BearsAction = AddBearAction | ClearBearsAction | FailToAddBearAction

export function bearReducer(
  state: ReadonlyArray<Bear> = [{ name: "Yogi" }],
  action: BearsAction
): ReadonlyArray<Bear> {
  switch (action.type) {
    case ADD_BEAR:
      return [...state, { name: action.name }]

    case CLEAR_BEARS:
      return state.length ? [] : state

    case FAIL_TO_ADD_BEAR:
      //This is just a simulation: as a matter of fact,
      //reducers should set dedicated state fields
      //in lieu of throwing errors
      throw new Error("Reducer error")

    default:
      return state
  }
}
