const watchGlobalEvent = (fn: () => void) => {
  document.body.addEventListener('click', (e) => {
    fn(e)
  })
}
export { watchGlobalEvent }
