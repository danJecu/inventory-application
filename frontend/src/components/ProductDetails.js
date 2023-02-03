import { useInventoryContext } from '../hooks/useInventoryContext';

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const ProductDetails = ({ product }) => {
  const { dispatch } = useInventoryContext();

  const handleDelete = async () => {
    const response = await fetch('/api/inventory/' + product._id, {
      method: 'DELETE',
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE_PRODUCT', payload: json });
    }
  };

  return (
    <div className="product-details">
      <h4>SKU: {product.sku}</h4>
      <p>
        <strong>Title: </strong>
        {product.title}
      </p>
      <p>
        <strong>Quantity: </strong> {product.quantity}
      </p>
      <p>
        {formatDistanceToNow(new Date(product.createdAt), { addSuffix: true })}
      </p>
      <span className="material-symbols-outlined" onClick={handleDelete}>
        delete
      </span>
    </div>
  );
};

export default ProductDetails;
