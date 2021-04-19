import './App.module.css'
import React from 'react'
import Preview from './components/Preview/Preview'
import s from './App.module.css'
import ParameterInputForm from './components/ParameterForm/ParameterInputForm'
import {useSelector} from 'react-redux'
import {getColorFill, getGradientFill} from './redux/preview-selector'


const App: React.FC = () => {

    const colorFill = useSelector(getColorFill)
    const gradientFill = useSelector(getGradientFill)

    return (
        <div className={s.wrapper}>
            <div className={s.preview}
                 style={{backgroundColor: colorFill, background: `linear-gradient(${gradientFill})`}}>
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

