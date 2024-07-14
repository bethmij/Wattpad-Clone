import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{headerShown:false}}/>
      <Tabs.Screen name="profile" options={{headerShown:false}}/>
      <Tabs.Screen name="reading" options={{headerShown:false}}/>
      <Tabs.Screen name="Dashboard" options={{headerShown:false}}/>
    </Tabs>
  );
}
