export default function Home() {
  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        lineHeight: "1.6",
      }}
    >
      <h1>Melbourne Time Webhook</h1>

      <div
        style={{
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
          padding: "20px",
          margin: "20px 0",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <h2>API Endpoint</h2>
        <p>
          Send a POST request to: <span style={{ fontWeight: "bold", color: "#0070f3" }}>/api/webhook</span>
        </p>
        <p>This will return the current date and time in Melbourne, Australia.</p>
      </div>

      <div
        style={{
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
          padding: "20px",
          margin: "20px 0",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <h2>Example Response</h2>
        <pre
          style={{
            backgroundColor: "#eee",
            padding: "10px",
            borderRadius: "4px",
            overflow: "auto",
          }}
        >{`{
  "success": true,
  "currentDateTime": "Friday, March 15, 2025, 10:30:45 AM",
  "timezone": "Australia/Melbourne"
}`}</pre>
      </div>

      <div
        style={{
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
          padding: "20px",
          margin: "20px 0",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <h2>Using with Retell AI</h2>
        <p>Configure Retell AI to send a POST request to this webhook URL.</p>
        <p>The webhook will always return the current time in Melbourne, Australia.</p>
      </div>
    </div>
  )
}

