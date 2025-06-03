import { View, Link, LinkProps } from "npm:@react-pdf/renderer"

function MinWidthLink({ debug, style, ...props }: LinkProps) {
    if (!Array.isArray(style)) {
        style = [style ?? {}]
    }
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
                style={[{ flexShrink: 1 }, ...style]}
                {...props}
            ></Link>
        </View>
    )
}

export { MinWidthLink }
