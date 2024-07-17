import React from 'react'
import { Image, View, StatusBar, TouchableOpacity } from 'react-native'
import { Headline, Text } from 'react-native-paper'
import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

const bell = require('../../../assets/images/bell.png');
const smartpaylogo = require('../../../assets/images/smartpay.png');
const promotion = require('../../../assets/images/promotion.png');

export default function Dashboard() {

  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className='flex w-full h-full' >
        <StatusBar barStyle="light-content" backgroundColor="#222222" />

        <View className='h-1/3 w-full bg-[#222222]' >

          <View className='flex flex-row items-center h-1/4 w-full mt-2' >

            <View className='flex flex-row w-1/2 h-full'>
              <View className='w-1/3 h-full flex justify-center items-center'>
                <View className=' flex justify-between w-3/6 h-7'>
                  <View className='w-2/3 h-1 bg-[#F1B041] rounded-full'></View>
                  <View className='w-full h-1 bg-white rounded-full'></View>
                  <View className='w-full h-1 bg-white rounded-full'></View>
                </View>
              </View>
              <View className='flex flex-row items-center bg-[#2F2F2F] w-[33.5vw] h-full rounded-full'>
                <View className=' relative left-2 w-[14vw] h-[14vw] rounded-full border-[#F1B041] border-[3px]'></View>
                <View className=' relative left-3 w-14 h-5/6 justify-center'>
                  <Text className='text-white ml-1'>Hello,</Text>
                  <Text className='font-bold text-white text-lg ml-1'>Yasas</Text>
                </View>
              </View>
            </View>

            <View className='flex items-end w-1/2 h-full '>
              <View className='flex items-center justify-center h-full w-1/3'>
                <Image source={bell} className='h-10 w-10 rotate-45 ml-3'></Image>
              </View>
            </View>
          </View>

          <View className='flex justify-center items-center h-2/6 w-full' >
            <Image source={smartpaylogo} className='h-20 w-44 relative bottom-1'></Image>
          </View>

          <View className='flex flex-row items-center justify-around h-3/6 w-full bg-[#222222]' >
            <View className='w-[90vw] h-full flex flex-row items-center justify-around'>
              <View className='flex justify-center items-center'>
                <TouchableOpacity onPress={() => { router.navigate("screens/pages/FundTransfer") }} >
                  <View className={"bg-[#F1B041] w-[16vw] h-[16vw] rounded-full relative bottom-3"}></View>
                </TouchableOpacity>
                <Text className='relative bottom-2 text-white'>Fund Tranfer</Text>
              </View>

              <View className='flex justify-center items-center'>
                <View className={"bg-[#F1B041] w-[16vw] h-[16vw] rounded-full relative bottom-3"}></View>
                <Text className='relative bottom-2 text-white'>QR Payment</Text>
              </View>

              <View className='flex justify-center items-center'>
                <TouchableOpacity onPress={() => { router.navigate("screens/pages/BillPay") }} >
                  <View className={"bg-[#F1B041] w-[16vw] h-[16vw] rounded-full relative bottom-3"}></View>
                </TouchableOpacity>
                <Text className='relative bottom-2 text-white'>Pay Bils</Text>
              </View>

              <View className='flex justify-center items-center'>
                <TouchableOpacity onPress={() => { router.navigate("screens/pages/Business") }} >
                  <View className={"bg-[#F1B041] w-[16vw] h-[16vw] rounded-full relative bottom-3"}></View>
                </TouchableOpacity>
                <Text className='relative bottom-2 text-white'>My Shop</Text>
              </View>

            </View>

          </View>

        </View>


        <View className='flex w-full h-2/3 top-4'>
          <ScrollView className='w-full'>

            <View className='flex justify-center items-center h-[67vw] w-full bg-white '>

              <View className='h-[12vw] w-full flex-row items-center justify-between px-4'>
                <Headline className='text-lg font-bold pl-1'>Promotions</Headline>
                <Text className='text-[#e7a93e] font-bold'>View All</Text>
              </View>
              <Image source={promotion} className='h-[55vw] w-[91vw]'></Image>
            </View>

            <View className='flex items-center h-[35vw] w-full bg-white '>

              <View className='h-[12vw] w-full flex-row items-center justify-between px-4'>
                <Headline className='text-lg font-bold pl-1'>Accounts</Headline>
                <Text className='text-[#e7a93e] font-bold'>Manage</Text>
              </View>
              <View className='flex-row items-center justify-between px-4 h-[23vw] w-[91vw] rounded-xl 
          border-l-[2vw] border-l-[#F1B041] border-r-[0.8px] border-t-[0.8px] border-b-[0.8px]
          border-t-gray-500 border-b-gray-500 border-r-gray-500'>

                <View className='flex justify-center w-1/2 h-2/3'>
                  <Headline className='text-lg font-bold pl-1 m-0'>MY BOC</Headline>
                  <Headline className='text-lg font-bold pl-1 m-0'>XXXX</Headline>
                </View>

                <View className='flex items-end justify-center w-1/2 h-2/3 '>
                  <Text className='text-lg font-bold pl-1 m-0'>Balance</Text>
                  <View className='flex justify-center items-center flex-row '>
                    <Text className='text-sm font-bold pl-1 m-0'>LKR</Text>
                    <Text className='text-lg font-bold pl-1 m-0'>100,000.00</Text>
                  </View>

                </View>
              </View>
            </View>

            <View className='flex items-center h-auto w-full bg-white mb-3'>

              <View className='h-[12vw] w-full flex-row items-center justify-between px-4'>
                <Headline className='text-lg font-bold pl-1'>Recent Transactions</Headline>
                <Text className='text-[#e7a93e] font-bold'>View All</Text>
              </View>
              <View className='flex-row items-center justify-between mb-3 px-4 h-[23vw] w-[91vw] rounded-xl border-[0.6px] bg-[#EDEDED]'>

                <View className='flex justify-center w-1/2 h-2/3'>
                  <Headline className='text-lg font-bold pl-1 m-0 '>Bill Payment</Headline>
                  <Text className='text-lg pl-1 m-0'>Hutch</Text>
                </View>

                <View className='flex items-end justify-center w-1/2 h-2/3 '>
                  <View className='flex justify-center items-center flex-row '>
                    <Text className='text-sm font-bold pl-1 m-0'>LKR</Text>
                    <Text className='text-lg font-bold pl-1 m-0'>100.00</Text>
                  </View>
                  <Text className='text-base pl-1 m-0'>04-jul-24 11.06AM</Text>
                </View>
              </View>

              <View className='flex-row items-center justify-between mb-3 px-4 h-[23vw] w-[91vw] rounded-xl border-[0.6px] bg-[#EDEDED]'>

                <View className='flex justify-center w-1/2 h-2/3'>
                  <Headline className='text-lg font-bold pl-1 m-0 '>Bill Payment</Headline>
                  <Text className='text-lg pl-1 m-0'>Dialog</Text>
                </View>

                <View className='flex items-end justify-center w-1/2 h-2/3 '>
                  <View className='flex justify-center items-center flex-row '>
                    <Text className='text-sm font-bold pl-1 m-0'>LKR</Text>
                    <Text className='text-lg font-bold pl-1 m-0'>200.00</Text>
                  </View>
                  <Text className='text-base pl-1 m-0'>04-jul-24 11.06AM</Text>
                </View>
              </View>

              <View className='flex-row items-center justify-between mb-3 px-4 h-[23vw] w-[91vw] rounded-xl border-[0.6px] bg-[#EDEDED]'>

                <View className='flex justify-center w-1/2 h-2/3'>
                  <Headline className='text-lg font-bold pl-1 m-0 '>Bill Payment</Headline>
                  <Text className='text-lg pl-1 m-0'>Hutch</Text>
                </View>

                <View className='flex items-end justify-center w-1/2 h-2/3 '>
                  <View className='flex justify-center items-center flex-row '>
                    <Text className='text-sm font-bold pl-1 m-0'>LKR</Text>
                    <Text className='text-lg font-bold pl-1 m-0'>100.00</Text>
                  </View>
                  <Text className='text-base pl-1 m-0'>04-jul-24 11.06AM</Text>
                </View>
              </View>

            </View>

          </ScrollView>
        </View>

      </View>
    </SafeAreaView>
  )
}
