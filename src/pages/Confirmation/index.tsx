import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import Button from '../../components/Button';
import styles from './styles';

export default function Confirmation() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>😆️</Text>

        <Text style={styles.title}>Prontinho!</Text>

        <Text style={styles.subtitle}>
          Agora vamos começar a cuidar das suas{'\n'}
          plantinhas com muito cuidado.
        </Text>

        <View style={styles.footer}>
          <Button />
        </View>
      </View>
    </SafeAreaView>
  );
}
