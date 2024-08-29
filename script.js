document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playPauseButton = document.getElementById('play-pause');
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    const repeatButton = document.getElementById('repeat');

    let currentTrackIndex = 0;
    let currentAlbumIndex = 0;
    let repeatMode = 0; // 0 = no repeat, 1 = repeat all, 2 = repeat one

    const albums = [
        {
            name: 'PNL - Deux frères',
            cover: 'covers/df.jpg',
            tracks: [
                { src: 'music/PNL - 91s.mp3', title: '91s' },
                { src: 'music/PNL - A lAmmoniaque.mp3', title: 'A lAmmoniaque' },
                { src: 'music/PNL - Au DD.mp3', title: 'Au DD' },
                { src: 'music/PNL - Autre Monde.mp3', title: 'Autre Monde' },
                { src: 'music/PNL - Bang.mp3', title: 'Bang' },
                { src: 'music/PNL - Capuche.mp3', title: 'Capuche' },
                { src: 'music/PNL - Celsius.mp3', title: 'Celsius' },
                { src: 'music/PNL - Chang.mp3', title: 'Chang' },
                { src: 'music/PNL - Coeurs.mp3', title: 'Coeurs' },
                { src: 'music/PNL - Comme pas deux.mp3', title: 'Comme pas deux' },
                { src: 'music/PNL - Déconnecté.mp3', title: 'Déconnecté' },
                { src: 'music/PNL - Deux Fréres.mp3', title: 'Deux Fréres' },
                { src: 'music/PNL - Hasta La Vista.mp3', title: 'Hasta La Vista' },
                { src: 'music/PNL - Kuta ubud.mp3', title: 'Kuta ubud' },
                { src: 'music/PNL - La misère est si belle.mp3', title: 'La misère est si belle' },
                { src: 'music/PNL - Menace.mp3', title: 'Menace' },
                { src: 'music/PNL - Ryuk.mp3', title: 'Ryuk' },
                { src: 'music/PNL - Shenmue.mp3', title: 'Shenmue' },
                { src: 'music/PNL - Siberie.mp3', title: 'Siberie' },
                { src: 'music/PNL - Zoulou tchaing.mp3', title: 'Zoulou tchaing' },
            ]
        },
        {
            name: 'PNL - Dans La Légende',
            cover: 'covers/dl.png',
            tracks: [
                { src: 'music/01 DA.m4a', title: 'DA' },
                { src: 'music/02 Naha.m4a', title: 'Naha' },
                { src: 'music/03 Dans la légende.m4a', title: 'Dans la légende' },
                { src: 'music/04 Mira.m4a', title: 'Mira' },
                { src: "music/05 J'suis QLF.m4a", title: "J'suis QLF" },
                { src: 'music/06 La vie est belle.m4a', title: 'La vie est belle' },
                { src: 'music/07 Kratos.m4a', title: 'Kratos' },
                { src: 'music/08 Luz de Luna.m4a', title: 'Luz de Luna' },
                { src: 'music/09 Tu sais pas.m4a', title: 'Tu sais pas' },
                { src: 'music/10 Sheita.m4a', title: 'Sheita' },
                { src: 'music/11 Humain.m4a', title: 'Humain' },
                { src: 'music/12 Bambina.m4a', title: 'Bambina' },
                { src: 'music/13 Bené.m4a', title: 'Bené' },
                { src: 'music/14 Uranus.m4a', title: 'Uranus' },
                { src: 'music/15 Onizuka.m4a', title: 'Onizuka' },
                { src: "music/16 Jusqu'au dernier gramme.m4a", title: "Jusqu'au dernier gramme" },
                { src: 'music/17 Cramés.m4a', title: 'Cramés' },
                { src: 'music/18 Je t’haine.m4a', title: 'Je t’haine' },
            ]
        },
        {
            name: 'PNL - Le monde Chico',
            cover: 'covers/mc.jpg',
            tracks: [
                { src: 'music/03 Oh lala.m4a', title: 'Oh lala' },
                { src: 'music/05 Abonné.m4a', title: 'Abonné ' },
                { src: 'music/02 Sur Paname.m4a', title: 'Sur Paname ' },
                { src: 'music/01 Le monde ou rien.m4a', title: 'Le monde ou rien ' },
                { src: "music/06 J'suis PNL.m4a", title: "J'suis PNL" },
                { src: 'music/07 Mexico.m4a', title: 'Mexico ' },
                { src: 'music/08 Porte de Mesrine.m4a', title: 'Porte de Mesrine ' },
                { src: 'music/09 Dans ta rue.m4a', title: 'Dans ta rue ' },
                { src: 'music/10 Laisse.m4a', title: 'Laisse ' },
                { src: 'music/11 Loin des hommes.m4a', title: 'Loin des hommes ' },
                { src: 'music/12 Le M.m4a', title: 'Le M ' },
                { src: 'music/13 Rebenga.m4a', title: 'Rebenga ' },
                { src: 'music/14 Plus Tony que Sosa.m4a', title: 'Plus Tony que Sosa ' },
                { src: 'music/15 Que la mif.m4a', title: 'Que la mif ' },
                { src: 'music/16 Tempête.m4a', title: 'Tempête ' },
                { src: 'music/17 Dans la soucoupe.m4a', title: 'Dans la soucoupe ' },
            ]
        },
        {
            name: 'PNL - Que La Famille ',
            cover: 'covers/qlf.jpg',
            tracks: [
                { src: 'music/01 Je vis je visser.m4a', title: 'Je vis je visser' },
                { src: 'music/02 Lala.m4a', title: 'Lala' },
                { src: 'music/03 Différents.m4a', title: 'Différents' },
                { src: 'music/04 Obligés de prendre.m4a', title: 'Obligés de prendre' },
                { src: 'music/05 De la fenêtre au ter ter.m4a', title: 'De la fenêtre au ter ter' },
                { src: 'music/06 PNL.m4a', title: 'PNL' },
                { src: 'music/07 J’comprends pas.m4a', title: 'J’comprends pas' },
                { src: 'music/08 Gala gala.m4a', title: 'Gala gala' },
                { src: 'music/09 La petite voix.m4a', title: 'La petite voix' },
                { src: 'music/10 Athéna.m4a', title: 'Athéna' },
                { src: 'music/11 Recherche du bonheur.m4a', title: 'Recherche du bonheur' },
                { src: 'music/12 Simba.m4a', title: 'Simba' },

            
            ]
        },
        // Add more albums and tracks as needed
    ];

    function loadAlbumCards() {
        const albumsContainer = document.getElementById('albums');
        albumsContainer.innerHTML = ''; // Clear existing album cards
        albums.forEach((album, index) => {
            const albumCard = document.createElement('div');
            albumCard.className = 'album-card';
            albumCard.style.backgroundImage = `url('${album.cover}')`;
            albumCard.innerHTML = `
                <div class="album-info">
                    <h3>${album.name}</h3>
                </div>
            `;
            albumCard.addEventListener('click', () => {
                loadTrackList(index);
            });
            albumsContainer.appendChild(albumCard);
        });
    }

    function loadTrackList(albumIndex) {
        const trackList = document.querySelector('.track-list');
        const album = albums[albumIndex];
        currentAlbumIndex = albumIndex;
        currentTrackIndex = 0;

        // Clear previous track list
        if (trackList) {
            trackList.remove();
        }

        const trackListContainer = document.createElement('div');
        trackListContainer.className = 'track-list';
        album.tracks.forEach((track, index) => {
            const trackItem = document.createElement('div');
            trackItem.className = 'track-item';
            trackItem.textContent = track.title;
            trackItem.addEventListener('click', () => {
                currentTrackIndex = index;
                playTrack();
            });
            trackListContainer.appendChild(trackItem);
        });

        document.querySelector('.main-content').insertBefore(trackListContainer, document.querySelector('.player-controls'));
        playTrack();
    }

    function playTrack() {
        const track = albums[currentAlbumIndex].tracks[currentTrackIndex];
        audio.src = track.src;
        audio.play();
        document.getElementById('track-title').textContent = track.title;
        document.getElementById('album-title').textContent = albums[currentAlbumIndex].name;
        document.getElementById('cover').src = albums[currentAlbumIndex].cover;

        // Update track list
        const trackItems = document.querySelectorAll('.track-item');
        trackItems.forEach((item, index) => {
            if (index === currentTrackIndex) {
                item.classList.add('playing');
            } else {
                item.classList.remove('playing');
            }
        });

        // Update play/pause button icon
        playPauseButton.querySelector('i').className = audio.paused ? 'fas fa-play' : 'fas fa-pause';
    }

    function updateRepeatButton() {
        switch (repeatMode) {
            case 0:
                repeatButton.querySelector('i').className = 'fas fa-repeat'; // Default repeat icon
                break;
            case 1:
                repeatButton.querySelector('i').className = 'fas fa-repeat'; // Repeat all icon
                break;
            case 2:
                repeatButton.querySelector('i').className = 'fas fa-repeat-1'; // Repeat one icon
                break;
        }
    }

    playPauseButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
        playPauseButton.querySelector('i').className = audio.paused ? 'fas fa-play' : 'fas fa-pause';
    });

    nextButton.addEventListener('click', () => {
        if (albums[currentAlbumIndex].tracks.length > 0) {
            currentTrackIndex = (currentTrackIndex + 1) % albums[currentAlbumIndex].tracks.length;
            playTrack();
        }
    });

    prevButton.addEventListener('click', () => {
        if (albums[currentAlbumIndex].tracks.length > 0) {
            currentTrackIndex = (currentTrackIndex - 1 + albums[currentAlbumIndex].tracks.length) % albums[currentAlbumIndex].tracks.length;
            playTrack();
        }
    });

    repeatButton.addEventListener('click', () => {
        repeatMode = (repeatMode + 1) % 3; // Cycle through repeat modes
        updateRepeatButton();

        if (repeatMode === 0) {
            audio.loop = false;
        } else if (repeatMode === 1) {
            audio.loop = false; // Repeat all tracks (handled manually)
        } else if (repeatMode === 2) {
            audio.loop = true; // Repeat current track only
        }
    });

    audio.addEventListener('ended', () => {
        if (repeatMode === 1) {
            // Repeat all tracks logic
            nextButton.click();
        } else if (repeatMode === 2) {
            // Repeat current track logic
            playTrack();
        }
    });

    loadAlbumCards();
});
