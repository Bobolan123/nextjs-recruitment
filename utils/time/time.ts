const dayjs = require("dayjs");

export const isLessThanOneDay = (timestamp: Date) => {
    const now = dayjs();
    const creationTime = dayjs(timestamp);
    const differenceInHours = now.diff(creationTime, "hour");
    return differenceInHours < 24;
};

export const getHoursSinceCreation = (timestamp: Date) => {
    const now = dayjs();
    const creationTime = dayjs(timestamp);
    return now.diff(creationTime, "hour");
};

export const getDaysSinceCreation = (timestamp: Date) => {
    const now = dayjs();
    const creationTime = dayjs(timestamp);
    return now.diff(creationTime, "day");
};
