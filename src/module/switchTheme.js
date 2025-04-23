export const switchTheme = (dark) => {
    if (dark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light')
    }
}

export const getTheme = () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.classList.add('dark');
        return true
    } else {
        document.documentElement.classList.remove('dark');
        return false
    }
}