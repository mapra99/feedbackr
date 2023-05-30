import CircledBg from '@/components/circled-bg'
import type { FormProps } from './types'

export default function Form({ icon, children, ...props }: FormProps) {
  return(
    <form
      className="flex flex-col items-center justify-center p-6 sm:p-10 bg-white rounded-xl relative"
      {...props}
    >
      { icon ? (
        <div className="absolute left-6 sm:left-10 -top-5 sm:-top-7">
          <CircledBg>
            { icon }
          </CircledBg>
        </div>
      ) : null }

      { children }
    </form>
  )
}