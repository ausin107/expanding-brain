import { ClassNameValue, twMerge } from 'tailwind-merge'

type ButtonProps = {
  children: string
  className?: ClassNameValue
}
export default function Button({ children, className }: ButtonProps) {
  return (
    <div className='drop-shadow-btn'>
      <button
        className={twMerge(
          `py-2 px-16 rounded-lg bg-primary font-bold button-clipPath hover:bg-white transition-colors lg:text-base`,
          className
        )}>
        {children}
      </button>
    </div>
  )
}
