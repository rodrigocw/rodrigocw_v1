import Cabecalho from "./Cabecalho";
import Menu from "./Menu";
import Rodape from "./Rodape";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="flex flex-col h-screen">

            {/*<News />*/}
            <header className="fixed top-0 w-full flex flex-col height:fit-content; position:relative;">
                <Cabecalho />
            </header>

            <div className="flex flex-1">

                <aside className="">
                    <Menu />
                </aside>

                <main className="flex-1 last:mr-2 overflow-y-auto">
                    {children}
                </main>

            </div>

            <footer className="fixed bottom-0 w-full">
                <Rodape />    
            </footer>

        </div>
    );
  }