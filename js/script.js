// Sử dụng strict mode ngay từ đầu
'use strict';

// --- Danh sách Slogan/Thơ ---
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
    const loadingBar = document.querySelector('#loading-screen .loading-bar'); // Cụ thể hơn

    const currentSongDisplay = document.getElementById('current-song-display'); // Giả sử bạn có element này
    const currentSongTitleElement = document.getElementById('current-song-title'); // Giả sử bạn có element này

    const themeToggleButton = document.getElementById('theme-toggle-btn');
    const htmlElement = document.documentElement;
    const sunIcon = themeToggleButton?.querySelector('.theme-icon-sun');
    const moonIcon = themeToggleButton?.querySelector('.theme-icon-moon');
    const faviconLink = document.getElementById('favicon');
    const themeColorMeta = document.getElementById('theme-color-meta');

    const toastContainer = document.getElementById('toast-container');
    const scrollToTopBtn = document.getElementById('scroll-to-top-btn');

    // Custom cursor elements
    const customCursorElement = document.getElementById('custom-cursor-element');
    const cursorTrailElement = document.getElementById('cursor-trail');

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
    const TOAST_TIMEOUT = 3500; // Tăng nhẹ thời gian toast
    const EMOJI_CLICK_OFFSET = 16; // Offset cho emoji click

    // --- Kiểm tra DOM cơ bản ---
    if (!loadingScreen || !lobbyScreen || !mainContent) {
        console.error("Lỗi nghiêm trọng: Không tìm thấy các phần tử màn hình chính.");
        // return; // Có thể dừng ở đây nếu các màn hình chính bị thiếu
    }
    if (!audioPlayer) console.warn("Cảnh báo: Không tìm thấy audioPlayer.");


    // --- Hiệu ứng Typing --- (Yêu cầu 2)
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
            target.textContent = ''; // Xóa nội dung ban đầu trước khi gõ
            // Thêm một chút delay cho mỗi element để không gõ cùng lúc
            setTimeout(() => {
                typeWriter(target, textToType.trim(), 50);
            }, index * 200); // Delay tăng dần
        });
    }
    
    // --- Hiệu ứng cho Slogan ở Lobby ---
    const initialLobbySlogan = getRandomItem(slogans);
    const lobbySloganElement = document.getElementById('lobby-slogan');
    if (lobbySloganElement) {
        lobbySloganElement.textContent = initialLobbySlogan; // Hiển thị slogan ban đầu (có thể bỏ nếu muốn chỉ có typing)
    }


    // --- Trạng thái Online (Yêu cầu 2) ---
    function setOnlineStatus(isOnline) {
        if (onlineStatusIndicator) {
            onlineStatusIndicator.classList.toggle('active', isOnline);
            onlineStatusIndicator.classList.toggle('pulsing', isOnline); // Thêm class pulsing
            onlineStatusIndicator.title = isOnline ? "Đang hoạt động" : "Ngoại tuyến";
        }
        if (footerOnlineIndicator) {
             footerOnlineIndicator.classList.toggle('active', isOnline);
             footerOnlineIndicator.title = isOnline ? "Online" : "Offline";
        }
    }
    // Giả lập trạng thái online, bạn có thể thay thế bằng logic thực tế
    setOnlineStatus(true); 
    // setInterval(() => setOnlineStatus(Math.random() > 0.3), 10000); // Ví dụ thay đổi trạng thái


    // --- Custom Cursor (Nâng cấp từ yêu cầu trước) ---
    if (customCursorElement && cursorTrailElement) {
        let mouseX = 0, mouseY = 0;
        let trailX = 0, trailY = 0;
        const LERP_FACTOR_CURSOR = 0.2; // Mượt hơn cho con trỏ chính
        const LERP_FACTOR_TRAIL = 0.15; // Trễ hơn cho trail

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            // Con trỏ chính di chuyển gần như ngay lập tức nhưng vẫn có chút lerp cho mượt
            // customCursorElement.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
        });
        
        const animateCustomCursor = () => {
            // Con trỏ chính
            let currentCursorX = parseFloat(customCursorElement.style.left || mouseX);
            let currentCursorY = parseFloat(customCursorElement.style.top || mouseY);
            
            currentCursorX += (mouseX - currentCursorX) * LERP_FACTOR_CURSOR;
            currentCursorY += (mouseY - currentCursorY) * LERP_FACTOR_CURSOR;

            customCursorElement.style.left = currentCursorX + 'px';
            customCursorElement.style.top = currentCursorY + 'px';

            // Trail
            trailX += (currentCursorX - trailX) * LERP_FACTOR_TRAIL;
            trailY += (currentCursorY - trailY) * LERP_FACTOR_TRAIL;
            cursorTrailElement.style.left = trailX + 'px';
            cursorTrailElement.style.top = trailY + 'px';
            
            requestAnimationFrame(animateCustomCursor);
        };
        
        // Khởi tạo vị trí ban đầu và bắt đầu animation
        document.addEventListener('mousemove', (e) => {
            if (!customCursorElement.style.left) { // Chỉ đặt lần đầu
                customCursorElement.style.left = e.clientX + 'px';
                customCursorElement.style.top = e.clientY + 'px';
                trailX = e.clientX;
                trailY = e.clientY;
                cursorTrailElement.style.left = trailX + 'px';
                cursorTrailElement.style.top = trailY + 'px';
                animateCustomCursor();
            }
        }, { once: true });


        document.addEventListener('mouseleave', () => {
            customCursorElement.style.opacity = '0';
            cursorTrailElement.style.opacity = '0';
        });
        document.addEventListener('mouseenter', () => {
            customCursorElement.style.opacity = '1'; // Hoặc giá trị opacity trong CSS
            cursorTrailElement.style.opacity = '1'; // Hoặc giá trị opacity trong CSS
        });
    }


    // --- Kích hoạt animation cho sections khi cuộn vào view (Yêu cầu 1) ---
    // Đã có, có thể tùy chỉnh threshold hoặc thêm các loại animation khác nhau cho từng section nếu cần
    const sections = document.querySelectorAll('.content-section');
    if ("IntersectionObserver" in window && sections.length > 0) {
        const sectionObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Thêm class animation cụ thể nếu muốn
                    // const animationType = entry.target.dataset.animation || 'fadeInUp';
                    // entry.target.classList.add(animationType);
                    observer.unobserve(entry.target);
                }
            });
        }, { root: null, rootMargin: '0px', threshold: 0.15 }); // Tăng threshold một chút

        sections.forEach(section => sectionObserver.observe(section));
    } else {
        console.warn("IntersectionObserver không được hỗ trợ hoặc không có '.content-section'.");
        sections.forEach(section => section.classList.add('visible'));
    }


    // --- Hàm tạo và hiển thị Toast Notification (Yêu cầu 5, 6, 10) ---
    function showToast(message, type = 'info', duration = TOAST_TIMEOUT) {
    if (!toastContainer) {
        console.warn("Toast container (#toast-container) not found!");
        return;
    }
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`; // Trạng thái ban đầu ẩn (opacity 0, transformX 120%)

    let iconClass = 'fas fa-info-circle';
    if (type === 'success') iconClass = 'fas fa-check-circle';
    else if (type === 'error') iconClass = 'fas fa-times-circle';
    else if (type === 'warning') iconClass = 'fas fa-exclamation-triangle';
    toast.innerHTML = `<i class="${iconClass}"></i> <span>${message}</span>`; // Bọc message trong span nếu muốn style riêng

    toastContainer.appendChild(toast);

    // Buộc reflow và sau đó thêm class 'show' để kích hoạt animation xuất hiện
    requestAnimationFrame(() => {
        toast.classList.add('show');
    });

    // Timeout để bắt đầu ẩn toast
    const hideTimeout = setTimeout(() => {
        toast.classList.remove('show'); // Kích hoạt animation ẩn (trở về opacity 0, transformX 120%)
        // Thêm class 'hide' để đảm bảo ẩn nếu transitionend không được kích hoạt vì lý do nào đó
        // hoặc nếu bạn muốn style đặc biệt cho trạng thái đang ẩn đi.
        toast.classList.add('hide');


        // Fallback an toàn: Xóa toast sau một khoảng thời gian dài hơn transition một chút
        // phòng trường hợp sự kiện 'transitionend' không được kích hoạt.
        const fallbackRemoveTimeout = setTimeout(() => {
            if (toast.parentElement) {
                toast.remove();
            }
        }, duration + 600); // 600ms là thời gian transition (0.5s) + một chút buffer

        // Lắng nghe sự kiện transition kết thúc để xóa toast khỏi DOM
        toast.addEventListener('transitionend', function handleTransitionEnd(event) {
            // Chỉ thực hiện khi transition của opacity hoặc transform kết thúc
            if (event.target === toast && (event.propertyName === 'opacity' || event.propertyName === 'transform')) {
                clearTimeout(fallbackRemoveTimeout); // Hủy fallback vì transition đã chạy xong
                if (toast.parentElement) { // Kiểm tra lại trước khi xóa
                    toast.remove();
                }
                // Listener được tự động xóa do { once: true }
            }
        }, { once: true }); // { once: true } đảm bảo listener chỉ chạy một lần rồi tự xóa

    }, duration);
}

    // --- Xử lý Lightbox cho ảnh (Giữ nguyên, đã tốt) ---
    if (lightboxOverlay && lightboxImage && lightboxClose) {
        const closeLightbox = () => {
            lightboxOverlay.classList.remove('visible');
            setTimeout(() => {
                if (!lightboxOverlay.classList.contains('visible')) { // Double check
                    lightboxOverlay.classList.add('hidden');
                    document.body.style.overflow = '';
                }
            }, 300); // Phải khớp với CSS transition duration
        };
        const openLightbox = (imgElement) => {
            const imgSrc = imgElement.getAttribute('src');
            const imgAlt = imgElement.getAttribute('alt') || "Hình ảnh được phóng to";
            if (imgSrc) {
                lightboxImage.src = imgSrc;
                lightboxImage.alt = imgAlt;
                if (lightboxCaptionElement) lightboxCaptionElement.textContent = imgAlt;
                lightboxOverlay.classList.remove('hidden');
                requestAnimationFrame(() => { // Đảm bảo hidden được remove trước khi add visible
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
                    e.preventDefault(); // Ngăn hành vi mặc định nếu ảnh nằm trong thẻ a
                    openLightbox(img);
                });
            }
        });
        lightboxClose.addEventListener('click', closeLightbox);
        lightboxOverlay.addEventListener('click', (e) => { if (e.target === lightboxOverlay) closeLightbox(); });
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && lightboxOverlay.classList.contains('visible')) closeLightbox(); });
    }


    // --- Các hàm điều khiển Audio (Giữ nguyên, có thể thêm thông báo khi đổi bài) ---
    const updateCurrentSongDisplay = (songName) => {
        // Phần này bạn có thể tùy chỉnh nếu có element hiển thị tên bài hát
        if (currentSongTitleElement) currentSongTitleElement.textContent = songName || NO_SONG_TEXT;
    };
    const updateVolumeButton = () => { /* ... giữ nguyên ... */ 
        if (!volumeBtn || !audioPlayer) return;
        const currentVolume = audioPlayer.volume;
        const isMuted = audioPlayer.muted;
        const isEffectivelyMuted = isMuted || currentVolume === 0;
        volumeBtn.classList.toggle('muted', isEffectivelyMuted);
        volumeBtn.setAttribute('aria-label', isEffectivelyMuted ? 'Bật tiếng' : 'Tắt tiếng / Điều chỉnh âm lượng');
        volumeBtn.setAttribute('aria-pressed', isMuted.toString());
        
        let icon = 'fas ';
        if (isEffectivelyMuted || currentVolume <= 0.01) { icon += 'fa-volume-mute'; }
        else if (currentVolume <= 0.5) { icon += 'fa-volume-down'; }
        else { icon += 'fa-volume-up'; }
        volumeBtn.innerHTML = `<i class="${icon}"></i>`;
    };
    const changeAndPlaySong = (songSrc, songTitle) => {
        if (!audioPlayer || !songSrc) return;
        if (audioPlayer.src.endsWith(songSrc) && !audioPlayer.paused) {
            showToast(`Đang phát: ${songTitle}`, 'info');
            return;
        }
        audioPlayer.src = songSrc;
        audioPlayer.load();
        audioPlayer.play().then(() => {
            updateVolumeButton();
            updateCurrentSongDisplay(songTitle);
            showToast(`Đang phát: ${songTitle}`, 'success');
            try { localStorage.setItem('lastSelectedSongSrc', songSrc); localStorage.setItem('lastSelectedSongTitle', songTitle); } catch (e) { console.error("Lỗi lưu bài hát:", e); }
        }).catch(error => {
            console.error(`Lỗi phát nhạc ${songSrc}:`, error);
            updateCurrentSongDisplay(NO_SONG_TEXT);
            showToast(`Lỗi phát bài: ${songTitle}`, 'error');
        });
    };
    const playMusic = () => { /* ... giữ nguyên ... */ 
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
                if(volumeSlider) volumeSlider.value = audioPlayer.volume;
            }
            audioPlayer.muted = false;
            audioPlayer.play()
                .then(() => {
                    updateVolumeButton();
                    const lastTitle = localStorage.getItem('lastSelectedSongTitle') || "Đang phát";
                    updateCurrentSongDisplay(lastTitle);
                    showToast(`Tiếp tục phát: ${lastTitle}`, 'info');
                })
                .catch(error => {
                    console.error("Lỗi phát nhạc:", error);
                    showToast("Lỗi khi cố gắng phát nhạc.", "error");
                });
        }
    };
    const stopMusic = () => { /* ... giữ nguyên ... */ 
        if (audioPlayer && !audioPlayer.paused) {
            audioPlayer.pause();
            updateVolumeButton();
            showToast("Đã tạm dừng nhạc.", "info");
        }
    };
    const toggleMute = () => { /* ... giữ nguyên ... */ 
        if (!audioPlayer) return;
        audioPlayer.muted = !audioPlayer.muted;
        if (!audioPlayer.muted && audioPlayer.volume === 0 && volumeSlider) {
            audioPlayer.volume = DEFAULT_VOLUME;
            if(volumeSlider) volumeSlider.value = audioPlayer.volume;
        }
        updateVolumeButton();
        showToast(audioPlayer.muted ? "Đã tắt tiếng" : "Đã bật tiếng", "info");
    };


    // --- Đồng hồ (Giữ nguyên) ---
    let clockIntervalId = null;
    function updateClock() { /* ... giữ nguyên ... */ 
        if (!clockDisplay) return;
        const now = new Date();
        clockDisplay.textContent = now.toLocaleTimeString('vi-VN', {
            hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
        }).replace(/\./g, ':');
    }
    function startClock() { /* ... giữ nguyên ... */ 
        if (clockDisplay && !clockIntervalId) {
            updateClock();
            clockIntervalId = setInterval(updateClock, 1000);
        }
    }

    // --- Music Prompt (Giữ nguyên) ---
    const showMusicPrompt = () => { /* ... giữ nguyên ... */ 
        if (!musicPromptOverlay) return;
        if (musicDontShowAgainCheckbox) musicDontShowAgainCheckbox.checked = false;
        musicPromptOverlay.classList.remove('hidden');
        musicPromptOverlay.classList.add('active');
    };
    const hideMusicPrompt = (duration = 300) => { /* ... giữ nguyên ... */ 
        if (!musicPromptOverlay) return;
        musicPromptOverlay.classList.remove('active');
        setTimeout(() => {
            if (!musicPromptOverlay.classList.contains('active')) musicPromptOverlay.classList.add('hidden');
        }, duration);
    };
    const handleMusicPromptPreference = () => { /* ... giữ nguyên ... */ 
         if (musicDontShowAgainCheckbox && musicDontShowAgainCheckbox.checked) {
            const hideUntilTimestamp = Date.now() + HIDE_PROMPT_DURATION;
            try { localStorage.setItem('hideMusicPromptUntil', hideUntilTimestamp.toString()); }
            catch (e) { console.error("Lỗi lưu vào localStorage:", e); }
        }
        hideMusicPrompt();
    };

    // --- Xử lý chuyển đổi màn hình (Giữ nguyên) ---
    function switchScreen(currentScreen, nextScreen, callbackOnNextScreenActive) { /* ... giữ nguyên ... */ 
        if (!currentScreen || !nextScreen) {
            console.error("Lỗi chuyển màn hình: một hoặc cả hai màn hình không tồn tại.");
            if(callbackOnNextScreenActive && typeof callbackOnNextScreenActive === 'function') callbackOnNextScreenActive();
            return;
        }
        // Thêm class 'no-scroll' vào body khi chuyển màn hình để tránh lỗi layout
        document.body.classList.add('no-scroll');

        const handleTransitionEnd = (event) => {
            if (event.target !== currentScreen || event.propertyName !== 'opacity') return;
            
            currentScreen.classList.remove('active', 'fade-out');
            currentScreen.classList.add('hidden');
            
            nextScreen.classList.remove('hidden');
            nextScreen.classList.add('active');
            
            if (typeof callbackOnNextScreenActive === 'function') callbackOnNextScreenActive();
            
            currentScreen.removeEventListener('transitionend', handleTransitionEnd);
            // Xóa class 'no-scroll' sau khi chuyển xong
            document.body.classList.remove('no-scroll');
        };
        currentScreen.addEventListener('transitionend', handleTransitionEnd);
        currentScreen.classList.add('fade-out');
    }


    // --- Bio Details Modal Logic (Giữ nguyên) ---
    const openBioModal = () => { /* ... giữ nguyên ... */ 
        if (!bioDetailsModal || !bioModalBody || !bioExtendedContent) {
            console.warn("Các phần tử của Bio Modal không đầy đủ."); return;
        }
        bioModalBody.innerHTML = bioExtendedContent.innerHTML;
        bioDetailsModal.classList.remove('hidden');
        requestAnimationFrame(() => bioDetailsModal.classList.add('active'));
        document.body.style.overflow = 'hidden';
        closeBioModalBtn?.focus();
    };
    const closeBioModal = () => { /* ... giữ nguyên ... */ 
        if (!bioDetailsModal) return;
        bioDetailsModal.classList.remove('active');
        setTimeout(() => {
            if (!bioDetailsModal.classList.contains('active')) {
                bioDetailsModal.classList.add('hidden');
                document.body.style.overflow = '';
            }
        }, 300);
    };


    // --- Carousels (Yêu cầu 3, 4) ---
    function initializeCarousel(carouselId, itemSelector, prevBtnSelector, nextBtnSelector) {
        const carouselWrapper = document.querySelector(carouselId);
        if (!carouselWrapper) {
            // console.warn(`Carousel wrapper "${carouselId}" not found.`);
            return;
        }
        const carouselGrid = carouselWrapper.querySelector('.projects-grid, .testimonials-grid'); // Chung cho cả 2
        const carouselItems = carouselGrid ? Array.from(carouselGrid.querySelectorAll(itemSelector)) : [];
        const prevBtn = carouselWrapper.querySelector(prevBtnSelector);
        const nextBtn = carouselWrapper.querySelector(nextBtnSelector);

        if (!carouselGrid || carouselItems.length === 0 || !prevBtn || !nextBtn) {
            // console.warn(`Missing elements for carousel "${carouselId}". Items found: ${carouselItems.length}`);
            if(prevBtn) prevBtn.style.display = 'none';
            if(nextBtn) nextBtn.style.display = 'none';
            return;
        }

        let currentIndex = 0;
        let itemsPerPage = 1; // Mặc định cho mobile

        function updateItemsPerPage() {
            if (window.innerWidth >= 1024) itemsPerPage = 3; // Desktop
            else if (window.innerWidth >= 768) itemsPerPage = 2; // Tablet
            else itemsPerPage = 1; // Mobile
            
            // Ẩn nút nếu không đủ item để cuộn
            const canScroll = carouselItems.length > itemsPerPage;
            prevBtn.style.display = canScroll ? 'flex' : 'none';
            nextBtn.style.display = canScroll ? 'flex' : 'none';
        }

        function showSlide(index) {
            const totalItems = carouselItems.length;
            if (totalItems <= itemsPerPage) { // Nếu không đủ item để cuộn
                 carouselGrid.style.transform = `translateX(0%)`;
                 return;
            }

            // Đảm bảo index nằm trong khoảng hợp lệ
            if (index >= totalItems - itemsPerPage + 1) currentIndex = 0; // Loop về đầu
            else if (index < 0) currentIndex = totalItems - itemsPerPage; // Loop về cuối
            else currentIndex = index;
            
            const itemWidthPercentage = 100 / itemsPerPage; // % chiều rộng của một item
            // Tính toán translateX dựa trên item đầu tiên của trang hiện tại
            const translateXValue = -currentIndex * itemWidthPercentage;
            carouselGrid.style.transform = `translateX(${translateXValue}%)`;
        }
        
        prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
        nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));

        window.addEventListener('resize', () => {
            updateItemsPerPage();
            showSlide(currentIndex); // Recalculate slide position on resize
        });
        
        updateItemsPerPage();
        showSlide(0); // Hiển thị slide đầu tiên
    }

    initializeCarousel('#featured-links .projects-carousel-wrapper', '.project-item', '.carousel-control.prev', '.carousel-control.next');
    initializeCarousel('#testimonials .testimonials-carousel-wrapper', '.testimonial-item', '.carousel-control.testimonials-prev', '.carousel-control.testimonials-next');


    // --- Payment Section: Copy to Clipboard (Yêu cầu 5) ---
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
                        // Thêm hiệu ứng cho nút copy (Yêu cầu 10)
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


    // --- Contact Form (Yêu cầu 6) ---
    const contactForm = document.getElementById('contact-form');
    const formStatusMessage = contactForm?.querySelector('.form-status-message');

    if (contactForm && formStatusMessage) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            formStatusMessage.textContent = 'Đang gửi...';
            formStatusMessage.className = 'form-status-message sending';

            // Lấy dữ liệu form (ví dụ)
            // const formData = new FormData(contactForm);
            // const name = formData.get('name');
            // const email = formData.get('email');
            // const message = formData.get('message');
            // console.log("Form Data:", { name, email, message });

            // --- GIẢ LẬP GỬI FORM ---
            // Trong thực tế, bạn sẽ gửi dữ liệu này đến một backend endpoint
            // Ví dụ: fetch('YOUR_FORM_ENDPOINT', { method: 'POST', body: formData })
            //         .then(response => response.json())
            //         .then(data => { ... })
            //         .catch(error => { ... });

            setTimeout(() => {
                // Giả lập thành công hoặc thất bại
                const success = Math.random() > 0.3; // 70% thành công
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
                 setTimeout(() => formStatusMessage.textContent = '', 3000); // Xóa thông báo sau 3s
            }, 1500);
        });
    }

    // --- Skills: Progress Bar (Yêu cầu 7) ---
    // CSS đã xử lý việc hiển thị progress bar tĩnh.
    // Nếu muốn animation khi cuộn vào, có thể dùng IntersectionObserver cho từng .skill-progress

    // --- Footer (Yêu cầu 8) ---
    if (currentYearSpan) currentYearSpan.textContent = new Date().getFullYear();
    if (footerDynamicQuote) {
        footerDynamicQuote.textContent = getRandomItem(footerQuotes);
        // setInterval(() => { // Thay đổi quote mỗi 10 giây
        //     footerDynamicQuote.classList.add('fade-out-quote');
        //     setTimeout(() => {
        //         footerDynamicQuote.textContent = getRandomItem(footerQuotes);
        //         footerDynamicQuote.classList.remove('fade-out-quote');
        //     }, 500); // Khớp với CSS transition
        // }, 10000);
    }
    
    // --- Scroll-to-Top Button (Yêu cầu 8 - Nâng cao) ---
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) { // Hiển thị nút khi cuộn xuống 300px
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


    // --- Theme Toggle & Dynamic Favicon (Yêu cầu 10) ---
    if (themeToggleButton && sunIcon && moonIcon && faviconLink && themeColorMeta) {
        const applyTheme = (theme, initialLoad = false) => {
            htmlElement.dataset.theme = theme;
            sunIcon.style.display = theme === 'light' ? 'none' : 'inline-block';
            moonIcon.style.display = theme === 'light' ? 'inline-block' : 'none';
            themeToggleButton.setAttribute('aria-label', theme === 'light' ? 'Chuyển sang giao diện tối' : 'Chuyển sang giao diện sáng');
            themeToggleButton.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
            
            // Đổi favicon và theme-color
            if (theme === 'light') {
                faviconLink.href = 'assets/favicon-light.png'; // Cần có file này
                themeColorMeta.content = getComputedStyle(htmlElement).getPropertyValue('--color-bg-light-1').trim();
            } else {
                faviconLink.href = 'assets/favicon-dark.png'; // Cần có file này
                themeColorMeta.content = getComputedStyle(htmlElement).getPropertyValue('--color-bg-dark-1').trim();
            }

            if (!initialLoad) {
                showToast(`Đã chuyển sang giao diện ${theme === 'light' ? 'sáng' : 'tối'}`, 'info', 2000);
            }
        };

        let currentTheme = localStorage.getItem('theme') || 
                           (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        applyTheme(currentTheme, true); // Áp dụng theme ban đầu

        themeToggleButton.addEventListener('click', () => {
            const newTheme = htmlElement.dataset.theme === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
            try { localStorage.setItem('theme', newTheme); } catch (e) { console.error("Lỗi lưu theme:", e); }
        });

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            if (!localStorage.getItem('theme')) { // Chỉ thay đổi nếu người dùng chưa tự chọn theme
                applyTheme(event.matches ? "dark" : "light");
            }
        });
    } else {
        console.warn("Các phần tử chuyển theme hoặc favicon không đầy đủ.");
    }


    // --- Click Emoji Effect (Yêu cầu 10 - Nâng cấp) ---
    const emojis = ["💖", "🎉", "✨", "🚀", "🎂", "😙", "🌟", "🎈", "🌸", "💯", "👍", "🔥"];
    function createClickEmoji(event) {
        const interactiveElements = ['BUTTON', 'A', 'INPUT', 'TEXTAREA', 'SELECT', 'LABEL', '.btn-copy-account', '#volume-slider'];
        if (interactiveElements.includes(event.target.tagName) || event.target.closest(interactiveElements.join(', '))) {
            return;
        }
        // Bỏ qua nếu click vào các control của trang
        if (event.target.closest('#controls-container, .modal-overlay, .prompt-overlay, .lightbox-overlay, .carousel-control')) return;


        const emojiSpan = document.createElement('span');
        emojiSpan.classList.add('click-emoji');
        emojiSpan.textContent = getRandomItem(emojis);

        // Random size
        const randomSize = Math.random() * 1 + 1; // Từ 1rem đến 2rem
        emojiSpan.style.fontSize = `${randomSize}rem`;

        // Random initial offset slightly
        const offsetX = (Math.random() - 0.5) * 20; // -10px to 10px
        const offsetY = (Math.random() - 0.5) * 20;

        const scrollX = window.scrollX || window.pageXOffset;
        const scrollY = window.scrollY || window.pageYOffset;

        emojiSpan.style.left = `${event.clientX + scrollX - (randomSize * 8) + offsetX}px`; // Điều chỉnh offset dựa trên size
        emojiSpan.style.top = `${event.clientY + scrollY - (randomSize * 8) + offsetY}px`;

        // Random animation properties (ví dụ: góc xoay, đường bay cong nhẹ - phức tạp hơn)
        // Hiện tại CSS đang xử lý floatUpAndFade, có thể thêm class cho các kiểu animation khác nhau
        // Ví dụ: emojiSpan.style.setProperty('--emoji-rotate-end', `${(Math.random() - 0.5) * 60}deg`);

        document.body.appendChild(emojiSpan);
        setTimeout(() => emojiSpan.remove(), 1200); // Thời gian khớp với animation
    }
    document.body.addEventListener('click', createClickEmoji);


    // --- Image Loading Animation/Placeholder (Yêu cầu 10 - Cơ bản) ---
    // Sử dụng loading="lazy" trong HTML là cách tốt nhất.
    // Để có placeholder, bạn cần cấu trúc HTML khác (ví dụ: div placeholder, rồi JS thay bằng img khi load)
    // Đây là ví dụ cơ bản nếu bạn muốn thêm class 'loaded' sau khi ảnh tải xong
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach(img => {
        // Thêm một div placeholder (nếu chưa có) hoặc style cho ảnh mờ đi ban đầu
        // img.style.opacity = '0.5'; // Ví dụ làm mờ ban đầu
        // img.style.transition = 'opacity 0.5s ease-in-out';

        img.addEventListener('load', () => {
            img.classList.add('image-loaded'); // Thêm class để CSS có thể style
            // img.style.opacity = '1'; // Hiện rõ ảnh
        }, { once: true });
        img.addEventListener('error', () => {
            // Xử lý lỗi tải ảnh nếu cần, ví dụ hiển thị ảnh fallback
            img.classList.add('image-error');
            // img.style.opacity = '1'; // Vẫn hiện (có thể là ảnh lỗi)
        });
    });


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
                audioPlayer.load(); // Quan trọng: load src trước khi cố gắng play hoặc lấy duration
                updateCurrentSongDisplay(lastSelectedSongTitle || NO_SONG_TEXT);
            } else {
                updateCurrentSongDisplay(NO_SONG_TEXT);
            }
        } catch (e) { 
            console.error("Lỗi đọc bài hát từ localStorage:", e);
            updateCurrentSongDisplay(NO_SONG_TEXT);
        }
    } else {
        updateCurrentSongDisplay(NO_SONG_TEXT);
    }

    window.onload = () => {
        if (loadingBar) {
            // Đảm bảo animation fill-loading-bar hoàn thành trước khi chuyển màn hình
            const loadingBarAfter = window.getComputedStyle(loadingBar, '::after');
            const animationDuration = parseFloat(loadingBarAfter.animationDuration) * 1000; // ms

            setTimeout(() => {
                loadingBar.classList.add('finished'); // Đảm bảo thanh bar đầy 100%
                 // Áp dụng hiệu ứng typing cho các target sau khi lobby active
                switchScreen(loadingScreen, lobbyScreen, () => {
                    if (lobbySloganElement) typeWriter(lobbySloganElement, initialLobbySlogan, 70);
                    applyTypingEffectToElements(); // Áp dụng cho các element khác
                    
                    let hideUntilTime = 0;
                    try {
                        const hideUntilTimeStr = localStorage.getItem('hideMusicPromptUntil');
                        if (hideUntilTimeStr) hideUntilTime = parseInt(hideUntilTimeStr, 10);
                    } catch(e) { console.error("Lỗi đọc hideMusicPromptUntil:", e); }

                    if (isNaN(hideUntilTime) || Date.now() >= hideUntilTime) {
                        if (hideUntilTime > 0) {
                            try { localStorage.removeItem('hideMusicPromptUntil'); } catch (e) { console.error("Lỗi xóa hideMusicPromptUntil:", e); }
                        }
                        if (audioPlayer && audioPlayer.paused && (!audioPlayer.currentSrc || audioPlayer.currentSrc === window.location.href)) {
                             setTimeout(showMusicPrompt, 700); // Delay một chút
                        }
                    }
                });
            }, animationDuration > 0 ? animationDuration : 500); // Nếu không có animation duration, đợi 0.5s
        } else {
             switchScreen(loadingScreen, lobbyScreen, () => {
                if (lobbySloganElement) typeWriter(lobbySloganElement, initialLobbySlogan, 70);
                applyTypingEffectToElements();
             });
        }
    };

    // === GẮN CÁC EVENT LISTENER KHÁC ===
    if (lobbyScreen && mainContent) {
        let lobbyScreenClicked = false;
        lobbyScreen.addEventListener('click', (event) => {
            if (lobbyScreenClicked || !lobbyScreen.classList.contains('active')) return;
            // Không chuyển màn hình nếu click vào music selector hoặc modal đang mở
            if ((musicSelectorIcon && musicSelectorIcon.contains(event.target)) || 
                (songSelectionModal && songSelectionModal.classList.contains('active') && songSelectionModal.contains(event.target))) {
                return;
            }
            lobbyScreenClicked = true; // Chỉ cho phép click một lần để chuyển
            switchScreen(lobbyScreen, mainContent, () => {
                // Callback sau khi main content active
            });
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
                if (document.activeElement === volumeSlider) return; // Không ẩn nếu đang focus
                hideSliderTimeout = setTimeout(() => {
                    volumeSlider.style.opacity = '0';
                    setTimeout(() => { 
                        if (!volumeSlider.matches(':hover') && !volumeBtn.matches(':hover')) {
                            volumeSlider.classList.add('hidden');
                        }
                    }, 300); // Phải khớp với CSS transition
                }, 1500); // Tự động ẩn sau 1.5s nếu không tương tác
            };
            
            volumeBtn.addEventListener('mouseenter', showVolumeSlider);
            volumeSlider.addEventListener('mouseenter', showVolumeSlider); // Giữ slider hiện khi di chuột vào nó
            
            const controlsContainer = document.getElementById('controls-container');
            if (controlsContainer) {
                controlsContainer.addEventListener('mouseleave', hideVolumeSlider);
            } else {
                volumeBtn.addEventListener('mouseleave', hideVolumeSlider);
                volumeSlider.addEventListener('mouseleave', hideVolumeSlider);
            }
            volumeSlider.addEventListener('blur', hideVolumeSlider); // Ẩn khi mất focus
        }
    }
    if (volumeSlider && audioPlayer) {
        volumeSlider.addEventListener('input', () => {
            const newVolume = parseFloat(volumeSlider.value);
            if (!isNaN(newVolume)) {
                audioPlayer.volume = newVolume;
                audioPlayer.muted = (newVolume === 0);
                updateVolumeButton();
                try { localStorage.setItem('audioVolume', newVolume.toString()); } catch(e) { console.error("Lỗi lưu âm lượng:", e);}
            }
        });
        // Giữ slider hiện khi đang kéo
        volumeSlider.addEventListener('mousedown', () => volumeSlider.classList.remove('hidden')); 
        volumeSlider.addEventListener('touchstart', () => volumeSlider.classList.remove('hidden'), { passive: true });
    }

    if (playMusicYesBtn) playMusicYesBtn.addEventListener('click', () => { handleMusicPromptPreference(); playMusic(); });
    if (playMusicNoBtn) playMusicNoBtn.addEventListener('click', () => { handleMusicPromptPreference(); stopMusic(); updateCurrentSongDisplay(NO_SONG_TEXT); });

    // Modal chọn nhạc
    const openSongModal = () => {
        if(songSelectionModal) {
            songSelectionModal.classList.remove('hidden');
            requestAnimationFrame(() => songSelectionModal.classList.add('active'));
            closeModalSongBtn?.focus();
        }
    };
    const closeSongModal = (duration = 300) => {
        if(songSelectionModal) {
            songSelectionModal.classList.remove('active');
            setTimeout(() => { if(!songSelectionModal.classList.contains('active')) songSelectionModal.classList.add('hidden'); }, duration);
        }
    };

    if (musicSelectorIcon && songSelectionModal && songList && closeModalSongBtn) {
        musicSelectorIcon.addEventListener('click', (event) => { event.stopPropagation(); openSongModal(); });
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
        songSelectionModal.addEventListener('click', (event) => { if (event.target === songSelectionModal) closeSongModal(); });
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && songSelectionModal.classList.contains('active')) closeSongModal(); });
    }

    if (bioLearnMoreBtn) bioLearnMoreBtn.addEventListener('click', openBioModal);
    if (closeBioModalBtn) closeBioModalBtn.addEventListener('click', closeBioModal);
    if (bioDetailsModal) {
        bioDetailsModal.addEventListener('click', (event) => { if (event.target === bioDetailsModal) closeBioModal(); });
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && bioDetailsModal.classList.contains('active')) closeBioModal(); });
    }
    
    console.log("Khởi tạo JavaScript nâng cao hoàn tất.");
});
