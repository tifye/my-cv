import { View, ViewProps } from "npm:@react-pdf/renderer"
import { useTheme } from "@src/theme.ts"

function Badge({ style, ...props }: ViewProps) {
    const theme = useTheme()
    if (!Array.isArray(style)) {
        style = [style ?? {}]
    }
    return (
        <View
            style={[
                {
                    paddingVertical: theme.SpacingExtraSmall,
                    paddingHorizontal: theme.SpacingMedium,
                    borderWidth: 1,
                    borderColor: theme.Base300,
                    borderRadius: 999,
                    backgroundColor: theme.Base100,
                },
                ...style,
            ]}
            {...props}
        />
    )
}

export { Badge }
