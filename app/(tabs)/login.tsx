import AuthInput from '@/components/auth/Input';
import {
    MaterialCommunityIcons,
    Entypo,
} from '@expo/vector-icons';
import { Link, router } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, Text, View, Image } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    return (
        <GestureHandlerRootView
            style={{ flex: 1 }}
        >
            <View className='w-full h-screen bg-primary flex-1 flex-col justify-end'>
                <View className='mt-1/6 bg-white shadow-md h-5/6  rounded-t-[40px] px-6 flex flex-col items-center space-y-8 pt-6'>
                    <Text className='text-4xl font-bold text-gray-700'>
                        Supa<Text className='text-primary'>Menu</Text>
                    </Text>
                    <View className='space-y-1 flex flex-col items-center text-center'>
                        <Text className='text-gray-700 text-xl font-semibold'>Welcome ...</Text>
                        <Text className='text-lg text-gray-600'>Sign in to continue</Text>
                    </View>
                    <View className='w-full flex gap-y-3'>
                        <AuthInput
                            placeholder='Your Email'
                            iconName='mail'
                            value={formData.email}
                            onChangeText={(text) => setFormData({ ...formData, email: text })}
                            Icon={Entypo}
                        />
                        <AuthInput
                            secureTextEntry
                            iconName='lock'
                            placeholder='Password'
                            value={formData.password}
                            onChangeText={(text) => setFormData({ ...formData, password: text })}
                            Icon={MaterialCommunityIcons}
                        />
                        <Pressable
                            onPress={() => router.push('/home')}
                            className='w-full bg-primary  py-3 rounded-md flex flex-row items-center justify-center'>
                            <Text className='text-white text-base font-semibold'>Sign In</Text>
                        </Pressable>
                        <View className='flex items-center justify-center flex-row'>
                            <View className='h-[1px] w-2/5 bg-gray-300'></View>
                            <Text className='text-gray-600 text-base mx-2 font-semibold'>OR</Text>
                            <View className='h-[1px] w-2/5 bg-gray-300'></View>
                        </View>
                        <Pressable className='w-full bg-white  py-1 rounded-md flex flex-row items-center px-8  border border-gray-200 '>
                            <Image
                                source={require('../../assets/icons/google.png')}
                                className='mr-12 w-10 h-10'
                            />
                            <Text className='text-gray-600 text-base font-semibold mx-2'>Log in with Google</Text>
                        </Pressable>
                        <Pressable className='w-full bg-white  py-1 rounded-md flex flex-row items-center  px-8 border border-gray-300 hover:border-primary cursor-pointer'>
                            <Image
                                source={require('../../assets/icons/facebook.png')}
                                className='mr-12 w-10 h-10' />
                            <Text className='text-gray-600 text-base font-semibold mx-2'>Log in with Facebook</Text>
                        </Pressable>
                        <Link href={'/forgot-password'}
                        >
                            <Text className='text-primary text-base font-semibold text-center'>Forgot Password?</Text>
                        </Link>
                        <View className='flex items-center justify-center flex-row'>
                            <Text className='text-gray-600 text-base'>Don't have an account?</Text>
                            <Link href={'/register'} className='pl-2'>
                                <Text className='text-primary text-base font-semibold'>Register</Text>
                            </Link>
                        </View>
                    </View>
                </View>
            </View>
        </GestureHandlerRootView>
    )
}
