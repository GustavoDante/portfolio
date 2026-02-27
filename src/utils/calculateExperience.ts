/**
 * Calculates the experience duration from a start date to today,
 * rounded to the nearest 6-month increment, and formats it
 * according to the given language.
 */
export function calculateExperience(
  startDate: string,
  language: 'en' | 'pt',
): string {
  const start = new Date(startDate)
  const now = new Date()

  const totalMonths =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth())

  // Round to nearest 6-month increment
  const roundedMonths = Math.round(totalMonths / 6) * 6
  const years = Math.floor(roundedMonths / 12)
  const hasHalf = roundedMonths % 12 === 6

  if (language === 'en') {
    if (years === 0 && hasHalf) return 'half a year of experience'
    if (years === 1 && !hasHalf) return '1 year of experience'
    if (years === 1 && hasHalf) return '1 year and a half of experience'
    if (!hasHalf) return `${years} years of experience`
    return `${years} years and a half of experience`
  } else {
    if (years === 0 && hasHalf) return 'meio ano de experiência'
    if (years === 1 && !hasHalf) return '1 ano de experiência'
    if (years === 1 && hasHalf) return '1 ano e meio de experiência'
    if (!hasHalf) return `${years} anos de experiência`
    return `${years} anos e meio de experiência`
  }
}
