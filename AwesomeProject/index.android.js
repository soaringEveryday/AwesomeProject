/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react'
import {AppRegistry, StyleSheet, Text, View, Image} from 'react-native'
import NativeToast from './js/NativeModuleBridge'
import GlideImageView from './js/GlideImageView'

var MOCKED_MOVIES_DATA = [
  {
    title: 'Title',
    year: '2015',
    posters: {
      thumbnail: 'http://i.imgur.com/UePbdph.jpg'
    }
  }
];

var IMG_URL = "http://awb.img1.xmtbang.com/wechatmsg2015/article201502/20150204/thumb/7dc3aac5c0244a11ab315d177d1292ed.jpg"

export default class AwesomeProject extends Component {

  constructor(props) {
    super(props)

    this.state = {
      movie: MOCKED_MOVIES_DATA[0]
    }
  }

  _onPress = (event) => {
    NativeToast.showWithCallback("I am from native Toast!", NativeToast.LONG, (msg) => {
      const movie = this.state.movie
      movie.title = msg
      this.setState({movie})
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{
          uri: this.state.movie.posters.thumbnail
        }}
          style={styles.thumbnail}/>
        <View style={styles.rightContainer}>
          <Text style={styles.title} onPress={this._onPress}>{this.state.movie.title}</Text>
          <Text style={styles.year}>{this.state.movie.year}</Text>
        </View>
        <GlideImageView style={styles.glideimg} url={IMG_URL}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  thumbnail: {
    width: 53,
    height: 81,
    margin: 14
  },
  rightContainer: {
    flex: 1
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center'
  },
  year: {
    textAlign: 'center'
  },
  glideimg: {
    width: 80,
    height: 80,
    margin: 14
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
