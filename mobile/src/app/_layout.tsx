import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) SplashScreen.hideAsync();
  }, [loaded]);

  if (!loaded) return null;

  return (
    <Stack>
      {/* This is the Welcome screen */}
      <Stack.Screen name="index" options={{ headerShown: false }} />

      {/* Sign In and Sign Up Screens */}
      <Stack.Screen name="signin" options={{ presentation: 'modal' }} />
      <Stack.Screen name="signup" options={{ presentation: 'modal' }} />

      {/* Main App Tabs */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
