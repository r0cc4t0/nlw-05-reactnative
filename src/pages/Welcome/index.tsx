import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import wateringImg from '../../assets/watering.png';
import { Feather } from '@expo/vector-icons';

export default function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie{'\n'}
          suas plantas de{'\n'}
          forma fácil
        </Text>

        <Image style={styles.image} source={wateringImg} resizeMode="contain" />

        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas.{'\n'}
          Nós cuidamos de lembrar você sempre que precisar.
        </Text>

        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <Feather name="chevron-right" style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
