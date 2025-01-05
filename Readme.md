<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="A simple, interactive Tic Tac Toe game with HTML, CSS, and JavaScript.">
    <title>Tic Tac Toe Game</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Tic Tac Toe Game</h1>
        <p>A simple yet interactive game for two players.</p>
    </header>

    <main>
        <section id="description">
            <h2>Description</h2>
            <p>This project is a simple yet interactive Tic Tac Toe game built with HTML, CSS, and JavaScript. It features a responsive game grid, dynamic logic for game interactions, and an intuitive interface for two players to enjoy the classic game. The design and functionality ensure seamless gameplay on various devices, making it fun and engaging for users.</p>
        </section>

        <section id="features">
            <h2>Features</h2>
            <ul>
                <li>Two-Player Mode: Alternating turns between Player X and Player O.</li>
                <li>Dynamic Game Logic: Automatic detection of winning or draw scenarios.</li>
                <li>Responsive Design: Adapts to different screen sizes for optimal gameplay experience.</li>
                <li>Reset Button: Restart the game at any time with the "New Game" button.</li>
                <li>Visual Feedback: Highlights the winning combination and displays a message for the result (Win or Draw).</li>
            </ul>
        </section>

        <section id="technologies">
            <h2>Technologies Used</h2>
            <ul>
                <li>HTML: Structures the game's content.</li>
                <li>CSS: Styles the game interface for a visually appealing layout.</li>
                <li>JavaScript: Implements game logic, handles player interactions, and manages real-time updates.</li>
            </ul>
        </section>

        <section id="project-structure">
            <h2>Project Structure</h2>
            <pre>
TIC-TAC-TOE/
|
├── index.html       # Main HTML file (game structure)
├── style.css        # CSS file (styling the game)
└── script.js        # JavaScript file (game logic)
            </pre>
        </section>

        <section id="installation">
            <h2>Installation</h2>
            <h3>Prerequisites</h3>
            <ul>
                <li>A modern web browser (e.g., Chrome, Firefox, Edge, Safari).</li>
                <li>Git (optional, for cloning the repository).</li>
            </ul>
            <h3>Steps</h3>
            <ol>
                <li>Clone the repository:
                    <pre><code>git clone https://github.com/Somnathdwivedi/tic_tac_toe_game.git</code></pre>
                </li>
                <li>Navigate to the project directory:
                    <pre><code>cd tic_tac_toe_game</code></pre>
                </li>
                <li>Open the <code>index.html</code> file in your browser:
                    <ul>
                        <li>On Windows: <code>start index.html</code></li>
                        <li>On macOS: <code>open index.html</code></li>
                        <li>On Linux: <code>xdg-open index.html</code></li>
                    </ul>
                </li>
            </ol>
            <p>No additional setup or dependencies are required.</p>
        </section>

        <section id="usage">
            <h2>Usage</h2>
            <ol>
                <li>Open the <code>index.html</code> file in any web browser.</li>
                <li>Players take turns clicking on the boxes to place their marks (X or O).</li>
                <li>The game automatically checks for a winner or a draw after each move.</li>
                <li>If a player wins, the winning combination is highlighted, and a message announces the winner.</li>
                <li>Click the "New Game" button to reset the board and start a new game.</li>
            </ol>
        </section>

        <section id="contributing">
            <h2>Contributing</h2>
            <p>Contributions are welcome! Follow these steps to contribute:</p>
            <ol>
                <li>Fork this repository to your GitHub account.</li>
                <li>Clone the forked repository:
                    <pre><code>git clone https://github.com/your-username/tic_tac_toe_game.git</code></pre>
                </li>
                <li>Create a new branch for your feature or bug fix:
                    <pre><code>git checkout -b feature-name</code></pre>
                </li>
                <li>Make your changes and commit them:
                    <pre><code>git add .
git commit -m "Add feature-name"</code></pre>
                </li>
                <li>Push your changes to your forked repository:
                    <pre><code>git push origin feature-name</code></pre>
                </li>
                <li>Open a pull request to the main repository with a detailed description of your changes.</li>
            </ol>
        </section>

        <section id="future-enhancements">
            <h2>Future Enhancements</h2>
            <ul>
                <li>Add an AI player mode for single-player games.</li>
                <li>Include sound effects for moves and game events.</li>
                <li>Provide themes to customize the game's appearance.</li>
                <li>Add animations for smoother transitions and interactions.</li>
            </ul>
        </section>

        <section id="license">
            <h2>License</h2>
            <p>This project is licensed under the MIT License. Feel free to use, modify, and distribute it as needed. See the LICENSE file for details.</p>
        </section>

        <section id="acknowledgments">
            <h2>Acknowledgments</h2>
            <ul>
                <li>Inspired by the classic Tic Tac Toe game.</li>
                <li>Thanks to the developers of modern web technologies for providing robust tools to create engaging projects.</li>
                <li>Special thanks to the open-source community for fostering learning and collaboration.</li>
            </ul>
        </section>
    </main>

    <footer>
        <p>&copy; 2025 Tic Tac Toe Game Project. All rights reserved.</p>
    </footer>
</body>
</html>
