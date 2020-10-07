import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import CircleButton from '../elements/CircleButton';

class MemoEditScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.memoEditInput} multiline textAlignVertical='top' />
        <CircleButton name='check' onPress={() => { this.props.navigation.goBack(); }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoEditInput: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 32,
    padding: 16,
    fontSize: 16,
    justifyContent: 'flex-start',
  }, 
});

export default MemoEditScreen;
