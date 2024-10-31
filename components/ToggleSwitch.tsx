// components/ToggleSwitch.tsx
import React from 'react';
import { Text, Switch, View } from 'react-native';

interface ToggleSwitchProps {
  label: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
  isDarkMode: boolean;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label, value, onValueChange, isDarkMode }) => {
  return (
    <View className="flex-row justify-between px-4">
      <Text className={`text-lg ${isDarkMode ? 'text-white' : 'text-black'}`}>{label}</Text>
      <Switch value={value} onValueChange={onValueChange} />
    </View>
  );
};

export default ToggleSwitch;
