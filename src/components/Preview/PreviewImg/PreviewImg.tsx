import React from 'react'
import {useSelector} from 'react-redux'
import {getImgLink} from '../../../redux/preview-selector'

const PreviewImg: React.FC = () => {
    let imgLink = useSelector(getImgLink)

    return <div>
        <img src={imgLink} />
    </div>
}

export default PreviewImg


