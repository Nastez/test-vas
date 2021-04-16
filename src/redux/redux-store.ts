import {combineReducers, createStore} from 'redux'

let rootReducer = combineReducers({

})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never

const store = createStore(rootReducer)

// @ts-ignore
window.__store__ = store

export default store