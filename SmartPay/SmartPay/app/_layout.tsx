import { Stack } from "expo-router";
import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView  } from 'react-native-safe-area-context';
export default function RootLayout() {
  return (
    <SafeAreaProvider>
    <PaperProvider>
    <Stack>
      <Stack.Screen name="index"  options={{ headerShown: false }} />
      <Stack.Screen name="screens/pages/Dashboard"  options={{ headerShown: false }} />
      <Stack.Screen name="screens/pages/BillPay"  options={{ headerShown: false }} />
      <Stack.Screen name="screens/pages/Business"  options={{ headerShown: false }} />
      <Stack.Screen name="screens/pages/FundTransfer"  options={{ headerShown: false }} />
    </Stack>
    </PaperProvider>
    </SafeAreaProvider>
  );
}
