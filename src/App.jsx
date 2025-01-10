
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import routing components
import ProductListingPage from './pages/ProductListingPage'; // Your product listing page component
import CheckoutPage from './pages/CheckoutPage'; // Your checkout page component
import ProductDetailPage from './components/ProductCard'; // A page for individual product details
import { Provider } from 'react-redux'; // For Redux
import store from './redux/store'; // Assuming you have a Redux store
import ProductCard from './components/ProductCard';

const App = () => {
  return (
    // Wrap your app with the Redux Provider and Router
    <Provider store={store}>
      <Router>
        <div className="App">
          {/* Define the Routes for your application */}
          <Routes>
            <Route path="/" element={<ProductListingPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/product/:id" element={<ProductCard />} />
            {/* Add more routes here as needed */}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
