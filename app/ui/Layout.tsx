import { useAppContext } from "../context";
import useWindowWidth from "../useWindowWidth";
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
    const isDark = persist.isDark

    const windowWidth = useWindowWidth()
    const isSmall = windowWidth < 768

    return (
        <div className="flex flex-col h-screen ">

            {/*<News />*/}
            <header className={`fixed top-0 w-full ${isDark ? 'bg-black' : 'bg-white'}`}>
                <Cabecalho />
            </header>

            <div className={`flex pt-16 overflow-hidden
                ${isSmall ? "flex-col" : ""}`}>

                <aside className="mb-2">
                    <Menu />
                </aside>

                <div className="flex overflow-y-auto">

                    <main className="flex-1 last:mr-2">
                        {children}
                    </main>

                    <div className="hidden sm:block xl:w-1/8 lg:w-1/6"></div>

                </div>

            </div>

            <footer className={`fixed bottom-0 w-full ${isDark ? 'bg-black' : 'bg-white'}`}>
                <Rodape />    
            </footer>

        </div>
    );
}

// hidden sm:block xl:w-1/8 lg:w-1/6