import './App.module.css'
import React, {useRef} from 'react'
import Preview from './components/Preview/Preview'
import s from './App.module.css'
import ParameterInputForm from './components/ParameterForm/ParameterInputForm'
import {useSelector} from 'react-redux'
import {getColorFill, getGradientFill} from './redux/preview-selector'
import domtoimage from 'dom-to-image'
import {saveAs} from 'file-saver'

const App: React.FC = () => {

    const colorFill = useSelector(getColorFill)
    const gradientFill = useSelector(getGradientFill)

    const captureRef = useRef(null)

    const saveInPNG = () => {
        const image = captureRef.current

        domtoimage.toBlob(image!)
            .then(function (blob) {
                saveAs(blob, 'my-node.png')
            })

    }

    return (
        <div className={s.wrapper}>
            <div
                id='img'
                className={s.preview}
                style={{backgroundColor: colorFill, background: `linear-gradient(${gradientFill})`}}
                ref={captureRef}>
                <Preview/>
            </div>
            <ParameterInputForm/>
            <div>
                <button onClick={saveInPNG}>Save in png</button>
                <button>Copy (html or jsx)</button>
                <button>Copy in json</button>
            </div>
        </div>
    )
}

export default App

