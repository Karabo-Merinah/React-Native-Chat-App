import ChatsBar from "@/components/ChatsBar"
import ChatsList from "@/components/chatsList"
import Header from "@/components/Header"
import { StyleSheet, View } from "react-native"


export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Header />
            <ChatsBar/>
            <ChatsList/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    }
})
