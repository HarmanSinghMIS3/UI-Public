export function getCurrentYear(): string {
    const today = new Date()
    return `${today.getFullYear()}`
}