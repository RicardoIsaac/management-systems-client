
# Management Systems Client

This project is a client-side application built using React for managing feedback. It allows users to submit feedback via a form and displays a list of feedback items. The project includes features such as lazy loading of feedback items and asynchronous data fetching.




## Setup

1. #### Clone the Repository:

```bash
  git clone https://github.com/RicardoIsaac/management-systems-client.git
```

2. #### Install Dependencies::

```bash
  npm install
```


3. #### Start the Server:

```bash
  npm start
```





## Project Structure


The project follows a standard React project structure:

```bash
management-systems-client/
├── src/
│   ├── components/
│   │   ├── FeedbackForm.tsx
│   │   └── FeedbackList.tsx
│   ├── worker/
│   │   └── feedbackWorker.js
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── index.tsx
├── public/
│   └── index.html
└── README.mdn
```

- src/: Contains all the source code for the application

  - components/: Contains React components for the feedback form and feedback list.
  - worker/: Contains the web worker file for fetching feedback data.
  - App.tsx: Main component that renders the FeedbackForm and FeedbackList components.
  - index.tsx: Entry point of the application.
- public/: Contains the HTML template for the application.


## Additional Notes

- The project uses TypeScript for type-checking and improved code quality.
- Communication with the backend API is done using the Fetch API.
- A web worker is employed to fetch feedback data asynchronously.
- Feedback entries are displayed in real-time without the need for manual refreshing.
- The application provides feedback to users when they attempt to submit feedback too frequently.
- The project can be further extended with additional features such as user authentication, filtering and sorting of feedback items, and more advanced styling.