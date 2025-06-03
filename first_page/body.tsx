import { Link, StyleSheet, Text, View } from "npm:@react-pdf/renderer"
import { Theme, useTheme } from "@src/theme.ts"
import { Section, SectionBody, SectionHeader } from "@components/section.tsx"
import { Project, ProjectTitle } from "./project.tsx"
import projects  from "@assets/projects.json" with {type: "json"}
import references from "@assets/references.json" with {type: "json"}
import { ProjectShortDescription } from "./project.tsx";
import { ProjectBulletList } from "./project.tsx";
import { ProjectBullet } from "./project.tsx";
import { ReferenceBlock } from "./reference.tsx";
import { Separator } from "@components/Separator.tsx";
import { TecnicalSkillsBlock } from "@src/first_page/technical_skills.tsx";
import { MinWidthLink } from "@src/components/MinWidthLink.tsx";
import { Badge } from "@src/components/Badge.tsx";

export function Body() {
    const theme = useTheme()
    const style = styles(theme)
    return (
        <View style={style.body}>
            <View style={style.main}>
                <Section>
                    <SectionHeader>
                        <Text>Summary</Text>
                    </SectionHeader>
                    <SectionBody>
                        <Text>
                            Operating at a 
                            <Text style={{ fontWeight: "bold" }}> high level </Text>
                             — leading projects, designing architecture, and building tools across domains. I've built backend platforms, SSH tunnels, and CLI tools, always with a focus on performance, clarity, and maintainability.
                        </Text>
                    </SectionBody>
                </Section>
                <Section>
                    <SectionHeader>
                        <Text>Noteworthy projects</Text>
                    </SectionHeader>
                    <SectionBody style={{
                        gap: theme.SpacingLarge,
                        flexDirection: "column",
                    }}>
                        {projects.map((project, idx) => (
                            <Project>
                                {idx !== 0 && (
                                    <Separator style={{ marginBottom: theme.SpacingMedium }} />
                                )}
                                <ProjectTitle title={project.title} link={project.link} />
                                <ProjectShortDescription description={project.description}/>
                                <ProjectBulletList>
                                    {project.bullets.map((bullet) => (
                                        <ProjectBullet text={bullet} />
                                    ))}
                                </ProjectBulletList>
                            </Project>
                        ))}
                    </SectionBody>
                </Section>
                <View style={{
                    fontSize: 8,
                    flexGrow: 1,
                    flexDirection: "row",
                    marginTop: theme.SpacingLarge
                }}>
                    <Text style={{ alignSelf: "flex-end" }}>
                        Explore more projects at{" "}
                        <Link src="https://www.joshuadematas.me" style={{
                            color: theme.Primary,
                            fontWeight: "semibold",
                        }}>
                            joshuadematas.me
                        </Link>
                        .
                    </Text>
                </View>
            </View>
            <View style={style.aside}>
                <Section>
                    <SectionHeader>
                        <Text>Languages</Text>
                    </SectionHeader>
                    <SectionBody>
                        <View style={{ 
                                flexDirection: "row",
                                alignItems: "center",
                                gap: theme.SpacingSmall,
                            }}
                        >
                            <View>
                                <Text>Bilingual in</Text>
                            </View>
                            <Badge>
                                <Text>English</Text>
                            </Badge>
                            <View>
                                <Text>and</Text>
                            </View>
                            <Badge>
                                <Text>Swedish</Text>
                            </Badge>
                        </View>
                    </SectionBody>
                </Section>
                <TecnicalSkillsBlock skills={skills} />
                <Section>
                    <SectionHeader>
                        <Text>Hobbies</Text>
                    </SectionHeader>
                    <SectionBody style={{ flexDirection: "column", gap: theme.SpacingSmall }}>
                        <Text>Programming, digital games, board games, and sometimes art.</Text>
                        <Text>I enjoy making random programs and exploring solutions. Lately, I've been diving deeper into the internals of the tools I use — exploring how things really work.</Text>
                    </SectionBody>
                </Section>
                <Section>
                    <SectionHeader>
                        <Text>Currently exploring</Text>
                    </SectionHeader>
                    <SectionBody>
                        <Text>
                            I am currently exploring <MinWidthLink src="https://notes.eatonphil.com/2024-08-20-deterministic-simulation-testing.html" style={{color: theme.Neutral}}>Deterministic Simulation Testing</MinWidthLink>, a concept I first encountered through <MinWidthLink style={{color: theme.Neutral}} src="https://tigerbeetle.com/">TigerBeetle</MinWidthLink>. The talk <MinWidthLink style={{color: theme.Neutral}} src="https://www.youtube.com/watch?v=4fFDFbi3toc">Testing Distributed Systems w/ Deterministic Simulation</MinWidthLink> sparked my interest and offers great insights.
                        </Text>
                    </SectionBody>
                </Section>
                <Section>
                    <SectionHeader>
                        <Text>References</Text>
                    </SectionHeader>
                    <SectionBody style={{ gap: theme.SpacingMedium }}>
                        {references.map((reference, idx) => (
                            <>
                                {idx !== 0 && (
                                    <Separator />
                                )}
                                <ReferenceBlock reference={reference}/>
                            </>
                        ))}
                        <Text style={{ marginTop: theme.SpacingLarge }}>Contact details for references available upon {"\n"}request.</Text>
                    </SectionBody>
                </Section>
            </View>
        </View>
    )
}

const skills = [
    "Go",
    "Docker",
    "GCP",
    "React",
    "Terraform",
    "PostgreSQL",
    "Redis",
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

function styles(theme: Theme) {
    return StyleSheet.create({
        body: {
            height: "100%",
            backgroundColor: theme.Base200,
            display: "flex",
            flexDirection: "row",
        },
        main: {
            width: "60%",
            height: "100%",
            gap: theme.SpacingLarge,
            paddingTop: theme.SpacingLarge,
            paddingBottom: theme.SpacingExtraLarge,
            paddingRight: theme.SpacingLarge,
            paddingLeft: theme.SpacingExtraLarge
        },
        aside: {
            width:"40%",
            gap: theme.SpacingLarge,
            paddingTop: theme.SpacingLarge,
            backgroundColor: theme.Base300,
            paddingLeft: theme.SpacingLarge,
            paddingRight: theme.SpacingExtraLarge
        }
    })
}
