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
          <Stack.Screen name="screens/pages/LogIn" options={{headerShown:false}}/>
          <Stack.Screen name="screens/pages/Dashboard"  options={{ headerShown: false }} />
          <Stack.Screen name="screens/pages/Search"  options={{ headerShown: false }} />
          <Stack.Screen name="screens/pages/Library"  options={{ headerShown: false }} />
          <Stack.Screen name="screens/pages/WriteScreen"  options={{ headerShown: false }} />   
          <Stack.Screen name="screens/pages/UpdateScreen" options={{headerShown:false}}/>   
          <Stack.Screen name="screens/pages/StoryScreen" options={{headerShown:false}}/>    
        </Stack>
      </PaperProvider>  
    </SafeAreaProvider>
  );
}
