import { Stack } from 'expo-router';
import { Provider as PaperProvider } from 'react-native-paper';

export default function OnboardingLayout() {
  return (
    <PaperProvider>
      <Stack screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }} />
    </PaperProvider>
  );
}