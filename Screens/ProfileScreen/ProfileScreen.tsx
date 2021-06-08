import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from '../HomeScreen/styles'

const ProfileScreen = () => {
     return (
          <View style={styles.container}>
               <Text>Profile Screen</Text>
               <Pressable 
                    onPress={()=> alert('button Clicked!')}
               >
                    <Text>Click </Text>
               </Pressable>
          </View>
     )
}

export default ProfileScreen
