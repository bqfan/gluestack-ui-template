import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { Button, ButtonText } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { useIsFirstTime } from '@/lib/hooks';

// import { Cover } from '@/components/cover';
// import { FocusAwareStatusBar, Text, View } from '@/components/ui';
export default function Onboarding() {
  const [_, setIsFirstTime] = useIsFirstTime();
  const router = useRouter();

  return (
    <View className="flex h-full items-center  justify-center">
      const [_, setIsFirstTime] = useIsFirstTime(); const router = useRouter();
      <View className="justify-end ">
        <Text className="text-teal-600 text-5xl font-bold text-center dark:text-sky-400 my-3">
          gluestack-ui Template
        </Text>
        <Text className="mb-2 text-center text-lg text-gray-600">
          Start to build your mobile app
        </Text>
      </View>
      <SafeAreaView className="mt-6">
        <Button
          onPress={() => {
            setIsFirstTime(false);
            router.replace('/login');
          }}
        >
          <ButtonText>Login</ButtonText>
        </Button>
      </SafeAreaView>
    </View>
  );
}
