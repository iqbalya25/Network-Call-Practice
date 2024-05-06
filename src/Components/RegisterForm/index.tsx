import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikValues } from 'formik';
import * as Yup from 'yup';

const RegistrationForm: React.FC = () => {
  const handleSubmit = (values: FormikValues) => {
    // Convert form values to JSON
    const registrationData = {
      name: values.name,
      position: values.position,
      email: values.email,
      password: values.password
    };

    // Get existing JSON data from localStorage
    const existingData = localStorage.getItem('registrationData');
    const jsonData = existingData ? JSON.parse(existingData) : [];

    // Add new registration data to existing JSON data
    jsonData.push(registrationData);

    // Save updated JSON data to localStorage
    localStorage.setItem('registrationData', JSON.stringify(jsonData));

    // Optionally, you can also send the JSON data to a server
    // using fetch or axios
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Registration</h2>
      <Formik
        initialValues={{ Name: "", Position: "", Email: "", Password: "" }}
        validationSchema={Yup.object({

          name: Yup.string().required("Required"),
          position: Yup.string().required("Reqired"),
          email: Yup.string().email("Invalid Email Address").required("Required"),
          password: Yup.string().min(6, "Password must be at least 6 character").required("Required")


        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            handleSubmit(values);
            alert("Data Saved Succesfully!");
            setSubmitting(false);
          }, 400);

        }}

      >
        <Form>
          <div className='grid grid-cols-1 justify-center'>

            <div className='grid grid-cols-3 justify-center py-2'>
              <label htmlFor="name">Name:</label>
              <div className='border border-solid border-black'>
                <Field name="name" type="text" />
              </div>

              <ErrorMessage name="name" />
            </div>

            <div className='grid grid-cols-3 justify-center py-2'>
              <label htmlFor="position">Position:</label>
              <div className='border border-solid border-black'>
                <Field name="position" type="text" />
              </div>
              <ErrorMessage name="position" />
            </div>

            <div className='grid grid-cols-3 justify-center py-2'>
              <label htmlFor="email">Email:</label>
              <div className='border border-solid border-black'>
                <Field name="email" type="email" />
              </div>
              <ErrorMessage name="email" />
            </div>

            <div className='grid grid-cols-3 justify-center py-2'>
              <label htmlFor="password">Password:</label>
              <div className='border border-solid border-black'>
                <Field name="password" type="password" />
              </div>
              <ErrorMessage name="password" />
            </div>

            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
