import { StyleSheet } from "react-native";

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
        paddingLeft: 10
    },
    buttonContainer: {
        alignItems: "center",
        height: '100%'
    },
    button: {
        height: '80%',
        borderWidth: 1,
        borderColor: "#121212",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 4,
        marginVertical: 5,
    },
    buttonText: {
        marginHorizontal: 5,
        fontSize: 15,
        marginHorizontal: 5,
    },
});

export default styles;