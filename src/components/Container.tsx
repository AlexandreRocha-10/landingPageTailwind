import { ReactNode } from "react"

type ScriptProps = {
    children: ReactNode
}

export default function Container({children}: ScriptProps) {
  return (
    <div className="flex items-center justify-between w-full max-w-7xl px-[15px] mx-auto">{children}</div>
  )
}
