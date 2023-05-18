import {  StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    block:{
        overflow: 'hidden', marginLeft: 10, borderBottomColor: "black", borderBottomWidth: 2, height: 300, width: 200, marginTop: 10, borderRadius: 20 
    },
    text_1:{
        position: 'absolute', bottom: 0, paddingBottom: 10, paddingLeft: 10, color: '#ffff', zIndex: 33, width: '100%', backgroundColor: "#0000006b" 
    },
    image:{
        position: 'absolute', zIndex: 4, width: '100%', height: '100%' 
    },
    text_2:{
        position: 'absolute', zIndex: 22, color: 'black' 
    }
})