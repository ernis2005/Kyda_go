import axios from 'axios';

import { useEffect, useState } from 'react';
import { FlatList, Image, RefreshControl, ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
 import { styles } from './Search.style';

export default function Search({navigation}:any) {
    const [Data, setData] = useState()
    const [Loding, setLoding] = useState(true)
    let [searchcity, setSearchcity] = useState("");
    useEffect(() => {
        getData('popular')
    }, [])
    let getData = async (popular:any) => {
        try {

              
                const res = await axios.get(`https://api.themoviedb.org/3/movie/${popular?popular:'popular'}?api_key=499e2c60ff2050b7c47d8f3ed48c348a&language=en-US&page=1`);
                await setData(res.data.results)
                await setLoding(false)
            
        
        } catch (error) {
            console.log(error);
            
        }
    }
  
    if (Loding) {
        return (
            <Text>
                Loding....
            </Text>
        )
    }
     let top_rated =()=>{
        let data='top_rated'
        getData(data)
        console.log(data)
     }
     let popular =()=>{
        let data='popular'
        getData(data)
        console.log(data)
     }
     let upcoming =()=>{
        let data='upcoming'
        getData(data)
        console.log(data)
     }
     let now_playing =()=>{
        let data='now_playing'
        getData(data)
        console.log(data)
     }
    return (
        <View style={styles.header}>
            <Text style={{fontSize:24}} >
            Search
            </Text>
            <TextInput
                placeholder="Ведете название "
                onChangeText={(text) => setSearchcity(text)}
                value={searchcity}
                style={styles.input}
            />
            <ScrollView>
            <View style={{display:'flex',  flexDirection: 'row' , flexWrap:'wrap'}}>
            <Text onPress={()=>top_rated()} style={{backgroundColor:'#cdc9c9',padding:5, borderRadius:10, color:'#000',margin:5}}>Топ  Рейтинг</Text>
            <Text onPress={()=>popular()} style={{backgroundColor:'#cdc9c9',padding:5, borderRadius:10, color:'#000',margin:5}}>Популярный</Text>
            <Text onPress={()=>upcoming()} style={{backgroundColor:'#cdc9c9',padding:5, borderRadius:10, color:'#000',margin:5}}>фильмов, которые скоро выйдут</Text>
            <Text onPress={()=>upcoming()} style={{backgroundColor:'#cdc9c9',padding:5, borderRadius:10, color:'#000',margin:5}}>фильмов, которые сейчас идут</Text>
            </View>
           
            <View>
                <FlatList
                    columnWrapperStyle={styles.map}
                    numColumns={2}
                    contentContainerStyle={{ paddingBottom: 100 }}
                    snapToAlignment='center'
                    data={Data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }:any) => {
                        if (searchcity == "") {
                            return ( 
                                <View style={styles.card_block} >
                                    <Image style={styles.card_image}
                                        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                                    />
                                    <Text onPress={() => navigation.navigate("EventId", { id: item.id, })} style={styles.card_text} >{item.title}</Text>
                                </View>
                            )
                        }
                        if (item.title.toLowerCase().includes(searchcity.toLowerCase())) {
                            return (
                                <View  style={{ position: 'relative', width: '45%', height: 250, backgroundColor: 'red' }}>
                                    <Image style={{ position: 'absolute', zIndex: 4, width: '100%', height: '100%' }}
                                        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                                    />
                                    <Text onPress={() => navigation.navigate("Card_id", { id: item.id, })}  style={{ position: 'absolute', bottom: 0, paddingBottom: 10, paddingLeft: 10, color: '#ffff', zIndex: 33, width: '100%', backgroundColor: "#0000006b" }} >{item.title}</Text>
                                </View>
                            )
                        }
                    }}
                />
            </View>
            </ScrollView>
           
        </View>
    )
}