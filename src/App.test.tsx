import * as reactRedux from 'react-redux'
import React from 'react'
import {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme from 'enzyme'

Enzyme.configure({adapter: new Adapter()})

describe('test suite for useSelector and useDispatch', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')

    beforeEach(() => {
        useSelectorMock.mockClear()
        useDispatchMock.mockClear()
    })

    test('useSelector will be work', () => {
        useSelectorMock.mockReturnValue({text: 'test'})
    })
    test('useDispatch will be work', () => {
        const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        expect(dummyDispatch).not.toHaveBeenCalled()
    })
})

describe('Test button', () => {
    it('Test click event', () => {
        const mockCallBack = jest.fn()
        const button = shallow((<button onClick={mockCallBack}>Ok!</button>))
        button.find('button').simulate('click')
        expect(mockCallBack.mock.calls.length).toEqual(1)
    })
})