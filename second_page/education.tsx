import { Text, View } from "npm:@react-pdf/renderer"
import {
    Section,
    SectionHeader,
    SectionBody,
} from "@src/components/section.tsx"
import { useTheme } from "@src/theme.ts"
import { MinWidthLink } from "@src/components/MinWidthLink.tsx"

function EducationBlock() {
    const theme = useTheme()
    return (
        <View
            style={{
                flexDirection: "row",
                gap: theme.SpacingMedium,
            }}
        >
            <View style={{ width: "30%" }}>
                <Section>
                    <SectionHeader>
                        <Text>Education</Text>
                    </SectionHeader>
                    <SectionBody style={{ fontSize: 9 }}>
                        <Text style={{ fontWeight: "bold" }}>
                            B.S. Computer Science
                        </Text>
                        <MinWidthLink
                            src="https://ju.se/"
                            style={{ color: theme.Primary }}
                        >
                            Jönköping University
                        </MinWidthLink>
                        <View
                            style={{
                                fontSize: 8,
                                flexDirection: "row",
                                gap: theme.SpacingLarge,
                            }}
                        >
                            <Text>2019 - 2022</Text>
                            <Text>Jönköping, Sweden</Text>
                        </View>
                    </SectionBody>
                </Section>
            </View>
            <View style={{ width: "70%" }}>
                <Section>
                    <SectionHeader>
                        <Text>Scholarship</Text>
                    </SectionHeader>
                    <SectionBody>
                        <Text style={{ fontWeight: "bold" }}>
                            Jönköping University
                        </Text>
                        <Text style={{ fontSize: 8 }}>
                            Chosen as one of the top-performing students to
                            compete in a coding challenge at Jönköping
                            University. Awarded a 15,000 SEK scholarship for
                            building a full-stack admin system with React,
                            Node.js (NestJS), Redis, and PostgreSQL.
                        </Text>
                    </SectionBody>
                </Section>
            </View>
        </View>
    )
}

export { EducationBlock }
