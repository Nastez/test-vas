import React from 'react'
import PreviewImg from './PreviewImg/PreviewImg'
import PreviewText from './PreviewText/PreviewText'
import s from './Preview.module.css'

const Preview: React.FC = () => {

    return <>
        <div className={s.previewImg}><PreviewImg/></div>
        <div className={s.previewText}><PreviewText/></div>
    </>
}

export default Preview