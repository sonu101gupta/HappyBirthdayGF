(function () {
    let isPlaying = false;
    let audio = null;

    function createMusicButton() {
        audio = new Audio('./music.mpeg');
        audio.loop = true;
        audio.volume = 0.6;

        const style = document.createElement('style');
        style.textContent = `
            #music-btn {
                position: fixed;
                bottom: 24px;
                right: 24px;
                width: 52px;
                height: 52px;
                background: linear-gradient(135deg, #ff69b4, #da70d6);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 22px;
                cursor: pointer;
                z-index: 99999;
                box-shadow: 0 4px 18px rgba(255,105,180,0.55);
                transition: transform 0.2s;
                user-select: none;
                animation: pulse-btn 2s ease-in-out infinite;
            }
            @keyframes pulse-btn {
                0%, 100% { box-shadow: 0 4px 18px rgba(255,105,180,0.55); }
                50%       { box-shadow: 0 4px 30px rgba(255,105,180,0.9); }
            }
            #music-btn:hover { transform: scale(1.12); }
        `;
        document.head.appendChild(style);

        const btn = document.createElement('div');
        btn.id = 'music-btn';
        btn.innerHTML = '🎵';
        btn.title = 'Play music';

        btn.addEventListener('click', () => {
            if (!isPlaying) {
                audio.play().catch(e => console.warn('Audio play failed:', e));
                btn.innerHTML = '🔇';
                btn.title = 'Pause music';
                btn.style.animation = 'none';
                isPlaying = true;
            } else {
                audio.pause();
                btn.innerHTML = '🎵';
                btn.title = 'Play music';
                btn.style.animation = 'pulse-btn 2s ease-in-out infinite';
                isPlaying = false;
            }
        });

        document.body.appendChild(btn);
    }

    window.addEventListener('load', createMusicButton);
})();
