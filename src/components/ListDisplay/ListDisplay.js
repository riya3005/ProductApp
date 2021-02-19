import React, {Component} from 'react';
import './listdisplay.css';
import {List} from './List';
import Taskbar from '../TaskBar/Taskbar';
import {Pagination} from '../Pagination/Pagination';

export class ListDisplay extends Component {
  render() {
    return (
      <>
        <Taskbar />
        <List />
        <Pagination totalPages={50} />
      </>
    );
  }
}

export default ListDisplay;
