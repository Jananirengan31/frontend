
const App = () => {

  const products = [
    { id: 1, name: "Laptop", price: 50000, category: "Electronics" },
    { id: 2, name: "Mobile", price: 20000, category: "Electronics" },
    { id: 3, name: "Shoes", price: 2500, category: "Fashion" },
    { id: 4, name: "Watch", price: 3000, category: "Accessories" },
    { id: 5, name: "Bag", price: 1500, category: "Fashion" }
  ];

  return (
    <>
      <h2>Product List</h2>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
          <p>Category: {product.category}</p>
        </div>
      ))}
    </>
  );
};

export default App;