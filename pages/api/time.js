export default function handler(req, res) {
  try {
    // Get timezone from query parameters, default to 'Australia/Melbourne' if not provided
    const { timezone = "Australia/Melbourne" } = req.query || {}

    console.log("Timezone from query:", timezone)

    // Validate the timezone
    if (!isValidTimezone(timezone)) {
      return res.status(400).json({
        success: false,
        error: `Invalid timezone: ${timezone}`,
        message:
          'Please provide a valid IANA timezone identifier (e.g., "America/New_York", "Europe/London", "Australia/Melbourne")',
      })
    }

    // Get current date and time in the specified timezone
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

    const currentDateTime = new Intl.DateTimeFormat("en-US", options).format(now)

    // Return the formatted date and time
    return res.status(200).json({
      success: true,
      currentDateTime,
      timezone,
    })
  } catch (error) {
    console.error("Error processing request:", error)
    return res.status(500).json({
      success: false,
      error: error.message || "An error occurred while processing the request",
    })
  }
}

/**
 * Check if a timezone is valid
 * @param {string} timezone - The timezone to check
 * @returns {boolean} Whether the timezone is valid
 */
function isValidTimezone(timezone) {
  try {
    // This will throw an error for invalid timezones
    Intl.DateTimeFormat(undefined, { timeZone: timezone })
    return true
  } catch (e) {
    return false
  }
}

