import { EvilIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Home() {
    return (
        <View className='w-full h-screen bg-primary py-36 flex-1 items-center px-8 '>
            <View
                className='bg-white py-3 px-4 w-full rounded-full flex items-center flex-row h-fit'>
                <EvilIcons
                    onPress={() => router.push('/restaurant')}
                    name='search' size={32} color='#f8941c' />
                <GestureHandlerRootView>
                    <TextInput
                        onPress={() => router.push('/restaurant')}
                        placeholder='Search for your preferred restaurant'
                        className='text-gray-400 text-base ml-2'
                    />
                </GestureHandlerRootView>
            </View>
            <Text className='pt-24 pb-20 text-xl font-semibold'>
                OR
            </Text>
            <Image
                source={require('../../assets/images/qrcode.png')}
                className='w-48 h-48'
            />
            <Text className='pt-12 text-2xl font-semibold text-gray-600'>
                Scan, Pay & Enjoy!
            </Text>
        </View>
    )
}
