# Virtual Drum Kit

A simple virtual drum kit built with HTML, CSS, and JavaScript that allows users to play drum sounds by clicking buttons or using keyboard interactions.

## Features

- 9 different drum sounds (Pom, Clap, Tim, Puff, Splash, Toim, Psh, Tic, Tom)
- Interactive buttons with visual feedback
- Keyboard support (Space and Enter keys)
- Responsive design
- Audio playback with clone functionality for overlapping sounds

## How to Use

1. **Click to Play**: Click on any drum button to play the corresponding sound
2. **Keyboard Interaction**: 
   - Use Tab to navigate between buttons
   - Press Space or Enter while focused on a button to activate it
   - Visual feedback shows when buttons are active

## Technical Details

### Main Functions

- **`tocaSom`**: Plays audio by cloning the audio element to allow overlapping sounds
- **Event Listeners**: Handle click, keydown, and keyup events for each drum button

### Styling

- Uses CSS Grid for button layout (3x3 grid)
- Custom CSS variables for consistent theming
- Gradient backgrounds and shadow effects
- Active/focus states with visual feedback

### Audio System

Each button corresponds to a specific audio file, with the naming convention:
- Button class: `tecla_[instrument]`
- Audio ID: `som_[instrument]`

## Browser Compatibility

This project uses modern web APIs and should work in all contemporary browsers that support:
- CSS Grid
- Audio API
- ES6 template literals
- querySelector/querySelectorAll

## Getting Started

1. Clone or download the project files
2. Open `index.html` in a web browser
3. Start playing the drums!

No build process or dependencies required - it's a pure HTML/CSS/JavaScript application.

Bye! 🥁
