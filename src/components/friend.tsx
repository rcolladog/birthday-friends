import { StyleSheet as RNStyleSheet, Text, View } from 'react-native';
import { FriendInterface } from '../interface/friend';

export default function Friend({ friends }: { friends: FriendInterface[] }) {

    if(friends === null || friends.length === 0){
        return(

                <View  style={style.div}>
                    <Text style={style.name}> No hay amigos de momento, agrega uno !</Text>
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
    },

    name: {
        color: "#fff",
        fontSize: 17,
        alignSelf: "flex-start",
        marginLeft: 80,
        marginTop: 20
    },
    date: {
        color: "#7c7c7c",
        fontSize: 17,
        alignSelf: "flex-start",
        marginLeft: 80,
        marginTop: 2
    }


})