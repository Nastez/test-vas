import React from 'react'
import {useSelector} from 'react-redux'
import {getGivenLink} from '../../../redux/preview-selector'
import s from './PreviewLinkForClick.module.css'

const PreviewLinkForClick: React.FC = (props) => {
    console.log('LinkRerender')
    const link = useSelector(getGivenLink)
    return <div className={s.linkForClick}>
        {link}
    </div>
}

export default PreviewLinkForClick