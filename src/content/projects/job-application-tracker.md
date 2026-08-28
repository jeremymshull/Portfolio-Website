---
title: Job Application Tracker
publicationStatus: published
featured: true
order: 4
context: training
contextDescription: >-
  Developed as a Cloud Code Academy capstone project to apply Salesforce development, automation, data modeling, testing, teamwork, and Agile practices to a practical job-search workflow.
summary: >-
  Built a Salesforce job application tracking system that manages applications through a defined lifecycle and automatically creates stage-specific follow-up tasks as each application progresses.
cardProblem: >-
  Managing multiple job applications requires tracking changing statuses, follow-up actions, networking tasks, interview preparation, and offer-related activities without losing important history.
cardSolution: >-
  Built a custom Salesforce application with lifecycle-based Apex automation, duplicate-task prevention, company and contact relationships, and Batch Apex cleanup for stale applications.
cardTechnologies:
  - Salesforce
  - Apex
  - Apex Triggers
  - Batch Apex
  - Custom Objects / Data Modeling
  - Unit Testing
businessProblem: >-
  Managing multiple job applications requires tracking changing statuses, follow-up actions, networking tasks, interview preparation, and offer-related activities. Without a structured system, important actions can be missed and application history can become difficult to follow.
stakeholders:
  - Individual job seekers managing an active application pipeline.
solution: >-
  Built a custom Salesforce application around Job_Application__c. Applications move through defined lifecycle stages, and Apex automation creates relevant Tasks for each stage while preventing duplicate task creation and preserving Tasks from earlier stages. The system also connects applications to company and contact information and includes automation for stale applications.
architecture:
  - A job application is stored in Job_Application__c.
  - The application progresses through statuses such as Saved, Applying, Applied, Interviewing, Negotiating, Accepted, and Closed.
  - Apex trigger/helper logic detects new records and status changes.
  - JobApplicationHelper determines which follow-up activities are appropriate for the current stage.
  - TaskManager creates Tasks associated with the application and records an application-status snapshot.
  - Existing Tasks are checked to prevent duplicate activities for the same application stage while retaining Tasks created for prior stages.
  - Company Contacts can be associated with applications through primary-contact logic.
  - A Batch Apex process identifies applications whose follow-up dates are at least 30 days stale and closes them when appropriate, excluding applications already Closed or Accepted.
keyFeatures:
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
technicalDecisions:
  - Used Apex helper classes to keep trigger logic separated from business logic.
  - Centralized Task creation in TaskManager.
  - Stored the application status on each generated Task so activity history retains the stage that caused the Task to be created.
  - Checked status changes, existing Task subjects, and status snapshots before creation so prior-stage Tasks remain while duplicate activities are avoided.
  - Used Batch Apex for stale-application cleanup rather than trying to handle long-running record cleanup synchronously.
  - Used with sharing in application and Task helper classes.
technologies:
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
testing:
  - The repository contains dedicated Apex test classes for the application helper logic, stale-application cleanup, and related automation. The Task workflow was debugged and tested across the full application lifecycle so a fix for one stage did not break another.
challenges:
  - The most difficult part of my contribution was the stage-based Task creation logic. As a team, we decided that Tasks from previous application stages needed to remain in place while also preventing duplicate Tasks from being created when records were updated. Getting that behavior right required several iterations. At different points, one application stage would populate Tasks correctly while another would stop working, so I had to keep debugging the status-change and duplicate-prevention logic until the stages worked together consistently.
lessonsLearned:
  - This project reinforced the importance of teamwork, collaboration, and communication when requirements evolve during development. The Task-creation behavior changed based on a team decision, which meant the implementation had to adapt without losing earlier functionality. It also taught me to test automation across the full lifecycle rather than validating only the stage I was actively working on.
mediaUnavailableReason: >-
  No verified public screenshot has been identified for this project.
links:
  - kind: repository
    label: View Job Application Tracker repository
    url: https://github.com/jeremymshull/job-application-tracker-jshull
---
