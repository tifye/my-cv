import { View } from "npm:@react-pdf/renderer"
import { useTheme } from "@src/theme.ts"
import { TecnicalSkillsBlock } from "@src/second_page/technical_skills.tsx"
import { EducationBlock } from "@src/second_page/education.tsx"

function SecondPage() {
    const theme = useTheme()
    return (
        <View
            style={{
                backgroundColor: theme.Base200,
                height: "100%",
                padding: theme.SpacingExtraLarge,
                gap: theme.SpacingExtraLarge,
            }}
        >
            <TecnicalSkillsBlock skills={skills} />
            <EducationBlock />
        </View>
    )
}

const skills = [
    "Go",
    "Docker",
    "GCP",
    "Terraform",
    "PostgreSQL",
    "Redis",
    "React",
    "Redpanda",
    "OpenTelemetry",
    "C#",
    "Sqlite",
    "Unity",
    "Javascript",
    "S3 storage",
    "Github",
    "SQL",
]

export { SecondPage }
