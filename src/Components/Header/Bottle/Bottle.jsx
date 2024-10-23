import './Bottle.css'
import PropTypes from 'prop-types';


const Bottle = ({bottle, handleAddToCart}) => {
    const {name, img, price} = bottle
    return (
        <div className="bottle">
            <h3>Bottle: {name}</h3>
            <img src={img} />
            <p style={{ fontWeight: 'bold', color: 'cyan'}}>Price: ${price}</p>
          
            <button  style={{ background: 'linear-gradient(to right, #4facfe, #00f2fe)', color: 'black' }} onClick={()=>handleAddToCart(bottle)}>Pick Up</button>
        </div>
    );
};

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired
}
export default Bottle;