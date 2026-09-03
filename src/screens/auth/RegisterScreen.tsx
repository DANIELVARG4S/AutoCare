import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'

export const RegisterScreen = () => {
   const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white px-6 py-12 lg:px-8" style={{backgroundColor: '#2674f3'}}>
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-yellow-400 w-40 h-16 items-center justify-center rounded-tr-2xl rounded-br-2xl ml-4"
          >
            <Text className="text-2xl font-bold text-gray-700">Back</Text>
          </TouchableOpacity>

        </View>
        <View>
          {/* <Image
            source={require('../../assets/signUp.png')}
            style={{ width: 165, height: 110 }}
          /> */}
        </View>
      </SafeAreaView>
      <View className="flex-1 bg-white px-8 pt-8"
        style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}
      >
        <View className="form space-y-2">
          <Text className="text-gray-700 ml-4">Nombre</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3" 
            value=""
            placeholder="Enter your name"
          />
          <Text className="text-gray-700 ml-4">First Name</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3" 
            value=""
            placeholder="Enter your first name"
          />
          <Text className="text-gray-700 ml-4">Last Name</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3" 
            value=""
            placeholder="Enter your last name"
          />
          <Text className="text-gray-700 ml-4">Email</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3" 
            value=""
            placeholder="Enter your email"
          />
          <Text className="text-gray-700 ml-4">Password</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-7" 
            value=""
            placeholder="Enter password"
            secureTextEntry
          />
          <Text className="text-gray-700 ml-4">Confirm Password</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-7" 
            value=""
            placeholder="Confirm password"
            secureTextEntry
          />
          <TouchableOpacity
            className="py-3 bg-yellow-400 rounded-xl"
          >
            <Text
            className="font-xl font-bold text-center text-gray-700"
            >
              Register
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

        <View className="flex-row justify-center mt-7">
              <Text className="text-gray-500 font-semibold">Already have an account?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
              >
                <Text className="font-semibold text-yellow-500"> Login</Text>
              </TouchableOpacity>
        </View>
      </View>
    </View>  
  )
}
