import { create } from "zustand";

type ThemeStoreState = {
	theme: string,
	toggleTheme: () => void
}

const getThemeFromLocalStorage = (): string => {
	const theme = localStorage.getItem('_theme') ?? "dark";
	triggerTailwindDarkClass(theme);
	return theme;
}

const triggerTailwindDarkClass = (currentTheme: string) => {
	if (currentTheme === 'dark') {
		document.documentElement.classList.add('dark');
	} else {
		document.documentElement.classList.remove('dark')
	}
}

const themeStore = create<ThemeStoreState>()((set) => ({
	theme: getThemeFromLocalStorage(),
	toggleTheme: (() => set((state) => {
		const newTheme = state.theme === 'dark' ? 'light' : 'dark';
		//save into localstorage
		localStorage.setItem('_theme', newTheme)
		triggerTailwindDarkClass(newTheme);
		return {
			theme: newTheme
		}
	}))
}))

export default function useTheme() {
	const [theme, toggleTheme] = themeStore(state => [state.theme, state.toggleTheme]);

	return {
		theme,
		toggleTheme
	}
}
