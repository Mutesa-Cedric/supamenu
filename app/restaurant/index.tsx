import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { router } from 'expo-router';

const menuItems = [
    'Appetizer', 'Starter', 'Main', 'Dessert', 'Drinks'
]

export default function Restaurant() {
    return (
        <View className='bg-black w-full h-screen flex-1 items-center justify-evenly'>
            <View className='flex items-center gap-y-20 '>
                <Text className='text-primary text-2xl font-semibold'>
                    Choose Kigali
                </Text>
                <View className='flex flex-row justify-center '>
                    <View className='border-r border-primary pr-8'>
                        <View className='flex flex-row gap-x-4'>
                            <Image
                                source={require('../../assets/icons/table.png')}
                                className='w-12 h-12'
                            />
                            <Text className='text-xl text-gray-300'>N8</Text>
                        </View>
                        <Text className='text-xl font-semibold text-white mt-3'>Ordered</Text>
                    </View>
                    <View className=' pl-8'>
                        <Image
                            source={require('../../assets/icons/waiter.png')}
                            className='w-20 h-12'
                        />
                        <Text className='text-xl  text-gray-300 mt-3'>Call waiter</Text>
                    </View>

                </View>
            </View>
            <View className='flex items-center gap-y-4'>
                <Text className='text-3xl text-primary font-bold'>Menu</Text>
                <View className='flex gap-y-4'>
                    {
                        menuItems.map((item, i) => (
                            <Pressable
                                onPress={() => router.push('/restaurant/category')}
                                key={i} className='flex flex-row items-center justify-between w-3/5 gap-x-6'>
                                <Text className='text-2xl text-gray-300'>{item}</Text>
                                <Entypo name='chevron-right' size={24} color={"gray"} />
                            </Pressable>
                        ))
                    }
                </View>
            </View>
        </View >
    )
}
