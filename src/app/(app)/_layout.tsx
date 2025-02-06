import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import tw from 'twrnc';

export default function AppLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: tw.style(colorScheme === 'dark' ? 'bg-slate-800' : 'bg-teal-800'),
        headerTitleStyle: tw.style('text-white dark:text-slate-100'),
        headerTintColor: tw.color('white'),
        contentStyle: tw.style('bg-white dark:bg-slate-900'),
      }}
    >
      <Stack.Screen
        options={{
          title: 'gluestack-ui',
        }}
        name="index"
      />
    </Stack>
  );
}
