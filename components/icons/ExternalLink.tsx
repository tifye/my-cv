import { G, Path, Svg, SVGProps } from "@react-pdf/renderer"

function ExternalLinkIcon(props: SVGProps) {
    return (
        <Svg width="10" height="10" viewBox="0 0 24 24" {...props}>
            <G>
                <Path
                    fill={props.style.fill || "black"}
                    d="M5 6a1 1 0 0 1 1-1h4a1 1 0 1 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-4a1 1 0 1 0-2 0v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6zm10-3a1 1 0 1 0 0 2h2.586l-6.293 6.293a1 1 0 0 0 1.414 1.414L19 6.414V9a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1h-5z"
                ></Path>
            </G>
        </Svg>
    )
}

export { ExternalLinkIcon }
