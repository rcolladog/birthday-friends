import Header from "@/src/components/header";
import { globalStyles } from "@/src/styles/global";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-url-polyfill/auto';
import { initSession } from "../services/authService";

export default function RootLayout() {

  const [ready, setReady] = useState(false);
  
  useEffect(() => {initSession().then(() => setReady(true)).catch((err) => console.error("Error: ", err))}, []);


if(!ready){
   return (
      <SafeAreaProvider>
        <View style={globalStyles.center}>
          <ActivityIndicator size="large" color="#fa91b4" />
        </View>
      </SafeAreaProvider>
    );
}

  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ contentStyle: globalStyles.background }}>
        <Stack.Screen name="index" options={{ header: () => <Header></Header> }} />
      </Stack>
    </SafeAreaProvider>
  );
}

