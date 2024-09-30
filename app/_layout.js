import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Slot } from 'expo-router';
import { AuthProvider } from '../hooks/useSession';

export default function HomeLayout() {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <Slot />
      </SafeAreaProvider>
    </AuthProvider>
  );
}
