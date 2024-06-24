import { LightTheme, DarkTheme, GlassTheme } from '@/themes';
import { ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }


  const [theme, setTheme] = useState(LightTheme)

  return (
    <ThemeProvider value={theme}>
      <Stack>
        <Stack.Screen name='index' options={{
          headerShown: false,
        }} />
        <Stack.Screen name='login/index' options={{
          headerShown: false,
        }} />
        <Stack.Screen name='details' options={{
          headerTitle: '',
        }} />
        <Stack.Screen name='(tabs)' options={{
          headerShown: false
        }} />
        <Stack.Screen name="+not-found" options={{
          headerShown: false
        }} />
      </Stack>
    </ThemeProvider>
  );
}
