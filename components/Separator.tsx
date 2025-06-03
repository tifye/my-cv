import { View, ViewProps } from "npm:@react-pdf/renderer"
import { useTheme } from "@src/theme.ts"

function Separator({ style, ...props }: ViewProps) {
    const theme = useTheme()
    if (!Array.isArray(style)) {
        style = [style ?? {}]
    }
    return (
        <View
            style={[
                {
                    borderBottom: 1,
                    borderColor: theme.NeutralContent,
                    borderStyle: "dashed",
                },
                ...style,
            ]}
            {...props}
        />
    )
}

export { Separator }
