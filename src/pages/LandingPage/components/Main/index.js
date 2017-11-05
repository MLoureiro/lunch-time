import React, { Component } from 'react';
import Main from './Main';
import { Loader } from '../../../../components/Styled/Loader';
import RestaurantSuggestionRepository from '../../../../services/RestaurantSuggestionRepository';

export default class MainContainer extends Component {
  state = {
    isLoading: true,
    isModalOpen: false,
    restaurantSuggestions: null,
    restaurantList: [],
  };

  async fetchRestaurant() {
    this.setState({ isLoading: true });
    const list = await RestaurantSuggestionRepository.getTodaySuggestions();
    this.setState({
      isLoading: !list,
      restaurantSuggestions: list,
    });
  }

  componentWillMount() {
    this.fetchRestaurant();
  }

  handleOpenModal() {
    this.setState({ isModalOpen: true });
  }

  handleCloseModal() {
    this.setState({ isModalOpen: false });
  }

  render() {
    if (this.state.isLoading) {
      return <Loader />;
    }

    return (
      <Main
        restaurantList={this.state.restaurantSuggestions}
        isModalOpen={this.state.isModalOpen}
        onModalOpen={() => this.handleOpenModal()}
        onModalClose={() => this.handleCloseModal()}
      />
    );
  }
}
