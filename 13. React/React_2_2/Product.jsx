function Product({title , price , features }) {
    const list = features.map((features, index) => <li key={index}>{features}</li>);
    return(
        <div className="Product">
            <h3>{title}</h3>
            <p>Price with tax : {price}</p>
            <ul>{list}</ul>
        </div>
    );
}

export default Product;
