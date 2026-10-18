/**
 * Good Citizen Olympiad (সুনাগরিক অলিম্পিয়াড)
 * Configuration file for Cloudflare Pages and Form Endpoints
 */
window.GCO_CONFIG = {
  // Set to 'production' when your backend or Cloudflare Worker / Google Sheet webhook is ready
  // In 'pilot' mode, registrations are securely validated and stored in localStorage for instant ticket generation
  mode: 'pilot',

  // Submission API Endpoint (Cloudflare Worker, Formspree, Make, or custom REST endpoint)
  // Example: 'https://api.ournpa.org/olympiad/register'
  apiEndpoint: '',

  // Event Details
  event: {
    titleEn: 'Good Citizen Olympiad 2027',
    titleBn: 'সুনাগরিক অলিম্পিয়াড ২০২৭',
    organizer: 'Network for People’s Action (NPA)',
    organizerUrl: 'https://ournpa.org',
    cities: ['Dhaka', 'Chattogram'],
    year: 2027,
    supportEmail: 'olympiad@ournpa.org',
    helplinePhone: '+880 1700-000000'
  },

  // Key Dates
  dates: {
    registrationStart: '2026-12-01',
    registrationEnd: '2027-01-03T23:59:59',
    admitCard: '2027-01-06',
    onlineRound: '2027-01-09T10:00:00',
    divisionalRound: '2027-01-23',
    divisionalFallback: '2027-01-24',
    grandFinal: '2027-01-30'
  }
};
