# React UI Feature App

This project is a React app that fetches character data from the Rick & Morty API & displays the characters on the page. The app includes pagination, filtering, and sorting features.

## Features Added

1. API Fetching
- Fetches character data from the API 
- Displays: {name, id, status, created date, & image}
2. Pagination Feature (Users can:)
- Navigate between pages using: prev/next button
- View current page number
3. Filter Feature
- Filter component was added to filter characters by status
- Users can filter: {all, alive, dead, unknown}
4. Sort Feature
- Sort component was added to sort characters alphabetically by API character name
- Users can sort: {a-z, z-a}

### Installation
1. Install Dependencies
npm install
2. Start Server
npm run dev
3. Open Browser
http://localhost:5173

#### How to Test the Feature
- Test Pagination
1. Click Next Button
2. Verify New Characters Appear
3. Click Prev Button
4. Verify previous page characters appear

- Test Filter Feature
1. Open the Status Filter dropdown
2. Select: 
3. Verify only the matching characters display

- Test Sort Feature
1. Open the Sort dropdown
2. Select:
3. Verify character names sort alphabetically, & reverse also
