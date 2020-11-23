import React from 'react';
import {Dimensions, View} from 'react-native';
import commonStyles from '../../assets/styles/common';
import WebView from 'react-native-webview';
import HTML from 'react-native-render-html';

const HtmlContent = (props) => {
  return (
    <HTML
      html={props.content}
      contentWidth={Dimensions.get('window').width}
      renderers={{
        iframe: (htmlAttribs, children, convertedCSSStyles, passProps) => {
          return (
            <View key={passProps.key} style={commonStyles.videoContainer}>
              <WebView
                scrollEnabled={false}
                source={{uri: htmlAttribs.src}}
                style={commonStyles.video}
              />
            </View>
          );
        },
        video: (htmlAttribs, children, convertedCSSStyles, passProps) => {
          return (
            <View key={passProps.key} style={commonStyles.videoContainer}>
              <WebView
                scrollEnabled={false}
                source={{uri: htmlAttribs.src}}
                style={commonStyles.video}
              />
            </View>
          );
        },
      }}
    />
  );
};

export default HtmlContent;
