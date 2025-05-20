import { Path, Svg, SVGProps } from "@react-pdf/renderer"

function LinkIcon(props: SVGProps) {
    return (
        <Svg width="19" height="19" viewBox="0 0 24 24" {...props}>
            <Path
                fill="none"
                stroke="currentColor"
                strokeDasharray="28"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 6l2 -2c1 -1 3 -1 4 0l1 1c1 1 1 3 0 4l-5 5c-1 1 -3 1 -4 0M11 18l-2 2c-1 1 -3 1 -4 0l-1 -1c-1 -1 -1 -3 0 -4l5 -5c1 -1 3 -1 4 0"
            ></Path>
        </Svg>
    )
}

export { LinkIcon }
