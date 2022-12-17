/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, View, Button} from 'react-native';
import Components from './Components';

const GetComponent = ({name, data = null}) => {
  const ComponentToRender = Components[name];
  return <ComponentToRender data={data} />;
};

const App = () => {
  // const [importedComponent, setImportedComponent] = useState(null);
  const [count, setCount] = useState(1);

  const list = [
    {
      component: 'Grid',
      data: {
        title: 'This is ONE',
        description: 'This is description',
        buttonName: 'OK',
      },
    },
    {
      component: 'Card',
      data: {
        title: 'This is ONE',
        description: 'This is description',
        buttonName: 'OK',
        methods: {
          onPress: e => {
            console.log('onPress');
          },
          onabort: e => {
            console.log('onabort');
          },
        },
      },
    },
    {
      component: 'Grid',
      data: {
        title: 'This is ONE',
        description: 'This is description',
        buttonName: 'OK',
      },
    },
  ];

  const loadComponent = () => {};

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>{count}</Text>
          {list.map((item, key) => {
            console.log(item);
            return (
              <GetComponent name={item.component} key={key} data={item.data} />
            );
          })}
          {/* <GetComponent name="One" />
          <GetComponent name="Two" /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
