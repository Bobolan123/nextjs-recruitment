export const handleFormatLink = (link: string): string => {
    const lowerLink = link.toLowerCase();
    const newLink = lowerLink.replace(/[\s&]+/g, "-");
    return newLink;
};

export const IsValidEmail = (email: string) => {
    return /^\S+@\S+\.\S+$/.test(email);
};
