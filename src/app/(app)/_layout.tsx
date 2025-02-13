import { Ionicons } from '@expo/vector-icons';
import { Redirect, Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';
import tw from 'twrnc';

import { useIsFirstTime } from '@/lib/hooks/use-is-first-time';

export default function AppLayout() {
  const colorScheme = useColorScheme();
  const [isFirstTime] = useIsFirstTime();
  if (isFirstTime) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <Tabs
      screenOptions={{
        headerStyle: tw.style(colorScheme === 'dark' ? 'bg-slate-800' : 'bg-teal-800'),
        headerTitleStyle: tw.style('text-white dark:text-teal-600'),
        headerTintColor: tw.color('white'),
        tabBarLabelStyle: tw`text-teal-600`, // Apply Tailwind style for label text
        tabBarStyle: tw`bg-white`, // Optional: Customize the background color
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={24} />,
          tabBarButtonTestID: 'home-tab',
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => <Ionicons name="settings-outline" size={24} />,
          tabBarButtonTestID: 'settings-tab',
        }}
      />
    </Tabs>
  );
}
