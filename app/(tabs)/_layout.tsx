import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView>
      <Tabs
        initialRouteName='register'
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
          tabBarStyle: {
            display: 'none',
          },
        }}>
        <Tabs.Screen
          name="register"
          options={{
            title: 'Register',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="login"
          options={{
            title: 'Login',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'key' : 'key-outline'} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name='home'
          options={{
            title: "Home"
          }}
        />
        <Tabs.Screen
          name='search'
          options={{
            title: "Search",

          }}
        />
      </Tabs>
    </GestureHandlerRootView>
  );
}
