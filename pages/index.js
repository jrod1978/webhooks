export default function Home() {
  return (
    <div style={{ 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      lineHeight: '1.6'
    }}>
      <h1>Timezone Webhook</h1>
      
      <div style={{
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        padding: '20px',
        margin: '20px 0',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h2>API Endpoint</h2>
        <p>Send a POST request to: <span style={{ fontWeight: 'bold', color: '#0070f3' }}>/api/webhook</span></p>
        <p>Include a JSON body with the desired timezone:</p>
        <pre style={{
          backgroundColor: '#eee',
          padding: '10px',
          borderRadius: '4px',
          overflow: 'auto'
        }}>{`{
  "timezone": "America/New_York"
}`}</pre>
        <p>If no timezone is provided, it defaults to "Australia/Melbourne".</p>
      </div>
      
      <div style={{
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        padding: '20px',
        margin: '20px 0',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h2>Example Response</h2>
        <pre style={{
          backgroundColor: '#eee',
          padding: '10px',
          borderRadius: '4px',
          overflow: 'auto'
        }}>{`{
  "success": true,
  "currentDateTime": "Friday, March 15, 2025, 10:30:45 AM",
  "timezone": "America/New_York"
}`}</pre>
      </div>
      
      <div style={{
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        padding: '20px',
        margin: '20px 0',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h2>Common Timezones</h2>
        <ul style={{ paddingLeft: '20px' }}>
          <li><code>America/New_York</code> - Eastern Time</li>
          <li><code>America/Chicago</code> - Central Time</li>
          <li><code>America/Denver</code> - Mountain Time</li>
          <li><code>America/Los_Angeles</code> - Pacific Time</li>
          <li><code>Europe/London</code> - Greenwich Mean Time (GMT)</li>
          <li><code>Europe/Paris</code> - Central European Time</li>
          <li><code>Asia/Tokyo</code> - Japan Standard Time</li>
          <li><code>Australia/Sydney</code> - Australian Eastern Time</li>
          <li><code>Australia/Melbourne</code> - Australian Eastern Time</li>
        </ul>
      </div>
      
      <div style={{
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        padding: '20px',
        margin: '20px 0',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h2>Using with Retell AI</h2>
        <p>Configure Retell AI to send a POST request to this webhook URL with the desired timezone in the request body.</p>
        <p>Example request body for Retell AI:</p>
        <pre style={{
          backgroundColor: '#eee',
          padding: '10px',
          borderRadius: '4px',
          overflow: 'auto'
        }}>{`{
  "timezone": "Australia/Melbourne"
}`}</pre>
      </div>
    </div>
  );
}
