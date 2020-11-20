// Prevents flash if dark mode is the default theme.

(function() {
    const storageKey = 'jma-theme';
    const darkThemeClass = 'dark';
    const lightThemeClass = 'light';
    const prefersDarkColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem(storageKey);

    function setTheme(isDarkTheme) {
        document.documentElement.classList.add(isDarkTheme ? darkThemeClass : lightThemeClass);
        document.documentElement.classList.remove(isDarkTheme ? lightThemeClass : darkThemeClass);
    }

    // Overwrites 'prefers-color-scheme' media query if stored in local storage
    if (storedTheme) {
        setTheme(storedTheme === 'dark');
    } else {
        setTheme(prefersDarkColorScheme);
        localStorage.setItem(storageKey, prefersDarkColorScheme ? 'dark' : 'light');
    }
})();
