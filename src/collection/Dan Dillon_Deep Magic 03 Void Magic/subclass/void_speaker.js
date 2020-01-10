module.exports = {
    source: 'DM03',
    page: 5,
    class: 'Wizard',
    name: 'Void Speaker',
    subclassFeatures: [
        [
            {
                name: 'Void Speaker',
                entries: [
                    'Given the nature of void magic, it comes as no surprise that a tradition of wizards sprang up from the study of void speech. Void speakers are a standoffish and secretive lot, prone to delving into crumbling, monster-prowled ruins and the dark corners of moldering libraries with equal caution; carelessly reading a text that may be sprinkled with void glyphs can be just as deadly as stumbling into a den of trolls. As you focus your study on void speech, you learn to properly invoke the words and glyphs to empower your magic and to tap the vast potential of the void.',

                    'Some void speakers risk the darkness for the sake of knowledge or defense against that which lies beyond. Others succumb to the madness and corruption that void magic touches and become living conduits for the horror seeking entry into the mortal world.',

                    {
                        type: 'entries',
                        name: 'Void Savant',
                        entries: [
                            'Beginning when you select this tradition at 2nd level, the gold and time you must spend to copy a void spell into your spellbook is halved.',

                            'When you gain a level, one of the two spells you learn for gaining a level can be a void magic spell, even if you’ve never encountered the spell before. Similarly, when you learn a new cantrip, it can be a void magic cantrip, even if you’ve never previously encountered it.',
                        ],
                    },
                    {
                        type: 'entries',
                        name: 'Whispers of the Void',
                        entries: [
                            "Starting at 2nd level, as a bonus action immediately before you cast a spell of 1st level or higher, you can utter a few words of void speech and weave its dark magic into your spell. The tainted spell disorients one creature you can see that the spell affects when you cast it. The creature has disadvantage on the next attack roll or ability check it makes before the start of your next turn. You can't use this feature if you are unable to speak.",
                        ],
                    },
                    {
                        type: 'entries',
                        name: 'Rebuke from Beyond',
                        entries: [
                            'Beginning at 6th level, when you are damaged by a creature within 60 feet, you can use your reaction to bark a destructive word of void speech. If the creature can hear you, it takes necrotic damage equal to half your wizard level plus your Intelligence modifier. You can use this ability a number of times equal to your Intelligence modifier (minimum of 1), and you regain all expended uses when you finish a long rest. You can’t use this ability if you are unable to speak.',
                        ],
                    },
                    {
                        type: 'entries',
                        name: 'Powerful Echo',
                        entries: [
                            'Starting at 10th level, when you cast a void magic spell that targets only one creature, you can have it target a second creature. Additionally, you have advantage on Constitution saving throws made to maintain concentration on void spells.',
                        ],
                    },
                    {
                        type: 'entries',
                        name: 'Manifestation',
                        entries: [
                            'At 14th level, you can use your action to pronounce a complicated phrase in void speech. Choose a point you can see within 60 feet. The area within 20 feet of that point is shrouded in dim light for one minute. Any creature hostile to you within the area is vulnerable to necrotic damage and has disadvantage on Wisdom checks. An affected creature that starts its turn in the area or that enters the area for the first time on its turn takes 3d6 necrotic damage, or half damage with a successful Constitution saving throw (using your spell save DC). Once you use this ability, you can’t use it again until you finish a short or long rest. You can’t use this feature if you’re unable to speak.',
                        ],
                    },
                    {
                        type: 'entries',
                        name: 'Rebuke from Beyond',
                        entries: [
                            {
                                type: 'options',
                                entries: [
                                    {
                                        type: 'entries',
                                        name: 'Aria of Suspense (Ansia)',
                                        entries: [
                                            'You build an air of tension and paranoia with subtle, droning tones. As an action, you expend and roll a Bardic Inspiration die. For the next 10 minutes, any creatures of your choice within 60 feet cannot be surprised, and gain a bonus on saving throws against traps and environmental hazards equal to your Bardic Inspiration die roll.',
                                        ],
                                    },
                                    {
                                        type: 'entries',
                                        name: 'Crash (Marcato).',
                                        entries: [
                                            'You learn how to harness and amplify the roar of a well-placed blow into a violent explosion of sound. When a creature other than yourself within 60 feet of you hits with an attack, you can use your reaction to expend and roll a Bardic Inspiration die. The target of the triggering attack must make a Strength saving throw against your Spell save DC or take thunder damage equal to half of the number rolled and be knocked prone.',
                                        ],
                                    },
                                    {
                                        type: 'entries',
                                        name: 'Dirge of Dread (Finale)',
                                        entries: [
                                            "You play a terrifying dirge to accompany a deathblow, striking fear into the hearts of your nearby enemies. When an ally brings a creature within 60 feet to 0 hitpoints, you can use your reaction to expend and roll a Bardic Inspiration die. Select a number of creatures within 15 feet of the triggering ally equal to half of the number rolled (minimum 1). Each target must make a Wisdom saving throw against your Spell save DC or become frightened of the triggering ally until the end of that ally's next turn. After the effect ends, or the save is successful, targeted creatures are immune to Dirge of Dread for the next 24 hours.",
                                        ],
                                    },
                                    {
                                        type: 'entries',
                                        name: 'Dissonance (Discordria)',
                                        entries: [
                                            'Summoning a harsh, discordant tone, you muddle the mind of an opponent, lessening their defenses. When a creature within 60 feet is forced to make a saving throw, you can use your reaction to expend and roll a Bardic Inspiration die. You reduce their saving throw by half of the number rolled. You can use this feature after the creature makes its saving throw roll, but before the DM determines a success or failure.',
                                        ],
                                    },
                                    {
                                        type: 'entries',
                                        name: 'Guiding Tone (Fermata)',
                                        entries: [
                                            'You drag a sharp, powerful chord through the mind of a creature, forcing it to suddenly stumble in a direction you wish. As a bonus action, you expend and roll a Bardic Inspiration die and select a creature other than yourself within 60 feet. The target must succeed on a Wisdom saving throw against your Spell save DC or take psychic damage equal to half of the number rolled and be pushed 10 feet in a direction you choose. A target can fail the saving throw voluntarily.',
                                        ],
                                    },
                                    {
                                        type: 'entries',
                                        name: 'Hasten Tempo (Accelerando)',
                                        entries: [
                                            "Your manipulation of tempo and song can inspire others to act more quickly. You can use a Bonus action on your turn to choose one creature other than yourself within 60 feet. Expend and roll a Bardic Inspiration die, adding the number rolled to the creature's initiative and moving them up the initiative order accordingly. If this would move them higher than you, they immediately take their turn after you this round. A creature cannot be affected by Hasten Tempo again until they've finished a short or long rest.",
                                        ],
                                    },
                                    {
                                        type: 'entries',
                                        name: 'Hymn of Harmony (Ammonia)',
                                        entries: [
                                            'The melodies surrounding your allies promote rapid recovery. When a creature that has a Bardic Inspiration die from you regains any hitpoints, they can expend and roll their inspiration die to regain additional hitpoints equal to the number rolled.',
                                        ],
                                    },
                                    {
                                        type: 'entries',
                                        name: 'Majestic Anthem (Maestoso)',
                                        entries: [
                                            'Pulled from the chaos, you muster an uplifting melody that bolsters the resolve of your allies. You can expend and roll a Bardic Inspiration die as an action, and all other creatures you choose within 60 ft. gain temporary hitpoints equal to the number rolled plus your Charisma modifier (minimum of 1). These temporary hitpoints last until the end of your next turn.',
                                        ],
                                    },
                                    {
                                        type: 'entries',
                                        name: 'Resonance (Risonanza)',
                                        entries: [
                                            "You shape the harmonic vibrations of a weapon's movements into a dangerous, sonic enhancement. Using a bonus action, you can expend and roll a Bardic Inspiration die, choosing one weapon within 60 feet of you. Until the end of your next turn, all attacks with that weapon deal additional thunder damage equal to half of number rolled (minimum of 1).",
                                        ],
                                    },
                                    {
                                        type: 'entries',
                                        name: 'Sprint (Presto)',
                                        entries: [
                                            'The song you conjure can stir the winds, pushing along those who require expedient travel. A creature that has a Bardic Inspiration die from you can expend and roll their inspiration to increase their speed for that turn. A roll of 1\u20144 increases their speed by 10 feet. a roll of 5-8 increases their Speed by 15 feet, and a roll of 9\u201412 increases their speed by 20 feet.',
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    ],
};