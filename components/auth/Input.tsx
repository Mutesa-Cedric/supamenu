import React from 'react'
import { TextInput, TextInputProps, View } from 'react-native'


interface AuthInputProps extends TextInputProps {
    Icon: any,
    iconName: string
}

export default function AuthInput({ placeholder, value, onChangeText, Icon, iconName, ...props }: AuthInputProps) {
    return (
        <View className='flex gap-x-2 flex-row items-center h-fit border border-gray-300 rounded-md my-2  focus:border-primary'>
            <Icon name={iconName} color="gray" size={24} />
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                className='w-full outline-none placeholder:text-base pb-3'
                {...props}
            />
        </View>
    )
}
