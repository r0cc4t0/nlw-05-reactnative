import React from 'react';
import { View, Text, Image } from 'react-native';
import { SvgFromUri } from 'react-native-svg';
import Button from '../../components/Button';
import waterdrop from '../../assets/waterdrop.png';
import styles from './styles';

export default function PlantSave() {
  return (
    <View style={styles.container}>
      <View style={styles.plantInfo}>
        <SvgFromUri uri="" height={150} width={150} />

        <Text style={styles.plantName}>Nome da Planta</Text>

        <Text style={styles.plantAbout}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quasi nihil autem facilis reiciendis, repellat labore?
        </Text>
      </View>

      <View style={styles.controller}>
        <View style={styles.tipContainer}>
          <Image source={waterdrop} style={styles.tipImage} />

          <Text style={styles.tipText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Text>
        </View>

        <Text style={styles.alertLabel}>
          Escolha o melhor horário para ser lembrado:
        </Text>

        <Button title="Cadastrar Planta" onPress={() => { }} />
      </View>
    </View>
  );
}
