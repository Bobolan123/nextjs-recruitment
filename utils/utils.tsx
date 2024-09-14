export const handleFormatLink = (link: string): string => {
    const lowerLink = link.toLowerCase();
    const newLink = lowerLink.replace(/[\s&]+/g, "-");
    return newLink;
};

export const IsValidEmail = (email: string) => {
    return /^\S+@\S+\.\S+$/.test(email);
};

export const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        // Generate a random index between 0 and i
        const j = Math.floor(Math.random() * (i + 1));

        // Swap elements at i and j
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

