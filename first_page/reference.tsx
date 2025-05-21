import { Text, View } from "npm:@react-pdf/renderer"
import { useTheme } from "@src/theme.ts"

type Reference = {
    name: string
    title: string
    email: string
    phone?: {
        text: string
        link: string
    }
    links: {
        [key: string]: string | undefined
    }
    note: string
}

type ReferenceBlockProps = {
    reference: Reference
}

function ReferenceBlock({ reference }: ReferenceBlockProps) {
    const theme = useTheme()
    return (
        <View
            style={{
                display: "flex",
                gap: theme.SpacingExtraSmall,
            }}
        >
            <Text
                style={{
                    fontSize: 9,
                    fontWeight: "bold",
                }}
            >
                {reference.name}, {reference.title}
            </Text>
            <Text>{reference.note}</Text>
        </View>
    )
}

export { type Reference, ReferenceBlock, type ReferenceBlockProps }
