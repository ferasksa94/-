import type { ReactNode } from 'react'

export default function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[380px] rounded-[2.5rem] border-8 border-neutral-900 bg-neutral-900 shadow-2xl dark:border-neutral-700">
      <div className="relative h-[720px] overflow-y-auto rounded-[2rem] bg-neutral-50 dark:bg-neutral-950">
        <div className="sticky top-0 z-10 flex justify-center bg-neutral-50/80 py-1.5 backdrop-blur dark:bg-neutral-950/80">
          <div className="h-1.5 w-24 rounded-full bg-neutral-300 dark:bg-neutral-700" />
        </div>
        {children}
      </div>
    </div>
  )
}
