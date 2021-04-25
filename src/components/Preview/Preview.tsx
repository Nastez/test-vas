import React from 'react'
import PreviewImg from './PreviewImg/PreviewImg'
import PreviewText from './PreviewText/PreviewText'
import PreviewLinkForClick from './PreviewLinkForClick/PreviewLinkForClick'

const Preview: React.FC = () => {
    return <>
        <div><PreviewImg/></div>
        <div><PreviewText/></div>
        <div><PreviewLinkForClick/></div>
    </>
}

export default Preview