import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const CheckoutPage = () => {
  const [step, setStep] = useState(1);

  const initialValues = {
    shipping: {
      name: '',
      address: '',
      city: '',
    },
    payment: {
      cardNumber: '',
      expirationDate: '',
    },
  };

  const validationSchema = step === 1
    ? Yup.object({
        shipping: Yup.object({
          name: Yup.string().required('Name is required'),
          address: Yup.string().required('Address is required'),
          city: Yup.string().required('City is required'),
        }),
      })
    : Yup.object({
        payment: Yup.object({
          cardNumber: Yup.string().required('Card number is required'),
          expirationDate: Yup.string().required('Expiration date is required'),
        }),
      });

  const handleSubmit = (values) => {
    if (step === 1) {
      setStep(2); // Move to payment step
    } else {
      // Finalize order
      console.log('Order submitted:', values);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center my-8">Checkout</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur, errors }) => (
          <Form>
            {step === 1 ? (
              <div>
                <div className="mb-4">
                  <Field
                    name="shipping.name"
                    placeholder="Full Name"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  {errors.shipping?.name && <div className="text-red-500">{errors.shipping.name}</div>}
                </div>
                <div className="mb-4">
                  <Field
                    name="shipping.address"
                    placeholder="Address"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  {errors.shipping?.address && <div className="text-red-500">{errors.shipping.address}</div>}
                </div>
                <div className="mb-4">
                  <Field
                    name="shipping.city"
                    placeholder="City"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  {errors.shipping?.city && <div className="text-red-500">{errors.shipping.city}</div>}
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-4">
                  <Field
                    name="payment.cardNumber"
                    placeholder="Card Number"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  {errors.payment?.cardNumber && <div className="text-red-500">{errors.payment.cardNumber}</div>}
                </div>
                <div className="mb-4">
                  <Field
                    name="payment.expirationDate"
                    placeholder="Expiration Date"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  {errors.payment?.expirationDate && (
                    <div className="text-red-500">{errors.payment.expirationDate}</div>
                  )}
                </div>
              </div>
            )}
            <div className="flex justify-between mt-4">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-full"
              >
                {step === 1 ? 'Next' : 'Submit Order'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CheckoutPage;
