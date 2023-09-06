export const is24Hours = (date: Date): boolean => {
    const twentyFourHoursAgo = new Date();
    twentyFourHoursAgo.setDate(twentyFourHoursAgo.getDate() - 1);
    return date >= twentyFourHoursAgo;
}

export const currentDate = new Date();