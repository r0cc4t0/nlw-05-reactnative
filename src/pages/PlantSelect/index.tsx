import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import EnvironmentButton from '../../components/EnvironmentButton';
import Header from '../../components/Header';
import api from '../../services/api';
import styles from './styles';

interface EnvironmentProps {
  key: string;
  title: string;
};

export default function PlantSelect() {
  const [environments, setEnvironments] = useState<EnvironmentProps[]>();

  useEffect(() => {
    async function fetchEnvironment() {
      const { data } = await api.get('plants_environments');
      setEnvironments([
        {
          key: 'all',
          title: 'Todos'
        },
        ...data
      ]);
    }
    fetchEnvironment();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />

        <Text style={styles.title}>Em qual ambiente</Text>

        <Text style={styles.subtitle}>você quer colocar sua planta?</Text>
      </View>

      <View>
        <FlatList
          data={environments}
          renderItem={({ item }) => (
            <EnvironmentButton title={item.title} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.environmentList}
        />
      </View>
    </View>
  );
}
