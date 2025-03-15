import express from "express"

const app = express()
const PORT = process.env.PORT || 3000

// Middleware to parse JSON bodies
app.use(express.json())

// Add a root endpoint for testing
app.get("/", (req, res) => {
  res.json({
    message: "Server is running! Use POST /webhook to get date and time for Melbourne, Australia.",
  })
})

app.post("/webhook", (req, res) => {
  try {
    // Hardcoded timezone for Melbourne, Australia
    const timezone = "Australia/Melbourne"

    // Get current date and time in Melbourne
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
 * @param {string} timezone - The timezone (e.g., 'Australia/Melbourne')
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
    console.error(`Error formatting date:`, error)
    return new Date().toISOString() + " (UTC - error occurred)"
  }
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

// Export the Express API for Vercel
export default app

