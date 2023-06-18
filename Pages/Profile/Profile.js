import { useContext, useState } from "react";
import { UserContext } from "../../contexts/User";
import { Text, View, Button, Image, TouchableOpacity } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import FormButtons from "../../components/FormButtons";
import RepoCard from "../../components/RepoCard";

const Profile = ({ navigation }) => {
  const handleSignOut = () => {
    signOut(auth);
  };
  const { user } = useContext(UserContext);
  const [state, setState] = useState(1);
  return (
    <View>
      <Text>{user.username}</Text>
      <Image source={user.avatar_url} style={{ height: 200, width: 200 }} />
      <Text>{user.bio}</Text>
      <Text>{user.location}</Text>

      <TouchableOpacity onPress={() => navigation.navigate("add Repo")}>
        <Text className="bg-red-500 py-3 px-5">add repo</Text>
      </TouchableOpacity>
      <FormButtons
        title1="portfolio"
        title2="collaboration"
        state={state}
        setState={setState}
      />
      {state === 1 ? <RepoCard navigation={navigation} /> : null}
      <Button title="Sign out" onPress={handleSignOut} />
    </View>
  );
};
export default Profile;
