import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const ChatsBar = () => {

    const [activeTab, setActiveTab] = useState("Chat")
    const [hoveredTab, setHoveredTab] = useState("")

    return (
        <View style={styles.bar}>
            {/* Chats tab */}
            <Pressable style={[styles.tab, hoveredTab === "Chat" && styles.hovered, activeTab === "Chat" && styles.active]} onPress={() => setActiveTab("Chat")}
                onHoverIn={() => setHoveredTab("Chat")} onHoverOut={() => setHoveredTab("")}>
                <Text style={[styles.tabwritings, activeTab === "Chat" && styles.activeTab]}>Chat</Text>
            </Pressable>
            {/* Status tab */}
            <Pressable style={[styles.tab, hoveredTab === "Status" && styles.hovered, activeTab === "Status" && styles.active]} onPress={() => setActiveTab("Status")}
                onHoverIn={() => setHoveredTab("Status")} onHoverOut={() => setHoveredTab("")}>
                <Text style={[styles.tabwritings, activeTab === "Status" && styles.activeTab]}>Status </Text>
            </Pressable>
            {/* Calls tab */}
            <Pressable style={[styles.tab, hoveredTab === "Calls" && styles.hovered, activeTab === "Calls" && styles.active]} onPress={() => setActiveTab("Calls")}
                onHoverIn={() => setHoveredTab("Calls")} onHoverOut={() => setHoveredTab("")}>
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
        gap: 4
    },
    tab: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        paddingVertical: 10,
        borderRadius: 6,
        fontFamily: 'Roboto',
        fontWeight: 'medium'
    },
    tabwritings: {
        fontSize: 12,
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
    hovered: {
        backgroundColor: '#F9B18F'
    },
    tabs: {
        fontSize: 12,
        color: '#d45d32',
        fontWeight: 'bold'
    }

})

export default ChatsBar;