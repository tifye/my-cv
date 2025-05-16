import { Text, View } from "npm:@react-pdf/renderer"
import { useTheme } from "@src/theme.ts"

type Experience = {
    title: string
    company: string
    date: string
    location: string
    note: string
}

type ExperienceBlockProps = {
    experience: Experience
}

function ExperienceBlock({ experience }: ExperienceBlockProps) {
    const theme = useTheme()
    return (
        <View style={{ fontSize: 9 }}>
            <Text style={{ fontWeight: "bold" }}>{experience.title}</Text>
            <Text>{experience.company}</Text>
            <View
                style={{
                    fontSize: 8,
                    flexDirection: "row",
                    gap: theme.SpacingLarge,
                }}
            >
                <Text>{experience.date}</Text>
                <Text>{experience.location}</Text>
            </View>
            <Text
                style={{
                    marginTop: theme.SpacingSmall,
                    fontSize: 8,
                }}
            >
                {experience.note}
            </Text>
        </View>
    )
}

export { ExperienceBlock, type Experience, type ExperienceBlockProps }
