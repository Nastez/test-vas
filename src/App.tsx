import './App.module.css'
import React, {useCallback, useEffect, useRef, useState} from 'react'
import Preview from './components/Preview/Preview'
import s from './App.module.css'
import ParameterInputForm from './components/ParameterForm/ParameterInputForm'
import {useSelector} from 'react-redux'
import {getFirstColor, getGivenLink, getPreviewData, getSecondColor} from './redux/preview-selector'
import {saveAs} from 'file-saver'
import * as htmlToImage from 'html-to-image'
import {Button} from 'antd'

const App: React.FC = () => {
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

    /*   const saveInPNG = () => {
           const image: HTMLDivElement= captureRef.current!
           if (image === null) {
               console.log('Image is null')
           } else {
               domtoimage.toBlob(image)
                   .then(function (blob) {
                       saveAs(blob, 'my-node.png')
                   })
           }
       }*/

    const saveInPNG = () => {
        const image: HTMLDivElement = captureRef.current!
        if (image === null) {
            console.log('Image is null')
        } else {
            htmlToImage.toBlob(image)
                .then(function (blob) {
                    saveAs(blob!, 'my-node.png')
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
    }

    return (
        <div className={s.wrapper}>
            <div onClick={followTheLink}
                 className={s.preview}
                 ref={captureRef}>
                <Preview/>
            </div>
            <div className={s.wrapperFormAndButton}>
                <ParameterInputForm/>
                <div className={s.buttonsBox}>
                    <button onClick={saveInPNG} className={s.buttonParams}>Save in png</button>
                    <button onClick={saveInHTML} className={s.buttonParams}>Copy html</button>
                    <button onClick={saveInJSON} className={s.buttonParams}>Copy in JSON</button>
                </div>
            </div>
        </div>
    )
}

export default App

