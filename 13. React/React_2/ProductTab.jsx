import Product from "./Product";
import Price from "./Price";

function ProductTab(){
    let styles={
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignitems:"center"
    }
    return (
        <div style={styles}>
        <Product title="Logitech MX Master" idx={0}/>
        <Product title="Apple Pencil (2nd Gen)" idx={1}/>
        <Product title="Zebronics " idx={2}/>
        <Product title="Petronics" idx={3}/>

        </div>
    )
}
export default ProductTab;