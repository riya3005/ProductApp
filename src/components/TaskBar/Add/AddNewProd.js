import React from 'react';
import './addnewprod.css';
import axios from '../../../axios';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';

const AddNewProd = (props) => {
  const [idVal, setIdVal] = React.useState(uuidv4());
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [vendor, setVendor] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [image, setImage] = React.useState('');

  const params = useParams();

  React.useEffect(() => {
    if (!!params.id) {
      axios.get(`product_listings/${params.id}`).then((response) => {
        setIdVal(params.id);
        setName(response.data.title);
        setDescription(response.data.body_html);
        setVendor(response.data.vendor);
        setPrice(response.data.price);
        setImage(response.data.images);
      });
    }
  }, [params]);

  function submitHandler(e) {
    e.preventDefault();
  }
  function clearHandler() {
    setName('');
    setDescription('');
    setVendor('');
    setPrice('');
    setImage('');
  }

  function saveHandler() {
    const newItem = {
      id: idVal,
      body_html: description,
      title: name,
      vendor: vendor,
      images: image,
      price: price,
    };

    const newLocation = {
      pathname: '/',
      search: '_page=1',
    };

    if (!!params.id) {
      newItem['id'] = params.id;
      axios
        .put(`product_listings/${params.id}`, newItem)
        .then(() => props.history.push(newLocation));
    } else {
      axios
        .post(`product_listings`, newItem)
        .then(() => props.history.push(newLocation));
    }
  }

  function cancelHandler() {
    props.history.push('/');
  }

  return (
    <form onSubmit={submitHandler} className="form_container">
      <div className="form_row">
        <label htmlFor="product_id">Product Id:</label>
        <input type="product_id" id="id" name="id" value={idVal} disabled />
      </div>
      <div className="form_row">
        <label htmlFor="product_name">Product Name:</label>
        <input
          type="product_name"
          id="title"
          name="title"
          placeholder="Enter Product Name"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        />
      </div>
      <div className="form_row">
        <label htmlFor="description">Description:</label>
        <input
          type="description"
          id="body_html"
          name="body_html"
          placeholder="Enter Product Description"
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        />
      </div>
      <div className="form_row">
        <label htmlFor="vendor">Vendor:</label>
        <input
          type="vendor"
          id="vendor"
          name="vendor"
          placeholder="Enter Vendor Name"
          value={vendor}
          onChange={(ev) => setVendor(ev.target.value)}
        />
      </div>
      <div className="form_row">
        <label htmlFor="price">Price:</label>
        <input
          type="price"
          id="price"
          name="price"
          placeholder="Enter Product Price"
          value={price}
          onChange={(ev) => setPrice(ev.target.value)}
        />
      </div>
      <div className="form_row">
        <label htmlFor="images">Image:</label>
        <input
          name="images"
          type="images"
          id="primagesice"
          placeholder="URL for Product Image"
          value={image}
          onChange={(ev) => setImage(ev.target.value)}
        />
      </div>
      <div className="form_row">
        <button name="clearAll" className="clearBtn" onClick={clearHandler}>
          Clear All
        </button>
        <button name="save" className="saveBtn" onClick={saveHandler}>
          {params.id ? "Update" : "Add" }
        </button>
        <button name="cancel" className="cancelBtn" onClick={cancelHandler}>
          Cancel
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateList: (listVal) => dispatch({type: 'UPDATE_LIST', listVal}),
  };
};

const wrappedComp = connect(mapStateToProps, mapDispatchToProps)(AddNewProd);
export default wrappedComp;
