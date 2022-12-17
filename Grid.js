/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';

const Grid = props => {
  return (
    <View style={styles.card}>
      <Text style={styles.h1}>{props.data.title}</Text>
      <View style={styles.row}>
        <View style={[styles.containerRow, styles.col, styles.alignCenter]}>
          <Text style={[styles.fill, styles.addSpaceTop]}>
            {props.data.title}
          </Text>
          <TouchableOpacity style={[styles.button, styles.alignBottom]}>
            <Text style={styles.buttonText}>{props.data.buttonName}</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.containerRow, styles.col, styles.alignCenter]}>
          <Text style={[styles.fill, styles.addSpaceTop]}>
            {props.data.title}
          </Text>
          <TouchableOpacity style={[styles.button, styles.alignBottom]}>
            <Text style={styles.buttonText}>{props.data.buttonName}</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.containerRow, styles.col, styles.alignCenter]}>
          <Text style={[styles.fill, styles.addSpaceTop]}>
            {props.data.title}
          </Text>
          <TouchableOpacity style={[styles.button, styles.alignBottom]}>
            <Text style={styles.buttonText}>{props.data.buttonName}</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.containerRow, styles.col, styles.alignCenter]}>
          <Text style={[styles.fill, styles.addSpaceTop]}>
            {props.data.title}
          </Text>
          <TouchableOpacity style={[styles.button, styles.alignBottom]}>
            <Text style={styles.buttonText}>{props.data.buttonName}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Grid;
