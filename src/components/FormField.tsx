import type { ChangeEvent, InputHTMLAttributes } from 'react'

interface FormFieldProps {
  label: string
  name: string
  value: string | number
  type?: InputHTMLAttributes<HTMLInputElement>['type']
  onChange: (name: string, value: string | number) => void
  min?: number
  max?: number
  step?: number
  placeholder?: string
}

export function FormField({
  label,
  name,
  value,
  type = 'text',
  onChange,
  min,
  max,
  step,
  placeholder,
}: FormFieldProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (type === 'number') {
      onChange(name, Number(event.target.value))
      return
    }

    onChange(name, event.target.value)
  }

  return (
    <label className="field">
      <span>{label}</span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
        step={step}
        placeholder={placeholder}
      />
    </label>
  )
}
