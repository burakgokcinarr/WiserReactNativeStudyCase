import { View, Text, StyleSheet, Button, Image, TouchableOpacity, ActivityIndicator, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Global } from '../core';
import { Ionicons, Feather } from '@expo/vector-icons'; 
import Api from '../../network/Api';
import { FlashList } from "@shopify/flash-list";
import { Card } from '../components';
import { useActionSheet } from '@expo/react-native-action-sheet';

export default function Feeds({ navigation }) {

    const [data, setData]                = useState(null);
    const { showActionSheetWithOptions } = useActionSheet();

    // Call use Api
    const { response, loading, error } = Api({
        method: 'get',
        url: '/49d57423-8977-451b-9765-2cc0a049bd8a',
        headers: JSON.stringify({ accept: '*/*' })
    })

    useEffect(() => {
        navigation.setOptions({
            gestureEnabled: false,
            headerLeft: () => (
                <TouchableOpacity onPress={() => alert('This is a back button!')}>
                    <Ionicons name="chevron-back-outline" size={Global.backIconSize} color={Global.backButtonColor} />
                </TouchableOpacity>
            ),
            headerRight: () => (
                <TouchableOpacity onPress={() => alert('This is a button!')}>
                    <Feather name="sliders" size={Global.detailIconSize} color={Global.backButtonColor} />
                </TouchableOpacity>
            ),
        })
    }, []);

    useEffect(() => {
        if (response !== null) {
            setData(response);
            //console.log(response.length)
        }
    }, [response]);

    const onPress = (postIndex) => {
      const options                = ['Delete', 'Share', 'Add to Curation', 'Cancel'];
      const destructiveButtonIndex = 0;
      const cancelButtonIndex      = 3;
  
      showActionSheetWithOptions({ options, cancelButtonIndex, destructiveButtonIndex}, (selectedIndex) => {
        switch (selectedIndex) {
          case 1:
              // Share
              alert("Share " + postIndex)
            break;
          case 2:
              // Add to Curation
              alert("Add to Curation " + postIndex)
            break;
          case destructiveButtonIndex:
              // Delete
              alert("Delete " + postIndex)
            break;
          case cancelButtonIndex:
              // Canceled
              console.log("Cancel " + postIndex)
            break;
        }});
    }

  return (
    <SafeAreaView style={styles.container}>
      {
        loading ? (
          <ActivityIndicator size="large"/>
        ) : (
              error ? (
                <Text>{error}</Text>
              ) : (
                <View style={styles.dataList}>
                  <FlashList
                    data={data}
                    renderItem={({ item, index }) => <Card data={item} index={index} postClicked={onPress}/>}
                    estimatedItemSize={200}
                  />
                </View>
              )
        ) 
      }
    </SafeAreaView>
  )
}

const containerBase = {
  flex: 1,
  backgroundColor: '#D1D5DB',
}

const styles = StyleSheet.create({
    container: {
      ...containerBase,
      alignItems: 'center',
      justifyContent: 'center',
    },
    dataList: {
      ...containerBase,
      width: '100%',
      height: '100%'
    }
  });
  

