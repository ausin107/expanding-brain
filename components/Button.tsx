import { ClassNameValue, twMerge } from "tailwind-merge"

type ButtonProps = {
    children: string
    className: ClassNameValue

}
export default function Button({children, className} : ButtonProps) {
    return <button className={twMerge(`py-2 px-14 rounded-lg bg-primary font-bold button-clipPath lg:text-sm`, className)}>
        {children}
    </button>
}