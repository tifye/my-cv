import { View, Text, Link, Image } from "npm:@react-pdf/renderer"
import { StyleSheet } from "@react-pdf/renderer"
import { Theme, useTheme } from "./theme.ts"

export function Header() {
    const theme = useTheme()
    const style = styles(theme)

    return (
        <View style={style.header}>
            <View style={style.headerTitleSection}>
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: "ultrabold",
                    }}
                >
                    Joshua De Matas
                </Text>
                <Text
                    style={{
                        fontSize: 14,
                        fontWeight: "ultrabold",
                        flexGrow: 1,
                    }}
                >
                    Mid-level Golang Engineer
                </Text>
                <View style={{ flexDirection: "row" }}>
                    <Link
                        style={[style.headerTitleSubtext, style.linkText, {}]}
                        src="https://www.joshuadematas.me"
                    >
                        https://www.joshuadematas.me
                    </Link>
                    <View style={style.connectorLine}></View>
                </View>
            </View>
            <View style={style.headerRightSection}>
                <Link
                    src="https://maps.app.goo.gl/kjnPGQHTUpA7yNWW7"
                    style={[style.headerTitleSubtext, style.linkText]}
                >
                    Jönköping, Sweden
                </Link>
                <Link
                    src="https://github.com/tifye"
                    style={[style.headerTitleSubtext, style.linkText]}
                >
                    https://github.com/tifye
                </Link>
                <Link
                    src="mailto:dematasjoshua@hotmail.com"
                    style={[style.headerTitleSubtext, style.linkText]}
                >
                    dematasjoshua@hotmail.com
                </Link>
            </View>
            <Image src="./assets/Gopher.png"></Image>
        </View>
    )
}

function styles(theme: Theme) {
    return StyleSheet.create({
        header: {
            backgroundColor: theme.Neutral,
            color: theme.NeutralContent,
            height: 125,
            display: "flex",
            flexDirection: "row",
        },
        headerTitleSection: {
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            padding: theme.SpacingLarge,
            paddingRight: 0,
        },
        headerRightSection: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: theme.SpacingLarge,
            height: "100%",
            alignItems: "flex-end",
            gap: theme.SpacingSmall,
        },
        headerTitleSubtext: {
            fontSize: 8,
            fontWeight: "bold",
        },
        connectorLine: {
            height: "1",
            borderRadius: 999,
            flexGrow: 1,
            backgroundColor: theme.NeutralContent,
            alignSelf: "center",
            marginLeft: theme.SpacingLarge,
            marginTop: theme.SpacingSmall,
            opacity: 0.25,
        },
        linkText: {
            color: theme.NeutralContent,
            textDecoration: "none",
        },
    })
}
