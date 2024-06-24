import { Tabs } from 'expo-router';
import React, { useState } from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { useColorScheme } from '@/hooks/useColorScheme';
import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { LightTheme } from '@/themes';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState(DarkTheme)

  return (
    <ThemeProvider value={theme}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#5f20e7',
          headerShown: false,
        }}>
        <Tabs.Screen
          name="home"
          options={{
            headerShown: false,
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
            ),
          }}
        />
      </Tabs>
    </ThemeProvider>
  );
}
