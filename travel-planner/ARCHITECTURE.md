# Travel Planner - Clean Architecture

## Overview

This project follows Clean Architecture principles to create a maintainable, testable, and scalable React application for travel planning.

## Architecture Layers

### 1. Domain Layer (`src/domain/`)
The innermost layer containing business logic and entities.

#### Entities (`src/domain/entities/`)
- **Destination.ts**: Represents travel destinations with country information
- **Weather.ts**: Represents weather data and forecasts
- **TravelPlan.ts**: Represents travel itineraries and activities

#### Repositories (`src/domain/repositories/`)
Interface definitions for data access:
- **DestinationRepository.ts**: Interface for destination data operations
- **WeatherRepository.ts**: Interface for weather data operations
- **TravelPlanRepository.ts**: Interface for travel plan operations

#### Use Cases (`src/domain/use-cases/`)
Business logic implementation:
- **SearchDestinationsUseCase.ts**: Handles destination search logic
- **GetWeatherUseCase.ts**: Handles weather data retrieval logic
- **CreateTravelPlanUseCase.ts**: Handles travel plan creation logic

### 2. Data Layer (`src/data/`)
Implements data access and external API integration.

#### Sources (`src/data/sources/`)
External API integrations:
- **DestinationApiSource.ts**: Rest Countries API integration
- **WeatherApiSource.ts**: OpenWeatherMap API integration

#### Repositories (`src/data/repositories/`)
Concrete implementations of domain repositories:
- **DestinationRepositoryImpl.ts**: Implements destination data operations
- **WeatherRepositoryImpl.ts**: Implements weather data operations

### 3. Presentation Layer (`src/presentation/`)
UI components and state management.

#### Components (`src/presentation/components/`)
Reusable UI components (to be implemented)

#### Pages (`src/presentation/pages/`)
Page-level components (to be implemented)

#### Hooks (`src/presentation/hooks/`)
Custom React hooks:
- **useDestinations.ts**: Hook for destination data management
- **useWeather.ts**: Hook for weather data management

#### Stores (`src/presentation/stores/`)
State management using Zustand:
- **travelStore.ts**: Global travel state management

### 4. Shared Layer (`src/shared/`)
Common utilities, types, and constants.

#### Types (`src/shared/types/`)
- **index.ts**: Re-exports and common type definitions

#### Utils (`src/shared/utils/`)
- **index.ts**: Utility functions for dates, formatting, validation, etc.

#### Constants (`src/shared/constants/`)
- **index.ts**: Application constants and configuration

## Technology Stack

### Core Technologies
- **React 19**: UI library
- **TypeScript**: Type safety
- **Vite**: Build tool and development server
- **Tailwind CSS**: Styling framework

### State Management & Data Fetching
- **Zustand**: Lightweight state management
- **TanStack Query (React Query)**: Server state management and caching

### Form Handling & Validation
- **React Hook Form**: Form state management
- **Zod**: Schema validation

### UI Components
- **Headless UI**: Accessible UI primitives
- **Lucide React**: Icon library

### Utilities
- **date-fns**: Date manipulation
- **react-hot-toast**: Notifications
- **axios**: HTTP client

## Project Structure

```
src/
├── domain/                    # Business logic layer
│   ├── entities/             # Domain models
│   ├── repositories/         # Repository interfaces
│   └── use-cases/           # Business logic
├── data/                     # Data access layer
│   ├── sources/             # External API integrations
│   └── repositories/        # Repository implementations
├── presentation/             # UI layer
│   ├── components/          # Reusable components
│   ├── pages/              # Page components
│   ├── hooks/              # Custom hooks
│   └── stores/             # State management
└── shared/                  # Shared utilities
    ├── types/              # Type definitions
    ├── utils/              # Utility functions
    └── constants/          # Application constants
```

## API Integration

### OpenWeatherMap API
- **Purpose**: Weather data and forecasts
- **Base URL**: `https://api.openweathermap.org/data/2.5`
- **Authentication**: API key required
- **Rate Limit**: 1000 calls/day (free tier)

### Rest Countries API
- **Purpose**: Country and destination information
- **Base URL**: `https://restcountries.com/v3.1`
- **Authentication**: None required
- **Rate Limit**: None (public API)

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp env.example .env
   ```
   Add your OpenWeatherMap API key to `.env`

3. **Start development server**:
   ```bash
   npm run dev
   ```

## Development Guidelines

### Adding New Features
1. Define entities in `domain/entities/`
2. Create repository interfaces in `domain/repositories/`
3. Implement use cases in `domain/use-cases/`
4. Create data sources in `data/sources/`
5. Implement repositories in `data/repositories/`
6. Add UI components in `presentation/`

### State Management
- Use Zustand for global state
- Use React Query for server state
- Keep components focused on presentation

### Error Handling
- Implement error boundaries for React components
- Use try-catch in data layer
- Provide user-friendly error messages

### Testing Strategy
- Unit tests for use cases and utilities
- Integration tests for repositories
- Component tests for UI components
- E2E tests for critical user flows

## Benefits of This Architecture

1. **Separation of Concerns**: Clear boundaries between layers
2. **Testability**: Easy to unit test business logic
3. **Maintainability**: Changes in one layer don't affect others
4. **Scalability**: Easy to add new features and APIs
5. **Dependency Inversion**: High-level modules don't depend on low-level modules
6. **Framework Independence**: Business logic is framework-agnostic 