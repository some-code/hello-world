import React from 'react';
import { 
  StyleSheet, Text, View, Image,
  Animated
} from 'react-native';

class FadeIn extends React.Component {
  state = {
    fadeIn: new Animated.Value(0),
    fadeInUp: new Animated.Value(20),
  }
  componentDidMount() {
    const fadeInConfig = {
      toValue: 1,
      duration: 3000,
    }
    const fadeInUpConfig = {
      toValue: 0,
      duration: 2000,
    }
    Animated.timing(this.state.fadeIn, fadeInConfig).start();
    Animated.timing(this.state.fadeInUp, fadeInUpConfig).start();
  }
  render() {
    let {fadeIn, fadeInUp} = this.state;
    let style = {
      fadeIn: {
        opacity: fadeIn
      },
      fadeInUp: {
        opacity: fadeIn,
        transform: [
          {
            translateY: fadeInUp
          }
        ]
      }
    }
    return (
      <Animated.View style={style[this.props.animate]}>
        {this.props.children}
      </Animated.View>
    )
  }
}

export default class App extends React.Component {
  render() {
    let pic = {uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}
    return (
      <View style={styles.container}>
        <FadeIn animate='fadeIn'>
          <Image source={pic} style={styles.image}/> 
        </FadeIn>
        <FadeIn animate='fadeInUp'>
          <Text style={styles.text}>Hello world</Text>
        </FadeIn>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '500'
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10
  }
});
