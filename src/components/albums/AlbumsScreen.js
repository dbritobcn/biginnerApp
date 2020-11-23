import React, {Component} from 'react';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import Axios from 'axios';
import {REQUEST_URL} from '../../libs/constants';
import commonStyles from '../../assets/styles/common';
import AlbumsItem from './AlbumsItem';
import colors from '../../res/colors';
import listStyles from '../../assets/styles/list';

class AlbumsScreen extends Component {
  state = {
    albums: [],
    loading: false,
    loadingMore: false,
    page: 1,
    totalPages: 0,
  };

  componentDidMount() {
    this._fetchData();
  }

  render() {
    return (
      <View style={listStyles.container}>
        {this.state.loading ? (
          <ActivityIndicator
            style={commonStyles.loader}
            color={colors.blackPearl}
            size="large"
          />
        ) : (
          <FlatList
            data={this.state.albums}
            renderItem={({item}) => <AlbumsItem item={item} />}
            keyExtractor={(item) => item.id}
            onEndReached={this._handleLoadMore}
            onEndReachedThreshold={0.5}
          />
        )}
        {this.state.loadingMore ? (
          <ActivityIndicator
            style={commonStyles.moreLoader}
            color={colors.blackPearl}
            size="large"
          />
        ) : null}
      </View>
    );
  }

  _fetchData() {
    const {page} = this.state;
    if (page === 1) {
      this.setState({loading: true});
    }
    Axios.get(
      `${REQUEST_URL}/posts?categories=2&page=${page}&per_page=20&_embed`,
    )
      .then((response) => {
        const totalPages = response.headers['x-wp-totalpages'];
        this.setState({
          albums:
            page === 1
              ? Array.from(response.data)
              : [...this.state.albums, ...response.data],
          loading: false,
          loadingMore: false,
          totalPages: totalPages,
        });
      })
      .catch((error) => {
        alert('Hubo un error cargando los discos');
        this.setState({loading: false, loadingMore: false});
        console.log('error', error);
      });
  }

  _handleLoadMore = () => {
    const {totalPages, page} = this.state;
    if (totalPages <= page) return;
    this.setState(
      (prevState, nextProps) => ({
        page: prevState.page + 1,
        loadingMore: true,
      }),
      () => {
        this._fetchData();
      },
    );
  };
}

export default AlbumsScreen;
