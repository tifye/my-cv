export type Theme = typeof ThemeConstants
export const ThemeConstants = {
    Base300: "#221e1b",
    BaseContent: "#c4ab95",
    SpacingSmall: 4,
    SpacingMedium: 8,
    SpacingLarge: 16,
    SpacingExtraLarge: 32,
}

export function useTheme(): Theme {
    return ThemeConstants
} 