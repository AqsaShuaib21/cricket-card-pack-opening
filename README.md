<!-- Card Pack Opening Game -->

This project builds on the React + Vite template to create a dynamic, game-inspired card pack opening experience. It mimics the thrill of FIFA-style pack reveals using animated transitions, toast notifications, and randomized player cards.

<!-- Features -->

Pack Selection UI: Choose from multiple themed packs like Silver, Gold, Bronze, Rare Gold, Future Stars, and Rare Silver.

Pack Opening Animation: Clicking "Open Pack" triggers a toast and navigates to a reveal screen with suspenseful transitions.

Player Reveal Grid: Players are hidden until clicked, simulating RNG-based discovery.

Responsive Layout: Built with Bootstrap for mobile-friendly design.

Routing: React Router handles navigation between pack overview and detail views.

<!-- RNG Logic -->

Each pack contains a predefined array of player cards. When a pack is opened:

The app navigates to a detail page using the pack’s id.

Players are displayed but hidden until clicked.

Clicking reveals the player image, simulating randomness and excitement.
