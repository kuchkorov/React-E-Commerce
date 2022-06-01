export default function Cart(props) {

    const { quantity = 0, handleBashketShow = Function.prototype } = props;
    return(
        <div className="cart blue darken-4 white-text" onClick={handleBashketShow}>
            <i class="material-icons">add_shopping_cart</i>
            {quantity ? <span className="cart-quantity">{quantity}</span> : null }
        </div>
    )
}