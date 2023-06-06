export function buildStyles(active: boolean, error?: string) {
  return `
    font-sans text-base text-marian-blue rounded-md h-12 bg-ghost-white-light px-6 transition-all outline-none active:outline-none focus:outline-none
    ${active ? 'border border-savoy-blue' : ''}
    ${error ? 'border border-poppy' : ''}
  `
}
