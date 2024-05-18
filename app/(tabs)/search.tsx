import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { Link, router } from 'expo-router';
import TabBar from '@/components/TabBar';

export default function Search() {
    return (
        <View className='w-full h-screen bg-white'>
            <View className='py-6 px-6 pt-12 w-full border-b border-gray-300 shadow-md flex flex-row gap-x-4 '>
                <Pressable
                    onPress={() => router.push("/home")}
                    className='p-2 bg-gray-200 rounded-md'>
                    <Entypo name="chevron-left" size={24} color="#f8941c" />
                </Pressable>
                <TextInput
                    className='placeholder:text-lg placeholder:text-gray-600 placeholder:font-semibold'
                    placeholder='search ...'
                />
            </View>

            {/* nearest restaurants */}
            <View className='flex-1 gap-y-4 p-8'>
                <Text className='text-primary text-base'>Nearby Restaurants</Text>
                <View className='flex-1 gap-y-3'>
                    {
                        Array(6).fill(0).map((_, i) => (
                            <Pressable
                                onPress={() => router.push('/restaurant')}
                                key={i} className='w-full bg-gray-100 rounded-md p-2 flex flex-row'>
                                <Image
                                    source={require('../../assets/images/restaurant.png')}
                                    className='w-16 h-16 rounded-md'
                                />
                                <View className='ml-4'>
                                    <Text className='text-lg font-semibold text-gray-600'>Choose Kigali</Text>
                                    <Text className='text-gray-500 mt-1'>World, African, Pizzeria, Coffee</Text>
                                </View>
                            </Pressable>
                        ))
                    }
                </View>
            </View>
            <TabBar />
        </View>
    )
}