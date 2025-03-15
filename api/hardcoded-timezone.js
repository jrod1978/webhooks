export default function handler(req, res) {
  // Hardcode a specific timezone for testing
  const timezone = "America/New_York"

  try {
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

    return res.status(200).json({
      success: true,
      currentDateTime,
      timezone,
      message: "Using hardcoded timezone for testing",
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    })
  }
}

