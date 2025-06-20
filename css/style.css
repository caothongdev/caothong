/* ================== CSS Variables ================== */
:root {
    /* Typography */
    --font-primary: 'Poppins', sans-serif;
    --font-secondary: 'Roboto', sans-serif;
    --font-headings: 'Montserrat', sans-serif;
    --font-size-base: 16px;
    --line-height-base: 1.7;

    /* [NÂNG CẤP] Thêm biến cho chiều cao của thanh điều hướng */
    --nav-height: 60px;

    /* --- Default Colors (Dark Mode) --- */
    --color-bg-dark-1: #0D1117;
    --color-bg-dark-2: #161B22;
    --color-bg-dark-3: #21262d;
    --color-border: #30363d;
    --color-text-light: #c9d1d9;
    --color-text-secondary: #8b949e;
    --color-text-headings: #f0f6fc;
    --color-accent: #58a6ff;
    --color-accent-rgb: 88, 166, 255;
    --color-accent-hover: #79c0ff;
    --color-accent-glow: rgba(var(--color-accent-rgb), 0.4);
    --color-danger: #f85149;
    --color-success: #34a853;
    --color-verified: #1da1f2;
    --color-focus-shadow: rgba(var(--color-accent-rgb), 0.4);
    --shadow-soft: 0 2px 8px rgba(0, 0, 0, 0.2);
    --shadow-medium: 0 5px 18px rgba(0, 0, 0, 0.25);
    --shadow-large: 0 10px 35px rgba(var(--color-accent-rgb), 0.15);
    
    /* --- Border Radius Definitions --- */
    --border-radius-small: 6px;
    --border-radius-medium: 10px;
    --border-radius-large: 20px;
    --border-radius-xl: 30px;
    --border-radius-circle: 50%;

    /* --- Light Mode Color Definitions --- */
    --color-bg-light-1: #ffffff;
    --color-bg-light-2: #f7f9fc;
    --color-bg-light-3: #edf2f7;
    --color-border-light: #e2e8f0;
    --color-text-dark: #2d3748;
    --color-text-secondary-light: #718096;
    --color-text-headings-light: #1a202c;
    --color-accent-light: #3182ce;
    --color-accent-light-rgb: 49, 130, 206;
    --color-accent-hover-light: #2b6cb0;
    --color-accent-glow-light: rgba(var(--color-accent-light-rgb), 0.3);
    --color-focus-shadow-light: rgba(var(--color-accent-light-rgb), 0.3);

    /* Spacing & Sizing */
    --spacing-unit: 8px;
    --transition-speed-fast: 0.2s;
    --transition-speed: 0.3s;
    --transition-speed-slow: 0.5s;
    --theme-transition-duration: 0.4s;
}

/* --- Apply Light Theme Colors --- */
html[data-theme='light'] {
    --color-bg-dark-1: var(--color-bg-light-1);
    --color-bg-dark-2: var(--color-bg-light-2);
    --color-border: var(--color-border-light);
    --color-text-light: var(--color-text-dark);
    --color-text-secondary: var(--color-text-secondary-light);
    --color-text-headings: var(--color-text-headings-light);
    --color-accent: var(--color-accent-light);
    --color-accent-hover: var(--color-accent-hover-light);
    --color-focus-shadow: var(--color-focus-shadow-light);

    .btn-primary { color: var(--color-bg-light-1); }
    .btn-primary:hover, .btn-primary:focus-visible { color: var(--color-bg-light-1); }
    .btn-secondary { color: var(--color-text-dark); border-color: var(--color-border-light); }
    .btn-secondary:hover, .btn-secondary:focus-visible { background-color: var(--color-bg-light-2); border-color: var(--color-text-secondary-light); color: var(--color-text-dark); }
    #volume-btn, #clock { background-color: rgba(246, 248, 250, 0.85); backdrop-filter: blur(5px); border: 1px solid var(--color-border-light); color: var(--color-text-dark); }
    #volume-btn:hover { background-color: rgba(230, 233, 237, 0.9); }
    #volume-btn.muted { color: var(--color-text-secondary-light); }
    #volume-btn.muted:hover { color: var(--color-text-dark); }
    #volume-slider { background: var(--color-border-light); }
    #volume-slider::-webkit-slider-thumb { background: var(--color-accent-light); border: 2px solid var(--color-bg-light-1); }
    #volume-slider::-moz-range-thumb { background: var(--color-accent-light); border: 2px solid var(--color-bg-light-1); }
    #volume-slider::-moz-range-track { background: var(--color-border-light); }
    #song-selection-modal, .prompt-overlay, .lightbox-overlay { background-color: rgba(255, 255, 255, 0.8); backdrop-filter: blur(4px); }
    .modal-content, .prompt-box { background-color: var(--color-bg-light-2); border-color: var(--color-border-light); box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); }
    #song-list li { border-bottom-color: var(--color-border-light); color: var(--color-text-dark); }
    #song-list li:hover { background-color: var(--color-border-light); color: var(--color-accent-hover-light); }
    #lightbox-close { color: #555; }
    #lightbox-close:hover { color: var(--color-accent-light); }
    input[type="text"], input[type="email"], input[type="password"], input[type="search"], input[type="number"], input[type="tel"], input[type="url"], textarea, select { background-color: var(--color-bg-light-1); border: 1px solid var(--color-border-light); color: var(--color-text-dark); }
    select { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%2357606a'%3E%3Cpath fill-rule='evenodd' d='M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z'/%3E%3C/svg%3E"); }
    .skill-tags li { background-color: var(--color-border-light); color: var(--color-text-secondary-light); }
    .skill-tags li::before { background: linear-gradient(90deg, var(--color-accent-light), var(--color-accent-hover-light)); }
    .skill-tags li:hover { color: var(--color-bg-light-1); box-shadow: 0 5px 12px var(--color-focus-shadow-light); }
    .loading-bar { background-color: var(--color-border-light); }
    .loading-bar::after { background: linear-gradient(90deg, var(--color-accent-light), var(--color-accent-hover-light)); }
    .payment-item { background-color: var(--color-bg-light-1); border-color: var(--color-border-light); }
    .payment-item:hover { border-color: var(--color-accent-light); box-shadow: 0 3px 10px rgba(9, 105, 218, 0.1); }
    .project-item { background-color: var(--color-bg-light-1); border-color: var(--color-border-light); }
    .project-item h3 { color: var(--color-text-headings-light); }
    .project-item p { color: var(--color-text-dark); }
    #lobby-screen::before { filter: brightness(0.85); }
    .lobby-content { background-color: rgba(255, 255, 255, 0.8); border: 1px solid rgba(0, 0, 0, 0.1); box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); }
    .lobby-icon img { background: rgba(0, 0, 0, 0.05); }
    #lobby-screen h2 { color: var(--color-text-headings-light); text-shadow: 1px 1px 3px rgba(0,0,0,0.2); }
    #lobby-screen p { color: var(--color-text-secondary-light); }
    @keyframes pulse-light { 0% { box-shadow: 0 0 0 0 rgba(52, 168, 83, 0.5); opacity: 1;} 70% { box-shadow: 0 0 0 10px rgba(52, 168, 83, 0); opacity: 0.5; } 100% { box-shadow: 0 0 0 0 rgba(52, 168, 83, 0); opacity: 1;} }
    .status-indicator { box-shadow: 0 0 8px rgba(52, 168, 83, 0.7); animation: pulse-light 2s infinite ease-in-out; }
    .main-nav { background-color: rgba(255, 255, 255, 0.8); }
    .nav-control-btn:hover { background-color: var(--color-border-light); }
    .blog-card { background-color: var(--color-bg-light-1); border-color: var(--color-border-light); }
    .contact-form-wrapper { background-color: var(--color-bg-light-1); border-color: var(--color-border-light); }
    #command-palette-results li.selected { color: var(--color-bg-light-1); }
    #command-palette-results li.selected .command-item-type { color: var(--color-bg-light-1); }
    .command-palette-footer { background-color: var(--color-bg-light-2); }
    kbd { background-color: var(--color-border-light); }
}

/* ================== General Styles & Reset ================== */
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
}

*:focus-visible {
   outline: 2px solid var(--color-accent-hover);
   outline-offset: 2px;
   box-shadow: 0 0 0 3px var(--color-focus-shadow);
}

html {
    scroll-behavior: smooth;
    font-size: var(--font-size-base);
}

body {
    font-family: 'Roboto', sans-serif;
    background-color: var(--color-bg-dark-1);
    color: var(--color-text-light);
    line-height: var(--line-height-base);
    overflow-x: hidden;
    position: relative;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body.cursor-effect-disabled {
    cursor: auto;
}

body.matrix-mode {
    --color-accent: #00ff41;
    --color-accent-hover: #5ff98c;
    --color-success: #00ff41;
}

a {
    color: var(--color-accent);
    text-decoration: none;
    transition: color var(--transition-speed) ease;
}

a:hover,
a:focus-visible {
    color: var(--color-accent-hover);
    text-decoration: underline;
}

img, svg {
    max-width: 100%;
    height: auto;
    display: block;
}

h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-headings);
    font-weight: 700;
    margin-bottom: calc(var(--spacing-unit) * 1.5);
    color: var(--color-text-headings);
    line-height: 1.3;
}

h1 { font-size: 2.25rem; }
h2 { font-size: 1.75rem; margin-bottom: calc(var(--spacing-unit) * 3); }
h3 { font-size: 1.25rem; }
h4 { font-size: 1.1rem; }

/* ================== Utility Classes ================== */
.mb-1 { margin-bottom: var(--spacing-unit); }
.mb-2 { margin-bottom: calc(var(--spacing-unit) * 2); }
.mb-3 { margin-bottom: calc(var(--spacing-unit) * 3); }
.mt-1 { margin-top: var(--spacing-unit); }
.mt-2 { margin-top: calc(var(--spacing-unit) * 2); }
.mt-3 { margin-top: calc(var(--spacing-unit) * 3); }

.text-center { text-align: center; }
.text-danger { color: var(--color-danger); }
.text-success { color: var(--color-success); }
.text-secondary { color: var(--color-text-secondary); }

.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
}


/* ================== Buttons ================== */
.btn {
    font-family: inherit;
    font-weight: 600;
    padding: calc(var(--spacing-unit) * 1.25) calc(var(--spacing-unit) * 2.5);
    border: 1px solid transparent;
    border-radius: var(--border-radius-medium);
    cursor: pointer;
    transition: background-color var(--transition-speed) ease, color var(--transition-speed) ease, border-color var(--transition-speed) ease, transform var(--transition-speed) ease, box-shadow var(--transition-speed) ease;
    display: inline-flex; /* Use flex for easier alignment of icons */
    align-items: center;
    justify-content: center;
    gap: calc(var(--spacing-unit) * 0.75);
    text-align: center;
    white-space: nowrap;
    user-select: none;
    vertical-align: middle;
}

.btn:hover,
.btn:focus-visible {
    transform: translateY(-3px) scale(1.03);
    box-shadow: 0 6px 12px rgba(var(--color-accent-rgb, 88, 166, 255), 0.3);
}

.btn-primary {
    background-color: var(--color-accent);
    color: var(--color-bg-dark-1);
    border-color: var(--color-accent);
}
.btn-primary:hover,
.btn-primary:focus-visible {
    background-color: var(--color-accent-hover);
    border-color: var(--color-accent-hover);
    color: var(--color-bg-dark-1);
    transform: translateY(-8px) scale(1.025);
    box-shadow: 0 12px 32px 0 rgba(88,166,255,0.18), 0 2px 12px 0 rgba(0,0,0,0.13);
    filter: brightness(1.03);
}

.btn-secondary {
    background-color: transparent;
    border: 1px solid var(--color-border);
    color: var(--color-text-light);
}
.btn-secondary:hover,
.btn-secondary:focus-visible {
    background-color: var(--color-bg-dark-2);
    border-color: var(--color-text-secondary);
    color: var(--color-text-light);
}

.btn-tertiary {
    background-color: var(--color-border);
    color: var(--color-text-secondary);
    border-color: var(--color-border);
}
.btn-tertiary:hover,
.btn-tertiary:focus-visible {
    background-color: #444c56;
    color: var(--color-text-light);
    border-color: #444c56;
}

.btn-danger {
    background-color: var(--color-danger);
    color: #fff;
    border-color: var(--color-danger);
}
.btn-danger:hover,
.btn-danger:focus-visible {
    background-color: #d73a49;
    border-color: #d73a49;
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(248, 81, 73, 0.2);
}

.btn-small {
    padding: var(--spacing-unit) calc(var(--spacing-unit) * 1.5);
    font-size: 0.875rem;
}

/* ================== Loading Screen ================== */
#loading-screen {
    background-color: var(--color-bg-dark-1);
    text-align: center;
}

.loading-bar {
    height: 10px;
    position: relative;
    margin: calc(var(--spacing-unit) * 2.5) auto 0 auto;
    overflow: hidden;
    border-radius: 5px;
    background-color: var(--color-border);
    transform-origin: left center;
}

.loading-bar::after {
    content: '';
    display: block;
    height: 100%;
    width: 0%;
    background: linear-gradient(90deg, var(--color-accent), var(--color-accent-hover));
    border-radius: 5px;
    animation: fill-loading-bar 3s linear forwards;
}

@keyframes fill-loading-bar {
    0% { width: 0%; }
    100% { width: 100%; }
}

.loading-bar.finished::after {
    animation: none;
    width: 100%;
}


.loading-avatar {
    width: 100px;
    height: 100px;
    border-radius: var(--border-radius-circle);
    margin-bottom: calc(var(--spacing-unit) * 2.5);
    object-fit: cover;
    animation: pulse-avatar 2s infinite ease-in-out;
}

@keyframes pulse-avatar {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}

#loading-screen h1 {
    font-size: 1.5rem;
    color: var(--color-text-headings);
    margin-bottom: var(--spacing-unit);
}
#loading-screen p {
    font-size: 0.9rem;
    color: var(--color-text-secondary);
}

/* ================== Screen Management & Transitions ================== */
.screen {
    min-height: 100vh;
    width: 100%;
    position: fixed;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    z-index: 100;
    transition: opacity 0.6s ease-in-out, transform 0.6s ease-in-out, visibility 0s linear 0.6s;
    overflow: hidden;
}

.screen.active {
    opacity: 1;
    visibility: visible;
    z-index: 101;
    transform: translateY(0);
    transition: opacity 0.6s ease-in-out, transform 0.6s ease-in-out, visibility 0s linear 0s;
}

.screen.fade-out {
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 0.6s ease-in-out, transform 0.6s ease-in-out, visibility 0s linear 0.6s;
}

#loading-screen {
    transform: translateY(-20px);
}

#loading-screen.active {
     transform: translateY(0);
}


/* ================== Lobby Screen ================== */
#lobby-screen {
    color: var(--color-text-light);
    text-align: center;
    cursor: pointer;
    transform: translateY(-20px);
}

#lobby-screen.active {
     transform: translateY(0);
}

#lobby-screen::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url('../assets/alina.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
    filter: brightness(0.6);
    transition: filter var(--transition-speed) ease;
}

.lobby-content {
    background-color: rgba(0, 0, 0, 0.65);
    padding: calc(var(--spacing-unit) * 5);
    border-radius: var(--border-radius-medium);
    max-width: 650px;
    width: 90%;
    box-shadow: var(--shadow-medium);
    transition: transform var(--transition-speed) ease, box-shadow var(--transition-speed) ease, background-color var(--transition-speed) ease, border-color var(--transition-speed) ease;
    position: relative;
    z-index: 1;
    border: 1px solid rgba(255, 255, 255, 0.1);
}
#lobby-screen:hover .lobby-content {
    transform: scale(1.02);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.lobby-icon img {
    width: 100px;
    height: 100px;
    margin: 0 auto calc(var(--spacing-unit) * 2.5) auto;
    border-radius: var(--border-radius-circle);
    padding: var(--spacing-unit);
    background: rgba(255, 255, 255, 0.1);
    transition: background-color var(--transition-speed) ease;
}

#lobby-screen h2 {
    font-size: 2.5rem;
    margin-bottom: calc(var(--spacing-unit) * 2);
    letter-spacing: 1.5px;
    text-shadow: 2px 2px 6px rgba(0,0,0,0.7);
    transition: color var(--transition-speed) ease, text-shadow var(--transition-speed) ease;
}

#lobby-screen p {
    font-size: 1.1rem;
    max-width: 480px;
    margin: 0 auto;
    line-height: 1.8;
    transition: color var(--transition-speed) ease;
}

#music-selector-container {
    margin-top: calc(var(--spacing-unit) * 3);
    text-align: center;
}

#music-selector-icon {
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: transform var(--transition-speed) ease, opacity var(--transition-speed) ease;
}

#music-selector-icon:hover {
    transform: scale(1.1);
    opacity: 0.8;
}

/* ================== Song Selection Modal ================== */
#song-selection-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1500;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0s linear 0.3s;
}

#song-selection-modal.active {
     opacity: 1;
     visibility: visible;
     transition: opacity 0.3s ease, visibility 0s linear 0s;
}

#song-selection-modal.hidden {
    display: none;
}

.modal-content {
    background-color: var(--color-bg-dark-2);
    padding: calc(var(--spacing-unit) * 3);
    border-radius: var(--border-radius-medium);
    border: 1px solid var(--color-border);
    box-shadow: var(--shadow-medium);
    max-width: 400px;
    width: 90%;
    text-align: left;
    transform: scale(0.95);
    opacity: 0;
    transition: transform 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28), opacity 0.3s ease, background-color var(--transition-speed) ease, border-color var(--transition-speed) ease;
}

#song-selection-modal.active .modal-content {
    transform: scale(1);
    opacity: 1;
}


.modal-content h3 {
    margin-top: 0;
    margin-bottom: calc(var(--spacing-unit) * 2);
    color: var(--color-text-headings);
}

#song-list {
    list-style: none;
    padding: 0;
    margin: 0 0 calc(var(--spacing-unit) * 2) 0;
}

#song-list li {
    padding: var(--spacing-unit);
    cursor: pointer;
    border-bottom: 1px solid var(--color-border);
    transition: background-color var(--transition-speed) ease, color var(--transition-speed) ease, border-color var(--transition-speed) ease;
    color: var(--color-text-light);
    border-radius: var(--border-radius-small);
}
#song-list li:last-child {
    border-bottom: none;
}
#song-list li:hover, #song-list li:focus-visible {
    background-color: var(--color-border);
    color: var(--color-accent-hover);
    outline: none;
}


#close-modal {
    display: block;
    width: 100%;
    margin-top: calc(var(--spacing-unit) * 2);
}

/* ================== Main Content ================== */
#main-content {
    background-color: var(--color-bg-dark-1);
    padding: 0;
    transform: translateY(-20px);
}

#main-content.active {
    position: static;
    display: block;
    opacity: 1;
    visibility: visible;
    z-index: 102;
    min-height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    transition: opacity 0.6s ease-in-out, transform 0.6s ease-in-out, visibility 0s linear 0s;
    transform: translateY(0);
}
.main-container {
    max-width: 1100px;
    margin: calc(var(--spacing-unit) * 8) auto calc(var(--spacing-unit) * 5) auto;
    padding: 0 calc(var(--spacing-unit) * 2.5);
    width: 100%;
}

/* --- Header Profile --- */
.profile-header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: calc(var(--spacing-unit) * 3);
    margin-bottom: calc(var(--spacing-unit) * 6);
    padding-bottom: calc(var(--spacing-unit) * 3);
    border-bottom: 1px solid var(--color-border);
}

.profile-avatar-container {
    position: relative;
}

.profile-avatar {
    width: 100px;
    height: 100px;
    border-radius: var(--border-radius-circle);
    border: 3px solid var(--color-border);
    object-fit: cover;
    flex-shrink: 0;
    background-color: var(--color-bg-dark-2);
    cursor: pointer;
}

.profile-details {
    flex-grow: 1;
}

.profile-details h1 {
    font-size: 2rem;
    margin-bottom: var(--spacing-unit);
    display: flex;
    align-items: center;
    gap: var(--spacing-unit);
    flex-wrap: wrap;
}

/* --- [NÂNG CẤP UX] --- Style cho khu vực hiển thị bài hát và chỉ báo loading */
#current-song-display {
    display: flex;
    align-items: center;
    gap: calc(var(--spacing-unit) * 1);
    min-height: 24px; /* Đảm bảo chiều cao ổn định */
}

.song-loading-indicator {
    width: 16px;
    height: 16px;
    border: 2px solid var(--color-border);
    border-top-color: var(--color-accent);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    display: none; /* Ẩn mặc định */
}

.song-loading-indicator.loading {
    display: inline-block; /* Hiện khi có class 'loading' */
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}


.profile-avatar-container:hover .profile-avatar {
    transform: scale(1.08);
    box-shadow: 0 0 20px var(--color-accent-glow);
}
.profile-avatar-container:hover .avatar-glow-ring {
    opacity: 0.8;
    transform: scale(1.15);
}
.verified-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    background-color: var(--color-verified);
    border-radius: var(--border-radius-circle);
    flex-shrink: 0;
    color: white;
    font-size: 0.7em;
    line-height: 1;
}

.profile-meta {
    font-size: 0.95rem;
    color: var(--color-text-secondary);
    display: flex;
    flex-wrap: wrap;
    gap: calc(var(--spacing-unit) * 1.5) calc(var(--spacing-unit) * 2.5);
}
.profile-meta span, .profile-meta a {
    display: inline-flex;
    align-items: center;
    gap: calc(var(--spacing-unit) * 0.75);
    color: var(--color-text-secondary);
}
.profile-meta a:hover,
.profile-meta a:focus-visible {
    color: var(--color-accent-hover);
    text-decoration: none;
}

/* --- Sections --- */
.content-section {
    margin-bottom: calc(var(--spacing-unit) * 5);
    padding: calc(var(--spacing-unit) * 3);
    background-color: var(--color-bg-dark-2);
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius-medium);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    transition: box-shadow var(--transition-speed) ease, background-color var(--transition-speed) ease, border-color var(--transition-speed) ease;
}

.content-section h2 {
    font-size: 1.5rem;
    color: var(--color-text-headings);
    margin-bottom: calc(var(--spacing-unit) * 3);
    padding-bottom: calc(var(--spacing-unit) * 1.5);
    border-bottom: 1px solid var(--color-border);
}

/* --- Bio --- */
#bio {
    border-left: 3px solid var(--color-accent);
    padding-left: calc(var(--spacing-unit) * 3.5);
}

#bio h2 {
    font-size: 1.6rem;
}

#bio p {
    margin-bottom: calc(var(--spacing-unit) * 2);
    line-height: 1.8;
    color: var(--color-text-light);
}

#bio strong {
    color: var(--color-text-headings);
    font-weight: 700;
}

.bio-focus-heading {
    font-size: 1.15rem;
    color: var(--color-accent);
    margin-top: calc(var(--spacing-unit) * 3);
    margin-bottom: calc(var(--spacing-unit) * 1.5);
    font-weight: 600;
}

.bio-focus-list {
    list-style: none;
    padding-left: 0;
    margin-left: 0;
    margin-bottom: calc(var(--spacing-unit) * 2);
}

.bio-focus-list li {
    display: flex;
    align-items: flex-start;
    margin-bottom: calc(var(--spacing-unit) * 1.25);
    color: var(--color-text-light);
    padding-left: 0;
}

.bio-focus-icon {
    margin-right: calc(var(--spacing-unit) * 1.5);
    color: var(--color-accent-hover);
    flex-shrink: 0;
    margin-top: 0.2em;
    width: 1.2em;
    text-align: center;
    font-size: 1.1em;
}

.bio-motivation {
    font-style: italic;
    color: var(--color-text-secondary);
    border-left: 2px solid var(--color-border);
    padding-left: calc(var(--spacing-unit) * 1.5);
    margin-top: calc(var(--spacing-unit) * 3);
}

/* ================== Projects Section ================== */
.projects-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: calc(var(--spacing-unit) * 3);
}

.project-item {
    background-color: var(--color-bg-dark-1);
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius-medium);
    padding: calc(var(--spacing-unit) * 2.5);
    display: flex;
    flex-direction: column;
    transition: transform var(--transition-speed) ease, box-shadow var(--transition-speed) ease, border-color var(--transition-speed) ease;
    overflow: hidden;
}

.featured-link-thumbnail {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: var(--border-radius-small);
    margin-bottom: calc(var(--spacing-unit) * 2);
    border: 1px solid var(--color-border);
}

.project-item h3 {
    font-size: 1.3rem;
    color: var(--color-text-headings);
    margin-bottom: var(--spacing-unit);
}

.project-item p {
    font-size: 0.95rem;
    color: var(--color-text-light);
    line-height: 1.6;
    margin-bottom: calc(var(--spacing-unit) * 2);
    flex-grow: 1;
}

.featured-link-actions {
    margin-top: auto;
    display: flex;
    gap: calc(var(--spacing-unit) * 1.5);
    flex-wrap: wrap;
}

.featured-link-actions .btn {
    flex-grow: 1;
}
@media (min-width: 580px) {
    .featured-link-actions .btn {
        flex-grow: 0;
    }
}

@media (min-width: 768px) {
    .featured-links-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .featured-links-grid {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
}


/* --- Payment --- */
.payment-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: calc(var(--spacing-unit) * 2);
}
.payment-item {
    background-color: var(--color-bg-dark-1);
    padding: calc(var(--spacing-unit) * 2);
    border-radius: var(--border-radius-small);
    border: 1px solid var(--color-border);
    display: flex;
    flex-direction: column;
    gap: calc(var(--spacing-unit) * 0.75);
    transition: border-color var(--transition-speed) ease, transform var(--transition-speed) ease, box-shadow var(--transition-speed) ease;
}
.project-item:hover,
.testimonial-item:hover,
.payment-item:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: var(--shadow-large);
    border-color: var(--color-accent-hover);
}

.payment-item-header {
    display: flex;
    align-items: center;
    gap: calc(var(--spacing-unit) * 1);
}

.payment-logo {
    height: 20px;
    width: auto;
    max-width: 40px;
    object-fit: contain;
    flex-shrink: 0;
}

.payment-label {
    font-weight: 600;
    color: var(--color-text-headings);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    line-height: 1.2;
}

.payment-value {
    color: var(--color-text-secondary);
    word-break: break-all;
    font-family: monospace;
    font-size: 1rem;
    line-height: 1.4;
}

.payment-provider {
    font-size: 0.8rem;
    color: var(--color-text-secondary);
    margin-top: auto;
    padding-top: calc(var(--spacing-unit) * 0.5);
    align-self: flex-end;
    text-transform: uppercase;
}
/* --- Skills --- */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: calc(var(--spacing-unit) * 3);
}
.skill-category h3 {
    font-size: 1.15rem;
    color: var(--color-text-headings);
    margin-bottom: calc(var(--spacing-unit) * 1.5);
    padding-bottom: var(--spacing-unit);
    border-bottom: 1px solid var(--color-border);
}
.skill-tags {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-unit);
}
.skill-tags li {
    background-color: var(--color-border);
    color: var(--color-text-light);
    padding: calc(var(--spacing-unit) * 0.75) calc(var(--spacing-unit) * 1.5);
    border-radius: var(--border-radius-large);
    font-size: 0.875rem;
    transition: background-color 0.3s ease, transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), color 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    overflow: hidden;
    z-index: 1;
    cursor: default;
}

.skill-tags li::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, var(--color-accent), var(--color-accent-hover));
    transition: left 0.4s ease-out;
    z-index: -1;
    border-radius: var(--border-radius-large);
}

.skill-tags li:hover {
    color: var(--color-bg-dark-1);
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 5px 12px rgba(88, 166, 255, 0.3);
}

.skill-tags li:hover::before {
    left: 0;
}

/* ================== Form Styles (Nếu có form liên hệ sau này) ================== */
label {
  display: block;
  margin-bottom: calc(var(--spacing-unit) * 0.75);
  font-weight: 600;
  color: var(--color-text-secondary);
  font-size: 0.9rem;
}

input[type="text"],
input[type="email"],
input[type="password"],
input[type="search"],
input[type="number"],
input[type="tel"],
input[type="url"],
textarea,
select {
  font-family: inherit;
  font-size: 1rem;
  padding: calc(var(--spacing-unit) * 1.25) calc(var(--spacing-unit) * 1.5);
  background-color: var(--color-bg-dark-1);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-small);
  color: var(--color-text-light);
  transition: border-color var(--transition-speed) ease, box-shadow var(--transition-speed) ease, background-color var(--transition-speed) ease, color var(--transition-speed) ease;
  display: block;
  width: 100%;
}

input[type="text"]:focus-visible,
input[type="email"]:focus-visible,
input[type="password"]:focus-visible,
input[type="search"]:focus-visible,
input[type="number"]:focus-visible,
input[type="tel"]:focus-visible,
input[type="url"]:focus-visible,
textarea:focus-visible,
select:focus-visible {
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px var(--color-focus-shadow);
  outline: none;
}

textarea {
    min-height: 120px;
    resize: vertical;
}

select {
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%238b949e'%3E%3Cpath fill-rule='evenodd' d='M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right calc(var(--spacing-unit) * 1.5) center;
    background-size: 16px 16px;
    padding-right: calc(var(--spacing-unit) * 4);
}

html[data-theme='light'] select {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%2357606a'%3E%3Cpath fill-rule='evenodd' d='M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z'/%3E%3C/svg%3E");
}


input.form-control-error,
textarea.form-control-error,
select.form-control-error {
    border-color: var(--color-danger) !important;
}
input.form-control-error:focus-visible,
textarea.form-control-error:focus-visible,
select.form-control-error:focus-visible {
    border-color: var(--color-danger) !important;
    box-shadow: 0 0 0 3px rgba(248, 81, 73, 0.4) !important;
}

/* ================== Footer ================== */
.page-footer {
    margin-top: calc(var(--spacing-unit) * 6);
    padding: calc(var(--spacing-unit) * 3) 0;
    border-top: 1px solid var(--color-border);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: calc(var(--spacing-unit) * 2);
    font-size: 0.9rem;
    color: var(--color-text-secondary);
}

.footer-quote {
    display: flex;
    align-items: center;
    gap: var(--spacing-unit);
}

.status-indicator {
    width: 12px;
    height: 12px;
    background-color: var(--color-success);
    border-radius: var(--border-radius-circle);
    flex-shrink: 0;
    box-shadow: 0 0 8px var(--color-success);
    animation: pulse 2s infinite ease-in-out;
}

@keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(52, 168, 83, 0.7); opacity: 1;}
    70% { box-shadow: 0 0 0 10px rgba(52, 168, 83, 0); opacity: 0.5; }
    100% { box-shadow: 0 0 0 0 rgba(52, 168, 83, 0); opacity: 1;}
}

html[data-theme='light'] .status-indicator {
    animation-name: pulse-light;
}


.footer-actions {
    display: flex;
    align-items: center;
    gap: calc(var(--spacing-unit) * 1.5);
}

/* ================== Controls Container (Volume + Clock) ================== */
#controls-container {
    position: fixed;
    bottom: calc(var(--spacing-unit) * 2);
    right: calc(var(--spacing-unit) * 2);
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: calc(var(--spacing-unit) * 0.75);
}

#volume-btn {
    background-color: rgba(13, 17, 23, 0.7);
    backdrop-filter: blur(5px);
    color: var(--color-text-light);
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius-circle);
    width: 40px;
    height: 40px;
    font-size: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    transition: background-color var(--transition-speed) ease, color var(--transition-speed) ease, box-shadow var(--transition-speed) ease, transform var(--transition-speed) ease, border-color var(--transition-speed) ease;
}
#volume-btn:hover {
    background-color: rgba(30, 36, 45, 0.8);
    transform: scale(1.1);
}
#volume-btn:focus-visible {
    box-shadow: 0 0 0 3px var(--color-focus-shadow);
    transform: scale(1.1);
}

#volume-btn.muted {
    color: var(--color-text-secondary);
}
#volume-btn.muted:hover {
    color: var(--color-text-light);
}

#clock {
    background-color: rgba(13, 17, 23, 0.7);
    backdrop-filter: blur(5px);
    color: var(--color-text-light);
    padding: calc(var(--spacing-unit) * 0.5) var(--spacing-unit);
    border-radius: var(--border-radius-small);
    font-size: 1rem;
    font-family: 'Courier New', Courier, monospace;
    border: 1px solid var(--color-border);
    user-select: none;
    transition: background-color var(--transition-speed) ease, color var(--transition-speed) ease, border-color var(--transition-speed) ease;
}

/* ================== Volume Slider Styles ================== */
#volume-slider {
    -webkit-appearance: none;
    appearance: none;
    width: 80px;
    height: 6px;
    background: var(--color-border);
    border-radius: 3px;
    outline: none;
    cursor: pointer;
    margin-bottom: calc(var(--spacing-unit) * 1);
    transition: opacity 0.3s ease, visibility 0.3s ease, height 0.3s ease, margin-bottom 0.3s ease, box-shadow var(--transition-speed) ease, background-color var(--transition-speed) ease;
    vertical-align: middle;
}

#volume-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    background: var(--color-accent);
    border-radius: 50%;
    cursor: pointer;
    border: 2px solid var(--color-bg-dark-1);
    transition: background-color var(--transition-speed) ease, transform var(--transition-speed) ease, border-color var(--transition-speed) ease;
}
#volume-slider:hover::-webkit-slider-thumb,
#volume-slider:focus-visible::-webkit-slider-thumb {
    background-color: var(--color-accent-hover);
    transform: scale(1.1);
}

#volume-slider::-moz-range-thumb {
    width: 16px;
    height: 16px;
    background: var(--color-accent);
    border-radius: 50%;
    cursor: pointer;
    border: 2px solid var(--color-bg-dark-1);
    transition: background-color var(--transition-speed) ease, transform var(--transition-speed) ease, border-color var(--transition-speed) ease;
}
#volume-slider:hover::-moz-range-thumb,
#volume-slider:focus-visible::-moz-range-thumb {
     background-color: var(--color-accent-hover);
     transform: scale(1.1);
}
#volume-slider::-moz-range-track {
    width: 100%;
    height: 6px;
    cursor: pointer;
    background: var(--color-border);
    border-radius: 3px;
    transition: background-color var(--transition-speed) ease;
}


#volume-slider.hidden {
    opacity: 0;
    visibility: hidden;
    height: 0;
    margin-bottom: 0;
    pointer-events: none;
}

#volume-slider:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px var(--color-focus-shadow);
}


/* ================== Prompt Dialog Styles (Music Prompt) ================== */
.prompt-overlay {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    opacity: 0;
    visibility: hidden;
    transition: opacity var(--transition-speed) ease, visibility 0s linear var(--transition-speed), background-color var(--transition-speed) ease;
}

.prompt-overlay.active {
    opacity: 1;
    visibility: visible;
    transition: opacity var(--transition-speed) ease, visibility 0s linear 0s, background-color var(--transition-speed) ease;
}

.prompt-box {
    background-color: var(--color-bg-dark-2);
    padding: calc(var(--spacing-unit) * 4);
    border-radius: var(--border-radius-medium);
    border: 1px solid var(--color-border);
    box-shadow: var(--shadow-medium);
    text-align: center;
    max-width: 420px;
    width: 90%;
    transform: scale(0.95);
    opacity: 0;
    transition: transform var(--transition-speed) cubic-bezier(0.18, 0.89, 0.32, 1.28), opacity 0.3s ease, background-color var(--transition-speed) ease, border-color var(--transition-speed) ease;
}

.prompt-overlay.active .prompt-box {
    transform: scale(1);
    opacity: 1;
}

.prompt-box p {
    margin-bottom: calc(var(--spacing-unit) * 3);
    color: var(--color-text-light);
    font-size: 1.1rem;
    line-height: 1.6;
}

.prompt-actions-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: calc(var(--spacing-unit) * 2.5);
    margin-top: calc(var(--spacing-unit) * 3);
}

.prompt-buttons {
    display: flex;
    justify-content: center;
    gap: calc(var(--spacing-unit) * 2);
    width: 100%;
}

.prompt-checkbox-area {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: calc(var(--spacing-unit) * 1);
    font-size: 0.9rem;
    color: var(--color-text-secondary);
    cursor: pointer;
    transition: color var(--transition-speed) ease;
}
.prompt-checkbox-area:hover {
    color: var(--color-text-light);
}

.prompt-checkbox-area label {
    cursor: pointer;
    margin-bottom: 0;
    font-weight: normal;
    color: inherit;
}

.prompt-checkbox-area input[type="checkbox"] {
    cursor: pointer;
    width: 18px;
    height: 18px;
    accent-color: var(--color-accent);
    margin-right: calc(var(--spacing-unit) * 0.5);
    flex-shrink: 0;
}

/* ================== Responsive Design ================== */
@media (max-width: 768px) {
    .main-container {
        padding-top: calc(var(--nav-height) + var(--spacing-unit) * 2);
    }
    .main-nav {
        padding: 0 var(--spacing-unit);
    }
    .nav-links {
        position: fixed;
        top: var(--nav-height);
        left: 0;
        width: 100%;
        height: calc(100vh - var(--nav-height));
        background-color: var(--color-bg-dark-2);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: calc(var(--spacing-unit) * 4);
        transform: translateX(-100%);
        transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    }
    .nav-links.active {
        transform: translateX(0);
    }
    .nav-link {
        font-size: 1.5rem;
    }
    .nav-mobile-toggle {
        display: block;
        z-index: 1002;
    }
    .nav-controls {
        display: none;
    }
    .footer-actions {
        width: 100%;
        margin-top: var(--spacing-unit);
        justify-content: flex-start;
    }
}
@media (max-width: 480px) {
    :root {
        --spacing-unit: 6px;
        --font-size-base: 14px;
    }
    h1 { font-size: 1.8rem; }
    h2 { font-size: 1.4rem; }
    h3 { font-size: 1.1rem; }

    .btn { padding: calc(var(--spacing-unit) * 1.2) calc(var(--spacing-unit) * 2); }
    .btn-small { padding: calc(var(--spacing-unit) * 0.8) calc(var(--spacing-unit) * 1.2); }

    .lobby-content { padding: calc(var(--spacing-unit) * 4); max-width: 95%; }
    #lobby-screen h2 { font-size: 2rem; }
    #lobby-screen p { font-size: 1rem; }

    .profile-avatar { width: 70px; height: 70px; }
    .profile-details h1 { font-size: 1.6rem; }
    .main-container { margin-top: calc(var(--spacing-unit) * 5); padding: 0 var(--spacing-unit); }

    #controls-container {
        bottom: var(--spacing-unit);
        right: var(--spacing-unit);
    }
    #volume-btn {
        width: 35px;
        height: 35px;
        font-size: 18px;
    }
    #clock {
        font-size: 0.85rem;
        padding: calc(var(--spacing-unit) * 0.4) calc(var(--spacing-unit) * 0.8);
    }
     #volume-slider {
        width: 70px;
    }

    .prompt-box {
        padding: calc(var(--spacing-unit) * 3);
    }
    .prompt-box p {
        font-size: 1rem;
    }
     .prompt-checkbox-area {
        font-size: 0.85rem;
    }
    .prompt-buttons {
        flex-direction: column;
        gap: var(--spacing-unit);
    }
    .prompt-buttons .btn {
        width: 100%;
    }

}

/* ================== Print Styles ================== */
@media print {
   :root {
       --color-bg-dark-1: #ffffff;
       --color-bg-dark-2: #ffffff;
       --color-border: #dddddd;
       --color-text-light: #000000;
       --color-text-secondary: #333333;
       --color-text-headings: #000000;
       --color-accent: #0000ff;
       --color-accent-hover: #0000ff;
   }

   body {
       background-color: var(--color-bg-dark-1);
       color: var(--color-text-light);
       font-size: 11pt;
       line-height: 1.4;
   }

   #loading-screen,
   #lobby-screen,
   #controls-container,
   .prompt-overlay,
   .page-footer .footer-actions button,
   .profile-header .btn,
   #bio .btn,
   .featured-link-actions,
   .skill-tags li:hover,
   .loading-bar,
   .status-indicator,
   .verified-badge,
   #music-selector-container,
   #song-selection-modal,
   #lightbox-overlay,
   #custom-cursor-element,
   #cursor-trail
   {
       display: none !important;
   }

   #main-content, #main-content.active {
       position: static !important;
       display: block !important;
       opacity: 1 !important;
       visibility: visible !important;
       min-height: auto !important;
       overflow: visible !important;
       transform: none !important;
   }

   .main-container {
       max-width: 100%;
       margin: 2cm auto;
       padding: 0 1cm;
   }

   .content-section,
   .payment-item,
   .project-item,
   .profile-header,
   .page-footer {
       border: 1px solid var(--color-border);
       box-shadow: none;
       background-color: transparent;
       margin-bottom: calc(var(--spacing-unit) * 1.5);
       padding: calc(var(--spacing-unit) * 0.75);
       break-inside: avoid;
   }

    .featured-link-thumbnail {
        max-height: 150px;
        border: 1px solid #ccc;
        filter: grayscale(100%);
    }
    .project-item h3, .project-item p {
        color: #000 !important;
    }


   h1, h2, h3, h4, h5, h6 {
       color: var(--color-text-headings);
       break-after: avoid;
   }

   a {
       color: var(--color-accent);
       text-decoration: underline;
   }
   a[href^="http"]::after {
       content: " (" attr(href) ")";
       font-size: 9pt;
       color: #555;
       word-break: break-all;
   }
   a[href^="#"]::after, a:not([href])::after, a[href^="mailto:"]::after, a[href^="tel:"]::after {
       content: "";
   }


   .profile-avatar, .payment-logo {
       border: 1px solid #ccc;
       box-shadow: none;
       transform: none !important;
       filter: grayscale(100%);
       padding: 2px;
   }
   .payment-logo {
       height: 16px;
       max-width: 30px;
   }

   .payment-grid, .skills-grid, .projects-grid {
       grid-template-columns: 1fr;
       gap: calc(var(--spacing-unit) * 0.5);
   }
   .payment-item, .project-item { padding: calc(var(--spacing-unit) * 0.5); }
   .skill-tags li { background-color: #eee; color: #000; padding: 2px 6px; font-size: 9pt; border-radius: 3px;}

   .page-footer { justify-content: flex-start; }
   .footer-quote { margin-right: 2em; }
   .footer-actions a[href*="github.com"] {
        display: inline-flex !important;
   }


}

/* CSS cho hiệu ứng fade-in của content-section */
@keyframes fadeInAnimation {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.content-section {
    opacity: 0;
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.content-section.visible {
    opacity: 1;
    animation: fadeInAnimation 0.8s ease-out forwards;
}


/* ================== Lightbox Styles ================== */
.lightbox-overlay {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3000;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0s linear 0.3s, background-color var(--transition-speed) ease;
}
.lightbox-overlay.visible {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.3s ease, visibility 0s linear 0s, background-color var(--transition-speed) ease;
}
.lightbox-overlay.hidden {
     display: none;
}

#lightbox-image {
    max-width: 90%;
    max-height: 85%;
    object-fit: contain;
    border-radius: var(--border-radius-medium);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
}

#lightbox-close {
    position: absolute;
    top: 20px;
    right: 30px;
    font-size: 3rem;
    color: #fff;
    cursor: pointer;
    transition: transform 0.2s ease, color var(--transition-speed) ease;
    line-height: 1;
    padding: var(--spacing-unit);
    background: rgba(0,0,0,0.3);
    border-radius: 50%;
}
#lightbox-close:hover, #lightbox-close:focus-visible {
    transform: scale(1.1);
    color: var(--color-accent-hover);
    background: rgba(0,0,0,0.5);
    outline: none;
}

/* --- Styles for PNG Icons (Đã có, giữ lại) --- */
.icon {
    display: inline-block;
    vertical-align: middle;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    object-fit: contain;
}

.profile-meta span .icon,
.profile-meta a .icon {
     margin-right: calc(var(--spacing-unit) * 0.75);
     width: 18px;
     height: 18px;
}

.bio-focus-list li .bio-focus-icon,
.contact-link-item .icon {
     width: 24px;
     height: 24px;
}


/* ================== Contact Links Styles (Đã có, giữ lại) ================== */
.contact-links-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: calc(var(--spacing-unit) * 2);
    margin-top: calc(var(--spacing-unit) * 3);
}

.contact-link-item {
    display: flex;
    align-items: center;
    gap: calc(var(--spacing-unit) * 1.5);
    padding: calc(var(--spacing-unit) * 1.5);
    background-color: var(--color-bg-dark-1);
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius-medium);
    color: var(--color-text-light);
    text-decoration: none;
    transition: background-color var(--transition-speed) ease,
                transform var(--transition-speed) ease,
                border-color var(--transition-speed) ease,
                color var(--transition-speed) ease,
                box-shadow var(--transition-speed) ease;
}

.contact-link-item:hover,
.contact-link-item:focus-visible {
    background-color: var(--color-bg-dark-2);
    border-color: var(--color-accent);
    transform: translateY(-3px);
    color: var(--color-accent-hover);
    text-decoration: none;
    box-shadow: 0 3px 10px rgba(88, 166, 255, 0.1);
}

html[data-theme='light'] .contact-link-item {
     background-color: var(--color-bg-light-1);
     border: 1px solid var(--color-border-light);
     color: var(--color-text-dark);
}
html[data-theme='light'] .contact-link-item:hover,
html[data-theme='light'] .contact-link-item:focus-visible {
     background-color: var(--color-bg-light-2);
     border-color: var(--color-accent-light);
     color: var(--color-accent-hover-light);
     box-shadow: 0 3px 10px rgba(9, 105, 218, 0.08);
 }

 /* --- Testimonials --- */
.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: calc(var(--spacing-unit) * 3);
    margin-top: calc(var(--spacing-unit) * 2);
}

.testimonial-item {
    background-color: var(--color-bg-dark-1);
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius-medium);
    padding: calc(var(--spacing-unit) * 2.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

html[data-theme='light'] .testimonial-item {
    background-color: var(--color-bg-light-1);
    border-color: var(--color-border-light);
}

.testimonial-avatar {
    width: 80px;
    height: 80px;
    border-radius: var(--border-radius-circle);
    object-fit: cover;
    margin-bottom: calc(var(--spacing-unit) * 2);
    border: 2px solid var(--color-accent);
}

.testimonial-content blockquote {
    margin-bottom: calc(var(--spacing-unit) * 1.5);
    font-style: italic;
    color: var(--color-text-secondary);
    position: relative;
    padding: 0 calc(var(--spacing-unit) * 1.5);
}
.testimonial-content blockquote p {
    margin-bottom: 0;
}

.testimonial-content blockquote::before,
.testimonial-content blockquote::after {
    content: '"';
    font-size: 2.5rem;
    color: var(--color-accent);
    opacity: 0.6;
    position: absolute;
    line-height: 1;
}

.testimonial-content blockquote::before {
    top: -5px;
    left: -5px;
}

.testimonial-content blockquote::after {
    bottom: -15px;
    right: -5px;
}


.testimonial-content cite {
    font-weight: 600;
    color: var(--color-text-light);
    font-style: normal;
}
.testimonial-content cite span {
    display: block;
    font-size: 0.9rem;
    color: var(--color-text-secondary);
    margin-top: calc(var(--spacing-unit) * 0.5);
}

/* ================== Click Emoji Effect ================== */
.click-emoji {
    position: absolute;
    font-size: 1.5rem;
    user-select: none;
    pointer-events: none;
    z-index: 9999;
    animation: floatUpAndFade 1s ease-out forwards;
}

@keyframes floatUpAndFade {
    0% {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
    100% {
        opacity: 0;
        transform: translateY(-60px) scale(1.5);
    }
}
/* ================== Skills Category Styles ================== */
.skill-category {
    background-color: var(--color-bg-dark-1);
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius-medium);
    padding: calc(var(--spacing-unit) * 2.5);
    margin-bottom: calc(var(--spacing-unit) * 3);
    display: flex;
    flex-direction: column;
    gap: calc(var(--spacing-unit) * 1.5);
}

/* ================== Toast Notifications ================== */
#toast-container {
    position: fixed;
    top: calc(var(--spacing-unit) * 2.5);
    right: calc(var(--spacing-unit) * 2.5);
    z-index: 10002;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: calc(var(--spacing-unit) * 1.25);
    width: auto;
    max-width: calc(100% - var(--spacing-unit) * 5);
}

.toast {
    background-color: var(--color-bg-dark-3);
    color: var(--color-text-light);
    padding: calc(var(--spacing-unit) * 1.8) calc(var(--spacing-unit) * 2.5);
    border-radius: var(--border-radius-medium);
    box-shadow: var(--shadow-large);
    display: flex;
    align-items: center;
    gap: calc(var(--spacing-unit) * 1.25);
    font-size: 0.95rem;
    border-left: 5px solid transparent;
    word-break: break-word;
    min-width: 280px;
    max-width: 350px;

    opacity: 0;
    transform: translateX(120%);
    transition: opacity var(--transition-speed-slow) cubic-bezier(0.25, 0.46, 0.45, 0.94),
                transform var(--transition-speed-slow) cubic-bezier(0.25, 0.46, 0.45, 0.94);
    pointer-events: none;
}

.toast.show {
    opacity: 1;
    transform: translateX(0);
    pointer-events: auto;
}

.toast.hide {
    opacity: 0 !important;
    transform: translateX(120%) !important;
    pointer-events: none !important;
}

.toast i {
    font-size: 1.3em;
    line-height: 1;
    flex-shrink: 0;
}

.toast-success {
    border-left-color: var(--color-success);
    background-color: var(--color-success);
    color: white;
}
.toast-error   {
    border-left-color: var(--color-danger);
    background-color: var(--color-danger);
    color: white;
}
.toast-info    {
    border-left-color: var(--color-accent);
    background-color: var(--color-accent);
    color: var(--color-bg-dark-1);
}
.toast-warning {
    border-left-color: #ffc107;
    background-color: #ffc107;
    color: var(--color-text-dark);
}

html[data-theme='light'] .toast {
    background-color: var(--color-bg-light-1);
    color: var(--color-text-dark);
    box-shadow: 0 4px 18px rgba(0,0,0,0.15);
    border: 1px solid var(--color-border-light);
    border-left-width: 5px;
}
html[data-theme='light'] .toast-success,
html[data-theme='light'] .toast-error,
html[data-theme='light'] .toast-info {
    color: white;
}
html[data-theme='light'] .toast-info {
    background-color: var(--color-accent-light);
    border-left-color: var(--color-accent-light);
}
html[data-theme='light'] .toast-warning {
    color: var(--color-text-dark)
}

/* ================== [NÂNG CẤP] Main Navigation ================== */
.main-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--nav-height);
    z-index: 1001;
    background-color: rgba(13, 17, 23, 0.8);
    backdrop-filter: blur(8px);
    border-bottom: 1px solid var(--color-border);
    transition: top 0.3s ease-in-out, background-color var(--transition-speed) ease, border-color var(--transition-speed) ease;
}
.main-nav.nav-hidden {
    top: -100px;
}
.nav-container {
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    padding: 0 calc(var(--spacing-unit) * 2.5);
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.nav-logo {
    font-family: var(--font-headings);
    font-weight: 700;
    font-size: 1.25rem;
    text-decoration: none;
}
.nav-logo:hover {
    text-decoration: none;
}
.nav-links {
    display: flex;
    align-items: center;
    gap: calc(var(--spacing-unit) * 3);
}
.nav-link {
    font-size: 0.95rem;
    font-weight: 500;
    text-decoration: none;
    position: relative;
    padding: calc(var(--spacing-unit) * 0.5) 0;
}
.nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--color-accent);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease-out;
}
.nav-link:hover::after, .nav-link.active::after {
    transform: scaleX(1);
    transform-origin: left;
}
.nav-controls {
    display: flex;
    align-items: center;
    gap: calc(var(--spacing-unit) * 0.5);
}
.nav-control-btn {
    background: transparent;
    border: none;
    color: var(--color-text-secondary);
    width: 36px;
    height: 36px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    transition: color 0.2s, background-color 0.2s;
}
.nav-control-btn:hover {
    color: var(--color-text-light);
    background-color: var(--color-border);
}
.nav-mobile-toggle {
    display: none;
    background: transparent;
    border: none;
    color: var(--color-text-light);
    font-size: 1.5rem;
    cursor: pointer;
}

/* ================== Main Content ================== */
.main-container {
    padding-top: calc(var(--nav-height) + var(--spacing-unit) * 4);
    margin-top: 0;
}

/* ================== General Styles & Reset ================== */
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
}

*:focus-visible {
   outline: 2px solid var(--color-accent-hover);
   outline-offset: 2px;
   box-shadow: 0 0 0 3px var(--color-focus-shadow);
}

html {
    scroll-behavior: smooth;
    font-size: var(--font-size-base);
}

body {
    font-family: 'Roboto', sans-serif;
    background-color: var(--color-bg-dark-1);
    color: var(--color-text-light);
    line-height: var(--line-height-base);
    overflow-x: hidden;
    position: relative;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body.cursor-effect-disabled {
    cursor: auto;
}

body.matrix-mode {
    --color-accent: #00ff41;
    --color-accent-hover: #5ff98c;
    --color-success: #00ff41;
}

a {
    color: var(--color-accent);
    text-decoration: none;
    transition: color var(--transition-speed) ease;
}

a:hover,
a:focus-visible {
    color: var(--color-accent-hover);
    text-decoration: underline;
}

img, svg {
    max-width: 100%;
    height: auto;
    display: block;
}

h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-headings);
    font-weight: 700;
    margin-bottom: calc(var(--spacing-unit) * 1.5);
    color: var(--color-text-headings);
    line-height: 1.3;
}

h1 { font-size: 2.25rem; }
h2 { font-size: 1.75rem; margin-bottom: calc(var(--spacing-unit) * 3); }
h3 { font-size: 1.25rem; }
h4 { font-size: 1.1rem; }

/* ================== Utility Classes ================== */
.mb-1 { margin-bottom: var(--spacing-unit); }
.mb-2 { margin-bottom: calc(var(--spacing-unit) * 2); }
.mb-3 { margin-bottom: calc(var(--spacing-unit) * 3); }
.mt-1 { margin-top: var(--spacing-unit); }
.mt-2 { margin-top: calc(var(--spacing-unit) * 2); }
.mt-3 { margin-top: calc(var(--spacing-unit) * 3); }

.text-center { text-align: center; }
.text-danger { color: var(--color-danger); }
.text-success { color: var(--color-success); }
.text-secondary { color: var(--color-text-secondary); }

.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
}


/* ================== Buttons ================== */
.btn {
    font-family: inherit;
    font-weight: 600;
    padding: calc(var(--spacing-unit) * 1.25) calc(var(--spacing-unit) * 2.5);
    border: 1px solid transparent;
    border-radius: var(--border-radius-medium);
    cursor: pointer;
    transition: background-color var(--transition-speed) ease, color var(--transition-speed) ease, border-color var(--transition-speed) ease, transform var(--transition-speed) ease, box-shadow var(--transition-speed) ease;
    display: inline-flex; /* Use flex for easier alignment of icons */
    align-items: center;
    justify-content: center;
    gap: calc(var(--spacing-unit) * 0.75);
    text-align: center;
    white-space: nowrap;
    user-select: none;
    vertical-align: middle;
}

.btn:hover,
.btn:focus-visible {
    transform: translateY(-3px) scale(1.03);
    box-shadow: 0 6px 12px rgba(var(--color-accent-rgb, 88, 166, 255), 0.3);
}

.btn-primary {
    background-color: var(--color-accent);
    color: var(--color-bg-dark-1);
    border-color: var(--color-accent);
}
.btn-primary:hover,
.btn-primary:focus-visible {
    background-color: var(--color-accent-hover);
    border-color: var(--color-accent-hover);
    color: var(--color-bg-dark-1);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(88, 166, 255, 0.2);
}

.btn-secondary {
    background-color: transparent;
    border: 1px solid var(--color-border);
    color: var(--color-text-light);
}
.btn-secondary:hover,
.btn-secondary:focus-visible {
    background-color: var(--color-bg-dark-2);
    border-color: var(--color-text-secondary);
    color: var(--color-text-light);
}

.btn-tertiary {
    background-color: var(--color-border);
    color: var(--color-text-secondary);
    border-color: var(--color-border);
}
.btn-tertiary:hover,
.btn-tertiary:focus-visible {
    background-color: #444c56;
    color: var(--color-text-light);
    border-color: #444c56;
}

.btn-danger {
    background-color: var(--color-danger);
    color: #fff;
    border-color: var(--color-danger);
}
.btn-danger:hover,
.btn-danger:focus-visible {
    background-color: #d73a49;
    border-color: #d73a49;
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(248, 81, 73, 0.2);
}

.btn-small {
    padding: var(--spacing-unit) calc(var(--spacing-unit) * 1.5);
    font-size: 0.875rem;
}

/* ================== Loading Screen ================== */
#loading-screen {
    background-color: var(--color-bg-dark-1);
    text-align: center;
}

.loading-bar {
    height: 10px;
    position: relative;
    margin: calc(var(--spacing-unit) * 2.5) auto 0 auto;
    overflow: hidden;
    border-radius: 5px;
    background-color: var(--color-border);
    transform-origin: left center;
}

.loading-bar::after {
    content: '';
    display: block;
    height: 100%;
    width: 0%;
    background: linear-gradient(90deg, var(--color-accent), var(--color-accent-hover));
    border-radius: 5px;
    animation: fill-loading-bar 3s linear forwards;
}

@keyframes fill-loading-bar {
    0% { width: 0%; }
    100% { width: 100%; }
}

.loading-bar.finished::after {
    animation: none;
    width: 100%;
}


.loading-avatar {
    width: 100px;
    height: 100px;
    border-radius: var(--border-radius-circle);
    margin-bottom: calc(var(--spacing-unit) * 2.5);
    object-fit: cover;
    animation: pulse-avatar 2s infinite ease-in-out;
}

@keyframes pulse-avatar {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}

#loading-screen h1 {
    font-size: 1.5rem;
    color: var(--color-text-headings);
    margin-bottom: var(--spacing-unit);
}
#loading-screen p {
    font-size: 0.9rem;
    color: var(--color-text-secondary);
}

/* ================== Screen Management & Transitions ================== */
.screen {
    min-height: 100vh;
    width: 100%;
    position: fixed;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    z-index: 100;
    transition: opacity 0.6s ease-in-out, transform 0.6s ease-in-out, visibility 0s linear 0.6s;
    overflow: hidden;
}

.screen.active {
    opacity: 1;
    visibility: visible;
    z-index: 101;
    transform: translateY(0);
    transition: opacity 0.6s ease-in-out, transform 0.6s ease-in-out, visibility 0s linear 0s;
}

.screen.fade-out {
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 0.6s ease-in-out, transform 0.6s ease-in-out, visibility 0s linear 0.6s;
}

#loading-screen {
    transform: translateY(-20px);
}

#loading-screen.active {
     transform: translateY(0);
}


/* ================== Lobby Screen ================== */
#lobby-screen {
    color: var(--color-text-light);
    text-align: center;
    cursor: pointer;
    transform: translateY(-20px);
}

#lobby-screen.active {
     transform: translateY(0);
}

#lobby-screen::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url('../assets/alina.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
    filter: brightness(0.6);
    transition: filter var(--transition-speed) ease;
}

.lobby-content {
    background-color: rgba(0, 0, 0, 0.65);
    padding: calc(var(--spacing-unit) * 5);
    border-radius: var(--border-radius-medium);
    max-width: 650px;
    width: 90%;
    box-shadow: var(--shadow-medium);
    transition: transform var(--transition-speed) ease, box-shadow var(--transition-speed) ease, background-color var(--transition-speed) ease, border-color var(--transition-speed) ease;
    position: relative;
    z-index: 1;
    border: 1px solid rgba(255, 255, 255, 0.1);
}
#lobby-screen:hover .lobby-content {
    transform: scale(1.02);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.lobby-icon img {
    width: 100px;
    height: 100px;
    margin: 0 auto calc(var(--spacing-unit) * 2.5) auto;
    border-radius: var(--border-radius-circle);
    padding: var(--spacing-unit);
    background: rgba(255, 255, 255, 0.1);
    transition: background-color var(--transition-speed) ease;
}

#lobby-screen h2 {
    font-size: 2.5rem;
    margin-bottom: calc(var(--spacing-unit) * 2);
    letter-spacing: 1.5px;
    text-shadow: 2px 2px 6px rgba(0,0,0,0.7);
    transition: color var(--transition-speed) ease, text-shadow var(--transition-speed) ease;
}

#lobby-screen p {
    font-size: 1.1rem;
    max-width: 480px;
    margin: 0 auto;
    line-height: 1.8;
    transition: color var(--transition-speed) ease;
}

#music-selector-container {
    margin-top: calc(var(--spacing-unit) * 3);
    text-align: center;
}

#music-selector-icon {
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: transform var(--transition-speed) ease, opacity var(--transition-speed) ease;
}

#music-selector-icon:hover {
    transform: scale(1.1);
    opacity: 0.8;
}

/* ================== Song Selection Modal ================== */
#song-selection-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1500;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0s linear 0.3s;
}

#song-selection-modal.active {
     opacity: 1;
     visibility: visible;
     transition: opacity 0.3s ease, visibility 0s linear 0s;
}

#song-selection-modal.hidden {
    display: none;
}

.modal-content {
    background-color: var(--color-bg-dark-2);
    padding: calc(var(--spacing-unit) * 3);
    border-radius: var(--border-radius-medium);
    border: 1px solid var(--color-border);
    box-shadow: var(--shadow-medium);
    max-width: 400px;
    width: 90%;
    text-align: left;
    transform: scale(0.95);
    opacity: 0;
    transition: transform 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28), opacity 0.3s ease, background-color var(--transition-speed) ease, border-color var(--transition-speed) ease;
}

#song-selection-modal.active .modal-content {
    transform: scale(1);
    opacity: 1;
}


.modal-content h3 {
    margin-top: 0;
    margin-bottom: calc(var(--spacing-unit) * 2);
    color: var(--color-text-headings);
}

#song-list {
    list-style: none;
    padding: 0;
    margin: 0 0 calc(var(--spacing-unit) * 2) 0;
}

#song-list li {
    padding: var(--spacing-unit);
    cursor: pointer;
    border-bottom: 1px solid var(--color-border);
    transition: background-color var(--transition-speed) ease, color var(--transition-speed) ease, border-color var(--transition-speed) ease;
    color: var(--color-text-light);
    border-radius: var(--border-radius-small);
}
#song-list li:last-child {
    border-bottom: none;
}
#song-list li:hover, #song-list li:focus-visible {
    background-color: var(--color-border);
    color: var(--color-accent-hover);
    outline: none;
}


#close-modal {
    display: block;
    width: 100%;
    margin-top: calc(var(--spacing-unit) * 2);
}

/* ================== [NÂNG CẤP] Blog Section ================== */
.blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: calc(var(--spacing-unit) * 3);
}
.blog-card {
    background-color: var(--color-bg-dark-1);
    border-radius: var(--border-radius-medium);
    overflow: hidden;
    box-shadow: var(--shadow-soft);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid var(--color-border);
}
.blog-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-medium);
}
.blog-card-link {
    text-decoration: none;
    color: inherit;
    display: block;
    height: 100%;
}
.blog-card-link:hover {
    text-decoration: none;
}
.blog-card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
}
.blog-card-content {
    padding: calc(var(--spacing-unit) * 2);
}
.blog-card-category {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--color-accent);
    margin-bottom: var(--spacing-unit);
}
.blog-card-title {
    font-size: 1.2rem;
    color: var(--color-text-headings);
    margin-bottom: calc(var(--spacing-unit) * 1.5);
}
.blog-card-excerpt {
    font-size: 0.9rem;
    color: var(--color-text-secondary);
    line-height: 1.6;
}
.blog-card-readmore {
    display: inline-block;
    margin-top: calc(var(--spacing-unit) * 2);
    font-weight: 600;
    color: var(--color-accent);
    transition: color 0.2s;
}
.blog-card-readmore i {
    margin-left: calc(var(--spacing-unit) * 0.5);
    transition: transform 0.2s;
}
.blog-card:hover .blog-card-readmore i {
    transform: translateX(4px);
}

/* ================== [NÂNG CẤP] Contact Form Styles ================== */
.contact-form-wrapper {
    margin-top: calc(var(--spacing-unit) * 4);
    padding: calc(var(--spacing-unit) * 3);
    background-color: var(--color-bg-dark-1);
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius-medium);
}
#contact-form {
    display: flex;
    flex-direction: column;
    gap: calc(var(--spacing-unit) * 2);
}
.form-group {
    display: flex;
    flex-direction: column;
}
.form-actions {
    display: flex;
    align-items: center;
    gap: calc(var(--spacing-unit) * 2);
    margin-top: var(--spacing-unit);
}
.form-status-message {
    font-size: 0.9rem;
    color: var(--color-text-secondary);
    transition: color 0.3s ease;
}
.form-status-message.success { color: var(--color-success); }
.form-status-message.error { color: var(--color-danger); }
.contact-methods { 
    margin-top: calc(var(--spacing-unit) * 6); 
}
.contact-subtitle {
    font-size: 1.15rem;
    color: var(--color-text-secondary);
    text-align: center;
    margin-bottom: calc(var(--spacing-unit) * 3);
}

/* ================== [NÂNG CẤP] Command Palette ================== */
#command-palette-overlay .prompt-box {
    padding: 0;
    max-width: 600px;
    width: calc(100% - 40px);
    overflow: hidden;
    display: flex;
    flex-direction: column;
}
.command-palette-header {
    display: flex;
    align-items: center;
    gap: calc(var(--spacing-unit) * 1.5);
    padding: calc(var(--spacing-unit) * 1.5);
    border-bottom: 1px solid var(--color-border);
    color: var(--color-text-secondary);
}
#command-palette-input {
    width: 100%;
    background: transparent;
    border: none;
    color: var(--color-text-light);
    font-size: 1.2rem;
    padding: 0;
}
#command-palette-results {
    list-style: none;
    padding: var(--spacing-unit);
    margin: 0;
    max-height: 40vh;
    overflow-y: auto;
}
#command-palette-results li {
    padding: calc(var(--spacing-unit) * 1.25);
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--border-radius-small);
    transition: background-color 0.15s ease, color 0.15s ease;
}
#command-palette-results li.selected {
    background-color: var(--color-accent);
    color: var(--color-bg-dark-1);
}
#command-palette-results li.selected .command-item-type {
    color: var(--color-bg-dark-1);
    opacity: 0.7;
}
.command-item-title {
    display: flex;
    align-items: center;
    gap: var(--spacing-unit);
}
.command-item-type {
    font-size: 0.8rem;
    color: var(--color-text-secondary);
}
.command-palette-footer {
    font-size: 0.8rem;
    text-align: center;
    padding: var(--spacing-unit);
    border-top: 1px solid var(--color-border);
    color: var(--color-text-secondary);
    background-color: var(--color-bg-dark-1);
}
kbd {
    background-color: var(--color-border);
    padding: 2px 6px;
    border-radius: 4px;
    font-family: monospace;
    border-bottom: 2px solid rgba(0,0,0,0.2);
}

/* ================== [EASTER EGG] Styles ================== */
#matrix-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9998;
    display: none;
    background-color: #000;
}
.profile-avatar-container.party-mode .profile-avatar {
    animation: party-time 0.5s linear infinite;
}
@keyframes party-time {
    0% { filter: hue-rotate(0deg); }
    100% { filter: hue-rotate(360deg); }
}

/* ================== Responsive Design ================== */
@media (max-width: 768px) {
    .main-container {
        padding-top: calc(var(--nav-height) + var(--spacing-unit) * 2);
    }
    .main-nav {
        padding: 0 var(--spacing-unit);
    }
    .nav-links {
        position: fixed;
        top: var(--nav-height);
        left: 0;
        width: 100%;
        height: calc(100vh - var(--nav-height));
        background-color: var(--color-bg-dark-2);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: calc(var(--spacing-unit) * 4);
        transform: translateX(-100%);
        transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    }
    .nav-links.active {
        transform: translateX(0);
    }
    .nav-link {
        font-size: 1.5rem;
    }
    .nav-mobile-toggle {
        display: block;
        z-index: 1002;
    }
    .nav-controls {
        display: none;
    }
    .footer-actions {
        width: 100%;
        margin-top: var(--spacing-unit);
        justify-content: flex-start;
    }
}
@media (max-width: 480px) {
    :root {
        --spacing-unit: 6px;
        --font-size-base: 14px;
    }
    h1 { font-size: 1.8rem; }
    h2 { font-size: 1.4rem; }
    h3 { font-size: 1.1rem; }

    .btn { padding: calc(var(--spacing-unit) * 1.2) calc(var(--spacing-unit) * 2); }
    .btn-small { padding: calc(var(--spacing-unit) * 0.8) calc(var(--spacing-unit) * 1.2); }

    .lobby-content { padding: calc(var(--spacing-unit) * 4); max-width: 95%; }
    #lobby-screen h2 { font-size: 2rem; }
    #lobby-screen p { font-size: 1rem; }

    .profile-avatar { width: 70px; height: 70px; }
    .profile-details h1 { font-size: 1.6rem; }
    .main-container { margin-top: calc(var(--spacing-unit) * 5); padding: 0 var(--spacing-unit); }

    #controls-container {
        bottom: var(--spacing-unit);
        right: var(--spacing-unit);
    }
    #volume-btn {
        width: 35px;
        height: 35px;
        font-size: 18px;
    }
    #clock {
        font-size: 0.85rem;
        padding: calc(var(--spacing-unit) * 0.4) calc(var(--spacing-unit) * 0.8);
    }
     #volume-slider {
        width: 70px;
    }

    .prompt-box {
        padding: calc(var(--spacing-unit) * 3);
    }
    .prompt-box p {
        font-size: 1rem;
    }
     .prompt-checkbox-area {
        font-size: 0.85rem;
    }
    .prompt-buttons {
        flex-direction: column;
        gap: var(--spacing-unit);
    }
    .prompt-buttons .btn {
        width: 100%;
    }

    .project-item h3 {
        font-size: 1.15rem;
    }
    .project-item p {
        font-size: 0.9rem;
    }
    .featured-link-actions {
        flex-direction: column;
    }
    .featured-link-actions .btn {
        width: 100%;
    }

}

/* ================== Print Styles ================== */
@media print {
   :root {
       --color-bg-dark-1: #ffffff;
       --color-bg-dark-2: #ffffff;
       --color-border: #dddddd;
       --color-text-light: #000000;
       --color-text-secondary: #333333;
       --color-text-headings: #000000;
       --color-accent: #0000ff;
       --color-accent-hover: #0000ff;
   }

   body {
       background-color: var(--color-bg-dark-1);
       color: var(--color-text-light);
       font-size: 11pt;
       line-height: 1.4;
   }

   #loading-screen,
   #lobby-screen,
   #controls-container,
   .prompt-overlay,
   .page-footer .footer-actions button,
   .profile-header .btn,
   #bio .btn,
   .featured-link-actions,
   .skill-tags li:hover,
   .loading-bar,
   .status-indicator,
   .verified-badge,
   #music-selector-container,
   #song-selection-modal,
   #lightbox-overlay,
   #custom-cursor-element,
   #cursor-trail
   {
       display: none !important;
   }

   #main-content, #main-content.active {
       position: static !important;
       display: block !important;
       opacity: 1 !important;
       visibility: visible !important;
       min-height: auto !important;
       overflow: visible !important;
       transform: none !important;
   }

   .main-container {
       max-width: 100%;
       margin: 2cm auto;
       padding: 0 1cm;
   }

   .content-section,
   .payment-item,
   .project-item,
   .profile-header,
   .page-footer {
       border: 1px solid var(--color-border);
       box-shadow: none;
       background-color: transparent;
       margin-bottom: calc(var(--spacing-unit) * 1.5);
       padding: calc(var(--spacing-unit) * 0.75);
       break-inside: avoid;
   }

    .featured-link-thumbnail {
        max-height: 150px;
        border: 1px solid #ccc;
        filter: grayscale(100%);
    }
    .project-item h3, .project-item p {
        color: #000 !important;
    }


   h1, h2, h3, h4, h5, h6 {
       color: var(--color-text-headings);
       break-after: avoid;
   }

   a {
       color: var(--color-accent);
       text-decoration: underline;
   }
   a[href^="http"]::after {
       content: " (" attr(href) ")";
       font-size: 9pt;
       color: #555;
       word-break: break-all;
   }
   a[href^="#"]::after, a:not([href])::after, a[href^="mailto:"]::after, a[href^="tel:"]::after {
       content: "";
   }


   .profile-avatar, .payment-logo {
       border: 1px solid #ccc;
       box-shadow: none;
       transform: none !important;
       filter: grayscale(100%);
       padding: 2px;
   }
   .payment-logo {
       height: 16px;
       max-width: 30px;
   }

   .payment-grid, .skills-grid, .projects-grid {
       grid-template-columns: 1fr;
       gap: calc(var(--spacing-unit) * 0.5);
   }
   .payment-item, .project-item { padding: calc(var(--spacing-unit) * 0.5); }
   .skill-tags li { background-color: #eee; color: #000; padding: 2px 6px; font-size: 9pt; border-radius: 3px;}

   .page-footer { justify-content: flex-start; }
   .footer-quote { margin-right: 2em; }
   .footer-actions a[href*="github.com"] {
        display: inline-flex !important;
   }


}

/* CSS cho hiệu ứng fade-in của content-section */
@keyframes fadeInAnimation {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.content-section {
    opacity: 0;
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.content-section.visible {
    opacity: 1;
    animation: fadeInAnimation 0.8s ease-out forwards;
}
/* ================== [NÂNG CẤP] Terminal Section (Bio) ================== */
.terminal-window {
    background-color: #010409;
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius-medium);
    box-shadow: var(--shadow-medium);
    overflow: hidden;
    font-family: 'JetBrains Mono', monospace;
}

.terminal-header {
    background-color: #21262d;
    padding: calc(var(--spacing-unit) * 1);
    display: flex;
    align-items: center;
    position: relative;
}

.terminal-buttons {
    display: flex;
    gap: var(--spacing-unit);
    position: absolute;
    left: calc(var(--spacing-unit) * 1.5);
    top: 50%;
    transform: translateY(-50%);
}

.terminal-button {
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
}
.terminal-button.red { background-color: #ff5f56; }
.terminal-button.yellow { background-color: #ffbd2e; }
.terminal-button.green { background-color: #27c93f; }

.terminal-title {
    color: var(--color-text-secondary);
    font-size: 0.85rem;
    text-align: center;
    width: 100%;
}

.terminal-body {
    padding: calc(var(--spacing-unit) * 2);
    min-height: 250px;
    max-height: 320px;
    font-size: 0.95rem;
    line-height: 1.8;
    overflow-y: auto;
}

.terminal-line {
    display: flex;
    white-space: pre-wrap;
    word-break: break-all;
}

.terminal-line .prompt {
    color: var(--color-success);
    margin-right: var(--spacing-unit);
    flex-shrink: 0;
}

.terminal-line .prompt.user {
    color: #c586c0; /* Magenta-like color for user */
}

.terminal-line .command {
    color: var(--color-text-light);
}

.terminal-line .output {
    color: var(--color-text-light);
}

.terminal-line .cursor {
    display: inline-block;
    background-color: var(--color-text-light);
    width: 8px;
    height: 1.2em;
    animation: blink 1s steps(1) infinite;
    vertical-align: middle;
    margin-left: 4px;
}

@keyframes blink {
    50% {
        opacity: 0;
    }
}

/* ================== [NÂNG CẤP] Skills Tooltip ================== */
.skill-tags li {
    position: relative;
}

.skill-tooltip {
    position: absolute;
    bottom: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--color-bg-dark-3);
    color: var(--color-text-light);
    padding: var(--spacing-unit) calc(var(--spacing-unit) * 1.5);
    border-radius: var(--border-radius-small);
    box-shadow: var(--shadow-medium);
    z-index: 10;
    width: 220px;
    font-size: 0.85rem;
    
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: opacity var(--transition-speed-fast) ease, transform var(--transition-speed-fast) ease;
    transform-origin: bottom center;
}

.skill-tags li:hover .skill-tooltip {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(-5px);
}

.skill-tooltip-title {
    font-weight: bold;
    margin-bottom: calc(var(--spacing-unit) * 0.5);
    color: var(--color-text-headings);
}

.tooltip-section {
    margin-top: var(--spacing-unit);
}

.tooltip-progress-bar {
    width: 100%;
    height: 8px;
    background-color: var(--color-border);
    border-radius: 4px;
    overflow: hidden;
    margin-top: calc(var(--spacing-unit) * 0.5);
}

.tooltip-progress {
    height: 100%;
    background-color: var(--color-accent);
    border-radius: 4px;
    transition: width var(--transition-speed) ease-out;
}

.tooltip-projects-list {
    margin-top: calc(var(--spacing-unit) * 0.5);
    color: var(--color-text-secondary);
}


@keyframes pulse-accent {
    0% { box-shadow: 0 0 0 0 rgba(var(--color-accent-rgb), 0.7); }
    70% { box-shadow: 0 0 0 10px rgba(var(--color-accent-rgb), 0); }
    100% { box-shadow: 0 0 0 0 rgba(var(--color-accent-rgb), 0); }
}

/* ================== [NÂNG CẤP] Focus Mode ================== */
body[data-focus-mode="true"] {
    background-color: var(--color-bg-dark-1);
}

body[data-focus-mode="true"] .main-nav .nav-controls button:not(#focus-mode-toggle),
body[data-focus-mode="true"] .main-nav .nav-links,
body[data-focus-mode="true"] #lobby-screen::before,
body[data-focus-mode="true"] #custom-cursor-element,
body[data-focus-mode="true"] #cursor-trail,
body[data-focus-mode="true"] .profile-avatar-container,
body[data-focus-mode="true"] #controls-container,
body[data-focus-mode="true"] #background-audio,
body[data-focus-mode="true"] .projects-carousel-wrapper .carousel-control,
body[data-focus-mode="true"] .testimonials-carousel-wrapper .carousel-control {
    display: none !important;
}

body[data-focus-mode="true"] .content-section {
    background-color: transparent;
    border: none;
    box-shadow: none;
    padding-left: 0;
    padding-right: 0;
}

#focus-mode-toggle.active {
    color: var(--color-accent) !important;
}

/* ================== [NÂNG CẤP] Achievements ================== */
#achievement-container {
    position: fixed;
    bottom: var(--spacing-unit);
    left: var(--spacing-unit);
    z-index: 10003;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-unit);
}

.achievement-popup {
    background-color: var(--color-bg-dark-3);
    color: var(--color-text-light);
    padding: calc(var(--spacing-unit) * 1.5) calc(var(--spacing-unit) * 2);
    border-radius: var(--border-radius-medium);
    box-shadow: var(--shadow-large);
    display: flex;
    align-items: center;
    gap: calc(var(--spacing-unit) * 1.5);
    min-width: 250px;
    max-width: 320px;
    border-left: 4px solid #ffd700; /* Gold color */
    animation: slideInFromLeft 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.achievement-popup.fade-out {
    animation: fadeOutToLeft 0.5s ease-out forwards;
}

.achievement-icon {
    font-size: 1.8rem;
    color: #ffd700;
}

.achievement-details h4 {
    font-size: 0.9rem;
    margin: 0;
    color: var(--color-text-headings);
}

.achievement-details p {
    font-size: 0.8rem;
    margin: 0;
    color: var(--color-text-secondary);
}

@keyframes slideInFromLeft {
    from {
        opacity: 0;
        transform: translateX(-100%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeOutToLeft {
    from {
        opacity: 1;
        transform: translateX(0);
    }
    to {
        opacity: 0;
        transform: translateX(-100%);
    }
}


/* ================== [CẬP NHẬT] Light Theme Adjustments ================== */
html[data-theme='light'] {
    /* Terminal */
    .terminal-window {
        background-color: #F9FAFB;
        border-color: var(--color-border-light);
    }
    .terminal-header {
        background-color: #E5E7EB;
    }
    .terminal-title {
        color: #4B5563;
    }
    .terminal-body {
        color: var(--color-text-dark);
    }
    .terminal-line .prompt { color: #16A34A; }
    .terminal-line .prompt.user { color: #9333EA; }
    .terminal-line .command { color: var(--color-text-dark); }
    .terminal-line .output { color: var(--color-text-dark); }
    .terminal-line .cursor { background-color: var(--color-text-dark); }

    /* Skills Tooltip */
    .skill-tooltip {
        background-color: var(--color-bg-light-1);
        color: var(--color-text-dark);
        border: 1px solid var(--color-border-light);
    }

    /* Roadmap */
    .roadmap-container::before { background-color: var(--color-border-light); }
    .roadmap-point { background-color: var(--color-bg-light-1); border-color: var(--color-border-light); }
    .roadmap-item[data-status="done"] .roadmap-point { background-color: var(--color-success); border-color: var(--color-success); }
    .roadmap-item[data-status="in-progress"] .roadmap-point { background-color: var(--color-accent-light); border-color: var(--color-accent-light); }
    .roadmap-status.in-progress { background-color: var(--color-accent-light); color: #fff; }
    .roadmap-status.planned { background-color: #E5E7EB; color: #4B5563; }

    /* Achievements */
    .achievement-popup {
        background-color: var(--color-bg-light-1);
        border: 1px solid var(--color-border-light);
        border-left-width: 4px;
        border-left-color: #f59e0b; /* Amber color for light mode */
    }
    .achievement-icon { color: #f59e0b; }
}
.terminal-prompt-line .caret {
    display: inline-block;
    width: 1ch;
    background: none;
    color: #fff;
    animation: blink-caret 1s steps(1) infinite;
}
@keyframes blink-caret {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
}
/* Tùy biến thanh cuộn cho terminal-body */
.terminal-body {
    scrollbar-width: thin;
    scrollbar-color: #444 #161B22; /* thumb, track */
}

/* Chrome, Edge, Safari */
.terminal-body::-webkit-scrollbar {
    width: 7px;
    background: #161B22;
    border-radius: 8px;
}
.terminal-body::-webkit-scrollbar-thumb {
    background: #444;
    border-radius: 8px;
}
.terminal-body::-webkit-scrollbar-thumb:hover {
    background: #666;
}
/* Roadmap đẹp hơn */
.roadmap-container {
    position: relative;
    padding-left: 36px;
    margin-left: 0;
    border-left: 3px solid var(--color-accent);
    margin-bottom: 0;
}

.roadmap-item {
    position: relative;
    margin-bottom: 40px;
    padding-left: 24px;
    transition: background 0.3s;
}

.roadmap-item:last-child {
    margin-bottom: 0;
}

.roadmap-point {
    position: absolute;
    left: -36px;
    top: 10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 4px solid var(--color-accent);
    background: var(--color-bg-dark-1);
    box-shadow: 0 0 0 4px var(--color-bg-dark-2);
    z-index: 2;
    transition: border 0.3s, background 0.3s;
}

.roadmap-item[data-status="done"] .roadmap-point {
    border-color: var(--color-success);
    background: var(--color-success);
}
.roadmap-item[data-status="in-progress"] .roadmap-point {
    border-color: var(--color-accent);
    background: var(--color-accent);
    animation: pulse-accent 2s infinite;
}
.roadmap-item[data-status="planned"] .roadmap-point {
    border-color: var(--color-border);
    background: var(--color-bg-dark-1);
}

.roadmap-content {
    background: rgba(32, 38, 50, 0.85);
    border-radius: 10px;
    padding: 18px 24px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.10);
    border: 1px solid var(--color-border);
    margin-left: 0;
    transition: background 0.3s;
}

.roadmap-date {
    font-size: 0.9rem;
    color: var(--color-accent);
    font-weight: 600;
    margin-bottom: 6px;
    display: block;
}

.roadmap-title {
    font-size: 1.15rem;
    color: var(--color-text-headings);
    font-weight: 700;
    margin-bottom: 6px;
}

.roadmap-desc {
    font-size: 0.98rem;
    color: var(--color-text-light);
    margin-bottom: 10px;
}

.roadmap-status {
    display: inline-block;
    padding: 3px 12px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: bold;
    text-transform: uppercase;
    margin-top: 8px;
    letter-spacing: 1px;
    background: var(--color-bg-dark-2);
    border: 1px solid var(--color-border);
}

.roadmap-status.done {
    background: var(--color-success);
    color: #fff;
    border: none;
}
.roadmap-status.in-progress {
    background: var(--color-accent);
    color: #fff;
    border: none;
}
.roadmap-status.planned {
    background: #222b36;
    color: var(--color-text-secondary);
    border: none;
}
/* ROADMAP SIÊU ĐẸP - CARD GRID HIỆN ĐẠI */
.conquest-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 36px;
    margin-top: 32px;
    margin-bottom: 32px;
}

.phase-card {
    position: relative;
    background: linear-gradient(135deg, #21262d 70%, #58a6ff22 100%);
    border-radius: 22px;
    box-shadow: 0 8px 32px 0 rgba(88,166,255,0.13), 0 1.5px 8px 0 rgba(0,0,0,0.12);
    border: 2.5px solid transparent;
    padding: 36px 28px 28px 28px;
    overflow: hidden;
    transition: transform 0.22s cubic-bezier(.4,2,.6,1), box-shadow 0.22s, border-color 0.22s;
    z-index: 1;
}
.phase-card:hover {
    transform: translateY(-10px) scale(1.025) rotate(-1deg);
    box-shadow: 0 16px 48px 0 rgba(88,166,255,0.22), 0 2px 12px 0 rgba(0,0,0,0.18);
    border-color: var(--color-accent);
}

.phase-header {
    display: flex;
    align-items: center;
    gap: 22px;
    margin-bottom: 18px;
}

.phase-icon {
    font-size: 2.7rem;
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: linear-gradient(135deg, #161B22 60%, #58a6ff33 100%);
    box-shadow: 0 0 0 6px #58a6ff22;
    border: 2.5px solid var(--color-border);
    color: #58a6ff;
    transition: box-shadow 0.3s, border-color 0.3s, color 0.3s;
}
.phase-card.done .phase-icon {
    color: var(--color-success);
    border-color: var(--color-success);
    box-shadow: 0 0 0 8px #34a85322, 0 0 16px 2px #34a85355;
}
.phase-card.in-progress .phase-icon {
    color: var(--color-accent);
    border-color: var(--color-accent);
    animation: pulse-icon 2s infinite;
    box-shadow: 0 0 0 8px #58a6ff33, 0 0 16px 2px #58a6ff77;
}
.phase-card.planned .phase-icon {
    color: #aaa;
    border-color: #aaa;
    box-shadow: 0 0 0 8px #aaa2, 0 0 16px 2px #aaa3;
}

@keyframes pulse-icon {
    0% { box-shadow: 0 0 0 8px #58a6ff33, 0 0 16px 2px #58a6ff77; }
    50% { box-shadow: 0 0 0 16px #58a6ff11, 0 0 32px 8px #58a6ff44; }
    100% { box-shadow: 0 0 0 8px #58a6ff33, 0 0 16px 2px #58a6ff77; }
}

.phase-title h3 {
    margin: 0;
    font-size: 1.25rem;
    color: var(--color-text-headings);
    font-weight: 700;
    letter-spacing: 0.5px;
}
.phase-title span {
    font-size: 0.92rem;
    color: var(--color-accent);
    font-weight: 600;
    display: block;
    margin-top: 2px;
}

.phase-body p {
    margin: 0 0 12px 0;
    color: var(--color-text-light);
    font-size: 1.02rem;
    font-weight: 500;
}
.phase-body ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
}
.phase-body li {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 9px;
    color: var(--color-text-light);
    font-size: 0.98rem;
    font-weight: 500;
    letter-spacing: 0.1px;
}
.phase-body li:last-child { margin-bottom: 0; }
.phase-body li i {
    font-size: 1.1em;
    min-width: 20px;
    text-align: center;
    opacity: 0.88;
}
.phase-card.done li i { color: var(--color-success);}
.phase-card.in-progress li i { color: var(--color-accent);}
.phase-card.planned li i { color: #aaa;}

.phase-card.done {
    border-left: 6px solid var(--color-success);
    background: linear-gradient(135deg, #21262d 70%, #34a85322 100%);
}
.phase-card.in-progress {
    border-left: 6px solid var(--color-accent);
    background: linear-gradient(135deg, #21262d 70%, #58a6ff22 100%);
}
.phase-card.planned {
    border-left: 6px solid #aaa;
    background: linear-gradient(135deg, #21262d 70%, #aaa2 100%);
}

@media (max-width: 700px) {
    .conquest-grid {
        grid-template-columns: 1fr;
        gap: 22px;
    }
    .phase-card {
        padding: 22px 12px 18px 12px;
    }
    .phase-header { gap: 12px; }
    .phase-icon { font-size: 2rem; width: 44px; height: 44px; }
}
#current-song-title {
    cursor: pointer;
    transition: color 0.2s;
}
#current-song-title:hover {
    color: var(--color-accent-hover);
    text-decoration: underline;
}
html[data-theme='light'] .phase-card {
    background: linear-gradient(135deg, #f7f9fc 70%, #e3f2fd 100%);
    border-color: var(--color-border-light);
    box-shadow: 0 4px 24px 0 rgba(49,130,206,0.08), 0 1.5px 8px 0 rgba(0,0,0,0.07);
}
html[data-theme='light'] .phase-card.done {
    border-left: 6px solid var(--color-success);
    background: linear-gradient(135deg, #e8f5e9 70%, #f7f9fc 100%);
}
html[data-theme='light'] .phase-card.in-progress {
    border-left: 6px solid var(--color-accent-light);
    background: linear-gradient(135deg, #e3f2fd 70%, #f7f9fc 100%);
}
html[data-theme='light'] .phase-card.planned {
    border-left: 6px solid #bdbdbd;
    background: linear-gradient(135deg, #f7f9fc 70%, #ececec 100%);
}
html[data-theme='light'] .phase-card .phase-icon {
    background: linear-gradient(135deg, #e3f2fd 60%, #b3e5fc 100%);
    border-color: var(--color-border-light);
    color: var(--color-accent-light);
    box-shadow: 0 0 0 6px #b3e5fc44;
}
html[data-theme='light'] .phase-card.done .phase-icon {
    color: var(--color-success);
    border-color: var(--color-success);
    background: linear-gradient(135deg, #e8f5e9 60%, #b9f6ca 100%);
    box-shadow: 0 0 0 8px #b9f6ca55, 0 0 16px 2px #b9f6ca33;
}
html[data-theme='light'] .phase-card.in-progress .phase-icon {
    color: var(--color-accent-light);
    border-color: var(--color-accent-light);
    background: linear-gradient(135deg, #e3f2fd 60%, #90caf9 100%);
    box-shadow: 0 0 0 8px #90caf955, 0 0 16px 2px #90caf933;
}
html[data-theme='light'] .phase-card.planned .phase-icon {
    color: #bdbdbd;
    border-color: #bdbdbd;
    background: linear-gradient(135deg, #f7f9fc 60%, #ececec 100%);
    box-shadow: 0 0 0 8px #ececec55, 0 0 16px 2px #ececec33;
}
html[data-theme='light'] .phase-title h3,
html[data-theme='light'] .phase-title span,
html[data-theme='light'] .phase-body p,
html[data-theme='light'] .phase-body li {
    color: var(--color-text-dark);
}
body.menu-hidden .main-nav {
    display: none !important;
}
.conquest-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 36px;
    margin-top: 32px;
    margin-bottom: 32px;
}

.phase-card {
    position: relative;
    background: linear-gradient(135deg, #21262d 70%, #58a6ff22 100%);
    border-radius: 22px;
    box-shadow: 0 8px 32px 0 rgba(88,166,255,0.13), 0 1.5px 8px 0 rgba(0,0,0,0.12);
    border: 2.5px solid transparent;
    padding: 36px 28px 28px 28px;
    overflow: hidden;
    transition: transform 0.22s cubic-bezier(.4,2,.6,1), box-shadow 0.22s, border-color 0.22s;
    z-index: 1;
}
.phase-card:hover {
    transform: translateY(-10px) scale(1.025) rotate(-1deg);
    box-shadow: 0 16px 48px 0 rgba(88,166,255,0.22), 0 2px 12px 0 rgba(0,0,0,0.18);
    border-color: var(--color-accent);
}

.phase-header {
    display: flex;
    align-items: center;
    gap: 22px;
    margin-bottom: 18px;
}

.phase-icon {
    font-size: 2.7rem;
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: linear-gradient(135deg, #161B22 60%, #58a6ff33 100%);
    box-shadow: 0 0 0 6px #58a6ff22;
    border: 2.5px solid var(--color-border);
    color: #58a6ff;
    transition: box-shadow 0.3s, border-color 0.3s, color 0.3s;
}
.phase-card.done .phase-icon {
    color: var(--color-success);
    border-color: var(--color-success);
    box-shadow: 0 0 0 8px #34a85322, 0 0 16px 2px #34a85355;
}
.phase-card.in-progress .phase-icon {
    color: var(--color-accent);
    border-color: var(--color-accent);
    animation: pulse-icon 2s infinite;
    box-shadow: 0 0 0 8px #58a6ff33, 0 0 16px 2px #58a6ff77;
}
.phase-card.planned .phase-icon {
    color: #aaa;
    border-color: #aaa;
    box-shadow: 0 0 0 8px #aaa2, 0 0 16px 2px #aaa3;
}

@keyframes pulse-icon {
    0% { box-shadow: 0 0 0 8px #58a6ff33, 0 0 16px 2px #58a6ff77; }
    50% { box-shadow: 0 0 0 16px #58a6ff11, 0 0 32px 8px #58a6ff44; }
    100% { box-shadow: 0 0 0 8px #58a6ff33, 0 0 16px 2px #58a6ff77; }
}

.phase-title h3 {
    margin: 0;
    font-size: 1.25rem;
    color: var(--color-text-headings);
    font-weight: 700;
    letter-spacing: 0.5px;
}
.phase-title span {
    font-size: 0.92rem;
    color: var(--color-accent);
    font-weight: 600;
    display: block;
    margin-top: 2px;
}

.phase-body p {
    margin: 0 0 12px 0;
    color: var(--color-text-light);
    font-size: 1.02rem;
    font-weight: 500;
}
.phase-body ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
}
.phase-body li {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 9px;
    color: var(--color-text-light);
    font-size: 0.98rem;
    font-weight: 500;
    letter-spacing: 0.1px;
}
.phase-body li:last-child { margin-bottom: 0; }
.phase-body li i {
    font-size: 1.1em;
    min-width: 20px;
    text-align: center;
    opacity: 0.88;
}
.phase-card.done li i { color: var(--color-success);}
.phase-card.in-progress li i { color: var(--color-accent);}
.phase-card.planned li i { color: #aaa;}

.phase-card.done {
    border-left: 6px solid var(--color-success);
    background: linear-gradient(135deg, #21262d 70%, #34a85322 100%);
}
.phase-card.in-progress {
    border-left: 6px solid var(--color-accent);
    background: linear-gradient(135deg, #21262d 70%, #58a6ff22 100%);
}
.phase-card.planned {
    border-left: 6px solid #aaa;
    background: linear-gradient(135deg, #21262d 70%, #aaa2 100%);
}

@media (max-width: 700px) {
    .conquest-grid {
        grid-template-columns: 1fr;
        gap: 22px;
    }
    .phase-card {
        padding: 22px 12px 18px 12px;
    }
    .phase-header { gap: 12px; }
    .phase-icon { font-size: 2rem; width: 44px; height: 44px; }
}
.focus-mode-overlay {
    position: fixed;
    inset: 0;
    z-index: 30000;
    background: radial-gradient(ellipse at 60% 40%, #232526 60%, #414345 100%);
    background-size: 200% 200%;
    animation: gradientMove 8s ease-in-out infinite;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.5s;
    min-height: 100vh;
}
.focus-mode-overlay.visible {
    pointer-events: auto;
    opacity: 1;
}
.focus-quote {
    font-size: 2.2rem;
    color: #fff;
    margin-bottom: 38px;
    text-align: center;
    max-width: 700px;
    text-shadow: 0 4px 24px #000a, 0 1.5px 8px #0008;
    animation: fadeIn 1.2s;
    font-family: var(--font-headings);
    font-weight: 600;
    letter-spacing: 0.5px;
}
.focus-pomodoro {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
    background: rgba(0,0,0,0.38);
    padding: 32px 38px 28px 38px;
    border-radius: 22px;
    box-shadow: 0 8px 32px 0 rgba(0,0,0,0.22), 0 1.5px 8px 0 rgba(0,0,0,0.18);
    min-width: 320px;
}
#pomodoro-timer {
    font-size: 2.5rem;
    font-family: 'JetBrains Mono', monospace;
    color: #ffb347;
    letter-spacing: 2px;
    margin-bottom: 10px;
}
.focus-pomodoro-actions {
    display: flex;
    gap: 16px;
}
.btn-small {
    padding: var(--spacing-unit) calc(var(--spacing-unit) * 1.5);
    font-size: 0.98rem;
    border-radius: 8px;
    min-width: 80px;
    height: 38px;
    font-weight: 600;
    box-shadow: 0 2px 12px rgba(0,0,0,0.10);
    transition: background 0.2s, color 0.2s, box-shadow 0.2s;
}
.btn-warning {
    background: #ffb347;
    color: #232526;
    border: none;
}
.btn-warning:hover { background: #ffd580; color: #232526; }
.btn-danger {
    background: #ff4d4f;
    color: #fff;
    border: none;
}
.btn-danger:hover { background: #ff7875; color: #fff; }
/* Nâng cấp nút chuyển dự án carousel */
.projects-carousel-wrapper {
    position: relative;
    padding-left: 0; /* Đảm bảo không bị lệch */
    padding-right: 0;
}

.carousel-control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 20;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: rgba(33, 38, 45, 0.82);
    border: 2px solid var(--color-border);
    color: var(--color-accent);
    box-shadow: 0 4px 18px 0 rgba(88,166,255,0.10);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    cursor: pointer;
    transition: 
        background 0.22s cubic-bezier(.4,0,.2,1),
        color 0.22s cubic-bezier(.4,0,.2,1),
        box-shadow 0.22s cubic-bezier(.4,0,.2,1),
        transform 0.18s cubic-bezier(.4,0,.2,1);
    opacity: 0.92;
    outline: none;
    /* Đẩy ra ngoài grid */
    pointer-events: auto;
}

.carousel-control.prev {
    left: -32px; /* Đẩy ra ngoài wrapper, có thể tăng lên nếu cần */
}
.carousel-control.next {
    right: -32px;
}

@media (max-width: 900px) {
    .carousel-control.prev { left: -16px; }
    .carousel-control.next { right: -16px; }
}
@media (max-width: 700px) {
    .carousel-control {
        width: 36px;
        height: 36px;
        font-size: 1.1rem;
    }
    .carousel-control.prev { left: -8px; }
    .carousel-control.next { right: -8px; }
}

.carousel-control:hover,
.carousel-control:focus-visible {
    background: linear-gradient(90deg, #1f6feb 60%, #58a6ff 100%);
    color: #fff;
    box-shadow: 0 8px 28px 0 rgba(88,166,255,0.22);
    transform: translateY(-50%) scale(1.08);
    border-color: var(--color-accent);
    opacity: 1;
}
/* Terminal input line styling */
.terminal-input-line {
  display: flex;
  align-items: center;
  font-family: 'JetBrains Mono', 'Fira Mono', 'Consolas', monospace;
  min-height: 1.5em;
  outline: none;
}

.prompt-user {
  color: #4fc3f7;
  margin-right: 0.5em;
  user-select: none;
}

.input-text {
  white-space: pre;
  flex: 0 1 auto;
  min-width: 1px;
  color: #fff;
}

.caret {
  width: 10px;
  height: 1.2em;
  background: #fff;
  margin-left: 0;      /* Sửa lại từ 2px thành 0 */
  display: inline-block;
  animation: blink-caret 1s steps(1) infinite;
  vertical-align: middle;
}

@keyframes blink-caret {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* Hiệu ứng focus cho terminal */
#terminal:focus {
  box-shadow: 0 0 0 2px #4fc3f7;
  border-color: #4fc3f7;
  outline: none;
}

/* Đảm bảo terminal không bị scroll khi nhấn Space */
#terminal {
  outline: none;
  overflow-y: auto;
  user-select: text;
}
.nav-logo {
    padding-left: 24px;
    padding-right: 24px;
}
.nav-links {
    margin-right: 1.5rem; /* Tăng khoảng cách giữa menu và cụm nút điều khiển */
}
#terminal-hidden-input {
    position: absolute;
    left: -9999px; /* Đẩy ra xa khỏi màn hình */
    top: -9999px;
    width: 1px;
    height: 1px;
    opacity: 0;   /* Hoàn toàn trong suốt */
    pointer-events: none; /* Không bắt sự kiện chuột/chạm */
}
