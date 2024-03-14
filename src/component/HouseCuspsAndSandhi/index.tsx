import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {Table, Row, Rows} from 'react-native-table-component';
import {ScrollView} from 'react-native-gesture-handler';

const HouseCuspsAndSandhi = () => {
  const route = useRoute();

  console.log('route-value :::', route.params.value);

  return (
    <View>
      <ScrollView
        contentContainerStyle={{
          marginTop: 25,
          display: 'flex',
          flexDirection: 'row',
          margin: 10,
        }}
        showsHorizontalScrollIndicator={false}
        horizontal={true}>
        {route.params.value.map((item, index) => {
          return (
            <Table
              borderStyle={{borderWidth: 2, borderColor: '#c8e1ff', margin: 5}}
              key={index}>
              <Row
                data={Object.keys(item.data[0])}
                style={styles.head}
                textStyle={{fontWeight: 'bold', margin: 6, color: 'black'}}
              />
              {item.data.map((item, index) => {
                return (
                  <Rows data={[Object.values(item)]} textStyle={styles.text} />
                );
              })}
            </Table>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default HouseCuspsAndSandhi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  head: {
    height: 40,
    backgroundColor: '#f1f8ff',
    width: '100%',
    color: 'black',
    fontWeight: '600',
  },
  text: {
    margin: 6,
    color: 'black',
  },
});
