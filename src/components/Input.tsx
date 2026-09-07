import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";

interface InputProps extends TextInputProps {
  label: string;
  className?: string;
}

export const Input = ({ label, className, ...textInputProps }: InputProps) => {
  return (
    <View className="mb-3">
      <Text className="mb-1 ml-4 text-gray-700">{label}</Text>
      <TextInput
        {...textInputProps}
        className={`rounded-2xl bg-gray-100 p-4 text-gray-700 ${className ?? ""}`}
      />
    </View>
  );
};