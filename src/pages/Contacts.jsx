import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required'),
});

const Contacts = () => {
    return (
        <section>
            <h1>Contact Me</h1>
            <Formik
                initialValues={{ name: '', email: '', message: '' }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="text" name="name" placeholder="Your Name" />
                        <ErrorMessage name="name" component="div" />
                        <Field type="email" name="email" placeholder="Your Email" />
                        <ErrorMessage name="email" component="div" />
                        <Field as="textarea" name="message" placeholder="Your Message" />
                        <ErrorMessage name="message" component="div" />
                        <button type="submit" disabled={isSubmitting}>Submit</button>
                    </Form>
                )}
            </Formik>
        </section>
    );
};

export default Contacts;
