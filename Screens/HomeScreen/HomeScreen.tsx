import React from 'react'
import { View, Text, Button } from 'react-native';
import styles from './styles';

const HomeScreen = ({ navigation }) => {
     return (
          <View style={styles.container}>
               <Text>HomeScreen</Text>
               <Button
                    title="Go to Details screen"
                    onPress={() => navigation.navigate("Details")}
               />
          </View>
     )
}

export default HomeScreen;
