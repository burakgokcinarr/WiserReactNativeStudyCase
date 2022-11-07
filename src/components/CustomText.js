import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';

export const CustomText = (props) => {
    const text = props.text.split(' ');
    return <Text>{text.map(text => {
      if (text.startsWith('@') || text.startsWith('#')) {
        return <Text key={uuidv4()} style={[props.style, {color: 'blue'}]}>{text} </Text>;
      } 
      if (props.providerShare) {
          if (text.search("spotify") > -1) {
            var customColor = "green";
          } else if (text.search("youtube") > -1) {
            var customColor = "red";
          }
      }
      return <Text key={uuidv4()} style={[props.style, {color: customColor}]}>{text} </Text>;
    })}</Text>;
}

