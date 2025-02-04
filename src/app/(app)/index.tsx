import { Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex flex-1 justify-center items-center">
      <Text className="font-bold text-3xl text-center text-blue-600 dark:text-sky-400">
        Welcome to{'\n'}gluestack-ui template!
      </Text>
    </View>
  );
}
