import React from 'react';
import mahasiswa from './data/mahasiswa.json';
import { View, Text, FlatList, StyleSheet} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Getjsonfile = () => {
  return (
    <FlatList
      data={mahasiswa}
      renderItem={({item}) => (
          <View style={styles.card}>
            <View>
              <FontAwesome5 name={item.icon} size={50} color={item.color} />
            </View>
            <View>
              <Text>{item.nama}</Text>
              <Text>{item.nim}</Text>
              <Text>{item.kelas}</Text>
              <Text>{item.jeniskelamin}</Text>
            </View>
          </View>
      )}
    />
  );
};

export default Getjsonfile;

const styles = StyleSheet.create({
    title: {
      paddingVertical: 12,
      backgroundColor: '#333',
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    avatar: {
      borderRadius: 100,
      width: 80,
    },
    cardtitle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    card: {
      flexDirection: 'row',
      padding: 20,
      borderRadius: 10,
      backgroundColor: 'white',
      shadowColor: '#000',
      shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
      elevation: 2,
      marginHorizontal: 20,
      marginVertical: 7
    },
   })
   