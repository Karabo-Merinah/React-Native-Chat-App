import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native"
import { PlusCircleIcon } from "lucide-react-native"

interface Chats {
    id: number,
    image: ImageSourcePropType,
    name: string,
    time: string,
    message: string,
    count: number
}

const ChatItem = ({ item }: { item: Chats }) => {
    return (
        <View style={styles.chat}>
            <Image source={item.image} style={styles.avatar} />
            <View style={styles.details}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.message} numberOfLines={1}>{item.message}</Text>
            </View>
            <View style={styles.right}>
                <Text style={styles.time}>{item.time}</Text>
                {item.count > 0 && (
                    <View style={styles.messageCount}><Text style={styles.count}>{item.count}</Text></View>
                )}
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
    right: {
        alignItems: "flex-end",
        gap: 8
    },
    details: {
        flex: 1,
        gap: 6
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#222222"
    },
    message: {
        fontSize: 14,
        color: "gray"
    },
    messageAction: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    time: {
        fontSize: 14,
        flexDirection: 'row',
        color: "gray"
    },
    messageCount: {
        backgroundColor: "#DE5B27",
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