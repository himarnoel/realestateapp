import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import images from "@/constants/images";
import icons from "@/constants/icons";
import Search from "@/Components/search";
import { Card, FeaturedCard} from "@/Components/Cards";

const Index = () => {
  const [signIn, setsignIn] = useState<boolean>(false);
  return (
    <SafeAreaView className="h-full bg-white ">
      <View className="px-5">
        <View className="flex flex-row  items-center justify-between mt-5">
          <View className="flex flex-row  items-center ">
            <Image source={images.avatar} className="size-12 rounded-full" />
            <View className="flex flex-col items-start  ml-2  justify-center">
              <Text className="text-xs font-rubik text-black-100">
                Good Morning
              </Text>
              <Text className="text-base font-rubik-medium text-black-300">
                Emmanuel
              </Text>
            </View>
          </View>
          <Image source={icons.bell} className="size-6" />
        </View>
        <Search />
      <View className="my-5">
        <View className="flex flex-row items-center justify-between">
          <Text className="text-xl font-rubik-bold text-black-300">
            Featured
          </Text>
          <TouchableOpacity>
            <Text className="text-base font-rubik-bold text-primary-300">
              See all
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
      <FeaturedCard/>
      <Card />
    </SafeAreaView>
  );
};

export default Index;
