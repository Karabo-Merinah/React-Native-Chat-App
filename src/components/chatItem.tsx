import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native"

interface Chats{
    id:number,
    image:ImageSourcePropType,
    name:string,
    time:string,
    message:string,
    count:number
}

const ChatItem=({item}:{item:Chats})=>{
    return(
        <View>
            <Image source={item.image}/>
            <View style={styles.name}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.name}>{item.message}</Text>
            </View>
            <View style={styles.name}>
                <Text style={styles.name}>{item.time}</Text>
            </View>
            <View style={styles.name}>
                <Text style={styles.name}>count</Text>
            </View>
            </View>
    )}
    
const styles=StyleSheet.create({
    name:{
       flexDirection:'row',
       color:'black',
       gap:10,
       marginTop:15
    }

})


export default ChatItem