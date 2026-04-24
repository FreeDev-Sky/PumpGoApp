import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import {
  Chip,
  Divider,
  List,
  Searchbar,
  SegmentedButtons,
  Switch,
  Text,
  useTheme,
} from 'react-native-paper';

export default function MaterialScreen() {
  const theme = useTheme();
  const [query, setQuery] = useState('');
  const [value, setValue] = useState('md');
  const [notifications, setNotifications] = useState(true);

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: theme.colors.background }}
      contentContainerStyle={{ paddingBottom: 24 }}
    >
      <View style={{ padding: 16 }}>
        <Text variant="headlineSmall" style={{ marginBottom: 12 }}>
          Material components
        </Text>
        <Searchbar placeholder="Search" value={query} onChangeText={setQuery} />
      </View>

      <View style={{ paddingHorizontal: 16, marginBottom: 8 }}>
        <SegmentedButtons
          value={value}
          onValueChange={setValue}
          buttons={[
            { value: 'md', label: 'MD3' },
            { value: 'rn', label: 'RN' },
            { value: 'expo', label: 'Expo' },
          ]}
        />
      </View>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, paddingHorizontal: 16, marginBottom: 16 }}>
        <Chip selected onPress={() => {}}>
          Default
        </Chip>
        <Chip icon="information" onPress={() => {}}>
          Info
        </Chip>
        <Chip mode="outlined" onPress={() => {}}>
          Outlined
        </Chip>
      </View>

      <Divider />

      <List.Section>
        <List.Subheader>Settings-style list</List.Subheader>
        <List.Item
          title="Push notifications"
          description="Paper + React Native"
          left={(props) => <List.Icon {...props} icon="bell" />}
          right={() => (
            <Switch value={notifications} onValueChange={setNotifications} style={{ alignSelf: 'center' }} />
          )}
        />
        <List.Item
          title="Appearance"
          description="Follows system light / dark"
          left={(props) => <List.Icon {...props} icon="theme-light-dark" />}
        />
        <List.Item
          title="Documentation"
          description="reactnativepaper.com"
          left={(props) => <List.Icon {...props} icon="book-open-variant" />}
        />
      </List.Section>
    </ScrollView>
  );
}
