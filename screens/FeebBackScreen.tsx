import React, { useState } from 'react';
import { Text, View, Alert, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import FeedbackInput from '~/components/FeedbackInput';
import FeedbackList from '~/components/FeedbackList';
import ToggleSwitch from '~/components/ToggleSwitch';

interface FAQ {
  id: number;
  text: string;
}

export default function FeedbackScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(true);
  const [feedback, setFeedback] = useState('');
  const [faqs, setFaqs] = useState<FAQ[]>([]);

  const handleFeedbackSubmit = () => {
    if (feedback.trim()) {
      setFaqs((prev) => [{ id: Date.now(), text: feedback }, ...prev]);
      setFeedback('');
      if (isNotificationEnabled) {
        Alert.alert('Feedback submitted', 'Thank you for your feedback!');
      }
    }
  };

  return (
    <SafeAreaView className="h-full w-full">
      <View className={`flex p-8 ${isDarkMode ? 'bg-black' : 'bg-white'} h-full`}>
        <View className="flex w-full flex-col items-center">
          <Image
            source={{
              uri: 'https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png',
            }}
            style={{ width: 100, height: 100, marginBottom: 20 }}
            resizeMode="contain"
          />
          <Text className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>
            React Native App
          </Text>
        </View>
        <View className="py-4">
          <ToggleSwitch
            label="Dark Mode"
            value={isDarkMode}
            onValueChange={setIsDarkMode}
            isDarkMode={isDarkMode}
          />
          <ToggleSwitch
            label="Enable Notifications"
            value={isNotificationEnabled}
            onValueChange={setIsNotificationEnabled}
            isDarkMode={isDarkMode}
          />
        </View>
        <View className="py-4">
          <Text className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>
            Feedback
          </Text>
        </View>
        <FeedbackInput
          feedback={feedback}
          onChange={setFeedback}
          onSubmit={handleFeedbackSubmit}
          isDarkMode={isDarkMode}
        />
        <Text className={`text-2xl ${isDarkMode ? 'text-white' : 'text-black'}`}>
          Frequently Asked Questions
        </Text>
        <FeedbackList faqs={faqs} isDarkMode={isDarkMode} />
      </View>
    </SafeAreaView>
  );
}
