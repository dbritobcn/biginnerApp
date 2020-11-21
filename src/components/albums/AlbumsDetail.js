import React, {Component} from 'react';
import {
  ActivityIndicator,
  Dimensions, Image,
  ScrollView,
  Text,
  View,
} from 'react-native';
import Axios from 'axios';
import HTML from 'react-native-render-html';
import WebView from 'react-native-webview';
import {REQUEST_URL} from '../../libs/constants';
import commonStyles from '../../assets/styles/common';
import detailStyles from '../../assets/styles/detail';
import colors from '../../res/colors';
import listStyles from '../../assets/styles/list';

class AlbumsDetail extends Component {
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
            <View style={commonStyles.row}>
              <Image
                style={listStyles.thumbnail}
                source={{
                  uri: post[0]._embedded['wp:featuredmedia'][0].source_url,
                }}
              />
              <View>
                <Text style={detailStyles.title}>{post[0].title.rendered}</Text>
                <Text style={detailStyles.subtitle}>{post[0].acf.artista}</Text>
                <Text>Año: {post[0].acf.ano}</Text>
                <Text>Puntuación: {post[0].acf.puntuacion}</Text>
                <Text>{authors.join(', ')}</Text>
              </View>
            </View>
            <HTML
              html={post[0].content.rendered}
              contentWidth={Dimensions.get('window').width}
              renderers={{
                iframe: (
                  htmlAttribs,
                  children,
                  convertedCSSStyles,
                  passProps,
                ) => {
                  return (
                    <View
                      key={passProps.key}
                      style={commonStyles.videoContainer}>
                      <WebView
                        scrollEnabled={false}
                        source={{ uri: htmlAttribs.src }}
                        style={commonStyles.video}
                      />
                    </View>
                  );
                },
                video: (
                  htmlAttribs,
                  children,
                  convertedCSSStyles,
                  passProps,
                ) => {
                  return (
                    <View
                      key={passProps.key}
                      style={commonStyles.videoContainer}>
                      <WebView
                        scrollEnabled={false}
                        source={{ uri: htmlAttribs.src }}
                        style={commonStyles.video}
                      />
                    </View>
                  );
                },
              }}
            />
          </View>
        )}
      </ScrollView>
    );
  }

  async fetchData() {
    const {post_id} = this.props.route.params;
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

export default AlbumsDetail;
