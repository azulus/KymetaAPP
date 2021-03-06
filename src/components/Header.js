import React from 'react'
import {Text, View} from 'react-native'

const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return(
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 25,
    paddingBottom: 25,
    shadowColor: '#FFF',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
  }
};

export default Header;
