import Header from "@/components/Header"
import { StyleSheet, View } from "react-native"

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Header />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    }
})
