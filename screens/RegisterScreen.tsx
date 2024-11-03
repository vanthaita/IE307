// Tên: Tạ Văn Thái
// MSSV: 22521377
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const RegisterScreen = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 px-6">
      <View className="w-full">
        <FontAwesome
          name="user-plus"
          size={50}
          color="#4CAF50"
          style={{ marginBottom: 16, alignSelf: 'center' }}
        />
        <Text className="mb-8 text-center text-3xl font-semibold text-gray-800">
          Create Account
        </Text>

        <View className="mb-4">
          <Text className="mb-2 font-medium text-gray-700">Username</Text>
          <TextInput
            className="w-full rounded-xl border border-gray-300 bg-gray-100 p-4 focus:border-blue-400"
            placeholder="Enter your username"
            value={username}
            onChangeText={setUsername}
          />
        </View>

        <View className="mb-4">
          <Text className="mb-2 font-medium text-gray-700">Email</Text>
          <TextInput
            className="w-full rounded-xl border border-gray-300 bg-gray-100 p-4 focus:border-blue-400"
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View className="mb-4">
          <Text className="mb-2 font-medium text-gray-700">Password</Text>
          <TextInput
            className="w-full rounded-xl border border-gray-300 bg-gray-100 p-4 focus:border-blue-400"
            placeholder="Enter your password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <View className="mb-6">
          <Text className="mb-2 font-medium text-gray-700">Confirm Password</Text>
          <TextInput
            className="w-full rounded-xl border border-gray-300 bg-gray-100 p-4 focus:border-blue-400"
            placeholder="Confirm your password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>

        {error ? <Text className="mb-4 text-center text-sm text-red-500">{error}</Text> : null}

        <TouchableOpacity
          onPress={handleRegister}
          className="w-full rounded-xl bg-blue-500 py-3 shadow-lg active:bg-blue-600">
          <Text className="text-center text-lg font-bold text-white">Register</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/(auth)/login')} className="mt-6">
          <Text className="text-center font-semibold text-blue-500">
            Already have an account? Login
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
