import { useState } from "react";
import { Webhook, Settings, Shield, Zap, Copy, Check, Play, AlertCircle } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function WebhooksPage() {
  const [copiedText, setCopiedText] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState("member_join");

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedText(key);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const events = [
    {
      id: "member_join",
      name: "Member Join",
      description: "Triggered when a user joins your server",
      payload: `{
  "event": "member_join",
  "server_id": "123456789",
  "user": {
    "id": "987654321",
    "username": "NewUser",
    "discriminator": "1234",
    "avatar": "avatar_hash",
    "joined_at": "2025-01-15T10:30:00Z"
  },
  "timestamp": "2025-01-15T10:30:00Z"
}`
    },
    {
      id: "member_leave",
      name: "Member Leave",
      description: "Triggered when a user leaves your server",
      payload: `{
  "event": "member_leave",
  "server_id": "123456789",
  "user": {
    "id": "987654321",
    "username": "LeftUser",
    "discriminator": "5678"
  },
  "timestamp": "2025-01-15T10:30:00Z"
}`
    },
    {
      id: "message_delete",
      name: "Message Delete",
      description: "Triggered when a message is deleted",
      payload: `{
  "event": "message_delete",
  "server_id": "123456789",
  "channel_id": "555666777",
  "message": {
    "id": "888999111",
    "author_id": "987654321",
    "content": "Deleted message content",
    "deleted_at": "2025-01-15T10:30:00Z"
  },
  "timestamp": "2025-01-15T10:30:00Z"
}`
    },
    {
      id: "moderation_action",
      name: "Moderation Action",
      description: "Triggered when a moderation action is taken",
      payload: `{
  "event": "moderation_action",
  "server_id": "123456789",
  "action": "ban",
  "target_user": {
    "id": "987654321",
    "username": "BannedUser"
  },
  "moderator": {
    "id": "111222333",
    "username": "ModeratorUser"
  },
  "reason": "Spam",
  "timestamp": "2025-01-15T10:30:00Z"
}`
    }
  ];

  const currentEvent = events.find(e => e.id === selectedEvent);

  const setupSteps = [
    {
      step: 1,
      title: "Create Webhook Endpoint",
      description: "Set up an HTTP endpoint on your server to receive webhook events",
      code: `// Express.js example
app.post('/monebot-webhook', (req, res) => {
  const event = req.body;
  
  // Verify webhook signature (recommended)
  const signature = req.headers['x-monebot-signature'];
  
  // Process the event
  console.log('Received event:', event.event);
  
  res.status(200).send('OK');
});`
    },
    {
      step: 2,
      title: "Register Your Webhook",
      description: "Use the MoneBot API to register your webhook endpoint",
      code: `curl -X POST "https://api.monebot.com/v1/webhooks/register" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://your-domain.com/monebot-webhook",
    "events": ["member_join", "member_leave"],
    "server_id": "YOUR_SERVER_ID"
  }'`
    },
    {
      step: 3,
      title: "Handle Events",
      description: "Process different event types in your application",
      code: `switch (event.event) {
  case 'member_join':
    // Send welcome email
    await sendWelcomeEmail(event.user);
    break;
    
  case 'member_leave':
    // Update analytics
    await updateMemberStats(event.server_id);
    break;
    
  case 'moderation_action':
    // Log to audit system
    await logModerationAction(event);
    break;
}`
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F7] dark:bg-[#121212]">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-[#F5F4F0] to-[#EDEAE5] dark:from-[#1A1A1A] dark:to-[#0F0F0F]">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#2C2419] dark:text-white mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}>
            MoneBot <em>Webhooks</em>
          </h1>
          <p className="text-lg md:text-xl text-[#5C5347] dark:text-[#C0C0C0] mb-8 max-w-[60ch] mx-auto">
            Get real-time notifications about events in your Discord server with powerful webhook integrations
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <div className="bg-[#8B7355] text-white px-6 py-3 rounded-xl flex items-center gap-2">
              <Webhook size={20} />
              <span className="font-semibold">Real-time Events</span>
            </div>
            <div className="bg-white dark:bg-[#262626] border border-[#E8E6E1] dark:border-[#404040] px-6 py-3 rounded-xl flex items-center gap-2">
              <Shield size={20} className="text-[#8B7355]" />
              <span className="text-[#2C2419] dark:text-white font-semibold">Secure & Reliable</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-white dark:bg-[#121212]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2C2419] dark:text-white mb-12"
              style={{ fontFamily: "Playfair Display, serif" }}>
            Why Use Webhooks?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B7355] rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Zap size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#2C2419] dark:text-white mb-4">
                Real-time Updates
              </h3>
              <p className="text-[#5C5347] dark:text-[#B0B0B0]">
                Receive instant notifications when events happen in your Discord server
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B7355] rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Settings size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#2C2419] dark:text-white mb-4">
                Automated Workflows
              </h3>
              <p className="text-[#5C5347] dark:text-[#B0B0B0]">
                Trigger automated actions in your applications based on Discord events
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B7355] rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Shield size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#2C2419] dark:text-white mb-4">
                Secure Integration
              </h3>
              <p className="text-[#5C5347] dark:text-[#B0B0B0]">
                Cryptographically signed webhooks ensure data integrity and security
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Explorer */}
      <section className="py-20 px-6 bg-[#F5F4F0] dark:bg-[#1A1A1A]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2C2419] dark:text-white mb-12"
              style={{ fontFamily: "Playfair Display, serif" }}>
            Webhook Events
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Event Selector */}
            <div>
              <h3 className="text-xl font-semibold text-[#2C2419] dark:text-white mb-6">
                Available Events
              </h3>
              <div className="space-y-3">
                {events.map((event) => (
                  <button
                    key={event.id}
                    onClick={() => setSelectedEvent(event.id)}
                    className={`
                      w-full text-left p-4 rounded-xl border transition-all duration-200
                      ${selectedEvent === event.id
                        ? 'bg-[#8B7355] border-[#8B7355] text-white'
                        : 'bg-white dark:bg-[#1E1E1E] border-[#E8E6E1] dark:border-[#404040] hover:border-[#8B7355]'
                      }
                    `}
                  >
                    <div className="font-semibold mb-1">{event.name}</div>
                    <div className={`text-sm ${selectedEvent === event.id ? 'text-white/80' : 'text-[#5C5347] dark:text-[#B0B0B0]'}`}>
                      {event.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Event Payload */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-[#2C2419] dark:text-white">
                  Event Payload
                </h3>
                <button
                  onClick={() => copyToClipboard(currentEvent.payload, 'payload')}
                  className="flex items-center gap-2 text-[#8B7355] hover:text-[#75624A] transition-colors"
                >
                  {copiedText === 'payload' ? <Check size={16} /> : <Copy size={16} />}
                  <span className="text-sm font-semibold">Copy</span>
                </button>
              </div>
              
              <div className="bg-white dark:bg-[#1E1E1E] border border-[#E8E6E1] dark:border-[#404040] rounded-xl p-6">
                <div className="bg-[#F5F4F0] dark:bg-[#262626] border border-[#E8E6E1] dark:border-[#404040] rounded-lg p-4">
                  <pre className="text-sm text-[#2C2419] dark:text-[#E0E0E0] font-mono overflow-x-auto">
                    {currentEvent.payload}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Guide */}
      <section className="py-20 px-6 bg-white dark:bg-[#121212]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2C2419] dark:text-white mb-12"
              style={{ fontFamily: "Playfair Display, serif" }}>
            Setup Guide
          </h2>

          <div className="space-y-12">
            {setupSteps.map((step, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-[#8B7355] text-white rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-2xl font-semibold text-[#2C2419] dark:text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-[#5C5347] dark:text-[#B0B0B0] text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-[#F5F4F0] dark:bg-[#1E1E1E] border border-[#E8E6E1] dark:border-[#404040] rounded-xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-[#8B7355]">Code Example</span>
                      <button
                        onClick={() => copyToClipboard(step.code, `step-${index}`)}
                        className="text-[#8B7355] hover:text-[#75624A] transition-colors"
                      >
                        {copiedText === `step-${index}` ? <Check size={16} /> : <Copy size={16} />}
                      </button>
                    </div>
                    <pre className="text-sm text-[#2C2419] dark:text-[#E0E0E0] font-mono overflow-x-auto">
                      {step.code}
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Notice */}
      <section className="py-20 px-6 bg-[#F5F4F0] dark:bg-[#1A1A1A]">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-[#8B7355]/10 dark:bg-[#8B7355]/20 border border-[#8B7355]/20 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <AlertCircle size={24} className="text-[#8B7355] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-[#2C2419] dark:text-white mb-4">
                  Security Best Practices
                </h3>
                <ul className="space-y-2 text-[#5C5347] dark:text-[#B0B0B0]">
                  <li>• Always verify webhook signatures using the provided secret</li>
                  <li>• Use HTTPS endpoints to protect data in transit</li>
                  <li>• Implement rate limiting to prevent webhook flooding</li>
                  <li>• Store webhook secrets securely and rotate them regularly</li>
                  <li>• Validate and sanitize all incoming webhook data</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}