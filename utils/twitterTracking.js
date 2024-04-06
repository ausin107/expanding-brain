export const sendTwitterConversion = () => {
  if (!window.twq) {
    return
  }
  window.twq('event', 'tw-o7cy4-ol2y6')
}
