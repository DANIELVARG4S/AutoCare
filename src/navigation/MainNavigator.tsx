import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DashboardScreen } from '../screens/dashboard/DashboardScreen';
import { MaintenanceScreen } from '../screens/mantenimientos/MaintenanceScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { VehiclesScreen } from '../screens/vehiculos/VehiclesScreen';
import { VehicleDetailScreen } from '../screens/vehiculos/VehicleDetailScreen';
import { LoginScreen } from '../screens/auth/LoginScreen';
import { RegisterScreen } from '../screens/auth/RegisterScreen';
import { WelcomeScreen } from '../screens/auth/WelcomeScreen';

// 1. Define todas las rutas y sus tipos
export type RootStackParams = {
  Login: undefined;
  Register: undefined;
  Dashboard: undefined;
  Vehicles: undefined;
  VehicleDetail: { vehicleId: number };
  Profile: undefined;
  Maintenance: undefined;
  Welcome: undefined;
};

// 2. Extiende la interfaz global de React Navigation
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParams {}
  }
}

const Stack = createNativeStackNavigator<RootStackParams>();

export const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" options={{ headerShown: false }} component={WelcomeScreen} />
      <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
      <Stack.Screen name="Register" options={{ headerShown: false }} component={RegisterScreen} />
      <Stack.Screen name="Dashboard" options={{ headerShown: false }} component={DashboardScreen} />
      <Stack.Screen name="Vehicles" options={{ headerShown: false }} component={VehiclesScreen} />
      <Stack.Screen name="VehicleDetail" options={{ headerShown: false }} component={VehicleDetailScreen} />
      <Stack.Screen name="Profile" options={{ headerShown: false }} component={ProfileScreen} />
      <Stack.Screen name="Maintenance" options={{ headerShown: false }} component={MaintenanceScreen} />
    </Stack.Navigator>
  );
};