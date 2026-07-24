import { Image, StyleSheet as RNStyleSheet, Text, View } from 'react-native';
import { FriendInterface } from '../interface/friend';


export default function Friend({ friends }: { friends: FriendInterface[] }) {

    const getInitial = (name: string) => {
        return name
            .trim()
            .split(" ")
            .slice(0, 2)
            .map((char) => char.charAt(0).toUpperCase())
            .join("");

    };



    if (friends === null || friends.length === 0) {
        return (

            <View style={style.emptyContainer}>
                <Image style={style.image} source={require('../../assets/images/icon/default-icon.jpg')} />
                <Text style={style.emptyText}>No hay amigos de momento.</Text>
            </View>
        );
    }

    return (
        <>
            {friends.map((friend) => (
                <View key={friend.id} style={style.div}>
                    {friend.image ? (
                        <Image style={style.image} source={{ uri: friend.image }} />
                    ) : (
                        <View style={style.initialsCircle}>
                            <Text style={style.initialsText}>{getInitial(friend.name)}</Text>
                        </View>
                    )}

                    <Text style={style.name}>{friend.name}</Text>
                    <Text style={style.date}>En {friend.birthday} días</Text>
                </View>
            ))}

        </>
    );
}

const style = RNStyleSheet.create({
    div: {
        width: 350,
        height: 80,
        marginTop: 20,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#fa91b4",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        backgroundColor: "#1e1e1e",
    },

    image: {
        borderRadius: 25,
        width: 50,
        height: 50,
        marginLeft: 10,
    },

    initialsCircle: {
        borderRadius: 25,
        width: 50,
        height: 50,
        marginLeft: 10,
        backgroundColor: "#fa91b4",
        justifyContent: "center",
        alignItems: "center",
    },

    initialsText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
    },

    name: {
        color: "#fff",
        fontSize: 17,
        marginLeft: 15,
        flexShrink: 1,
    },

    date: {
        color: "#7c7c7c",
        fontSize: 15,
        marginLeft: "auto",
        marginRight: 10,
    },
    emptyContainer: {
        marginLeft: 50,
        marginTop: 50,
        justifyContent: "center",
        alignItems: "center",

    },
    emptyText: {
        color: "gray",
        fontSize: 18,
        fontWeight: "600",
        textAlign: "center",
        marginTop: 20
    },
});
