import React, {Component} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import NewsItem from './NewsItem';
import commonStyles from '../../assets/styles/common';
import Axios from 'axios';
import {REQUEST_URL} from './../../libs/constants';
import colors from '../../res/colors';
import listStyles from '../../assets/styles/list';

class NewsScreen extends Component {
  state = {
    news: [],
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
            data={this.state.news}
            renderItem={({item}) => <NewsItem item={item} />}
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
      `${REQUEST_URL}/posts?categories=1&page=${page}&per_page=20&_embed`,
    )
      .then((response) => {
        this.setState({
          news:
            page === 1
              ? Array.from(response.data)
              : [...this.state.news, ...response.data],
          loading: false,
          loadingMore: false,
          totalPages: response.headers['x-wp-totalpages'],
        });
      })
      .catch((error) => {
        alert('Hubo un error cargando las noticias');
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

export default NewsScreen;
