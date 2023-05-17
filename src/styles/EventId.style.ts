import {  StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    block: {
        width: '100%',
        height: 500,
        backgroundColor: "black"

    },
    image: {
        position: 'absolute', zIndex: 4, width: '100%', opacity: 0.7, height: '100%'
    },
    contend: {
        position: 'absolute', width: '100%', zIndex: 33, bottom: 10, padding: 10,
    },
    contend_button: {
        backgroundColor: "#e9ff00", width: 100, justifyContent: 'center', alignItems: "center", position: 'absolute', right: 10, bottom: 10, height: 30, borderRadius: 20
    },
    h1: {
        margin: 10,
    },
    Performers_bock: {
        borderColor: '#171717',
        borderWidth: 1,
      
        padding: 5,
        margin: 10,
        display: 'flex', 
         flexDirection: 'row', gap: 20,

        borderRadius: 30
    },
    Performers_image: {
        width: 40,
        height: 40,
        borderRadius: 50,
    },
    Schedule:{
       position:'relative',
        margin:10,
        borderColor: '#171717',
        borderWidth: 1,
        padding:20,
        borderRadius:10
    },
    Schedule_button:{
        position:'absolute',right:10,top:20,backgroundColor:'#fef339',paddingLeft:10,paddingRight:10,paddingBottom:5,paddingTop:5,borderRadius:5
    },
    block_500:{
        width: 60, padding: 5, borderRadius: 50, display: 'flex', flex: 1, flexDirection: 'row', margin: 10, borderWidth: 1, borderColor: 'black' 
    }

})