import { Text, View, FlatList, ScrollView, Button, TextInput } from "react-native"
import { useContext, useState, useEffect, useRef } from "react";
import { UserContext } from "../../contexts/User";
import MsgCard from "./MsgCard";
import { getMessagesById } from "../../utils/functions";


const DirectMessage = ({route, navigation}) => {
    const { user } = useContext(UserContext);
    const { id } = route.params
    const flatList = useRef(null)
    console.log(id)
    const [msgList, setMsgList] = useState([]);
    const [msg, setMsg] = useState('')
    useEffect(() => {
      getMessagesById(id, user.username).then(res => setMsgList(res))
    }, []);
    function handlePress() {
        //function to send message
        //then setMsg('')
    }

    const renderItem = (item) => {
      return <MsgCard data={item} navigation={navigation} />;
    };
    return (
      <ScrollView>
        <View>
          <FlatList
            data={msgList}
            renderItem={renderItem}
            
        
          />
          <TextInput
            placeholder="message..."
            value={msg}
            onChangeText={setMsg}
          />
          <Button title="send" onPress={handlePress} />
        </View>
      </ScrollView>
    );
}
export default DirectMessage