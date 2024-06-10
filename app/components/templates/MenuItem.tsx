import { useAppContext } from "@/app/context"
import Link from "next/link"
import classNames from "classnames";
import useWindowWidth from "@/app/useWindowWidth";

interface MenuItemProps {
    url: string
    texto: string
    icone: any
}

export default function MenuItem(props: MenuItemProps) {

    const { persist, setThemeColor, setOpenMenu } = useAppContext()
    const isDark = persist.isDark
    const isOpen = persist.openMenu

    const windowWidth = useWindowWidth()
    const isSmall = windowWidth < 768

    function getThemeOpen(): string {
        return isDark
            ? "hover:bg-gray-700"
            : "hover:bg-gray-200"
    }

    return (
        <li>
            <Link href={props.url}
                className={classNames(
                    "flex items-center cursor-pointer rounded-md",
                    getThemeOpen(),
                    `${isOpen && !isSmall
                        ? 'ml-2 mr-2 h-10 w-32'
                        : 'ml-1 mr-1 justify-center h-14 w-14 text-[10px]'}`
                    )}>
                <div className={`
                    ${isOpen && !isSmall
                        ? 'flex ml-3'
                        : 'flex flex-col items-center justify-center'}
                `}>
                    {props.icone}
                    <span className={`
                        ${isOpen && !isSmall
                            ? 'flex items-center ml-3 text-sm'
                            : 'flex mt-1'}
                    `}>
                        {props.texto}
                    </span>
                </div>
            </Link>
        </li>
    )
}