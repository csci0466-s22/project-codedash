import { Dimensions, Image, TouchableOpacity } from "react-native"; 
import { useLinkProps } from "@react-navigation/native";
import User from "../../lib/types/user.js";
import { useMemo } from "react";


enum AvatarSize {
  small = "small",
  medium = "medium",
  large = "large",
  xlarge = "xlarge",
}

interface AvatarProps {
  user: User;
  size: AvatarSize;
  clickable?: boolean;
}


function Avatar({user, size, clickable=true}: AvatarProps) {

    const to = { screen: 'Profile', params: { id: user?.id } };
    const {onPress} = (clickable) ? useLinkProps({to}): {onPress: () => {}};


    if (!user || !user.id) {
      //return loading indicator
      return <></>;
    }
    const prefetch = useMemo(() => {
      return (
        <Image
          source={{
            uri: `https://avatars.dicebear.com/api/initials/${user.name}.png`,
            //"https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200",
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
        />
      );
    }, [user?.id]);

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
              : size === AvatarSize.large
              ? 60
              : 100,
          height:
            size === AvatarSize.small
              ? 40
              : size === AvatarSize.medium
              ? 50
              : size === AvatarSize.large
              ? 60
              : 100,
          borderRadius:
            size === AvatarSize.small
              ? 20
              : size === AvatarSize.medium
              ? 25
              : size === AvatarSize.large
              ? 30
              : 50,
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {prefetch}
      </TouchableOpacity>
    );

}


export default Avatar;
