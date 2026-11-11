import { EllipsisVerticalIcon, Search } from "lucide-react-native"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const Header = () => {

    return (
        <SafeAreaView >
            <View style={styles.heading}>
                <Text style={styles.title}>Halodek</Text>
                <View style={styles.buttons}>
                    <Pressable onPress={() => { console.log('search button pressed') }}>
                        <Search size={30} />
                    </Pressable>
                    <Pressable onPress={() => { console.log('vertical button pressed') }}>
                        <EllipsisVerticalIcon size={30} />
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
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    title: {
        color: '#DE5B27',
        fontSize: 30,
        alignItems: 'flex-start',
        textTransform: 'uppercase'
    },
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    }

})

export default Header