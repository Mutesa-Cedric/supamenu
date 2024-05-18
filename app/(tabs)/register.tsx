import AuthInput from '@/components/auth/Input';
import {
    MaterialCommunityIcons,
    Entypo,

} from '@expo/vector-icons';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function Register() {
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        password: ''
    })
    return (
        <GestureHandlerRootView
            style={{ flex: 1 }}
        >
            <View className='w-full h-screen bg-primary flex-1 flex-col justify-end'>
                <View className='mt-1/6 bg-white shadow-md h-5/6  rounded-t-[40px] px-6 flex flex-col items-center space-y-6 pt-6'>
                    <Text className='text-4xl font-bold text-gray-700'>
                        Supa<Text className='text-primary'>Menu</Text>
                    </Text>
                    <View className='space-y-1 flex flex-col items-center text-center'>
                        <Text className='text-gray-700 text-xl font-semibold'>Welcome ...</Text>
                        <Text className='text-lg text-gray-600'>Please fill the information</Text>
                    </View>
                    <View className='w-full flex gap-y-3'>
                        <AuthInput
                            iconName='account'
                            placeholder='Full Name'
                            value={formData.fullName}
                            onChangeText={(text) => setFormData({ ...formData, fullName: text })}
                            Icon={MaterialCommunityIcons}
                        />
                        <AuthInput
                            iconName='phone'
                            placeholder='Phone Number'
                            value={formData.phoneNumber}
                            onChangeText={(text) => setFormData({ ...formData, phoneNumber: text })}
                            Icon={Entypo}
                        />
                        <AuthInput
                            placeholder='Email'
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
                        <Pressable className='w-full bg-primary  py-3 rounded-md flex flex-row items-center justify-center'>
                            <Text className='text-white text-base font-semibold'>Register</Text>
                        </Pressable>
                        <View className='flex items-center justify-center flex-row'>
                            <Text className='text-gray-600 text-base'>Already have an account?</Text>
                            <Link href={'/login'} className='pl-2'>
                                <Text className='text-primary text-base font-semibold'>Login</Text>
                            </Link>
                        </View>
                    </View>
                </View>
            </View>
        </GestureHandlerRootView>
    )
}
