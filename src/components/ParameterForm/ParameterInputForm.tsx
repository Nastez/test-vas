import {Field, Form, Formik, FormikHelpers} from 'formik'
import React from 'react'
import {useDispatch} from 'react-redux'
import {actions} from '../../redux/preview-reducer'
import s from './ParameterInputForm.module.css'

const ParameterInputForm: React.FC = () => {

    type PropType = {
        illustrationLink: string,
        text: string,
        firstColor: string,
        secondColor: string,
        linkForRedirect: string
    }

    const dispatch = useDispatch()

    const addNewText = (text: string) => {
        dispatch(actions.setText(text))
    }

    const addImgLink = (imgLink: string) => {
        dispatch(actions.setImgLink(imgLink))
    }

    const addFirstColor = (firstColor: string) => {
        dispatch(actions.setFirstColor(firstColor))
    }

    const addSecondColor = (secondColor: string) => {
        dispatch(actions.setSecondColor(secondColor))
    }

    const addOnClickLink = (linkForRedirect: string) => {
        dispatch(actions.setOnClickLink(linkForRedirect))
    }

    return <div>
        <Formik
            initialValues={{
                illustrationLink: '',
                text: '',
                firstColor: '',
                secondColor: '',
                linkForRedirect: ''
            }}
            onSubmit={(
                values: PropType,
                {setSubmitting}: FormikHelpers<PropType>
            ) => {
                addNewText(values.text)
                addImgLink(values.illustrationLink)
                addFirstColor(values.firstColor)
                addSecondColor(values.secondColor)
                addOnClickLink(values.linkForRedirect)
                setSubmitting(false)
            }}
        >
            <Form className={s.box}>
                <Field id="illustrationLink" name="illustrationLink" placeholder="Set illustration link"
                       className={s.fieldBox}/>
                <Field id="text" name="text" placeholder="Enter text" className={s.fieldBox}/>
                <Field
                    id="firstColor"
                    name="firstColor"
                    placeholder="Second a first color"
                    className={s.fieldBox}
                />
                <Field
                    id="secondColor"
                    name="secondColor"
                    placeholder="Set a second color"
                    className={s.fieldBox}
                />
                <Field
                    id="linkForRedirect"
                    name="linkForRedirect"
                    placeholder="Set redirect link"
                    className={s.fieldBox}
                />
                <button type="submit" className={s.buttonProp}>Submit</button>
            </Form>
        </Formik>
    </div>
}

export default ParameterInputForm