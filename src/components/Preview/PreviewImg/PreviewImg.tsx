import React from 'react'
import s from '../Preview.module.css'
import {useSelector} from 'react-redux'
import {getImgLink} from '../../../redux/preview-selector'

const PreviewImg: React.FC = () => {

    const imgLink = useSelector(getImgLink)

    return <div>
        <img src={imgLink}/>
    </div>
}

export default PreviewImg