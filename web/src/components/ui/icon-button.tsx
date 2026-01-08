import type { ComponentProps, ReactNode } from "react";
import { tv, type VariantProps } from 'tailwind-variants'

//tailwind variants
const iconButton = tv({
  base: 'flex items-center justify-center rounded-lg hover:bg-zinc-700 trasition-colors duration-150',
  variants: {
    size: { 
      sm: 'size-6',
      md: 'size-8'
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

//prop created for buttons - aqui estão todas as propriedades do componente do tipo 'button' 
interface IconButtonProps extends ComponentProps<'button'>, VariantProps<typeof iconButton> {
  icon: ReactNode
}

export function IconButton({icon, size, className,...props}: IconButtonProps) {
  return (
    <button 
      type="button" 
      className={iconButton({ size, className })}
      {...props}
    >
        {icon}
    </button>
  )
}