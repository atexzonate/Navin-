import React from 'react'
import { View, Text, Pressable } from 'react-native';
import styles from './styles'

const ExploreScreen = () => {
     return (
          <View style={styles.container}>
               <Text>Explorer Screen</Text>
               <Pressable 
                    onPress={()=> alert('button Clicked!')}
               >
                    <Text>Click </Text>
               </Pressable>
          </View>
     )
}

export default ExploreScreen
