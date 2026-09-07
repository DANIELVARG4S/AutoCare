import React from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParams } from '../../navigation/MainNavigator';
import { removeAuthToken } from '../../utils/token-storage';

type DashboardNavigation = NativeStackNavigationProp<RootStackParams>;

export const DashboardScreen = () => {
  const navigation = useNavigation<DashboardNavigation>();

  const handleLogout = async () => {
    await removeAuthToken();
    navigation.replace('Login');
  };

  return (
    <SafeAreaView className="flex-1 bg-[#F4F7F9]">
      <ScrollView contentContainerStyle={{ padding: 24, paddingBottom: 40 }}>
        <View className="flex-row items-center justify-between">
          <View>
            <Text className="text-xs font-bold tracking-[1.5px] text-[#17807E]">AUTOCARE</Text>
            <Text className="mt-1.5 text-[32px] font-extrabold text-[#102A2A]">Mi garaje</Text>
            <Text className="mt-1 text-sm text-[#6C7A7A]">Todo lo que tu vehículo necesita.</Text>
          </View>
          <Text className="border border-[#B8D8D6] p-2.5 text-base font-extrabold text-[#17807E]">CAR</Text>
        </View>

        <View className="mt-7 rounded-[14px] bg-[#D9EFEC] p-5">
          <Text className="text-xl font-bold text-[#102A2A]">Bienvenido</Text>
          <Text className="mt-1.5 text-sm leading-[21px] text-[#416261]">Consulta tus vehículos y mantén sus servicios al día.</Text>
        </View>

        <Text className="mb-3 mt-7 text-lg font-bold text-[#102A2A]">Accesos rápidos</Text>
        <View className="gap-3">
          <DashboardButton
            label="Vehículos"
            description="Administra tus vehículos"
            onPress={() => navigation.navigate('Vehicles')}
          />
          <DashboardButton
            label="Mantenimientos"
            description="Revisa el historial y próximos servicios"
            onPress={() => navigation.navigate('Maintenance')}
          />
          <DashboardButton
            label="Mi perfil"
            description="Consulta y actualiza tus datos"
            onPress={() => navigation.navigate('Profile')}
          />
        </View>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Cerrar sesión"
          onPress={handleLogout}
          className="mt-7 items-center p-3.5 active:opacity-70"
        >
          <Text className="text-sm font-bold text-[#B04B4B]">Cerrar sesión</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

type DashboardButtonProps = {
  label: string;
  description: string;
  onPress: () => void;
};

const DashboardButton = ({ label, description, onPress }: DashboardButtonProps) => (
  <Pressable
    accessibilityRole="button"
    onPress={onPress}
    className="flex-row items-center justify-between rounded-xl bg-white p-[18px] shadow-md active:opacity-70"
  >
    <View className="flex-1">
      <Text className="text-base font-bold text-[#102A2A]">{label}</Text>
      <Text className="mt-1 text-[13px] text-[#718080]">{description}</Text>
    </View>
    <Text className="ml-3 text-[28px] text-[#17807E]">›</Text>
  </Pressable>
);

