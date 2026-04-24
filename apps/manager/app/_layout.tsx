import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  ThemeProvider as NavigationThemeProvider,
} from '@react-navigation/native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { adaptNavigationTheme, PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { darkTheme, lightTheme } from '../src/theme/appTheme';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const scheme = useColorScheme();
  const paperTheme = scheme === 'dark' ? darkTheme : lightTheme;

  const { LightTheme, DarkTheme } = adaptNavigationTheme({
    reactNavigationLight: NavigationDefaultTheme,
    reactNavigationDark: NavigationDarkTheme,
    materialLight: lightTheme,
    materialDark: darkTheme,
  });

  const navigationTheme = scheme === 'dark' ? DarkTheme : LightTheme;

  useEffect(() => {
    void SplashScreen.hideAsync();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <PaperProvider
          theme={paperTheme}
          settings={{
            icon: (props) => <MaterialCommunityIcons {...props} />,
          }}
        >
          <NavigationThemeProvider value={navigationTheme}>
            <Stack
              screenOptions={{
                headerStyle: { backgroundColor: paperTheme.colors.surface },
                headerTintColor: paperTheme.colors.onSurface,
                headerShadowVisible: false,
              }}
            >
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
            <StatusBar style={scheme === 'dark' ? 'light' : 'dark'} />
          </NavigationThemeProvider>
        </PaperProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
