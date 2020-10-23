import { MiddlewareAPI, Dispatch, Action, Middleware } from "redux"

export function createMerryDispatcher<TAction extends Action>(
  greetingsName: string,
  returnValue: number
): Middleware {
  return (store: MiddlewareAPI) => (next: Dispatch<TAction>) => (
    action: TAction
  ) => {
    console.log(
      `Hi, ${greetingsName}! Time to dispatch an action of type ${action.type}! ^__^`
    )

    next(action)

    console.log("Action passed to the next middleware in the chain! ^__^")

    return returnValue
  }
}
