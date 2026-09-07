import React from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParams } from '../../navigation/MainNavigator';
import { VehicleFormScreen } from './VehicleFormScreen';
import { useVehiculos } from './hooks/useVehicles';
import type { Vehiculo } from './hooks/useVehicles';

type VehiclesNavigation = NativeStackNavigationProp<RootStackParams>;

export const VehiclesScreen = () => {
  const navigation = useNavigation<VehiclesNavigation>();
  const { data, loading, error, refresh } = useVehiculos();

  const handleEdit = (vehicle: Vehiculo) => {
    navigation.navigate('VehicleDetail', { vehicleId: vehicle.id });
  };

  return (
    <SafeAreaView className="flex-1 bg-[#F4F7F9] px-6 py-6 lg:px-8">
      <View pointerEvents="none" className="absolute inset-0 overflow-hidden">
        <View className="absolute -right-[90px] -top-[155px] h-[310px] w-[310px] rounded-full bg-[#CBE8E4]" />
        <View className="absolute -bottom-[75px] -left-[75px] h-[190px] w-[190px] rounded-full bg-[#D8EFEC]" />
      </View>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} className="flex-1">
        <ScrollView contentContainerStyle={{ padding: 24, paddingBottom: 40 }}>
          <Pressable
            accessibilityRole="button"
            onPress={() => navigation.canGoBack() ? navigation.goBack() : navigation.navigate('Dashboard')}
            className="mb-6 self-start rounded-full bg-white px-4 py-2 shadow-md active:opacity-70"
          >
            <Text className="text-sm font-bold text-[#17807E]">Volver</Text>
          </Pressable>
          <Text className="text-xs font-bold tracking-[1.5px] text-[#17807E]">AUTOCARE</Text>
          <Text className="mt-1 text-[30px] font-extrabold text-[#102A2A]">Mis vehículos</Text>
          <Text className="mb-6 mt-1 text-sm text-[#6C7A7A]">Administra la información de tu garaje.</Text>

          {loading && <ActivityIndicator size="large" color="#17807E" />}
          {!loading && Boolean(error) && (
            <View className="items-center rounded-xl bg-white p-6 shadow-md">
              <Text className="mb-4 text-center text-[#9B3E3E]">No se pudieron cargar los vehículos.</Text>
              <Pressable onPress={() => refresh().catch(() => undefined)} className="rounded-lg bg-[#17807E] px-5 py-3 active:opacity-70">
                <Text className="font-bold text-white">Reintentar</Text>
              </Pressable>
            </View>
          )}
          {!loading && !error && data.length === 0 && (
            <View className="rounded-xl bg-white p-6 shadow-md">
              <Text className="text-center text-[#6C7A7A]">Todavía no tienes vehículos registrados.</Text>
            </View>
          )}
          {!loading && !error && data.length > 0 && (
            <VehicleFormScreen vehiculos={data} onEdit={handleEdit} />
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
