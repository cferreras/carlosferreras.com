export function useReadingTime(content: string) {
    const wordsPerMinute = 225;
    const words = content.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return {
        minutes,
        words
    };
}
