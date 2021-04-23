import {InferActionsTypes} from './redux-store'

let initialState = {
    imgLink: '',
    text: '',
    firstColor: '',
    secondColor: '',
    givenLink: ''
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
        case 'PREVIEW/SET_FIRST_COLOR':
            return {
                ...state, firstColor: action.firstColor
            }
        case 'PREVIEW/SET_SECOND_COLOR':
            return {
                ...state, secondColor: action.secondColor
            }
        case 'PREVIEW/SET_ONCLICK_LINK':
            return {
                ...state, givenLink: action.givenLink
            }
        default:
            return state
    }
}

export const actions = {
    setImgLink: (imgLink: string) => ({type: 'PREVIEW/SET_IMG_LINK', imgLink} as const),
    setText: (text: string) => ({type: 'PREVIEW/SET_TEXT', text} as const),
    setFirstColor: (firstColor: string) => ({type: 'PREVIEW/SET_FIRST_COLOR', firstColor} as const),
    setSecondColor: (secondColor: string) => ({type: 'PREVIEW/SET_SECOND_COLOR', secondColor} as const),
    setOnClickLink: (givenLink: string) => ({type: 'PREVIEW/SET_ONCLICK_LINK', givenLink} as const)
}

export default previewReducer

// Types
type ActionsTypes = InferActionsTypes<typeof actions>

export type InitialStateType = typeof initialState