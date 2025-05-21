import { Text, View } from "npm:@react-pdf/renderer"
import { useTheme } from "@src/theme.ts"
import { EducationBlock } from "@src/second_page/education.tsx"
import { ExperienceBlock } from "@src/second_page/experience.tsx"
import experiences from "@assets/experiences.json" with {type: "json"}
import { Section, SectionHeader, SectionBody } from "@src/components/section.tsx";
import { Separator } from "@src/components/Separator.tsx";


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
            <Section>
                <SectionHeader>
                    <Text>Experience</Text>
                </SectionHeader>
                <SectionBody style={{ 
                    gap: theme.SpacingLarge,
                    flexDirection: "column", 
                }}>
                    <Text>Programming since 2015, professional since 2020. Software engineering is both my profession and creative outlet.</Text>
                    {experiences.map((experience, idx) => (
                        <>
                            {idx !== 0 && (
                                <Separator  />
                            )}
                            <ExperienceBlock experience={experience}/>
                            
                        </>
                    ))}
                </SectionBody>
            </Section>
            <EducationBlock />
        </View>
    )
}

export { SecondPage }
