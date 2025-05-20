import React from "npm:react"
import { Text, View } from "npm:@react-pdf/renderer"
import { useTheme } from "@src/theme.ts"
import { MinWidthLink } from "@src/components/MinWidthLink.tsx"

function Project({ children }: { children?: React.JSXElement }) {
    const theme = useTheme()
    return (
        <View
            style={{
                color: theme.Primary,
                gap: theme.SpacingSmall,
            }}
        >
            {children && children}
        </View>
    )
}

function ProjectTitle({ title, link }: { title: string; link: string }) {
    const theme = useTheme()
    return (
        <View
            style={{
                fontSize: 12,
                fontWeight: "semibold",
            }}
        >
            <MinWidthLink
                src={link}
                style={{
                    textDecoration: "none",
                    color: theme.Neutral,
                }}
            >
                {title}
            </MinWidthLink>
        </View>
    )
}

function ProjectShortDescription({ description }: { description: string }) {
    return (
        <Text
            style={{
                fontWeight: "bold",
            }}
        >
            {description}
        </Text>
    )
}

function ProjectBulletList({ children }: { children?: React.JSXElement }) {
    const theme = useTheme()
    return (
        <View
            style={{
                gap: theme.SpacingSmall,
                flexDirection: "column",
            }}
        >
            {children && children}
        </View>
    )
}

function ProjectBullet({ text }: { text: string }) {
    return (
        <View style={{ flexDirection: "row" }}>
            <Text>• </Text>
            <Text>{text}</Text>
        </View>
    )
}

export {
    Project,
    ProjectTitle,
    ProjectShortDescription,
    ProjectBulletList,
    ProjectBullet,
}
