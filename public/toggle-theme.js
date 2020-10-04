// Prevents flash if dark mode is the default theme.

(function() {
    const storageKey = 'jma-theme';
    const darkThemelass = 'dark-mode';
    const lightThemeClass = 'light-mode';
    const prefersDarkColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem(storageKey);

    function setTheme(isDarkTheme) {
        document.documentElement.classList.add(isDarkTheme ? darkThemelass : lightThemeClass);
        document.documentElement.classList.remove(isDarkTheme ? lightThemeClass : darkThemelass);
    }

    // Overwrites 'prefers-color-scheme' media query if stored in local storage
    if (storedTheme) {
        setTheme(JSON.parse(storedTheme));
    } else {
        setTheme(prefersDarkColorScheme);
        localStorage.setItem(storageKey, prefersDarkColorScheme);
    }
})();
