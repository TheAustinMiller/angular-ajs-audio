export interface Album {
    title: string;
    artist: string;
    coverArt: string;
    collectionKey: string; // This links to your MY_COLLECTIONS keys
}

export const ALBUMS: Album[] = [
    {
        title: 'I Hope You\'re Happy',
        artist: 'BigXthaPlug',
        coverArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/BigXthaPlug_-_I_Hope_You%27re_Happy.jpg/250px-BigXthaPlug_-_I_Hope_You%27re_Happy.jpg',
        collectionKey: 'IHopeYoureHappy'
    },
    {
        title: 'Take Care',
        artist: 'BigXthaPlug',
        coverArt: 'https://upload.wikimedia.org/wikipedia/en/4/40/BigXthaPlug_-_Take_Care.png',
        collectionKey: 'TakeCare'
    },
    {
        title: 'The Biggest',
        artist: 'BigXthaPlug',
        coverArt: 'https://i.scdn.co/image/ab67616d0000b2739afbbc313ea008b68cc5f40d',
        collectionKey: 'TheBiggest'
    },
    {
        title: 'AMAR',
        artist: 'BigXthaPlug',
        coverArt: 'https://upload.wikimedia.org/wikipedia/en/7/7e/BigXthaPlug_-_Amar.jpg',
        collectionKey: 'Amar'
    },
    {
        title: 'The College Dropout',
        artist: 'Kanye West',
        coverArt: 'https://upload.wikimedia.org/wikipedia/en/a/a3/Kanyewest_collegedropout.jpg',
        collectionKey: 'CollegeDropout'
    },
    {
        title: 'Late Registration',
        artist: 'Kanye West',
        coverArt: 'https://upload.wikimedia.org/wikipedia/en/f/f4/Late_registration_cd_cover.jpg',
        collectionKey: 'LateRegistration'
    },
    {
        title: 'Graduation',
        artist: 'Kanye West',
        coverArt: 'https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg',
        collectionKey: 'Graduation'
    },
    {
        title: '808s & Heartbreak',
        artist: 'Kanye West',
        coverArt: 'https://upload.wikimedia.org/wikipedia/en/f/f1/808s_%26_Heartbreak.png',
        collectionKey: '808sHeartbreak'
    },
    {
        title: 'My Beautiful Dark Twisted Fantasy',
        artist: 'Kanye West',
        coverArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f0/My_Beautiful_Dark_Twisted_Fantasy.jpg/250px-My_Beautiful_Dark_Twisted_Fantasy.jpg',
        collectionKey: 'MBDTF'
    },
    {
        title: 'Watch The Throne',
        artist: 'JAY-Z & Kanye West',
        coverArt: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ee/Watch_The_Throne.jpg/250px-Watch_The_Throne.jpg',
        collectionKey: 'WatchTheThrone'
    }
];