import './App.module.css'
import React from 'react'
import Preview from './components/Preview/Preview'
import s from './App.module.css'
import ParameterInputForm from './components/ParameterForm/ParameterInputForm'

const App: React.FC = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.preview}>
                <Preview/>
            </div>
            <ParameterInputForm/>
            <div>
                <button>Save in png</button>
                <button>Copy (html or jsx)</button>
                <button>Copy in json</button>
            </div>
        </div>
    )
}

export default App
