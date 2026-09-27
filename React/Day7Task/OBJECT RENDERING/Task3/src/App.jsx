const App = () => {

  const product = { name: "Laptop", price: 50000, category: "Electronics", brand: "Dell"};

  return (
    <>
      <h2>Product Details</h2>

      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <p>Category: {product.category}</p>
      <p>Brand: {product.brand}</p>
    </>
  );
};

export default App;
