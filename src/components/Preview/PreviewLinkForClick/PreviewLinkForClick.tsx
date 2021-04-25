import React from 'react'
import {useSelector} from 'react-redux'
import {getLinkForRedirect} from '../../../redux/preview-selector'
import s from './PreviewLinkForClick.module.css'

const PreviewLinkForClick: React.FC = () => {
    const link = useSelector(getLinkForRedirect)
    return <div className={s.linkForClick}>
        {link}
    </div>
}

export default PreviewLinkForClick