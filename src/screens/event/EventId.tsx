import { View, Text, ScrollView, Image, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
 import { styles } from './EventId.style';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Card from '../../components/Cards/Card';
export let CastCard = ({data,navigation}: any) => {
    return (
        <FlatList

        horizontal
        pagingEnabled
        snapToAlignment='center'
        data={data}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
            renderItem={({ item }: any) => (
                <View style={{width:100,
                height:120,
             
                marginLeft:10
                }}>
                    <Image style={{width:'100%',height:'85%'}}
                    source={{ uri: `https://image.tmdb.org/t/p/w500${item.profile_path}` }}
                />
                    <Text  onPress={() => navigation.navigate("Person", { id: item.id, })} style={{position:'absolute',bottom:0}}>
                        {item.name}
                    </Text>
                </View>

            )}
        />
    )
}
export default function EventId({ route, navigation  }: any) {
    const [first, setfirst] = useState<any>()
    let [data_similar, setData_similar] = useState()
    let [images, setimages] = useState()
    let [CreditsData, setCreditsData] = useState()
    console.log(CreditsData, 'CreditsData');

    const [Loding, setLoding] = useState(true)
    const { id, } = route.params;
    let dataget = async () => {
        const res = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=499e2c60ff2050b7c47d8f3ed48c348a&language=en-US&page=1`
        );

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTllMmM2MGZmMjA1MGI3YzQ3ZDhmM2VkNDhjMzQ4YSIsInN1YiI6IjYyY2Q1NGU4ZThkMDI4MDA0ZjFhNWY5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ud3IA5dtvMcY4QnA1j7tDuhjEhQBP2l5fw5rzf8MPMw'
            }
        };

        const similar = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews`, options)
        const iamges = await axios.get(`https://api.themoviedb.org/3/movie/${id}/images`, options)
        const getCredits = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, options)
        setCreditsData(getCredits.data.cast.slice(0, 10))
        setimages(iamges.data.backdrops)
        setData_similar(similar.data.results)
        let data = res.data;
        await setfirst(data)
        await setLoding(false)
    }

    useEffect(() => {
        dataget()
    }, [id])
    if (Loding) {
        return (
            <Text>Loding... </Text>
        )
    }
    // const ImageGrid: React.FC = () => {
       
      
    //     const renderItem = ({ item }: { item: any }) => (
    //       <View style={styles.imageContainer}>
    //         <Image source={{ uri: `https://image.tmdb.org/t/p/w500${first.poster_path}` }} style={styles.image} />
    //       </View>
    //     );
      
    //     return (
    //       <FlatList
    //         data={images}
    //         renderItem={renderItem}
    //         keyExtractor={(item) => item.id}
    //         numColumns={2} // Задайте количество столбцов в сетке
    //         contentContainerStyle={styles.container}
    //       />
    //     );
    //   };

    return (
        <ScrollView style={{ flex: 1, }} >
            <View style={styles.block}>
                <Image style={styles.image}
                    source={{ uri: `https://image.tmdb.org/t/p/w500${first.poster_path}` }}
                />
                <View style={styles.contend}>
                    <Text style={{ color: '#fff', fontSize: 20, position: 'absolute', bottom: 50, left: 10 }}>
                        {first.title}
                    </Text>
                    <Text style={{ color: '#fff', fontSize: 10, }}>
                        {first.original_title}
                    </Text>
                    <View style={styles.contend_button}>
                        <Text style={{ color: "black" }}>Купить</Text>
                    </View>
                </View>
            </View>
            <View>
                <Text style={styles.h1}>
                    Обрати внимание на
                </Text>
                <Text style={styles.h1}>
                    О событии </Text>
                <Text style={{ fontSize: 16, marginLeft: 10 }}>
                    {first.overview}
                </Text>
                <Text style={styles.h1}>
                    Исполнители
                </Text>
                {/* <View style={styles.Performers_bock}>
                    <Image style={styles.Performers_image}
                        source={{ uri: `https://image.tmdb.org/t/p/w500${first.poster_path}` }}
                    />
                    <Text style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 10 }}>
                        {first.title}
                    </Text>
                </View> */}
                    <CastCard data={CreditsData} navigation={navigation} />
                <View style={styles.block_500}>
                    <View style={{ width: 10, height: 10, backgroundColor: 'red', borderRadius: 50, position: 'relative', top: 5, }}></View>
                    <Text style={{ marginLeft: 10, }}>{first.id}</Text>
                </View>
                <Text style={styles.h1}>Расписание выступлений</Text>
                <View style={styles.Schedule}>
                    <View style={{ display: 'flex', flex: 1, flexDirection: 'row', gap: 20, }}>
                        <Text>{first.release_date}</Text>

                    </View>
                    <Text style={styles.Schedule_button}>
                        Купить билеты
                    </Text>
                </View>
            </View>
            {/* <YaMap
userLocationIcon={{ uri: 'https://www.clipartmax.com/png/middle/180-1801760_pin-png.png' }}
initialRegion={{
lat: 50,
lon: 50,
zoom: 10,
azimuth: 80,
tilt: 100
}}
style={{ flex: 1 }}
/> */}

            <Card data={images} />
            <Text style={styles.h1}>Отзывы</Text>
            <FlatList

                data={data_similar}
                keyExtractor={(item: any) => item.id}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }: any) => (
                    <View
                    >

                        <View style={styles.Performers_bock2}  >
                            <Image style={styles.Performers_image}
                                source={{ uri: `https://image.tmdb.org/t/p/w500${item.author_details.avatar_path}` }}
                            />
                            <Text style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 10 }}>
                                {item.author}
                            </Text>
                        </View>

                        <AirbnbRating
                            count={10}
                            defaultRating={item.author_details.rating}
                            size={12}
                            reviewSize={0}
                            isDisabled
                            ratingContainerStyle={{ position: 'absolute', left: 0, top: 35 }}
                        />
                        <Text ellipsizeMode='tail' numberOfLines={3} style={{ overflow: 'hidden', width: '90%', margin: 5 }}>
                            {item.content}
                        </Text>
                    </View>

                )}
            />
        
        </ScrollView>

    )
}

// const styles = StyleSheet.create({
//     container: {
//       padding: 10,
//     },
//     imageContainer: {
//       flex: 1,
//       margin: 5,
//       aspectRatio: 1, // Поддержка пропорционального отображения изображений
//     },
//     image: {
//       flex: 1,
//       width: '100%',
//       resizeMode: 'cover',
//     },
//   });
  
  