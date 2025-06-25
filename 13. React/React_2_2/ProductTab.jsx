import Product from "./Product.jsx";

function ProductTab()
{
    return (
        <>
            <Product title="Phone" price={12000 + 1000} />
            <Product title="Laptop" price={55000 + 1000}/>
            <Product title="Headphones" price={10000 + 1000}/>
        </>
    );
}

export default ProductTab;