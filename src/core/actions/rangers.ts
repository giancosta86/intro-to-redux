import { Ranger } from "../../model/Ranger"

const ADD_RANGER = "rangers/add"

interface AddRangerAction {
  type: typeof ADD_RANGER
  name: string
  stars: number
}

export function addRanger(name: string, stars: number): AddRangerAction {
  return {
    type: ADD_RANGER,
    name,
    stars
  }
}

type RangersAction = AddRangerAction
export type RangersState = ReadonlyArray<Ranger>

export function rangerReducer(
  state: RangersState = [],
  action: RangersAction
): RangersState {
  switch (action.type) {
    case ADD_RANGER:
      return [...state, { name: action.name, stars: action.stars }]

    default:
      return state
  }
}
