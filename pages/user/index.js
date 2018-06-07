import React from 'react';
import { 
  StyleSheet, Text, View, Image
} from 'react-native';

export default class Home extends React.Component {
  static navigationOptions = {
    title: '个人中心',
  };
  render() {
    return (
      <View style={styles.container}>  
        <View style={styles.container}>
          <Text>个人中心页面</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
  },
});
