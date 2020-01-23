module.exports = {
    name: 'Naphula',
    size: 'L',
    isNpc: true,
    isNamedCreature: true,
    type: {
        type: 'fiend',
        tags: [
            'devil',
            'ooze',
            'Intelligent Black Pudding',
            'lemure',
            'pronouns: they, them, theirs',
        ],
    },
    source: 'zorq',
    alignment: ['L', 'E'],
    ac: [14],
    hp: [
        {
            average: 85,
            formula: '10d10 + 30',
        },
    ],
    speed: {
        walk: 30,
        climb: 30,
        swim: 30,
    },
    str: 16,
    dex: 19,
    con: 16,
    int: 14,
    wis: 14,
    cha: 11,
    skill: {
        stealth: '+8',
    },
    immune: ['acid', 'cold', 'lightning', 'slashing'],
    resist: [
        {
            resist: ['bludgeoning', 'piercing'],
            note: 'from nonmagical weapons',
        },
    ],
    vulnerable: ['cold', 'fire'],
    conditionImmune: [
        'blinded',
        'deafened',
        'exhaustion',
        'grappled',
        'paralyzed',
        'petrified',
        'prone',
        'restrained',
        'unconscious',
    ],
    senses: ['darkvision 120 ft.', 'blindsight 120 ft.'],

    passive: 12,
    languages: [
        "understands Infernal, Elvish, and Undercommon but can't speak",
    ],
    cr: '5',
    trait: [
        {
            type: 'inset',
            name: 'Appearance and Mannerisms',
            entries: [
                'NAF-yoo-luh',
                'self-conscious of: ',
                'wants to be (thought of as): ',
                'modest about:',
            ],
        },

        {
            name: "Devil's Sight",
            entries: [
                "Magical darkness doesn't impede the lemure's darkvision.",
            ],
        },
        {
            name: 'Hellish Rejuvenation',
            entries: [
                'A lemure that dies in the Nine Hells comes back to life with all its hit points in {@dice 1d10} days unless it is killed by a good-aligned creature with a bless spell cast on that creature or its remains are sprinkled with holy water.',
            ],
        },
        {
            name: 'Amorphous',
            entries: [
                'The pudding can move through a space as narrow as 1 inch wide without squeezing.',
            ],
        },
        {
            name: 'Corrosive Form',
            entries: [
                'A creature that touches the pudding or hits it with a melee attack while within 5 feet of it takes 4 ({@damage 1d8}) acid damage. Any nonmagical weapon made of metal or wood that hits the pudding corrodes. After dealing damage, the weapon takes a permanent and cumulative −1 penalty to damage rolls. If its penalty drops to −5, the weapon is destroyed. Nonmagical ammunition made of metal or wood that hits the pudding is destroyed after dealing damage. The pudding can eat through 2-inch-thick, nonmagical wood or metal in 1 round.',
            ],
        },

        {
            name: 'Ambusher',
            entries: [
                'In the first round of a combat, the slithering tracker has advantage on attack rolls against any creature it surprised.',
            ],
        },
        {
            name: 'Damage Transfer',
            entries: [
                'While grappling a creature, the slithering tracker takes only haIf the damage dealt to it, and the creature it is grappling takes the other half.',
            ],
        },
        {
            name: 'False Appearance',
            entries: [
                'While the slithering tracker remains motionless, it is indistinguishable from a puddle, unless an observer succeeds on a {@dc 18} Intelligence (Investigation) check.',
            ],
        },
        {
            name: 'Keen Tracker',
            entries: [
                'The slithering tracker has advantage on Wisdom checks to track prey.',
            ],
        },
        {
            name: 'Liquid Form',
            entries: [
                "The slithering tracker can enter an enemy's space and stop there. It can also move through a space as narrow as 1 inch wide without squeezing.",
            ],
        },
        {
            name: 'Spider Climb',
            entries: [
                'The slithering tracker can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.',
            ],
        },
        {
            name: 'Watery Stealth',
            entries: [
                'While underwater, the slithering tracker has advantage on Dexterity (Stealth) checks made to hide, and it can take the Hide action as a bonus action.',
            ],
        },
    ],
    action: [
        {
            name: 'Multiattack',
            entries: [
                'Haborim makes one pseudopod fist attack and one slam attack.',
            ],
        },
        {
            name: 'Pseudopod Fist',
            entries: [
                '{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}6 ({@damage 1d6 + 3}) bludgeoning damage plus 18 ({@damage 4d8}) acid damage. In addition, nonmagical armor worn by the target is partly dissolved and takes a permanent and cumulative −1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10.',
            ],
        },
        {
            name: 'Slam',
            entries: [
                '{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}8 ({@damage 1d10 + 3}) bludgeoning damage.',
            ],
        },
        {
            name: 'Life Leech',
            entries: [
                'One Large or smaller creature that the slithering tracker can see within 5 feet of it must succeed on a {@dc 13} Dexterity saving throw or be {@condition grappled} (escape {@dc 13}). Until this grapple ends, the target is {@condition restrained} and unable to breathe unless it can breathe water. In addition, the {@condition grappled} target takes 16 ({@damage 3d10}) necrotic damage at the start of each of its turns. The slithering tracker can grapple only one target at a time.',
            ],
        },
    ],

    // spellcasting: [
    //     {
    //         name: 'Innate Spellcasting',
    //         headerEntries: [
    //             "The pudding's spellcasting ability is Intelligence (spell save {@dc 12}, {@hit 4} to hit with spell attacks). It can cast the following spells, requiring no components:",
    //         ],
    //         will: ['{@spell dancing lights}', '{@spell mage hand}'],
    //         daily: {
    //             '1': ["{@spell Melf's acid arrow}"],
    //             '3e': [
    //                 '{@spell darkness}',
    //                 '{@spell faerie fire}',
    //                 '{@spell shield}',
    //             ],
    //         },
    //         ability: 'int',
    //         type: 'spellcasting',
    //     },
    // ],
};

// let fluff = {
//     name: 'Lemure',
//     source: 'MM',
//     images: [
//         {
//             type: 'image',
//             href: {
//                 type: 'internal',
//                 path: 'bestiary/MM/Lemure.jpg',
//             },
//         },
//     ],
//     entries: [
//         'A lemure arises when a mortal soul is twisted by evil and banished to the Nine Hells for eternity. The lowest type of devil, lemures are repugnant, shapeless creatures doomed to suffer torment until they are promoted to a higher form of devil, most commonly an imp.',
//         "A lemure resembles a molten mass of flesh with a vaguely humanoid head and torso. A permanent expression of anguish twists across its face, its feeble mouth babbling even though it can't speak.",
//         {
//             type: 'section',
//             name: 'Devils',
//             entries: [
//                 'Devils personify tyranny, with a totalitarian society dedicated to the domination of mortal life. The shadow of the Nine Hells of Baator extends far across the multiverse, and Asmodeus, the dark lord of Nessus, strives to subjugate the cosmos to satisfy his thirst for power. To do so, he must continually expand his infernal armies, sending his servants to the mortal realm to corrupt the souls from which new devils are spawned.',
//                 {
//                     type: 'entries',
//                     entries: [
//                         {
//                             type: 'entries',
//                             entries: [
//                                 {
//                                     type: 'entries',
//                                     name: 'Lords of Tyranny',
//                                     entries: [
//                                         'Devils live to conquer, enslave, and oppress. They take perverse delight in exercising authority over the weak, and any creature that defies the authority of a devil faces swift and cruel punishment. Every interaction is an opportunity for a devil to display its power, and all devils have a keen understanding of how to use and abuse their power.',
//                                         'Devils understand the failings that plague intelligent mortals, and they use that knowledge to lead mortals into temptation and darkness, turning creatures into slaves to their own corruption. Devils on the Material Plane use their influence to manipulate humanoid rulers, whispering evil thoughts, fomenting paranoia, and eventually driving them to tyrannical actions.',
//                                     ],
//                                 },
//                                 {
//                                     type: 'entries',
//                                     name: 'Obedience and Ambition',
//                                     entries: [
//                                         'In accordance with their lawful alignment, devils obey even when they envy or dislike their superiors, knowing that their obedience will be rewarded. The hierarchy of the Nine Hells depends on this unswerving loyalty, without which that fiendish plane would become as anarchic as the Abyss.',
//                                         'At the same time, it is in the nature of devils to scheme, creating in some a desire to rule that eclipses their contentment to be ruled. This singular ambition is strongest among the archdevils whom Asmodeus appoints to rule the nine layers of the Nine Hells. These high-ranking fiends are the only devils to ever sample true power, which they crave like the sweetest ambrosia.',
//                                     ],
//                                 },
//                                 {
//                                     type: 'entries',
//                                     name: 'Dark Dealers and Soul Mongers',
//                                     entries: [
//                                         "Devils are confined to the Lower Planes, but they can travel beyond those planes by way of portals or powerful summoning magic. They love to strike bargains with mortals seeking to gain some benefit or prize, but a mortal making such a bargain must be wary. Devils are crafty negotiators and positively ruthless at enforcing the terms of an agreement. Moreover, a contract with even the lowliest devil is enforced by Asmodeus's will. Any mortal creature that breaks such a contract instantly forfeits its soul, which is spirited away to the Nine Hells.",
//                                         "To own a creature's soul is to have absolute control over that creature, and most devils accept no other currency in exchange for the fiendish power and boons they can provide. A soul is usually forfeited when a mortal dies naturally, for devils are immortal and can wait years for a contract to play out. If a contract allows a devil to claim a mortal's soul before death, it can instantly return to the Nine Hells with the soul in its possession. Only divine intervention can release a soul after a devil has claimed it.",
//                                     ],
//                                 },
//                             ],
//                         },
//                     ],
//                 },
//                 {
//                     type: 'entries',
//                     name: 'The Infernal Hierarchy',
//                     entries: [
//                         {
//                             type: 'entries',
//                             entries: [
//                                 'The Nine Hells has a rigid hierarchy that defines every aspect of its society. Asmodeus is the supreme ruler of all devils, and the only creature in the Nine Hells with the powers of a lesser god. Worshiped as such in the Material Plane, Asmodeus inspires the evil humanoid cults that take his name. In the Nine Hells, he commands scores of pit fiend generals, which in turn command legions of subordinates.',
//                                 'A supreme tyrant, a brilliant deceiver, and a master of subtlety, Asmodeus protects his throne by keeping his friends close and his enemies closer. He delegates most matters of rulership to the pit fiends and lesser archdevils that make up the infernal bureaucracy of the Nine Hells, even as he knows that those powerful devils conspire to usurp the Throne of Baator from which he rules. Asmodeus appoints archdevils, and he can strip any member of the infernal hierarchy of rank and status as he likes.',
//                                 'If it dies outside the Nine Hells, a devil disappears in a cloud of sulfurous smoke or dissolves into a pool of ichor, instantly returning to its home layer, where it reforms at full strength. Devils that die in the Nine Hells are destroyed forever-a fate that even Asmodeus fears.',
//                                 {
//                                     type: 'entries',
//                                     name: 'Archdevils',
//                                     entries: [
//                                         'The archdevils include all the current and deposed rulers of the Nine Hells (see the Layers and Lords of the Nine Hells table), as well as the dukes and duchesses that make up their courts, attend them as advisers, and hope to supplant them. Every archdevil is a unique being with an appearance that reflects its particular evil nature.',
//                                     ],
//                                 },
//                                 {
//                                     type: 'entries',
//                                     name: 'Greater Devils',
//                                     entries: [
//                                         'The greater devils include the pit fiends, erinyes, horned devils, and ice devils that command lesser devils and attend the archdevils.',
//                                     ],
//                                 },
//                                 {
//                                     type: 'entries',
//                                     name: 'Lesser Devils',
//                                     entries: [
//                                         'The lesser devils include numerous strains of fiends, including imps, chain devils, spined devils, bearded devils, barbed devils, and bone devils.',
//                                     ],
//                                 },
//                                 {
//                                     type: 'entries',
//                                     name: 'Lemures',
//                                     entries: [
//                                         'The lowest form of devil, lemures are the twisted and tormented souls of evil and corrupted mortals. A lemure killed in the Nine Hells is only permanently destroyed if it is killed with a blessed weapon or if its shapeless corpse is splashed with holy water before it can return to life.',
//                                     ],
//                                 },
//                                 {
//                                     type: 'entries',
//                                     name: 'Promotion and Demotion',
//                                     entries: [
//                                         "When the soul of an evil mortal sinks into the Nine Hells, it takes on the physical form of a wretched lemure. Archdevils and greater devils have the power to promote lemures to lesser devils. Archdevils can promote lesser devils to greater devils, and Asmodeus alone can promote a greater devil to archdevil status. This diabolic promotion invokes a brief, painful transformation, with the devil's memories passing intact from one form to the next.",
//                                         'Low-level promotions are typically based on need, such as when a pit fiend transforms lemures into imps to gain invisible spies under its command. High-level promotions are almost always based on merit, such as when a bone devil that distinguishes itself in battle is transformed into a horned devil by the archdevil it serves. A devil is seldom promoted more than one step at a time in the hierarchy of infernal forms.',
//                                         'Demotion is the customary punishment for failure or disobedience among the devils. Archdevils or greater devils can demote a lesser devil to a lemure, which loses all memory of its prior existence. An archdevil can demote a greater devil to lesser devil status, but the demoted devil retains its memories-and might seek vengeance if the severity of the demotion is excessive.',
//                                         "No devil can promote or demote another devil that has not sworn fealty to it, preventing rival archdevils from demoting each other's most powerful servants. Since all devils swear fealty to Asmodeus, he can freely demote any other devil, transforming it into whatever infernal form he desires.",
//                                         {
//                                             type: 'table',
//                                             caption: 'Infernal Hierarchy',
//                                             colLabels: ['Rank', 'Devil(s)'],
//                                             colStyles: ['col-4', 'col-8'],
//                                             rows: [
//                                                 ['1.', 'lemure'],
//                                                 ['2. (Lesser devils)', 'imp'],
//                                                 ['3.', 'spined devil'],
//                                                 ['4.', 'bearded devil'],
//                                                 ['5.', 'barbed devil'],
//                                                 ['6.', 'chain devil'],
//                                                 ['7.', 'bone devil'],
//                                                 [
//                                                     '8. (Greater devils)',
//                                                     'horned devil',
//                                                 ],
//                                                 ['9.', 'erinyes'],
//                                                 ['10.', 'ice devil'],
//                                                 ['11.', 'pit fiend'],
//                                                 [
//                                                     '12. (Archdevils)',
//                                                     'duke or duchess',
//                                                 ],
//                                                 [
//                                                     '13.',
//                                                     'archduke or archduchess',
//                                                 ],
//                                             ],
//                                         },
//                                     ],
//                                 },
//                             ],
//                         },
//                         {
//                             type: 'entries',
//                             name: 'The Nine Hells',
//                             entries: [
//                                 'The Nine Hells are a single plane comprising nine separate layers (see the Layers and Lords of the Nine Hells table). The first eight layers are each ruled by archdevils that answer to the greatest archdevil of all: Asmodeus, the Archduke of Nessus, the ninth layer. To reach the deepest layer of the Nine Hells, one must descend through all eight of the layers above it, in order. The most expeditious means of doing so is the River Styx, which plunges ever deeper as it flows from one layer to the next. Only the most courageous adventurers can withstand the torment and horror of that journey.',
//                                 {
//                                     type: 'table',
//                                     caption:
//                                         'Layers and Lords of the Nine Hells Layer',
//                                     colLabels: [
//                                         'Layer',
//                                         'Layer Name',
//                                         'Archduke or Archduchess',
//                                         'Previous Rulers',
//                                         'Primary Inhabitants',
//                                     ],
//                                     colStyles: [
//                                         'col-1',
//                                         'col-2',
//                                         'col-3',
//                                         'col-3',
//                                         'col-3',
//                                     ],
//                                     rows: [
//                                         [
//                                             '1',
//                                             'Avernus',
//                                             'Zariel',
//                                             'Bel, Tiamat',
//                                             'Erinyes, imps, spined devils',
//                                         ],
//                                         [
//                                             '2',
//                                             'Dis',
//                                             'Dispater',
//                                             '—',
//                                             'Bearded devils, erinyes, imps, spined devils',
//                                         ],
//                                         [
//                                             '3',
//                                             'Minauros',
//                                             'Mammon',
//                                             '—',
//                                             'Bearded devils, chain devils, imps, spined devils',
//                                         ],
//                                         [
//                                             '4',
//                                             'Phlegethos',
//                                             'Belial and Fierna',
//                                             '—',
//                                             'Barbed devils, bone devils, imps, spined devils',
//                                         ],
//                                         [
//                                             '5',
//                                             'Stygia',
//                                             'Levistus',
//                                             'Geryon',
//                                             'Bone devils, erinyes, ice devils, imps',
//                                         ],
//                                         [
//                                             '6',
//                                             'Malbolge',
//                                             'Glasya',
//                                             'Malagard, Moloch',
//                                             'Barbed devils, bone devils, horned devils, imps',
//                                         ],
//                                         [
//                                             '7',
//                                             'Maladomini',
//                                             'Baalzebul',
//                                             '—',
//                                             'Barbed devils, bone devils, horned devils, imps',
//                                         ],
//                                         [
//                                             '8',
//                                             'Cania',
//                                             'Mephistopheles',
//                                             '—',
//                                             'Horned devils, ice devils, imps, pit fiends',
//                                         ],
//                                         [
//                                             '9',
//                                             'Nessus',
//                                             'Asmodeus',
//                                             '—',
//                                             'All devils',
//                                         ],
//                                     ],
//                                 },
//                             ],
//                         },
//                     ],
//                 },
//                 {
//                     type: 'inset',
//                     name: 'Devil True Names and Talismans',
//                     entries: [
//                         'Though devils all have common names, every devil above a lemure in station also has a true name that it keeps secret. A devil can be forced to disclose its true name if charmed, and ancient scrolls and tomes are said to exist that list the true names of certain devils.',
//                         "A mortal who learns a devil's true name can use powerful summoning magic to call the devil from the Nine Hells and bind it into service. Binding can also be accomplished with the help of a devil talisman. Each of these ancient relics is inscribed with the true name of a devil it controls, and was bathed in the blood of a worthy sacrifice-typically someone the creator loved-when crafted.",
//                         "However it is summoned, a devil brought to the Material Plane typically resents being pressed into service. However, the devil seizes every opportunity to corrupt its summoner so that the summoner's soul ends up in the Nine Hells. Only imps are truly content to be summoned, and they easily commit to serving a summoner as a familiar, but they still do their utmost to corrupt those who summon them.",
//                     ],
//                 },
//                 {
//                     type: 'inset',
//                     name: 'Variant: Devil Summoning',
//                     entries: [
//                         'Some devils can have an action option that allows them to summon other devils.',
//                         {
//                             name: 'Summon Devil (1/Day)',
//                             entries: [
//                                 ' The devil chooses what to summon and attempts a magical summoning.',
//                             ],
//                             type: 'entries',
//                         },
//                         {
//                             type: 'list',
//                             items: [
//                                 'A barbed devil has a 30 percent chance of summoning one barbed devil.',
//                                 'A bearded devil has a 30 percent chance of summoning one bearded devil.',
//                                 'A bone devil has a 40 percent chance of summoning 2d6 spined devils or one bone devil.',
//                                 'An erinyes has a 50 percent chance of summoning 3d6 spined devils, 1d6 bearded devils, or one erinyes.',
//                                 'A horned devil has a 30 percent chance of summoning one horned devil.',
//                                 'An ice devil has a 60 percent chance of summoning one ice devil.',
//                                 'A pit fiend summons 2d4 bearded devils, 1d4 barbed devils, or one erinyes with no chance of failure.',
//                             ],
//                         },
//                         "A summoned devil appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other devils. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.",
//                     ],
//                 },
//             ],
//         },
//     ],
// };
