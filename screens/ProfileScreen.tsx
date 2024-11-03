// Tên: Tạ Văn Thái
// MSSV: 22521377
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { useAuth } from '~/context/AuthContext';

const ProfileScreen = () => {
  const router = useRouter();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    console.log('User logged out');
    router.push('/(auth)/login');
  };

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="mb-4 text-2xl">Profile Screen</Text>
      <TouchableOpacity
        onPress={handleLogout}
        style={{
          backgroundColor: '#ff6347',
          borderRadius: 8,
          padding: 12,
        }}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
