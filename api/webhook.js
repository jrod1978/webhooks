module.exports = (req, res) => {
  try {
    // Hardcoded timezone for Melbourne, Australia
    const timezone = "Australia/Melbourne"

    // Get current date and time in Melbourne
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
    console.error("Error processing webhook:", error)
    return res.status(500).json({
      success: false,
      error: error.message || "An error occurred while processing the request",
    })
  }
}

