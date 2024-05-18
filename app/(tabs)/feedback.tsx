import React from 'react'
import { Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default function Feedback() {
    const [rating, setRating] = React.useState<number>(0);

    return (
        <View className='w-full h-screen flex-1 justify-evenly items-center bg-black px-16 '>
            <Text className='text-primary max-w-[300px] text-xl font-medium text-center '>
                Yayy! we value all feedbacks, please rate your experience below:
            </Text>
            <View className='flex flex-row gap-x-4'>
                {
                    Array(5).fill(0).map((_, i) => (
                        <AntDesign
                            key={i}
                            name='star'
                            size={32}
                            color={rating >= i + 1 ? '#f8941c' : '#ccc'}
                            onPress={() => setRating(i + 1)}
                        />
                    ))
                }
            </View>
            <Text className='text-primary text-xl font-semibold text-center'>
                Thank you for helping us imrove our services!
            </Text>
            <View className='flex flex-row'>
                <Text className='text-white font-bold text-5xl'>Supa</Text><Text className='text-primary font-bold text-5xl'>Menu</Text>
            </View>
        </View>
    )
}
