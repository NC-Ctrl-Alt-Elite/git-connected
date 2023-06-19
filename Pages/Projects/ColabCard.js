import { View, Text, Image, Linking, ScrollView } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-web';

const ColabCard = ({ data }) => {
  console.log(data);
  return (
    <View className="flex flex-row border-[1px] border-black m-2 p-5 items-center">
      <Image style={{ height: 50, width: 50 }} source={data.item.avatar_url} />

      <View className="pl-3">
        <Text className="font-bold">User Name: {data.item.username}</Text>
        <Text className="font-semibold">Project Name: {data.item.name}</Text>
        <Text className="font-semibold">
          Project Description: {data.item.description}
        </Text>
        {/* <TouchableOpacity>
          <Text
            className="bg-lime-700 my-1 py-1 px-2 text-white text-center w-[80px] rounded-full"
            onPress={() => Linking.openURL(`${data.item.html_url}`)}
          >
            GitHub
          </Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default ColabCard;
