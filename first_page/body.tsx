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
                            <Text style={{fontWeight: "bold"}}> senior level </Text>
                             — leading projects, designing architecture, and building tools across domains. I've built backend platforms, SSH tunnels, and CLI tools. My engineering perspective helps me create systems that are efficient, maintainable, and empowering for developers.
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
                        {projects.map((project) => (
                            <Project>
                                <ProjectTitle title={project.title} link={project.link} />
                                <ProjectShortDescription description={project.description}/>
                                <ProjectBulletList>
                                    {project.bullets.map((bullet) => (
                                        <ProjectBullet text={bullet} />
                                    ))}
                                </ProjectBulletList>
                                <Separator style={{ marginTop: theme.SpacingMedium }}/>
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
                        Explore more of my work at{" "}
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
                    </SectionBody>
                </Section>
                <TecnicalSkillsBlock skills={skills} />
                <Section>
                    <SectionHeader>
                        <Text>Hobbies</Text>
                    </SectionHeader>
                    <SectionBody>
                        <Text>Programming, digital games, and board games. I enjoy making random programs and exploring solutions. Lately, I've been diving deeper into the internals of the tools I use — exploring how things really work.</Text>
                    </SectionBody>
                </Section>
                <Section>
                    <SectionHeader />
                    <SectionBody style={{ gap: theme.SpacingSmall }}>
                        <Text>Visit my</Text>
                        
                        <View style={{ flexDirection: "row", gap: theme.SpacingSmall }}>
                            <MinWidthLink
                                src="https://github.com/tifye"
                                style={{ textDecoration: "none", color: theme.Neutral, fontWeight: "bold", fontSize: 16, }}>
                                GitHub
                            </MinWidthLink>
                            <Text style={{ alignSelf: "flex-end", fontSize: 7 }}>
                                it's green
                            </Text>
                        </View>
                        <View style={{ flexDirection: "row", gap: theme.SpacingSmall }}>
                            
                            <MinWidthLink
                                src="https://publish.obsidian.md/tifye/Welcome"
                                style={{ textDecoration: "none", color: theme.Neutral, fontWeight: "bold", fontSize: 16, }}>
                                Digital notebook
                            </MinWidthLink>
                            <Text style={{ alignSelf: "flex-end", fontSize: 7 }}>
                                very casual
                            </Text>
                        </View>
                        <View style={{ flexDirection: "row", gap: theme.SpacingSmall }}>
                            <MinWidthLink
                                src="https://www.joshuadematas.me/"
                                style={{ textDecoration: "none", color: theme.Neutral, fontWeight: "bold", fontSize: 16, }}>
                                Portfolio
                            </MinWidthLink>
                            <Text style={{ alignSelf: "flex-end", fontSize: 7 }}>
                                read about projects
                            </Text>
                        </View>
                        <MinWidthLink
                            src="https://www.linkedin.com/in/joshua-de-matas-18bb30206/"
                            style={{ textDecoration: "none", color: theme.Neutral, fontWeight: "bold", fontSize: 16, }}>
                            LinkedIn
                        </MinWidthLink>
                        <View style={{ flexDirection: "row", gap: theme.SpacingSmall }}>
                            <MinWidthLink
                                src="https://www.joshuadematas.me/cv.pdf"
                                style={{ textDecoration: "none", color: theme.Neutral, fontWeight: "bold", fontSize: 16, }}>
                                CV
                            </MinWidthLink>
                            <Text style={{ alignSelf: "flex-end", fontSize: 7 }}>
                                again for whatever reason
                            </Text>
                        </View>
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
