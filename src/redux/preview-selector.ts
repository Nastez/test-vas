import {AppStateType} from './redux-store'

export const getText = (state: AppStateType) => {
    return state.preview.text
}

export const getImgLink = (state: AppStateType) => {
    return state.preview.imgLink
}

export const getFirstColor = (state: AppStateType) => {
    return state.preview.firstColor
}

export const getSecondColor = (state: AppStateType) => {
    return state.preview.secondColor
}

export const getLinkForRedirect = (state: AppStateType) => {
    return state.preview.linkForRedirect
}

export const getPreviewData = (state: AppStateType) => {
    return state.preview
}