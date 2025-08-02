// API Configuration
export const API_CONFIG = {
  OPENWEATHER_BASE_URL: "https://api.openweathermap.org/data/2.5",
  COUNTRIES_BASE_URL: "https://restcountries.com/v3.1",
  AMADEUS_BASE_URL: "https://test.api.amadeus.com/v1",
} as const;

// Weather Configuration
export const WEATHER_CONFIG = {
  UNITS: {
    METRIC: "metric",
    IMPERIAL: "imperial",
  },
  ICON_BASE_URL: "https://openweathermap.org/img/wn",
} as const;

// Application Configuration
export const APP_CONFIG = {
  DEFAULT_SEARCH_LIMIT: 10,
  MAX_SEARCH_LIMIT: 50,
  CACHE_DURATION: {
    SHORT: 5 * 60 * 1000, // 5 minutes
    MEDIUM: 15 * 60 * 1000, // 15 minutes
    LONG: 60 * 60 * 1000, // 1 hour
  },
} as const;

// Activity Categories
export const ACTIVITY_CATEGORIES = {
  SIGHTSEEING: "sightseeing",
  FOOD: "food",
  ADVENTURE: "adventure",
  CULTURE: "culture",
  RELAXATION: "relaxation",
  SHOPPING: "shopping",
} as const;

// Travel Plan Status
export const TRAVEL_PLAN_STATUS = {
  PLANNING: "planning",
  CONFIRMED: "confirmed",
  COMPLETED: "completed",
  CANCELLED: "cancelled",
} as const;

// Regions
export const REGIONS = {
  AFRICA: "Africa",
  AMERICAS: "Americas",
  ASIA: "Asia",
  EUROPE: "Europe",
  OCEANIA: "Oceania",
} as const;

// Currency Codes
export const CURRENCIES = {
  USD: "USD",
  EUR: "EUR",
  IDR: "IDR",
  JPY: "JPY",
  GBP: "GBP",
  AUD: "AUD",
  CAD: "CAD",
  CHF: "CHF",
  CNY: "CNY",
  INR: "INR",
} as const;
