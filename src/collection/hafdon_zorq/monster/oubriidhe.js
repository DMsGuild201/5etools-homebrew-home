/**
 * based on {@creature gibbering mouther|dmg}
 */
module.exports = {
    name: 'Oubriidthe',
    size: 'M',
    type: { type: 'aberration', tags: ['they, them', '"oo-breeth"'] },
    source: 'zorq',
    alignment: ['N'],
    ac: [9],
    hp: {
        average: 67,
        formula: '9d8 + 27',
    },
    speed: {
        walk: 10,
        swim: 10,
    },
    str: 10,
    dex: 8,
    con: 16,
    int: 3,
    wis: 10,
    cha: 6,
    conditionImmune: ['prone'],
    senses: ['darkvision 60 ft.'],
    passive: 10,
    cr: '2',
    trait: [
        {
            name: 'Aberrant Ground',
            entries: [
                'The ground in a 10-foot radius around the mouther is doughlike difficult terrain. Each creature that starts its turn in that area must succeed on a {@dc 10} Strength saving throw or have its speed reduced to 0 until the start of its next turn.',
            ],
        },
        {
            name: 'Gibbering',
            entries: [
                "The mouther babbles incoherently while it can see any creature and isn't {@condition incapacitated}. Each creature that starts its turn within 20 feet of the mouther and can hear the gibbering must succeed on a {@dc 10} Wisdom saving throw. On a failure, the creature can't take reactions until the start of its next turn and rolls a {@dice d8} to determine what it does during its turn. On a 1 to 4, the creature does nothing. On a 5 or 6, the creature takes no action or bonus action and uses all its movement to move in a randomly determined direction. On a 7 or 8, the creature makes a melee attack against a randomly determined creature within its reach or does nothing if it can't make such an attack.",
            ],
        },
    ],
    action: [
        {
            name: 'Multiattack',
            entries: [
                'The gibbering mouther makes one bite attack and, if it can, uses its Blinding Spittle.',
            ],
        },
        {
            name: 'Bites',
            entries: [
                '{@atk mw} {@hit 2} to hit, reach 5 ft., one creature. {@h}17 ({@damage 5d6}) piercing damage. If the target is Medium or smaller, it must succeed on a {@dc 10} Strength saving throw or be knocked {@condition prone}. If the target is killed by this damage, it is absorbed into the mouther.',
            ],
        },
        {
            name: 'Blinding Spittle {@recharge 5}',
            entries: [
                "The mouther spits a chemical glob at a point it can see within 15 feet of it. The glob explodes in a blinding flash of light on impact. Each creature within 5 feet of the flash must succeed on a {@dc 13} Dexterity saving throw or be {@condition blinded} until the end of the mouther's next turn.",
            ],
        },
    ],

    environment: ['underdark'],

    actionTags: ['Multiattack'],
    senseTags: ['D'],
    damageTags: ['P'],
    miscTags: ['MW', 'AOE'],
    isNpc: true,
    srd: true,
};
