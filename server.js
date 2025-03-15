import express from "express"

const app = express()
const PORT = process.env.PORT || 3000

// Middleware to parse JSON bodies
app.use(express.json())

app.post("/webhook", (req, res) => {
  try {
    // Get timezone from request body, default to 'UTC' if not provided
    const { timezone = "UTC" } = req.body

    // Get current date and time in the specified timezone
    const currentDateTime = getCurrentDateTime(timezone)

    // Return the formatted date and time
    res.json({
      success: true,
      currentDateTime,
      timezone,
    })
  } catch (error) {
    console.error("Error processing webhook:", error)
    res.status(500).json({
      success: false,
      error: error.message || "An error occurred while processing the request",
    })
  }
})

/**
 * Get the current date and time in the specified timezone
 * @param {string} timezone - The timezone (e.g., 'America/New_York', 'Europe/London')
 * @returns {string} Formatted date and time string
 */
function getCurrentDateTime(timezone) {
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

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

