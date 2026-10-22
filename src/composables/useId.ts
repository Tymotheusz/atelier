let n = 0
/** Identifiant stable pour relier label, champ et aide. */
export function useId(prefix = 'at') {
  n += 1
  return `${prefix}-${n}`
}
