const Navbar = () => {
    return (
        <>
        <nav className="flex justify-between items-center px-6 py-4 bg-blue-500">
            <h1 className="text-2xl font-bold text-white">
                My Store
            </h1>

            <div className="flex gap-6">
                <a href="#" className="text-white">Home</a>
                <a href="#" className="text-white">Products</a>
                <a href="#" className="text-white">Contact</a>
            </div>
        </nav>
        </>
    );
};

export default Navbar;

