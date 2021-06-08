import React,{useState} from 'react'
import { Linking, StyleSheet, View } from 'react-native';
import {DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer';
import {
     Avatar,
     Title,
     Caption,
     Paragraph,
     Drawer,
     Text,
     TouchableRipple,
     Switch
} from 'react-native-paper';
import styles from './styles'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';


export function DrawerContent(props) {

     const [isDarkTheme, setIsDarkTheme] = useState(false);

     const toggleTheme = () => {
          setIsDarkTheme(!isDarkTheme);
     }

     return(
          <View style={styles.drawerContainer}>
               <DrawerContentScrollView {...props}>
                    <View style={styles.drawerContent}>
                         <View style={styles.userInfoSection}>
                              <View style={styles.userAvatar}>
                                   <Avatar.Image
                                        source={{uri: 'https://olumideatewologun.com/img/portrait_small.jpg'}}
                                        size={50}
                                   />
                                   <View style={styles.userTitle}>
                                        <Title style={styles.title}>Olumide Atex</Title>
                                        <Caption style={styles.caption}>@Atexzonate</Caption>
                                   </View>
                              </View>
                              <View style={styles.row}>
                                   <View style={styles.section}>
                                        <Paragraph style={[styles.parapraph, styles.caption]}>
                                             80
                                        </Paragraph>
                                        <Caption style={styles.caption} >Following</Caption>

                                   </View>
                                   <View style={styles.section}>
                                        <Paragraph style={[styles.parapraph, styles.caption]}>
                                             100
                                        </Paragraph>
                                        <Caption style={styles.caption} >Followers</Caption>

                                   </View>
                              </View>
                         </View>
                         <Drawer.Section style={styles.drawerSection}>
                              <DrawerItem
                                   icon={({ color, size }) => (
                                        <Ionicons name="ios-home-outline" size={size} color={color} />
                                   )}
                                   label="Home"
                                   onPress={() => {props.navigation.navigate('Home')} }
                              />
                              <DrawerItem
                                   icon={({ color, size }) => (
                                        <Ionicons name="ios-person-circle-outline" size={size} color={color} />
                                   )}
                                   label="Profile"
                                   onPress={() => {props.navigation.navigate('Profile')}}
                              />
                              <DrawerItem
                                   icon={({ color, size }) => (
                                        <Ionicons name="ios-bookmark-outline" size={size} color={color} />
                                   )}
                                   label="Bookmark"
                                   onPress={() => {props.navigation.navigate('Bookmark') }}
                              />
                              <DrawerItem
                                   icon={({ color, size }) => (
                                        <Ionicons name="ios-cog-outline" size={size} color={color} />
                                   )}
                                   label="Setting"
                                   onPress={() => { props.navigation.navigate('Setting')}}
                              />
                              <DrawerItem
                                   icon={({ color, size }) => (
                                        <MaterialCommunityIcons name="account-check-outline" size={size} color={color} />
                                   )}
                                   label="support"
                                   onPress={() => {props.navigation.navigate('Support')}}
                              />
                         </Drawer.Section>
                         <Drawer.Section title="Prefernce">
                              <TouchableRipple onPress={()=>{toggleTheme()}}>
                                   <View style={styles.preference}>
                                        <Text>Dark Theme</Text>
                                        <View pointerEvents="none">
                                             <Switch value={isDarkTheme}/>
                                        </View>
                                        
                                   </View>
                              </TouchableRipple>

                         </Drawer.Section>
                    </View>
               </DrawerContentScrollView>
               <Drawer.Section style={styles.bottomDrawerScetion}>
                    <DrawerItem
                         icon={({color, size})=>(
                              <Ionicons name="ios-log-out-outline" size={size} color={color} />
                         )}
                         label="Sign Out"
                         onPress={()=> {}}
                    />
               </Drawer.Section>

          </View>
     )
     
}

