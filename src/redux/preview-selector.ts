import {AppStateType} from './redux-store'

export const getText = (state: AppStateType) => {
    return state.preview.text
}

export const getImgLink = (state: AppStateType) => {
    return state.preview.imgLink
}

export const getColorFill = (state: AppStateType) => {
    return state.preview.colorFill
}

export const getGradientFill = (state: AppStateType) => {
    return state.preview.gradientFill
}