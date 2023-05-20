import { Dimensions, StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
header:{
    
     justifyContent: 'center', alignItems: 'center' 

},
input:{
    
    borderColor: "#a4a6a9", borderWidth: 2, width: '90%', margin: 0, padding: 5, borderRadius: 10 
},
map:{
    flex: 1, gap: 10, justifyContent: 'space-around', flexWrap: 'wrap', display: 'flex', padding: 10
},
card_block:{
    position: 'relative',  minWidth: '45%', height: 250, backgroundColor: 'red' 
},
card_image:{
    position: 'absolute', zIndex: 4, width: '100%', height: '100%' 
},
card_text:{
    position: 'absolute', bottom: 0, paddingBottom: 10, paddingLeft: 10, color: '#ffff', zIndex: 33, width: '100%', backgroundColor: "#0000006b" 
}
})