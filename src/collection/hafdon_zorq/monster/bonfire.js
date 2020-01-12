module.exports = {
    name: 'Bonfire',
    size: 'L',
    type: 'beast',
    source: 'zorq',
    alignment: ['N'],
    ac: [
        {
            ac: 14,
            from: ['natural armor'],
        },
    ],
    hp: {
        average: 44,
        formula: '8d10',
    },
    speed: {
        walk: 45,
    },
    str: 16,
    dex: 8,
    con: 11,
    int: 11,
    wis: 10,
    cha: 12,
    resist: [
        {
            resist: ['bludgeoning', 'piercing', 'slashing'],
            note: 'from nonmagical attacks',
        },
    ],
    vulnerable: ['cold'],
    immune: ['fire'],
    senses: ['darkvision 60 ft.'],
    passive: 10,
    languages: ['Salamander', 'Common'],
    cr: '1/2',
    trait: [
        {
            type: 'entries',
            name: 'Heated Body',
            entries: [
                'A creature that touches the salamander or hits it with a melee attack while within 5 feet of it takes 1 ({@damage 1d4 - 1}) fire damage.',
            ],
        },
    ],
    action: [
        {
            name: 'Tail',
            type: 'entries',
            entries: [
                "{@atk mw} {@hit 4} to hit, reach 10 ft., one target. {@h}2 ({@damage 1d4}) bludgeoning damage plus 1 ({@damage 1d4 - 1}) fire damage, and the target is {@condition grappled} (escape {@dc 12}). Until this grapple ends, the target is {@condition restrained}, the salamander can automatically hit the target with its tail, and the salamander can't make tail attacks against other targets.",
            ],
        },
    ],

    environment: ['underdark'],

    languageTags: ['C'],
    senseTags: ['D'],
    damageTags: ['B', 'F'],
    miscTags: ['MW', 'RCH'],

    // fluff: {
    //     name: 'Salamander',
    //     source: 'MM',
    //     images: [
    //         {
    //             type: 'image',
    //             href: {
    //                 type: 'internal',
    //                 path: 'bestiary/MM/Salamander.jpg',
    //             },
    //         },
    //         {
    //             type: 'image',
    //             href: {
    //                 type: 'internal',
    //                 path: 'bestiary/MM/Salamander 001.jpg',
    //             },
    //         },
    //     ],
    //     entries: [
    //         'Salamanders slither across the Sea of Ash on the Elemental Plane of Fire, their sinuous coils and jagged spines smoldering. Intense heat washes off their bodies, while their yellow eyes glow like candles in the deep-set hollows of their hawkish faces.',
    //         'Salamanders adore power, and they delight in setting fire to things. Outside their home plane, they play among the burning skeletons of charred trees as forest fires rage around them, or slither down the slopes of erupting volcanoes to linger in fire pits and magma floes.',
    //         {
    //             name: 'Fire Snakes',
    //             type: 'entries',
    //             entries: [
    //                 "Salamanders hatch from eggs that are two-foot-diameter spheres of smoldering obsidian. When a salamander is ready to hatch, it melts its way through the egg's thick shell and emerges as a fire snake. A fire snake matures into a salamander adult within a year.",
    //             ],
    //         },
    //         {
    //             name: 'Slaves of the Efreet',
    //             type: 'entries',
    //             entries: [
    //                 "Long ago, the efreet hired azers to build the fabled City of Brass, but then failed in their attempt to enslave that mystical race when the azers' work was done. Turning instead to strike against the salamanders, the efreet had better luck in establishing a slave race, which they use to unleash war and destruction across the planes.",
    //                 "Salamanders despise the azers, believing that if the efreet had succeeded in dominating that race of elemental crafters, the salamanders would still be free. The efreet use this enmity to their own advantage, stoking the salamanders' hatred and pitting them against the efreets' former servants.",
    //                 'The efreet suffer salamanders to serve no other master; when efreet encounter salamanders dedicated to the cults of Elemental Evil, they slay them rather than taking them as slaves.',
    //             ],
    //         },
    //         {
    //             name: 'Domineering Nobles',
    //             type: 'entries',
    //             entries: [
    //                 'Although salamanders follow the destructive impulses of their fiery nature, slavery under the efreet has impacted the culture of free salamanders. They rule their own societies according to the efreet model, in which larger and stronger salamanders claim dominion over their lesser kin.',
    //                 'As salamanders age, they increase in size and status, rising to positions of power as cruel nobles among their kind. Nobles rule wandering bands of salamanders, which move across the Elemental Plane of Fire like desert nomads, raiding other communities for treasure.',
    //             ],
    //         },
    //         {
    //             name: 'Living Forges',
    //             type: 'entries',
    //             entries: [
    //                 'Salamanders generate intense heat, and when they fight, their weapons glow red and sear the bodies of their enemies on contact. Even approaching a salamander is dangerous, since flesh blisters and burns in its proximity.',
    //                 "This inherent heat is an asset to salamanders' skill as smiths, allowing them to soften and shape iron and steel with their bare hands. Although not as meticulous as azers, salamanders number among the greatest metalsmiths in all the planes. Powerful creatures summon them as warriors, but others enlist the salamanders for their crafting skills, or bind them to forges and ovens to generate limitless heat.",
    //             ],
    //         },
    //     ],
    // },
    tokenUrl: 'https://5e.tools/img/MM/Salamander.png?v=1.94.4',
    skill: {
        athletics: '+7',
    },
    spellcasting: [
        {
            name: 'Spellcasting',
            spells: {
                '0': {
                    spells: ['{@spell fire bolt|PHB}'],
                },
            },
        },
    ],
};
