import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import {WebView} from 'react-native-webview';
import Getjsonfile from '../Getjsonfile';


const webmap = require('../peta/map.html');

const Tab = createBottomTabNavigator();
const forminput =
  'https://rafikatsirun.github.io/pgpbl12/react-native-content-petalokasiobjek/';

function HomeScreen() {
  return (
    <View>
      <Text style={styles.title}>APLIKASI PETA LOKASI LAUNDRY</Text>
      <Text style={styles.description}>
        {' '}
        Aplikasi Ini Dibuat Dengan Penuh Effort
      </Text>
      <View style={styles.container}>
        <Text> Stack:</Text>
        <Text> 1. React Native</Text>
        <Text> 2. HTML</Text>
        <Text> 3. LeafletJS</Text>
        <Text> 4. Google Sheets</Text>
        <Text> 5. App Script</Text>
        <Text> 6. FontAwesome5</Text>
        <Text> 7. Github</Text>
      </View>
    </View>
  );
}
function Map() {
  return <WebView source={{uri: webmap}} />;
}
function SettingsScreen() {
  return <WebView source={{uri: forminput}} />;
}
function ProfileScreen() {
  return (
    <View>
      <Portofolio />
    </View>
  );
}
function MahasiswaScreen() {
  return (
    <View>
      <Getjsonfile />
    </View>
  );
}

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Map',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="map-marked-alt" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Mahasiswa"
          component={MahasiswaScreen}
          options={{
            tabBarLabel: 'Database',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="database" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="user-circle" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 600,
    resizeMode: 'stretch',
  },
  listitems: {
    padding: 20,
    alignItems: 'center',
  },
  caption: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  container: {
    marginTop: 20,
    marginHorizontal: 20,
    padding: 20,
    backgroundColor: '#fff',
    color: 'white',
  },
  description: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
});
