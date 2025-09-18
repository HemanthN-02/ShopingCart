function Cart({ count }){
    return(
        <div style={{ border: "5px solid black", width: "1325px", margin: "5px", padding: "5px" }}>
            <h1><u>Your Cart</u></h1>
            <h2><u>Total Items in Cart :</u> <div style={{ borderRadius:"5px",display: "inline-block",width:"auto",height:"auto", border: "3px solid black", padding: "5px", marginLeft: "5px" }}>{count}</div></h2>
        </div>
    )
}

export default Cart