module.exports = {
    name: 'Professor Henriette Ermann',
    isNpc: true,
    isNamedCharacter: true,
    size: 'S',
    type: {
        type: 'humanoid',
        tags: [
            'gnome',
            'Deep Gnome',
            'Svirfneblin',
            'pronouns--she, her, hers',
        ],
    },
    source: 'zorq',
    alignment: ['N', 'G'],
    ac: [
        {
            ac: 10,
            from: ['unarmored defense'],
        },
    ],
    hp: {
        formula: '3d6 + 0',
        average: 10,
    },
    speed: {
        walk: 20,
    },
    str: 8,
    dex: 8,
    con: 14,
    int: 18,
    wis: 14,
    cha: 12,
    skill: {
        investigation: '+8',
        nature: '+8',
        religion: '+8',
        history: '+8',
        arcana: '+8',
    },
    senses: ['darkvision 120 ft.'],
    passive: 12,
    languages: ['Gnomish', 'Terran', 'Undercommon'],
    cr: '1/2',
    trait: [
        {
            type: 'inset',
            entries: [
                { name: 'Purpose', entries: [''] },
                { name: 'Background', entries: [''] },
                { name: 'Aliases', entries: [''] },
                { name: 'The Whole Buffalo', entries: [''] },
                {
                    name: 'Appearance and Mannerisms',
                    entries: [
                        'self-conscious of: ',
                        'wants to be (thought of as): ',
                        'modest about:',
                    ],
                },
                {
                    name: 'Quotes',
                    entries: [
                        "Give it the old 'nickel try'",
                        'Sorry to be a tadbule (it’s because I’m suffering)',
                    ],
                },
            ],
        },
        {
            name: 'Stone Camouflage',
            entries: [
                'The gnome has advantage on Dexterity (Stealth) checks made to hide in rocky terrain.',
            ],
        },
        {
            name: 'Gnome Cunning',
            entries: [
                'The gnome has advantage on Intelligence, Wisdom, and Charisma saving throws against magic.',
            ],
        },
    ],
    spellcasting: [
        {
            name: 'Innate Spellcasting',
            headerEntries: [
                "The gnome's innate spellcasting ability is Intelligence (spell save {@dc 11}). It can innately cast the following spells, requiring no material components:",
            ],
            will: ['{@spell nondetection} (self only)'],
            daily: {
                '1e': [
                    '{@spell blindness/deafness}',
                    '{@spell blur}',
                    '{@spell disguise self}',
                ],
            },
            ability: 'int',
            type: 'spellcasting',
        },
    ],
    environment: ['underdark'],
    soundClip:
        'https://media-waterdeep.cursecdn.com/file-attachments/0/472/svirfneblin.mp3',
    languageTags: ['G', 'T', 'U'],
    senseTags: ['SD'],
    spellcastingTags: ['I'],
    damageTags: ['P'],
    srd: true,
    fluff: {
        name: 'Deep Gnome (Svirfneblin)',
        source: 'MM',
        images: [
            {
                type: 'image',
                href: {
                    type: 'internal',
                    path: 'bestiary/MM/Deep Gnome (Svirfneblin).jpg',
                },
            },
        ],
        entries: [
            "Deep gnomes, or svirfneblin, live far below the world's surface in twisting warrens and sculpted caverns. They survive by virtue of their stealth, cleverness, and tenacity. Their gray skin allows them to blend in with surrounding stonework. They are also surprisingly heavy and strong for their size. An average adult weighs 100 to 120 pounds and stands 3 feet tall.",
            'A typical svirfneblin enclave contains several hundred deep gnomes and is strongly fortified. Secret tunnels lead to and from the settlement, and the deep gnomes use these as evacuation routes when the enclave comes under attack.',
            {
                name: 'Established Gender Roles',
                type: 'entries',
                entries: [
                    'Male svirfneblin are bald, while females have stringy gray hair. Traditionally, females run the enclaves while males scour the outskirts in search of enemies and deposits of precious gemstones.',
                ],
            },
            {
                name: 'Gemstone Harvesters',
                type: 'entries',
                entries: [
                    'Svirfneblin cherish fine gemstones, especially rubies, which they harvest from mines deep in the Underdark. The hunt for gems often brings them into conflict with beholders, drow, kuo-toa, duergar, and mind flayers. Of all their natural enemies, deep gnomes fear and despise the murderous, demon worshiping drow the most.',
                ],
            },
            {
                name: 'Earth Friends',
                type: 'entries',
                entries: [
                    'Deep gnomes are often encountered in the company of creatures from the Elemental Plane of Earth. Some svirfneblin can summon such creatures. Earth creatures guard svirfneblin settlements, especially xorn enticed to service with the promise of gems to feed on.',
                ],
            },
        ],
    },
    tokenUrl: 'https://5e.tools/img/MM/Deep Gnome (Svirfneblin).png?v=1.95.1',
    shortName: 'Prof. Ermann',
};
