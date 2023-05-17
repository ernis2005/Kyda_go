
import { useEffect, useState } from 'react';
import { Button, Dimensions, FlatList, Image, RefreshControl, SafeAreaView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
const WINDH = Dimensions.get("window").width;
const HEING = Dimensions.get("window").height;
import { styles } from '../../styles/Swper_block.style';
export default function Swper_block({ data }:any) {
    let [loding, setloding] = useState(true)
    useEffect(() => {
        setInterval(() => {
            setloding(false)
        }, 500)
    }, [])
    return (
        <FlatList
            // columnWrapperStyle={{ flex: 1, justifyContent: 'space-around', flexWrap:'wrap',  display:'flex', padding: 10 }}

            // contentContainerStyle={{ paddingBottom: 100 }}
            horizontal
            pagingEnabled
            snapToAlignment='center'
            data={data}

            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (

                <View
                    style={styless.wrap}
                //style={{ overflow: 'hidden', marginLeft: 10, borderBottomColor: "black", borderBottomWidth: 2, height: 350, minWidth: '100%', marginTop: 10, borderRadius: 20 }}
                >
                    <View style={styles.block}>
                    <Text  style={styles.text_1} >
                        {item.title}
                    </Text>
                    <Text  style={styles.text_2}>
                        {item.vote_count}
                    </Text>
                    <Text style={styles.text_3}>
                        {item.release_date}
                    </Text>
                    </View>
               

                    <Image style={styles.image}
                        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                    />
                </View>

            )}
        />
    )
}
const styless = StyleSheet.create({
    wrap: {
        width: WINDH * 0.99,
        margin: 10,
        height: HEING * 0.79 ,
        overflow: 'hidden',
        borderRadius: 20,
    }
})

