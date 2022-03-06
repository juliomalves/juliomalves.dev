const storageKey = '${STORAGE_KEY}';
const darkThemeClass = 'dark';
const lightThemeClass = 'light';
const prefersDarkColorScheme = window.matchMedia('${MEDIA_QUERY}').matches;
const storedTheme = localStorage.getItem(storageKey);
function setTheme(isDarkTheme) {
    document.documentElement.classList.add(isDarkTheme ? darkThemeClass : lightThemeClass);
    document.documentElement.classList.remove(isDarkTheme ? lightThemeClass : darkThemeClass);
}
if (storedTheme) {
    setTheme(storedTheme === darkThemeClass);
} else {
    setTheme(prefersDarkColorScheme);
    localStorage.setItem(storageKey, prefersDarkColorScheme ? darkThemeClass : lightThemeClass);
}
