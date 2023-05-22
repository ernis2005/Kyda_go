import { View, Text, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { styles } from './Person.style';
import Card from '../../components/Cards/Card';
export default function Person({route,navigation}:any) {
    const { id, } = route.params;
    const [Loding, setLoding] = useState(true)
   let [ data, setData]=  useState <any>()
   let [ datapersonmovie_credits, setDatapersonmovie_credits]=  useState <any>()
   console.log(datapersonmovie_credits);
   
   
   
     let getData=  async()=> {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTllMmM2MGZmMjA1MGI3YzQ3ZDhmM2VkNDhjMzQ4YSIsInN1YiI6IjYyY2Q1NGU4ZThkMDI4MDA0ZjFhNWY5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ud3IA5dtvMcY4QnA1j7tDuhjEhQBP2l5fw5rzf8MPMw'
            }
        };
        const person = await axios.get(`https://api.themoviedb.org/3/person/${id}`, options)
        const personmovie_credits = await axios.get(`https://api.themoviedb.org/3/person/${id}/movie_credits`, options)
        
        await setData(person.data)
        await setDatapersonmovie_credits(personmovie_credits.data.cast.slice(0, 50))
        await setLoding(false)
     }
  
    useEffect(()=>{
        getData()
    },[])
    if (Loding) {
        return (
            <Text>Loding... </Text>
        )
    }
  return (
    <ScrollView >
      <View style={{display:'flex',flexDirection: 'row', flexWrap:'wrap',gap:10 }}>
      <Image  style={{width:150, height:200}}
                    source={{ uri: `https://image.tmdb.org/t/p/w500${data.profile_path}` }}
                />
                <View>
                  <Text style={{fontSize:25}}>
                  {data.name}
                </Text>
                <Text>
                {data.birthday}
                </Text>
{/*  */}
                </View>
                
      </View>
      <View>
        {/* <Text>
        Также известен как
        </Text>
        <Text>{data.also_known_as}</Text> */}
         <Text style={{fontSize:20 ,marginTop:10}}>
        Биография
        </Text>
        <Text>
          {data.biography}
        </Text>
 <Text  style={{fontSize:19,marginTop:10}}>50 фильмов с участием   {data.name}</Text>

        <Card data={datapersonmovie_credits} navigation={navigation} />
       
      </View>
    </ScrollView>
  )
}