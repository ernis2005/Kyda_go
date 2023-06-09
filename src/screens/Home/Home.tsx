import { View, Text, ScrollView, Image, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from '../../components/Cards/Card';
import Swper_block from '../../components/Swiper/Swiper_block';
import { styles } from './Home.style';


export default function Home({navigation }:any) {
    let [data, setData] = useState<any>()
    let getData = async () => {
        const res = await axios.get(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=499e2c60ff2050b7c47d8f3ed48c348a&language=en-US&page=1`
        );
        let data = res.data.results;
        setData(data)

    }
    
    useEffect(() => {
        getData()
    }, [])
    return (
        <ScrollView style={{ flex: 1 }}>
      
            <Swper_block data={data} />
            <Text style={styles.text} >События в ближайшие дни</Text>
            <Card data={data} navigation={navigation} />
            <Text style={styles.text}>В кино на этой неделе.</Text>
            <Card data={data} navigation={navigation} />
           {/* //// <Add/> */}
           
        </ScrollView>
    )
}




interface ImageItem {
  id: string;
  source: number;
}


