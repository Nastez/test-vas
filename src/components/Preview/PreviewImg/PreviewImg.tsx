import React from 'react'
import {useSelector} from 'react-redux'
import {getImgLink} from '../../../redux/preview-selector'
import domtoimage from 'dom-to-image'
import {saveAs} from 'file-saver'

const PreviewImg: React.FC = () => {

    console.log("IMGReRender")
    let imgLink = useSelector(getImgLink)



    return <div>
        <img src={imgLink}/>
    </div>
}

export default PreviewImg


