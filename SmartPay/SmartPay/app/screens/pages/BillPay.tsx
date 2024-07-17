import React from 'react'
import { View, StatusBar, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Headline } from 'react-native-paper';
import { useRouter } from 'expo-router';
const back = require('../../../assets/images/back.png');
const search = require('../../../assets/images/search.png');
const electric = require('../../../assets/images/electric.png');
const mobile = require('../../../assets/images/mobile.png');

export default function BillPay() {

    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle="dark-content" backgroundColor="#FCB117" />
            <View className={"flex h-full w-full"}>
                <LinearGradient colors={['#FCB117', '#FFD700']}>
                    <View className='flex flex-row h-20 w-full justify-center items-center '>
                        <View className='flex justify-center items-center w-12 h-12 absolute left-2'>
                        <TouchableOpacity onPress={() => { router.back() }} >
                            <Image source={back} className='w-6 h-6 mt-2'></Image>
                            </TouchableOpacity>
                        </View>
                        <Headline className='text-xl mt-2'>One-Time Bill Payment</Headline>
                        <View className='flex justify-center items-center w-12 h-12 absolute right-2'>
                            <Image source={search} className='w-6 h-6 mt-2'></Image>
                        </View>
                    </View>
                </LinearGradient>
                <View className='flex h-full w-full bg-white'>
                    
                <ScrollView className='h-full w-full'>

                    <View className='flex justify-center items-center h-full w-full'>

                    <View className='flex-row bg-white items-center justify-start px-4 mt-3 h-[20.5vw] w-[94vw] rounded-xl border-[0.8px] border-gray-500'>

                        <View className='flex items-center justify-center w-16 h-2/3'>
                        <Image source={mobile} className='w-12 h-12'></Image>
                        </View>

                        <View className='flex ml-5 justify-center w-[65vw] h-2/3 '>
                            <Headline className='text-xl font-bold'>Telecommunication</Headline>
                        </View>
                    </View>

                    <View className='flex-row bg-white items-center justify-start px-4 mt-3 h-[20.5vw] w-[94vw] rounded-xl border-[0.8px] border-gray-500'>

                        <View className='flex items-center justify-center w-16 h-2/3'>
                        <Image source={mobile} className='w-12 h-12'></Image>
                        </View>

                        <View className='flex ml-5 justify-center w-[65vw] h-2/3 '>
                            <Headline className='text-xl font-bold'>Utility</Headline>
                        </View>
                    </View>

                    <View className='flex-row bg-white items-center justify-start px-4 mt-3 h-[20.5vw] w-[94vw] rounded-xl border-[0.8px] border-gray-500'>

                        <View className='flex items-center justify-center w-16 h-2/3'>
                        <Image source={mobile} className='w-12 h-12'></Image>
                        </View>

                        <View className='flex ml-5 justify-center w-[65vw] h-2/3 '>
                            <Headline className='text-xl font-bold'>Credit Card Payments</Headline>
                        </View>
                    </View>

                    <View className='flex-row bg-white items-center justify-start px-4 mt-3 h-[20.5vw] w-[94vw] rounded-xl border-[0.8px] border-gray-500'>

                        <View className='flex items-center justify-center w-16 h-2/3'>
                        <Image source={mobile} className='w-12 h-12'></Image>
                        </View>

                        <View className='flex ml-5 justify-center w-[65vw] h-2/3 '>
                            <Headline className='text-xl font-bold'>TV</Headline>
                        </View>
                    </View>

                    <View className='flex-row bg-white items-center justify-start px-4 mt-3 h-[20.5vw] w-[94vw] rounded-xl border-[0.8px] border-gray-500'>

                        <View className='flex items-center justify-center w-16 h-2/3'>
                        <Image source={mobile} className='w-12 h-12'></Image>
                        </View>

                        <View className='flex ml-5 justify-center w-[65vw] h-2/3 '>
                            <Headline className='text-xl font-bold'>Insurance</Headline>
                        </View>
                    </View>

                    <View className='flex-row bg-white items-center justify-start px-4 mt-3 h-[20.5vw] w-[94vw] rounded-xl border-[0.8px] border-gray-500'>

                        <View className='flex items-center justify-center w-16 h-2/3'>
                        <Image source={mobile} className='w-12 h-12'></Image>
                        </View>

                        <View className='flex ml-5 justify-center w-[65vw] h-2/3 '>
                            <Headline className='text-xl font-bold'>Leasing</Headline>
                        </View>
                    </View>

                    <View className='flex-row bg-white items-center justify-start px-4 mt-3 h-[20.5vw] w-[94vw] rounded-xl border-[0.8px] border-gray-500'>

                        <View className='flex items-center justify-center w-16 h-2/3'>
                        <Image source={mobile} className='w-12 h-12'></Image>
                        </View>

                        <View className='flex ml-5 justify-center w-[65vw] h-2/3 '>
                            <Headline className='text-xl font-bold'>Education</Headline>
                        </View>
                    </View>

                    <View className='flex-row bg-white items-center justify-start px-4 mt-3 h-[20.5vw] w-[94vw] rounded-xl border-[0.8px] border-gray-500'>

                        <View className='flex items-center justify-center w-16 h-2/3'>
                        <Image source={mobile} className='w-12 h-12'></Image>
                        </View>

                        <View className='flex ml-5 justify-center w-[65vw] h-2/3 '>
                            <Headline className='text-xl font-bold'>Other</Headline>
                        </View>
                    </View>

                    </View>
                    </ScrollView>

                </View>
            </View>
        </SafeAreaView>
    )
}
