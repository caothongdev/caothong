// Sử dụng strict mode ngay từ đầu
'use strict';

/**
 * Định dạng phản hồi từ AI, chuyển đổi Markdown cơ bản sang HTML.
 * @param {string} text - Văn bản thô từ AI.
 * @returns {string} - Chuỗi HTML đã được định dạng.
 */
function formatAIResponse(text) {
    // Thay thế **text** bằng <strong>text</strong>
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Thay thế * item bằng <li> item, xử lý các dòng liền kề
    text = text.replace(/^\s*\*\s(.*?)$/gm, '<li>$1</li>');
    text = text.replace(/(<li>.*<\/li>)/g, '<ul>$1</ul>');
    text = text.replace(/<\/ul>\s*<ul>/g, '');
    // Thay thế xuống dòng bằng <br>
    return text.trim().replace(/\n/g, '<br>');
}

// --- Danh sách Slogan/Thơ & Hàm tiện ích ---
const slogans = [
    "Nơi bắt đầu của những ý tưởng tuyệt vời.",
    "Mỗi ngày là một trang mới, hãy viết nên câu chuyện của bạn.",
    "Luôn có ánh sáng, nếu chúng ta đủ dũng cảm để nhìn thấy nó.",
    "Đừng chờ đợi cơ hội, hãy tạo ra nó.",
    "Thành công không phải là đích đến, đó là một hành trình.",
    "Gieo hôm nay, gặt ngày mai.",
    "Biển lặng chẳng tạo nên thủy thủ tài ba.",
    "Ước mơ đủ lớn, hành động đủ quyết liệt.",
    "Hãy là sự thay đổi mà bạn muốn thấy trên thế giới.",
    "Nụ cười là ngôn ngữ chung.",
];

const footerQuotes = [
    "Đam mê dẫn lối thành công.",
    "Không ngừng học hỏi, không ngừng vươn xa.",
    "Sáng tạo mỗi ngày, kiến tạo tương lai.",
    "Code for passion, not just for a living.",
    "The best way to predict the future is to create it."
];

function getRandomItem(arr) {
    if (!arr || arr.length === 0) return "";
    return arr[Math.floor(Math.random() * arr.length)];
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener('DOMContentLoaded', () => {

    // --- Lấy các phần tử DOM ---
    const loadingScreen = document.getElementById('loading-screen');
    const lobbyScreen = document.getElementById('lobby-screen');
    const mainContent = document.getElementById('main-content');
    const audioPlayer = document.getElementById('background-audio');
    const volumeBtn = document.getElementById('volume-btn');
    const volumeSlider = document.getElementById('volume-slider');
    const clockDisplay = document.getElementById('clock');
    const musicPromptOverlay = document.getElementById('music-prompt-overlay');
    const playMusicYesBtn = document.getElementById('play-music-yes');
    const playMusicNoBtn = document.getElementById('play-music-no');
    const musicDontShowAgainCheckbox = document.getElementById('music-dont-show-again');
    const bioDetailsModal = document.getElementById('bio-details-modal');
    const bioModalBody = document.getElementById('bio-modal-body');
    const closeBioModalBtn = document.getElementById('close-bio-modal');
    const imagesForLightbox = document.querySelectorAll('.lightbox-trigger');
    const lightboxOverlay = document.getElementById('lightbox-overlay');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxCaptionElement = document.getElementById('lightbox-image-alt');
    const musicSelectorIcon = document.getElementById('music-selector-icon');
    const songSelectionModal = document.getElementById('song-selection-modal');
    const songList = document.getElementById('song-list');
    const closeModalSongBtn = document.getElementById('close-modal-song');
    const loadingBar = document.querySelector('#loading-screen .loading-bar');
    const currentSongDisplay = document.getElementById('current-song-display');
    const currentSongTitleElement = document.getElementById('current-song-title');
    const songLoadingIndicator = currentSongDisplay?.querySelector('.song-loading-indicator');
    const themeToggleButton = document.getElementById('theme-toggle-btn');
    const htmlElement = document.documentElement;
    const sunIcon = themeToggleButton?.querySelector('.theme-icon-sun');
    const moonIcon = themeToggleButton?.querySelector('.theme-icon-moon');
    const faviconLink = document.getElementById('favicon');
    const themeColorMeta = document.getElementById('theme-color-meta');
    const toastContainer = document.getElementById('toast-container');
    const scrollToTopBtn = document.getElementById('scroll-to-top-btn');
    const customCursorElement = document.getElementById('custom-cursor-element');
    const cursorTrailElement = document.getElementById('cursor-trail');
    const cursorToggleButton = document.getElementById('cursor-toggle-btn');
    const cursorIconOn = cursorToggleButton?.querySelector('.cursor-icon-on');
    const cursorIconOff = cursorToggleButton?.querySelector('.cursor-icon-off');
    const typingEffectTargets = document.querySelectorAll('.typing-effect-target');
    const onlineStatusIndicator = document.querySelector('.online-status-indicator');
    const footerOnlineIndicator = document.querySelector('.footer-online-indicator');
    const footerDynamicQuote = document.getElementById('footer-dynamic-quote');
    const currentYearSpan = document.getElementById('current-year');
    const mainNav = document.querySelector('.main-nav');
    const navMobileToggle = document.querySelector('.nav-mobile-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
    const allNavLinks = document.querySelectorAll('.nav-link');
    const commandPaletteToggle = document.getElementById('command-palette-toggle');
    const commandPaletteOverlay = document.getElementById('command-palette-overlay');
    const commandPaletteInput = document.getElementById('command-palette-input');
    const commandPaletteResults = document.getElementById('command-palette-results');
    const matrixCanvas = document.getElementById('matrix-canvas');
    const profileAvatarContainer = document.querySelector('.profile-avatar-container');
    const achievementContainer = document.getElementById('achievement-container');
    const terminalBody = document.getElementById('terminal-body');
    const terminalWindow = document.getElementById('terminal');
    const sections = document.querySelectorAll('.content-section');

    // --- Hằng số ---
    const HIDE_PROMPT_DURATION = 12 * 60 * 60 * 1000; // 12 tiếng
    const DEFAULT_VOLUME = 0.2;
    const NO_SONG_TEXT = "Chưa chọn bài";
    const TOAST_TIMEOUT = 3500;
    const EMOJI_CLICK_OFFSET = 16;
    const SONG_LOAD_TIMEOUT = 10000; // 10 giây

    // --- Biến trạng thái ---
    let animationFrameIdCursor = null;
    let lobbyScreenClicked = false;
    let djProgress = 0;

    // --- Kiểm tra DOM cơ bản ---
    if (!loadingScreen || !lobbyScreen || !mainContent) {
        console.error("Lỗi nghiêm trọng: Không tìm thấy các phần tử màn hình chính.");
    }
    if (!audioPlayer) console.warn("Cảnh báo: Không tìm thấy audioPlayer.");

    // --- Hiệu ứng Typing ---
    let typeWriterTimeoutId = null;

    function typeWriter(element, text, speed = 70, callback, clearPrevious = true) {
        if (!element || typeof text !== 'string') {
            if (callback) callback();
            return;
        }
        if (clearPrevious) element.textContent = '';
        let i = 0;

        if (typeWriterTimeoutId) {
            clearTimeout(typeWriterTimeoutId);
            typeWriterTimeoutId = null;
        }

        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                typeWriterTimeoutId = setTimeout(type, speed);
            } else {
                typeWriterTimeoutId = null;
                if (callback) callback();
            }
        }
        type();
    }


    function applyTypingEffectToElements() {
        typingEffectTargets.forEach((target, index) => {
            const textToType = target.dataset.typeText || target.textContent || "";
            target.textContent = '';
            setTimeout(() => {
                typeWriter(target, textToType.trim(), 50);
            }, index * 200);
        });
    }

    const initialLobbySlogan = getRandomItem(slogans);
    const lobbySloganElement = document.getElementById('lobby-slogan');
    if (lobbySloganElement) {
        lobbySloganElement.textContent = initialLobbySlogan;
    }


    // --- Trạng thái Online ---
    function setOnlineStatus(isOnline) {
        if (onlineStatusIndicator) {
            onlineStatusIndicator.classList.toggle('active', isOnline);
            onlineStatusIndicator.classList.toggle('pulsing', isOnline);
            onlineStatusIndicator.title = isOnline ? "Đang hoạt động" : "Ngoại tuyến";
        }
        if (footerOnlineIndicator) {
            footerOnlineIndicator.classList.toggle('active', isOnline);
            footerOnlineIndicator.title = isOnline ? "Online" : "Offline";
        }
    }
    setOnlineStatus(true);


    // --- Logic bật/tắt hiệu ứng con trỏ chuột ---
    const enableCustomCursor = () => {
        if (!customCursorElement || !cursorTrailElement) return;

        document.body.classList.remove('cursor-effect-disabled');
        customCursorElement.style.opacity = '1';
        cursorTrailElement.style.opacity = '1';

        let mouseX = 0,
            mouseY = 0;
        let trailX = 0,
            trailY = 0;
        const LERP_FACTOR_CURSOR = 0.2;
        const LERP_FACTOR_TRAIL = 0.15;

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };
        document.addEventListener('mousemove', handleMouseMove);

        const animateCustomCursor = () => {
            let currentCursorX = parseFloat(customCursorElement.style.left || mouseX);
            let currentCursorY = parseFloat(customCursorElement.style.top || mouseY);
            currentCursorX += (mouseX - currentCursorX) * LERP_FACTOR_CURSOR;
            currentCursorY += (mouseY - currentCursorY) * LERP_FACTOR_CURSOR;
            customCursorElement.style.left = currentCursorX + 'px';
            customCursorElement.style.top = currentCursorY + 'px';

            trailX += (currentCursorX - trailX) * LERP_FACTOR_TRAIL;
            trailY += (currentCursorY - trailY) * LERP_FACTOR_TRAIL;
            cursorTrailElement.style.left = trailX + 'px';
            cursorTrailElement.style.top = trailY + 'px';

            animationFrameIdCursor = requestAnimationFrame(animateCustomCursor);
        };

        if (!animationFrameIdCursor) {
            animateCustomCursor();
        }

        window.handleCursorMouseMove = handleMouseMove;
    };

    const disableCustomCursor = () => {
        if (!customCursorElement || !cursorTrailElement) return;

        document.body.classList.add('cursor-effect-disabled');
        customCursorElement.style.opacity = '0';
        cursorTrailElement.style.opacity = '0';

        if (animationFrameIdCursor) {
            cancelAnimationFrame(animationFrameIdCursor);
            animationFrameIdCursor = null;
        }
        if (window.handleCursorMouseMove) {
            document.removeEventListener('mousemove', window.handleCursorMouseMove);
        }
    };

    const toggleCursorEffect = () => {
        const isEnabled = !document.body.classList.contains('cursor-effect-disabled');
        if (isEnabled) {
            disableCustomCursor();
            try {
                localStorage.setItem('cursorEffectEnabled', 'false');
            } catch (e) { console.error(e); }
            if (cursorIconOn) cursorIconOn.style.display = 'none';
            if (cursorIconOff) cursorIconOff.style.display = 'inline-block';
            if (cursorToggleButton) {
                cursorToggleButton.setAttribute('aria-label', 'Bật hiệu ứng con trỏ');
                cursorToggleButton.setAttribute('aria-pressed', 'false');
            }
            showToast('Đã tắt hiệu ứng con trỏ.', 'info', 2000);
        } else {
            enableCustomCursor();
            try {
                localStorage.setItem('cursorEffectEnabled', 'true');
            } catch (e) { console.error(e); }
            if (cursorIconOn) cursorIconOn.style.display = 'inline-block';
            if (cursorIconOff) cursorIconOff.style.display = 'none';
            if (cursorToggleButton) {
                cursorToggleButton.setAttribute('aria-label', 'Tắt hiệu ứng con trỏ');
                cursorToggleButton.setAttribute('aria-pressed', 'true');
            }
            showToast('Đã bật hiệu ứng con trỏ.', 'info', 2000);
        }
    };

    if (cursorToggleButton) {
        const cursorPreference = localStorage.getItem('cursorEffectEnabled');
        if (cursorPreference === 'false') {
            disableCustomCursor();
            if (cursorIconOn) cursorIconOn.style.display = 'none';
            if (cursorIconOff) cursorIconOff.style.display = 'inline-block';
            cursorToggleButton.setAttribute('aria-label', 'Bật hiệu ứng con trỏ');
            cursorToggleButton.setAttribute('aria-pressed', 'false');
        } else {
            enableCustomCursor();
            if (cursorIconOn) cursorIconOn.style.display = 'inline-block';
            if (cursorIconOff) cursorIconOff.style.display = 'none';
            cursorToggleButton.setAttribute('aria-label', 'Tắt hiệu ứng con trỏ');
            cursorToggleButton.setAttribute('aria-pressed', 'true');
        }
        cursorToggleButton.addEventListener('click', toggleCursorEffect);
    }


    // --- Kích hoạt animation cho sections khi cuộn vào view ---
    if ("IntersectionObserver" in window && sections.length > 0) {
        const sectionObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        });

        sections.forEach(section => sectionObserver.observe(section));
    } else {
        console.warn("IntersectionObserver không được hỗ trợ hoặc không có '.content-section'.");
        sections.forEach(section => section.classList.add('visible'));
    }


    // --- Hàm tạo và hiển thị Toast Notification ---
    function showToast(message, type = 'info', duration = TOAST_TIMEOUT) {
        if (!toastContainer) {
            console.warn("Toast container (#toast-container) not found!");
            return;
        }
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;

        let iconClass = 'fas fa-info-circle';
        if (type === 'success') iconClass = 'fas fa-check-circle';
        else if (type === 'error') iconClass = 'fas fa-times-circle';
        else if (type === 'warning') iconClass = 'fas fa-exclamation-triangle';
        toast.innerHTML = `<i class="${iconClass}"></i> <span>${message}</span>`;

        toastContainer.appendChild(toast);

        requestAnimationFrame(() => {
            toast.classList.add('show');
        });

        const hideTimeout = setTimeout(() => {
            toast.classList.remove('show');
            toast.classList.add('hide');

            const fallbackRemoveTimeout = setTimeout(() => {
                if (toast.parentElement) {
                    toast.remove();
                }
            }, duration + 600);

            toast.addEventListener('transitionend', function handleTransitionEnd(event) {
                if (event.target === toast && (event.propertyName === 'opacity' || event.propertyName === 'transform')) {
                    clearTimeout(fallbackRemoveTimeout);
                    if (toast.parentElement) {
                        toast.remove();
                    }
                }
            }, {
                once: true
            });

        }, duration);
    }

    // --- Xử lý Lightbox cho ảnh ---
    if (lightboxOverlay && lightboxImage && lightboxClose) {
        const closeLightbox = () => {
            lightboxOverlay.classList.remove('visible');
            setTimeout(() => {
                if (!lightboxOverlay.classList.contains('visible')) {
                    lightboxOverlay.classList.add('hidden');
                    document.body.style.overflow = '';
                }
            }, 300);
        };
        const openLightbox = (imgElement) => {
            const imgSrc = imgElement.getAttribute('src');
            const imgAlt = imgElement.getAttribute('alt') || "Hình ảnh được phóng to";
            if (imgSrc) {
                lightboxImage.src = imgSrc;
                lightboxImage.alt = imgAlt;
                if (lightboxCaptionElement) lightboxCaptionElement.textContent = imgAlt;
                lightboxOverlay.classList.remove('hidden');
                requestAnimationFrame(() => {
                    lightboxOverlay.classList.add('visible');
                });
                document.body.style.overflow = 'hidden';
                lightboxClose.focus();
            } else {
                showToast("Không thể tải ảnh này.", "error");
            }
        };
        imagesForLightbox.forEach(img => {
            if (img) {
                img.style.cursor = 'zoom-in';
                img.addEventListener('click', (e) => {
                    e.preventDefault();
                    openLightbox(img);
                });
            }
        });
        lightboxClose.addEventListener('click', closeLightbox);
        lightboxOverlay.addEventListener('click', (e) => {
            if (e.target === lightboxOverlay) closeLightbox();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightboxOverlay.classList.contains('visible')) closeLightbox();
        });
    }


    // --- Các hàm điều khiển Audio ---
    const updateCurrentSongDisplay = (songName, isLoading = false) => {
        if (currentSongTitleElement) currentSongTitleElement.textContent = songName || NO_SONG_TEXT;
        if (songLoadingIndicator) songLoadingIndicator.classList.toggle('loading', isLoading);
    };

    const updateVolumeButton = () => {
        if (!volumeBtn || !audioPlayer) return;
        const currentVolume = audioPlayer.volume;
        const isMuted = audioPlayer.muted;
        const isEffectivelyMuted = isMuted || currentVolume === 0;
        volumeBtn.classList.toggle('muted', isEffectivelyMuted);
        volumeBtn.setAttribute('aria-label', isEffectivelyMuted ? 'Bật tiếng' : 'Tắt tiếng / Điều chỉnh âm lượng');
        volumeBtn.setAttribute('aria-pressed', isMuted.toString());

        let icon = 'fas ';
        if (isEffectivelyMuted || currentVolume <= 0.01) {
            icon += 'fa-volume-mute';
        } else if (currentVolume <= 0.5) {
            icon += 'fa-volume-down';
        } else {
            icon += 'fa-volume-up';
        }
        volumeBtn.innerHTML = `<i class="${icon}"></i>`;
    };

    const changeAndPlaySong = (songSrc, songTitle) => {
        if (!audioPlayer || !songSrc) return;
        if (audioPlayer.src.endsWith(songSrc) && !audioPlayer.paused) {
            showToast(`Đang phát: ${songTitle}`, 'info');
            return;
        }
        djProgress++;
        if (djProgress === 3) unlockAchievement('dj');
        audioPlayer.pause();
        updateCurrentSongDisplay(songTitle, true);

        if (window.songLoadTimeoutId) {
            clearTimeout(window.songLoadTimeoutId);
        }

        const onCanPlayThrough = () => {
            clearTimeout(window.songLoadTimeoutId);
            updateCurrentSongDisplay(songTitle, false);
            audioPlayer.play().then(() => {
                updateVolumeButton();
                showToast(`Đang phát: ${songTitle}`, 'success');
                try {
                    localStorage.setItem('lastSelectedSongSrc', songSrc);
                    localStorage.setItem('lastSelectedSongTitle', songTitle);
                } catch (e) {
                    console.error("Lỗi lưu bài hát:", e);
                }
            }).catch(error => {
                console.error(`Lỗi phát nhạc ${songSrc}:`, error);
                showToast(`Lỗi phát bài: ${songTitle}`, 'error');
            });
            audioPlayer.removeEventListener('canplaythrough', onCanPlayThrough);
            audioPlayer.removeEventListener('error', onError);
        };

        const onError = () => {
            clearTimeout(window.songLoadTimeoutId);
            updateCurrentSongDisplay("Lỗi tải bài", false);
            showToast(`Không thể tải bài hát: ${songTitle}`, 'error');
            audioPlayer.removeEventListener('canplaythrough', onCanPlayThrough);
            audioPlayer.removeEventListener('error', onError);
        };

        audioPlayer.addEventListener('canplaythrough', onCanPlayThrough, { once: true });
        audioPlayer.addEventListener('error', onError, { once: true });

        audioPlayer.src = songSrc;
        audioPlayer.load();

        window.songLoadTimeoutId = setTimeout(() => {
            onError();
        }, SONG_LOAD_TIMEOUT);
    };

    const playMusic = () => {
        if (!audioPlayer) return;
        if (!audioPlayer.src || audioPlayer.src === window.location.href) {
            showToast("Vui lòng chọn một bài hát trước.", "info");
            if (songSelectionModal && !songSelectionModal.classList.contains('active')) openSongModal();
            return;
        }
        if (audioPlayer.paused || audioPlayer.muted) {
            if (audioPlayer.volume === 0 && volumeSlider) {
                const sliderValue = parseFloat(volumeSlider.value);
                audioPlayer.volume = (sliderValue > 0 && !isNaN(sliderValue)) ? sliderValue : DEFAULT_VOLUME;
                if (volumeSlider) volumeSlider.value = audioPlayer.volume;
            }
            audioPlayer.muted = false;
            audioPlayer.play()
                .then(() => {
                    updateVolumeButton();
                    const lastTitle = localStorage.getItem('lastSelectedSongTitle') || "Đang phát";
                    updateCurrentSongDisplay(lastTitle);
                    if (document.body.dataset.justLoaded !== 'true') {
                        showToast(`Tiếp tục phát: ${lastTitle}`, 'info');
                    }
                    document.body.dataset.justLoaded = 'false';
                })
                .catch(error => {
                    console.error("Lỗi phát nhạc:", error);
                    showToast("Lỗi khi cố gắng phát nhạc.", "error");
                });
        }
    };
    const stopMusic = () => {
        if (audioPlayer && !audioPlayer.paused) {
            audioPlayer.pause();
            updateVolumeButton();
            showToast("Đã tạm dừng nhạc.", "info");
        }
    };
    const toggleMute = () => {
        if (!audioPlayer) return;
        audioPlayer.muted = !audioPlayer.muted;
        if (!audioPlayer.muted && audioPlayer.volume === 0 && volumeSlider) {
            audioPlayer.volume = DEFAULT_VOLUME;
            if (volumeSlider) volumeSlider.value = audioPlayer.volume;
        }
        updateVolumeButton();
        showToast(audioPlayer.muted ? "Đã tắt tiếng" : "Đã bật tiếng", "info");
    };


    // --- Đồng hồ ---
    let clockIntervalId = null;

    function updateClock() {
        if (!clockDisplay) return;
        const now = new Date();
        clockDisplay.textContent = now.toLocaleTimeString('vi-VN', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        }).replace(/\./g, ':');
    }

    function startClock() {
        if (clockDisplay && !clockIntervalId) {
            updateClock();
            clockIntervalId = setInterval(updateClock, 1000);
        }
    }

    // --- Music Prompt ---
    const showMusicPrompt = () => {
        if (!musicPromptOverlay) return;
        if (musicDontShowAgainCheckbox) musicDontShowAgainCheckbox.checked = false;
        musicPromptOverlay.classList.remove('hidden');
        musicPromptOverlay.classList.add('active');
    };
    const hideMusicPrompt = (duration = 300) => {
        if (!musicPromptOverlay) return;
        musicPromptOverlay.classList.remove('active');
        setTimeout(() => {
            if (!musicPromptOverlay.classList.contains('active')) musicPromptOverlay.classList.add('hidden');
        }, duration);
    };
    const handleMusicPromptPreference = () => {
        if (musicDontShowAgainCheckbox && musicDontShowAgainCheckbox.checked) {
            const hideUntilTimestamp = Date.now() + HIDE_PROMPT_DURATION;
            try {
                localStorage.setItem('hideMusicPromptUntil', hideUntilTimestamp.toString());
            } catch (e) {
                console.error("Lỗi lưu vào localStorage:", e);
            }
        }
        hideMusicPrompt();
    };

    // --- Xử lý chuyển đổi màn hình ---
    function switchScreen(currentScreen, nextScreen, callbackOnNextScreenActive) {
        if (!currentScreen || !nextScreen) {
            console.error("Lỗi chuyển màn hình: một hoặc cả hai màn hình không tồn tại.");
            if (callbackOnNextScreenActive && typeof callbackOnNextScreenActive === 'function') callbackOnNextScreenActive();
            return;
        }
        document.body.classList.add('no-scroll');

        let called = false;
        const handleTransitionEnd = (event) => {
            if (event.target !== currentScreen || event.propertyName !== 'opacity') return;
            if (called) return;
            called = true;

            currentScreen.classList.remove('active', 'fade-out');
            currentScreen.classList.add('hidden');

            nextScreen.classList.remove('hidden');
            nextScreen.classList.add('active');

            if (typeof callbackOnNextScreenActive === 'function') callbackOnNextScreenActive();

            currentScreen.removeEventListener('transitionend', handleTransitionEnd);
            document.body.classList.remove('no-scroll');
        };
        // Fallback nếu transition không chạy
        const fallbackTimeout = setTimeout(() => {
            if (called) return;
            called = true;

            currentScreen.classList.remove('active', 'fade-out');
            currentScreen.classList.add('hidden');

            nextScreen.classList.remove('hidden');
            nextScreen.classList.add('active');

            if (typeof callbackOnNextScreenActive === 'function') callbackOnNextScreenActive();

            currentScreen.removeEventListener('transitionend', handleTransitionEnd);
            document.body.classList.remove('no-scroll');
        }, 700); // 700ms = thời gian transition CSS

        currentScreen.addEventListener('transitionend', handleTransitionEnd);
        currentScreen.classList.add('fade-out');
    }

    // --- Bio Details Modal Logic ---
    const openBioModal = () => {
        const bioContent = `
            <p><strong>Tên đầy đủ:</strong> Hoàng Cao Thống (caothongdev)</p>
            <p><strong>Vị trí:</strong> Developer & Designer</p>
            <p><strong>Slogan:</strong> "Developer | Designer | Dream Chaser"</p>
            <p><strong>Giới thiệu:</strong> Tôi là một lập trình viên và nhà thiết kế với niềm đam mê tạo ra những sản phẩm kỹ thuật số đẹp mắt, hữu ích và mang lại trải nghiệm tuyệt vời cho người dùng. Tôi luôn tìm kiếm cơ hội để học hỏi công nghệ mới và áp dụng chúng vào các dự án thực tế.</p>
        `;
        if (!bioDetailsModal || !bioModalBody) {
            console.warn("Các phần tử của Bio Modal không đầy đủ.");
            return;
        }
        bioModalBody.innerHTML = bioContent;
        bioDetailsModal.classList.remove('hidden');
        requestAnimationFrame(() => bioDetailsModal.classList.add('active'));
        document.body.style.overflow = 'hidden';
        closeBioModalBtn?.focus();
    };
    const closeBioModal = () => {
        if (!bioDetailsModal) return;
        bioDetailsModal.classList.remove('active');
        setTimeout(() => {
            if (!bioDetailsModal.classList.contains('active')) {
                bioDetailsModal.classList.add('hidden');
                document.body.style.overflow = '';
            }
        }, 300);
    };

    // --- Carousels ---
    function initializeCarousel(carouselId, itemSelector, prevBtnSelector, nextBtnSelector) {
        const carouselWrapper = document.querySelector(carouselId);
        if (!carouselWrapper) {
            return;
        }
        const carouselGrid = carouselWrapper.querySelector('.projects-grid, .testimonials-grid');
        const carouselItems = carouselGrid ? Array.from(carouselGrid.querySelectorAll(itemSelector)) : [];
        const prevBtn = carouselWrapper.querySelector(prevBtnSelector);
        const nextBtn = carouselWrapper.querySelector(nextBtnSelector);

        if (!carouselGrid || carouselItems.length === 0 || !prevBtn || !nextBtn) {
            if (prevBtn) prevBtn.style.display = 'none';
            if (nextBtn) nextBtn.style.display = 'none';
            return;
        }

        let currentIndex = 0;
        let itemsPerPage = 1;

        function updateItemsPerPage() {
            if (window.innerWidth >= 1024) itemsPerPage = 3;
            else if (window.innerWidth >= 768) itemsPerPage = 2;
            else itemsPerPage = 1;

            const canScroll = carouselItems.length > itemsPerPage;
            prevBtn.style.display = canScroll ? 'flex' : 'none';
            nextBtn.style.display = canScroll ? 'flex' : 'none';
        }

        function showSlide(index) {
            const totalItems = carouselItems.length;
            if (totalItems <= itemsPerPage) {
                carouselGrid.style.transform = `translateX(0%)`;
                return;
            }

            if (index >= totalItems - itemsPerPage + 1) currentIndex = 0;
            else if (index < 0) currentIndex = totalItems - itemsPerPage;
            else currentIndex = index;

            const itemWidthPercentage = 100 / itemsPerPage;
            const translateXValue = -currentIndex * itemWidthPercentage;
            carouselGrid.style.transform = `translateX(${translateXValue}%)`;
        }

        prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
        nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));

        window.addEventListener('resize', () => {
            updateItemsPerPage();
            showSlide(currentIndex);
        });

        updateItemsPerPage();
        showSlide(0);
    }

    initializeCarousel('#featured-projects', '.project-item', '.prev', '.next');
    initializeCarousel('#testimonials', '.testimonial-item', '.testimonials-prev', '.testimonials-next');


    // --- Payment Section: Copy to Clipboard ---
    const copyButtons = document.querySelectorAll('.btn-copy-account');
    if (copyButtons.length > 0) {
        copyButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetSelector = button.dataset.clipboardTarget;
                const targetElement = document.querySelector(targetSelector);
                if (targetElement) {
                    const textToCopy = targetElement.textContent.trim();
                    navigator.clipboard.writeText(textToCopy).then(() => {
                        showToast(`Đã sao chép: ${textToCopy}`, 'success');
                        button.classList.add('copied');
                        setTimeout(() => button.classList.remove('copied'), 1500);
                    }).catch(err => {
                        console.error('Lỗi sao chép:', err);
                        showToast('Lỗi sao chép!', 'error');
                    });
                } else {
                    showToast('Không tìm thấy nội dung để sao chép.', 'error');
                }
            });
        });
    }

    // --- Contact Form ---
    const contactForm = document.getElementById('contact-form');
    const formStatusMessage = contactForm?.querySelector('.form-status-message');

    if (contactForm) {
        contactForm.addEventListener("submit", async function(event) {
            event.preventDefault();
            const form = event.target;
            const data = new FormData(form);
            if (formStatusMessage) {
                formStatusMessage.textContent = 'Đang gửi...';
                formStatusMessage.className = 'form-status-message sending';
            }
            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: data,
                    headers: { 'Accept': 'application/json' }
                });
                if (response.ok) {
                    if (formStatusMessage) {
                        formStatusMessage.textContent = "Gửi thành công!";
                        formStatusMessage.classList.add('success');
                    }
                    showToast('Cảm ơn lời nhắn của bạn!', 'success');
                    form.reset();
                } else {
                    const responseData = await response.json();
                    if (Object.hasOwn(responseData, 'errors')) {
                        const errorMsg = responseData["errors"].map(error => error["message"]).join(", ");
                        throw new Error(errorMsg);
                    } else {
                        throw new Error('Lỗi không xác định từ server.');
                    }
                }
            } catch (error) {
                if (formStatusMessage) {
                    formStatusMessage.textContent = "Lỗi! Không thể gửi.";
                    formStatusMessage.classList.add('error');
                }
                showToast(`Lỗi: ${error.message || 'Không thể gửi form'}`, 'error');
            } finally {
                if (formStatusMessage) {
                    setTimeout(() => { formStatusMessage.textContent = ''; formStatusMessage.className = 'form-status-message'; }, 5000);
                }
            }
        });
    }

    // --- Footer ---
    if (currentYearSpan) currentYearSpan.textContent = new Date().getFullYear();
    if (footerDynamicQuote) {
        footerDynamicQuote.textContent = getRandomItem(footerQuotes);
    }

    // --- Scroll-to-Top Button ---
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        });
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }


    // --- Theme Toggle & Dynamic Favicon ---
    if (themeToggleButton && sunIcon && moonIcon && faviconLink && themeColorMeta) {
        const applyTheme = (theme, initialLoad = false) => {
            htmlElement.dataset.theme = theme;
            sunIcon.style.display = theme === 'light' ? 'none' : 'inline-block';
            moonIcon.style.display = theme === 'light' ? 'inline-block' : 'none';
            themeToggleButton.setAttribute('aria-label', theme === 'light' ? 'Chuyển sang giao diện tối' : 'Chuyển sang giao diện sáng');
            themeToggleButton.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');

            if (theme === 'light') {
                faviconLink.href = 'assets/favicon-light.png';
                themeColorMeta.content = '#F0F2F5'; // Hardcoded light theme color
            } else {
                faviconLink.href = 'assets/favicon-dark.png';
                themeColorMeta.content = '#0D1117'; // Hardcoded dark theme color
            }

            if (!initialLoad) {
                showToast(`Đã chuyển sang giao diện ${theme === 'light' ? 'sáng' : 'tối'}`, 'info', 2000);
            }
        };

        let currentTheme = localStorage.getItem('theme') ||
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        applyTheme(currentTheme, true);

        themeToggleButton.addEventListener('click', () => {
            const newTheme = htmlElement.dataset.theme === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
            try {
                localStorage.setItem('theme', newTheme);
            } catch (e) {
                console.error("Lỗi lưu theme:", e);
            }
        });

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            if (!localStorage.getItem('theme')) {
                applyTheme(event.matches ? "dark" : "light");
            }
        });
    } else {
        console.warn("Các phần tử chuyển theme hoặc favicon không đầy đủ.");
    }


    // --- Click Emoji Effect ---
    const emojis = ["💖", "🎉", "✨", "🚀", "🎂", "😙", "🌟", "🎈", "🌸", "💯", "👍", "🔥"];

    function createClickEmoji(event) {
        if (document.body.classList.contains('cursor-effect-disabled')) return;

        const interactiveElements = ['BUTTON', 'A', 'INPUT', 'TEXTAREA', 'SELECT', 'LABEL', '.btn-copy-account', '#volume-slider'];
        if (interactiveElements.some(selector => event.target.closest(selector))) {
            return;
        }
        if (event.target.closest('#controls-container, .modal-overlay, .prompt-overlay, .lightbox-overlay, .carousel-control')) return;


        const emojiSpan = document.createElement('span');
        emojiSpan.classList.add('click-emoji');
        emojiSpan.textContent = getRandomItem(emojis);

        const randomSize = Math.random() * 1 + 1;
        emojiSpan.style.fontSize = `${randomSize}rem`;

        const offsetX = (Math.random() - 0.5) * 20;
        const offsetY = (Math.random() - 0.5) * 20;

        const scrollX = window.scrollX || window.pageXOffset;
        const scrollY = window.scrollY || window.pageYOffset;

        emojiSpan.style.left = `${event.clientX + scrollX - (randomSize * 8) + offsetX}px`;
        emojiSpan.style.top = `${event.clientY + scrollY - (randomSize * 8) + offsetY}px`;

        document.body.appendChild(emojiSpan);
        setTimeout(() => emojiSpan.remove(), 1200);
    }
    document.body.addEventListener('click', createClickEmoji);


    // --- Image Loading Animation/Placeholder ---
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach(img => {
        img.addEventListener('load', () => {
            img.classList.add('image-loaded');
        }, {
            once: true
        });
        img.addEventListener('error', () => {
            img.classList.add('image-error');
        });
    });

    // --- Hệ thống thành tựu (ACHIEVEMENT SYSTEM) ---
    const ACHIEVEMENTS = {
        firstVisit: { title: "Người Mới Đến", desc: "Chào mừng bạn lần đầu ghé thăm!", icon: "fas fa-door-open" },
        explorer: { title: "Nhà Thám Hiểm", desc: "Cuộn xuống cuối trang khám phá.", icon: "fas fa-compass" },
        dj: { title: "DJ Tài Ba", desc: "Đổi bài hát 3 lần.", icon: "fas fa-headphones" },
        nightOwl: { title: "Cú Đêm", desc: "Thức khuya code à? Chào buổi tối!", icon: "fas fa-moon" },
        hacker: { title: "Hacker", desc: "Bạn đã tìm ra Konami code!", icon: "fas fa-user-secret" },
        fan: { title: "Fan Cứng", desc: "Click vào avatar 10 lần.", icon: "fas fa-heart" },
    };
    let unlockedAchievements = JSON.parse(localStorage.getItem('unlockedAchievements') || '{}');

    function showAchievementPopup(achievement) {
        if (!achievementContainer) return;
        const popup = document.createElement('div');
        popup.className = 'achievement-popup';
        popup.innerHTML = `<div class="achievement-icon"><i class="${achievement.icon}"></i></div>
        <div class="achievement-details"><h4>${achievement.title}</h4><p>${achievement.desc}</p></div>`;
        achievementContainer.appendChild(popup);
        setTimeout(() => {
            popup.classList.add('fade-out');
            popup.addEventListener('animationend', () => popup.remove());
        }, 4000);
    }

    function unlockAchievement(id) {
        if (!unlockedAchievements[id] && ACHIEVEMENTS[id]) {
            unlockedAchievements[id] = true;
            showAchievementPopup(ACHIEVEMENTS[id]);
            localStorage.setItem('unlockedAchievements', JSON.stringify(unlockedAchievements));
        }
    }
    window.addEventListener('unlockAchievement', (e) => unlockAchievement(e.detail));


    // --- Logic cho Thanh điều hướng (Navigation) ---
    if (mainNav) {
        let lastScrollTop = 0;
        window.addEventListener('scroll', () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop && scrollTop > mainNav.offsetHeight) {
                mainNav.classList.add('nav-hidden');
            } else {
                mainNav.classList.remove('nav-hidden');
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
                unlockAchievement('explorer');
            }
        }, { passive: true });

        if (navMobileToggle && navLinksContainer) {
            navMobileToggle.addEventListener('click', () => {
                const isOpened = navLinksContainer.classList.toggle('active');
                navMobileToggle.setAttribute('aria-expanded', isOpened);
                navMobileToggle.querySelector('i').classList.toggle('fa-bars', !isOpened);
                navMobileToggle.querySelector('i').classList.toggle('fa-times', isOpened);
            });
            allNavLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navLinksContainer.classList.remove('active');
                    navMobileToggle.setAttribute('aria-expanded', 'false');
                    navMobileToggle.querySelector('i').classList.add('fa-bars');
                    navMobileToggle.querySelector('i').classList.remove('fa-times');
                });
            });
        }

        const observerOptions = { root: null, rootMargin: "-50% 0px -50% 0px", threshold: 0 };
        const navSectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    document.querySelector('.nav-link.active')?.classList.remove('active');
                    const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
                    activeLink?.classList.add('active');
                }
            });
        }, observerOptions);
        sections.forEach(section => navSectionObserver.observe(section));
    }

    // --- Logic cho Command Palette ---
    const commands = [
        { name: 'Chuyển giao diện Sáng/Tối', type: 'Lệnh', action: () => themeToggleButton.click() },
        { name: 'Bật/Tắt hiệu ứng con trỏ', type: 'Lệnh', action: () => cursorToggleButton.click() },
        { name: 'Bật/Tắt nhạc nền', type: 'Lệnh', action: () => volumeBtn.click() },
        { name: 'Đi đến mục Giới thiệu', type: 'Điều hướng', action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) },
        { name: 'Đi đến mục Kỹ năng', type: 'Điều hướng', action: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }) },
        { name: 'Đi đến mục Dự án', type: 'Điều hướng', action: () => document.getElementById('featured-projects')?.scrollIntoView({ behavior: 'smooth' }) },
        { name: 'Đi đến mục Liên hệ', type: 'Điều hướng', action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) },
        { name: 'Mở trang GitHub', type: 'Liên kết', action: () => window.open('https://github.com/caothongdev', '_blank') },
        { name: 'Mở trang Facebook', type: 'Liên kết', action: () => window.open('https://facebook.com/caothongdev', '_blank') }
    ];

    function renderCommandResults(query = '') {
        if (!commandPaletteResults) return;
        commandPaletteResults.innerHTML = '';
        const filteredCommands = commands.filter(cmd => cmd.name.toLowerCase().includes(query.toLowerCase()));
        filteredCommands.forEach((cmd, index) => {
            const li = document.createElement('li');
            li.dataset.index = index;
            li.innerHTML = `<span class="command-item-title">${cmd.name}</span> <span class="command-item-type">${cmd.type}</span>`;
            li.addEventListener('click', () => executeCommand(cmd));
            commandPaletteResults.appendChild(li);
        });
        if (commandPaletteResults.firstChild) {
            commandPaletteResults.firstChild.classList.add('selected');
        }
    }

    function executeCommand(command) {
        command.action();
        closeCommandPalette();
    }

    function openCommandPalette() {
        if (!commandPaletteOverlay) return;
        commandPaletteOverlay.classList.remove('hidden');
        requestAnimationFrame(() => {
            commandPaletteOverlay.classList.add('active');
            if (commandPaletteInput) commandPaletteInput.focus();
        });
        renderCommandResults();
    }

    function closeCommandPalette() {
        if (!commandPaletteOverlay) return;
        commandPaletteOverlay.classList.remove('active');
        if (commandPaletteInput) commandPaletteInput.value = '';
        setTimeout(() => commandPaletteOverlay.classList.add('hidden'), 300);
    }

    function handleCommandPaletteNav(e) {
        if (!commandPaletteResults) return;
        const items = Array.from(commandPaletteResults.querySelectorAll('li'));
        if (items.length === 0) return;

        let currentIndex = items.findIndex(item => item.classList.contains('selected'));

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (currentIndex !== -1) items[currentIndex].classList.remove('selected');
            const nextIndex = (currentIndex + 1) % items.length;
            items[nextIndex].classList.add('selected');
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (currentIndex !== -1) items[currentIndex].classList.remove('selected');
            const prevIndex = (currentIndex - 1 + items.length) % items.length;
            items[prevIndex].classList.add('selected');
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (currentIndex !== -1) {
                const query = commandPaletteInput.value.toLowerCase();
                const filteredCommands = commands.filter(cmd => cmd.name.toLowerCase().includes(query));
                const commandToExecute = filteredCommands[currentIndex];
                if (commandToExecute) executeCommand(commandToExecute);
            }
        }
    }

    if (commandPaletteToggle) {
        commandPaletteToggle.addEventListener('click', openCommandPalette);
        if (commandPaletteOverlay) commandPaletteOverlay.addEventListener('click', (e) => { if (e.target === commandPaletteOverlay) closeCommandPalette() });
        if (commandPaletteInput) {
            commandPaletteInput.addEventListener('input', () => renderCommandResults(commandPaletteInput.value));
            commandPaletteInput.addEventListener('keydown', handleCommandPaletteNav);
        }
        window.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                openCommandPalette();
            }
            if (e.key === 'Escape' && commandPaletteOverlay?.classList.contains('active')) {
                closeCommandPalette();
            }
        });
    }

    // --- Easter Egg Logic ---
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    document.addEventListener('keydown', (e) => {
        if (e.key.toLowerCase() === konamiCode[konamiIndex].toLowerCase()) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                unlockAchievement('hacker');
                showToast('HACKER MODE ACTIVATED', 'success');
                startMatrix();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

    function startMatrix() {
        if (!matrixCanvas) return;
        matrixCanvas.style.display = 'block';
        const ctx = matrixCanvas.getContext('2d');
        matrixCanvas.width = window.innerWidth;
        matrixCanvas.height = window.innerHeight;

        const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
        const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const nums = '0123456789';
        const alphabet = katakana + latin + nums;

        const fontSize = 16;
        const columns = matrixCanvas.width / fontSize;
        const rainDrops = Array.from({ length: Math.ceil(columns) }).fill(1);

        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
            ctx.fillStyle = '#0F0';
            ctx.font = fontSize + 'px monospace';

            for (let i = 0; i < rainDrops.length; i++) {
                const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);
                if (rainDrops[i] * fontSize > matrixCanvas.height && Math.random() > 0.975) {
                    rainDrops[i] = 0;
                }
                rainDrops[i]++;
            }
        };

        const matrixInterval = setInterval(draw, 33);

        setTimeout(() => {
            clearInterval(matrixInterval);
            matrixCanvas.style.display = 'none';
        }, 15000);
    }

    if (profileAvatarContainer) {
        profileAvatarContainer.addEventListener('click', () => {
            let clicks = parseInt(profileAvatarContainer.dataset.clicks || '0') + 1;
            profileAvatarContainer.dataset.clicks = clicks;
            if (clicks === 10) {
                unlockAchievement('fan');
                showToast('PARTY MODE!!! 🎉', 'info');
                profileAvatarContainer.classList.add('party-mode');
            }
            if (clicks === 20) {
                showToast('Hết vui rồi, quay lại làm việc thôi!', 'warning');
                profileAvatarContainer.classList.remove('party-mode');
                profileAvatarContainer.dataset.clicks = 0; // Reset
            }
        });
    }

    // ===================================================================
    // LOGIC CHO TERMINAL TÍCH HỢP AI (PHẦN ĐÃ NÂNG CẤP)
    // ===================================================================
    if (terminalWindow && terminalBody) {
        let currentInput = '';
        let commandHistory = [];
        let historyIndex = -1;
        let isAiThinking = false;
        let aiChatHistory = [];
        
        const personalContext = `
            Bạn là ThongGPT – trợ lý AI cá nhân được tích hợp trong terminal của portfolio Hoàng Cao Thống (caothongdev).
            Nhiệm vụ: Trả lời các câu hỏi về Hoàng Cao Thống một cách **thân thiện**, **ngắn gọn**, và **chính xác** dựa trên **THÔNG TIN DƯỚI ĐÂY**.

            ⚠️ Luôn trả lời bằng **Tiếng Việt**, trừ khi người dùng dùng ngôn ngữ khác.
            Được bịa đặt. Nếu thiếu thông tin, hãy trả lời: “Thông tin này Thống chưa cập nhật cho tôi, bạn có thể liên hệ trực tiếp với anh ấy nhé!”

            --- THÔNG TIN VỀ HOÀNG CAO THỐNG ---

            1. 🧑‍💻 **Thông tin cá nhân:**
               • Tên đầy đủ: Hoàng Cao Thống
               • Biệt danh: caothongdev
               • Năm sinh: 2009 (16 tuổi)
               • Chiều cao: 1m75 | Cân nặng: 56kg
               • Nơi ở: Cần Thơ, Việt Nam
               • Vai trò: Developer & Designer
               • Slogan: "Developer | Designer | Dream Chaser"
               • GitHub: https://github.com/caothongdev

            2. 🛠️ **Kỹ năng chuyên môn:**
               • **UI/UX:** Figma (thành thạo), System Making (tốt)
               • **Web:** HTML5 & CSS3 (chuyên gia), JavaScript (rất giỏi), Node.js (giỏi), TypeScript (khá)
               • **Lập trình:** Python (rất giỏi), SQL (khá), C/C++ (cơ bản)
               • **Công cụ:** VSCode, Git/GitHub (chuyên gia), Linux (khá), Docker (cơ bản)

            3. 🚀 **Dự án tiêu biểu:**
               • **V Store:** Web bán tài khoản số – Lead Dev & UI/UX – Node.js, JavaScript, Figma
               • **AI Discord Bot:** Bot AI quản lý server – AI Engineer & Backend – Python, TypeScript, Docker
               • **Portfolio cá nhân:** Chính là trang web hiện tại – HTML, CSS, JavaScript thuần

            4. 🎯 **Định hướng & mục tiêu:**
               • Xây dựng thương hiệu cá nhân qua nội dung dạy lập trình Python, bot AI và tự động hóa
               • Làm giàu từ lập trình, AI và hệ sinh thái sản phẩm số
               • Phát triển các công cụ như SaaS, bot bán hàng, nền tảng thông báo đơn hàng
               • Xây dựng kênh YouTube chia sẻ kiến thức lập trình dễ hiểu cho học sinh & người mới
               • Ước mơ: Mua **Lamborghini** và **BMW**, định cư tại **Mỹ** để hiện thực hóa giấc mơ đó

            5. 🎤 **Thiết bị & công cụ:**
               • Micro sử dụng: MAONO DGM20 RGB USB
               • Môi trường lập trình: Terminal, VSCode, GitHub
               • Hệ sinh thái: Discord bot AI, Website bán hàng, Tool tự động hóa

            6. 🧠 **Tư duy & học tập:**
               • Ưu tiên học Tin học và Ngoại ngữ, chọn lọc Toán & Văn phù hợp với khởi nghiệp
               • Định hướng học AI, automation, ethical hacking (hacker mũ trắng)
               • Học tiếng Anh theo chủ đề Startup, Business, IT
               • Đang luyện tư duy phản biện và học IELTS

            7. 📬 **Liên hệ & Mạng xã hội:**
               • Facebook: https://www.facebook.com/caothongdev
               • YouTube: https://www.youtube.com/@caothongdev (tên kênh: caothongdev)
               • Các nền tảng khác: Zalo, Telegram, TikTok, Discord (tìm với từ khóa: caothongdev)
               • Hoặc liên hệ trực tiếp qua form trên trang web

            --- KẾT THÚC THÔNG TIN ---
        `;

        function typeToTerminal(text, className = 'output') {
            const line = document.createElement('div');
            line.classList.add('terminal-line');
            if (className) {
                line.classList.add(className);
            }
            line.innerHTML = text;
            terminalBody.appendChild(line);
            terminalBody.scrollTop = terminalBody.scrollHeight;
        }

        async function getAiResponse(question) {
            isAiThinking = true;
            typeToTerminal('ThongGPT đang suy nghĩ...', 'ai-response');
            
            aiChatHistory.push({ role: "user", parts: [{ text: question }] });

            const apiKey = "AIzaSyDeCMeyND8XY0HGNMULdESMfsxuAN5Txj4"; // DÁN API KEY CỦA BẠN VÀO ĐÂY ĐỂ TEST
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;

            const fullHistoryPayload = [
                { role: "user", parts: [{ text: personalContext }] },
                { role: "model", parts: [{ text: "Đã hiểu. Tôi là ThongGPT. Tôi sẽ trả lời các câu hỏi về Hoàng Cao Thống dựa trên thông tin được cung cấp." }] },
                ...aiChatHistory
            ];

            const payload = { contents: fullHistoryPayload };

            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                const thinkingLine = terminalBody.querySelector('.terminal-line:last-child');
                if (thinkingLine && thinkingLine.textContent.includes('suy nghĩ')) {
                    terminalBody.removeChild(thinkingLine);
                }

                if (!response.ok) {
                    aiChatHistory.pop();
                    const errorData = await response.json().catch(() => ({ error: { message: "Không thể đọc phản hồi lỗi từ server." } }));
                    console.error("API Error Response:", errorData);
                    throw new Error(`API error ${response.status}: ${errorData.error?.message || response.statusText}`);
                }

                const result = await response.json();

                if (result.candidates && result.candidates[0]?.content?.parts[0]) {
                    const text = result.candidates[0].content.parts[0].text;
                    aiChatHistory.push({ role: "model", parts: [{ text: text }] });
                    typeToTerminal(formatAIResponse(text), 'ai-response');
                } else {
                    aiChatHistory.pop(); 
                    console.warn("API không trả về nội dung hợp lệ:", result);
                    if (result.promptFeedback && result.promptFeedback.blockReason) {
                        typeToTerminal(`Phản hồi đã bị chặn vì: ${result.promptFeedback.blockReason}. Vui lòng thử câu hỏi khác.`, 'error');
                    } else {
                        typeToTerminal("Rất tiếc, tôi không thể tạo phản hồi vào lúc này.", 'error');
                    }
                }
            } catch (error) {
                aiChatHistory.pop();
                console.error("Lỗi khi gọi AI:", error);
                const thinkingLine = terminalBody.querySelector('.terminal-line:last-child');
                 if (thinkingLine && thinkingLine.textContent.includes('suy nghĩ')) {
                    terminalBody.removeChild(thinkingLine);
                }
                typeToTerminal(`Đã có lỗi xảy ra khi kết nối: ${error.message}`, 'error');
            } finally {
                isAiThinking = false;
            }
        }
        
        async function handleTerminalInput(input) {
            const trimmedInput = input.trim();
            if (trimmedInput === '') {
                return;
            }

            commandHistory.push(trimmedInput);
            historyIndex = commandHistory.length;

            typeToTerminal(`<span class="prompt-user">caothongdev@portfolio:~$</span> <span class="command-text">${input}</span>`);

            if (isAiThinking) {
                typeToTerminal('Vui lòng đợi ThongGPT trả lời xong...', 'error');
                return;
            }

            const parts = trimmedInput.split(/\s+/);
            const command = parts[0].toLowerCase();
            const args = parts.slice(1);

            switch (command) {
                case 'ask':
                    const question = args.join(' ');
                    if (!question) {
                        typeToTerminal("Bạn muốn hỏi gì nào? Gõ 'ask' theo sau là câu hỏi của bạn.", 'system');
                        typeToTerminal("Ví dụ: ask bạn là ai?", 'system');
                    } else {
                        await getAiResponse(question);
                    }
                    break;

                case 'help':
                    typeToTerminal("Các lệnh có sẵn:", "output");
                    typeToTerminal("&nbsp;&nbsp;<span class='command'>ask [câu hỏi]</span> - Hỏi ThongGPT, trợ lý AI của Thống.", "output");
                    typeToTerminal("&nbsp;&nbsp;<span class='command'>bio</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Xem thông tin chi tiết về tôi.", "output");
                    typeToTerminal("&nbsp;&nbsp;<span class='command'>skills</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Liệt kê các kỹ năng của tôi.", "output");
                    typeToTerminal("&nbsp;&nbsp;<span class='command'>projects</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Xem các dự án nổi bật.", "output");
                    typeToTerminal("&nbsp;&nbsp;<span class='command'>social</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Mở các trang mạng xã hội.", "output");
                    typeToTerminal("&nbsp;&nbsp;<span class='command'>theme [dark|light]</span> - Đổi giao diện.", "output");
                    typeToTerminal("&nbsp;&nbsp;<span class='command'>matrix</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Kích hoạt hiệu ứng ma trận.", "output");
                    typeToTerminal("&nbsp;&nbsp;<span class='command'>clear</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Xóa màn hình và lịch sử chat.", "output");
                    typeToTerminal("&nbsp;&nbsp;<span class='command'>reset-chat</span>&nbsp;&nbsp;&nbsp;- Chỉ xóa lịch sử chat AI.", "output");
                    break;
                
                case 'bio':
                    openBioModal();
                    break;
                
                case 'social':
                    window.open('https://github.com/caothongdev', '_blank');
                    typeToTerminal("Đã mở GitHub trong tab mới...", "system");
                    break;
                
                case 'clear':
                    terminalBody.innerHTML = '';
                    aiChatHistory = []; 
                    await sleep(50);
                    typeToTerminal('Terminal và lịch sử trò chuyện đã được dọn dẹp!', 'system');
                    break;

                case 'reset-chat':
                    aiChatHistory = [];
                    typeToTerminal("Lịch sử trò chuyện với AI đã được làm mới.", "system");
                    break;

                case 'matrix':
                    startMatrix();
                    break;

                default:
                    typeToTerminal(`Lệnh '${command}' không tồn tại. Gõ 'help' để xem danh sách lệnh.`, 'error');
                    break;
            }
        }
        
        function updateInputDisplay() {
            const inputSpan = terminalBody.querySelector('.terminal-input-line .input-text');
            if (inputSpan) {
                inputSpan.textContent = currentInput;
            }
        }

        function createNewInputLine() {
            const oldInputLine = terminalBody.querySelector('.terminal-input-line');
            if (oldInputLine) {
                oldInputLine.classList.remove('terminal-input-line');
                const caret = oldInputLine.querySelector('.caret');
                if (caret) caret.remove();
            }

            const line = document.createElement('div');
            line.classList.add('terminal-line', 'terminal-input-line');
            line.innerHTML = `<span class="prompt-user">caothongdev@portfolio:~$</span> <span class="input-text"></span><span class="caret"></span>`;
            terminalBody.appendChild(line);
            terminalBody.scrollTop = terminalBody.scrollHeight;
            updateInputDisplay();
            terminalWindow.focus();
        }

        terminalWindow.addEventListener('click', () => {
            if (!terminalBody.querySelector('.terminal-input-line')) {
                createNewInputLine();
            }
            terminalWindow.focus();
        });

        terminalWindow.addEventListener('keydown', async (e) => {
            e.stopPropagation();

            if (e.key === 'Enter') {
                if (isAiThinking) return;
                const commandToRun = currentInput;
                currentInput = '';
                updateInputDisplay();
                await handleTerminalInput(commandToRun);
                createNewInputLine();
            } else if (e.key === 'Backspace') {
                currentInput = currentInput.slice(0, -1);
                updateInputDisplay();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (historyIndex > 0) {
                    historyIndex--;
                    currentInput = commandHistory[historyIndex];
                    updateInputDisplay();
                }
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (historyIndex < commandHistory.length - 1) {
                    historyIndex++;
                    currentInput = commandHistory[historyIndex];
                    updateInputDisplay();
                } else {
                    historyIndex = commandHistory.length;
                    currentInput = '';
                    updateInputDisplay();
                }
            } else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
                if(isAiThinking) return;
                currentInput += e.key;
                updateInputDisplay();
                if (e.key === " ") e.preventDefault();
            }
        });
        
        // --- Khởi tạo Terminal ---
        typeToTerminal("Chào mừng đến với Terminal Tương Tác của caothong.dev.", 'system');
        typeToTerminal("Gõ 'help' để xem các lệnh có sẵn.", 'system');
        typeToTerminal("Gõ 'ask [câu hỏi của bạn]' để trò chuyện với trợ lý AI của tôi.", 'system');
        createNewInputLine();
    }


    // === KHỞI TẠO TRANG ===
    startClock();
    if (audioPlayer) {
        audioPlayer.volume = parseFloat(localStorage.getItem('audioVolume')) || DEFAULT_VOLUME;
        if (volumeSlider) volumeSlider.value = audioPlayer.volume;
        updateVolumeButton();
        try {
            const lastSelectedSongSrc = localStorage.getItem('lastSelectedSongSrc');
            const lastSelectedSongTitle = localStorage.getItem('lastSelectedSongTitle');
            if (lastSelectedSongSrc && songList) {
                audioPlayer.src = lastSelectedSongSrc;
                audioPlayer.load();
                updateCurrentSongDisplay(lastSelectedSongTitle || NO_SONG_TEXT);
            } else {
                updateCurrentSongDisplay(NO_SONG_TEXT);
            }
        } catch (e) { console.error("Lỗi đọc bài hát từ localStorage:", e); }
    } else {
        updateCurrentSongDisplay(NO_SONG_TEXT);
    }

    window.onload = () => {
        document.body.dataset.justLoaded = 'true';
        if (loadingBar) {
            loadingBar.classList.add('finished');
            setTimeout(() => {
                switchScreen(loadingScreen, lobbyScreen, () => {
                    if (mainNav) mainNav.style.display = 'none'; // Ẩn nav ở lobby
                    if (lobbySloganElement) typeWriter(lobbySloganElement, getRandomItem(slogans), 70);

                    const userAllowedMusic = localStorage.getItem('userAllowedMusic') === 'true';
                    const lastSong = localStorage.getItem('lastSelectedSongSrc');

                    if (userAllowedMusic && lastSong) {
                        playMusic();
                    } else {
                        const hideUntilTimeStr = localStorage.getItem('hideMusicPromptUntil');
                        const hideUntilTime = hideUntilTimeStr ? parseInt(hideUntilTimeStr, 10) : 0;
                        if (Date.now() >= hideUntilTime) {
                            setTimeout(showMusicPrompt, 700);
                        }
                    }

                    if (!localStorage.getItem('hasVisited')) {
                        unlockAchievement('firstVisit');
                        localStorage.setItem('hasVisited', 'true');
                    }
                    if (new Date().getHours() >= 22 || new Date().getHours() < 5) {
                        unlockAchievement('nightOwl');
                    }
                });
            }, 500);
        }
    };

    // === GẮN CÁC EVENT LISTENER KHÁC ===
    if (lobbyScreen && mainContent) {
        lobbyScreen.addEventListener('click', (event) => {
            if (
                (musicSelectorIcon && musicSelectorIcon.contains(event.target)) ||
                (songSelectionModal && songSelectionModal.classList.contains('active') && songSelectionModal.contains(event.target))
            ) {
                return;
            }
            if (lobbyScreenClicked || !lobbyScreen.classList.contains('active')) return;

            lobbyScreenClicked = true;
            switchScreen(lobbyScreen, mainContent, () => {
                if (mainNav) mainNav.style.display = 'flex';
                applyTypingEffectToElements();
            });
        });
    }

    const backToLobbyBtn = document.getElementById('back-to-lobby-btn');
    if (backToLobbyBtn && lobbyScreen && mainContent) {
        backToLobbyBtn.addEventListener('click', () => {
            stopMusic();
            switchScreen(mainContent, lobbyScreen, () => {
                if (mainNav) mainNav.style.display = 'none';
                lobbyScreenClicked = false;
                if (lobbySloganElement) {
                    typeWriter(lobbySloganElement, getRandomItem(slogans), 70);
                }
            });
        });
    }

    if (volumeBtn) {
        let hideSliderTimeout;
        const showVolumeSlider = () => {
            if (!volumeSlider) return;
            clearTimeout(hideSliderTimeout);
            volumeSlider.classList.remove('hidden');
            volumeSlider.style.opacity = '1';
        };
        const hideVolumeSlider = () => {
            if (!volumeSlider || document.activeElement === volumeSlider) return;
            hideSliderTimeout = setTimeout(() => {
                volumeSlider.style.opacity = '0';
                setTimeout(() => {
                    if (!volumeSlider.matches(':hover') && !volumeBtn.matches(':hover')) {
                        volumeSlider.classList.add('hidden');
                    }
                }, 300);
            }, 1500);
        };
        volumeBtn.addEventListener('click', toggleMute);
        const controlsContainer = document.getElementById('controls-container');
        if (controlsContainer) {
            controlsContainer.addEventListener('mouseenter', showVolumeSlider);
            controlsContainer.addEventListener('mouseleave', hideVolumeSlider);
        }
        if (volumeSlider) {
            volumeSlider.addEventListener('blur', hideVolumeSlider);
        }
    }

    if (volumeSlider && audioPlayer) {
        volumeSlider.addEventListener('input', () => {
            const newVolume = parseFloat(volumeSlider.value);
            if (!isNaN(newVolume)) {
                audioPlayer.volume = newVolume;
                audioPlayer.muted = (newVolume === 0);
                updateVolumeButton();
                try {
                    localStorage.setItem('audioVolume', newVolume.toString());
                } catch (e) {
                    console.error("Lỗi lưu âm lượng:", e);
                }
            }
        });
    }

    if (playMusicYesBtn) playMusicYesBtn.addEventListener('click', () => {
        try { localStorage.setItem('userAllowedMusic', 'true'); } catch (e) { console.error(e); }
        handleMusicPromptPreference();
        playMusic();
    });
    if (playMusicNoBtn) playMusicNoBtn.addEventListener('click', () => {
        try { localStorage.setItem('userAllowedMusic', 'false'); } catch (e) { console.error(e); }
        handleMusicPromptPreference();
        stopMusic();
        updateCurrentSongDisplay(NO_SONG_TEXT);
    });

    const openSongModal = () => {
        if (songSelectionModal) {
            songSelectionModal.classList.remove('hidden');
            requestAnimationFrame(() => songSelectionModal.classList.add('active'));
            closeModalSongBtn?.focus();
        }
    };
    const closeSongModal = (duration = 300) => {
        if (songSelectionModal) {
            songSelectionModal.classList.remove('active');
            setTimeout(() => {
                if (!songSelectionModal.classList.contains('active')) songSelectionModal.classList.add('hidden');
            }, duration);
        }
    };

    if (musicSelectorIcon && songSelectionModal && songList && closeModalSongBtn) {
        musicSelectorIcon.addEventListener('click', (event) => {
            event.stopPropagation();
            openSongModal();
        });
        closeModalSongBtn.addEventListener('click', () => closeSongModal());
        songList.addEventListener('click', (event) => {
            const targetLi = event.target.closest('li');
            if (targetLi && targetLi.dataset.src) {
                const songSrc = targetLi.dataset.src;
                const songTitle = targetLi.textContent || "Không rõ tên";
                changeAndPlaySong(songSrc, songTitle);
                closeSongModal();
            }
        });
        songSelectionModal.addEventListener('click', (event) => {
            if (event.target === songSelectionModal) closeSongModal();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && songSelectionModal.classList.contains('active')) closeSongModal();
        });
    }

    const caseStudyTriggers = document.querySelectorAll('.case-study-trigger');
    const caseStudyModal = document.getElementById('case-study-modal');

    if (caseStudyTriggers.length > 0 && caseStudyModal) {
        const closeCaseStudyModalBtn = caseStudyModal.querySelector('.modal-close-btn');
        
        const openCaseStudyModal = (data) => {
            document.getElementById('case-study-modal-title').textContent = data.projectTitle;
            document.getElementById('case-study-modal-image').src = data.projectImage;
            document.getElementById('case-study-modal-role').textContent = data.projectRole;
            document.getElementById('case-study-modal-description').textContent = data.projectDescription;
            document.getElementById('case-study-modal-challenges').textContent = data.projectChallenges;
            document.getElementById('case-study-modal-solution').textContent = data.projectSolution;

            const tagsContainer = document.getElementById('case-study-modal-tags');
            tagsContainer.innerHTML = '';
            data.projectTags.split(',').forEach(tag => {
                const span = document.createElement('span');
                span.className = 'tag';
                span.textContent = tag.trim();
                tagsContainer.appendChild(span);
            });

            caseStudyModal.classList.remove('hidden');
            requestAnimationFrame(() => caseStudyModal.classList.add('active'));
            document.body.style.overflow = 'hidden';
        }

        const closeCaseStudyModal = () => {
            caseStudyModal.classList.remove('active');
            setTimeout(() => {
                caseStudyModal.classList.add('hidden');
                document.body.style.overflow = '';
            }, 300);
        }

        caseStudyTriggers.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                openCaseStudyModal(e.currentTarget.dataset);
            });
        });

        closeCaseStudyModalBtn?.addEventListener('click', closeCaseStudyModal);
        caseStudyModal.addEventListener('click', (e) => {
            if (e.target === caseStudyModal) closeCaseStudyModal();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && caseStudyModal.classList.contains('active')) closeCaseStudyModal();
        });
    }

    if (closeBioModalBtn) closeBioModalBtn.addEventListener('click', closeBioModal);
    if (bioDetailsModal) {
        bioDetailsModal.addEventListener('click', (event) => {
            if (event.target === bioDetailsModal) closeBioModal();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && bioDetailsModal.classList.contains('active')) closeBioModal();
        });
    }

    if (currentSongTitleElement && typeof openSongModal === 'function') {
        currentSongTitleElement.style.cursor = 'pointer';
        currentSongTitleElement.title = 'Nhấn để chọn nhạc nền';
        currentSongTitleElement.addEventListener('click', (e) => {
            e.stopPropagation();
            openSongModal();
        });
    }

    const focusModeBtn = document.getElementById('focus-mode-toggle');
    const focusModeOverlay = document.getElementById('focus-mode-overlay');
    const focusQuote = document.getElementById('focus-quote');
    const pomodoroTimer = document.getElementById('pomodoro-timer');
    const pomodoroToggle = document.getElementById('pomodoro-toggle');
    const focusExitBtn = document.getElementById('focus-exit-btn');

    if (focusModeBtn && focusModeOverlay) {
        let pomodoroInterval = null;
        let pomodoroTime = 25 * 60;
        let pomodoroRunning = false;

        const focusQuotes = [
            "Stay hungry, stay foolish.", "Deep Work = Deep Results.",
            "Đừng để bất cứ điều gì làm bạn xao nhãng.", "Focus is the new IQ.",
            "Tập trung là siêu năng lực của thời đại số.", "Code. Eat. Sleep. Repeat."
        ];

        function updatePomodoroDisplay() {
            if (!pomodoroTimer) return;
            const min = String(Math.floor(pomodoroTime / 60)).padStart(2, '0');
            const sec = String(pomodoroTime % 60).padStart(2, '0');
            pomodoroTimer.textContent = `${min}:${sec}`;
        }

        function startPomodoro() {
            if (pomodoroRunning) return;
            pomodoroRunning = true;
            pomodoroToggle.textContent = "Tạm dừng";
            pomodoroInterval = setInterval(() => {
                if (pomodoroTime > 0) {
                    pomodoroTime--;
                    updatePomodoroDisplay();
                } else {
                    clearInterval(pomodoroInterval);
                    pomodoroRunning = false;
                    pomodoroToggle.textContent = "Bắt đầu lại";
                    pomodoroTimer.textContent = "Hoàn thành!";
                }
            }, 1000);
        }

        function pausePomodoro() {
            pomodoroRunning = false;
            pomodoroToggle.textContent = "Tiếp tục";
            clearInterval(pomodoroInterval);
        }

        function resetPomodoro() {
            pausePomodoro();
            pomodoroTime = 25 * 60;
            updatePomodoroDisplay();
            pomodoroToggle.textContent = "Bắt đầu";
        }
        
        function showFocusOverlay() {
            focusModeOverlay.classList.remove('hidden');
            focusModeOverlay.classList.add('visible');
            focusQuote.textContent = getRandomItem(focusQuotes);
            resetPomodoro();
        }

        function hideFocusOverlay() {
            focusModeOverlay.classList.remove('visible');
            focusModeOverlay.classList.add('hidden');
            pausePomodoro();
        }

        focusModeBtn.addEventListener('click', () => {
            const isActive = document.body.getAttribute('data-focus-mode') === 'true';
            document.body.setAttribute('data-focus-mode', !isActive ? 'true' : 'false');
            focusModeBtn.classList.toggle('active', !isActive);
            if (!isActive) showFocusOverlay(); else hideFocusOverlay();
        });

        pomodoroToggle?.addEventListener('click', () => {
            if (!pomodoroRunning && pomodoroTime === 0) resetPomodoro();
            else if (pomodoroRunning) pausePomodoro();
            else startPomodoro();
        });

        focusExitBtn?.addEventListener('click', () => {
            document.body.setAttribute('data-focus-mode', 'false');
            focusModeBtn?.classList.remove('active');
            hideFocusOverlay();
        });

        document.addEventListener('keydown', (e) => {
            if (document.body.getAttribute('data-focus-mode') === 'true' && e.key === 'Escape') {
                focusExitBtn?.click();
            }
        });
    }

});
