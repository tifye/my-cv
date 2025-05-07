import "npm:react"
import "./fonts.ts"
import { Document, Page, render, View } from "npm:@react-pdf/renderer"
import { Header } from "./header.tsx"
import { Body } from "./body.tsx"

function CVDocument() {
    return (
        <Document style={{ fontFamily: "manrope" }}>
            <Page size="A4">
                <Header />
                <View style={{ flexGrow: 1 }}>
                    <Body />
                </View>
            </Page>
        </Document>
    )
}

render(<CVDocument />, `${import.meta.dirname}/cv.pdf`)
