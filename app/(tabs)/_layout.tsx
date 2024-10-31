import { Link, Tabs } from 'expo-router';
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
        headerShown: false,
      }}>
      <Tabs.Screen
        name="feed"
        options={{
          title: 'Feed',
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'workouts',
        }}
      />
      <Tabs.Screen
        name="feedback"
        options={{
          title: 'feedbacks',
        }}
      />
    </Tabs>
  );
}
