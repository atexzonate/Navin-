import React from 'react'
import { View, Text,Button } from 'react-native'
import styles from './styles'

const DetailsScreen = ({navigation}) => {
     return (
          <View style={styles.container}>
          <Text>Details Screen</Text>
          <Button
            title="Go to Details screen again ...."
            onPress={()=> navigation.push("Details")}
          />
          <Button
            title="Go to Home"
            onPress={()=> navigation.navigate("Home")}
          />
          <Button
            title="Go back"
            onPress={()=> navigation.goBack()}
          />
          <Button
            title="Go to the 1st Screen"
            onPress={()=> navigation.popToTop()}
          />
        </View>
     )
}

export default DetailsScreen