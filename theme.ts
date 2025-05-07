export type Theme = typeof ThemeConstants
export const ThemeConstants = {
    Neutral: "#161616",
    NeutralContent: "#c2bdb9",
    Primary: "#1c1c29",
    PrimaryContent: "#e1ff00",
    Base100: "#f7f5f3",
    Base200: "#f3ede9",
    Base300: "#e2ddd9",
    BaseContent: "#4b4743",
    SpacingExtraSmall: 2,
    SpacingSmall: 4,
    SpacingMedium: 8,
    SpacingLarge: 16,
    SpacingExtraLarge: 32,
}

export function useTheme(): Theme {
    return ThemeConstants
} 