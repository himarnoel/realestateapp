import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  const handleLogout = async () => {};
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7"
      >
        <View>
          <Text className="text-xl font-rubik-bold">Profile</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
