import React from 'react'
import {useSelector} from 'react-redux'
import {getImgLink} from '../../../redux/preview-selector'
import s from './PreviewImg.module.css'

const PreviewImg: React.FC = () => {
    let imgLink = useSelector(getImgLink)
    return <div>
        {imgLink !== '' && <img src={imgLink} className={s.imgParams}/>}
    </div>
}

export default PreviewImg


