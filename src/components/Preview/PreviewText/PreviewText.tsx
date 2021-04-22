import React from 'react'
import {useSelector} from 'react-redux'
import {getText} from '../../../redux/preview-selector'
import s from './PreviewText.module.css'

const PreviewText: React.FC = (props) => {
    console.log('TextRerender')
    const text = useSelector(getText)
    return <div className={s.previewTextValidation}>
        {text}
        {/*
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur venenatis blandit. Praesent vehicula, libero non pretium vulputate, lacus arcu facilisis lectus, sed feugiat tellus nulla eu dolor. Nulla porta bibendum lectus quis euismod. Aliquam volutpat ultricies porttitor. Cras risus nisi, accumsan vel cursus ut, sollicitudin vitae dolor. Fusce scelerisque eleifend lectus in bibendum. Suspendisse lacinia egestas felis a volutpat.
*/}
    </div>
}

export default PreviewText