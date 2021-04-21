import './App.module.css'
import React, {useCallback, useEffect, useRef, useState} from 'react'
import Preview from './components/Preview/Preview'
import s from './App.module.css'
import ParameterInputForm from './components/ParameterForm/ParameterInputForm'
import {useSelector} from 'react-redux'
import {getColorFill, getGradientFill} from './redux/preview-selector'
import domtoimage from 'dom-to-image'
import {saveAs} from 'file-saver'

const App: React.FC = () => {
    console.log('Render')
    const colorFill = useSelector(getColorFill)
    const gradientFill = useSelector(getGradientFill)

    const captureRef = useRef(null)

    const [isReadyToCopy, setReadyToCopy] = useState(false)

    const copyToClip = useCallback((str: string) => {
        const listener = (e: ClipboardEvent) => {
            e.clipboardData!.setData('text/jsx', str)
            e.clipboardData!.setData('text/plain', str)
            e.preventDefault()
        }
        return {'listener': listener}
    }, [])

    useEffect(() => {
        const markup: HTMLElement = captureRef.current!
        if (isReadyToCopy) {
            document.addEventListener('copy', copyToClip(markup.innerHTML).listener)
            document.execCommand('copy')
        }
        return () => {
            document.removeEventListener('copy', copyToClip(markup.innerHTML).listener)
            setReadyToCopy(false)
        }
    }, [isReadyToCopy])

    const saveInHTML = () => {
        setReadyToCopy(true)
    }

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
                <button onClick={saveInHTML}>Copy html</button>
                <button>Copy in json</button>
            </div>
        </div>
    )
}

export default App

