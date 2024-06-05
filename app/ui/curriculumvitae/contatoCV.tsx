import { IconEnvelopeSolid, IconGithub, IconLinkedin, IconPhoneSolid } from "@/app/components/icons"
import { useAppContext } from "@/app/context"
import Link from "next/link"

export default function ContatoCV() {
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

    const getTextStyle = (size: number, smSize: number) => {
        return isSmall ? `text-[${smSize}px]` : `text-[${size}px]`;
    };

    const getMarginStyle = (margin: number, smMargin: number) => {
        return isSmall ? `mt-${smMargin}` : `mt-${margin}`;
    };

    const classH1 = `${getTextStyle(h1Text, h1Textsm)} ${getMarginStyle(4, 1)}`;
    const classH2Icon = `flex items-center ${getTextStyle(h2Text, h2Textsm)} ${getMarginStyle(3, 2)} ml-2`;
    const classH2 = `${getTextStyle(h2Text, h2Textsm)} ${getMarginStyle(2, 1)} ml-2`;
    const classH3 = `${getTextStyle(h3Text, h3Textsm)} ml-4`;
    const classH3_1 = `${getTextStyle(h3Text, h3Textsm)} ml-6`;
    const classIcon = isSmall ? "w-4 h-4" : "w-6 h-6";

    return (
        <div>
            <div className="flex flex-col ml-2 mr-8 sm:mr-1">
                <h1 className={classH1}>Contato</h1>
                <div className={classH2Icon}>
                    {IconEnvelopeSolid(classIcon)}
                    <span className="ml-2">rodrigocw@gmail.com</span>
                </div>
                <div className={classH2Icon}>
                    {IconPhoneSolid(classIcon)}
                    <span className="ml-2">(42) 93300-4638</span>
                </div>
                <div className={classH2Icon}>
                    {IconLinkedin(classIcon)}
                    <Link href={"https://linkedin.com/in/rodrigocw/"} target="_blank">
                        <span className="ml-2">linkedin.com/in/rodrigocw</span>
                    </Link>
                </div>
                <div className={classH2Icon}>
                    {IconGithub(classIcon)}
                    <Link href={"https://github.com/rodrigocw/"} target="_blank">
                        <span className="ml-2">github.com/rodrigocw</span>
                    </Link>
                </div>
                <h1 className={classH1}>Formação acadêmica</h1>
                <h2 className={classH2}>MBA</h2>
                <h2 className={classH3}>Business Intelligence</h2>
                <h3 className={classH3}>Universidade Positivo</h3>
                <h3 className={classH3}>2019 - 2020</h3>
                <h2 className={classH2}>Especialização</h2>
                <h2 className={classH3}>Administração de Banco de Dados</h2>
                <h3 className={classH3}>Universidade Estadual de Ponta Grossa</h3>
                <h3 className={classH3}>2001</h3>
                <h2 className={classH2}>Graduação</h2>
                <h2 className={classH3}>Bacharelado em Informatica</h2>
                <h3 className={classH3}>Universidade Estadual de Ponta Grossa</h3>
                <h3 className={classH3}>1989 - 1993</h3>

                <h1 className={classH1}>Competências</h1>
                <h2 className={classH2}>Resolução de problemas complexos buscando codificação simples</h2>
                <h2 className={classH2}>Uso de orientação ao objeto</h2>
                <h2 className={classH2}>Resiliência</h2>
                <h2 className={classH2}>Trabalho em equipe</h2>
                <h2 className={classH2}>Back End</h2>
                <h3 className={classH3}>Windows, Linux (Alpine, Arch, Open SUSE, Ubuntu), Node.js</h3>
                <h3 className={classH3}>Banco de Dados</h3>
                <h3 className={classH3_1}>Oracle, SQL Server, Interbase, Firebase</h3>
                <h3 className={classH3}>Linguagens</h3>
                <h3 className={classH3_1}>PL/SQL, Angular</h3>
                <h2 className={classH2}>Front End</h2>
                <h3 className={classH3}>Linguagens</h3>
                <h3 className={classH3_1}>Angular, Next.js, React, Typescript, Delphi, Java, Rust, HTML, CSS</h3>
                <h3 className={classH3}>Report</h3>
                <h3 className={classH3_1}>JasperReports</h3>
                
                <h1 className={classH1}>Idiomas</h1>
                <h2 className={classH2}>Inglês Técnico</h2>
                
                <h1 className={classH1}>Hobbies</h1>
                <h2 className={classH2}>Aquarista, Audiófilo</h2>

            </div>

        </div>
    )
}