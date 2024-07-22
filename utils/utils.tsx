export const handleFormatLink = (link: string): string => {
    const lowerLink = link.toLowerCase();
    const newLink = lowerLink.includes(" ")
        ? lowerLink.replace(" ", "-")
        : lowerLink;
    return newLink;
};
