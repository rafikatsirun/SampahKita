import React from 'react'
import { useState, useEffect } from 'react'
import { Text, View, Button } from 'react-native';
import { FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet } from 'react-native';
import { Alert } from 'react-native';
import { Linking } from 'react-native';


function Callapi() {
    const jsonUrl = 'https://script.google.com/macros/s/AKfycbw1Iqe9vWNmxl753NEyHtMLY3tyDCipNw_VjmdJqw9uUxferPcykeoe1tnL9_TxtfWJ/exec';
    const [isLoading, setLoading] = useState(true);
    const [dataUser, setDataUser] = useState({});
    const [refresh, setRefresh] = useState(false);
    //difungsikan untuk memanggil API
    useEffect(() => {
        //fetch untuk mengambil data dari API/tertentu dengan metode fetch
        fetch(jsonUrl)
            //then untuk mengubah data menjadi json
            .then((response) => response.json())
            .then((json) => {
                //console log
                console.log(json)
                setDataUser(json)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }
        , []);

    function refreshPage() {
        fetch(jsonUrl)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setDataUser(json)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }
    return (
        <SafeAreaView>
            {isLoading ? (
                <View>
                    <Text>Loading...</Text>
                </View>
            ) : (
                <View>
                    <FlatList
                        data={dataUser}
                        onRefresh={() => { refreshPage() }}
                        refreshing={refresh}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <View>
                                <TouchableOpacity
                                    accessibilityRole="button"
                                    onPress={() => {
                                        Linking.openURL(`google.navigation:q=${item.latitude}, ${item.longitude}`)
                                    }}
                                    style={styles.linkContainer}>
                                    <View style={styles.card}>
                                        <View style={styles.avatar}>
                                            <FontAwesome5 name={item.icon} size={50} color={item.color} />
                                        </View>
                                        <View>
                                            <Text style={styles.cardtitle}>{item.nama}</Text>
                                            <Text style={styles. wrappedText}>Keterangan: {item.keterangan}</Text>
                                            <Text>Jenis: {item.jenis}</Text>
                                            <Text>X: {item.latitude}</Text>
                                            <Text>Y: {item.longitude}</Text>
                                        </View>
                                        <View style={{
                                            flex:1,
                                            justifyContent:'center',
                                            alignItems:'flex-end'
                                        }}>
                                            <FontAwesome5 name="chevron-right" size={20} color="blue" />

                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>

                        )}
                    />
                </View>
            )}
        </SafeAreaView>

    )
}

export default Callapi
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
        fontSize: 14,
        fontWeight: 'bold',
    },
    wrappedText: {
        fontSize: 14,
        flexWrap: 'wrap',
        width: 200,
    },
    card: {
        flexDirection: 'row',
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#C8DBBE',
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 5,
        marginHorizontal: 20,
        marginVertical: 7
    },
    form: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    }
})