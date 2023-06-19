import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../Pages/Profile/Profile";
import AddRepo from "../Pages/Profile/AddRepo";
import AddRepoForm from "../Pages/Profile/AddRepoForm";
import PortfolioCard from "../Pages/Profile/PortfolioCard";
import EditProfile from "../Pages/Profile/EditProfile";
import { TouchableOpacity } from "react-native-web";

const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black',
        // Additional styling options
        height: 50,
        // width: 100,
        // justifyContent: 'center',
        // alignItems: 'center',
        borderRadius: 50,
      },
    }}>
      <Stack.Screen name="My profile" component={Profile} />
      <Stack.Screen name="add Repo" component={AddRepo} />
      <Stack.Screen name="Repo Form" component={AddRepoForm} />
      <Stack.Screen name='portfolio card' component={PortfolioCard} />
      <Stack.Screen name='Edit' component={EditProfile} /> 
    </Stack.Navigator>
  );
};
export default ProfileNavigator;
