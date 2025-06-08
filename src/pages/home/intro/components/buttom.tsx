export const Buttoms = ({ children }: { children: string }) => {
  return (
    <a
      href="#schedule-demo"
      className={`px-[18px] py-[10px] space-x-2 inline-flex items-center rounded-md text-gray-900 font-medium transition-colors bg-white hover:bg-gray-100`}
    >
      {children && <span>{children}</span>}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M5 12l14 0"></path>
        <path d="M15 16l4 -4"></path>
        <path d="M15 8l4 4"></path>
      </svg>
    </a>
  )
}
