import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  SectionList,
  Image,
  TouchableOpacity,
  ScrollView,
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

  // Toggle function for workouts
  const toggleWorkoutSelection = (id: string) => {
    setSelectedWorkouts((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((workoutId) => workoutId !== id)
        : [...prevSelected, id]
    );
  };

  // Toggle function for fruits/vegetables
  const toggleFruitsVegetablesSelection = (item: string) => {
    setSelectedFruitsVegetables((prevSelected) =>
      prevSelected.includes(item)
        ? prevSelected.filter((fruit) => fruit !== item)
        : [...prevSelected, item]
    );
  };

  const renderWorkOuts = ({ item }: { item: Workout }) => (
    <View style={styles.workoutItem}>
      <Text style={styles.itemTitle}>{item.type}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => toggleWorkoutSelection(item.id)}
      >
        <Text style={styles.buttonText}>
          {selectedWorkouts.includes(item.id) ? 'DESELECT' : 'SELECT'}
        </Text>
      </TouchableOpacity>
    </View>
  );

  const renderFruitsVegetables = ({ item }: { item: string }) => (
    <View style={styles.fruitVegItem}>
      <Text style={styles.itemTitle}>{item}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => toggleFruitsVegetablesSelection(item)}
      >
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
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
        <Text style={styles.sectionHeaderText}>Workouts</Text>
        <FlatList
          data={workouts}
          renderItem={renderWorkOuts}
          keyExtractor={(item) => item.id}
        />

        <Text style={styles.sectionHeaderText}>Fruits and Vegetables</Text>
        <SectionList
          sections={fruits_vegetables}
          renderItem={renderFruitsVegetables}
          renderSectionHeader={renderSectionHeader}
          keyExtractor={(item, index) => item + index}
        />

        <View style={styles.selectedItemsContainer}>
          <Text style={styles.selectedItemsText}>Selected Workouts: {selectedWorkouts.join(', ')}</Text>
          <Text style={styles.selectedItemsText}>
            Selected Fruits and Vegetables: {selectedFruitsVegetables.join(', ')}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    paddingBottom: 20,
  },
  sectionHeaderText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  workoutItem: {
    marginBottom: 12,
    padding: 16,
    borderRadius: 10,
    backgroundColor: '#ccefff',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fruitVegItem: {
    marginBottom: 12,
    padding: 16,
    borderRadius: 10,
    backgroundColor: '#ffebcc',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    backgroundColor: '#ffefcc',
  },
  selectedItemsText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
});

export default WorkoutScreen;
