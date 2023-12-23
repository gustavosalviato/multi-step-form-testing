interface FieldErrorMessageProps {
  error: string
}
export function FieldErrorMessage({ error }: FieldErrorMessageProps) {
  return <p className="text-red-400 text-sm">{error}</p>
}
