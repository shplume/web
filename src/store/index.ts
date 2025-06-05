import { create } from 'zustand';

type ThemeMode = 'light' | 'dark';

interface AppState {
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  toggleThemeMode: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  themeMode: 'light',
  setThemeMode: (mode) => set({ themeMode: mode }),
  toggleThemeMode: () => set((state) => ({
    themeMode: state.themeMode === 'light' ? 'dark' : 'light'
  })),
}));