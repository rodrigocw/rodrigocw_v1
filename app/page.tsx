"use client"

import Image from "next/image";
import Layout from "./ui/Layout";
import CardHome from "./components/templates/CardHome";
import ImageSvg from "./components/templates/ImageSvg";
import { fontCursiva } from "./ui/fonts";
import { useRouter } from 'next/navigation'
import { IconCV, IconBook } from "./components/icons";
import Link from "next/link";
import { useAppContext } from "./context";
import { IconLinkedin } from "@/app/components/icons";
import useWindowWidth from "./useWindowWidth";

export default function Home() {

  const { persist, setThemeColor, setOpenMenu } = useAppContext()
  const themeColor = persist.themeColor
  const openMenu = persist.openMenu
  const isDark = persist.isDark

  const router = useRouter()
  const urlLivro = "https://desvendando-o-rust.vercel.app/"
  const urlRaspberry = "https://www.linkedin.com/pulse/instala%25C3%25A7%25C3%25A3o-do-alpine-linux-raspberry-pi-4-como-home-lab-wansovicz/?trackingId=HnXtZrm5QxK%2B8uST2MtQMg%3D%3D"

  const windowWidth = useWindowWidth()
  const isSmall = windowWidth < 768

  return (
    <Layout>
      <CardHome
        imagem={<ImageSvg src="/images/inklogo.svg" width={85} height={100} alt="RodrigoCW" />}
        url="/ui/curriculumvitae"
        titulo="Rodrigo Carlos Wansovicz"
        subtitulo="Analista de Sistemas Full Stack Sênior"
        isDark={isDark}
        bgDark="bg-gray-900"
        bgLight="bg-gray-50">
        <div className={`
            flex flex-col mt-2 ml-2 mr-2 items-center justify-center text-justify
            ${fontCursiva.className} text-[18px]
          `}>
          <p>
            {`"Ganhei meu primeiro computador com 15 anos, um MSX, como computador era um ótimo videogame, mas era possível fazer programas em basic,  de lá pra cá passei por pascal, c/c++, clipper, zim, delphi, javascript, java. Uma coisa é constante neste tempo todo, minha paixão em programar, gosto muito de desafios computacionais e ajudar as pessoas a resolvê-los. Atualmente estou aprofundando meus conhecimentos da Linguagem Rust e escrevendo o livro Desvendando o Rust, onde apresento na forma de exemplos os conceitos da linguagem, que percebo ser a substituta natural do C e C++."`}
          </p>
        </div>
        <div className="flex flex-col mt-4 items-center justify-center">
          <button
            className={`flex bg-gradient-to-r from-blue-800 via-purple-700 to-purple-950 py-2 px-4 rounded`}
            onClick={() => router.push('/ui/curriculumvitae')}>
            {IconCV}
            <span className="ml-2">Currículo</span>
          </button>
        </div>
      </CardHome>
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
      </CardHome>
      <CardHome
        imagem={<ImageSvg src="/images/rasperry_mini.png" width={205} height={129} alt="Raspberry PI" />}
        url="/ui/articles"
        titulo="Instalação do Alpine Linux no Raspberry Pi"
        //subtitulo="Desvendando o Rust"
        isDark={isDark}
        bgDark="bg-gray-900"
        bgLight="bg-gray-50">
        <span>Instalação do Alpine Linux no Raspberry Pi 4 como servidor Home Lab utilizando Btrfs e ssd externo</span>
        <div className="flex flex-col mt-4 items-center justify-center">
          <Link href={urlRaspberry} target="_blank">
            <button
              className={`flex bg-gradient-to-r from-blue-800 via-purple-700 to-purple-950 py-2 px-4 rounded`}>
              {IconLinkedin()}
              <span className="ml-2">Ler</span>
            </button>
          </Link>
        </div>
      </CardHome>
      <div className="h-12"></div>

    </Layout>
  );
}
