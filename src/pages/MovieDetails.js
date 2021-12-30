import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: [],
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { match } = this.props;
    const { id } = match.params;

    const movie = await movieAPI.getMovie(id);
    this.setState({
      movie,
    });
  }

  render() {
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    const { match } = this.props;
    const { id } = match.params;

    return movie.length === 0 ? (
      <Loading>Carregando...</Loading>
    ) : (
      <div data-testid="movie-details" className="movie-details">
        <h1>{title}</h1>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>
          <span className="title-info">Subtitle: </span>
          {`${subtitle}`}
        </p>
        <p>
          <span className="title-info">Storyline: </span>
          {`${storyline}`}
        </p>
        <p>
          <span className="title-info">Genre: </span>
          {`${genre}`}
        </p>
        <p>
          <span className="title-info">Rating: </span>
          {`${rating}`}
        </p>
        <ul>
          <li>
            <Link to="/">VOLTAR</Link>
          </li>
          <li>
            <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
          </li>
          <li>
            <Link to="/" onClick={ async () => movieAPI.deleteMovie(id) }>
              DELETAR
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
