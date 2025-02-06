import { Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex flex-1 justify-center items-center">
      <Text className="text-teal-600 text-3xl font-bold text-center dark:text-sky-400">
        Welcome to{'\n'}gluestack-ui template!
      </Text>
    </View>
  );
}
