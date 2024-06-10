"use client"

import { IconBook, IconCV, IconHome, IconArtigo } from "../components/icons";
import MenuItem from "../components/templates/MenuItem";
import { useContext } from "react";
import { useAppContext } from "../context";
import useWindowWidth from "../useWindowWidth";

export default function Menu() {

    const { persist, setThemeColor, setOpenMenu } = useAppContext()
    const themeColor = persist.themeColor
    const openMenu = persist.openMenu
    const isDark = persist.isDark

    const windowWidth = useWindowWidth()
    const isSmall = windowWidth < 768

    return (
        <ul className={`${isSmall ? "flex flex-row" : ""}`}>
            <MenuItem url="/" texto="Início" icone={IconHome} />
            <MenuItem url="/ui/curriculumvitae" texto="Currículo" icone={IconCV} />
            <MenuItem url="/ui/projects" texto="Projetos" icone={IconBook} />
            <MenuItem url="/ui/articles" texto="Artigos" icone={IconArtigo} />
        </ul>
    )
}