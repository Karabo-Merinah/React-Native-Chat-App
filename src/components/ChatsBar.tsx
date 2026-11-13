import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const ChatsBar = () => {

    const [activeTab, setActiveTab] = useState("Chat")

    return (
        <View style={styles.bar}>
            {/* Chats tab */}
            <Pressable style={[styles.tab, activeTab === "Chat" && styles.active]} onPress={() => setActiveTab("Chat")} >
                <Text style={[styles.tabwritings, activeTab === "Chat" && styles.activeTab]}>Chat</Text>
            </Pressable>
            {/* Calls tab */}
            <Pressable style={[styles.tab, activeTab === "Status" && styles.active]} onPress={() => setActiveTab("Status")}>
                <Text style={[styles.tabwritings, activeTab === "Status" && styles.activeTab]}>Status </Text>
            </Pressable>
            {/* Contact tab */}
            <Pressable style={[styles.tab, activeTab === "Calls" && styles.active]} onPress={() => setActiveTab("Calls")}>
                <Text style={[styles.tabwritings, activeTab === "Calls" && styles.activeTab]}>Calls</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    bar: {
        flexDirection: "row",
        backgroundColor: '#FFECE5',
        marginHorizontal: 20,
        marginTop: 15,
        marginBottom: 15,
        borderRadius: 9,
        padding: 4,

    },
    tab: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        paddingVertical: 10,
        borderRadius: 6,
        fontFamily:'Roboto',
        fontWeight:'medium'
    },
    tabwritings: {
        fontSize: 14,
        color: '#F8641F',
        fontWeight: 'bold'
    },
    activeTab: {
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    active: {
        backgroundColor: '#F3611E'
    },
    tabs: {
        fontSize: 12,
        color: '#d45d32',
        fontWeight: 'bold'
    }

})

export default ChatsBar;