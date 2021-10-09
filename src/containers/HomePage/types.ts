import type { Action, Reducer } from 'redux'
import type { RootState } from 'store'
import type {
  ERROR_ACTION,
  RESET_ACTION,
  START_ACTION,
  SUCCESS_ACTION,
} from './constant'

export interface Error {
  readonly Response: string
  readonly Error: string
}

export interface Image {
  readonly thumbail_image: string
  readonly main_image: string
  readonly sell_price: string
}
export interface List {
  readonly name: string
  readonly permalink: string
  readonly sell_price: string
  readonly SpreeProductImages: ReadonlyArray<Image>
}

export interface Data {
  readonly statusCode: string
  readonly data: {
    readonly count: string
    readonly rows: ReadonlyArray<List>
  }
}

export interface StartActionPayload {
  readonly s?: string
  readonly limit?: number
  readonly search?: string
  readonly new?: boolean
}

export interface StartAction extends Action<typeof START_ACTION> {
  readonly payload: StartActionPayload
}
export interface SuccessActionPayload {
  readonly data: Data
  readonly new?: boolean
}

export interface SuccessAction extends Action<typeof SUCCESS_ACTION> {
  readonly payload: SuccessActionPayload
}

export interface ErrorActionPayload {
  readonly error: Error
}

export interface ErrorAction extends Action<typeof ERROR_ACTION> {
  readonly payload: ErrorActionPayload
}

export type ResetAction = Action<typeof RESET_ACTION>

export type HomePageAction =
  | StartAction
  | SuccessAction
  | ErrorAction
  | ResetAction

export interface HomePageState extends StartActionPayload {
  readonly loading: boolean
  readonly error?: Error
  readonly data: ReadonlyArray<List>
}

export interface HomePageRootState extends RootState {
  readonly homePage: HomePageState
}

export type HomePageReducer = Reducer<HomePageState, HomePageAction>
