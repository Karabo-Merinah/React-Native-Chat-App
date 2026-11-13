import { Plus } from "lucide-react-native"
import { FlatList, Pressable, StyleSheet, View } from "react-native"
import ChatItem from "./chatItem"

//data for displaying
export const chats = [
    { id: 1, image: require("../../assets/images/avatar_images/grandpa_avatar.png"), name: "Faza Dzikrulloh", time: "14:30", message: "Typing...", count: 0, status: "none" },
    { id: 2, image: require("../../assets/images/avatar_images/hatypo.png"), name: "Hatypo Studio", time: "14:30", message: "Faza  Can you help me to do with new project...", count: 2, status: "unread" },
    { id: 3, image: require("../../assets/images/avatar_images/3_avatar.png"), name: "Zhofran A", time: "14:00", message: "I think we should upgrade the social media...", count: 2, status: "unread" },
    { id: 4, image: require("../../assets/images/avatar_images/dreadlocks_avatar.png"), name: "Vito Arvy", time: "13:40", message: "Okay adhit, I'll tell faza about it👍", count: 0, status: "none" },
    { id: 5, image: require("../../assets/images/avatar_images/man_avatar.png"), name: "Raul", time: "Yesterday", message: "Thanks Raul!🙏✨", count: 0, status: "delivered" },
    { id: 6, image: require("../../assets/images/avatar_images/man_with_beard.png"), name: "Farhan Bagas", time: "29/08/22", message: "Great work farhan!👍 I'll tell faza about logo...", count: 0, status: "delivered" },
    { id: 7, image: require("../../assets/images/avatar_images/smiling_avatar.png"), name: "Abdull", time: "28/08/22", message: "Perfecto!🔥  I will check it later", count: 0, status: "delivered" },
    { id: 8, image: require("../../assets/images/avatar_images/beard_man.png"), name: "Ibe hatypo", time: "27/08/22", message: "Nicely done bro!", count: 0, status: "delivered" }
]

const ChatsList = () => {
    return (
        <View style={styles.container}>
            {/* displays chats using a scrollable list */}
            <FlatList data={chats}
                // passes each chat and its index to the ChatItem component
                renderItem={({ item, index }) =>
                    <ChatItem item={item} index={index} />}
                keyExtractor={(item) => item.id.toString()}
                //add a devider line between the chats 
                ItemSeparatorComponent={() =>
                    <View style={styles.separator} />} />
            <Pressable style={styles.add} onPress={() => console.log('Add new contact')}>
                <Plus size={30} color='white' />
            </Pressable>
            
            
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    separator: {
        height: 1,
        backgroundColor: "#EEEEEE",
        marginLeft: 82,
        marginRight: 20
    },
    add: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        bottom: 50,
        right: 25,
        backgroundColor: "#F8641E",
        width: 60,
        height: 60,
        borderRadius: 28

    }
})

export default ChatsList
