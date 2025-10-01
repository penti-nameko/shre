import { useState } from "react";
import { Code, Copy, Check, ExternalLink, Key, Globe, Webhook } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ApiDocsPage() {
  const [copiedEndpoint, setCopiedEndpoint] = useState(null);

  const copyToClipboard = (text, endpoint) => {
    navigator.clipboard.writeText(text);
    setCopiedEndpoint(endpoint);
    setTimeout(() => setCopiedEndpoint(null), 2000);
  };

  const endpoints = [
    {
      method: "GET",
      path: "/api/v1/servers/{server_id}",
      description: "Get server information and configuration",
      params: [
        { name: "server_id", type: "string", required: true, description: "Discord server ID" }
      ],
      response: `{
  "id": "123456789",
  "name": "My Server",
  "member_count": 1250,
  "features": {
    "welcome_enabled": true,
    "moderation_enabled": true,
    "reaction_roles": 15
  }
}`
    },
    {
      method: "POST",
      path: "/api/v1/commands/execute",
      description: "Execute a custom command",
      params: [
        { name: "command", type: "string", required: true, description: "Command name" },
        { name: "server_id", type: "string", required: true, description: "Discord server ID" },
        { name: "args", type: "array", required: false, description: "Command arguments" }
      ],
      response: `{
  "success": true,
  "result": "Command executed successfully",
  "execution_time": "0.23s"
}`
    },
    {
      method: "GET",
      path: "/api/v1/stats",
      description: "Get MoneBot global statistics",
      params: [],
      response: `{
  "servers": 125000,
  "members": 15000000,
  "commands_today": 1250000,
  "uptime": "99.9%"
}`
    },
    {
      method: "POST",
      path: "/api/v1/webhooks/register",
      description: "Register a webhook endpoint",
      params: [
        { name: "url", type: "string", required: true, description: "Webhook URL" },
        { name: "events", type: "array", required: true, description: "Events to subscribe to" },
        { name: "server_id", type: "string", required: true, description: "Discord server ID" }
      ],
      response: `{
  "webhook_id": "wh_123456789",
  "url": "https://your-site.com/webhook",
  "events": ["member_join", "message_delete"],
  "created_at": "2025-01-15T10:30:00Z"
}`
    }
  ];

  const webhookEvents = [
    { name: "member_join", description: "User joins the server" },
    { name: "member_leave", description: "User leaves the server" },
    { name: "message_delete", description: "Message is deleted" },
    { name: "role_update", description: "Role is created, updated, or deleted" },
    { name: "moderation_action", description: "Moderation action taken" }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F7] dark:bg-[#121212]">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-[#F5F4F0] to-[#EDEAE5] dark:from-[#1A1A1A] dark:to-[#0F0F0F]">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#2C2419] dark:text-white mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}>
            MoneBot <em>API Documentation</em>
          </h1>
          <p className="text-lg md:text-xl text-[#5C5347] dark:text-[#C0C0C0] mb-8 max-w-[60ch] mx-auto">
            Integrate MoneBot's powerful features into your applications with our comprehensive REST API
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <div className="bg-[#8B7355] text-white px-6 py-3 rounded-xl flex items-center gap-2">
              <Key size={20} />
              <span className="font-semibold">API Key Required</span>
            </div>
            <div className="bg-white dark:bg-[#262626] border border-[#E8E6E1] dark:border-[#404040] px-6 py-3 rounded-xl flex items-center gap-2">
              <Globe size={20} className="text-[#8B7355]" />
              <span className="text-[#2C2419] dark:text-white font-semibold">Base URL: api.monebot.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-20 px-6 bg-white dark:bg-[#121212]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2C2419] dark:text-white mb-12"
              style={{ fontFamily: "Playfair Display, serif" }}>
            Quick Start
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-[#2C2419] dark:text-white mb-6">
                Authentication
              </h3>
              <p className="text-[#5C5347] dark:text-[#B0B0B0] mb-6">
                All API requests require an API key. Include it in the Authorization header:
              </p>
              <div className="bg-[#F5F4F0] dark:bg-[#1E1E1E] border border-[#E8E6E1] dark:border-[#404040] rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-[#8B7355]">cURL</span>
                  <button
                    onClick={() => copyToClipboard('curl -H "Authorization: Bearer YOUR_API_KEY" https://api.monebot.com/v1/stats', 'auth')}
                    className="text-[#8B7355] hover:text-[#75624A] transition-colors"
                  >
                    {copiedEndpoint === 'auth' ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>
                <code className="text-sm text-[#2C2419] dark:text-[#E0E0E0] font-mono break-all">
                  curl -H "Authorization: Bearer YOUR_API_KEY" <br />
                  https://api.monebot.com/v1/stats
                </code>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#2C2419] dark:text-white mb-6">
                Rate Limits
              </h3>
              <div className="space-y-4">
                <div className="bg-[#F5F4F0] dark:bg-[#1E1E1E] border border-[#E8E6E1] dark:border-[#404040] rounded-xl p-4">
                  <div className="font-semibold text-[#2C2419] dark:text-white">Free Plan</div>
                  <div className="text-[#5C5347] dark:text-[#B0B0B0]">100 requests per hour</div>
                </div>
                <div className="bg-[#F5F4F0] dark:bg-[#1E1E1E] border border-[#E8E6E1] dark:border-[#404040] rounded-xl p-4">
                  <div className="font-semibold text-[#2C2419] dark:text-white">Premium Plan</div>
                  <div className="text-[#5C5347] dark:text-[#B0B0B0]">1,000 requests per hour</div>
                </div>
                <div className="bg-[#F5F4F0] dark:bg-[#1E1E1E] border border-[#E8E6E1] dark:border-[#404040] rounded-xl p-4">
                  <div className="font-semibold text-[#2C2419] dark:text-white">Enterprise Plan</div>
                  <div className="text-[#5C5347] dark:text-[#B0B0B0]">10,000 requests per hour</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-20 px-6 bg-[#F5F4F0] dark:bg-[#1A1A1A]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2C2419] dark:text-white mb-12"
              style={{ fontFamily: "Playfair Display, serif" }}>
            API Endpoints
          </h2>

          <div className="space-y-8">
            {endpoints.map((endpoint, index) => (
              <div key={index} className="bg-white dark:bg-[#1E1E1E] border border-[#E8E6E1] dark:border-[#404040] rounded-xl p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  <div className="lg:w-1/2">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`
                        px-3 py-1 rounded-full text-sm font-semibold
                        ${endpoint.method === 'GET' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                        }
                      `}>
                        {endpoint.method}
                      </span>
                      <code className="text-lg font-mono text-[#2C2419] dark:text-white">
                        {endpoint.path}
                      </code>
                    </div>
                    
                    <p className="text-[#5C5347] dark:text-[#B0B0B0] mb-6">
                      {endpoint.description}
                    </p>

                    {endpoint.params.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-[#2C2419] dark:text-white mb-3">Parameters</h4>
                        <div className="space-y-2">
                          {endpoint.params.map((param, paramIndex) => (
                            <div key={paramIndex} className="flex flex-col sm:flex-row sm:items-center gap-2">
                              <code className="font-mono text-sm bg-[#F5F4F0] dark:bg-[#262626] px-2 py-1 rounded">
                                {param.name}
                              </code>
                              <span className={`
                                text-xs px-2 py-1 rounded
                                ${param.required 
                                  ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                                  : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                                }
                              `}>
                                {param.required ? 'required' : 'optional'}
                              </span>
                              <span className="text-sm text-[#5C5347] dark:text-[#B0B0B0]">
                                {param.description}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="lg:w-1/2">
                    <div className="bg-[#F5F4F0] dark:bg-[#262626] border border-[#E8E6E1] dark:border-[#404040] rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-semibold text-[#8B7355]">Response</span>
                        <button
                          onClick={() => copyToClipboard(endpoint.response, `endpoint-${index}`)}
                          className="text-[#8B7355] hover:text-[#75624A] transition-colors"
                        >
                          {copiedEndpoint === `endpoint-${index}` ? <Check size={16} /> : <Copy size={16} />}
                        </button>
                      </div>
                      <pre className="text-sm text-[#2C2419] dark:text-[#E0E0E0] font-mono overflow-x-auto">
                        {endpoint.response}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Webhook Events */}
      <section className="py-20 px-6 bg-white dark:bg-[#121212]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2C2419] dark:text-white mb-12"
              style={{ fontFamily: "Playfair Display, serif" }}>
            Webhook Events
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webhookEvents.map((event, index) => (
              <div key={index} className="bg-[#F5F4F0] dark:bg-[#1E1E1E] border border-[#E8E6E1] dark:border-[#404040] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Webhook size={20} className="text-[#8B7355]" />
                  <code className="font-mono text-[#2C2419] dark:text-white font-semibold">
                    {event.name}
                  </code>
                </div>
                <p className="text-[#5C5347] dark:text-[#B0B0B0] text-sm">
                  {event.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/webhooks"
              className="inline-flex items-center gap-2 bg-[#8B7355] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#75624A] transition-colors"
            >
              <ExternalLink size={20} />
              Learn More About Webhooks
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}