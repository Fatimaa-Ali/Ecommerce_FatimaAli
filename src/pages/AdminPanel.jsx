import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, deleteProduct, addProduct } from '../redux/productSlice';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const AdminPanel = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [newProduct, setNewProduct] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const initialValues = {
    name: '',
    price: '',
    description: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Product name is required'),
    price: Yup.number().required('Price is required'),
    description: Yup.string().required('Description is required'),
  });

  const handleAddProduct = (values) => {
    dispatch(addProduct(values));
    setNewProduct(false); // Close the form after adding
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center my-8">Admin Panel</h1>

      <button
        onClick={() => setNewProduct(true)}
        className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
      >
        Add New Product
      </button>

      {newProduct && (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleAddProduct}
        >
          <Form>
            <Field name="name" placeholder="Product Name" className="p-2 border rounded w-full" />
            <Field name="price" type="number" placeholder="Product Price" className="p-2 border rounded w-full mt-2" />
            <Field
              name="description"
              placeholder="Product Description"
              className="p-2 border rounded w-full mt-2"
            />
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
              Add Product
            </button>
          </Form>
        </Formik>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button
              onClick={() => dispatch(deleteProduct(product.id))}
              className="bg-red-500 text-white py-2 px-4 rounded mt-2"
            >
              Delete Product
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
