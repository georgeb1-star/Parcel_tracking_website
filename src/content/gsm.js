export const gsmContent = {
  title: 'Build a £25 GSM Tracker',
  subtitle: 'Hardware-level parcel tracking — from chip to cloud for under £30 per unit.',
  intro: 'Commercial tracking labels cost £2–5 each and phone home to closed platforms. A DIY GSM tracker gives you real-time GPS coordinates over the cellular network, full data ownership, and zero per-month subscription — at a one-time hardware cost competitive with two months of a SaaS tracker.',

  stats: [
    { value: '£25', label: 'Cost per unit', sub: 'A9G module + 1NCE SIM' },
    { value: '4 MB', label: 'Data per month', sub: 'Sending every 5 minutes' },
    { value: '£0', label: 'Server cost', sub: 'Oracle Cloud free tier' },
    { value: '10 yr', label: 'SIM validity', sub: '1NCE lifetime plan' },
  ],

  warning: {
    label: '2G Sunset Risk',
    text: 'SIM800L is 2G-only. AT&T and T-Mobile have already shut down 2G in the US. UK/EU networks keep 2G until 2028–2030. For deployments lasting 3+ years or any US use, choose the SIM7000G (LTE-M/NB-IoT) instead.',
  },

  hardware: [
    {
      id: 'a9g',
      badge: 'Cheapest',
      badgeColor: 'emerald',
      name: 'A9G All-in-One',
      tagline: 'GPS + GSM + MCU in a single £5 chip',
      icon: '🟢',
      price: '~£25',
      network: '2G GPRS',
      gps: 'Built-in (GPS + BeiDou)',
      mcu: 'Built-in RISC-V core',
      batteryLife: '1–2 weeks',
      pros: ['No separate MCU needed', 'Smallest BOM — 3 components', 'Lowest cost per unit', 'Onboard SDK for simple firmware'],
      cons: ['Smaller community', 'Less documentation', '2G only — sunset risk', 'Harder to debug'],
      bom: [
        { part: 'A9G module', cost: '£4.50' },
        { part: '18650 LiPo + charger', cost: '£3.00' },
        { part: 'Enclosure + antenna', cost: '£2.50' },
        { part: '1NCE SIM (10yr)', cost: '£11.00' },
        { part: 'PCB / passives', cost: '£1.00' },
      ],
      total: '£22',
    },
    {
      id: 'sim800l',
      badge: 'Most Popular',
      badgeColor: 'sky',
      name: 'ESP32 + SIM800L',
      tagline: 'Best-documented DIY combo with huge community',
      icon: '🔵',
      price: '~£30',
      network: '2G GPRS',
      gps: 'NEO-6M module (separate)',
      mcu: 'ESP32 (dual-core, 240 MHz)',
      batteryLife: '1–3 weeks',
      pros: ['Massive Arduino/ESP32 community', 'TinyGSM library support', 'OTA firmware updates via Wi-Fi', 'Easy to prototype and debug'],
      cons: ['3 separate modules to wire', 'SIM800L needs 4.2V regulated supply', 'Larger form factor', '2G only — sunset risk'],
      bom: [
        { part: 'ESP32 DevKit clone', cost: '£3.00' },
        { part: 'SIM800L module', cost: '£2.50' },
        { part: 'NEO-6M GPS module', cost: '£2.50' },
        { part: 'MT3608 boost + capacitor', cost: '£0.80' },
        { part: '18650 LiPo + charger', cost: '£3.00' },
        { part: 'Enclosure + antennas', cost: '£3.00' },
        { part: '1NCE SIM (10yr)', cost: '£11.00' },
      ],
      total: '£26',
    },
    {
      id: 'sim7000g',
      badge: 'Future-Proof',
      badgeColor: 'purple',
      name: 'ESP32 + SIM7000G',
      tagline: 'LTE-M / NB-IoT — works on modern networks forever',
      icon: '🟣',
      price: '~£40',
      network: 'LTE-M / NB-IoT / GPRS fallback',
      gps: 'Multi-GNSS built-in',
      mcu: 'ESP32 (dual-core, 240 MHz)',
      batteryLife: '2–4 weeks',
      pros: ['Works on US, UK, EU, global LTE networks', 'No 2G sunset risk', 'Ultra-low sleep power (8µA)', 'Multi-GNSS built in — no separate GPS'],
      cons: ['~£13 more per unit than SIM800L build', 'Smaller community than SIM800L (but growing)', 'LTE-M/NB-IoT coverage gaps in rural areas'],
      bom: [
        { part: 'SIM7000G module', cost: '£14.00' },
        { part: 'ESP32 DevKit clone', cost: '£3.00' },
        { part: 'Power components', cost: '£2.00' },
        { part: 'Enclosure + antenna', cost: '£3.00' },
        { part: '1NCE SIM (10yr)', cost: '£11.00' },
        { part: 'PCB / passives', cost: '£1.50' },
      ],
      total: '£34.50',
    },
  ],

  architecture: [
    { step: '1', label: 'GPS Satellites', detail: '4+ satellites fix lat/lon/speed/time', icon: '🛰️', color: 'sky' },
    { step: '2', label: 'GPS Module', detail: 'Outputs NMEA sentences at 9600 baud', icon: '📡', color: 'sky' },
    { step: '3', label: 'Microcontroller', detail: 'TinyGPS++ parses coordinates, formats JSON payload', icon: '🔧', color: 'purple' },
    { step: '4', label: 'GSM Module', detail: 'AT commands open GPRS bearer, HTTP POST to server', icon: '📶', color: 'purple' },
    { step: '5', label: 'Traccar Server', detail: 'Real-time map, geofencing, REST API', icon: '🖥️', color: 'emerald' },
  ],

  simPlans: [
    {
      name: '1NCE',
      tag: 'Best for production',
      tagColor: 'emerald',
      price: '£11 one-time',
      recurring: 'No monthly fee',
      data: '500 MB + 250 SMS over 10 years',
      coverage: '170+ countries',
      note: 'At 4 MB/month, 500 MB lasts 10+ years. Effectively free connectivity.',
    },
    {
      name: 'Hologram',
      tag: 'Best for dev/test',
      tagColor: 'sky',
      price: '£2.50 SIM + £0.80/mo',
      recurring: '£0.025/MB',
      data: 'Pay-as-you-go',
      coverage: '550+ networks, 190+ countries',
      note: 'Most flexible for prototyping. Expensive at scale but easy to get started.',
    },
    {
      name: 'Local prepaid SIM',
      tag: 'UK/single-country',
      tagColor: 'yellow',
      price: '£0–5 SIM',
      recurring: '£1–3/month',
      data: '1 GB+/month',
      coverage: 'Domestic only',
      note: 'Cheapest option if your parcels stay in one country. No IoT overhead.',
    },
  ],

  firmware: [
    { name: 'TinyGSM', desc: 'Arduino library abstracting all AT commands for SIM800L, SIM808, SIM7000G, A9G', lang: 'C++/Arduino' },
    { name: 'TinyGPS++', desc: 'Parses NMEA sentences from GPS module into usable lat/lon/speed/time', lang: 'C++/Arduino' },
    { name: 'PubSubClient', desc: 'MQTT client — publish GPS fixes to any broker over GPRS', lang: 'C++/Arduino' },
    { name: 'Traccar', desc: 'Self-hosted server: real-time map, 200+ protocols, REST API, free forever', lang: 'Java (self-host)' },
  ],

  dataPayload: `POST /api/location HTTP/1.1
Host: your-traccar.com:5055
Content-Type: application/json

{
  "id": "PARCEL-001",
  "lat": 51.5074,
  "lon": -0.1278,
  "speed": 42,
  "bearing": 270,
  "battery": 87,
  "timestamp": 1711753200
}`,
};
