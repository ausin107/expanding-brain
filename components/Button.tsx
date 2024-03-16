import { ClassNameValue, twMerge } from 'tailwind-merge'

type ButtonProps = {
  children: string
  className?: ClassNameValue
  containerClass?: ClassNameValue
}
export default function Button({ children, className, containerClass }: ButtonProps) {
  return (
    <div className={twMerge('drop-shadow-btn', containerClass)}>
      <button
        className={twMerge(
          `py-2 px-16 rounded-lg bg-primary font-bold button-clipPath hover:bg-white transition-colors xl:text-base tracking-wide`,
          className
        )}>
        {children}
      </button>
    </div>
  )
}
