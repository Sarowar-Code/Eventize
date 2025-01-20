import Navbar from "@/components/Navbar";
import AuthProvider from "@/providers/AuthProvider";
import { dbConnect } from "@/services/mongo";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata = {
    title: "Eventize",
    description:
        "Streamline event planning with smart tools and real-time tracking.",
};

export default async function RootLayout({ children }) {
    await dbConnect();
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <AuthProvider>
                    <Navbar />
                    <main class="py-8">{children}</main>
                </AuthProvider>
            </body>
        </html>
    );
}
