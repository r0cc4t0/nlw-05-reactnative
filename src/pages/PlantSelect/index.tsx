import React from 'react';
import { View, Text } from 'react-native';
import EnvironmentButton from '../../components/EnvironmentButton';
import Header from '../../components/Header';
import styles from './styles';

export default function PlantSelect() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />

        <Text style={styles.title}>Em qual ambiente</Text>

        <Text style={styles.subtitle}>você quer colocar sua planta?</Text>
      </View>

      <EnvironmentButton title="Cozinha" active></EnvironmentButton>
    </View>
  );
}
