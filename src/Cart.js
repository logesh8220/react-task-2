import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes} from '@fortawesome/free-solid-svg-icons'
function Cart({ cartitem, removeCart }) {   
    return (
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>{cartitem.title}</span> -
                <span>{cartitem.price}</span>
                <span className='ICON' onClick={() => { removeCart(cartitem) }} ><FontAwesomeIcon icon={faTimes}></FontAwesomeIcon></span>
            </li>
        </ul>
    )
}

export default Cart;