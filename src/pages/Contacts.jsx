import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required'),
});

const Contacts = () => {
    return (
        <section className="flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">Contact Me</h1>
            <Formik
                initialValues={{ name: '', email: '', message: '' }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="w-full max-w-md">
                        {/* Name Field */}
                        <div className="mb-4">
                            <Field
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <ErrorMessage
                                name="name"
                                component="div"
                                className="text-red-500 text-sm mt-1"
                            />
                        </div>
                        {/* Email Field */}
                        <div className="mb-4">
                            <Field
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <ErrorMessage
                                name="email"
                                component="div"
                                className="text-red-500 text-sm mt-1"
                            />
                        </div>
                        {/* Message Field */}
                        <div className="mb-4">
                            <Field
                                as="textarea"
                                name="message"
                                placeholder="Your Message"
                                rows="5"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <ErrorMessage
                                name="message"
                                component="div"
                                className="text-red-500 text-sm mt-1"
                            />
                        </div>
                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-all disabled:opacity-50"
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </Form>
                )}
            </Formik>
        </section>
    );
};

export default Contacts;
