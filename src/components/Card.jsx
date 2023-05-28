const Card = ({ item, addToCart }) => {
    let { thumbnail, description, brand } = item;
    let title = description.length > 10 ? `${description.slice(0, 40)}...` : description;
    return (
        <div className='col-md-3 my-3'>
            <div className="card">
                <img src={thumbnail} className="card-img-top" alt={brand} />
                <div className="card-body">
                    <h5 className="card-title">{brand}</h5>
                    <p className="card-text">{title}</p>
                    <button className="btn btn-info" onClick={() => addToCart(item)}>Add to Cart</button>
                </div>
            </div>

        </div>
    )
}

export default Card