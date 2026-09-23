const App = () => {

  const products = [{id: 1,name: "Laptop",price: 55000,category: "Electronics"},
                    {id: 2,name: "Mobile",price: 25000,category: "Electronics"},
                    {id: 3,name: "Headphones",price: 2000,category: "Accessories"},
                    {id: 4,name: "Keyboard",price: 1500,category: "Accessories"}
                   ];

  return (

    <>
    <div>
      <h1>Products</h1>

      {products.map((e) => (
        <div key={e.id}>
          <p>Name: {e.name}</p>
          <p>Price: ₹{e.price}</p>
          <p>Category: {e.category}</p>
          <hr />
        </div>
      ))}
    </div>

    </>
  );
};

export default App;
