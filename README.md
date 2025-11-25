# React Cafe Feedback App
This is a feedback widget for a café, where users can leave reviews on the service. There are three options for feedback: good, neutral, and bad. Users can select one of the options and see the updated statistics immediately.

The app is built with React, TypeScript, and Vite, using CSS Modules for styling. Modern best practices, type safety, and clean architecture are applied throughout the project.

# Project Features

- Interactive Voting
Users can vote Good, Neutral, or Bad.
Votes are stored centrally in the App component.
Reset button appears only if there is at least one vote.

-Dynamic Statistics
Shows votes per category, total votes, and positive rate.
Statistics update automatically when users vote.

- Notification
If no votes exist, a friendly message is displayed: No feedback yet.

- Component-based & TypeScript
Each component has its own folder with .tsx and .module.css files.
Props and state are strictly typed.
Common types are stored centrally.

- Clean UI 
CSS Modules ensure encapsulated and maintainable styles.
Layout uses semantic and accessible elements.
