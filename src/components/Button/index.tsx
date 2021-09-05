import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export default function Button() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Confirmar</Text>
    </TouchableOpacity>
  );
}
