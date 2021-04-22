import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import TestVAS from './App'
import reportWebVitals from './reportWebVitals'
import store from './redux/redux-store'
import {Provider} from 'react-redux'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <TestVAS/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)

reportWebVitals()
