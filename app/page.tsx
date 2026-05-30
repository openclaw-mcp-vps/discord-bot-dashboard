export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          Community Analytics
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Visual analytics for{" "}
          <span className="text-[#58a6ff]">Discord server health</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Track member engagement, message sentiment, and channel activity.
          Turn raw Discord data into actionable insights for your community.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Get Started – $15/mo
        </a>
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          {[
            { label: "Member Engagement", value: "Real-time" },
            { label: "Sentiment Analysis", value: "AI-powered" },
            { label: "Channel Insights", value: "Actionable" }
          ].map((stat) => (
            <div key={stat.label} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-[#58a6ff] font-bold text-lg">{stat.value}</div>
              <div className="text-[#8b949e] text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Connect unlimited Discord servers",
              "Real-time member engagement tracking",
              "AI-powered sentiment analysis",
              "Channel activity heatmaps",
              "Weekly email digest reports",
              "CSV data export"
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Start Free Trial
          </a>
          <p className="text-[#8b949e] text-xs mt-3">Cancel anytime. No hidden fees.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does it connect to my Discord server?",
              a: "You invite our bot to your server with read-only permissions. It collects anonymized activity data and syncs it to your dashboard in real time."
            },
            {
              q: "Is my server's data private and secure?",
              a: "Yes. We only collect aggregate metrics and never store private message content. All data is encrypted at rest and in transit."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Absolutely. Cancel from your account settings at any time. You keep access until the end of your billing period with no questions asked."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} Discord Bot Dashboard. All rights reserved.
      </footer>
    </main>
  );
}
