import Item from "../item/Item";
import PropTypes from 'prop-types';

const ItemList = ({ items }) => {

  return (

    <div className="container">
      <div className="row">
        {items.map((item) => (
          <div key={item.id} className="col-sm">
            <Item item={item} />
          </div>
        ))}
      </div>
    </div>

  );
  
};

ItemList.propTypes = {
  items: PropTypes.array.isRequired
};


export default ItemList;
