export const getDaysUntilBirthday = (birthdayString: string) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const [year, month, day] = birthdayString.split('-').map(Number);
    
    let nextBirthday = new Date(today.getFullYear(), month - 1, day);
    
    if (nextBirthday < today) {
        nextBirthday = new Date(today.getFullYear() + 1, month - 1, day);
    }
    
    const daysLeft = Math.ceil((nextBirthday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

     if (daysLeft === 0) {
        return "Hoy";
    }
    return daysLeft;

};