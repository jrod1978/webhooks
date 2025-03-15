export default function handler(req, res) {
  res.status(200).json({
    message: "API route is working! Use POST to /api/webhook to get the date and time.",
    currentTimeUTC: new Date().toISOString(),
  })
}

