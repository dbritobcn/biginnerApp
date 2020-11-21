import React, {Component} from 'react';
import {ActivityIndicator, Dimensions, Text, View} from 'react-native';
import Axios from 'axios';
import HTML from 'react-native-render-html';
import {REQUEST_URL} from '../../libs/constants';
import commonStyles from '../../assets/styles/common';
import colors from '../../res/colors';
// import {useNavigation} from '@react-navigation/native';

class NewsDetail extends Component {
  // const navigation = useNavigation();
  // let post = navigation.getParam('post');
  // console.log('post *******', post);
  state = {
    post: [],
    loading: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    // let post = this.state.post;
    const {post, loading} = this.state;
    let authors = [];
    if (post.length) {
      for (const [index, value] of post[0]._embedded.author.entries()) {
        authors.push(value.name);
      }
    }
    // console.log('post', post);
    return (
      <View>
        {loading || !post.length ? (
          <ActivityIndicator
            style={commonStyles.loader}
            color={colors.blackPearl}
            size="large"
          />
        ) : (
          <View>
            <Text>{post[0].title.rendered}</Text>
            <Text>{post[0].excerpt.rendered}</Text>
            <Text>{authors.join(', ')}</Text>
            <HTML
              html={post[0].content.rendered}
              imagesMaxWidth={Dimensions.get('window').width}
            />
          </View>
        )}
      </View>
    );
  }

  async fetchData() {
    const {post_id} = this.props.route.params;
    // this.props.navigation.setOptions({title: post.title});
    this.setState({loading: true});
    await Axios.get(`${REQUEST_URL}/posts?_embed&include[]=${post_id}`)
      .then((response) => {
        this.setState({
          post: response.data,
          loading: false,
        });
      })
      .catch((error) => {
        alert('Hubo un error cargando el artículo');
        this.setState({loading: false});
        console.log('error', error);
      });
  }
}

export default NewsDetail;
