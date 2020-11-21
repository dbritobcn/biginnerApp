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
            data={this.state.albums}
            renderItem={({item}) => <AlbumsItem item={item} />}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    );
  }

  fetchData() {
    this.setState({loading: true});
    Axios.get(`${REQUEST_URL}/posts?categories=2&per_page=20&_embed`)
      .then((response) => {
        this.setState({
          albums: response.data,
          loading: false,
        });
        console.log('Bloom +++', response.data[0]);
        console.log('Pages', response.headers['x-wp-totalpages']);
      })
      .catch((error) => {
        alert('Hubo un error cargando los discos');
        this.setState({loading: false});
        console.log('error', error);
      });
  }
}

export default AlbumsScreen;
