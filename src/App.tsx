import './App.module.css'
import React, {useCallback, useEffect, useRef, useState} from 'react'
import Preview from './components/Preview/Preview'
import s from './App.module.css'
import ParameterInputForm from './components/ParameterForm/ParameterInputForm'
import {useSelector} from 'react-redux'
import {getColorFill, getGivenLink, getGradientFill, getPreviewData} from './redux/preview-selector'
import domtoimage from 'dom-to-image'
import {saveAs} from 'file-saver'

const TestVAS: React.FC = () => {
    console.log('Render')

    const colorFill = useSelector(getColorFill)
    const gradientFill = useSelector(getGradientFill)
    const givenLink = useSelector(getGivenLink)

    const previewData = useSelector(getPreviewData)

    const captureRef = useRef(null)

    const [isReadyToCopyHTML, setReadyToCopyHTML] = useState(false)
    const [isReadyToCopyJSON, setReadyToCopyJSON] = useState(false)
    const [isReadyToRedirect, setReadyToRedirect] = useState(false)
    //const [isReadyToSetFill, setReadyToSetFill] = useState(false)

    const copyToClip = useCallback((str: string) => {
        const listener = (e: ClipboardEvent) => {
            e.clipboardData!.setData('text/html', str)
            e.clipboardData!.setData('text/plain', str)
            e.preventDefault()
        }
        return {'listener': listener}
    }, [])

    useEffect(() => {
        const markup: HTMLElement = captureRef.current!
        if (isReadyToCopyHTML) {
            document.addEventListener('copy', copyToClip(markup.innerHTML).listener)
            document.execCommand('copy')
        }
        return () => {
            document.removeEventListener('copy', copyToClip(markup.innerHTML).listener)
            setReadyToCopyHTML(false)
        }
    }, [copyToClip, isReadyToCopyHTML])

    useEffect(() => {
        if (isReadyToCopyJSON) {
            document.addEventListener('copy', copyToClip(JSON.stringify(previewData)).listener)
            document.execCommand('copy')
        }
        return () => {
            document.removeEventListener('copy', copyToClip(JSON.stringify(previewData)).listener)
            setReadyToCopyJSON(false)
        }
    }, [copyToClip, previewData, isReadyToCopyJSON])

    useEffect(() => {
        if (isReadyToRedirect) {
            window.open(`${givenLink}`, '_blank')
        }

        setReadyToRedirect(false)
    }, [isReadyToRedirect, givenLink])


/*    const convertToArray = (str: string) => {
        let temp = []
        temp = str.split(',')

        return (temp)
    }

   let gradientFillStringToArray = convertToArray(gradientFill) // Array
    let colorFillStringToArray: Array<string> = convertToArray(colorFill) // Array

    useEffect(() => {
        let previewTest = document.getElementById('test')
        if (colorFillStringToArray.length > 1) {
            previewTest!.style.backgroundColor = colorFill
        } else {
            let previewTest = document.getElementById('test')
            previewTest!.style.backgroundColor = `linear-gradient(${colorFill})`
        }
    }, [colorFill, colorFillStringToArray])*/
    
    const saveInHTML = () => {
        setReadyToCopyHTML(true)
    }

    const saveInPNG = () => {
        const image = captureRef.current
        domtoimage.toBlob(image!)
            .then(function (blob) {
                saveAs(blob, 'my-node.png')
            })
    }

    const saveInJSON = () => {
        setReadyToCopyJSON(true)
    }

    const followTheLink = () => {
        setReadyToRedirect(true)
    }

    return (
        <div className={s.wrapper}>
            <div id='test'
                 onClick={followTheLink}
                 className={s.preview}
                 style={{backgroundColor: colorFill, background: `linear-gradient(${gradientFill})`}}
                 ref={captureRef}>
                <Preview/>
            </div>
            <ParameterInputForm/>
            <div>
                <button onClick={saveInPNG}>Save in png</button>
                <button onClick={saveInHTML}>Copy html</button>
                <button onClick={saveInJSON}>Copy in JSON</button>
            </div>
        </div>
    )
}

export default TestVAS

