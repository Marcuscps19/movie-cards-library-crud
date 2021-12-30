import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, subtitle, storyline, imagePath } = movie;
    return (
      <div data-testid="movie-card" className="movie-card">
        <div className="movie-card-info">
          <h1>{ title }</h1>
          <h3>{ subtitle }</h3>
          <p>{ storyline }</p>
          <Link to={ `/movies/${id}` }>VER DETALHES</Link>
        </div>
        <img src={ imagePath } alt={ `Imagem do filme ${title}` } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
