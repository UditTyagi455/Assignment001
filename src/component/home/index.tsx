import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import { showData } from '../../json-data';

const Home = () => {
    const [showTabs,setShowTabs] =useState([]);
    const [array,setArray] = useState("");
    const [objectData,setObjectData] = useState("");


    const openTheTabs = (value:string) => {
      console.log("value :::",value);
      console.log(showData[value]);
      if(Array.isArray(showData[value])){
        setObjectData("")
       setArray(showData[value]);
      }else{
        setArray("");
        setObjectData(showData[value]);
      }
    }

    const openInternalTabs = () => {}
    
  return (
    <View >
        <ScrollView 
        contentContainerStyle={{display: "flex",flexDirection: "row",marginTop: 25}}
         horizontal={true}
         showsHorizontalScrollIndicator={false}
         >
        {Object.keys(showData)?.map((item,index) => {
        return (
            <TouchableOpacity  key={index} style={{paddingHorizontal: 22,paddingVertical: 8,borderRadius: 45,backgroundColor: "#023e8a",margin: 5}} onPress={() => openTheTabs(item)}>
                <Text style={{color: "white"}}>{item}</Text>
            </TouchableOpacity>
        )
      })}
        </ScrollView>

        { !!array && <View style={{marginTop: 25}}>
            <Text> I am a Array </Text>
        </View>}
        { !!objectData && <View style={{marginTop: 25}}>
        <ScrollView 
        contentContainerStyle={{display: "flex",flexDirection: "row"}}
         horizontal={true}
         showsHorizontalScrollIndicator={false}
         >
        {Object.keys(objectData)?.map((item,index) => {
        return (
            <TouchableOpacity  key={index} style={{paddingHorizontal: 22,paddingVertical: 8,borderRadius: 45,backgroundColor: "#48cae4",margin: 5}} onPress={() => openInternalTabs(item)}>
                <Text style={{color: "white"}}>{item}</Text>
            </TouchableOpacity>
        )
      })}
        </ScrollView>
            </View>}
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})