import "npm:react"
import "./fonts.ts"
import { Document, Page, render, View } from "npm:@react-pdf/renderer"
import { Header } from "./first_page/header.tsx"
import { Body } from "./first_page/body.tsx"
import { SecondPage } from "./second_page/index.tsx"
import { HiddenKeyWords } from "@src/KeyWords.tsx"

function CVDocument() {
    return (
        <Document style={{ fontFamily: "manrope" }}>
            <Page size="A4">
                <Header />
                <View style={{ flexGrow: 1 }}>
                    <Body />
                </View>
            </Page>
            <Page size="A4">
                <SecondPage />
                <HiddenKeyWords />
            </Page>
        </Document>
    )
}

render(<CVDocument />, `${import.meta.dirname}/cv.pdf`)
