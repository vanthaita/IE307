import React from 'react';
import { Text, View, ScrollView } from 'react-native';

interface FeedbackListProps {
  faqs: { id: number; text: string }[];
  isDarkMode: boolean;
}

const FeedbackList: React.FC<FeedbackListProps> = ({ faqs, isDarkMode }) => {
  return (
    <ScrollView className={`mt-4 ${isDarkMode ? 'bg-black' : 'bg-transparent'}`}>
      {faqs.map((faq) => (
        <View key={faq.id} className={`p-2 ${isDarkMode ? 'bg-black' : 'bg-transparent'}`}>
          <Text className={`${isDarkMode ? 'text-white' : 'text-black'}`}>Q: {faq.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default FeedbackList;
