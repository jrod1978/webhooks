/**
 * Get the current date and time in the specified timezone
 * @param {string} timezone - The timezone (e.g., 'America/New_York', 'Europe/London')
 * @returns {string} Formatted date and time string
 */
export function getCurrentDateTime(timezone) {
  const now = new Date()

  const options = {
    timeZone: timezone,
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }

  try {
    return new Intl.DateTimeFormat("en-US", options).format(now)
  } catch (error) {
    console.error(`Invalid timezone: ${timezone}`, error)
    throw new Error(`Invalid timezone: ${timezone}`)
  }
}

