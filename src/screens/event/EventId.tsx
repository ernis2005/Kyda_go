import { View, Text, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { styles } from './EventId.style';
export default function EventId() {
    const [first, setfirst] = useState<any>()
    const [Loding, setLoding] = useState(true)

    let dataget = async () => {
        const res = await axios.get(
            `https://api.themoviedb.org/3/movie/500?api_key=499e2c60ff2050b7c47d8f3ed48c348a&language=ru-US&page=1`
        );
        let data = res.data;
        await setfirst(data)
        await setLoding(false)
    }
    useEffect(() => {
        dataget()
    }, [])
    if (Loding) {
        return (
            <Text>Loding... </Text>
        )
    }
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
                <View style={styles.Performers_bock}>
                    <Image style={styles.Performers_image}
                        source={{ uri: `https://image.tmdb.org/t/p/w500${first.poster_path}` }}
                    />
                    <Text style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 10 }}>
                        {first.title}
                    </Text>
                </View>
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
        </ScrollView>
    )
}