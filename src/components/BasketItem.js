export default function(props) {
    const { id, name, price, quantity, full_background, RemoveFromBasket, incrementQuantity, decrementQuantity} = props;
    return(
        <li className="collection-item">
            {name} x{quantity} = {price * quantity}$
            <span className="secondary-content">
                <button className="waves-effect waves-light btn" onClick={() => incrementQuantity(id)}><i className="material-icons">add</i></button>
                    <div className="itemQuantity">
                        {quantity} 
                    </div>
                <button className="waves-effect waves-light btn" onClick={() => decrementQuantity(id)}><i className="material-icons">remove</i></button>
                <i className="material-icons basket-delete" onClick={()=>{RemoveFromBasket(id)}}>delete</i>
            </span>
        </li>
    )
}