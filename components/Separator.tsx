import React from "npm:react"
import { View, ViewProps } from "npm:@react-pdf/renderer"
import { useTheme } from "@src/theme.ts"

const Separator = React.forwardRef<View, ViewProps>(_Separator)
function _Separator(
    { style, ...props }: ViewProps,
    ref: React.forwardedRef<View>
) {
    const theme = useTheme()
    return (
        <View
            ref={ref}
            style={[
                {
                    borderBottom: 1,
                    borderColor: theme.NeutralContent,
                    borderStyle: "dashed",
                },
                style,
            ]}
            {...props}
        />
    )
}

export { Separator }
