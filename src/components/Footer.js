import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </footer>
    );
  }
}

export default Footer;
