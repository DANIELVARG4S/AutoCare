import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const WelcomeScreen = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1" style={{backgroundColor: '#2674f3'}}>  
        <View className="flex-1 flex justify-around my-4">
          <Text
            className="text-center text-4xl font-bold text-white"
          >
            Let's get started!
          </Text>

          <View className="flex-row justify-center">
            {/* <Image
              source={require('../../assets/images/logo.png')}
              style={{ width: 350, height: 350 }}
            /> */}
          </View>

          <View className="space-y-4"> 
            <TouchableOpacity
              onPress={() => navigation.navigate('Register')}
              className="py-3 bg-yellow-400 mx-7 rounded-xl"
            >
              <Text 
              className="text-xl font-bold text-center text-gray-700">
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-center" >
            <Text className="text-white font-semibold">Already have an account?</Text>
            <TouchableOpacity 
                onPress={() => navigation.navigate('Login')}
                >
              <Text className="font-semibold text-yellow-400">Log in</Text>
            </TouchableOpacity>
          </View>

        </View>
    </SafeAreaView> 
  )
}
