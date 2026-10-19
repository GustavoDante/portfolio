export function formatTechnologyYears(
  startDate: string,
  now: Date = new Date(),
): string {
  const [startYear, startMonth] = startDate.split('-').map(Number)
  const totalMonths =
    (now.getFullYear() - startYear) * 12 + (now.getMonth() + 1 - startMonth)
  const years = Math.floor(totalMonths / 12)

  return years >= 1 ? `${years}+` : '<1'
}
