import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import Layout from '../common/Layout';


const Dashboard = () => {
  return (
    <Layout>
      <ScrollView className='bg-black'>
        
        <SafeAreaView className="flex-row items-center justify-between p-4 pt-5 mt-5">
            <Image source={require("../../../assets/wattpad-logo.png")} className="h-10 w-10" />
            
            <View className="flex-row items-center">
              <TouchableOpacity className="bg-purple-400 p-2 flex flex-row rounded-full">
                <Ionicons name="flash-outline" size={20} color="white" />
                <Text className="text-white">Try Premium</Text>
              </TouchableOpacity>         
              <TouchableOpacity className="mx-2 p-1 bg-yellow-500 rounded-full">
                <Ionicons name="gift-outline" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity className="mx-2">
                <Ionicons name="settings-outline" size={24} color="white" />
              </TouchableOpacity >
              <TouchableOpacity onPress={()=>router.push('screens/pages/LogIn')}>
                <Image source={require("../../../assets/profile-logo.jpg")} className="h-10 w-10 rounded-full" />
              </TouchableOpacity>              
            </View>
          </SafeAreaView>

        
        <View className="p-4">
          <Text className="text-white text-2xl">Out now: Heart of Iron ❤️‍🔥</Text>
          <Text className="text-gray-400 text-lg font-bold ">A world of secrets and danger</Text>
          <Text className="text-gray-400 mb-3">Will Rowan, an outsider, find love as Casimir... Thorn's mate?</Text>
          <TouchableOpacity onPress={()=>router.push('screens/pages/StoryScreen')}>
            <Image source={require('../../../assets/banner.png') } className="h-40 w-full mt-2 rounded"/>
          </TouchableOpacity>          
        </View>

        <View className="p-4 bg-[#01170A] border-y-2 border-green-900">
          <Text className="text-white text-xl font-bold">Your stories</Text>
          <Text className="text-gray-400 mb-5">Catch up on the stories you love!</Text>
          <ScrollView horizontal >
            <View className="mr-4">
              <Image source={require('../../../assets/yourBooks/story1.jpg')} className="h-40 w-24 rounded" />
              <Text className="text-white mt-2">Continue reading</Text>
              <Text className="text-green-400 text-right">3 new parts</Text>
              <Text className="text-gray-600 text-right text-xs">2d ago</Text>
            </View>
            
            <View className="mr-4">
              <Image source={require('../../../assets/yourBooks/story2.jpg')} className="h-40 w-24 rounded" />
              <Text className="text-white mt-2">Updated recently</Text>
              <Text className="text-green-400 text-right">3 new parts</Text>
              <Text className="text-gray-600 text-right text-xs">10h ago</Text>
            </View>
            <View className="mr-4">
              <Image source={require('../../../assets/yourBooks/story3.jpg')} className="h-40 w-24 rounded" />
              <Text className="text-white mt-2">Updated recently</Text>
              <Text className="text-green-400 text-right">6 new parts</Text>
              <Text className="text-gray-600 text-right text-xs">1d ago</Text>
            </View>
            <View className="mr-4">
              <Image source={require('../../../assets/yourBooks/story4.jpg')} className="h-40 w-24 rounded" />
              <Text className="text-white mt-2">Psycho Love</Text>
              <Text className="text-green-400 text-right">2 new parts</Text>
              <Text className="text-gray-600 text-right text-xs">5d ago</Text>
            </View>
          </ScrollView>
        </View>

        
        <View className="p-4">
          <Text className="text-white text-xl font-bold mb-5">Top Picks For You</Text>
          <ScrollView horizontal>
            <View className="mr-4">
              <Image source={require('../../../assets/topPicks/pick1.jpg')} className="h-40 w-24 rounded" />
              <Text className="text-white mt-2">Broken Mirrors</Text>
            </View>
            <View className="mr-4">
              <Image source={require('../../../assets/topPicks/pick2.jpeg')} className="h-40 w-24 rounded" />
              <Text className="text-white mt-2">Sepalika</Text>
            </View>
            <View className="mr-4">
              <Image source={require('../../../assets/topPicks/pick3.jpg')} className="h-40 w-24 rounded" />
              <Text className="text-white mt-2">Camelia</Text>
            </View>
            <View className="mr-4">
              <Image source={require('../../../assets/topPicks/pick4.jpg')} className="h-40 w-24 rounded" />
              <Text className="text-white mt-2">Sidharana</Text>
            </View>
          </ScrollView>
        </View>

        <SafeAreaView className="bg-black p-4 rounded-lg shadow-lg max-w-full flex mt-5">
        <Image
          source={require('../../../assets/book1.jpg' )} 
          className=" h-48 rounded-lg"
          resizeMode="cover"
        />
        <View className="mt-4 w-full">
          <View className='flex flex-row justify-between'>       
            <View>
              <Text className="text-white text-xl font-bold">Darkness</Text>
              <Text className="text-gray-400 text-sm mt-1">37 Parts</Text>
            </View>
            
            <Text className="bg-yellow-500 text-black px-2 py-1 rounded-full w-auto mt-1 h-8">Ongoing</Text>
          </View>

        
          <Text className="text-white mt-2">
            When Emery Jones stumbles upon Damon Cavanaugh's hidden dark secret, she escapes to Europe with his sworn rival, Quinton Marquis, seeking solace in what was meant to be a temporary escape...
          </Text>
          <View className="flex-row justify-between items-center mt-4 mb-5">
            <TouchableOpacity className="bg-white text-black px-4 py-2 rounded-full">
              <Text className="font-semibold">Read now</Text>
            </TouchableOpacity>
          </View>
        
        </View>
      </SafeAreaView>

      
        <View className="p-4 bg-gray-900 border-y-2 border-gray-700">
          <Text className="text-white text-xl font-bold mb-5">Wattpad Originals for Bjbrooke</Text>
          <ScrollView horizontal>
            <View className="mr-4">
              <Image source={require('../../../assets/originals/original1.jpg')} className="h-40 w-24 rounded" />
              <Text className="text-white mt-2">House of Cards</Text>
            </View>
            <View className="mr-4">
              <Image source={require('../../../assets/originals/original2.jpg')} className="h-40 w-24 rounded" />
              <Text className="text-white mt-2">Two worlds</Text>
            </View>
            <View className="mr-4">
              <Image source={require('../../../assets/originals/original3.jpg')} className="h-40 w-24 rounded" />
              <Text className="text-white mt-2">Force Marriage</Text>
            </View>
            <View className="mr-4">
              <Image source={require('../../../assets/originals/original4.jpg')} className="h-40 w-24 rounded" />
              <Text className="text-white mt-2">Mafia's Queen</Text>
            </View>
          </ScrollView>
        </View>

        <View className="p-4 ">
          <Text className="text-white text-xl font-bold mb-5">Based on genres you love</Text>
          <ScrollView horizontal>
            <View className="mr-4">
              <Image source={require('../../../assets/genre/genre1.jpg')} className="h-40 w-24 rounded" />
              <Text className="text-white mt-2">Numba Rithuwak</Text>
            </View>
            <View className="mr-4">
              <Image source={require('../../../assets/genre/genre2.jpg')} className="h-40 w-24 rounded" />
              <Text className="text-white mt-2">Niwalanna Ma</Text>
            </View>
            <View className="mr-4">
              <Image source={require('../../../assets/genre/genre4.jpg')} className="h-40 w-24 rounded" />
              <Text className="text-white mt-2">Kemura</Text>
            </View>
            <View className="mr-4 mb-16">
              <Image source={require('../../../assets/genre/genre3.jpg')} className="h-40 w-24 rounded" />
              <Text className="text-white mt-2">Dehadaka Kadulu</Text>
            </View>         
          </ScrollView>
        </View>
      </ScrollView>
    </Layout>
  );
};

export default Dashboard;