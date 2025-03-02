import { Redirect, Slot } from "expo-router";
import { useState } from "react";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function AppLayout() {
  const [loading, setLoading] = useState(false);
  const [isLogged, setIsLogged] = useState(true);

  if (loading) {
    return (
      <SafeAreaView className="bg-white h-full flex justify-center items-center">
        <ActivityIndicator className="text-primary-300" size="large" />
      </SafeAreaView>
    );
  }

  if (!isLogged) {
    return <Redirect href="/signin" />;
  }

  return <Slot />;
}