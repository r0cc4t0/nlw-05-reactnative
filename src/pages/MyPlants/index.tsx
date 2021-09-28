import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, Alert } from 'react-native';
import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Load from '../../components/Load';
import Header from '../../components/Header';
import PlantCardSecondary from '../../components/PlantCardSecondary';
import { PlantProps, loadPlants, removePlant } from '../../libs/storage';
import waterdrop from '../../assets/waterdrop.png';
import styles from './styles';

export default function MyPlants() {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWatering, setNextWatering] = useState<string>();

  useEffect(() => {
    async function loadStorageData() {
      const storedPlants = await loadPlants();

      const nextTime = formatDistance(
        new Date(storedPlants[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: ptBR }
      );

      setNextWatering(`Não esqueça de regar a ${storedPlants[0].name} às ${nextTime}`);

      setMyPlants(storedPlants);

      setLoading(false);
    }

    loadStorageData();
  }, []);

  if (loading) {
    return (
      <Load />
    );
  }

  function handleRemove(plant: PlantProps) {
    Alert.alert('Remover', `Deseja remover a ${plant.name}?`, [
      {
        text: 'Não 🙏️',
        style: 'cancel'
      },
      {
        text: 'Sim 😢️',
        onPress: async () => {
          try {
            await removePlant(plant.id);
            setMyPlants(oldData => oldData.filter(item => item.id !== plant.id));
          }
          catch (error) {
            Alert.alert('Não foi possível remover! 😢️');
          }
        }
      }
    ]);
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.spotlight}>
        <Image source={waterdrop} style={styles.spotlightImage} />

        <Text style={styles.spotlightTitle}>{nextWatering}</Text>
      </View>

      <View style={styles.plants}>
        <Text style={styles.plantsTitle}>Próximas Regadas</Text>

        <FlatList
          data={myPlants}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardSecondary data={item} handleRemove={() => { handleRemove(item) }} />
          )}
          showsVerticalScrollIndicator={false}
          style={styles.flatlist}
        />
      </View>
    </View>
  );
}
