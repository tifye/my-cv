import React from "react"
import { View, ViewProps } from "npm:@react-pdf/renderer"
import { useTheme } from "@src/theme.ts"

type SectionHeaderProps = {
    children?: React.JSXElement
}
function SectionHeader({ children }: SectionHeaderProps) {
    const theme = useTheme()
    return (
        <View
            style={{
                fontWeight: "bold",
                color: theme.Primary,
                fontSize: 16,
            }}
        >
            {children && children}
            <View
                style={{
                    width: "100%",
                    height: "2",
                    backgroundColor: theme.Primary,
                    borderRadius: 999,
                }}
            ></View>
        </View>
    )
}

type SectionProps = {
    children?: React.JSXElement
}
function Section({ children }: SectionProps) {
    const theme = useTheme()
    return (
        <View
            style={{
                display: "flex",
                flexDirection: "column",
                gap: theme.SpacingMedium,
            }}
        >
            {children && children}
        </View>
    )
}

const SectionBody = React.forwardRef<View, ViewProps>(_SectionBody)
function _SectionBody(
    { style, ...props }: ViewProps,
    ref: React.forwardedRef<View>
) {
    return (
        <View
            ref={ref}
            style={[
                {
                    fontSize: 8,
                },
                style,
            ]}
            {...props}
        />
    )
}

export { Section, SectionHeader, SectionBody }
