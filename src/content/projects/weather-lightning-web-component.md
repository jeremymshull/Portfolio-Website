---
title: Weather Lightning Web Component
publicationStatus: published
featured: true
order: 3
context: personal
summary: >-
  Built a record-aware Salesforce Lightning Web Component that retrieves current weather data through Apex, automatically using an Account or Contact's city when available while still allowing manual searches.
businessProblem: >-
  Salesforce users may need location-specific weather information while working with Account or Contact records, creating repetitive context switching when they leave Salesforce to search manually.
solution: >-
  Built a reusable weatherCard component backed by Apex, with record-aware city detection, manual search, Named Credential configuration, loading and error states, Apex callout tests, and Jest coverage.
technologies:
  - Lightning Web Components
  - Apex
  - REST / HTTP Callouts
  - Named Credentials
  - Custom Metadata
  - Jest
media:
  - kind: screenshot
    src: source-assets/images/weather-lwc-search.png
    alt: Salesforce Weather Lookup Lightning Web Component showing a search for Contact's city with weather condition, temperature, humidity, and wind speed results.
links:
  - kind: repository
    label: View Weather Lightning Web Component repository
    url: https://github.com/jeremymshull/WeatherLWC
---
