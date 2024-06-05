"use client"

import { IconBars3, IconSol, IconDesk, IconLua } from "../components/icons";
import Image from 'next/image'
import ImageSvg from "../components/templates/ImageSvg";
import { fontYellow } from "../ui/fonts"
import classNames from "classnames";
import { useAppContext } from "../context";


export default function Cabecalho() {

    const { persist, setThemeColor, setOpenMenu } = useAppContext()
    const themeColor = persist.themeColor
    const isDark = persist.isDark
    const isSmall = persist.isSmall

    function getThemeClass(selecionado: boolean): string {
        const themeClass = (themeColor === "light"
            ? selecionado ? 'bg-gray-200' : ''
            : selecionado ? 'bg-gray-700' : '') + ' rounded-full'
        return themeClass
    }

    function getThemeIcon(selecionado: boolean): string {
        return isDark
            ? selecionado ? 'stroke-white' : 'stroke-gray-400 hover:stroke-white'
            : selecionado ? 'stroke-black' : 'stroke-gray-700 hover:stroke-black'
    }

    const solSelecionado = themeColor === 'light'
    const deskSelecionado = themeColor === 'system'
    const luaSelecionado = themeColor === 'dark'

    return (

        <div className={`
            flex h-16 items-center
        `}>
            <div className="w-1"></div>

            {!isSmall && (
                <div className={`
                    flex items-center justify-center cursor-pointer rounded-full
                    ml-2 h-10 w-10`}
                    onClick={setOpenMenu}>
                    {IconBars3}
                </div>
            )}
    
            <div className={`
                    flex items-center justify-center ml-2
                `}>
                <ImageSvg src="/images/inklogo.svg" width={27} height={32} alt="RodrigoCW" />
                <span className={`${fontYellow.className} text-2xl`}>RodrigoCW</span>
            </div>
            <div className={`
                    flex flex-grow
                `}>
                    
            </div>
            <div className={`
                    flex last:mr-2 justify-end h-10 border border-gray-400 rounded-2xl cursor-pointer
                `}>
                <ul className={`
                        flex flex-row items-center ml-1 mr-1
                    `}>
                    <li className={classNames(
                            'flex flex-row items-center justify-center ml-1 mr-1 w-8 h-8',
                            getThemeClass(solSelecionado)
                        )}
                        onClick={() => setThemeColor('light')}>
                        {IconSol(getThemeIcon(solSelecionado))}
                    </li>
                    <li className={classNames(
                            'flex flex-row items-center justify-center ml-1 mr-1 w-8 h-8',
                            getThemeClass(deskSelecionado)
                        )}
                        onClick={() => setThemeColor('system')}>
                        {IconDesk(getThemeIcon(deskSelecionado))}
                    </li>
                    <li className={classNames(
                            'flex flex-row items-center justify-center ml-1 mr-1 w-8 h-8',
                            getThemeClass(luaSelecionado)
                        )} 
                        onClick={() => setThemeColor('dark')}>
                        {IconLua(getThemeIcon(luaSelecionado))}
                    </li>
                </ul>
            </div>
        </div>
    )
}