import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import commonStyles from '../../assets/styles/common';
import listStyles from '../../assets/styles/list';
import moment from 'moment';

const AlbumsItem = (props) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={listStyles.item}
      onPress={() =>
        navigation.navigate('albumsDetail', {
          post_id: props.item.id,
        })
      }>
      <View style={commonStyles.row}>
        <Image
          style={listStyles.thumbnail}
          source={{
            uri: props.item._embedded['wp:featuredmedia'][0].source_url,
          }}
        />
        <View style={commonStyles.infoBox}>
          <View>
            <Text style={listStyles.title}>{props.item.acf.artista}</Text>
            <Text style={listStyles.subtitle}>{props.item.title.rendered}</Text>
          </View>
          <Text style={commonStyles.meta}>
            {props.item._embedded.author[0].name} {moment(props.item.date).format('DD/MM/YYYY')}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default AlbumsItem;
