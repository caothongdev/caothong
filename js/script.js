// Sử dụng strict mode ngay từ đầu
'use strict';
let djProgress = 0;
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

// --- Hàm tiện ích ---
function getRandomItem(arr) {
    if (!arr || arr.length === 0) return "";
    return arr[Math.floor(Math.random() * arr.length)];
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

    const bioLearnMoreBtn = document.getElementById('bio-learn-more-btn');
    const bioDetailsModal = document.getElementById('bio-details-modal');
    const bioModalBody = document.getElementById('bio-modal-body');
    const closeBioModalBtn = document.getElementById('close-bio-modal');
    const bioExtendedContent = document.getElementById('bio-extended-content');

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
    // --- [NÂNG CẤP UX] --- Lấy element chỉ báo loading nhạc
    const songLoadingIndicator = currentSongDisplay?.querySelector('.song-loading-indicator');

    const themeToggleButton = document.getElementById('theme-toggle-btn');
    const htmlElement = document.documentElement;
    const sunIcon = themeToggleButton?.querySelector('.theme-icon-sun');
    const moonIcon = themeToggleButton?.querySelector('.theme-icon-moon');
    const faviconLink = document.getElementById('favicon');
    const themeColorMeta = document.getElementById('theme-color-meta');

    const toastContainer = document.getElementById('toast-container');
    const scrollToTopBtn = document.getElementById('scroll-to-top-btn');

    // --- [NÂNG CẤP UX] --- Lấy các element của con trỏ chuột
    const customCursorElement = document.getElementById('custom-cursor-element');
    const cursorTrailElement = document.getElementById('cursor-trail');
    const cursorToggleButton = document.getElementById('cursor-toggle-btn');
    const cursorIconOn = cursorToggleButton?.querySelector('.cursor-icon-on');
    const cursorIconOff = cursorToggleButton?.querySelector('.cursor-icon-off');

    // Typing effect targets
    const typingEffectTargets = document.querySelectorAll('.typing-effect-target');

    // Online status indicator
    const onlineStatusIndicator = document.querySelector('.online-status-indicator');
    const footerOnlineIndicator = document.querySelector('.footer-online-indicator');

    // Footer dynamic quote
    const footerDynamicQuote = document.getElementById('footer-dynamic-quote');
    const currentYearSpan = document.getElementById('current-year');


    // --- Hằng số ---
    const HIDE_PROMPT_DURATION = 12 * 60 * 60 * 1000; // 12 tiếng
    const DEFAULT_VOLUME = 0.2;
    const NO_SONG_TEXT = "Chưa chọn bài";
    const TOAST_TIMEOUT = 3500;
    const EMOJI_CLICK_OFFSET = 16;
    const SONG_LOAD_TIMEOUT = 10000; // 10 giây

    // --- Biến trạng thái ---
    let animationFrameIdCursor = null; // ID cho requestAnimationFrame của con trỏ

    // --- Kiểm tra DOM cơ bản ---
    if (!loadingScreen || !lobbyScreen || !mainContent) {
        console.error("Lỗi nghiêm trọng: Không tìm thấy các phần tử màn hình chính.");
    }
    if (!audioPlayer) console.warn("Cảnh báo: Không tìm thấy audioPlayer.");


    // --- Hiệu ứng Typing ---
    function typeWriter(element, text, speed = 70, callback, clearPrevious = true) {
        if (!element || typeof text !== 'string') {
            if (callback) callback();
            return;
        }
        if (clearPrevious) element.textContent = '';
        let i = 0;

        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
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


    // --- [NÂNG CẤP UX] --- Logic bật/tắt hiệu ứng con trỏ chuột
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

        // Bắt đầu animation nếu chưa chạy
        if (!animationFrameIdCursor) {
            animateCustomCursor();
        }

        // Gán lại hàm để có thể xóa sau này
        window.handleCursorMouseMove = handleMouseMove;
    };

    const disableCustomCursor = () => {
        if (!customCursorElement || !cursorTrailElement) return;

        document.body.classList.add('cursor-effect-disabled');
        customCursorElement.style.opacity = '0';
        cursorTrailElement.style.opacity = '0';

        // Hủy animation frame và xóa event listener
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

    // Khởi tạo trạng thái con trỏ khi tải trang
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
    const sections = document.querySelectorAll('.content-section');
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

    // --- [NÂNG CẤP UX] --- Cập nhật hàm đổi bài hát với chỉ báo loading
    const changeAndPlaySong = (songSrc, songTitle) => {
        if (!audioPlayer || !songSrc) return;
        if (audioPlayer.src.endsWith(songSrc) && !audioPlayer.paused) {
            showToast(`Đang phát: ${songTitle}`, 'info');
            return;
        }
        djProgress++;
        if (djProgress === 3) unlockAchievement('dj');
        // Dừng bài hát hiện tại và hiển thị loading
        audioPlayer.pause();
        updateCurrentSongDisplay(songTitle, true);

        // Hủy bỏ timeout cũ nếu có
        if (window.songLoadTimeoutId) {
            clearTimeout(window.songLoadTimeoutId);
        }

        const onCanPlayThrough = () => {
            clearTimeout(window.songLoadTimeoutId);
            updateCurrentSongDisplay(songTitle, false); // Ẩn loading
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
            // Xóa listener để tránh bị gọi lại
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

        // Fallback: nếu bài hát không tải được sau X giây
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

        const handleTransitionEnd = (event) => {
            if (event.target !== currentScreen || event.propertyName !== 'opacity') return;

            currentScreen.classList.remove('active', 'fade-out');
            currentScreen.classList.add('hidden');

            nextScreen.classList.remove('hidden');
            nextScreen.classList.add('active');

            if (typeof callbackOnNextScreenActive === 'function') callbackOnNextScreenActive();

            currentScreen.removeEventListener('transitionend', handleTransitionEnd);
            document.body.classList.remove('no-scroll');
        };
        currentScreen.addEventListener('transitionend', handleTransitionEnd);
        currentScreen.classList.add('fade-out');
    }


    // --- Bio Details Modal Logic ---
    const openBioModal = () => {
        if (!bioDetailsModal || !bioModalBody || !bioExtendedContent) {
            console.warn("Các phần tử của Bio Modal không đầy đủ.");
            return;
        }
        bioModalBody.innerHTML = bioExtendedContent.innerHTML;
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

    initializeCarousel('#featured-links .projects-carousel-wrapper', '.project-item', '.carousel-control.prev', '.carousel-control.next');
    initializeCarousel('#testimonials .testimonials-carousel-wrapper', '.testimonial-item', '.carousel-control.testimonials-prev', '.carousel-control.testimonials-next');


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

    if (contactForm && formStatusMessage) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            formStatusMessage.textContent = 'Đang gửi...';
            formStatusMessage.className = 'form-status-message sending';
            setTimeout(() => {
                const success = Math.random() > 0.3;
                if (success) {
                    showToast('Lời nhắn của bạn đã được gửi!', 'success');
                    formStatusMessage.textContent = 'Gửi thành công!';
                    formStatusMessage.className = 'form-status-message success';
                    contactForm.reset();
                } else {
                    showToast('Gửi lời nhắn thất bại. Vui lòng thử lại.', 'error');
                    formStatusMessage.textContent = 'Gửi thất bại. Vui lòng thử lại.';
                    formStatusMessage.className = 'form-status-message error';
                }
                setTimeout(() => formStatusMessage.textContent = '', 3000);
            }, 1500);
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
                themeColorMeta.content = getComputedStyle(htmlElement).getPropertyValue('--color-bg-light-1').trim();
            } else {
                faviconLink.href = 'assets/favicon-dark.png';
                themeColorMeta.content = getComputedStyle(htmlElement).getPropertyValue('--color-bg-dark-1').trim();
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
        if (document.body.classList.contains('cursor-effect-disabled')) return; // Không tạo emoji nếu hiệu ứng bị tắt

        const interactiveElements = ['BUTTON', 'A', 'INPUT', 'TEXTAREA', 'SELECT', 'LABEL', '.btn-copy-account', '#volume-slider'];
        if (interactiveElements.includes(event.target.tagName) || event.target.closest(interactiveElements.join(', '))) {
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


    // [NÂNG CẤP] Lấy các phần tử cho Navigation và Command Palette
    const mainNav = document.querySelector('.main-nav');
    const navMobileToggle = document.querySelector('.nav-mobile-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
    const allNavLinks = document.querySelectorAll('.nav-link');
    const commandPaletteToggle = document.getElementById('command-palette-toggle');
    const commandPaletteOverlay = document.getElementById('command-palette-overlay');
    const commandPaletteInput = document.getElementById('command-palette-input');
    const commandPaletteResults = document.getElementById('command-palette-results');
    // [EASTER EGG] Lấy các phần tử cho Easter Eggs
    const matrixCanvas = document.getElementById('matrix-canvas');
    const profileAvatarContainer = document.querySelector('.profile-avatar-container');
    // --- [NÂNG CẤP] HỆ THỐNG THÀNH TỰU (ACHIEVEMENT SYSTEM) ---
    const achievementContainer = document.getElementById('achievement-container');
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
    let lastScrollTop = 0;

    // --- [NÂNG CẤP] Logic cho Thanh điều hướng (Navigation) ---
    if (mainNav) {
        // Ẩn/hiện khi cuộn
        window.addEventListener('scroll', () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop && scrollTop > mainNav.offsetHeight) {
                mainNav.classList.add('nav-hidden');
            } else {
                mainNav.classList.remove('nav-hidden');
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        }, { passive: true });

        // Menu trên di động
        if (navMobileToggle && navLinksContainer) {
            navMobileToggle.addEventListener('click', () => {
                navLinksContainer.classList.toggle('active');
                navMobileToggle.querySelector('i').classList.toggle('fa-bars');
                navMobileToggle.querySelector('i').classList.toggle('fa-times');
            });
            // Đóng menu khi click vào một link
            allNavLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navLinksContainer.classList.remove('active');
                    navMobileToggle.querySelector('i').classList.add('fa-bars');
                    navMobileToggle.querySelector('i').classList.remove('fa-times');
                });
            });
        }

        // Đánh dấu link active khi cuộn
        const sections = document.querySelectorAll('.content-section');
        const observerOptions = { root: null, rootMargin: "-50% 0px -50% 0px", threshold: 0 };
        const sectionObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    document.querySelector('.nav-link.active')?.classList.remove('active');
                    document.querySelector(`.nav-link[href="#${id}"]`)?.classList.add('active');
                }
            });
        }, observerOptions);
        sections.forEach(section => sectionObserver.observe(section));
    }

    // --- [NÂNG CẤP] Logic cho Form Liên hệ ---
    if (contactForm) {
        contactForm.addEventListener("submit", async function (event) {
            event.preventDefault();
            const form = event.target;
            const data = new FormData(form);
            formStatusMessage.textContent = 'Đang gửi...';
            formStatusMessage.className = 'form-status-message sending';
            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: data,
                    headers: { 'Accept': 'application/json' }
                });
                if (response.ok) {
                    formStatusMessage.textContent = "Gửi thành công!";
                    formStatusMessage.classList.add('success');
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
                formStatusMessage.textContent = "Lỗi! Không thể gửi.";
                formStatusMessage.classList.add('error');
                showToast(`Lỗi: ${error.message}`, 'error');
            } finally {
                setTimeout(() => { formStatusMessage.textContent = ''; formStatusMessage.className = 'form-status-message'; }, 5000);
            }
        });
    }

    // --- [NÂNG CẤP] Logic cho Command Palette ---
    const commands = [
        { name: 'Chuyển giao diện Sáng/Tối', type: 'Lệnh', action: () => themeToggleButton.click() },
        { name: 'Bật/Tắt hiệu ứng con trỏ', type: 'Lệnh', action: () => cursorToggleButton.click() },
        { name: 'Bật/Tắt nhạc nền', type: 'Lệnh', action: () => volumeBtn.click() },
        { name: 'Đi đến mục Giới thiệu', type: 'Điều hướng', action: () => document.getElementById('bio')?.scrollIntoView() },
        { name: 'Đi đến mục Kỹ năng', type: 'Điều hướng', action: () => document.getElementById('skills')?.scrollIntoView() },
        { name: 'Đi đến mục Dự án', type: 'Điều hướng', action: () => document.getElementById('featured-links')?.scrollIntoView() },
        { name: 'Đi đến mục Liên hệ', type: 'Điều hướng', action: () => document.getElementById('contact')?.scrollIntoView() },
        { name: 'Mở trang GitHub', type: 'Liên kết', action: () => window.open('https://github.com/caothongdev', '_blank') },
        { name: 'Mở trang Facebook', type: 'Liên kết', action: () => window.open('https://facebook.com/caothongdev', '_blank') }
    ];

    function renderCommandResults(query = '') {
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
        commandPaletteOverlay.classList.remove('hidden');
        requestAnimationFrame(() => {
            commandPaletteOverlay.classList.add('active');
            commandPaletteInput.focus();
        });
        renderCommandResults();
    }

    function closeCommandPalette() {
        commandPaletteOverlay.classList.remove('active');
        commandPaletteInput.value = '';
        setTimeout(() => commandPaletteOverlay.classList.add('hidden'), 300);
    }

    function handleCommandPaletteNav(e) {
        const items = commandPaletteResults.querySelectorAll('li');
        if (items.length === 0) return;
        let currentIndex = -1;
        const currentSelected = commandPaletteResults.querySelector('li.selected');
        if (currentSelected) {
            currentIndex = parseInt(currentSelected.dataset.index);
        }

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (currentSelected) currentSelected.classList.remove('selected');
            const nextIndex = (currentIndex + 1) % items.length;
            items[nextIndex].classList.add('selected');
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (currentSelected) currentSelected.classList.remove('selected');
            const prevIndex = (currentIndex - 1 + items.length) % items.length;
            items[prevIndex].classList.add('selected');
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (currentSelected) {
                const commandIndex = parseInt(currentSelected.dataset.index);
                const query = commandPaletteInput.value.toLowerCase();
                const filteredCommands = commands.filter(cmd => cmd.name.toLowerCase().includes(query));
                executeCommand(filteredCommands[commandIndex]);
            }
        }
    }

    if (commandPaletteToggle) {
        commandPaletteToggle.addEventListener('click', openCommandPalette);
        commandPaletteOverlay.addEventListener('click', (e) => { if (e.target === commandPaletteOverlay) closeCommandPalette() });
        commandPaletteInput.addEventListener('input', () => renderCommandResults(commandPaletteInput.value));
        commandPaletteInput.addEventListener('keydown', handleCommandPaletteNav);
        window.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                openCommandPalette();
            }
            if (e.key === 'Escape' && commandPaletteOverlay.classList.contains('active')) {
                closeCommandPalette();
            }
        });
    }

    // --- [EASTER EGG] Logic ---
    // 1. Konami Code
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
        const rainDrops = Array.from({ length: columns }).fill(1);

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

        const matrixInterval = setInterval(draw, 30);

        // Dừng và ẩn đi sau 10 giây
        setTimeout(() => {
            clearInterval(matrixInterval);
            matrixCanvas.style.display = 'none';
        }, 15000);
    }

    // 2. Avatar Click
    if (profileAvatarContainer) {
        profileAvatarContainer.addEventListener('click', () => {
            let clicks = parseInt(profileAvatarContainer.dataset.clicks) + 1;
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
        const loadingBar = document.querySelector('#loading-screen .loading-bar');
        if (loadingBar) {
            const loadingBarAfter = window.getComputedStyle(loadingBar, '::after');
            const animationDuration = parseFloat(loadingBarAfter.animationDuration) * 1000;
            setTimeout(() => {
                loadingBar.classList.add('finished');
                switchScreen(loadingScreen, lobbyScreen, () => {
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
            }, animationDuration > 0 ? animationDuration : 500);
        }
    };

    // === GẮN CÁC EVENT LISTENER KHÁC ===
    if (lobbyScreen && mainContent) {
        let lobbyScreenClicked = false;
        lobbyScreen.addEventListener('click', (event) => {
            if (lobbyScreenClicked || !lobbyScreen.classList.contains('active')) return;
            if ((musicSelectorIcon && musicSelectorIcon.contains(event.target)) ||
                (songSelectionModal && songSelectionModal.classList.contains('active') && songSelectionModal.contains(event.target))) {
                return;
            }
            lobbyScreenClicked = true;
            switchScreen(lobbyScreen, mainContent, () => { });
        });
    }

    if (volumeBtn) {
        volumeBtn.addEventListener('click', toggleMute);
        if (volumeSlider) {
            let hideSliderTimeout;
            const showVolumeSlider = () => {
                clearTimeout(hideSliderTimeout);
                volumeSlider.classList.remove('hidden');
                volumeSlider.style.opacity = '1';
            };
            const hideVolumeSlider = () => {
                if (document.activeElement === volumeSlider) return;
                hideSliderTimeout = setTimeout(() => {
                    volumeSlider.style.opacity = '0';
                    setTimeout(() => {
                        if (!volumeSlider.matches(':hover') && !volumeBtn.matches(':hover')) {
                            volumeSlider.classList.add('hidden');
                        }
                    }, 300);
                }, 1500);
            };

            volumeBtn.addEventListener('mouseenter', showVolumeSlider);
            volumeSlider.addEventListener('mouseenter', showVolumeSlider);

            const controlsContainer = document.getElementById('controls-container');
            if (controlsContainer) {
                controlsContainer.addEventListener('mouseleave', hideVolumeSlider);
            } else {
                volumeBtn.addEventListener('mouseleave', hideVolumeSlider);
                volumeSlider.addEventListener('mouseleave', hideVolumeSlider);
            }
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
        volumeSlider.addEventListener('mousedown', () => volumeSlider.classList.remove('hidden'));
        volumeSlider.addEventListener('touchstart', () => volumeSlider.classList.remove('hidden'), {
            passive: true
        });
    }

    // --- [NÂNG CẤP UX] --- Lưu lựa chọn của người dùng
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

    if (bioLearnMoreBtn) bioLearnMoreBtn.addEventListener('click', openBioModal);
    if (closeBioModalBtn) closeBioModalBtn.addEventListener('click', closeBioModal);
    if (bioDetailsModal) {
        bioDetailsModal.addEventListener('click', (event) => {
            if (event.target === bioDetailsModal) closeBioModal();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && bioDetailsModal.classList.contains('active')) closeBioModal();
        });
    }

    console.log("Khởi tạo JavaScript Nâng Cấp Toàn Diện hoàn tất.");
});
window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        unlockAchievement('explorer');
    }
}, { passive: true });
