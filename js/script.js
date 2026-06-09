document.addEventListener('DOMContentLoaded', () => {
            
    // 1. Generate Starry Background
const starsContainer = document.getElementById('stars');
    
    // Mendeteksi apakah pengunjung menggunakan HP (lebar layar kurang dari 768px)
    const isMobile = window.innerWidth < 768;
    
    // Jika pakai HP, tampilkan 40 bintang saja. Jika pakai Laptop, tampilkan 150 bintang.
    const starCount = isMobile ? 10 : 60;

    for(let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        const size = Math.random() * 3;
        star.style.width = `${size}px`; 
        star.style.height = `${size}px`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        starsContainer.appendChild(star);
    }

    // 2. Loading Screen Logic
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const loadingText = document.getElementById('loading-text');
    
    let progress = 0;
    const loadingInterval = setInterval(() => {
        progress += (100 / (3000 / 30)); // 3 seconds total
        if(progress >= 100) {
            progress = 100;
            clearInterval(loadingInterval);
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.visibility = 'hidden';
                    document.body.classList.remove('overflow-hidden');
                    mainContent.classList.remove('opacity-0');
                }, 800);
            }, 300);
        }
        progressBar.style.width = `${progress}%`;
        progressText.innerText = `${Math.floor(progress)}%`;

        if(progress > 30 && progress < 70) {
            loadingText.style.opacity = 0;
            setTimeout(() => { loadingText.innerText = "Jalan yang berbeda, ribuan tawa, memori yang abadi bersama..."; loadingText.style.opacity = 1; }, 150);
        } else if (progress >= 71) {
            loadingText.style.opacity = 0;
            setTimeout(() => { loadingText.innerText = "Selamat datang di rasi bintang keabadian kita."; loadingText.style.opacity = 1; }, 150);
        }
    }, 30);

    // 3. GENERATE YEARBOOK GRID (36 MEMBERS)
    const yearbookGrid = document.getElementById('yearbook-grid');
    
    const classmates = [
        {
            id: 1,
            name: "Aidil Fitriansyah",
            img: "img/pasfoto/1.jpg"
        },
        {
            id: 2,
            name: "Ben Timothy",
            img: "img/pasfoto/2.jpg"
        },
        {
            id: 3,
            name: "Callysta Varentyni",
            img: "img/pasfoto/3.jpg"
        },
        {
            id: 4,
            name: "Calvin Djonathandy Julius",
            img: "img/pasfoto/4.jpg"
        },
        {
            id: 5,
            name: "Celsie Eliza",
            img: "img/pasfoto/5.jpg"
        },
        {
            id: 6,
            name: "Celsy",
            img: "img/pasfoto/6.jpg"
        },
        {
            id: 7,
            name: "Clara Visilia Julianti",
            img: "img/pasfoto/7.jpg"
        },
        {
            id: 8,
            name: "Chrisnaldo Nigel",
            img: "img/pasfoto/8.jpg"
        },
        {
            id: 9,
            name: "Daniel",
            img: "img/pasfoto/9.jpg"
        },
        {
            id: 10,
            name: "Dhea Ayuningtyaaz",
            img: "img/pasfoto/10.jpg"
        },
        {
            id: 11,
            name: "Esaw Bajaltn",
            img: "img/pasfoto/11.jpg"
        },
        {
            id: 12,
            name: "Handina Tripuspita Siwi",
            img: "img/pasfoto/12.jpg"
        },
        {
            id: 13,
            name: "Ilen Friscariani",
            img: "img/pasfoto/13.jpg"
        },
        {
            id: 14,
            name: "Indah Gisela",
            img: "img/pasfoto/14.jpg"
        },
        {
            id: 15,
            name: "Joanna Natasha Christy",
            img: "img/pasfoto/15.jpg"
        },
        {
            id: 16,
            name: "Kevin Sutandi",
            img: "img/pasfoto/16.jpg"
        },
        {
            id: 17,
            name: "Lia Maria",
            img: "img/pasfoto/17.jpg"
        },
        {
            id: 18,
            name: "Marvellino Alfred",
            img: "img/pasfoto/18.jpg"
        },
        {
            id: 19,
            name: "Nadia Catherine",
            img: "img/pasfoto/19.jpg"
        },
        {
            id: 20,
            name: "Novita Natasya",
            img: "img/pasfoto/20.jpg"
        },
        {
            id: 21,
            name: "Raetifah",
            img: "img/pasfoto/21.jpg"
        },
        {
            id: 22,
            name: "Rayya Asyifa Zahra",
            img: "img/pasfoto/22.jpg"
        },
        {
            id: 23,
            name: "Reno Ratri Anggari",
            img: "img/pasfoto/23.jpg"
        },
        {
            id: 24,
            name: "Ririn Andianti",
            img: "img/pasfoto/24.jpg"
        },
        {
            id: 25,
            name: "Saranaya",
            img: "img/pasfoto/25.jpg"
        },
        {
            id: 26,
            name: "Siti Aisyah April Yanti",
            img: "img/pasfoto/26.jpg"
        },
        {
            id: 27,
            name: "Syafitri Rahmadani",
            img: "img/pasfoto/27.jpg"
        },
        {
            id: 28,
            name: "Syarifah Nazwa Rahmadani",
            img: "img/pasfoto/28.jpg"
        },
        {
            id: 29,
            name: "Theresia Tiurma Mangihut G",
            img: "img/pasfoto/29.jpg"
        },
        {
            id: 30,
            name: "Tonny Muhaimin",
            img: "img/pasfoto/30.jpg"
        },
        {
            id: 31,
            name: "Valensiuc",
            img: "img/pasfoto/31.jpg"
        },
        {
            id: 32,
            name: "Vivi Febriana",
            img: "img/pasfoto/32.jpg"
        },
        {
            id: 33,
            name: "Wahyu Nufail Aufa",
            img: "img/pasfoto/33.jpg"
        },
        {
            id: 34,
            name: "Willy",
            img: "img/pasfoto/34.jpg"
        },
        {
            id: 35,
            name: "Yangking Halim",
            img: "img/pasfoto/35.jpg"
        },
        {
            id: 36,
            name: "Yanuar Mardianto",
            img: "img/pasfoto/36.jpg"
        }
    ];

    classmates.forEach(person => {
        const paddedId = person.id.toString().padStart(2, '0');
        
        const cardHtml = `
            <div class="reveal relative aspect-[3/4] overflow-hidden rounded-lg cursor-pointer group bg-brandBase border border-brandAccent1/40 hover:border-brandAccent2 transition-colors duration-400 shadow-lg">
                <img src="${person.img}" alt="${person.name}" class="absolute inset-0 w-full h-full object-cover transition-all duration-500 filter grayscale sepia(30%) hue-rotate(180deg) brightness-[0.7] group-hover:filter-none group-hover:scale-105" loading="lazy">
                
                <div class="absolute inset-0 bg-gradient-to-t from-brandBase via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>

                <div class="absolute top-3 left-3 text-[9px] md:text-[10px] text-brandText/60 tracking-widest font-mono z-10 transition-opacity duration-300 group-hover:text-brandText font-bold">
                    STAR #${paddedId}
                </div>

                <div class="absolute bottom-3 left-2 right-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out z-20">
                    <div class="glass-panel text-center py-2.5 px-2 rounded-md border-brandAccent1/50">
                        <h3 class="text-brandText text-xs md:text-sm font-bold tracking-wider truncate">${person.name}</h3>
                    </div>
                </div>
            </div>
        `;
        yearbookGrid.insertAdjacentHTML('beforeend', cardHtml);
    });

    // 4. Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.10 });

    revealElements.forEach(el => revealObserver.observe(el));

    // 5. FLOATING MUSIC PLAYER WIDGET LOGIC
    const musicTrigger = document.getElementById('music-trigger');
    const musicCard = document.getElementById('music-card');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const playIcon = document.getElementById('play-icon');
    const bgAudio = document.getElementById('bg-audio');
    const visualizerBars = document.querySelectorAll('#visualizer .bar');
    const vinylIcon = document.getElementById('vinyl-icon');
    const progressFill = document.getElementById('progress-fill');
    const progressContainer = document.getElementById('progress-container');

    musicTrigger.addEventListener('click', () => {
        const isHidden = musicCard.classList.contains('translate-x-[120%]');
        if (isHidden) {
            musicCard.classList.remove('translate-x-[120%]', 'opacity-0', 'pointer-events-none');
            musicCard.classList.add('translate-x-0', 'opacity-100', 'pointer-events-auto');
        } else {
            musicCard.classList.remove('translate-x-0', 'opacity-100', 'pointer-events-auto');
            musicCard.classList.add('translate-x-[120%]', 'opacity-0', 'pointer-events-none');
        }
    });

    playPauseBtn.addEventListener('click', () => {
        if (bgAudio.paused) { bgAudio.play().catch(e => console.log(e)); } 
        else { bgAudio.pause(); }
    });

    bgAudio.addEventListener('play', () => {
        playIcon.classList.replace('fa-play', 'fa-pause');
        visualizerBars.forEach(bar => bar.classList.remove('paused-anim'));
        vinylIcon.classList.remove('paused-anim');
    });
    bgAudio.addEventListener('pause', () => {
        playIcon.classList.replace('fa-pause', 'fa-play');
        visualizerBars.forEach(bar => bar.classList.add('paused-anim'));
        vinylIcon.classList.add('paused-anim');
    });

    bgAudio.addEventListener('timeupdate', () => {
        if (bgAudio.duration) {
            progressFill.style.width = `${(bgAudio.currentTime / bgAudio.duration) * 100}%`;
        }
    });

    progressContainer.addEventListener('click', (e) => {
        if (bgAudio.duration) {
            bgAudio.currentTime = (e.offsetX / progressContainer.clientWidth) * bgAudio.duration;
        }
    });
});

// Tunggu sampai HTML dimuat sepenuhnya (jika Anda meletakkannya di dalam DOMContentLoaded yang sudah ada, cukup masukkan kodenya saja)
document.addEventListener('DOMContentLoaded', () => {

    // --- LOGIKA NAVBAR RESPONSIVE ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // Fungsi untuk membuka/menutup menu
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        
        // Ganti ikon burger (fa-bars) menjadi silang (fa-xmark)
        if (mobileMenu.classList.contains('hidden')) {
            menuIcon.classList.replace('fa-xmark', 'fa-bars');
        } else {
            menuIcon.classList.replace('fa-bars', 'fa-xmark');
        }
    });

    // Otomatis menutup menu mobile jika salah satu link diklik
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.replace('fa-xmark', 'fa-bars');
        });
    });

});
