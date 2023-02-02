const ProductDetails = ({ product }) => {
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
      <p>{product.createdAt}</p>
    </div>
  );
};

export default ProductDetails;
