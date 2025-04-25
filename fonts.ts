import { Font } from "@react-pdf/renderer";

const manropeStaticDir = import.meta.dirname + "/assets/Manrope/static"
Font.register({
    family: "manrope",
    fonts: [
        {
            src: manropeStaticDir + "/Manrope-ExtraBold.ttf",
            fontWeight: "ultrabold",
        },
        {
            src: manropeStaticDir + "/Manrope-Bold.ttf",
            fontWeight: "bold",
        },
        {
            src: manropeStaticDir + "/Manrope-SemiBold.ttf",
            fontWeight: "semibold",
        },
        {
            src: manropeStaticDir + "/Manrope-Regular.ttf",
            fontWeight: "normal",
        },
        {
            src: manropeStaticDir + "/Manrope-Medium.ttf",
            fontWeight: "medium",
        },
        {
            src: manropeStaticDir + "/Manrope-Light.ttf",
            fontWeight: "light",
        },
        {
            src: manropeStaticDir + "/Manrope-ExtraLight.ttf",
            fontWeight: "ultralight",
        },
    ],
})