import React from 'react'
import {useSelector} from 'react-redux'
import {getText} from '../../../redux/preview-selector'

const PreviewText: React.FC = (props) => {
    console.log('TextRerender')
    const text = useSelector(getText)
    return <div>
        {text}
    </div>
}

export default PreviewText