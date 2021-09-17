import { BasicComponent } from './basicComponent'

export type SizeOptions = "mini" | "default" | "small" | "big"
export type TypeOptions = "default" | "primary" | "error" | "success" | "text"

export interface ButtonProps {
  type?: TypeOptions
  size?: SizeOptions
  color?: string
  onClick?: (e: Event) => void
  disabled?: boolean
  ghost?: boolean
}

export class Button extends BasicComponent {
  $props: ButtonProps
}

export class _ButtonComponent extends Button { }
