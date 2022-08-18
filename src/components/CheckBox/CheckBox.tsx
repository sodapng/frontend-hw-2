/** Пропсы, которые принимает компонент CheckBox */
export type CheckBoxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  /** Вызывается при клике на чекбокс */
  onChange: (value: boolean) => void
}

export const CheckBox: React.FC<CheckBoxProps> = ({ onChange, ...props }) => {
  return (
    <input
      type="checkbox"
      onChange={(event) => onChange(event.target.checked)}
      {...props}
    />
  )
}
