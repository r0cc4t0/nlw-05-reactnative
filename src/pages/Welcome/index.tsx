import React from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import wateringImg from '../../assets/watering.png';

export default function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie{'\n'}
        suas plantas{'\n'}
        de forma fácil
      </Text>

      <Image style={styles.image} source={wateringImg} />

      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas.{'\n'}
        Nós cuidamos de lembrar você sempre que precisar.
      </Text>

      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.buttonText}>Avançar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
