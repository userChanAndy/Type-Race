# Phase 2 Project

# Type Racer

## - What the user is expected to do

Navigate through the pages with the navbar on the top

Homepage explains the game

race is the game

data is the users score

users are expected to type the displayed text into the search bar until the timer hits 0

## - When does the timer go on, when does it stop

the timer starts when the user starts typing in search bar
the timer stops either after 15 or 30 seconds, depending on user choice

## - How are scores populated

score cards will be recorded in the backend using json Server,
there will be a seperate data component that populates user scores

## - How is WPM and accuracy is calculated

if user selects 15 second race take correct words and multiply by 4
if user selects 30 second race take correct words and multiply by 2
accuracy takes correct words divided by correct words minus incorrect words
