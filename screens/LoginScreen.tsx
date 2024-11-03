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

import { useAuth } from '~/context/AuthContext';

const LoginScreen: React.FC = () => {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const isLoggedIn = login(email, password);
    if (!isLoggedIn) {
      setError('Invalid email or password');
    } else {
      setError('');
      router.push('/(tabs)/feed');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 px-6">
      <View className="w-full">
        <Text className="mb-8 text-center text-3xl font-semibold text-gray-800">Welcome Back</Text>

        <View className="mb-6">
          <Text className="mb-2 font-medium text-gray-600">Email</Text>
          <TextInput
            className="w-full rounded-xl border border-gray-300 bg-gray-100 p-4 focus:border-blue-400"
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View className="mb-6">
          <Text className="mb-2 font-medium text-gray-600">Password</Text>
          <TextInput
            className="w-full rounded-xl border border-gray-300 bg-gray-100 p-4 focus:border-blue-400"
            placeholder="Enter your password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View className='flex items-end mb-2'>
          <TouchableOpacity>
            <Text className='text-blue-700 text-end'>Forgot password?</Text>
          </TouchableOpacity>
        </View>
        {error ? <Text className="mb-4 text-center text-sm text-red-500">{error}</Text> : null}

        <TouchableOpacity
          onPress={handleLogin}
          className="w-full rounded-xl bg-blue-500 py-3 shadow-lg active:bg-blue-600">
          <Text className="text-center text-lg font-bold text-white">Login</Text>
        </TouchableOpacity>

        <Text className="my-6 text-center text-gray-500">Or continue with</Text>

        <View className="flex-row justify-between">
          <TouchableOpacity className="mr-2 flex-1 flex-row items-center justify-center rounded-xl border border-gray-300 bg-gray-100 p-3 shadow-sm">
            <FontAwesome name="facebook" size={20} color="#3b5998" />
            <Text className="ml-2 font-medium text-blue-700">Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity className="ml-2 flex-1 flex-row items-center justify-center rounded-xl border border-gray-300 bg-gray-100 p-3 shadow-sm">
            <FontAwesome name="google" size={20} color="#db4a39" />
            <Text className="ml-2 font-medium text-red-600">Google</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => router.push('/(auth)/register')} className="mt-6">
          <Text className="text-center font-semibold text-blue-500">
            Don’t have an account? Register
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
