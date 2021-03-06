import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import * as Font from 'expo-font';
import { createIconSet } from '@expo/vector-icons';
import fontAwsome from '../../assets/fonts/fa-solid-900.ttf';

const glyphMap = {
  pencil: '\uf303',
  plus: '\uf067',
  check: '\uf00c',
};
const CustomIcon = createIconSet(glyphMap, 'FontAwsome', 'custom-icon-font.ttf');

class CircleButton extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      FontAwsome : fontAwsome,
    });

    this.setState({ fontsLoaded: true });
  }
  
  render() {
    const { name, style, color, onPress } = this.props;
    // const style = this.props.style;

    let bgColor = '#e31676';
    let textColor = '#fff';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#e31676';
    }

    return (
      <TouchableHighlight style={[styles.container, style]} onPress={this.props.onPress} underlayColor='transparent'>
        <View style={[styles.circleButton, { backgroundColor: bgColor }]}>
          {
            this.state.fontsLoaded ? (
              <CustomIcon name={name} style={[styles.circleButtonTitle, {color: textColor}]} />
            ) : null
          }
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    position: 'absolute',
    right: 32,
    bottom: 32,
  },
  circleButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#750037',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  circleButtonTitle: {
    fontFamily: 'FontAwsome',
    fontSize: 24,
    lineHeight: 36,
  },
});

export default CircleButton
