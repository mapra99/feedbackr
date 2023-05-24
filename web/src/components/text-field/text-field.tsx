import type { TextFieldProps } from './types'

export default function TextField({ className, error, ...props }: TextFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <input
        className={`
          font-sans text-base text-marian-blue rounded-md h-12 bg-ghost-white-light px-6 focus:border-savoy-blue focus:outline-none
          ${error ? 'border border-poppy' : ''}
          ${className}
        `}
        {...props}
      />
      { error && (
        <span className="text-poppy font-sans text-xs font-normal">
          { error }
        </span>
      ) }
    </div>
  )
}
