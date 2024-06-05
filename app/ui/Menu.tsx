"use client"

import { IconBook, IconCV, IconHome, IconArtigo } from "../components/icons";
import MenuItem from "../components/templates/MenuItem";
import { useContext } from "react";
import { useAppContext } from "../context";

export default function Menu() {

    const { persist, setThemeColor, setOpenMenu } = useAppContext()
    const themeColor = persist.themeColor
    const openMenu = persist.openMenu
    const isSmall = persist.isSmall
    const isDark = persist.isDark

    return (
        <ul className={`${isSmall ? "flex flex-row" : ""}`}>
            <MenuItem url="/" texto="Início" icone={IconHome} openMenu={openMenu} />
            <MenuItem url="/ui/curriculumvitae" texto="Currículo" icone={IconCV} openMenu={openMenu} />
            <MenuItem url="/ui/projects" texto="Projetos" icone={IconBook} openMenu={openMenu} />
            <MenuItem url="/ui/articles" texto="Artigos" icone={IconArtigo} openMenu={openMenu} />
        </ul>
    )
}