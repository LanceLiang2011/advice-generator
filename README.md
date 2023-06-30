# Advice Generator App

This is a simple application built using React.js and Styled Components that generates random advice for users. The application fetches advice from the [Advice Slip JSON API](https://api.adviceslip.com/).

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Future Improvements](#future-improvements)

## Installation

To run this project locally, clone the repository and install the dependencies using `npm install`. Then use `npm start` to start the local development server.

## Usage

Users can generate a new piece of advice by clicking the dice icon. This triggers a fetch request to the Advice Slip API, which then updates the advice displayed on the card.

## Components

The application consists of two main components:

- `App`: This is the root component of the application. It handles fetching data from the API and stores it in local state. It also renders a `Card` component.

- `Card`: This component displays the advice and the dice icon button to fetch new advice. It is styled using Styled Components and media queries for responsive design.

There's also a `props.js` utility file that stores initial state data and color properties used in Styled Components.

## Future Improvements

Future revisions of the project could include additional features, such as:

- Categorizing advice and allowing users to select a category.
- Allowing users to save their favorite pieces of advice.
- Improving error handling for API requests.
