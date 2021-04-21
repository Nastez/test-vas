import {Field, Form, Formik, FormikHelpers} from 'formik'
import React from 'react'
import {useDispatch} from 'react-redux'
import {actions} from '../../redux/preview-reducer'

const ParameterInputForm: React.FC = () => {

    type PropType = {
        illustrationLink: string,
        text: string,
        colorFill: string,
        gradientFill: string,
        givenLink: string
    }

    const dispatch = useDispatch()

    const addNewText = (text: string) => {
        dispatch(actions.setText(text))
    }

    const addImgLink = (imgLink: string) => {
        dispatch(actions.setImgLink(imgLink))
    }

    const addColorFill = (colorFill: string) => {
        dispatch(actions.setColorFill(colorFill))
    }

    const addGradientFill = (gradientFill: string) => {
        dispatch(actions.setGradientFill(gradientFill))
    }

    const addOnClickLink = (givenLink: string) => {
        dispatch(actions.setOnClickLink(givenLink))
    }

    return <div>
        <Formik
            initialValues={{
                illustrationLink: '',
                text: '',
                colorFill: '',
                gradientFill: '',
                givenLink: ''
            }}
            onSubmit={(
                values: PropType,
                {setSubmitting}: FormikHelpers<PropType>
            ) => {
                addNewText(values.text)
                addImgLink(values.illustrationLink)
                addColorFill(values.colorFill)
                addGradientFill(values.gradientFill)
                addOnClickLink(values.givenLink)
                setSubmitting(false)
            }}
        >
            <Form>
                <label htmlFor="illustrationLink">Illustration</label>
                <Field id="illustrationLink" name="illustrationLink" placeholder="Insert the link"/>

                <label htmlFor="text">Text</label>
                <Field id="text" name="text" placeholder="Enter text"/>

                <label htmlFor="colorFill">Fill Color</label>
                <Field
                    id="colorFill"
                    name="colorFill"
                    placeholder="Choose a color fill"
                />

                <label htmlFor="gradientFill">Fill Gradient</label>
                <Field
                    id="gradientFill"
                    name="gradientFill"
                    placeholder="Choose a gradient fill"
                />
                <label htmlFor="givenLink">Given Link</label>
                <Field
                    id="givenLink"
                    name="givenLink"
                    placeholder="Set link"
                />

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    </div>
}

export default ParameterInputForm