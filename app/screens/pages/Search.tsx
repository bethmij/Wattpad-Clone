import React from 'react';
import { SafeAreaView, ScrollView, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const tags = [
    { title: 'Adventure', image: require('../../../assets/search/adventure.jpg') },
    { title: 'Fantasy', image: require('../../../assets/search/fantasy.webp') },
    { title: 'Historical  Fiction', image: require('../../../assets/search/Historical-Fiction.jpg') },
    { title: 'Humor', image: require('../../../assets/search/Humor.jpeg') },
    { title: 'Mystery', image: require('../../../assets/search/Mystery.jpeg') },
    { title: 'Romance', image: require('../../../assets/search/Romance.jpg') },
    { title: 'Fan   Fiction', image: require('../../../assets/search/Fan-Fiction.jpeg') },
    { title: 'Short    Story', image: require('../../../assets/search/Short-Story.webp') },
    { title: 'Science Fiction', image: require('../../../assets/search/Science-Fiction.webp') },
    { title: 'Thriller', image: require('../../../assets/search/Thriller.jpg') },
    { title: 'Werewolf', image: require('../../../assets/search/Werewolf.jpg') },
    { title: 'LGBTQ+', image: require('../../../assets/search/LGBTQ.jpeg') },
    { title: 'New Adults', image: require('../../../assets/search/New-Adults.jpeg') },
    { title: 'Non Fiction', image: require('../../../assets/search/Non-Fiction.jpg') },
    { title: 'Teen Fiction', image: require('../../../assets/search/Teen-Fiction.jpg') },
    { title: 'Poetry', image: require('../../../assets/search/Poetry.jpg') },
];

export default function Search() {
    const router = useRouter(); 
    return (
        <SafeAreaView className="flex-1 bg-black pt-10">
            <ScrollView>
                <View className="px-4 py-2">
                    <Text className="text-white text-xl mb-5">Search</Text>
                    <View className="flex-row items-center mt-2 bg-[#141313] mb-8 py-3 rounded-full px-5">
                        <FontAwesome name="search" size={20} color="white" />
                        <TextInput
                            className="flex-1 ml-2 text-white ms-5"
                            placeholder="Search stories, people or reading lists"
                            placeholderTextColor="#aaa"
                        />
                    </View>
                    <Text className="text-white text-xl mt-4 font-bold mb-8" onPress={()=>{router.back()}}>Browse tags</Text>
                    <View className="flex-wrap flex-row justify-between mt-2 gap-y-5">
                        {tags.map((tag, index) => (
                            <View key={index} className="w-[48%] h-20 flex-row items-center justify-between mt-2 bg-[#181818] rounded-lg overflow-hidden">
                                <Text className="text-white text-base  ml-2 w-20 self-center text-center">{tag.title}</Text>
                                <Image source={tag.image} className="w-28 h-20" resizeMode="cover" />
                            </View>
                        ))}
                    </View>
                </View>
                <SafeAreaView className="bottom-0 w-full flex-row items-center justify-around p-4 bg-black">
                    <TouchableOpacity onPress={()=>router.push('screens/pages/Dashboard')}>
                        <Ionicons name="home-outline" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>router.push('screens/pages/Search')}>
                        <Ionicons name="search-outline" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="pencil-outline" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="notifications-outline" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="person-outline" size={24} color="white" />
                    </TouchableOpacity>
                </SafeAreaView>
            </ScrollView>
        </SafeAreaView>
    );
}
