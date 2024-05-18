import { Link, usePathname } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const navLinks: {
    path: string;
    Icon: any;
    name: string;
    iconName: string
}[] = [
        {
            name: 'Home',
            path: '/home',
            Icon: Feather,
            iconName: "home"
        },
        {
            name: "Notifications",
            path: "/notifications",
            Icon: Ionicons,
            iconName: "notifications"
        },
        {
            name: "Search",
            path: "/search",
            Icon: MaterialCommunityIcons,
            iconName: "briefcase-search"
        },
        {
            name: "History",
            path: "/history",
            Icon: FontAwesome5,
            iconName: "history"
        },
        {
            name: "Cart",
            path: "/cart",
            Icon: AntDesign,
            iconName: "shoppingcart"
        }
    ]

export default function TabBar() {
    const pathname = usePathname();

    return (
        <View className='px-6 ml-6flex flex-row justify-center gap-x-3 py-5 bg-white rounded-full shadow-2xl'>
            {
                navLinks.map(({ path, Icon, name, iconName }) => (
                    <View
                        key={path}
                        className='p-4 flex-1 items-center justify-center'>
                        <Link href={path}>
                            <Icon
                                name={iconName}
                                size={32}
                                color={pathname === path ? "#f8941c" : "#ccc"}
                            />
                        </Link>
                    </View>
                ))
            }
        </View>
    )
}
