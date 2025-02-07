# DKeeper - Decentralized Note Keeping App

A decentralized note-taking application built on the Internet Computer platform, inspired by Google Keep.

## Features

- Create notes with title and content
- Delete notes
- Persistent storage on the IC blockchain
- Clean, minimalist UI

## Prerequisites

- Node.js (v12 or higher)
- DFX SDK (latest version)
- Internet Computer CLI tools

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the local Internet Computer:
```bash
dfx start
```

3. Deploy the canisters (Do it in another terminal instance):
```bash
dfx deploy
```

4. Start the development server:
```bash
npm start
```

## Project Structure

- `/src/dkeeper/` - Motoko backend code
- `/src/dkeeper_assets/` - Frontend React components
- `/src/declarations/` - Auto-generated canister interfaces

## Technologies Used

- Frontend: React.js
- Backend: Motoko
- Platform: Internet Computer
- State Management: IC stable variables

## License

MIT License