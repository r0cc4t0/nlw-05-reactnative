import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import userImg from '../../../src/assets/user.png';

export default function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.username}>Usuário</Text>
      </View>
      <Image source={userImg} style={styles.image} />
    </View>
  );
}
