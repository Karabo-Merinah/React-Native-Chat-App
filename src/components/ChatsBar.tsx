import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const ChatsBar = () => {

    const [activeTab, setActiveTab] = useState("Chats")

    return (

        <View style={styles.bar}>
            <Pressable onPress={() => setActiveTab("Chats")}>
                <Text style={styles.tabs}>Chats</Text>
            </Pressable>
            <Pressable onPress={() => setActiveTab("Status")}>
                <Text style={styles.tabs}>Status</Text>
            </Pressable>
            <Pressable onPress={() => setActiveTab("Calls")}>
                <Text style={styles.tabs}>Calls</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    bar: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 25,
        backgroundColor: '#FFECE5',
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal:15
    },
    tabs: {
        fontSize: 12,
        color: '#d45d32',
        fontWeight: 'bold'
    }

})

export default ChatsBar;