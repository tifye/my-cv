import { Link, StyleSheet, Text, View } from "npm:@react-pdf/renderer"
import { Theme, useTheme } from "@src/theme.ts"
import { Section, SectionBody, SectionHeader } from "@components/section.tsx"
import { Project, ProjectTitle } from "./project.tsx"
import projects  from "@assets/projects.json" with {type: "json"}
import references from "@assets/references.json" with {type: "json"}
import experiences from "@assets/experiences.json" with {type: "json"}
import { ProjectShortDescription } from "./project.tsx";
import { ProjectBulletList } from "./project.tsx";
import { ProjectBullet } from "./project.tsx";
import { ReferenceBlock } from "./reference.tsx";
import { Separator } from "@components/Separator.tsx";
import { ExperienceBlock } from "./experience.tsx";

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
                            I've built backend platforms, HTTP tunnels over SSH,
                            and CLI tools across varied domains. My broad
                            engineering perspective helps me design efficient,
                            maintainable systems. I focus on performance,
                            clarity, and building tools that empower developers.
                        </Text>
                    </SectionBody>
                </Section>
                <Section>
                    <SectionHeader>
                        <Text>Projects</Text>
                    </SectionHeader>
                    <SectionBody style={{
                        gap: theme.SpacingLarge,
                        flexDirection: "column",
                    }}>
                        {projects.map((project) => (
                            <Project>
                                <ProjectTitle title={project.title}/>
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
                <Section>
                    <SectionHeader>
                        <Text>Experience</Text>
                    </SectionHeader>
                    <SectionBody style={{ gap: theme.SpacingMedium }}>
                        {experiences.map((experience, idx) => (
                            <>
                                {idx !== 0 && (
                                    <Separator />
                                )}
                                <ExperienceBlock experience={experience}/>
                            </>
                        ))}
                    </SectionBody>
                </Section>
            </View>
        </View>
    )
}

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
