import { Dimensions, StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    block:{
        position: 'absolute', bottom: 0, fontSize:20, paddingBottom: 10, paddingLeft: 10,height:'100%',  zIndex: 33, width: '100%', backgroundColor: "#0000003b" 
    },
    text_1:{
        color: '#ffff', position:'absolute', bottom:49, fontSize:20,left:10
    },
    text_2:{
        borderRadius:20,backgroundColor:'#fef339',color: 'black',paddingLeft:15, paddingRight:15,paddingTop:5,paddingBottom:5, position:'absolute', bottom:10, fontSize:20, right:10
    },
    text_3:{
        color:'#a4a6a9', position:'absolute', bottom:15,left:10
    },
    image:{
        position: 'absolute', zIndex: 4, width: '100%', height: '100%' 
    }
})