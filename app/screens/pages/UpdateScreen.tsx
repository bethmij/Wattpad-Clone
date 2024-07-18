import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';
import Layout from '../common/Layout';

const updates = [
  {
    id: 1,
    profilePic: require('../../../assets/profile-logo.jpg'),
    username: 'Taevya369',
    action: 'updated',
    storyTitle: '"CARDS OF SINNER" (KTHxreader ff) (Ft.JJK) - NEW STORY ALERT',
    timestamp: 'Yesterday at 10:57 PM',
    storyPic: require('../../../assets/book1.jpg'),
  },
  {
    id: 2,
    profilePic: require('../../../assets/profile-logo.jpg'),
    username: 'kimbuddyy',
    action: 'updated',
    storyTitle: 'အချိန် - 25',
    timestamp: 'Yesterday at 8:54 PM',
    storyPic: require('../../../assets/book1.jpg'),
  },
  
];

const UpdatesScreen = () => {
  return (
    <Layout>
        <View className="flex-1 bg-black">
        <ScrollView className="flex-1 px-4 pt-5">
            <View className="flex-row justify-between items-center mt-4">
            <Text className="text-white text-2xl font-bold">Updates</Text>
            <Ionicons name="person-add-outline" size={24} color="white" />
            </View>
            {updates.map((update) => (
            <View key={update.id} className="flex-row items-center mt-4 p-4 bg-[#1A1919] rounded-lg">
                <Image source={update.profilePic} className="w-10 h-10 rounded-full" />
                <View className="ml-4 flex-1">
                <Text className="text-white">
                    <Text className="font-bold">{update.username}</Text> {update.action} {update.storyTitle}
                </Text>
                <Text className="text-gray-400 mt-1">{update.timestamp}</Text>
                </View>
                <Image source={update.storyPic} className="w-12 h-16 rounded-lg" />
            </View>
            ))}
        </ScrollView>
        <SafeAreaView className="absolute bottom-0 w-full flex-row items-center justify-around p-4 bg-black">
            <TouchableOpacity onPress={() => router.push('screens/pages/Dashboard')}>
            <Ionicons name="home-outline" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('screens/pages/Search')}>
            <Ionicons name="search-outline" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('screens/pages/Library')}>
            <Ionicons name="library-outline" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('screens/pages/WriteScreen')}>
            <Ionicons name="pencil-outline" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('')}>
            <Ionicons name="notifications-outline" size={24} color="white" />
            </TouchableOpacity>
        </SafeAreaView>
        </View>
    </Layout>
  );
};

export default UpdatesScreen;
