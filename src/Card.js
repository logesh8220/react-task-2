
function Card({items,handleAddToCart,products}) {
    return (
        <div className="card m-2" style={{ width: "15rem" }}>
            <img src={items.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{items.title}</h5>
                <p>{items.Ratings}</p>
                <p className="card-text">₹{items.price}</p>
                <button disabled={products.some((Obj) => Obj.id === items.id)}  onClick = {()=>{handleAddToCart (items)}}  className="btn btn-primary">Add to Cart</button>

            </div>
        </div>
    )
}

export default Card;