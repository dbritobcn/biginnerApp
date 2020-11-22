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
  };

  componentDidMount() {
    this.fetchData();
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
          />
        )}
      </View>
    );
  }

  fetchData() {
    this.setState({loading: true});
    Axios.get(`${REQUEST_URL}/posts?categories=1&per_page=20&_embed`)
      .then((response) => {
        this.setState({
          news: response.data,
          loading: false,
        });
        console.log('response', response.headers['x-wp-totalpages']);
      })
      .catch((error) => {
        alert('Hubo un error cargando las noticias');
        this.setState({loading: false});
        console.log('error', error);
      });
  }
};

export default NewsScreen;
