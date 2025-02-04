import '../../global.css';

import { Slot } from 'expo-router';
import { View } from 'react-native';

import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';

export default function RootLayout() {
  return (
    <GluestackUIProvider mode="light">
      <View className="flex-1">
        <Slot />
      </View>
    </GluestackUIProvider>
  );
}
