import type { Chats } from "@/types/chat"
import { avatarColors } from "@/types/chat"
import { CheckCheck } from "lucide-react-native"
import { Image, StyleSheet, Text, View } from "react-native"

const ChatItem = ({ item, index }: { item: Chats, index: number }) => {

    // display the original message 
    let message = <Text>{item.message}</Text>

    // highlights the typing message for the first chat
    if (index === 0) {
        message = <Text style={styles.coloredText}>{item.message}</Text>
    }
    // highlight only "Faza" in the second chat
    if (index === 1) {
        message = (<Text>
            <Text style={styles.coloredText}>Faza</Text>
            {/* remove the first 4 characters to avoid repeating "Faza" */}
            {item.message.substring(4)}
        </Text>)
    }

    return (
        <View style={styles.chat}>
            {/* displays the user avatar profile */}
            <View style={[styles.avatarColor, { backgroundColor: avatarColors[index] }]}>
                <Image source={item.image} style={styles.avatar} />
            </View>
            <View style={styles.details}>
                {/* displays the contact name and message time  */}
                <View style={styles.nameTime}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.time}>{item.time}</Text>
                </View>
                <View style={styles.messageAction}>
                    <Text style={styles.message} numberOfLines={1}>{message}</Text>
                    {/*  double check marks for delivered  messages */}
                    {item.status === "delivered" && (
                        <CheckCheck size={18} color="#F8641F" />
                    )}
                    {/* unread message count  */}
                    {item.status === "unread" && item.count > 0 && (
                        <View style={styles.messageCount}>
                            <Text style={styles.count}>{item.count}</Text>
                        </View>
                    )}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    chat: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 20,
        paddingVertical: 12,
        gap: 12
    },
    avatar: {
        width: 55,
        height: 55,
        borderRadius: 28
    },
    avatarColor:{
        justifyContent:'center',
        borderRadius:30,
        width:55,
        height:55,
        alignItems:'center',
        overflow:'hidden'
    },
    right: {
        alignItems: "flex-end",
        gap: 8
    },
    details: {
        flex: 1,
        gap: 6
    },
    name: {
        fontSize: 13,
        fontFamily:'Roboto',
        fontWeight: "medium",
        color: "#222222"
    },
    message: {
        fontSize: 10,
        color: "gray",
        flex: 1,
        fontFamily:'Roboto',
        fontWeight:'regular'
    },
    nameTime: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    messageAction: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    coloredText: {
        fontWeight: 'bold',
        color: '#F8641F'
    },
    time: {
        fontSize: 14,
        flexDirection: 'row',
        color: "gray",
        fontWeight: 500
    },
    messageCount: {
        backgroundColor: "#F8641F",
        borderRadius: 10,
        width: 20,
        height: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    count: {
        color: "white",
        fontSize: 13,
        fontWeight: "bold"
    }
})

export default ChatItem