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
        givenLink: string
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

    const addOnClickLink = (givenLink: string) => {
        dispatch(actions.setOnClickLink(givenLink))
    }

    return <div>
        <Formik
            initialValues={{
                illustrationLink: '',
                text: '',
                firstColor: '',
                secondColor: '',
                givenLink: ''
            }}
            onSubmit={(
                values: PropType,
                {setSubmitting}: FormikHelpers<PropType>
            ) => {
                addNewText(values.text)
                addImgLink(values.illustrationLink)
                addFirstColor(values.firstColor)
                addSecondColor(values.secondColor)
                addOnClickLink(values.givenLink)
                setSubmitting(false)
            }}
        >
            <Form className={s.box}>
                {/*<label htmlFor="illustrationLink">Illustration</label>*/}
                <Field id="illustrationLink" name="illustrationLink" placeholder="Set illustration link"
                       className={s.fieldBox}/>

                {/*<label htmlFor="text">Text</label>*/}
                <Field id="text" name="text" placeholder="Enter text" className={s.fieldBox}/>

                {/*<label htmlFor="firstColor">First Color</label>*/}
                <Field
                    id="firstColor"
                    name="firstColor"
                    placeholder="Choose a color"
                    className={s.fieldBox}
                />
               {/* <label htmlFor="secondColor">Second Color</label>*/}
                <Field
                    id="secondColor"
                    name="secondColor"
                    placeholder="Choose a color"
                    className={s.fieldBox}
                />
                {/*<label htmlFor="givenLink">Link for Redirect</label>*/}
                <Field
                    id="givenLink"
                    name="givenLink"
                    placeholder="Set link for Redirect"
                    className={s.fieldBox}
                />
                <button type="submit" className={s.buttonProp}>Submit</button>
            </Form>
        </Formik>
    </div>
}

export default ParameterInputForm