// Tên: Tạ Văn Thái
// MSSV: 22521377
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  SectionList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { workouts, fruits_vegetables } from '~/constants/data';

interface Workout {
  id: string;
  type: string;
}

interface FruitVegetable {
  title: string;
  url: string;
  data: string[];
}

const WorkoutScreen: React.FC = () => {
  const [selectedWorkouts, setSelectedWorkouts] = useState<string[]>([]);
  const [selectedFruitsVegetables, setSelectedFruitsVegetables] = useState<string[]>([]);
  const toggleWorkoutSelection = (type: string) => {
    setSelectedWorkouts((prevSelected) =>
      prevSelected.includes(type)
        ? prevSelected.filter((workoutType) => workoutType !== type)
        : [...prevSelected, type]
    );
  };
  const toggleFruitsVegetablesSelection = (item: string) => {
    setSelectedFruitsVegetables((prevSelected) =>
      prevSelected.includes(item)
        ? prevSelected.filter((fruit) => fruit !== item)
        : [...prevSelected, item]
    );
  };

  const renderWorkouts = ({ item }: { item: Workout }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{item.type}</Text>
      <TouchableOpacity
        style={[styles.button, selectedWorkouts.includes(item.type) && styles.selectedButton]}
        onPress={() => toggleWorkoutSelection(item.type)}>
        <Text style={styles.buttonText}>
          {selectedWorkouts.includes(item.type) ? 'DESELECT' : 'SELECT'}
        </Text>
      </TouchableOpacity>
    </View>
  );

  const renderFruitsVegetables = ({ item }: { item: string }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{item}</Text>
      <TouchableOpacity
        style={[styles.button, selectedFruitsVegetables.includes(item) && styles.selectedButton]}
        onPress={() => toggleFruitsVegetablesSelection(item)}>
        <Text style={styles.buttonText}>
          {selectedFruitsVegetables.includes(item) ? 'DESELECT' : 'SELECT'}
        </Text>
      </TouchableOpacity>
    </View>
  );
  const renderSectionHeader = ({ section }: { section: FruitVegetable }) => (
    <View style={styles.sectionHeader}>
      <Image source={{ uri: section.url }} style={styles.sectionImage} />
      <Text style={styles.sectionTitle}>{section.title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>FlatList - Workouts</Text>
      <FlatList data={workouts} renderItem={renderWorkouts} keyExtractor={(item) => item.id} />
      <Text style={styles.headerText}>SectionList - Fruits and Vegetables</Text>
      <SectionList
        sections={fruits_vegetables}
        renderItem={renderFruitsVegetables}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item, index) => item + index}
      />
      <View style={styles.selectedItemsContainer}>
        <Text style={styles.selectedItemsText}>
          Selected Exercises:{' '}
          {selectedWorkouts.length > 0 || selectedFruitsVegetables.length > 0
            ? [...selectedWorkouts, ...selectedFruitsVegetables].join(', ')
            : 'None'}
        </Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'semibold',
    marginBottom: 16,
    color: '#00bfff',
  },
  itemContainer: {
    marginBottom: 12,
    padding: 16,
    borderRadius: 10,
    backgroundColor: '#e0f7fa',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  button: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#00bfff',
  },
  selectedButton: {
    backgroundColor: '#007acc',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  sectionHeader: {
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionImage: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  selectedItemsContainer: {
    marginTop: 20,
    padding: 16,
    borderRadius: 10,
    backgroundColor: '#ffe0b2',
  },
  selectedItemsText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default WorkoutScreen;
