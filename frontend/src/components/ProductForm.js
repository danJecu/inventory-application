import { useState } from 'react';
import { useInventoryContext } from '../hooks/useInventoryContext';

const ProductForm = () => {
  const { dispatch } = useInventoryContext();
  const [sku, setSku] = useState('');
  const [title, setTitle] = useState('');
  const [quantity, setQuantity] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = { sku, title, quantity };

    const response = await fetch('/api/inventory/', {
      method: 'POST',
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      setSku('');
      setTitle('');
      setQuantity('');
      dispatch({ type: 'CREATE_PRODUCT', payload: product });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Product</h3>
      <label>Product SKU</label>
      <input
        type="number"
        onChange={(e) => setSku(e.target.value)}
        value={sku}
      />

      <label>Product Title</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label>Quantity (in kg)</label>
      <input
        type="number"
        onChange={(e) => setQuantity(e.target.value)}
        value={quantity}
      />
      <button>Add Product</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default ProductForm;
