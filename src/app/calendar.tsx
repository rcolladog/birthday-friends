import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { Text, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { FriendInterface } from "../interface/friend";
import { MarkedDate } from "../interface/markedCalendar";
import { friendService } from "../services/friendService";

export default function CalendarScreen() {
    const [friends, setFriends] = useState<FriendInterface[]>([]);
    const [markedDates, setMarkedDates] = useState<any>({});

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

    return (
        <View style={{ flex: 1, backgroundColor: "#121212", padding: 10 }}>
            <Calendar
                markedDates={markedDates}
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
            <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                <Text style={{ color: "#ccc", fontSize: 14, marginBottom: 10 }}>Cumpleaños:</Text>
                {friends.map((friend) => (
                    <View key={friend.id} style={{ marginBottom: 10 }}>
                        <Text style={{ color: "#fa91b4", fontSize: 14 }}>
                            {friend.birthday} - {friend.name}
                        </Text>
                    </View>
                ))}
            </View>
        </View>
    );
}