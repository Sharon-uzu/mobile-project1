import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import tw from 'twrnc';
import Animated,{ FadeIn, FadeOut } from 'react-native-reanimated';
// import {useRouter} from 'expo-router'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




export default function Welcome() {
  return (
    <View style={tw` flex-1 flex justify-end items-center`}>
      <Text>Hello</Text>
      <StatusBar style="auto" />
      <Image style={tw` h-full w-full absolute`} source={require('../assets/welcome.webp')}/>
      <LinearGradient colors={['transparent', '#18181b']}
      style={[tw`flex justify-end pb-12 space-y-8`,{width: wp(100), height: hp(70)}]}
      start={{x: 0.5, y: 0}}
      end={{x: 0.5, y: 0.8}}
      >
        <Animated.View entering={FadeIn.delay(100).stringify}  style={tw`flex items-center`}>
            <Text style={[tw`text-white font-bold`,{fontSize: hp(5)}]}>
                Best <Text style={tw`text-rose-500`}>Workouts</Text>
            </Text>
            <Text style={[tw`text-white font-bold`,{fontSize: hp(5)}]}>
                For You 
            </Text>
        </Animated.View>

        <Animated.View entering={FadeIn.delay(200).stringify} style={{marginTop:20}}>
            <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={[tw`bg-rose-500 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200`,{height: hp(7), width: wp(80)}]}>
                <Text style={[tw`text-white font-bold`, {fontSize: hp(3)}]}>Get Started</Text>
            </TouchableOpacity>
        </Animated.View>

      </LinearGradient>
    </View>
  )
}