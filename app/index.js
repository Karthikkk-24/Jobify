import { Stack, useRouter } from 'expo-router';
import { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';

// import { icons, images } from '../constants';
// import { COLORS, SIZES } from '../constants/theme';

// import { Nearbyjobs, Popularjob, ScreenHeadBtn, Welcome } from '../components';
import { COLORS, SIZES, icons, images } from '../constants';

const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Text>Home</Text>
            {/* <Stack.Screen options={{ 
                headerStyle: {
                    backgroundColor: COLORS.lightWhite
                },
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeadBtn iconUrl={icons.menu} dimension="100%"/>
                )
             }} /> */}
             <Stack
                screenOptions={{
                    headerStyle: {
                        backgroundColor: COLORS.lightWhite
                    },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeadBtn iconUrl={icons.menu} dimension="100%"/>
                    ),
                    headerRight: () => (
                        <ScreenHeadBtn iconUrl={images.profile} dimension="100%"/>
                    )
                }}
             />
        </SafeAreaView>
    )
}

export default Home;