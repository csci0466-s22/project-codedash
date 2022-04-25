import { Dimensions, Image, TouchableOpacity } from "react-native"; 
import { useLinkProps } from "@react-navigation/native";
import User from "../../lib/types/user.js";


enum AvatarSize {
  small = "small",
  medium = "medium",
  large = "large",
}

interface AvatarProps {
  user: User;
  size: AvatarSize;
  clickable?: boolean;
}


function Avatar({user, size, clickable=true}: AvatarProps) {

    const to = { screen: 'Profile', params: { id: user?.id } };
    const {onPress} = (clickable) ? useLinkProps({to}): {onPress: () => {}};


    console.table(user);

    if (!user || !user.id || !user.avatar) {
      //return loading indicator
      return <></>;
    }



    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={!clickable}
        style={{
          width:
            size === AvatarSize.small
              ? 40
              : size === AvatarSize.medium
              ? 50
              : 60,
          height:
            size === AvatarSize.small
              ? 40
              : size === AvatarSize.medium
              ? 50
              : 60,
          borderRadius:
            size === AvatarSize.small
              ? 20
              : size === AvatarSize.medium
              ? 25
              : 30,
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Image
          source={{
            uri: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
          }}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "cover",
            borderWidth: 2,
            borderColor: "#fff",
            borderRadius:
              Math.round(
                Dimensions.get("window").width + Dimensions.get("window").height
              ) / 2,
          }}
        ></Image>
      </TouchableOpacity>
    );

}


export default Avatar;
