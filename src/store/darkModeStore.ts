import { proxy } from 'valtio'
import { LocalStorageKeys } from '../constants'

class DarkMode {
    isDark: boolean = false

    constructor() {
        this.getSystemDarkMode()
    }

    getSystemDarkMode() {
        const theme: boolean = window.matchMedia("(prefers-color-scheme: dark)").matches
        localStorage.setItem(LocalStorageKeys.THEME, theme ? "dark" : "light")

        if (theme) {
            document.documentElement.classList.add('dark')
            document.querySelector('meta[name=theme-color]')?.setAttribute('content', "#0f172a")
        }
        else {
            document.documentElement.classList.remove('dark')
            document.querySelector('meta[name=theme-color]')?.setAttribute('content', "#64748b")
        }

        this.isDark = theme
    }

    setMode() {
        localStorage.setItem(LocalStorageKeys.THEME, !this.isDark ? "dark" : "light")

        if (!this.isDark) {
            document.documentElement.classList.add('dark')
            document.querySelector('meta[name=theme-color]')?.setAttribute('content', "#0f172a")
        }
        else {
            document.documentElement.classList.remove('dark')
            document.querySelector('meta[name=theme-color]')?.setAttribute('content', "#64748b")
        }

        this.isDark = !this.isDark
    }

}

export const darkModeStore = proxy(new DarkMode())