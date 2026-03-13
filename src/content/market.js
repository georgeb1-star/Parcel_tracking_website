export const marketContent = {
  title: "Market Landscape",
  subtitle: "The gap between expectation and reality has never been wider",
  intro: "The UK parcel market has transformed beyond recognition. But while volumes climb and retailers promise ever-faster delivery, the underlying experience for consumers is quietly deteriorating — and the data proves it.",

  sections: [
    {
      id: "volume",
      title: "A Market at Scale",
      stats: [
        { value: "4.2B", label: "Parcels delivered (2024–25)", color: "accent" },
        { value: "+7.1%", label: "Year-on-year growth", color: "green" },
        { value: "£133B", label: "UK e-commerce market value", color: "purple" },
        { value: "62%", label: "Shoppers prefer next-day delivery", color: "blue" },
      ],
      narrative: "The UK has one of the most developed parcel markets in the world. With over 4.2 billion deliveries annually and a £133 billion e-commerce sector driving demand, the logistics industry is under relentless pressure to perform — faster, cheaper, and with more visibility than ever before.",
    },
    {
      id: "consumer",
      title: "What Consumers Are Experiencing",
      stats: [
        { value: "78%", label: "Consumer satisfaction rate", color: "green", note: "Sounds good — until you read the next stat" },
        { value: "68%", label: "Experienced a delivery issue", color: "red", note: "In the past 6 months alone" },
        { value: "73%", label: "Want full order tracking", color: "accent" },
        { value: "96%", label: "Use tracking when available", color: "accent" },
      ],
      narrative: "Consumer satisfaction sits at 78% — a figure carriers often cite with pride. But dig deeper and the picture shifts: 68% of those same consumers encountered a delivery problem in the last six months. Satisfaction is being propped up by low expectations, not genuine excellence.",
    },
    {
      id: "retailer",
      title: "What Retailers Need",
      wants: [
        { icon: "📍", want: "Real-time GPS tracking", description: "Precise location data at every stage of the journey" },
        { icon: "📸", want: "Photo proof of delivery", description: "Timestamped, geotagged evidence that ends disputes" },
        { icon: "🔔", want: "Instant exception alerts", description: "Automated notification the moment something goes wrong" },
        { icon: "🔗", want: "System integration", description: "Direct API connection to WMS, OMS, and e-commerce platforms" },
        { icon: "📊", want: "Performance analytics", description: "Data to measure, benchmark, and improve carrier performance" },
        { icon: "🌱", want: "Sustainability reporting", description: "Carbon metrics to meet ESG commitments" },
      ],
      narrative: "Retailers aren't just asking for faster delivery — they're demanding operational intelligence. The carriers who can provide real-time data, automated exception management, and seamless system integration will earn the long-term contracts. Those who can't will be replaced.",
    },
    {
      id: "crime",
      title: "The Hidden Crisis: Package Theft",
      stats: [
        { value: "£376.6M", label: "Total package theft value (all-time high)", color: "red" },
        { value: "3 in 10", label: "UK residents are victims", color: "orange" },
        { value: "£327M", label: "Previous year's losses", color: "yellow", note: "£49.6M increase year-on-year" },
      ],
      narrative: "Package theft in Britain has reached an all-time high, with £376.6 million in losses — a £49.6 million jump on the previous year. 3 in 10 UK residents have been victims. This isn't just a consumer problem; it's an insurance liability, a brand reputation risk, and a direct revenue drain for every carrier operating without robust proof-of-delivery infrastructure.",
    },
    {
      id: "chartData",
      parcelVolumeData: [
        { year: "2020", parcels: 2.8 },
        { year: "2021", parcels: 3.5 },
        { year: "2022", parcels: 3.8 },
        { year: "2023", parcels: 3.9 },
        { year: "2024", parcels: 4.2 },
      ],
      satisfactionData: [
        { name: "Satisfied", value: 78, color: "#22c55e" },
        { name: "Had Issues", value: 68, color: "#ef4444" },
        { name: "Want Full Tracking", value: 73, color: "#38bdf8" },
        { name: "Use When Available", value: 96, color: "#818cf8" },
      ],
    },
  ],
};
