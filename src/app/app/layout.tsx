import Footer from "../Components/Footer/Footer";
import Nav from "../Components/Nav/Nav";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Nav />
            {children}
            <Footer />
        </>
    );
}
