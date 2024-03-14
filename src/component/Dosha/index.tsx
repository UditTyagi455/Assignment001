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

const Dosha = () => {
  const [showTabs, setShowTabs] = useState([]);
  const [array, setArray] = useState('');
  const [objectData, setObjectData] = useState([]);

  const route = useRoute();

  // console.log('route-value :::', route.params.value);

  const openTheTabs = (value: string) => {
    setObjectData([]);
    console.log('value :::', value, route.params.value);
    setObjectData([...route.params.value[value]]);
  };

  console.log('objectData :::::', objectData);

  return (
    <View>
      <ScrollView>
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
        {objectData && (
          <ScrollView
            contentContainerStyle={{
              marginTop: 25,
              display: 'flex',
              flexDirection: 'row',
              margin: 10,
            }}
            showsHorizontalScrollIndicator={false}
            horizontal={true}>
            {objectData.map((item, index) => {
              return item?.type === 'KEY_VALUE' ? (
                <View key={index} style={styles.container} key={index}>
                  <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                    <Row
                      data={Object.keys(item.data)}
                      style={styles.head}
                      textStyle={{
                        fontWeight: 'bold',
                        margin: 6,
                        color: 'black',
                      }}
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

        {objectData && (
          <ScrollView
            contentContainerStyle={{
              marginTop: 25,
              display: 'flex',
              flexDirection: 'column',
              margin: 10,
              // height: "100%",
            }}
            showsHorizontalScrollIndicator={false}
            horizontal={false}>
            {objectData?.map((item, index) => {
              return item?.type == 'PARAGRAPH' ? (
                <View
                  style={{
                    marginTop: 10,
                    flexDirection: 'column',
                  }}
                  key={index}>
                  <Text
                    style={{
                      color: 'black',
                      textAlign: 'center',
                      fontSize: 24,
                      fontWeight: '600',
                    }}>
                    {item?.heading}
                  </Text>
                  <Text
                    style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
                    {item?.heading}
                  </Text>
                  {item?.type &&
                    item.data.map((data, index) => (
                      <Text
                        style={{color: 'black'}}
                        key={Math.random() * 10000000}>
                        {data}
                      </Text>
                    ))}
                </View>
              ) : null;
            })}
          </ScrollView>
        )}

        {objectData && (
          <ScrollView
            contentContainerStyle={{
              marginTop: 25,
              display: 'flex',
              flexDirection: 'column',
              margin: 10,
            }}
            showsHorizontalScrollIndicator={false}
            horizontal={false}>
            {objectData?.map((item, index) => {
              return item?.type == 'KEY_PARAGRAPH' ? (
                <View
                  style={{
                    marginTop: 10,
                    flexDirection: 'column',
                  }}
                  key={index}>
                  <Text
                    style={{
                      color: 'black',
                      textAlign: 'center',
                      fontSize: 24,
                      fontWeight: '600',
                    }}>
                    {item?.heading}
                  </Text>
                  {Object.keys(item.data).map((items, key) => {
                    return (
                      <View key={Math.random() * 10000000}>
                        <Text
                          style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: 'black',
                          }}>
                          {items}
                        </Text>
                        {typeof Object.values(item.data)[key] == 'object' ||
                        Array.isArray(Object.values(item.data)[key]) ? (
                          Array.isArray(Object.values(item.data)[key]) ? (
                            <Text>blank Array</Text>
                          ) : (
                            Object.keys(Object.values(item.data)[key]).map(
                              (data, index) => {
                                return (
                                  <View key={Math.random() * 10000000}>
                                    <Text
                                      style={{
                                        fontWeight: 'bold',
                                        fontSize: 15,
                                      }}>
                                      {data}
                                    </Text>
                                    {Object.values(
                                      Object.values(item.data)[key],
                                    ).map((item, index) => (
                                      <Text style={{marginBottom: 5}}>
                                        {item}
                                      </Text>
                                    ))}
                                  </View>
                                );
                              },
                            )
                          )
                        ) : (
                          typeof(Object.values(item.data)[key]) == "boolean" ? <Text style={{color: 'black'}}>
                          false
                        </Text> : <Text style={{color: 'black'}}>
                            {Object.values(item.data)[key]}
                          </Text>
                        )}
                      </View>
                    );
                  })}
                </View>
              ) : null;
            })}
          </ScrollView>
        )}
      </ScrollView>
    </View>
  );
};

export default Dosha;

const styles = StyleSheet.create({});
