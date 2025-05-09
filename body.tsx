import { StyleSheet, Text, View } from "npm:@react-pdf/renderer"
import { Theme, useTheme } from "./theme.ts"
import { Section, SectionBody, SectionHeader } from "./section.tsx"
import { Project, ProjectTitle } from "./project.tsx"
import projects  from "./projects.json" with {type: "json"}
import references from "./references.json" with {type: "json"}
import { ProjectShortDescription } from "./project.tsx";
import { ProjectBulletList } from "./project.tsx";
import { ProjectBullet } from "./project.tsx";
import { ReferenceBlock } from "./reference.tsx";
import { Separator } from "./Separator.tsx";

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
                        gap: theme.SpacingLarge
                    }}>
                        {projects.map((project, idx) => (
                      
                                <Project>
                                    <ProjectTitle title={project.title}/>
                                    <ProjectShortDescription description={project.description}/>
                                    <ProjectBulletList>
                                        {project.bullets.map((bullet) => (
                                            <ProjectBullet text={bullet} />
                                        ))}
                                    </ProjectBulletList>
                                    {idx !== projects.length - 1 && (
                                        <Separator style={{ marginTop: theme.SpacingMedium }}/>
                                    )}
                                </Project>
                          
                        ))}
                    </SectionBody>
                </Section>
            </View>
            <View style={{ flexGrow: 1 }}>
                <Section>
                    <SectionHeader>
                        <Text>References</Text>
                    </SectionHeader>
                    <SectionBody style={{
                        gap: theme.SpacingLarge
                    }}>
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
            </View>
        </View>
    )
}

function styles(theme: Theme) {
    return StyleSheet.create({
        body: {
            paddingTop: theme.SpacingLarge,
            paddingHorizontal: theme.SpacingExtraLarge,
            height: "100%",
            backgroundColor: theme.Base200,
            display: "flex",
            flexDirection: "row",
            gap: theme.SpacingExtraLarge,
        },
        main: {
            width: "60%",
            gap: theme.SpacingLarge,
        },
    })
}
