import {InferActionsTypes} from './redux-store'

let initialState = {
    imgLink: '',
    text: '',
    colorFill: '',
    gradientFill: ''
}

const previewReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'PREVIEW/SET_IMG_LINK':
            return {
                ...state, imgLink: action.imgLink
            }

        case 'PREVIEW/SET_TEXT':
            return {
                ...state, text: action.text
            }
        case 'PREVIEW/SET_COLOR_FILL':
            return {
                ...state, colorFill: action.colorFill
            }
        case 'PREVIEW/SET_GRADIENT_FILL':
            return {
                ...state, gradientFill: action.gradientFill
            }
        default:
            return state
    }
}

export const actions = {
    setImgLink: (imgLink: string) => ({type: 'PREVIEW/SET_IMG_LINK', imgLink} as const),
    setText: (text: string) => ({type: 'PREVIEW/SET_TEXT', text} as const),
    setColorFill: (colorFill: string) => ({type: 'PREVIEW/SET_COLOR_FILL', colorFill} as const),
    setGradientFill: (gradientFill: string) => ({type: 'PREVIEW/SET_GRADIENT_FILL', gradientFill} as const)
}

export default previewReducer

// Types
type ActionsTypes = InferActionsTypes<typeof actions>

export type InitialStateType = typeof initialState