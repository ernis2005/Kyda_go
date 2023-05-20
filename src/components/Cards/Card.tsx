
import { Button, FlatList, Image, RefreshControl, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { styles } from './Card.style';
import { useEffect, useState } from 'react';

export default function Card({ data,navigation }:any) {
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
                <View>
                    {item.poster_path?(
                    <View style={styles.block } >
                    {item.title?(
                        <Text
                        onPress={() => navigation.navigate("EventId", { id: item.id, })}
                          style={styles.text_1} >
                            {item.title}
                        </Text>
                    ):null}
                       
                        {item.poster_path ?( 
                        <Image style={styles.image}
                            source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                        />):null}
                          {item.file_path ?( 
                        <Image style={styles.image2}
                            source={{ uri: `https://image.tmdb.org/t/p/w500${item.file_path}` }}
                        />):null}
                      
                    </View>
                 ):null
                 }

{item.file_path?(
    <View style={styles.block2 } >

       
        
          {item.file_path ?( 
        <Image style={styles.image2}
            source={{ uri: `https://image.tmdb.org/t/p/w500${item.file_path}` }}
        />):null}
      
    </View>
):null}
                </View>
 
                
            )}
        />
    )
}