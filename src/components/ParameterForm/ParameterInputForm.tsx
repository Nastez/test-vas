import {Field, Form, Formik, FormikHelpers} from 'formik'
import React from 'react'

const ParameterInputForm: React.FC = () => {

    type PropType = {
        Illustration: string,
        text: string,
        fill: string
    }

    return <div>
        <Formik
            initialValues={{
                Illustration: '',
                text: '',
                fill: ''
            }}
            onSubmit={(
                values: PropType,
                {setSubmitting}: FormikHelpers<PropType>
            ) => {
                    alert(JSON.stringify(values, null, 2))
                    setSubmitting(false)
            }}
        >
            <Form>
                <label htmlFor="Illustration">Illustration</label>
                <Field id="Illustration" name="Illustration" placeholder="Insert the link"/>

                <label htmlFor="text">Text</label>
                <Field id="text" name="text" placeholder="Enter text"/>

                <label htmlFor="fill">Fill</label>
                <Field
                    id="fill"
                    name="fill"
                    placeholder="Choose a fill color"
                />

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    </div>
}

export default ParameterInputForm