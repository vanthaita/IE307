import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WorkoutScreen from '~/screens/WorkoutScreen';
export default function Home() {
  return (
    <WorkoutScreen />
  );
}
