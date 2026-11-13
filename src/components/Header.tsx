import { EllipsisVerticalIcon, Search } from "lucide-react-native"
import { useState } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"


const Header = () => {
    const [hoveredIcon, setHoveredIcon] = useState("")

    return (
        <SafeAreaView >
            <View style={styles.heading}>
                <Text style={styles.title}>HALODEK</Text>
                <View style={styles.buttons}>
                    <Pressable style={({ pressed }) => [styles.buttonIcon, hoveredIcon === "Search" && styles.iconHovered, pressed && styles.iconPressed]}
                        onHoverIn={() => setHoveredIcon("search")} onHoverOut={() => setHoveredIcon("")} onPress={() => { console.log('search button pressed') }}>
                        <Search size={25} />
                    </Pressable>
                    <Pressable style={({ pressed }) => [styles.buttonIcon, hoveredIcon === "meneu" && styles.iconHovered, pressed && styles.iconPressed]}
                        onHoverIn={() => setHoveredIcon("menu")} onHoverOut={() => setHoveredIcon("")} onPress={() => { console.log('vertical button pressed') }}>
                        <EllipsisVerticalIcon size={25} />
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    heading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        paddingVertical: 10
    },
    title: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: '#F8641F',
        fontSize: 25,
        alignItems: 'flex-start'
    },
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    buttonIcon: {
        borderRadius: 8,
        padding: 8
    },
    iconHovered: {
        backgroundColor: '#FFECE5'
    },
    iconPressed: {
        opacity: 0.6
    }
})

export default Header