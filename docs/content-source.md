# Salesforce Portfolio Content Source

This document is the source of truth for verified public portfolio content gathered so far. Content marked **Placeholder — verification required** must not be published as a factual claim until it has been supplied and approved.

## Public identity and contact

- **Public email:** [jshull.salesforce@gmail.com](mailto:jshull.salesforce@gmail.com)
- **LinkedIn:** [https://www.linkedin.com/in/jeremymshull/](https://www.linkedin.com/in/jeremymshull/)
- **GitHub:** [https://github.com/jeremymshull](https://github.com/jeremymshull)
- **Trailhead:** [https://www.salesforce.com/trailblazer/shull12](https://www.salesforce.com/trailblazer/shull12)

## Resume

- **Source filename:** `JeremyShull_Resume.pdf`
- **Approved for publication:** Yes
- **Preferred public download filename:** `Jeremy-Shull-Salesforce-Resume.pdf`

## Location and work preferences

- **Public location wording:** Greater Indianapolis Area
- **Open to remote roles:** Yes
- **Open to Greater Indianapolis / Central Indiana roles:** Yes
- **Open to relocation:** No
- **Open to freelance or consulting conversations:** Yes

## Approved homepage content

### Label

Salesforce Developer & Administrator

### Main headline

Building practical Salesforce solutions for real business problems.

### Supporting copy

I build Salesforce automation, Lightning experiences, and integrations designed to improve processes, reduce manual work, and create clearer experiences for users.

### Calls to action

- **Primary CTA:** View my projects
- **Secondary CTA:** Download my resume

### Target-role sentence

I’m pursuing Salesforce Developer, Salesforce Administrator, CRM Analyst, Salesforce Business Analyst, Salesforce Support Engineer, and associate consulting opportunities.

## Approved skills

Use **Flows** as the umbrella term; do not list individual Flow types separately.

### Salesforce platform and administration

- Flows
- Validation Rules
- Reports & Dashboards
- Profiles
- Roles
- Permission Sets
- Custom Objects / Data Modeling
- Web-to-Case

### Salesforce development

- Apex
- Scheduled Apex
- Triggers
- Classes
- Lightning Web Components
- SOQL
- JavaScript
- HTML
- CSS
- Unit Testing
- HttpCalloutMock

### Integrations

- REST Callouts
- REST APIs
- JSON Parsing and Response Handling
- Named Credentials

### Tools

- GitHub
- VS Code
- Salesforce CLI
- Jira

### Business and operations

- Process Optimization
- Stakeholder Communication
- End-User Training & Support
- Requirements Gathering
- Problem Solving
- Cross-Functional Collaboration

## Certifications

The following Salesforce certifications are approved for publication. The certification section should link to the general Trailhead profile for verification rather than to separate credential links.

- **Salesforce Certified Administrator**
  - Earned: July 2025
  - Issuer: Salesforce
- **Salesforce Platform Developer I**
  - Earned: January 2025
  - Issuer: Salesforce

General Trailhead profile: [https://www.salesforce.com/trailblazer/shull12](https://www.salesforce.com/trailblazer/shull12)

## Approved photo use

### Hero photo

- **Source asset:** `source-assets/images/jeremy-shull-hero.jpg`
- **Publish:** Yes
- **Placement:** Homepage hero
- **Responsive crop / focal priority:** Upper body
- **Alt text:** Jeremy Shull smiling beside a brick wall outdoors.

### About photo

- **Source asset:** `source-assets/images/jeremy-shull-about.jpg`
- **Publish:** Yes
- **Placement:** About section
- **Responsive crop / focal priority:** Upper body
- **Alt text:** Jeremy Shull standing outdoors in warm evening light.

## Project evidence

Project content below is approved for publication subject to the evidence boundaries already documented.

### Case Intake and SLA Automation

- **Classification:** Personal project
- **Summary:** An enterprise-inspired Salesforce support operations solution that standardizes case intake, automates routing, tracks business-hours-aware SLAs, sends proactive escalation notifications, and provides operational reporting for support teams.
- **Context:** Built as a portfolio project to demonstrate end-to-end Salesforce Administrator and Developer skills through a realistic support-operations use case. The solution combines declarative automation, Apex, data modeling, reporting, and business analysis.
- **Business problem:** Support teams can struggle with inconsistent intake, manual routing, poor visibility into approaching SLA deadlines, reactive escalation management, and limited operational reporting. The project was designed to centralize intake and automate the support lifecycle while giving case owners and leadership clearer visibility into workload and SLA risk.
- **Users or stakeholders:**
  - Internal users submitting support requests
  - External customers submitting cases
  - Support agents and case owners
  - Support managers
  - Leadership reviewing operational performance
  - Salesforce administrators maintaining the solution
- **Solution:** Built a centralized case-management system with Screen Flow for guided internal intake and Web-to-Case for external submissions. Cases are automatically routed by Request Type, Priority, and Department, assigned a business-hours-aware SLA due date, and monitored hourly through Scheduled Apex. Case owners receive consolidated Due Soon and Overdue notifications, while reports and a dashboard provide visibility into workload, SLA risk, and resolution performance.
- **Architecture or process:**
  1. Internal users submit requests through Screen Flow, while external customers use Web-to-Case.
  2. A Record-Triggered Flow applies routing rules and assigns the appropriate queue.
  3. SLA due dates are calculated from Request Type configuration using Salesforce Business Hours.
  4. Scheduled Apex runs hourly and queries eligible open cases.
  5. `SlaNotificationService` classifies cases as Due Soon or Overdue, groups them by owner, and builds consolidated notification emails.
  6. Successful email delivery updates notification flags to prevent duplicate alerts.
  7. Case and SLA data feed operational reports and the Support Operations SLA Dashboard.
- **Major features:**
  - Guided internal case intake using Screen Flow
  - External intake through Web-to-Case
  - High-priority description validation
  - Request Type and priority-based queue routing
  - IT Critical escalation path
  - Business-hours-aware SLA due-date calculation
  - Four-business-hour Due Soon threshold
  - Hourly SLA monitoring
  - User-owned and queue-owned case support
  - Consolidated owner notification emails
  - Email success tracking
  - Resolution-hours tracking
  - Six operational reports
  - Support Operations SLA Dashboard
- **Technical decisions:**
  - Used declarative Flow for guided intake, routing, and other automation where it was a good fit.
  - Refactored SLA notification monitoring from Scheduled Flow to Scheduled Apex after identifying scalability, scheduling, maintainability, and user-experience limitations.
  - Used a service-layer architecture to separate scheduling from SLA notification business logic.
  - Bulkified SOQL, DML, and email processing to remain governor-limit safe and support higher case volumes. This is an architectural design goal, not a claim of verified performance at thousands-of-cases scale.
  - Grouped notification emails by owner rather than sending one email per case.
  - Used the Business Hours API instead of raw clock-time calculations so SLA monitoring respects non-business hours.
  - Updated notification flags only when email sending succeeds.
  - Kept User and Queue owner handling separated where their notification behavior differed.
- **Technologies:**
  - Salesforce
  - Flows
  - Apex
  - Scheduled Apex
  - Business Hours API
  - Custom Objects / Data Modeling
  - Validation Rules
  - Web-to-Case
  - Queues
  - Reports & Dashboards
  - HTML
  - Salesforce CLI
  - VS Code
  - GitHub
  - Jira
- **Testing or validation:**
  - Apex unit tests using `@TestSetup`
  - Positive and negative assertions
  - User-owned Due Soon and Overdue cases
  - Queue-owned Due Soon and Overdue cases
  - Closed-case exclusion
  - Already-notified-case exclusion
  - Missing SLA-date handling
  - Far-future SLA handling
  - Queue-without-email handling
  - Empty-result handling
  - Scheduler invocation testing
  - `System.runAs()` used where needed to avoid mixed-DML issues
  - Business Hours calculations tested against the same logic used by the implementation
- **Challenges:**
  - Determining when declarative automation was no longer the best fit for SLA monitoring
  - Supporting both User-owned and Queue-owned cases
  - Consolidating multiple cases into a single notification per owner
  - Calculating SLA risk using business hours rather than elapsed clock time
  - Preventing duplicate notifications while only marking successful sends
  - Designing the implementation to handle larger case volumes within Salesforce governor limits
- **Lessons learned:**
  - Declarative-first does not mean Flow should be used for every problem; Apex can be the better choice when scheduling, scale, grouping, or testability requirements become more complex.
  - Salesforce business logic must account for platform constraints such as governor limits, ownership types, business hours, and email behavior.
  - Good Salesforce solutions combine technical implementation with user experience and operational visibility rather than solving only the automation requirement.
  - Refactoring an early implementation can produce a cleaner and more scalable architecture than forcing the original approach to work.
- **Future improvements:**
  - Slack or other real-time notification channels
  - Priority-specific Due Soon thresholds
  - Multiple regional Business Hours configurations
  - SLA pause/resume behavior for statuses such as Waiting on Customer
  - Custom Metadata-driven SLA threshold configuration
  - Experience Cloud customer intake
  - Lightning Web Component enhancements
  - Integration with external ticketing or knowledge systems
- **Repository URL:** [https://github.com/jeremymshull/salesforce-case-management-sla-automation](https://github.com/jeremymshull/salesforce-case-management-sla-automation)
- **Demonstration URL:** None currently identified
- **Screenshots or diagrams available:**
  - **Screenshot:** `source-assets/images/case-sla-notification-email.png`
  - **Description:** Consolidated SLA notification email grouping Due Soon and Overdue cases for a case owner.
  - **Alt text:** Salesforce SLA notification email showing multiple Due Soon and Overdue cases grouped into a single owner notification.

### Slack Contact Quick Action

- **Classification:** Volunteer project for Cloud Code Academy
- **Summary:** Built a Salesforce Lightning Web Component and Apex-based quick action to relink Contacts to Slack users, helping reduce recurring manual administrative work for Cloud Code Academy.
- **Context:** Completed as a volunteer project for Cloud Code Academy. The implementation was built in a private repository and used by Cloud Code Academy, so source code, screenshots, and internal implementation details are not available for public portfolio use.
- **Business problem:** Salesforce Contacts could become disconnected from the correct Slack user relationship, requiring administrators to manually correct records and identify Contacts missing Slack IDs.
- **Users or stakeholders:** Cloud Code Academy administrators and staff responsible for maintaining Salesforce and Slack user relationships.
- **Solution:** Built a headless Lightning Web Component quick action backed by Apex to restore the Contact-to-Slack relationship. Added visibility into missing Slack IDs through Salesforce reporting and dashboard components.
- **Major features:**
  - Headless Lightning Web Component quick action
  - Apex controller
  - Conditional action visibility when a Slack username already exists
  - Reporting and dashboard visibility into Contacts missing Slack IDs
- **Estimated impact:** The Cloud Code Academy volunteer-task owner estimated that the solution would save more than 30 hours of administrative work annually. This is an attributed estimate, not a measured production result.
- **Technologies:**
  - Lightning Web Components
  - Apex
  - Salesforce Reports & Dashboards
  - Salesforce and Slack integration context
- **Technical decisions:** Public detail is intentionally limited because the project was completed in a private Cloud Code Academy repository.
- **Testing or validation:** Public details are not available.
- **Challenges:** Public details are not available.
- **Lessons learned:** Public details are not available.
- **Future improvements:** No public improvements have been identified.
- **Repository URL:** Private / not available for public use
- **Demonstration URL:** None
- **Screenshots or diagrams:** Not available for public use
- **Image alt text:** Not applicable

### Weather Lightning Web Component

- **Classification:** Personal project
- **Summary:** Built a record-aware Salesforce Lightning Web Component that retrieves and displays current weather data through Apex, automatically using an Account or Contact’s city when available while still allowing manual searches.
- **Context:** Created as a personal Salesforce DX project to demonstrate Lightning Web Component development, Apex callouts, secure API configuration, record-aware behavior, testing, and responsive Salesforce UI design.
- **Business problem:** Salesforce users may need location-specific weather information while working with Account or Contact records. Requiring users to leave Salesforce and manually search for weather adds context switching and repetitive work.
- **Users or stakeholders:**
  - Salesforce users working with Account records
  - Salesforce users working with Contact records
  - Salesforce administrators configuring the integration
- **Solution:** Built a reusable `weatherCard` Lightning Web Component backed by the `WeatherSearchController` Apex class. When placed on an Account or Contact record page, the component can detect the record’s city and retrieve weather data automatically. Users can also search for another city manually. API communication is handled through Apex using a Named Credential and Custom Metadata configuration.
- **Architecture or process:**
  1. `weatherCard` receives `recordId` and `objectApiName`.
  2. When used on an Account, it reads `BillingCity`; when used on a Contact, it reads `MailingCity`.
  3. If a city is available, the component can automatically request weather data.
  4. Users can override the detected city through manual search.
  5. The LWC calls the cacheable `WeatherSearchController.getWeatherByCity()` Apex method.
  6. Apex performs the HTTP callout using the `OpenWeather` Named Credential.
  7. API configuration is read from `Weather_Config__mdt`.
  8. The response is parsed and returned to the LWC for display.
  9. Loading and error states are handled in the component UI.
- **Major features:**
  - Record-aware behavior on Account and Contact pages
  - Automatic city detection and weather retrieval when record data is available
  - Manual city search and override
  - Enter-to-search interaction
  - Clear/reset action
  - Responsive SLDS interface
  - Current and feels-like temperature
  - Weather conditions, humidity, and wind information
  - Loading and error states
  - Apex HTTP callout integration
- **Technical decisions:**
  - Used Apex as the integration layer rather than making the external API request directly from the browser.
  - Used a Named Credential for the OpenWeather endpoint rather than hardcoding the API host.
  - Used Custom Metadata for API configuration and kept sensitive integration details out of the LWC code.
  - Marked the Apex method `@AuraEnabled(cacheable=true)` for read-only retrieval behavior.
  - Used `with sharing` on the Apex controller.
  - Added dedicated success and error `HttpCalloutMock` implementations for deterministic Apex testing.
  - Used Jest tests for LWC behavior in addition to Apex tests.
  - Used Agentforce Vibes to help generate the LWC code, then manually reviewed, tested, and troubleshot the implementation rather than treating generated code as automatically correct.
- **Technologies:**
  - Lightning Web Components
  - Apex
  - JavaScript
  - HTML
  - Salesforce Lightning Design System
  - REST / HTTP Callouts
  - Named Credentials
  - Custom Metadata
  - HttpCalloutMock
  - Jest
  - Salesforce CLI
  - Salesforce DX
  - VS Code
  - GitHub
  - Agentforce Vibes
- **Testing or validation:**
  - `WeatherSearchControllerTest` for Apex controller and callout behavior
  - `WeatherServiceMock` for successful HTTP responses
  - `WeatherErrorMock` for negative-response paths
  - `Test.setMock(HttpCalloutMock.class, ...)` to avoid external calls during tests
  - Jest tests for the `weatherCard` Lightning Web Component
  - Manual review and troubleshooting of the generated LWC code
- **Challenges:** Setting up the Named Credential and Custom Metadata was the most difficult part of the project. The integration required understanding how to keep endpoint and configuration details outside of the component code while still allowing the Apex controller to make the external callout correctly.
- **Lessons learned:** The project reinforced that security and configuration practices matter even for personal projects. Sensitive integration details should not be hardcoded simply because an application is small or experimental. It also reinforced the importance of reviewing AI-generated code, understanding what it is doing, and troubleshooting it rather than assuming generated code is correct.
- **Future improvements:**
  - Improve location accuracy using state/country information or geocoding
  - Add a five-day forecast
  - Add Fahrenheit/Celsius preference
  - Add condition icons
  - Add configurable compact mode
  - Use Platform Cache for repeated searches
  - Add admin-configurable behavior
  - Store optional weather snapshots against Account or Contact records
  - Add automatic refresh when record location changes
  - Improve localization and accessibility
  - Expand Jest and Apex test coverage as features grow
- **Repository URL:** [https://github.com/jeremymshull/WeatherLWC](https://github.com/jeremymshull/WeatherLWC)
- **Demonstration URL:** None
- **Screenshots or diagrams:**
  - `source-assets/images/weather-lwc-search.png` shows the Weather Lookup component performing a search based on the Contact's city and displaying weather details.
- **Image alt text:** Salesforce Weather Lookup Lightning Web Component showing a search for Contact's city with weather condition, temperature, humidity, and wind speed results.

### Job Application Tracker

- **Classification:** Cloud Code Academy capstone / training project
- **Summary:** Built a Salesforce job application tracking system that manages applications through a defined lifecycle and automatically creates stage-specific follow-up tasks as each application progresses.
- **Context:** Developed as a Cloud Code Academy capstone project to apply Salesforce development, automation, data modeling, testing, teamwork, and Agile practices to a practical job-search workflow.
- **Business problem:** Managing multiple job applications requires tracking changing statuses, follow-up actions, networking tasks, interview preparation, and offer-related activities. Without a structured system, important actions can be missed and application history can become difficult to follow.
- **Users or stakeholders:** Individual job seekers managing an active application pipeline.
- **Solution:** Built a custom Salesforce application around `Job_Application__c`. Applications move through defined lifecycle stages, and Apex automation creates relevant Tasks for each stage while preventing duplicate task creation and preserving Tasks from earlier stages. The system also connects applications to company and contact information and includes automation for stale applications.
- **Architecture or process:**
  1. A job application is stored in `Job_Application__c`.
  2. The application progresses through statuses such as Saved, Applying, Applied, Interviewing, Negotiating, Accepted, and Closed.
  3. Apex trigger/helper logic detects new records and status changes.
  4. `JobApplicationHelper` determines which follow-up activities are appropriate for the current stage.
  5. `TaskManager` creates Tasks associated with the application and records an application-status snapshot.
  6. Existing Tasks are checked to prevent duplicate activities for the same application stage while retaining Tasks created for prior stages.
  7. Company Contacts can be associated with applications through primary-contact logic.
  8. A Batch Apex process identifies applications whose follow-up dates are at least 30 days stale and closes them when appropriate, excluding applications already Closed or Accepted.
- **Major features:**
  - Custom Job Application object
  - Defined application lifecycle/statuses
  - Status-based, stage-specific Task automation
  - Duplicate-Task prevention while preserving prior-stage Tasks
  - Application status snapshots on Tasks
  - Company and Contact relationships
  - Automatic primary-contact assignment
  - Follow-up Task due dates
  - Batch Apex cleanup for stale applications
  - Custom Salesforce application interface
- **Technical decisions:**
  - Used Apex helper classes to keep trigger logic separated from business logic.
  - Centralized Task creation in `TaskManager`.
  - Stored the application status on each generated Task so activity history retains the stage that caused the Task to be created.
  - Checked status changes, existing Task subjects, and status snapshots before creation so prior-stage Tasks remain while duplicate activities are avoided.
  - Used Batch Apex for stale-application cleanup rather than trying to handle long-running record cleanup synchronously.
  - Used `with sharing` in application and Task helper classes.
- **Technologies:**
  - Salesforce
  - Apex
  - Apex Triggers
  - Batch Apex
  - Custom Objects / Data Modeling
  - Tasks / Activities
  - SOQL
  - Unit Testing
  - Salesforce DX
  - Salesforce CLI
  - VS Code
  - GitHub
  - Jira
- **Testing or validation:** The repository contains dedicated Apex test classes for the application helper logic, stale-application cleanup, and related automation. The Task workflow was debugged and tested across the full application lifecycle so a fix for one stage did not break another.
- **Challenges:** The most difficult part of my contribution was the stage-based Task creation logic. As a team, we decided that Tasks from previous application stages needed to remain in place while also preventing duplicate Tasks from being created when records were updated. Getting that behavior right required several iterations. At different points, one application stage would populate Tasks correctly while another would stop working, so I had to keep debugging the status-change and duplicate-prevention logic until the stages worked together consistently.
- **Lessons learned:** This project reinforced the importance of teamwork, collaboration, and communication when requirements evolve during development. The Task-creation behavior changed based on a team decision, which meant the implementation had to adapt without losing earlier functionality. It also taught me to test automation across the full lifecycle rather than validating only the stage I was actively working on.
- **Future improvements:** None currently identified from verified sources.
- **Repository URL:** [https://github.com/jeremymshull/job-application-tracker-jshull](https://github.com/jeremymshull/job-application-tracker-jshull)
- **Demonstration URL:** None currently identified
- **Screenshots or diagrams:** No verified public screenshots have been identified.
- **Image alt text:** Not applicable unless screenshots are selected later.

## Approved project visual strategy

### Homepage and project index

- Use a consistent set of generated project title-card graphics for all projects during Phase 6 polish rather than mixing real screenshots with missing-media states.
- Treat generated title cards as supporting portfolio graphics, never as screenshots or evidence of the implemented solutions.
- Keep the title-card system consistent with `design.md`: charcoal and muted olive, professional, recruiter-focused, clearly titled, visually distinct enough for scanning, and free of generic AI-art styling or excessive decoration.
- Do not depict fake Salesforce interfaces, fake dashboards, invented architecture, metrics, outcomes, features, or implementation details.
- Project-specific motifs may reference only concepts already verified in this document, such as automation, weather, Slack/contact relationships, or an application workflow.

### Case-study evidence

- Keep approved real screenshots and other evidence primarily on individual project case-study pages.
- Case Intake and SLA Automation may continue to use `source-assets/images/case-sla-notification-email.png` as verified evidence.
- Weather LWC may continue to use `source-assets/images/weather-lwc-search.png` as verified evidence.
- Slack Contact Quick Action source code, screenshots, and internal implementation details remain private and unavailable for public use.
- Job Application Tracker has no verified public screenshot; do not fabricate one to fill that evidence gap.
- Generated title cards do not replace, alter, or elevate a project's evidence status.

## Deployment and metadata

- **Production URL:** Placeholder
- **Production hosting target:** Vercel Hobby
- **Source repository visibility:** Private GitHub repository
- **Production origin:** Configurable until the final Vercel URL is established
- **Custom domain:** Not selected; configure one only if a later decision approves it
- **Earlier GitHub Pages validation:** Builds using `/Portfolio-Website` were repository-subpath compatibility checks during completed phases, not the final deployment target
- **Final site description:** Portfolio of Salesforce projects focused on automation, Apex, Lightning Web Components, integrations, and practical platform solutions.
- **Social-sharing image:** `source-assets/images/jeremy-shull-salesforce-title-card.png`
- **Social-sharing image alt text:** Jeremy Shull, Salesforce Developer & Administrator.
