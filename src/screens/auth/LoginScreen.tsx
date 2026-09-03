import React from 'react'
import { Image, KeyboardAvoidingView, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { RegisterScreen } from './RegisterScreen'
import { useNavigation } from '@react-navigation/native';

export const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white px-6 py-12 lg:px-8" style={{backgroundColor: '#2674f3'}}>
      <SafeAreaView className="flex">
        <View className="sm:mx-auto sm:w-full sm:max-w-sm">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-yellow-400 w-40 h-16 items-center justify-center rounded-tr-2xl rounded-br-2xl ml-4"
          >
            <Text className="text-2xl font-bold text-gray-700">Back</Text>
          </TouchableOpacity>

        </View>
        <View>
          <Image
            // source={require('../../assets/login.png')}
            // style={{ width: 300, height: 200 }}
          />
        </View>
      </SafeAreaView>
      <View className="flex-1 bg-white px-8 pt-8"
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}
      >
        <View className="form space-y-2">
          <Text className="text-gray-700 ml-4">Email</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3" 
            value=""
            placeholder="Enter your email"
          />
          <Text className="text-gray-700 ml-4">Password</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3" 
            value=""
            placeholder="Enter password"
            secureTextEntry
          />
          <TouchableOpacity
            className="flex items-end mb-5"
          >
            <Text className="text-gray-700">Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="py-3 bg-yellow-400 rounded-xl"
            onPress={() => navigation.navigate('Dashboard')}
          >
            <Text
            className="font-xl font-bold text-center text-gray-700"
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
          <Text className="text-xl text-gray-700 font-bold text-center py-5">
            Or
          </Text>
        {/* <View className="flex-row justify-center">
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image
              source={require('../../assets/google.png')}
              className="w-10 h-10"
            />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image
              source={require('../../assets/google.png')}
              className="w-10 h-10"
            />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image
              source={require('../../assets/google.png')}
              className="w-10 h-10"
            />
          </TouchableOpacity>
        </View> */}

        <View 
        className="flex-row justify-center mt-7"
        >
              <Text className="text-gray-500 font-semibold">Don't have an account?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Register')}
              >
                <Text className="font-semibold text-yellow-500"> Register here</Text>
              </TouchableOpacity>
        </View>
      </View>
    </View>  
  )
}
