import productImage from "../assets/product.jpg";

const ProductCard = () => {
    return (
        <div className="w-80 mx-auto mt-10 p-5 border rounded-xl shadow-lg text-center">

            <img
                src={productImage}
                alt="Product"
                className="w-40 h-40 object-cover mx-auto rounded-lg"
            />

            <img
                src="/watch.jpg"
                alt="Watch"
                className="w-40 h-40 object-cover mx-auto rounded-lg mt-4"
            />

            <h2 className="text-2xl font-bold mt-4">
                Smart Watch
            </h2>

            <p className="text-xl font-semibold mt-2">
                ₹1,999
            </p>

            <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Buy Now
            </button>

        </div>
    );
};

export default ProductCard;