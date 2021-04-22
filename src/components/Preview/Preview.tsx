import React from 'react'
import PreviewImg from './PreviewImg/PreviewImg'
import PreviewText from './PreviewText/PreviewText'
import s from './Preview.module.css'
import PreviewLinkForClick from './PreviewLinkForClick/PreviewLinkForClick'
import PreviewColorFill from './PreviewColorFill/PreviewColorFill'

const Preview: React.FC = () => {
    return <>
        <div className={s.previewImg}><PreviewImg/></div>
        <div className={s.previewText}><PreviewText/></div>
        <PreviewLinkForClick/>
        <div><PreviewColorFill/></div>
    </>
}

export default Preview