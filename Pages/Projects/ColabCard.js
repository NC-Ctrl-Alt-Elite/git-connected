import { View, Text, Image, Linking, ScrollView } from "react-native";
import React from "react";

const ColabCard = ({ data }) => {
    console.log(data)
  return (
    <View className="flex flex-row border-[1px] border-black m-2 p-5 items-center">
      <Image
        className="h-[80px] w-[80px] rounded-full"
        source={data.item.avatar_url}
      />

      <View className="pl-3">
        <Text className="font-bold">{data.item.username}</Text>
        <Text className="font-semibold">{data.item.name}</Text>
        <Text className="font-semibold">{data.item.description}</Text>

        <Text
          className="bg-black my-1 py-1 px-2 text-white text-center w-[80px]"
          onPress={() =>  Linking.openURL(`${data.item.html_url}`)}
        >
          GitHub
        </Text>
      </View>
    </View>
  );
};

export default ColabCard;