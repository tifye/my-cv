import React from "react"
import { View, Link, LinkProps } from "npm:@react-pdf/renderer"

const MinWidthLink = React.forwardRef<Link, LinkProps>(_MinWidthLink)
function _MinWidthLink(
    { debug, style, ...props }: LinkProps,
    ref: React.forwardedRef<Link>
) {
    return (
        <View
            debug={debug}
            style={{
                display: "flex",
                flexDirection: "row",
            }}
        >
            <Link
                debug={debug}
                ref={ref}
                style={[style, { flexShrink: 1 }]}
                {...props}
            ></Link>
        </View>
    )
}

export { MinWidthLink }
