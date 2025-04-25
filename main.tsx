import "npm:react"
import "./fonts.ts"
import {
    Document,
    Page,
    render,
    StyleSheet,
    Text,
    View,
} from "npm:@react-pdf/renderer"

type Theme = typeof ThemeConstants
const ThemeConstants = {
    Base300: "#221e1b",
    BaseContent: "#c4ab95",
    SpacingSmall: 4,
    SpacingMedium: 8,
    SpacingLarge: 16,
    SpacingExtraLarge: 32,
}

function styles(theme: Theme) {
    return StyleSheet.create({
        header: {
            backgroundColor: theme.Base300,
            color: theme.BaseContent,
            padding: theme.SpacingLarge,
        },
    })
}

function Header() {
    const style = styles(ThemeConstants)

    return (
        <View style={style.header}>
            <Text
                style={{
                    fontFamily: "manrope",
                    fontWeight: "ultrabold",
                }}
            >
                Joshua De Matas
            </Text>
        </View>
    )
}

function CVDocument() {
    return (
        <Document>
            <Page size="A4">
                <Header />
                <View>
                    <Text>Mino</Text>
                </View>
            </Page>
        </Document>
    )
}

render(<CVDocument />, `${import.meta.dirname}/cv.pdf`)
