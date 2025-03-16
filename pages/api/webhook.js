export default function handler(req, res) {
  try {
    // Log the entire request for debugging
    console.log("Request method:", req.method)
    console.log("Request headers:", req.headers)
    console.log("Request body:", req.body)

    // Get timezone from request body, with more robust extraction
    let timezone = "Australia/Melbourne" // Default

    if (req.body) {
      // Try to extract timezone from various possible locations
      if (typeof req.body === "string") {
        try {
          // If body is a string, try to parse it as JSON
          const parsedBody = JSON.parse(req.body)
          timezone = parsedBody.timezone || timezone
        } catch (e) {
          console.error("Failed to parse request body as JSON:", e)
        }
      } else if (req.body.timezone) {
        // Direct access if it's an object
        timezone = req.body.timezone
      } else if (req.body.data && req.body.data.timezone) {
        // Nested in data property
        timezone = req.body.data.timezone
      } else if (req.body.parameters && req.body.parameters.timezone) {
        // Nested in parameters property
        timezone = req.body.parameters.timezone
      }
    }

    // Also check query parameters as a fallback
    if (req.query && req.query.timezone) {
      timezone = req.query.timezone
    }

    console.log("Extracted timezone:", timezone)

    // Validate the timezone
    if (!isValidTimezone(timezone)) {
      return res.status(400).json({
        success: false,
        error: `Invalid timezone: ${timezone}`,
        message:
          'Please provide a valid IANA timezone identifier (e.g., "America/New_York", "Europe/London", "Australia/Melbourne")',
        receivedBody: req.body,
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

    // Return the formatted date and time with debug info
    return res.status(200).json({
      success: true,
      currentDateTime,
      timezone,
      debug: {
        receivedBody: req.body,
        extractedTimezone: timezone,
        currentTimeUTC: new Date().toISOString(),
      },
    })
  } catch (error) {
    console.error("Error processing webhook:", error)
    return res.status(500).json({
      success: false,
      error: error.message || "An error occurred while processing the request",
      debug: {
        receivedBody: req.body,
      },
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

