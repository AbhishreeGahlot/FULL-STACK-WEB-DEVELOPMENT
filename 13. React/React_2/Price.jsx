export default function Price({oldPrice,newPrice}){
    let oldStyles={
        textDecorationLine: "line-through",
    }
    let styles={
        backgroundColor:"#e0c367",
        height:"30px",
        width:"200px",
        borderBottomLeftRadius:"14px",
        borderBottomRightRadius:"14px"

    }
  return (
    <div style={styles}>
        <span style={oldStyles}>{oldPrice}</span>
        &nbsp; &nbsp;
        <span><b>{newPrice}</b></span>
    </div>
  )
}