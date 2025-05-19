import { Text, View } from "npm:@react-pdf/renderer"
import { useTheme } from "@src/theme.ts"
import { ProjectBullet, ProjectBulletList } from "@src/first_page/project.tsx"
import { Badge } from "@src/components/Badge.tsx"

type Experience = {
    title: string
    company: string
    date: string
    location: string
    note: string
    bullets: string[]
    tools: string[]
}

type ExperienceBlockProps = {
    experience: Experience
}

function ExperienceBlock({ experience }: ExperienceBlockProps) {
    const theme = useTheme()
    return (
        <View style={{ fontSize: 9, gap: theme.SpacingSmall }}>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <View
                    style={{
                        flexDirection: "column",
                        gap: theme.SpacingSmall,
                    }}
                >
                    <Text style={{ fontWeight: "bold" }}>
                        {experience.title}
                    </Text>
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
                </View>
                <View
                    style={{
                        flexDirection: "row-reverse",
                        flexWrap: "wrap",
                        fontSize: 8,
                        gap: theme.SpacingExtraSmall,
                        width: "70%",
                    }}
                >
                    {experience.tools.map((tool) => (
                        <Badge>
                            <Text>{tool}</Text>
                            <Text style={{ opacity: 0, display: "none" }}>
                                ,{" "}
                            </Text>
                        </Badge>
                    ))}
                </View>
            </View>

            <ProjectBulletList>
                {experience.bullets.map((bullet) => (
                    <ProjectBullet text={bullet} />
                ))}
            </ProjectBulletList>
        </View>
    )
}

export { ExperienceBlock, type Experience, type ExperienceBlockProps }
