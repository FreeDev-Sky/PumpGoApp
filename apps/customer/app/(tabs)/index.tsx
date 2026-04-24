import { useRouter } from 'expo-router';
import { ScrollView, View } from 'react-native';
import {
  Button,
  Card,
  FAB,
  Surface,
  Text,
  useTheme,
} from 'react-native-paper';

export default function HomeScreen() {
  const theme = useTheme();
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 96 }}>
        <Surface
          style={{
            padding: 20,
            borderRadius: 16,
            marginBottom: 16,
            backgroundColor: theme.colors.primaryContainer,
          }}
          elevation={1}
        >
          <Text variant="headlineMedium" style={{ color: theme.colors.onPrimaryContainer }}>
            PumpGo — Customer
          </Text>
          <Text
            variant="bodyLarge"
            style={{ marginTop: 8, color: theme.colors.onPrimaryContainer }}
          >
            Customer app · Expo SDK 54 · TypeScript · Expo Router · react-native-paper (MD3)
          </Text>
        </Surface>

        <Card style={{ marginBottom: 16 }}>
          <Card.Title title="Actions" subtitle="Contained, outlined, and text buttons" />
          <Card.Content>
            <Button mode="contained" onPress={() => router.push('/material')} style={{ marginBottom: 8 }}>
              Open Material screen
            </Button>
            <Button mode="outlined" onPress={() => {}} style={{ marginBottom: 8 }}>
              Outlined
            </Button>
            <Button mode="text" onPress={() => {}}>
              Text button
            </Button>
          </Card.Content>
        </Card>

        <Card>
          <Card.Title title="Surfaces" subtitle="Elevation and typography scale" />
          <Card.Content>
            <Text variant="titleMedium">Title medium</Text>
            <Text variant="bodyMedium" style={{ marginTop: 4, opacity: 0.8 }}>
              Use Paper components for consistent Material You layouts across Android and iOS.
            </Text>
          </Card.Content>
        </Card>
      </ScrollView>

      <FAB
        icon="plus"
        style={{ position: 'absolute', right: 16, bottom: 24 }}
        onPress={() => router.push('/material')}
      />
    </View>
  );
}
