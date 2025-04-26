import "npm:react"
import "./fonts.ts"
import { Document, Page, render, Text, View } from "npm:@react-pdf/renderer"
import { Header } from "./header.tsx"

function CVDocument() {
    return (
        <Document style={{ fontFamily: "manrope" }}>
            <Page size="A4">
                <Header />
                <View>
                    <Text>Mino</Text>
                </View>
            </Page>
        </Document>
    )
}

render(<CVDocument />, `${import.meta.dirname}/cv.pdf`)
