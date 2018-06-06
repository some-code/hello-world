
import React from 'react';
import { 
  StyleSheet, Text, View, Button
} from 'react-native';

export default class Home extends React.Component {
  static navigationOptions = {
    title: '首页',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>  
        <View style={styles.container}>
          <Button
            title="去个人中心"
            onPress={() =>
              navigate('Profile', { name: 'Jane' })
            }
          />
          <Text>首页</Text>
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
