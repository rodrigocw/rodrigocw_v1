"use client"

import Layout from "../Layout";
import ImageSvg from "@/app/components/templates/ImageSvg";
import { IconEnvelopeSolid, IconPhoneSolid, IconLinkedin, IconGithub } from "@/app/components/icons";
import Link from "next/link";
import { useAppContext } from "@/app/context";

import { dataCV } from "@/app/components/data/cv";
import CardCV from "@/app/components/templates/CardCV";
import CardCVsm from "@/app/components/templates/CardCVsm";
import ContatoCV from "./contatoCV";

export default function CurriculumVitae() {

    const { persist, setThemeColor, setOpenMenu } = useAppContext()
    const themeColor = persist.themeColor
    const openMenu = persist.openMenu
    const isSmall = persist.isSmall
    const isDark = persist.isDark

    const h1Text = 16
    const h2Text = 14
    const h3Text = 12

    const h1Textsm = 14
    const h2Textsm = 12
    const h3Textsm = 10

    const data = dataCV

    return (
        <Layout>
            <div className={`flex`}>

                {isSmall && (
                    <div className={`flex flex-col`}>

                        <div className="flex justify-center items-center bg-gradient-to-b from-blue-800 via-purple-700 to-purple-950">
                            <div className="flex justify-center items-center h-20">
                                <div className="p-1 w-20 h-20 flex justify-center items-center">
                                    <ImageSvg src="/images/Rodrigo.png" width={80} height={80} alt="RodrigoCW" />
                                </div>
                            </div>
                            <div className="flex flex-col w-full justify-center items-center">
                                <h1 className="text-[16px]">Rodrigo Carlos Wansovicz</h1>
                                <h2 className="text-[14px]">Analista de Sistemas Full Stack Sênior</h2>
                                <h2 className="text-[12px]">Palmeira, Paraná, Brasil</h2>
                            </div>
                        </div>

                        <ContatoCV />

                        <h1 className="text-[16px] mt-2 ml-2">Resumo</h1>
                        <p className="text-[10px] ml-2 mr-2">
                            Ganhei meu primeiro computador com 15 anos, um MSX, como computador era um ótimo videogame, mas era possível fazer programas em basic,  de lá pra cá passei por pascal, c/c++, clipper, zim, delphi, javascript, java. Uma coisa é constante neste tempo todo, minha paixão em programar, gosto muito de desafios computacionais e ajudar as pessoas a resolvê-los. Atualmente estou aprofundando meus conhecimentos da Linguagem Rust e escrevendo o livro Desvendando o Rust, onde apresento na forma de exemplos os conceitos da linguagem, que percebo ser a substituta natural do C e C++.
                        </p>

                        <h1 className="text-[16px] mt-2 ml-2">Experiência</h1>

                        {data.empresas.map((item, num) => (
                            <CardCVsm key={num}
                                empresa={item.empresa}
                                cargo={item.cargo}
                                periodo={item.periodo}
                                local={item.local}
                                isDark={isDark}
                                bgDark={num % 2 === 0 ? "bg-gray-900" : "bg-black"}
                                bgLight={num % 2 === 0 ? "bg-gray-50" : "bg-white"}>

                                {item.jobs.map((item, num) => (
                                    <p key={num} className={item.class === "" ? "text-[10px] mt-1" : item.class}>
                                        {item.job}
                                    </p>
                                ))}
                            </CardCVsm>
                        ))}

                        <h1 className={`text-[${h1Textsm}px] mt-2 ml-2`}>Disclamer</h1>

                        <p className="text-[10px] ml-2 mr-2 mt-1">
                            Se você chegou até aqui Parabéns por ter lido toda a história da minha vida profissional. No dia de hoje 15/05/2024 são 33 anos (seria um presságio sobre os anos de vida do nosso Senhor Jesus?) vivendo e respirando desenvolvimento de sistemas, uma vida inteira desde os primórdios do MS DOS até a revolução da IA na atualidade. Sempre que preciso formatar e reler meu currículo, como foi este caso para o meu novo site, faço uma retrospectiva pela minha vida pessoal e profissional. Nossa sem dúvida, como diria o Roberto, foram Grandes Emoções. Muito trabalho, muito aprendizado, muitas horas de debug em tantos sistemas e tantas tecnologias diversas. Mas sempre fica a certeza, a satisfação em se fazer o que se gosta e a recompensa em estar ajudando as pessoas a realizar seu trabalho com o melhor do meu trabalho.
                        </p>

                        <div className="h-12"></div>

                    </div>
                )}

                {!isSmall && (
                    <div className={`flex`}>

                        <div className={`flex flex-col w-full max-w-[300px] bg-gradient-to-b from-blue-800 via-purple-700 to-purple-950`}>
                            <div className="flex justify-center items-center mt-10">
                                <ImageSvg src="/images/Rodrigo.png" width={150} height={150} alt="RodrigoCW" />
                            </div>

                            <ContatoCV />

                        </div>
                        <div className={`flex`}>
                            <div className={`flex flex-col mt-2 mb-2 ml-2 mr-2`}>

                                <h1 className="text-[28px]">Rodrigo Carlos Wansovicz</h1>
                                <h2 className="text-[20px]">Analista de Sistemas Full Stack Sênior</h2>
                                <h2 className="text-[16px]">Palmeira, Paraná, Brasil</h2>

                                <h1 className="text-[20px] mt-4">Resumo</h1>
                                <p className="text-[12px]">
                                    Ganhei meu primeiro computador com 15 anos, um MSX, como computador era um ótimo videogame, mas era possível fazer programas em basic,  de lá pra cá passei por pascal, c/c++, clipper, zim, delphi, javascript, java. Uma coisa é constante neste tempo todo, minha paixão em programar, gosto muito de desafios computacionais e ajudar as pessoas a resolvê-los. Atualmente estou aprofundando meus conhecimentos da Linguagem Rust e escrevendo o livro Desvendando o Rust, onde apresento na forma de exemplos os conceitos da linguagem, que percebo ser a substituta natural do C e C++.
                                </p>

                                <h1 className="text-[20px] mt-4">Experiência</h1>

                                {data.empresas.map((item, num) => (
                                    <CardCV key={num}
                                        empresa={item.empresa}
                                        cargo={item.cargo}
                                        periodo={item.periodo}
                                        local={item.local}
                                        isDark={isDark}
                                        bgDark={num % 2 === 0 ? "bg-gray-900" : "bg-black"}
                                        bgLight={num % 2 === 0 ? "bg-gray-50" : "bg-white"}>

                                        {item.jobs.map((item, num) => (
                                            <p key={num} className={item.class === "" ? "text-[12px] mt-1" : item.class}>
                                                {item.job}
                                            </p>
                                        ))}
                                    </CardCV>
                                ))}

                                <h1 className={`text-[${h1Text}px] mt-4`}>Disclamer</h1>

                                <p className="text-[12px] mt-2">
                                    Se você chegou até aqui Parabéns por ter lido toda a história da minha vida profissional. No dia de hoje 15/05/2024 são 33 anos (seria um presságio sobre os anos de vida do nosso Senhor Jesus?) vivendo e respirando desenvolvimento de sistemas, uma vida inteira desde os primórdios do MS DOS até a revolução da IA na atualidade. Sempre que preciso formatar e reler meu currículo, como foi este caso para o meu novo site, faço uma retrospectiva pela minha vida pessoal e profissional. Nossa sem dúvida, como diria o Roberto, foram Grandes Emoções. Muito trabalho, muito aprendizado, muitas horas de debug em tantos sistemas e tantas tecnologias diversas. Mas sempre fica a certeza, a satisfação em se fazer o que se gosta e a recompensa em estar ajudando as pessoas a realizar seu trabalho com o melhor do meu trabalho.
                                </p>

                                <div className="h-12"></div>

                            </div>
                        </div>

                    </div>
                )}


            </div>
        </Layout>
    )
}