
import { Button, FlatList, Image, RefreshControl, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { styles } from './Card.style';
import { useEffect, useState } from 'react';
export default function Card({ data, }:any) {
  console.log(data,'erns');
  
    return (
        <FlatList
         
            horizontal
            pagingEnabled
            snapToAlignment='center'
            data={data}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (

                <View style={styles.block}>
                    <Text
                    // onPress={() => navigation.navigate("Card_id", { id: item.id, })}
                      style={styles.text_1} >
                        {item.title}
                    </Text>
                    <Image style={styles.image}
                        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                    />
                    <Text style={styles.text_2} 
                    //onPress={() => storeData(item)}
                    >
                        hello
                    </Text>
                </View>
            )}
        />
    )
}