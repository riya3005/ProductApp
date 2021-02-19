import React from 'react';
import './Product.css';
import axios from '../../../axios';
import edit from '../../../assests/edit.png';
import del from '../../../assests/delete.png';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";


const Product = (props) => {


  const deleteHandler = (id, e) => {
    const listTemp = props.list.filter(ele =>
        ele['id'] !== id

    )
    axios.delete(`product_listings/${id}`).then((res) => {
        props.updateList(listTemp)
    });
};

  return (
    <div className="product_container">
      <div>
        <img src={props.image} alt="Logo" height="100px" width="70px" />
      </div>
      <div className="product_details">
        <span className='title'> {props.title} </span>
        <span className='description'> {props.description} </span>
        <span className='vendor'> Vendor : {props.vendor} </span>
      </div>
      <div className="last_column">
        <span> USD {props.price} </span>
        <div className="update_del_button_container">
        <NavLink to={`/updateProduct/${props.id}`}>
          <button>
            <img
              src={edit}
              height="20px"
              width="20px"
              alt="Edit Icon"
            />
          </button>
          </ NavLink>
          <button>
            <img
              src={del}
              height="15px"
              width="25px"
              alt="Delete Icon"
              onClick={(e) => deleteHandler(props.id, e)}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
      list: state.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      updateList: (listVal) => dispatch({ type: 'UPDATE_LIST', listVal }),
  };
}


const wrappedProductComp = connect(mapStateToProps, mapDispatchToProps)(Product);
export default wrappedProductComp;