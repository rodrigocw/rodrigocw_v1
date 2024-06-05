"use client"

import CardHome from "@/app/components/templates/CardHome";
import Layout from "../Layout";
import ImageSvg from "@/app/components/templates/ImageSvg";
import { IconBook } from "@/app/components/icons";
import Link from "next/link";
import { useAppContext } from "@/app/context";

export default function Projects() {

    const { persist, setThemeColor, setOpenMenu } = useAppContext()
    const themeColor = persist.themeColor
    const openMenu = persist.openMenu
    const isSmall = persist.isSmall
    const isDark = persist.isDark

    const urlLivro = "https://desvendando-o-rust.vercel.app"
    return (
        <Layout>
            <CardHome
                imagem={<ImageSvg src="/images/logo_rust.svg" width={100} height={100} alt="Rust" />}
                url="/ui/projects"
                titulo="Desvendando o Rust"
                //subtitulo="Desvendando o Rust"
                isDark={isDark}
                bgDark="bg-black"
                bgLight="bg-white">
                <span>Embarque comigo nesta incrível aventura e vamos juntos desvendar os segredos do Rust, a linguagem mais comentada e amada do momento, a mais amada pelos desenvolvedores no StackOverflow por sete anos consecutivos! Dominando os conceitos essenciais e aprendendo com exemplos práticos do mundo real, você estará pronto para construir softwares robustos e eficientes. Clique abaixo para acessar o site e conhecer o livro!</span>
                <div className="flex flex-col mt-4 items-center justify-center">
                    <Link href={urlLivro} target="_blank">
                        <button
                            className={`flex bg-gradient-to-r from-blue-800 via-purple-700 to-purple-950 py-2 px-4 rounded`}
                        //onClick={() => router.push('/ui/projects')}
                        >
                            {IconBook}
                            <span className="ml-2">Ler o livro</span>
                        </button>
                    </Link>
                </div>
                <div className="h-12"></div>
            </CardHome>
        </Layout>
    )
}