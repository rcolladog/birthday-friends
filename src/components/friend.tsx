import { Image, StyleSheet as RNStyleSheet, Text, View } from 'react-native';
import { FriendInterface } from '../interface/friend';


export default function Friend({ friends }: { friends: FriendInterface[] }) {

    if(friends === null || friends.length === 0){
        return(

                <View  style={style.div}>
                    <Image style={style.image} source={require('../../assets/images/icon/default-icon.jpg')}></Image>
                    <Text style={style.name}> No hay amigos de momento.</Text>
                </View>
        );
    }

    return (
        <>
            {friends.map((friend) => (
                <View key={friend.id} style={style.div}>
                    <Text style={style.name}>{friend.name}</Text>
                    <Text style={style.date}>En {friend.birthday} días</Text>
                </View>
            ))}

        </>
    );
}

const style = RNStyleSheet.create({
    div: {
        width: 350, height: 80, marginTop: 20,
        borderRadius: 20, borderWidth: 1, borderColor: "#fa91b4",
        flexDirection: "row",  
        alignItems: "center",  
        
    },

    name: {
        color: "#fff",
        fontSize: 17,
        alignSelf: "flex-start",
        marginLeft: 15,
        marginTop: 15,
        flexShrink: 1
    },
    date: {
        color: "#7c7c7c",
        fontSize: 17,
        alignSelf: "flex-start",
        marginLeft: 80,
        marginTop: 2
    },

    image:{
        borderRadius:25,
        width: 50,
        height: 50,
        marginLeft:20
    }
})