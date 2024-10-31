# Flight Booking Application
## Live Link : [Shahed Ahmed - Job Task  ](https://innovate-solution-job-task.vercel.app/)
This repository contains a flight booking application built with React and Pullstate for state management. The application allows users to search for flights, select departure and arrival airports, choose travel dates, and specify passenger details.

## Table of Contents

- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Main Components](#main-components)
- [State Management](#state-management)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/ShahedAhmedUtsho/Innovate_Solution_Job_Task.git
    cd Innovate_Solution_Job_Task
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```
3. u have to give some api in .env.local sile for api that provided on email
     ```sh
    VITE_AIRPORT_API_KEY
    VITE_AIRPORT_API_SECRETE_CODE
    VITE_AIRPORT_API
    ```


## Running the Application

1. Start the development server:
    ```sh
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Project Structure

The project is organized as follows:

## Main Components

### `Header.jsx`

The header component displays the application logo and sign-in/sign-up buttons.

### `Banner.jsx`

The banner component displays a rotating set of images as the application's banner.

### `Search.jsx`

The search component contains the main search functionality, including tabs for different journey types (One Way, Round Trip, Multi City) and the search form.

### `SearchTabContent.jsx`

This component renders the content for each search tab, including the FromAirport, ToAirport, DeptureDate, and ReturnDate components.

### `CommonBottomBar.jsx`

The common bottom bar component contains additional search options such as booking class, non-stop flight preference, baggage option, and passenger selection.

### `PassengerSelectComponent.jsx`

This component allows users to select the number of adults, children, and infants, and specify the ages of children and infants.

## State Management

The application uses Pullstate for state management. The main stores are:

### `AirportsStore.js`

Stores the list of airports fetched from the API or local storage.

### `PassengerStore.js`

Manages the state of passengers, including the number of adults, children, and infants, and their ages.

### `SearchStore.js`

Manages the state of the search options, including journey type, preferred carrier, non-stop flight preference, baggage option, and booking class.

### `SelectedAirportStore.js`

Manages the state of the selected departure and arrival airports, search text, and selected travel dates.

## API Integration

The `AirportApiFetch.js` file contains the logic for fetching airport data from an external API and storing it in local storage and the AirportsStore.

hope u are like it !!!
