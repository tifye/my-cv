import { Text, View } from "@react-pdf/renderer"
import keywords from "@assets/ats_keywords.json" with {type:"json"}
function HiddenKeyWords() {
    const keywordsStr = keywords.join(", ")
    return (
        <View
            style={{
                display: "none",
                opacity: 0,
            }}
        >
            <Text>{keywordsStr}</Text>
        </View>
    )
}

export { HiddenKeyWords }
