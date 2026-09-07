import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
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
import { Input } from '../../components/Input';
import client from '../../api/client';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import type { RootStackParams } from '../../navigation/MainNavigator';

type ProfileNavigation = NativeStackNavigationProp<RootStackParams>;

type ProfileForm = {
  nombre: string;
  apellido_paterno: string;
  apellido_materno: string;
  email: string;
  telefono: string;
};

const emptyForm: ProfileForm = {
  nombre: '',
  apellido_paterno: '',
  apellido_materno: '',
  email: '',
  telefono: '',
};

export const ProfileScreen = () => {
  const navigation = useNavigation<ProfileNavigation>();
  const { data, loading, error, refresh } = useCurrentUser();
  const [form, setForm] = useState<ProfileForm>(emptyForm);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (data) {
      setForm({
        nombre: data.nombre ?? '',
        apellido_paterno: data.apellido_paterno ?? '',
        apellido_materno: data.apellido_materno ?? '',
        email: data.email ?? '',
        telefono: data.telefono ?? '',
      });
    }
  }, [data]);

  const updateField = (field: keyof ProfileForm) => (value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async () => {
    if (!data?.id) {
      Alert.alert('Perfil', 'No se pudieron encontrar los datos del usuario.');
      return;
    }

    setSaving(true);
    try {
      await client.put(`/users/${data.id}`, form);
      await refresh();
      Alert.alert('Perfil', 'Perfil actualizado correctamente.');
    } catch (requestError: unknown) {
      const message = requestError instanceof Error
        ? requestError.message
        : 'Error al guardar los cambios.';
      Alert.alert('Perfil', message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center bg-[#EAF4F3]">
        <ActivityIndicator size="large" color="#17807E" />
      </View>
    );
  }

  if (error || !data) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-[#EAF4F3] p-6">
        <Text className="mb-4 text-base text-[#9B3E3E]">No se pudo cargar el perfil.</Text>
        <Pressable className="rounded-[10px] bg-[#17807E] px-[22px] py-3 active:opacity-70" onPress={() => refresh().catch(() => undefined)}>
          <Text className="text-sm font-bold text-white">Reintentar</Text>
        </Pressable>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-[#EAF4F3] px-6 py-6 lg:px-8">
      <View pointerEvents="none" className="absolute inset-0 overflow-hidden">
        <View className="absolute -right-[90px] -top-[155px] h-[310px] w-[310px] rounded-full bg-[#CBE8E4]" />
        <View className="absolute -bottom-[75px] -left-[75px] h-[190px] w-[190px] rounded-full bg-[#D8EFEC]" />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        className="flex-1"
      >
        <ScrollView contentContainerStyle={{ padding: 24, paddingBottom: 40 }} keyboardShouldPersistTaps="handled">
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Volver al dashboard"
            onPress={() => navigation.canGoBack() ? navigation.goBack() : navigation.navigate('Dashboard')}
            className="mb-6 self-start rounded-full bg-white px-4 py-2 shadow-md active:opacity-70"
          >
            <Text className="text-sm font-bold text-[#17807E]">Volver</Text>
          </Pressable>
          <Text className="text-[30px] font-extrabold text-[#102A2A]">Mi perfil</Text>
          <Text className="mb-[22px] mt-1.5 text-sm text-[#6C7A7A]">Actualiza tus datos personales.</Text>
          <Input label="Nombre" value={form.nombre} onChangeText={updateField('nombre')} />
          <Input label="Apellido paterno" value={form.apellido_paterno} onChangeText={updateField('apellido_paterno')} />
          <Input label="Apellido materno" value={form.apellido_materno} onChangeText={updateField('apellido_materno')} />
          <Input label="Correo electrónico" value={form.email} onChangeText={updateField('email')} keyboardType="email-address" autoCapitalize="none" />
          <Input label="Teléfono" value={form.telefono} onChangeText={updateField('telefono')} keyboardType="phone-pad" />
          <Pressable
            onPress={() => handleSubmit().catch(() => undefined)}
            disabled={saving}
            className="mt-3 items-center rounded-xl bg-[#17807E] p-4 active:opacity-70"
          >
            {saving ? <ActivityIndicator color="#FFFFFF" /> : <Text className="text-[15px] font-bold text-white">Guardar cambios</Text>}
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

