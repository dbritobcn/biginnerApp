import React, {Component} from 'react';
import {ActivityIndicator, Image, ScrollView, Text, View} from 'react-native';
import Axios from 'axios';
import HtmlContent from '../shared/HtmlContent';
import {REQUEST_URL} from '../../libs/constants';
import commonStyles from '../../assets/styles/common';
import colors from '../../res/colors';
import detailStyles from '../../assets/styles/detail';
import moment from 'moment';
import spacingStyles from '../../assets/styles/spacing';
// import {useNavigation} from '@react-navigation/native';

class NewsDetail extends Component {
  state = {
    post: [],
    loading: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const {post, loading} = this.state;
    let authors = [];
    if (post.length) {
      for (const [index, value] of post[0]._embedded.author.entries()) {
        authors.push(value.name);
      }
    }
    return (
      <ScrollView>
        {loading || !post.length ? (
          <ActivityIndicator
            style={commonStyles.loader}
            color={colors.blackPearl}
            size="large"
          />
        ) : (
          <View style={commonStyles.container}>
            <Text style={detailStyles.subtitle}>{post[0].title.rendered}</Text>
            <Text style={detailStyles.title}>{post[0].acf.subtitle}</Text>
            <Text style={[commonStyles.meta, spacingStyles.mb1, spacingStyles.mt2]}>{authors.join(', ')} {moment(post[0].date).format('DD/MM/YYYY')}</Text>
            <Image
              style={detailStyles.featureImage}
              source={{
                uri: post[0]._embedded['wp:featuredmedia'][0].source_url,
              }}
            />
            <HtmlContent content={post[0].content.rendered} />
          </View>
        )}
      </ScrollView>
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
