# HALODEK Chat UI – React Native

## Project Overview

HALODEK Chat UI is a mobile messaging interface developed using React Native, Expo, and TypeScript. The project was created as part of a React Native UI Challenge to recreate a provided chat application design.
The application focuses on building a clean, responsive, and interactive user interface that works on Android devices and web browsers.

## Technologies Used

- **React Native** – Building the mobile application interface.
- **Expo** – Developing, testing, and building the application.
- **TypeScript** – Providing type safety and defining component properties.
- **Expo Router** – Managing the application's routing structure.
- **Lucide React Native** – Providing icons such as Search, Plus, and CheckCheck.
- **React Native Safe Area Context** – Handling safe screen areas for not hiding status bar.
- **React Hooks** – Managing component state using `useState`.

## Application Features

- Chat interface displaying contacts and recent messages.
- Interactive Chat, Status, and Calls navigation tabs.
- Profile avatars for each contact.
- Message previews and timestamps.
- Unread message notification with count.
- Message delivery icon.
- Highlighted typing status.
- Plus button for adding contact.
- Hover and press effects on interactive buttons.
- Responsive layout for mobile devices and web browsers.
- Scrollable chat list using FlatList.

## Components and Their Functions

### 1. Header Component (`Header.tsx`)

The Header component displays the application title and action icons.

**Functions:**
- Displays the HALODEK application title.
- Displays the Search icon.
- Displays the  menu icon.
- Uses `Pressable` to provide interactive buttons.
- Supports hover and press feedback.
- Uses safe-area handling for supported devices.

### 2. ChatsBar Component (`ChatsBar.tsx`)

The ChatsBar component provides navigation tabs for Chat, Status, and Calls.

**Functions:**
- Displays three selectable tabs.
- Uses `useState` to track the selected tab.
- Highlights the active tab with an orange background.
- Changes button appearance when hovered over or pressed.
- Uses Flexbox to distribute tabs evenly across the available width.

### 3. ChatItem Component (`chatItem.tsx`)
The ChatItem component represents an individual conversation in the chat list.

**Functions:**
- Displays the contact's profile image.
- Displays the contact's name.
- Displays a preview of the message.
- Displays the message timestamp.
- Shows unread message counts .
- Displays delivered  using the CheckCheck icon.
- Highlights selected message text, such as typing status.


### 4. ChatsList Component (`ChatsList.tsx`)
The ChatsList component displays the collection of chat conversations.

**Functions:**
- Uses `FlatList` to render chat items .
- Passes chat information to the ChatItem component.
- Displays Item separators between conversations.
- Has vertical scrolling for big screens.
- Displays the Plus button .
- Has hover and press effects on the Plus button.


### 6. Chat Types (`types/chat.ts`)

Shows interface used for chat data.

**Functions:**
- Defines the structure of chat objects.
- Specifies properties such as contact name, image, message, time, unread count, and message status.
- Provides type checking when passing chat data between components.
- Stores avatar background colour values.

## React Native Components Used

 `View`  Organises and groups UI elements. 
`Text` Displays text such as contact names and messages. 
 `Image` Displays contact profile pictures. 
`Pressable`  Handles button presses and interactive feedback. 
`FlatList` Efficiently renders scrollable chat conversations. 
 `StyleSheet`  Defines and organises component styles. 
 `SafeAreaView`  Helps position content within safe screen areas. 

## Responsiveness and Interactivity

Interactive components use `Pressable` to handle user input.
For web buttons support mouse hover and click interactions.
For androids  buttons support touch and press interactions.


## Installation and Setup

### 1. Clone the repository

git clone https://github.com/Karabo-Merinah/React-Native-Chat-App.git

### 2. Navigate to the project folder

cd halodek-chat-ui-challenge

### 3. Install dependencies

npm install


### 4. Start the application


npx expo start

Scan the QR code using Expo Go to test the application on a supported mobile device.

### 5. Run in a web browser


npx expo start --web


## Download Android APK

The Android application was built using Expo Application Services (EAS Build).

[Download HALODEK APK](https://drive.google.com/drive/folders/1ldqpMeYmZJBvAISGPQBOv6Mrx_GTkoPW?usp=sharing)

## What I Have Learnt

Through this React Native UI Challenge  I learnt 

Learnt how to build mobile interfaces using components such as `View`, `Text`, `Image`, and `Pressable`.

 Learnt how to efficiently display lists of data using `FlatList` and `renderItem`.

 Implemented button presses, hover effects, and conditional styling for interactive components.

Learnt how to run, test, troubleshoot, and generate an Android APK using Expo.

This project helped me understand the similarities and differences between React and React Native while strengthening my problem-solving and debugging skills.
