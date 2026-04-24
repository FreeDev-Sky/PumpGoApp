import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { useTheme } from 'react-native-paper';

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.onSurfaceVariant,
        tabBarStyle: {
          backgroundColor: theme.colors.elevation.level2,
        },
        headerStyle: { backgroundColor: theme.colors.surface },
        headerTintColor: theme.colors.onSurface,
        headerShadowVisible: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-variant" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="material"
        options={{
          title: 'Material',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="palette-swatch" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
