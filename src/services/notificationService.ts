import * as Notifications from 'expo-notifications';
import { friendService } from './friendService';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldPlaySound: true,
        shouldSetBadge: true,
        shouldShowBanner: true,
        shouldShowList: true,
    }),
});

export const notificationService = {
    async birthdayNotification() {
        const friends = await friendService.getAll();

        friends.forEach((friend) => {
            if (friend.reminder) {
                const [year, month, day] = friend.birthday.split('-').map(Number);
                const birthdayDate = new Date(new Date().getFullYear(), month - 1, day);

                // Si el cumpleaños ya pasó este año, es el próximo año
                if (birthdayDate < new Date()) {
                    birthdayDate.setFullYear(birthdayDate.getFullYear() + 1);
                }

                Notifications.scheduleNotificationAsync({
                    content: {
                        title: "¡Cumpleaños!",
                        body: `Hoy es el cumpleaños de ${friend.name}`,
                        sound: true,
                    },
                    trigger: null,
                });
            }
        });
    },
};