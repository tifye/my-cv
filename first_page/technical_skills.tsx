import {
    Section,
    SectionBody,
    SectionHeader,
} from "@src/components/section.tsx"
import { Text, View } from "npm:@react-pdf/renderer"
import { useTheme } from "@src/theme.ts"

type TecnicalSkillsBlockProps = {
    skills: string[]
}
function TecnicalSkillsBlock({ skills }: TecnicalSkillsBlockProps) {
    const theme = useTheme()
    return (
        <Section>
            <SectionHeader>
                <Text>Technical skills</Text>
            </SectionHeader>
            <SectionBody
                style={{
                    flexDirection: "row",
                    gap: theme.SpacingSmall,
                    flexWrap: "wrap",
                }}
            >
                {skills.map((skill) => (
                    <View
                        style={{
                            paddingVertical: theme.SpacingExtraSmall,
                            paddingHorizontal: theme.SpacingMedium,
                            borderWidth: 1,
                            borderColor: theme.Base300,
                            borderRadius: 999,
                            backgroundColor: theme.Base100,
                        }}
                    >
                        <Text>{skill}</Text>
                        <Text style={{ opacity: 0, display: "none" }}>, </Text>
                    </View>
                ))}
            </SectionBody>
        </Section>
    )
}

export { TecnicalSkillsBlock, type TecnicalSkillsBlockProps }
