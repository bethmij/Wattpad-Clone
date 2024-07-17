import React from 'react'
import { View, StatusBar, Image, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Headline } from 'react-native-paper';
import { useRouter } from 'expo-router';
const back = require('../../../assets/images/whiteback.png');
const business = require('../../../assets/images/business.png');

export default function Business() {

    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" backgroundColor="#222222" />
            <View className='w-full h-full'>

                <View className='w-full h-12 bg-[#222222]'>
                    <TouchableOpacity onPress={() => { router.back()}} >
                        <Image source={back} className='w-6 h-6 mt-4 ml-4'></Image>
                    </TouchableOpacity>
                </View>

                <View className='flex justify-start items-center w-full h-2/6 bg-[#222222]'>
                    <View className='flex justify-start items-center w-full h-1/5'>
                        <Headline className='text-3xl mb-0 text-[#FCB117]'>Manage Your Business</Headline>
                        <Headline className='text-3xl m-0  text-[#FCB117]'>With BOC</Headline>
                    </View>

                    <View className='flex justify-center items-center w-full h-1/4 mt-4'>
                        <Text className='text-sm mt-2 text-white'>Join today to make your business easier for</Text>
                        <Text className='text-sm text-white'>you as a merchant</Text>
                    </View>

                    <View className='flex justify-center items-center rounded-full mt-5 w-2/5 h-7 bg-[#FCB117]'>
                        <Text className='font-bold'>Register as a Merchant</Text>
                    </View>
                </View>
                <View className='flex justify-center items-centerw-full h-[62vh] w-full bg-black'>
                    <Image source={business} className='w-full h-full'></Image>
                </View>
            </View>
        </SafeAreaView>
    )
}
