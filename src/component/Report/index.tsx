import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {Table, Row, Rows} from 'react-native-table-component';

const Report = () => {
  const [showTabs, setShowTabs] = useState([]);
  const [array, setArray] = useState('');
  const [objectData, setObjectData] = useState('');

  const route = useRoute();

  console.log('route-value :::', route.params.value);

  const openTheTabs = (value: string) => {
    console.log('value :::', value);
    console.log(route.params.value[value]);
    if (Array.isArray(route.params.value[value])) {
      setObjectData('');
      setArray(route.params.value[value]);
    } else {
      setArray('');
      setObjectData(route.params.value[value]);
    }
  };

  return (
    <View>
      <ScrollView
        contentContainerStyle={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: 25,
          height: 60,
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {Object.keys(route.params.value)?.map((item, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => openTheTabs(item)}>
              <View
                style={{
                  paddingHorizontal: 22,
                  borderRadius: 45,
                  backgroundColor: '#023e8a',
                  margin: 5,
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'white', padding: 3, zIndex: 999}}>
                  {item}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
      {array && (
        <ScrollView
          contentContainerStyle={{
            marginTop: 25,
            display: 'flex',
            flexDirection: 'row',
            margin: 10,
          }}
          showsHorizontalScrollIndicator={false}
          horizontal={true}>
          {array.map((item, index) => {
            return item?.type === 'KEY_VALUE' ? (
              <View key={index} style={styles.container}>
                <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                  <Row
                    data={Object.keys(item.data)}
                    style={styles.head}
                    textStyle={{fontWeight: 'bold', margin: 6, color: 'black'}}
                  />
                  <Rows
                    data={[Object.values(item.data)]}
                    textStyle={styles.text}
                  />
                </Table>
              </View>
            ) : null;
          })}
        </ScrollView>
      )}
      {array && (
        <ScrollView
          contentContainerStyle={{
            marginTop: 25,
            display: 'flex',
            flexDirection: 'column',
            margin: 10,
            // height: Dimensions.get('window').height,
          }}
          showsHorizontalScrollIndicator={false}
          horizontal={false}>
          {array?.map((item, index) => {
            return item?.type == 'PARAGRAPH' ? (
              <View
                style={{
                  marginTop: 10,
                  flexDirection: 'column',
                }}
                key={index}>
                <Text
                  style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
                  {item.heading}
                </Text>
                <Text style={{color: 'black'}}>{item.data[0]}</Text>
              </View>
            ) : null;
          })}
        </ScrollView>
      )}

      {array && (
        <ScrollView
          contentContainerStyle={{
            marginTop: 25,
            display: 'flex',
            flexDirection: 'column',
            margin: 10,
          }}
          showsHorizontalScrollIndicator={false}
          horizontal={false}>
          {array?.map((item, index) => {
            return item?.type == 'KEY_PARAGRAPH' ? (
              <View
                style={{
                  marginTop: 10,
                  flexDirection: 'column',
                }}
                key={index}>
                {Object.keys(item.data).map((items, key) => {
                  return (
                    <View key={Date.now()}>
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: 'bold',
                          color: 'black',
                        }}>
                        {items}
                      </Text>
                      { (typeof(Object.values(item.data)[key]) == "object" || Array.isArray(Object.values(item.data)[key]) ) ? <Text>object</Text> : <Text style={{color: 'black'}}>
                        {Object.values(item.data)[key]}
                      </Text> }
                      
                    </View>
                  );
                })}
              </View>
            ) : null;
          })}
        </ScrollView>
      )}
    </View>
  );
};

export default Report;

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
