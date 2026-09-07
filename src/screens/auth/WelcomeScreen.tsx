import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { RootStackParams } from '../../navigation/MainNavigator';

type WelcomeNavigation = NativeStackNavigationProp<RootStackParams>;

export const WelcomeScreen = () => {
    const navigation = useNavigation<WelcomeNavigation>();
  return (
    <SafeAreaView className="flex-1 bg-[#F4F7F9]">
      <View className="flex-1 justify-between px-6 pb-8 pt-10">
        <View>
          <Text className="text-sm font-bold tracking-[2px] text-[#17807E]">AUTOCARE</Text>
          <Text className="mt-4 text-[42px] font-extrabold leading-[48px] text-[#102A2A]">
            Tu vehículo,
            {'\n'}siempre en buenas manos.
          </Text>
          <Text className="mt-4 max-w-[310px] text-base leading-6 text-[#6C7A7A]">
            Organiza tus vehículos y mantén cada servicio bajo control.
          </Text>
        </View>

        <View className="rounded-[14px] bg-[#D9EFEC] p-5">
          <Text className="text-center text-5xl text-[#17807E]">CAR</Text>
          <Text className="mt-3 text-center text-sm font-semibold text-[#416261]">
            Comienza a cuidar mejor tu garaje.
          </Text>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            className="items-center rounded-xl bg-[#17807E] py-4 active:opacity-80"
          >
            <Text className="text-base font-extrabold text-white">Crear cuenta</Text>
          </TouchableOpacity>
          <View className="mt-5 flex-row justify-center">
            <Text className="text-sm text-[#6C7A7A]">¿Ya tienes una cuenta? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text className="text-sm font-bold text-[#17807E]">Inicia sesión</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
