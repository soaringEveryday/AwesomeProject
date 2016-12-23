/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ListView,
  Navigator,
  NavigatorIOS
} from 'react-native';
import MyScene from './js/MyScene'

class Blink extends React.Component {
  constructor(props) {
    super(props)
    this.state = {showText: true}

    setInterval(()=>{
      this.setState({showText: this.state.showText?false: true})
    }, 100)
  }

  render(){
    let display = this.state.showText?this.props.text:''
    return(
      <Text>
      {display}
      </Text>
    )
  }

}

class Blinks extends React.Component {
  render(){
    return(
      <View>
      <Blink text='hello world'/>
      <Blink text='hello mike'/>
      <Blink text='hello mary'/>
      <Blink text='hello jason'/>
      </View>
    )
  }
}

class FlexDirectionBasics extends Component {
  render() {
    return (
      // 尝试把`flexDirection`改为`column`看看
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

class AlignItemsBasics extends Component {
  render() {
    return (
      // 尝试把`alignItems`改为`flex-start`看看
      // 尝试把`justifyContent`改为`flex-end`看看
      // 尝试把`flexDirection`改为`row`看看
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};

class PizzaTranslator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {text: ''}
  }

  onTextChangeHandler = (text) => {
    this.setState({text})
  }

  render(){
    return(
      <View>
      <TextInput 
        style={{height: 40}}
        placeholder="please input text here"
        onChangeText={this.onTextChangeHandler}/>
      <Text style={{padding: 10, fontSize: 42}}>
        {this.state.text}
      </Text>
    </View>
    )
  }
}

class ListViewBasics extends React.Component {
  constructor(props) {
    super(props)

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows(['John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
      'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin','John', 'Joel', 'James', 'Jimmy', 
      'Jackson', 'Jillian', 'Julie', 'Devin'])
    }
  }

  render(){
    return(
      <View style={{flex: 1, paddingTop: 22}}>
        <ListView 
          dataSource={this.state.dataSource}
          renderRow={(rowData)=><Text style={{padding: 30}}>{rowData}</Text>}
          />
      </View>
    )
  }
}

class SimpleNavigationApp extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'My Initial Scene', index: 0 }}
        renderScene={(route, navigator) =>
          <MyScene
            title={route.title}

            // Function to call when a new scene should be displayed           
            onForward={ () => {    
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}

            // Function to call to go back to the previous scene
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />
    )
  }
}

class MySceneIos extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired
  }

  render() {
    return (
      <View>
      </View>
    )
  }

}

class SimpleNavigationAppIos extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{ 
          component: MyScene, 
          title: 'My Initial Scene', 
          index: 0 
        }}
        renderScene={(route, navigator) =>
          <MyScene
            title={route.title}

            // Function to call when a new scene should be displayed           
            onForward={ () => {    
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}

            // Function to call to go back to the previous scene
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />
    )
  }
}

export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ListViewBasics/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => SimpleNavigationAppIos);
