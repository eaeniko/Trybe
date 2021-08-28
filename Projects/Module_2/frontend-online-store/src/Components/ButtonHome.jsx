import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// REQUISITO 3 FEITO POR TODOS VIA PAIR PROGRAMING;
export default class ButtonHome extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
      </div>
    );
  }
}
