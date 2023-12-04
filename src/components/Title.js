import React from 'react';
import {View, Text} from 'react-native';
const Title = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      }}>
      <Text
        style={{
          fontSize: 28,
          fontWeight: 'bold',
          color: '#373248',
          textAlign: 'center',
        }}>
        SAMPAHKITA
      </Text>
      <Text style={{textAlign: 'center'}}>
        Jadilah Bagian Dari Solusi, Bukan Polusi
      </Text>
      <Text style={{marginTop: 20, textAlign: 'center', marginHorizontal: 50}}>
        Aplikasi ini membantu dalam mengatasi sampah yang ada di muka bumi
      </Text>
    </View>
  );
};

export default Title;
