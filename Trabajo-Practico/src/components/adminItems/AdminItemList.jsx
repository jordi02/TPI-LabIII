import ItemAdmin from './ItemAdmin';
import PropTypes from 'prop-types';

const AdminItemList = ({ items }) => {

  return (

    <div className="container">
      <div className="row">
        {items.map((item) => (
          <div key={ItemAdmin.id} className="col-sm">
            <ItemAdmin item={item} />
          </div>
        ))}
      </div>
    </div>

  );
  
};

AdminItemList.propTypes = {
  items: PropTypes.array.isRequired
};


export default AdminItemList;
