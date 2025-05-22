import { Text, View } from "@react-pdf/renderer"
import keywords from "@assets/ats_keywords.json" with {type:"json"}
function HiddenKeyWords() {
    const keywordsStr = keywords.join(", ")
    return (
        <View
            style={{
                display: "flex",
                opacity: 0,
                position: "absolute",
                left: "-150%",
                top: "-150%"         
            }}
            debug
        >
            <Text>{keywordsStr}</Text>
        </View>
    )
}

export { HiddenKeyWords }
