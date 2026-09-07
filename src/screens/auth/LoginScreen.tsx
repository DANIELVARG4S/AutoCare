import React from 'react';
import { ActivityIndicator, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Input } from '../../components/Input';
import { useLoginForm } from '../../hooks/useAuth';
import type { RootStackParams } from '../../navigation/MainNavigator';

type LoginNavigation = NativeStackNavigationProp<RootStackParams>;

export const LoginScreen = () => {
  const navigation = useNavigation<LoginNavigation>();
  const { formData, handleChange, handleSubmit, loading, errorMessage } = useLoginForm();
  return (
    <SafeAreaView className="flex-1 bg-[#F4F7F9]">
      <View className="flex-1 px-6 pt-5">
        <View className="mb-7 flex-row items-center justify-between">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="rounded-full bg-white px-4 py-2 shadow-md active:opacity-70"
          >
            <Text className="text-sm font-bold text-[#17807E]">Volver</Text>
          </TouchableOpacity>
          <Text className="text-sm font-bold tracking-[2px] text-[#17807E]">AUTOCARE</Text>
        </View>
        <View className="mb-7">
          <Text className="text-3xl font-extrabold text-[#102A2A]">Bienvenido de nuevo</Text>
          <Text className="mt-2 text-sm text-[#6C7A7A]">Inicia sesión para continuar.</Text>
        </View>

        <View className="flex-1 rounded-t-[28px] bg-white px-6 pb-8 pt-7">
          <Text className="mb-5 text-xl font-bold text-gray-800">Iniciar sesión</Text>
          <Input
            label="Correo electrónico"
            value={formData.email}
            onChangeText={handleChange('email')}
            placeholder="Ingresa tu correo"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input
            label="Contraseña"
            value={formData.password}
            onChangeText={handleChange('password')}
            placeholder="Ingresa tu contraseña"
            secureTextEntry
          />
          {errorMessage && (
            <Text className="mb-3 text-center text-sm text-red-600">{errorMessage}</Text>
          )}
          <TouchableOpacity
            className="items-center rounded-xl bg-[#FACC15] py-4 active:opacity-80"
            onPress={() => handleSubmit().catch(() => undefined)}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#374151" />
            ) : (
              <Text className="text-base font-extrabold text-[#263238]">Iniciar sesión</Text>
            )}
          </TouchableOpacity>
          <View className="mt-7 flex-row justify-center">
            <Text className="text-sm text-gray-500">¿No tienes una cuenta? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text className="text-sm font-bold text-[#17807E]">Regístrate</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
