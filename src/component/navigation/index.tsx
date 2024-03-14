import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../home';
import {showData} from '../../json-data';
import Report from '../Report';
import HouseCuspsAndSandhi from '../HouseCuspsAndSandhi';
import Dosha from '../Dosha';
import Gemstones from '../Gemstones';

const drawer = createDrawerNavigator();

const Navigation = () => {
    const showComponent = [
        {id: 1, component: Report},
        {id: 1, component: HouseCuspsAndSandhi},
        {id: 1, component: Dosha},
        {id: 1, component: Gemstones},
    ]
  console.log('type-of :::', showData["dosha"]);

  return (
    <drawer.Navigator>
      {Object.keys(showData).map((value, index) => {
        return (
          <drawer.Screen
            name={value.toUpperCase()}
            component={showComponent[index].component}
            key={index}
            initialParams={{value: showData[value]}}
          />
        );
      })}
    </drawer.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
