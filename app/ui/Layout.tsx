import { useAppContext } from "../context";
import Cabecalho from "./Cabecalho";
import Menu from "./Menu";
import Rodape from "./Rodape";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const { persist, setThemeColor, setOpenMenu } = useAppContext()
    const themeColor = persist.themeColor
    const openMenu = persist.openMenu
    const isSmall = persist.isSmall
    const isDark = persist.isDark

    return (
        <div className="flex flex-col h-screen">

            <header className={`fixed top-0 w-full ${isDark ? 'bg-black' : 'bg-white'}`}>
                <Cabecalho />
            </header>

            <div className={`flex pt-16 overflow-hidden ${isSmall ? "flex-col" : ""}`}>
                <aside className="overflow-y-auto mb-2">
                    <Menu />
                </aside>
                <main className="flex-1 last:mr-2 overflow-y-auto">
                    {children}
                </main>
                <div className="hidden sm:block xl:w-1/8 lg:w-1/6">
                    {/* Conteúdo da div direita */}
                </div>
            </div>

            <footer className={`fixed bottom-0 w-full ${isDark ? 'bg-black' : 'bg-white'}`}>
                <Rodape />
            </footer>

        </div>
    );
}

// hidden sm:block xl:w-1/8 lg:w-1/6