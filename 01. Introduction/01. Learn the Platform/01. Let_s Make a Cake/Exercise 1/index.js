function setTheme(theme) {
    let root = document.documentElement;
    if (theme === 'light') {
        root.style.setProperty('--bg-color', '#ffffff');
        root.style.setProperty('--text-color', '#0c5dea');
        root.style.setProperty('--title-color', '#0c5dea');        
    } else if (theme === 'dark') {
        root.style.setProperty('--bg-color', '#2B283A');
        root.style.setProperty('--text-color', '#ECF2FF');
        root.style.setProperty('--title-color', '#D5D4D8');   
    }
}

// 1. Try to change the theme to 'dark'
// 2. Run the code to see that it works
setTheme('light');