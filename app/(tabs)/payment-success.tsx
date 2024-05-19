import { Link, router } from 'expo-router'
import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'

export default function PaymentSuccess() {
    return (
        <View className="w-full h-screen bg-black flex-1 items-center justify-evenly px-12">
            <Image
                source={require('@/assets/images/payment-success.png')}
                className='w-56 h-56'
            />
            <View className='flex items-center w-full gap-y-6'>
                <Text className='text-2xl text-primary text-center'>
                    Payment Success, Yayy!
                </Text>
                <Text className='text-xl text-gray-300 text-center font-medium '>
                    we will send order details and invoice in your contact no. and registered email.
                </Text>
                <Link href={'/feedback'} className='text-primary text-xl'>
                    <Text>Check Details &rarr;</Text>
                </Link>
                <Pressable
                    onPress={() => router.push('/feedback')}
                    className='w-full rounded-lg bg-primary py-3'>
                    <Text className='text-white text-xl text-center font-medium'>Download Invoice</Text>
                </Pressable>
            </View>
            <View className='flex flex-row'>
                <Text className='text-white font-bold text-5xl'>Supa</Text><Text className='text-primary font-bold text-5xl'>Menu</Text>
            </View>
        </View>
    )
}