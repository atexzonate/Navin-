import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
     drawerContainer:{
          flex:1
     },
     drawerContent:{
          flex:1
     },
     userInfoSection:{
          paddingLeft:20
     },
     userAvatar:{
          flexDirection:'row',
          marginTop:15
     },
     userTitle:{
          marginLeft:15,
          flexDirection:'column'
     },
     title:{
          fontSize:16,
          marginTop:3,
          fontWeight:'bold'
     },
     caption:{
          fontSize:14,
          lineHeight:14,
     },
     row:{
          marginTop:20,
          flexDirection:'row',
          alignItems:'center',
     },
     section:{
          flexDirection:'row',
          alignItems:'center',
          marginRight:15
     },
     parapraph:{
          fontWeight:'bold',
          marginRight:3,
     },
     drawerSection:{
          marginTop:15
     },
     bottomDrawerScetion:{
          marginBottom:15,
          borderTopColor:'#f4f4f4',
          borderTopWidth:1
     },
     preference: {
          flexDirection:'row',
          justifyContent:'space-between',
          paddingVertical:12,
          paddingHorizontal:16
     }
})

export default styles

