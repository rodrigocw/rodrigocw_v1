interface CardCVProps {
    empresa: string
    cargo: string
    periodo: string
    local: string
    isDark: boolean
    bgDark?: string
    bgLight?: string
    children?: React.ReactNode
}

export default function CardCVsm(props: CardCVProps) {
    return (
        <div>
            <div className="mt-2"></div>
            <div className={`
                flex flex-col
                ${props.isDark ? props.bgDark : props.bgLight}
            `}>
                <div className={`
                    flex flex-col mt-1 mb-1 ml-2 mr-2
                `}>
                    <h1 className="text-[14px]">
                        {props.empresa}
                    </h1>
                    <h2 className="text-[12px]">
                        {props.cargo}
                    </h2>
                    <h3 className="text-[10px]">
                        {props.periodo}
                    </h3>
                    <h4 className="text-[10px]">
                        {props.local}
                    </h4>
                    {props.children}
                </div>
            </div>
        </div>

    )
}