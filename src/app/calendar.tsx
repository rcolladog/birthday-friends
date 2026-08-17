import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { FriendInterface } from "../interface/friend";
import { MarkedDate } from "../interface/markedCalendar";
import { friendService } from "../services/friendService";

export default function CalendarScreen() {
    const [friends, setFriends] = useState<FriendInterface[]>([]);
    const [markedDates, setMarkedDates] = useState<any>({});
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [modalVisible, setModalVisible] = useState(false);

    const formatedDate = (): string => {
        return selectedDate?.split("-").reverse().join(" - ") || "";
    };

    useFocusEffect(
        useCallback(() => {
            friendService.getAll()
                .then((data) => {
                    setFriends(data);
                    const marked: Record<string, MarkedDate> = {};
                    data.forEach((friend) => {
                        marked[friend.birthday] = {
                            marked: true,
                            dotColor: "#fa91b4",
                            selected: true,
                            selectedColor: "#fa91b4",
                        };
                    });
                    setMarkedDates(marked);
                })
                .catch((err) => console.error("Error:", err));
        }, [])
    );

    const handleDayPress = (day: { dateString: string }) => {
        setSelectedDate(day.dateString);
        setModalVisible(true);
    };

    const friendsOnSelectedDate = 
        selectedDate ? friends.filter((friend) => friend.birthday === selectedDate) : [];

    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.overlayView} onTouchEnd={() => setModalVisible(false)}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>
                            {formatedDate()}
                        </Text>

                        {friendsOnSelectedDate.length > 0 ? (
                            friendsOnSelectedDate.map((friend) => (
                                <Pressable key={friend.id} onPress={() => setModalVisible(false)} style={styles.friendButton}>
                                    <Text style={styles.friendText}>
                                        Cumpleaños de {friend.name} ♡
                                    </Text>
                                </Pressable>
                            ))
                        ) : (
                            <Text style={styles.noFriendsText}>
                                No hay cumpleaños este día
                            </Text>
                        )}

                        <Pressable onPress={() => setModalVisible(false)} style={styles.closeButton}>
                            <Text style={styles.closeButtonText}>
                                Cerrar
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <View style={styles.container}>
                <Calendar
                    enableSwipeMonths={true}
                    markedDates={markedDates}
                    onDayPress={handleDayPress}
                    theme={{
                        backgroundColor: "#121212",
                        calendarBackground: "#1e1e1e",
                        textSectionTitleColor: "#ccc",
                        selectedDayBackgroundColor: "#fa91b4",
                        selectedDayTextColor: "#fff",
                        todayTextColor: "#fa91b4",
                        dayTextColor: "#fff",
                        textDisabledColor: "#555",
                        dotColor: "#fa91b4",
                        selectedDotColor: "#fff",
                        monthTextColor: "#fff",
                        indicatorColor: "#fa91b4",
                        arrowColor: "#fa91b4",
                    }}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
        padding: 10,
    },
    overlayView: {
        flex: 1,
        justifyContent: "flex-end",
    },
    modalContent: {
        backgroundColor: "#1e1e1e",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        borderColor: "#fa91b4",
        borderTopWidth: 3,
    },
    modalTitle: {
        color: "#fa91b4",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    friendButton: {
       
        padding: 12,
        borderRadius: 8,
        marginBottom: 10,
        alignItems: "center",
    },
    friendText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    noFriendsText: {
        color: "#888",
        fontSize: 16,
        textAlign: "center",
        marginBottom: 20,
    },
    closeButton: {
        padding: 12,
        borderRadius: 8,
        borderColor: "#fa91b4",
        borderWidth: 1,
        alignItems: "center",
    },
    closeButtonText: {
        color: "#fa91b4",
        fontSize: 16,
        fontWeight: "bold",
    },
});