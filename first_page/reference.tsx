import { Text, View } from "npm:@react-pdf/renderer"
import { useTheme } from "@src/theme.ts"
import { MinWidthLink } from "../components/MinWidthLink.tsx"

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
    const links = Object.entries(reference.links)
        .filter((entry) => {
            return entry[1] !== undefined
        })
        .map((entry) => {
            return { text: entry[0], link: entry[1]! }
        })
    return (
        <View
            style={{
                display: "flex",
                gap: theme.SpacingSmall,
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
            <View
                style={{
                    display: "flex",
                    gap: 2,
                }}
            >
                <MinWidthLink
                    src={`mailto:${reference.email}`}
                    style={{
                        color: theme.Primary,
                        fontWeight: "semibold",
                    }}
                >
                    {reference.email}
                </MinWidthLink>
                {links.map(({ text, link }) => (
                    <MinWidthLink
                        src={link}
                        style={{
                            color: theme.Primary,
                            fontWeight: "semibold",
                        }}
                    >
                        {text}
                    </MinWidthLink>
                ))}
                {reference.phone && (
                    <MinWidthLink
                        src={reference.phone.link}
                        style={{
                            color: theme.Primary,
                            fontWeight: "semibold",
                        }}
                    >
                        {reference.phone.text}
                    </MinWidthLink>
                )}
                <Text>{reference.note}</Text>
            </View>
        </View>
    )
}

export { type Reference, ReferenceBlock, type ReferenceBlockProps }
