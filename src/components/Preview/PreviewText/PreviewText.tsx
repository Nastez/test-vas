import React from 'react'
import {useSelector} from 'react-redux'
import {getText} from '../../../redux/preview-selector'
import s from './PreviewText.module.css'

const PreviewText: React.FC = (props) => {
    const text = useSelector(getText)
    return <div className={`${s.previewTextLimit} ${s.textParams}`}>
       {text}
    </div>
}

export default PreviewText