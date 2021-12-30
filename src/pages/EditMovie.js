import React, { Component } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'loading',
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  handleSubmit(updatedMovie) {
    this.setState({ shouldRedirect: false }, async () => {
      await movieAPI.updateMovie(updatedMovie);
      this.setState({
        shouldRedirect: true,
      });
    });
  }

  async fetchMovie() {
    const { match } = this.props;
    const { id } = match.params;

    const movie = await movieAPI.getMovie(id);
    this.setState({
      status: 'updated',
      movie,
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'loading') {
      return <Loading>Carregando...</Loading>;
    }

    return (
      <div data-testid="edit-movie" className="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    }).isRequired,
  }).isRequired,
};

export default EditMovie;
