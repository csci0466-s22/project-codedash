import { StyleSheet } from "react-native";
import { absoluteFill } from "react-native-extended-stylesheet";

const styles = StyleSheet.create({
    avoidView: {
        width: "100%"
    },
    bar: {
        backgroundColor: "#ffffff",
        position: "absolute",
        width: "100%",
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 20
    }
});

export default styles;