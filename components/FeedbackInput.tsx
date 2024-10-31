import React from 'react';
import { TextInput, Button } from 'react-native';

interface FeedbackInputProps {
  feedback: string;
  onChange: (text: string) => void;
  onSubmit: () => void;
  isDarkMode: boolean;
}

const FeedbackInput: React.FC<FeedbackInputProps> = ({
  feedback,
  onChange,
  onSubmit,
  isDarkMode,
}) => {
  return (
    <>
      <TextInput
        className={`border ${isDarkMode ? 'border-white' : 'border-black'} mb-4 rounded p-2`}
        multiline
        numberOfLines={6}
        placeholder="Enter your feedback here..."
        placeholderTextColor={isDarkMode ? 'lightgray' : 'gray'} 
        value={feedback}
        onChangeText={onChange}
        style={{
          paddingVertical: 10, 
          textAlignVertical: 'top',
          color: isDarkMode ? 'white' : 'black',
        }}
      />
      <Button title="Send Feedback" onPress={onSubmit} />
    </>
  );
};

export default FeedbackInput;
