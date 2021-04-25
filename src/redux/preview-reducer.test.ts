import previewReducer, {actions} from './preview-reducer'

let state = {
    imgLink: '',
    text: '',
    firstColor: '',
    secondColor: '',
    linkForRedirect: ''
}

test('imgLink must set new value', () => {
    // 1. test data
    let action = actions.setImgLink('https://images.theconversation.com/files/319375/original/file-20200309-118956-1cqvm6j.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop')

    // 2. action
    let newState = previewReducer(state, action)

    // 3. expectation
    expect(newState.imgLink).toBe('https://images.theconversation.com/files/319375/original/file-20200309-118956-1cqvm6j.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop')
})

test('text must set new value', () => {
    // 1. test data
    let action = actions.setText('Hi')

    // 2. action
    let newState = previewReducer(state, action)

    // 3. expectation
    expect(newState.text).toBe('Hi')
})


test('firstColor must set new value', () => {
    // 1. test data
    let action = actions.setFirstColor('red')

    // 2. action
    let newState = previewReducer(state, action)

    // 3. expectation
    expect(newState.firstColor).toBe('red')
})

test('secondColor must set new value', () => {
    // 1. test data
    let action = actions.setSecondColor('blue')

    // 2. action
    let newState = previewReducer(state, action)

    // 3. expectation
    expect(newState.secondColor).toBe('blue')
})

test('linkForRedirect must set new value', () => {
    // 1. test data
    let action = actions.setOnClickLink('https://www.youtube.com/')

    // 2. action
    let newState = previewReducer(state, action)

    // 3. expectation
    expect(newState.linkForRedirect).toBe('https://www.youtube.com/')
})
