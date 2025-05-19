import React from "react"
import { View, ViewProps } from "npm:@react-pdf/renderer"
import { useTheme } from "@src/theme.ts"

const Badge = React.forwardRef<View, ViewProps>(_Badge)
function _Badge({ style, ...props }: ViewProps, ref: React.ForwardedRef<View>) {
    const theme = useTheme()
    return (
        <View
            ref={ref}
            style={[
                {
                    paddingVertical: theme.SpacingExtraSmall,
                    paddingHorizontal: theme.SpacingMedium,
                    borderWidth: 1,
                    borderColor: theme.Base300,
                    borderRadius: 999,
                    backgroundColor: theme.Base100,
                },
                style,
            ]}
            {...props}
        />
    )
}

export { Badge }
