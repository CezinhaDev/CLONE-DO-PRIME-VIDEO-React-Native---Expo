
import React, { useEffect } from 'react';
import { View, Image, StyleSheet, StatusBar } from 'react-native';

import PrimeVideoLogo from '../../../assets/amazon_logo.png';

export const Splash = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home'); // substitui pela tela Home após 3 segundos
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <Image source={PrimeVideoLogo} style={styles.logo} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // fundo preto padrão da Prime Video
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 220,
    height: 80,
  },
});
