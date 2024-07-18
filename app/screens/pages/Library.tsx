import React from 'react';
import { View, Text, Image, FlatList, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import Layout from '../common/Layout';

const data = [
  
    {
        id: '1',
        title: 'Broken Mirrorss',
        cover: require('../../../assets/library/1.jpg'),
      },
      {
        id: '2',
        title: 'House Of Cards',
        cover: require('../../../assets/library/2.jpg'),
      },
      {
        id: '3',
        title: "Mafia's Queen",
        cover: require('../../../assets/library/3.jpg'),
      },
      {
        id: '4',
        title: 'Kemmura',
        cover: require('../../../assets/library/4.jpg'),
      },
      {
        id: '5',
        title: 'Fifty Shades',
        cover: require('../../../assets/library/5.jpg'),
      },
      {
        id: '6',
        title: 'Forced',
        cover: require('../../../assets/library/6.jpg'),
      },{
        id: '7',
        title: 'Sepalika',
        cover: require('../../../assets/library/7.jpeg'),
      },
      {
        id: '8',
        title: 'Camelia',
        cover: require('../../../assets/library/8.jpg'),
      },
      {
        id: '9',
        title: 'Never too Late',
        cover: require('../../../assets/library/9.jpg'),
      }
];

const LibraryScreen: React.FC = () => {
  const router = useRouter();
  const screenWidth = Dimensions.get('window').width;
  const itemWidth = screenWidth / 3;

  const renderItem = ({ item }: { item: any }) => (
    <View style={{ width: itemWidth-10, margin: 4, paddingHorizontal:5}}>
      <Image source={item.cover} style={{ width: '100%', height: itemWidth * 1.5, borderRadius: 8 }} />
      <Text className="text-white mt-1 text-m">{item.title}</Text>
      <Text className="text-gray-400 text-xs mb-5">{item.author}</Text>
    </View>
  );

  const renderHeader = () => (    
        <View>
        <View className="flex-row justify-between items-center p-4 mt-5">
            <Text className="text-white text-2xl">Library</Text>
            <View className="flex-row items-center">
            <Ionicons name="help-circle-outline" size={30} color="white" className="mr-4" />
            <MaterialIcons name="more-vert" size={30} color="white" />
            </View>
        </View>
        <View className="flex-row justify-between bg-[#151414] p-3">
            <Text className="text-white text-lg border-b-2 h-full border-orange-600">Current Reads</Text>
            <Text className="text-white text-lg">Archive</Text>
            <Text className="text-white text-lg">Reading Lists</Text>
        </View>
        <Text className="text-white mt-5 ml-2 text-xl mb-5 font-bold">Available Offline</Text>
        </View>
    );

    return (
        <Layout>
            <View className="flex-1 bg-black w-full mb-16">
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    numColumns={3}
                    contentContainerStyle={{ padding: 4 }}
                    ListHeaderComponent={renderHeader}
                />
            </View>
        </Layout>
  );
};

export default LibraryScreen;
