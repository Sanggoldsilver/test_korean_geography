const musicData = [
    { rank: 1, title: "소문의 낙원", artist: "AKMU (악뮤)", album: "개화" },
    { rank: 2, title: "기쁨, 슬픔, 아름다운 마음", artist: "AKMU (악뮤)", album: "개화" },
    { rank: 3, title: "RUDE!", artist: "Hearts2Hearts (하츠투하츠)", album: "RUDE!" },
    { rank: 4, title: "BANG BANG", artist: "IVE (아이브)", album: "REVIVE+" },
    { rank: 5, title: "404 (New Era)", artist: "KiiiKiii (키키)", album: "Delulu Pack" },
    { rank: 6, title: "사랑하게 될 거야", artist: "한로로", album: "이상비행" },
    { rank: 7, title: "SWIM", artist: "방탄소년단", album: "ARIRANG" },
    { rank: 8, title: "Drowning", artist: "WOODZ", album: "OO-LI" },
    { rank: 9, title: "0+0", artist: "한로로", album: "자몽살구클럽" },
    { rank: 10, title: "Power", artist: "G-DRAGON", album: "Power" },
    { rank: 11, title: "DASH", artist: "NMIXX", album: "Fe3O4: BREAK" },
    { rank: 12, title: "Supernova", artist: "aespa", album: "Armageddon - The 1st Album" },
    { rank: 13, title: "캐치 캐치", "artist": "YENA (최예나)", "album": "LOVE CATCHER" },
    { rank: 14, title: "멸종위기사랑", "artist": "이찬혁", "album": "EROS" },
    { rank: 15, title: "Body to Body", "artist": "방탄소년단", "album": "ARIRANG" },
    { rank: 16, title: "어떻게 이별까지 사랑하겠어, 널 사랑하는 거지", "artist": "AKMU (악뮤)", "album": "항해" },
    { rank: 17, title: "Ode to Love", "artist": "NCT WISH", "album": "Ode to Love - The 1st Album" },
    { rank: 18, title: "그대 작은 나의 세상이 되어", "artist": "카더가든", "album": "부재" },
    { rank: 19, title: "너에게 닿기를", "artist": "10CM", "album": "너에게 닿기를" },
    { rank: 20, title: "어제보다 슬픈 오늘", "artist": "우디 (Woody)", "album": "어제보다 슬픈 오늘" },
    { rank: 21, title: "Blue Valentine", "artist": "NMIXX", "album": "Blue Valentine" },
    { rank: 22, title: "Seven (feat. Latto) - Clean Ver.", "artist": "정국", "album": "Seven (feat. Latto)" },
    { rank: 23, title: "Small girl (feat. 도경수(D.O.))", "artist": "이영지", "album": "16 Identity" },
    { rank: 24, title: "UP (KARINA Solo)", "artist": "카리나 (KARINA)", "album": "aespa Special Digital Single 'SYNK : PARALLEL LINE'" },
    { rank: 25, title: "뛰어(JUMP)", "artist": "BLACKPINK", "album": "뛰어(JUMP)" },
    { rank: 26, title: "모르시나요(PROD.로코베리)", "artist": "조째즈", "album": "모르시나요" },
    { rank: 27, title: "이 밤을 빌려 말해요", "artist": "PLAVE", "album": "이 밤을 빌려 말해요" },
    { rank: 28, title: "toxic till the end", "artist": "로제 (ROSÉ)", "album": "rosie" },
    { rank: 29, title: "TICK TOCK (Feat. ZICO)", "artist": "김하온 (HAON)", "album": "쇼미더머니 12 Episode 1" },
    { rank: 30, title: "Hooligan", "artist": "방탄소년단", "album": "ARIRANG" },
    { rank: 31, title: "내게 사랑이 뭐냐고 물어본다면", "artist": "로이킴", "album": "내게 사랑이 뭐냐고 물어본다면" },
    { rank: 32, title: "BLACKHOLE", "artist": "IVE (아이브)", "album": "REVIVE+" },
    { rank: 33, title: "천상연", "artist": "이창섭", "album": "천상연" },
    { rank: 34, title: "Stay with me", "artist": "NCT WISH", "album": "Ode to Love - The 1st Album" },
    { rank: 35, title: "HAPPY", "artist": "DAY6 (데이식스)", "album": "Fourever" },
    { rank: 36, title: "봄날", "artist": "방탄소년단", "album": "YOU NEVER WALK ALONE" },
    { rank: 37, title: "소나기", "artist": "이클립스 (ECLIPSE)", "album": "선재 업고 튀어 OST Part 1" },
    { rank: 38, title: "Whiplash", "artist": "aespa", "album": "Whiplash - The 5th Mini Album" },
    { rank: 39, title: "HOME SWEET HOME (feat. 태양, 대성)", "artist": "G-DRAGON", "album": "HOME SWEET HOME" },
    { rank: 40, title: "한 페이지가 될 수 있게", "artist": "DAY6 (데이식스)", "album": "The Book of Us : Gravity" },
    { rank: 41, title: "사랑인가 봐", "artist": "멜로망스", "album": "사랑인가 봐" },
    { rank: 42, title: "그대만 있다면", "artist": "너드커넥션 (Nerd Connection)", "album": "그대만 있다면" },
    { rank: 43, title: "Sticky", "artist": "KISS OF LIFE", "album": "Sticky" },
    { rank: 44, title: "Mantra", "artist": "제니 (JENNIE)", "album": "Mantra" },
    { rank: 45, title: "나는 아픈 건 딱 질색이니까", "artist": "(여자)아이들", "album": "2" },
    { rank: 46, title: "How Sweet", "artist": "NewJeans", "album": "How Sweet" },
    { rank: 47, title: "내 이름은 맑음", "artist": "QWER", "album": "Algorithm's Blossom" },
    { rank: 48, title: "예뻤어", "artist": "DAY6 (데이식스)", "album": "Sunrise" },
    { rank: 49, title: "Way 4 Luv", "artist": "PLAVE", "album": "ASTERUM : 134-1" },
    { rank: 50, title: "사랑은 봄비처럼...이별은 겨울비처럼...", "artist": "임현정", "album": "All That Love" },
    { rank: 51, title: "흥흥흥 (feat. SOLE)", "artist": "PLAVE", "album": "Caligo Pt.2" },
    { rank: 52, title: "2.0 (TWO POINT O)", "artist": "NCT WISH", "album": "Ode to Love - The 1st Album" },
    { rank: 53, title: "청혼하지 않을 이유를 못 찾았어", "artist": "이무진", "album": "청혼하지 않을 이유를 못 찾았어" },
    { rank: 54, title: "Welcome to the Show", "artist": "DAY6 (데이식스)", "album": "Fourever" },
    { rank: 55, title: "눈을 감아도(2026)", "artist": "순순희(지환)", "album": "눈을 감아도(2026)" },
    { rank: 56, title: "FYA", "artist": "방탄소년단", "album": "ARIRANG" },
    { rank: 57, title: "주저하는 연인들을 위해", "artist": "잔나비", "album": "전설" },
    { rank: 58, title: "나는 반딧불", "artist": "황가람", "album": "나는 반딧불" },
    { rank: 59, title: "녹음", "artist": "한로로", "album": "녹음" },
    { rank: 60, title: "첫 만남은 계획대로 되지 않아", "artist": "TWS (투어스)", "album": "Sparkling Blue" },
    { rank: 61, title: "우리들의 블루스", "artist": "임영웅", "album": "IM HERO" },
    { rank: 62, title: "다시 만날 수 있을까", "artist": "임영웅", "album": "IM HERO" },
    { rank: 63, title: "무지개", "artist": "임영웅", "album": "IM HERO" },
    { rank: 64, title: "이제 나만 믿어요", "artist": "임영웅", "album": "내일은 미스터트롯 우승자 특전곡" },
    { rank: 65, title: "London Boy", "artist": "임영웅", "album": "Polaroid" },
    { rank: 66, title: "Polaroid", "artist": "임영웅", "album": "Polaroid" },
    { rank: 67, title: "아버지", "artist": "임영웅", "album": "IM HERO" },
    { rank: 68, title: "Don't Say You Love Me", "artist": "NCT WISH", "album": "Ode to Love - The 1st Album" },
    { rank: 69, title: "STYLE", "artist": "Hearts2Hearts (하츠투하츠)", "album": "STYLE" },
    { rank: 70, title: "사랑은 늘 도망가", "artist": "임영웅", "album": "신사와 아가씨 OST Part.2" },
    { rank: 71, title: "Lunar Hearts", "artist": "PLAVE", "album": "Caligo Pt.2" },
    { rank: 72, title: "Aliens", "artist": "방탄소년단", "album": "ARIRANG" },
    { rank: 73, title: "Love wins all", "artist": "아이유", "album": "The Winning" },
    { rank: 74, title: "OVERDRIVE", "artist": "TWS (투어스)", "album": "TWS 4th Mini Album ‘play hard’" },
    { rank: 75, title: "APT.", "artist": "로제 (ROSÉ), Bruno Mars", "album": "APT." },
    { rank: 76, title: "Like Animals", "artist": "방탄소년단", "album": "ARIRANG" },
    { rank: 77, title: "너의 번호를 누르고", "artist": "#안녕", "album": "너의 번호를 누르고" },
    { rank: 78, title: "그대만 있다면 (여름날 우리 X 너드커넥션)", "artist": "너드커넥션 (Nerd Connection)", "album": "그대만 있다면" },
    { rank: 79, title: "Discord", "artist": "QWER", "album": "Harmony from Discord" },
    { rank: 80, title: "Hype Boy", "artist": "NewJeans", "album": "NewJeans 1st EP 'New Jeans'" },
    { rank: 81, title: "Super Shy", "artist": "NewJeans", "album": "NewJeans 2nd EP 'Get Up'" },
    { rank: 82, title: "Ditto", "artist": "NewJeans", "album": "NewJeans 'OMG'" },
    { rank: 83, title: "ETA", "artist": "NewJeans", "album": "NewJeans 2nd EP 'Get Up'" },
    { rank: 84, title: "Drama", "artist": "aespa", "album": "Drama - The 4th Mini Album" },
    { rank: 85, title: "Die With A Smile", "artist": "Lady Gaga, Bruno Mars", "album": "Die With A Smile" },
    { rank: 86, title: "꽃송이들의 퍼레이드", "artist": "PLAVE", "album": "Caligo Pt.2" },
    { rank: 87, title: "Merry Go Round", "artist": "방탄소년단", "album": "ARIRANG" },
    { rank: 88, title: "Street (2AM)", "artist": "NCT WISH", "album": "Ode to Love - The 1st Album" },
    { rank: 89, title: "Dynamite", "artist": "방탄소년단", "album": "Dynamite (DayTime Version)" },
    { rank: 90, title: "One More Night", "artist": "방탄소년단", "album": "ARIRANG" },
    { rank: 91, title: "여우비 (Crush)", "artist": "NCT WISH", "album": "Ode to Love - The 1st Album" },
    { rank: 92, title: "they don’t know ’bout us", "artist": "방탄소년단", "album": "ARIRANG" },
    { rank: 93, title: "Please", "artist": "방탄소년단", "album": "ARIRANG" },
    { rank: 94, title: "To. X", "artist": "태연 (TAEYEON)", "album": "To. X - The 5th Mini Album" },
    { rank: 95, title: "V", "artist": "방탄소년단", "album": "ARIRANG" },
    { rank: 96, title: "햇빛 bless you", "artist": "AKMU (악뮤)", "album": "개화" },
    { rank: 97, title: "Everglow", "artist": "NCT WISH", "album": "Ode to Love - The 1st Album" },
    { rank: 98, title: "REDRED", "artist": "CORTIS (코르티스)", "album": "REDRED" },
    { rank: 99, title: "Voyage", "artist": "NCT WISH", "album": "Ode to Love - The 1st Album" },
    { rank: 100, title: "Into the Sun", "artist": "방탄소년단", "album": "ARIRANG" }
];

const musicGrid = document.getElementById('musicGrid');
const searchInput = document.getElementById('searchInput');
const currentDateEl = document.getElementById('currentDate');

// Set current date
const now = new Date();
currentDateEl.innerText = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')} Real-time Chart`;

function renderMusic(data) {
    musicGrid.innerHTML = '';
    
    if (data.length === 0) {
        musicGrid.innerHTML = '<div class="no-results">검색 결과가 없습니다.</div>';
        return;
    }

    data.forEach((song, index) => {
        const card = document.createElement('div');
        card.className = 'music-card';
        card.style.animationDelay = `${index * 0.05}s`;
        
        card.innerHTML = `
            <div class="rank">${song.rank}</div>
            <div class="cover-art">
                <i class="fas fa-music"></i>
            </div>
            <div class="info">
                <div class="title" title="${song.title}">${song.title}</div>
                <div class="artist" title="${song.artist}">${song.artist}</div>
            </div>
        `;

        card.addEventListener('click', () => {
            const query = encodeURIComponent(`${song.title} ${song.artist}`);
            window.open(`https://www.melon.com/search/total/index.htm?q=${query}`, '_blank');
        });

        musicGrid.appendChild(card);
    });
}

// Initial render
renderMusic(musicData);

// Search functionality
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = musicData.filter(song => 
        song.title.toLowerCase().includes(term) || 
        song.artist.toLowerCase().includes(term)
    );
    renderMusic(filtered);
});
