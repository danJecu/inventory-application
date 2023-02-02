import { useEffect, useState } from 'react';
import { useInventoryContext } from '../hooks/useInventoryContext';

// components
import ProductDetails from '../components/ProductDetails';
import ProductForm from '../components/ProductForm';

const Home = () => {
  const { inventory, dispatch } = useInventoryContext();

  useEffect(() => {
    const fetchInventory = async () => {
      const response = await fetch('/api/inventory/');
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: 'SET_PRODUCTS', payload: json });
      }
    };

    fetchInventory();
  }, []);

  return (
    <div className="home">
      <div className="products">
        {inventory &&
          inventory.map((product) => (
            <ProductDetails key={product._id} product={product} />
          ))}
      </div>
      <ProductForm />
    </div>
  );
};

export default Home;
