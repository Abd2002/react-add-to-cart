import React from 'react'

const CartCard = ({ item, removeProduct }) => {
    let { thumbnail, description, brand } = item;
    let title = description.length > 10 ? `${description.slice(0, 50)}...` : description;
    return (
        <div className='col-lg-8 mx-auto card py-2 my-3 box-shadow-sm'>
            <div className="row">
                <div className="col-lg-4">
                    <img src={thumbnail} alt={brand} className='img-fluid img-thumbnail rounded' />
                </div>
                <div className="col-lg-8 d-flex align-item-center my-auto">
                    <div className="cart-text">
                        <h5 className="card-title">{brand || ''}</h5>
                        <p className="card-text">{title || ''}</p>
                        <button className='btn btn-danger' onClick={() => removeProduct(item)}>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartCard