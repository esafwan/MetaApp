/**
 * Card Component
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';

const Card = props => {
  return (
    <View style={styles.card}>
      <Text style={styles.h1}>{props.data.title}</Text>
      <Text>{props.data.description}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={props.data.methods.onPress}>
        <Text style={styles.buttonText}>{props.data.buttonName}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
