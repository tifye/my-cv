import React from "npm:react"
import { Text, View } from "npm:@react-pdf/renderer"
import { useTheme } from "./theme.ts"

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

function ProjectTitle({ title }: { title: string }) {
    return (
        <Text
            style={{
                fontSize: 12,
                fontWeight: "semibold",
            }}
        >
            {title}
        </Text>
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
            }}
        >
            {children && children}
        </View>
    )
}

function ProjectBullet({ text }: { text: string }) {
    return <Text>• {text}</Text>
}

export {
    Project,
    ProjectTitle,
    ProjectShortDescription,
    ProjectBulletList,
    ProjectBullet,
}
