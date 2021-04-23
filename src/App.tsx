import './App.module.css'
import React, {useCallback, useEffect, useRef, useState} from 'react'
import Preview from './components/Preview/Preview'
import s from './App.module.css'
import ParameterInputForm from './components/ParameterForm/ParameterInputForm'
import {useSelector} from 'react-redux'
import {getFirstColor, getGivenLink, getPreviewData, getSecondColor} from './redux/preview-selector'
import domToImage from 'dom-to-image'
import {saveAs} from 'file-saver'

const TestVAS: React.FC = () => {
    console.log('Render')

    const firstColor = useSelector(getFirstColor)
    const secondColor = useSelector(getSecondColor)
    const givenLink = useSelector(getGivenLink)
    const previewData = useSelector(getPreviewData)

    const captureRef = useRef(null)

    const [isReadyToCopyHTML, setReadyToCopyHTML] = useState(false)
    const [isReadyToCopyJSON, setReadyToCopyJSON] = useState(false)
    const [isReadyToRedirect, setReadyToRedirect] = useState(false)

    const copyToClip = useCallback((str: string) => {
        const listener = (e: ClipboardEvent) => {
            if (e.clipboardData === null) {
                console.log('Object clipboardData is null')
            } else {
                e.clipboardData.setData('text/html', str)
                e.clipboardData.setData('text/plain', str)
                e.preventDefault()
            }
        }
        return {'listener': listener}
    }, [])

    useEffect(() => {
        const markup: HTMLElement | null = captureRef.current
        if (markup === null) {
            console.log('Markup is null')
        } else {
            if (isReadyToCopyHTML) {
                document.addEventListener('copy', copyToClip((markup as HTMLElement).innerHTML).listener)
                document.execCommand('copy')
            }
            return () => {
                document.removeEventListener('copy', copyToClip((markup as HTMLElement).innerHTML).listener)
                setReadyToCopyHTML(false)
            }
        }
    }, [isReadyToCopyHTML])

    useEffect(() => {
        if (isReadyToCopyJSON) {
            document.addEventListener('copy', copyToClip(JSON.stringify(previewData)).listener)
            document.execCommand('copy')
        }
        return () => {
            document.removeEventListener('copy', copyToClip(JSON.stringify(previewData)).listener)
            setReadyToCopyJSON(false)
        }
    }, [previewData, isReadyToCopyJSON])

    useEffect(() => {
        if (isReadyToRedirect) {
            window.open(`${givenLink}`, '_blank')
        }

        setReadyToRedirect(false)
    }, [isReadyToRedirect, givenLink])

    const saveInHTML = () => {
        setReadyToCopyHTML(true)
    }

    const saveInPNG = () => {
        const image = captureRef.current
        if (image === null) {
            console.log('Image is null')
        } else {
            domToImage.toBlob(image)
                .then(function (blob) {
                    saveAs(blob, 'my-node.png')
                })
        }
    }

    const saveInJSON = () => {
        setReadyToCopyJSON(true)
    }

    const followTheLink = () => {
        setReadyToRedirect(true)
    }

    const setColorFill = (color: string) => {
        const markup: HTMLElement = captureRef.current!
        markup.style.background = `${color}`
    }

    const setGradientFill = (firstColor: string, secondColor: string) => {
        const markup: HTMLElement = captureRef.current!
        markup.style.background = `linear-gradient(${firstColor}, ${secondColor})`
    }

    switch (true) {
        case (firstColor !== '' && secondColor !== ''):
            setGradientFill(firstColor, secondColor)
            break
        case (firstColor !== '' && secondColor === ''):
            setColorFill(firstColor)
            break
        case (firstColor === '' && secondColor !== ''):
            setColorFill(secondColor)
            break
        default:
            console.log('Yo-Yo')
    }

    return (
        <div className={s.wrapper}>
            <div id='test'
                 onClick={followTheLink}
                 className={s.preview}
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

