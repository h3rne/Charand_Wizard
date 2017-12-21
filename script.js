//A simple TFT Character Randomiser

// environment variables
var test = document.querySelector('#test');
var characterName = document.getElementById("characterName");
var counterNumber = document.getElementById("counterNumber");
var raceValue = document.getElementById("raceValue");
var legend = document.getElementById("legend");
var stValue = document.getElementById("stValue");
var dxValue = document.getElementById("dxValue");
var iqValue = document.getElementById("iqValue");
var xpTally = document.getElementById("xpTally");
var adjDx = document.getElementById("adjDx");
var maValue = document.getElementById("maValue");
var dam1_5 = document.getElementById("dam1_5");
var dam6_10 = document.getElementById("dam6_10");
var dam11_15 = document.getElementById("dam11_15");
var dam16_20 = document.getElementById("dam16_20");
var spellsList = document.getElementById("spellsList");

// character = [Name(0), Counter#(1), Race(2), Gender(3), Legend(4), ST(5), DX(6), IQ(7), XP(8), AdjDX(9), MA(10), Dam(11), spellSelection(12)]
var spellSelection = [[0,0],[0,1]];
var character = ["Nob the Shirt", "N", "Human", "M", 11, 10, 11, 0, 10, 10, 11, spellSelection];

//Data Arrays
var characterCounters = ["D", "E", "F", "K","G", "Y", "Q", "S", "X", "R", "I", "H", "L", "T"];
var namePrimitives = [
[0.9,"Aar", "Ab", "Ad", "Ag", "Ai", "Aj", "Al", "Am", "An", "An", "Ant", "Ap", "Ap", "Ar", "As", "As", "Av", "Au", "Ax", "Ay", "Az", "Bab", "Bal", "Bam", "Ban", "Bar", "Bas", "Bat", "Bax", "Bay", "Beck", "Bel", "Ben", "Beow", "Ber", "Bes", "Bet", "Bev", "Bob", "Bof", "Bog", "Bol", "Bomb", "Bon", "Bop", "Bor", "Bos", "Bot", "Bov", "Bow", "Box", "Boz", "Bid", "Bif", "Big", "Bil", "Bim", "Bin", "Bip", "Bir", "Bit", "Biv", "Bun", "Bub", "Buck", "Bud", "Buf", "Bug", "Bul", "Bum", "Bur", "Bus", "But", "Bux", "Buz", "Bla", "Ble", "Bli", "Blo", "Blu", "Bri", "Bra", "Bre", "Bro", "Bru", "By", "Cab", "Cad", "Caf", "Cag", "Cal", "Cam", "Can", "Cap", "Car", "Cas", "Cat", "Caz", "Cob", "Cod", "Cof", "Cog", "Cok", "Cock", "Coh", "Col", "Con"
],
[0.3,"b", "l", "n", "r", "p", "s", "g", "h", "f", "t", "d", "ch", "m", "z", "th"
],
[0.7,"o", "on", "y", "ie", "ee", "ec", "ax", "an", "ex", "any", "a", "il", "ra", "le", "in", "ict", "ulf", "ny", "ly", "as", "ur", "om", "er", "el", "ella", "es", "is", "les", "wa", "ty", "en"
]];

var adjectivesList = ["adorable", "beautiful", "clean", "drab", "elegant", "fancy", "glamorous", "handsome", "long", "magnificent", "old-fashioned", "plain", "quaint", "sparkling", "ugly", "unsightly", "wide-eyed", "alive", "better", "careful", "clever", "dead", "easy", "famous", "gifted", "helpful", "important", "inexpensive", "mushy", "odd", "powerful", "rich", "shy", "tender", "uninterested", "vast", "wrong", "agreeable", "brave", "calm", "delightful", "eager", "faithful", "gentle", "happy", "jolly", "kind", "lively", "nice", "obedient", "proud", "relieved", "silly", "thankful", "victorious", "witty", "zealous", "angry", "bewildered", "clumsy", "defeated", "embarrassed", "fierce", "grumpy", "helpless", "itchy", "jealous", "lazy", "mysterious", "nervous", "obnoxious", "panicky", "repulsive", "scary", "thoughtless", "uptight", "worried", "broad", "chubby", "crooked", "curved", "deep", "flat", "high", "hollow", "low", "narrow", "round", "shallow", "skinny", "square", "steep", "straight", "wide", "big", "colossal", "fat", "gigantic", "great", "huge", "immense", "large", "little", "mammoth", "massive", "miniature", "petite", "puny", "scrawny", "short", "small", "tall", "teeny", "teeny-tiny", "tiny", "cooing", "deafening", "faint", "hissing", "loud", "melodic", "noisy", "purring", "quiet", "raspy", "screeching", "thundering", "voiceless", "whispering", "bitter", "delicious", "fresh", "greasy", "juicy", "hot", "icy", "loose", "melted", "nutritious", "prickly", "rainy", "rotten", "salty", "sticky", "strong", "sweet", "tart", "tasteless", "uneven", "weak", "wet", "wooden", "yummy", "ancient", "brief", "early", "fast", "late", "long", "modern", "old", "old-fashioned", "quick", "rapid", "short", "slow", "swift", "young", "boiling", "breezy", "broken", "bumpy", "chilly", "cold", "cool", "creepy", "crooked", "cuddly", "curly", "damaged", "damp", "dirty", "dry", "dusty", "filthy", "flaky", "fluffy", "freezing", "hot", "warm", "wet", "abundant", "empty", "heavy", "light", "substantial", "pungent", "patiemt"
];

//Spell book data

//["Spell Name", "Spell Type (M, T, C, S)", IQ, ST_cast, ST_maintain, "Effect", "Notes"]
var spellBook = [
[
["STAFF",	"S",	8,	5,	0,	"+STAFF",	"Make any piece of wood into a staff. This spell is rarely used DURING a game, because any wizard who knows it can start the game with a staff."],									
											
["MAGIC FIST",	"M",	8,	"n",	0,	"nd-2n",	"A telekinetic blow, can also trigger traps or carry out other unsubtle manipulations within line of sight."],																				
["BLUR",	"T",	8,	1,	1,	"oDX-4",	"Defensive spell. Makes subject harder to see/hear/smell Subtracts 4 from DX of all attacks/spells against subject."],																				
["SLOW MOVEMENT",	"T",	8,	2,	0,	"oMA/2",	"Halves victim’s MA for 4 turns. Slow spells do NOT multiply, but DO add. Two slow spells do NOT reduce a victim to1/4 speed; they keep him at V2 speed twice as long."],																				
["DROP WEAPON",	"T",	8,	"1*",	0,	"o-WEAPON",	"Makes victim drop whatever is in one hand — a weapon, shield, or whatever. Will NOT make a ring or amulet fall off. Costs 2 ST if victim’s basic ST is 20 or more."],																				
["IMAGE",	"C",	8,	1,	0,	"+IMAGE",	"Creates any image (see IMAGES AND ILLUSIONS) occupying one hex."]
],
[
["CLUMSINESS",	"T",	9,	"n",	0,	"oDX-2n",	"Lasts 3 turns (1 turn if victim’s ST is 30 or more)."],																				
["CONFUSION",	"T",	9,	"n",	0,	"oIQ-2n",	"Lasts 3 turns. A figure whose IQ is reduced by a Confusion spell cannot use high-IQ spells while ‘confused’ to a level lower than the IQ required for the spell, but CAN re-energize spells already cast."],																				
["AVERT",	"T",	9,	2,	1,	"o+2hx",	"Defensive spell. When a wizard throws AVERT on a victim, the victim must end his movement at least 2 hexes farther from the wizard than he started, each turn the spell is on. A victim who cannot move away without running into something or falling into a river or chasm must make his saving roll (3 dice against adjDX) to avoid falling down. A figure which cannot move 2 hexes due to being engaged must move as far away as it can, even if it has to disengage."],

["AID",	"T",	9,	"n",	0,	"p/aST/DX/IQ+n",	"Temporarily adds 1 to ST, DX, or IQ of any figure (including wizard himself) for each 1 ST the wizard uses to cast it. Lasts 2 turns."],																				
["SUMMON WOLF",	"C",	9,	2,	1,	"+WOLF",	"Brings a wolf (ST 10, DX 14, IQ 6, MA 12, bite does 1 + 1 damage) to follow wizard’s orders. (See SUMMONED CREATURES.)"],																				
["REVEAL MAGIC",	"S",	9,	1,	0,	"ALL_DEFENSIVE",	"A spell to tell the caster what secret protective spells have been cast by his foes during the combat. Will reveal the following spells and who they are on (NOT who cast them): reverse missiles, spell shields, stone ﬂesh, iron ﬂesh, and shock shields. Will also reveal location of slippery ﬂoors. Will NOT reveal whether any ﬁgures are images, illusions, or real."],																				
["1-HEX FIRE",	"C",	9,	1,	0,	"+FIRE",	"Fills one hex with magical flame. Effects of this ﬂame are as follows: No creature of less than IQ 8 will pass through or stay in it; animals are afraid of fire. (An illusion, of course, could pass through.) A ﬁgure who moves through a fire hex, or is in a hex when a wizard creates ﬁre there, takes 2 hits of damage. A figure which moves into a fire hex and STOPS (to attack, for instance) takes 4 hits and suffers -2 DX that turn. The effects of fire hexes are cumulative within a turn, but armor and protective spells DO work. Example: A ﬁgure moves through two fire hexes (4 hits damage) and stops in a third one to attack (4 more hits). The pro- tection given by that ﬁgure’s armor and spells are taken from the total of 8 hits to see how many hits the ﬁgure actually took from the ﬁre. The hits take effect as soon as the protection is used up. If the ﬁgure in the example had Stone Flesh (stopping 4 hits) but no other armor, he would suffer no damage in the first two hexes. However, these would use up the protection, and upon stopping in the third hex he would take 4 hits. (The Stone Flesh would still take 4 hits off any other attack that turn.)"]
],
[
["TRIP",	"T",	10,	"2*",	0,	"oFALL_DOWN",	"Knocks victim down. Does NO damage — but if victim is on edge of a chasm, pit, river, etc., he must make a 4/adjDX to avoid falling in. A good hard Magic Fist would have the same effect. The Trip spell costs 2 ST, or 4 ST if target has 30 ST or over."],																				
["SPEED MOVEMENT",	"T",	10,	2,	0, "2MA",	"Doubles MA of target figure for 4 turns. Speed spells do NOT multiply, but DO add. Two speed spells do NOT quadruple the subject’s speed; they double it for twice as long."],


["SUMMON MYRMIDON",	"C",	10,	2,	1, "+MYRMIDON",	"Brings a warrior (ST 12, DX 12, IQ 8, MA 10, 2d broadsword, no armor) to follow wizard’s orders. (See SUMMONED CREATURES.)"],																				
["DAZZLE",	"S",	10,	3,	0,	"DX-3",	"Creates a blinding psychic ﬂash. ALL sighted creatures (friend or foe) in an area within 5 megahexes of the wizard’s own megahex (but NOT the wizard himself) suffer -3 DX for 3 turns. Images, illusions, etc. (ANYTHING with eyes) are affected."],																				
["1-HEX SHADOW",	"C",	10,	1,	0,	"+SHADOW",	"Fills one hex with totally black shadow, extending some 3 meters in the air. A hex may be shadowed while a ﬁgure is in it. Figure. may move freely through shadow hexes. A ﬁgure attacking from or through a shadow hex has DX -6. An attack INTO a shadow hex is DX -4."],																				
["SHOCK SHIELD",	"T",	10,	2,	1,	"1d same hx",	"Does 1d to any creature in the subject’s hex (except subject) at end of each turn the spell is on.	"]	
],
[
["SLEEP",	"T",	11,	3,	0,	"oSLEEP",	"Puts victim to sleep until he (a) awakens naturally, which takes several hours, (b) is hit, or (c) is shaken awake (takes 2 turns) by a figure in an adjoining hex. A sleeping ﬁgure falls down. Does NOT work on ﬁgures with basic ST of 20 or more."],																				
["SUMMON BEAR",	"C",	11,	4,	1,	"+BEAR",	"Brings a bear (ST 30, DX 11, IQ 6, MA 8, bite does 2 + 2 damage) to follow wizard’s orders. (See SUMMONED CREATURES.)"],																				
["CONTROL ANIMAL",	"T",	11,	2,	1, "BEAST",	"Puts any one animal under wizard’s control as long as spell is maintained. Works only on REAL animals; if the target was actually an illusion or image, it vanishes when the spell strikes. A controlled animal will follow most orders, including orders to attack its friends (see CONTROL SPELLS) but gets a 3-die saving roll against IQ when the spell first hits. This spell does NOT affect humanoids or dragons. It does affect wolves, bears, etc."],																				
["1-HEX ILLUSION",	"C",	11,	2,	0, "ILLUSION",	"Creates any 1-hex illusion. See IMAGES AND ILLUSIONS."],																			
["REVERSE MISSILES",	"T",	11,	2,	1, "REVERSE MISSILES",	"Causes any missile spells (or missile or thrown weapons) aimed at the spell’s subject to turn against the one who fired them instead. When this spell is cast, the player records the fact. He shows it to the other player at the END of the first turn in which missiles were ﬁred at the spell’s subject. All missiles which hit that ﬁgure are then considered to have hit the ﬁgure who fired them, instead (same damage). This may result in “replaying” part of a turn, to achieve the proper unpleasant surprise to the player who fired the missiles. (Exception: In MELEE, if a highly dextrous archer fired two arrows at the protected ﬁgure in one turn, only the first arrow turns back. The dextrous archer is then warned, and NO second arrow is ﬁred. This spell has NO EFFECT against non-missile attacks."],																		
["ROPE",	"C",	11,	2,	1,	"+ROPE",
   "Creates a magical rope to entangle victim, halving his MA. The rope also IMMEDIATELY reduces the victim’s DX by 2. Each later turn the rope remains, it reduces his DX by one more...so it is -3 on the 2nd turn the rope remains, -4 on the 3rd turn, etc. To remove the rope, the victim must stand still for a turn, doing nothing else, and make a saving roll on 3 dice against adjDX. A successful saving roll removes the rope, which vanishes. If a ﬁgure’s DX is reduced to 2 or less by a rope, he falls to the ﬂoor, helpless. NOTE: A ﬁgure in an adjoining hex can remove another figure’s rope in the same way — by standing still and making his own adjDX roll on 3 dice. The Rope spell is not effective against creatures with a ST of 20 or more. For that you need the Giant Rope spell (IQ 15)."],																				
["1-HEX WALL",	"C",	11,	2,	0,	"+WALL",	"Creates a solid wall in one hex — looks like a real wall. This spell CANNOT be cast over a ﬁgure or part of a figure to entomb him/her in solid rock; cast at a hex containing a figure, it fails. (A wall cast on an image, or part of one, WILL destroy it.)"],																				
["DESTROY CREATION",	"T",	11,	1,	0, "DESTROY CREATION",	"Removes any one thing created by a Creation spell, with the following exceptions: (1) Has no effect on summoned beings. (2) Only removes one hex of a multi-hex fire, wall, or shadow. (3) Has no effect on a multi-hex image or illusion of a living being."]
],
[
["FREEZE",	"T",	12,	4,	0,	"FREEZE",	"Totally freezes victim (stops all actions, stiffens body) for 2 to 12 turns (after the spell strikes, wizard rolls two dice). Does not work on beings with basic ST of 30 or more."],																				
["FIREBALL",	"M",	12,	"n",	0,	"nd - n",	"Can be used to set fire to ﬂammable objects."],																				
["INVISIBILITY",	"T",	12,	3,	1,	"INVISIBILITY",	"Lets wizard make himself (or another) invisible. The counter for an invisible ﬁgure is removed from the map (see HIDDEN MOVEMENT). An attack against an invisible ﬁgure is made at -6 DX (and, of course, has no effect if directed against the wrong hex). Invisibility does NOT make one inaudible or unsmellable, and is no use in the dark except against creatures who see in the dark normally. Otherwise, the effects of invisibility on your foes’ DX are NOT cumulative with those of blur, dazzle, shadowed hexes, or darkness."],																				
["BLAST",	"S",	12,	2,	0,	"1d ALL",	"Does 1 die of damage to EVERY creature, friend or foe, in the wizard’s hex or adjacent to it, except the wizard."],																				
["MAGE SIGHT",	"T",	12,	2,	1,	"MAGE SIGHT",	"Allows its subject to see objects concealed by blur, invisibility, shadow, or ordinary darkness.	"],																			
["BREAK WEAPON",	"T",	12,	3,	0,	"BREAK WEAPON",	"Shatters one weapon, shield, staff, etc., in hand of a foe. Does not work on enchanted swords, shields, etc...they are constructed with protection against this spell. Broken weapons do half damage (round down); broken staffs are useless."],																				
["3-HEX FIRE",	"C",	12,	2,	0,	"+FIRE",	"Like the Fire spell, but covering up to 3 connected hexes."],																				
["3-HEX SHADOW",	"C",	12,	2,	0,	"+SHADOW",	"Like the Shadow spell, but covering up to 3 connected hexes."]
],
[
["FLIGHT",	"T",	13,	3,	1,	"FLIGHT",	"Lets subject (temporarily) fly. (See FLIGHT rules under MOVEMENT.) Any attack on a ﬂying (one-hex) creature is at -4 DX. A creature flying by this spell has a MA of 12. Such a creature will not be used to ﬂight — so if he/she attacks while in the air, his/her DX will be adjusted by -2 for regular physical attacks or magic spells cast on another, and -4 for attacks with physical thrown or missile weapons. This is in ADDITION to the -4 DX mentioned above if a ﬂying creature is the target attacked. If one ﬂying wizard aims a staff stroke at another, his DX is -6; -2 because he's ﬂying, and -4 because his target is. This is clearly not an effective way to attack."],																				
["SUMMON GARGOYLE",	"C",	13,	4,	1, "+GARGOYLE",	"Brings a Gargoyle (ST 20, DX 11, IQ 8, MA 8 on ground, 16 in air, fist does 2 dice damage) to serve wizard. (See SUMMONED CREATURES.)"],																				
["CONTROL PERSON",	"T",	13,	3,	1, "CONTROL PERSON",	"Puts any one human or humanoid, natural or summoned, under wizard’s control for as long as spell is maintained. If target was an image or illusion, it disappears. A controlled person will follow most orders, including orders to attack his former friends. (See CONTROL SPELLS.) NOTE: target of the spell gets a saving roll against his IQ on 3 dice. This spell does not work on animals or dragons."],																				
["STONE FLESH",	"T",	13,	2,	1,	"ARMOUR (4)",	"Gives subject’s body the power to act as armor, stopping 4 hits per attack. The protective effect of Stone Flesh is cumula- tive with any other natural or magical hit-stopping ability (armor, fur, etc.) of its possessor, but not with Iron Flesh. There is no way to tell if a figure is protected by this spell except to hit him or use Reveal Magic."],																				
["SLIPPERY FLOOR",	"T",	13,	3,	0, "1-MHEX SLIPPERY FLOOR",	"Makes the ﬂoor over one megahex extremely slick. When any ﬁgure enters the slippery area, the player who cast the spell reveals it. Any figure in a hex made slippery, or any figure entering a slippery hex, must make his saving roll (3 dice against DX) to avoid fall- ing in that hex. If the figure then enters another slippery hex in the same turn, it must roll again, and so on...and even if a ﬁgure simply stands still in a slippery hex, it must make the saving roll to avoid falling. A figure which falls in a slippery hex may try to stand next turn, but must make its 3-die saving roll to do so. Of course, it may choose to lie still, or to crawl out (see CRAWLING under MOVEMENT). To figure the range for this spell, or any other thrown spell covering one MH, count the hexes from the wizard to the center of the MH involved; this is the DX—. This spell DOES affect images and illusions."],																				
["STOP",	"T",	13,	3,	0,	"oSTOP",
   "The victim of this spell has a MA of zero for the next four turns. He or she may do anything else, but may not move to another hex under any circumstances."],																				
["4-HEX IMAGE",	"C",	13,	2,	0,	"+IMAGE",	"Lets wizard create an image (see IMAGES AND ILLUSIONS) of anything no greater than 4 hexes in size.	"],																			
["3-HEX WALL",	"C",	13,	4,	0,	"+WALL",	"Like the Wall spell, but affecting any 3 connected hexes."]
],
[
["LIGHTNING",	"M",	14,	"n",	0,	"nd",	"Can also be used to blast through solid objects — for instance, a created Wall hex will vanish after taking 5 hits from lightning, and the remainder (if any) of the lightning force passes straight through. If a being is killed by magical lightning, all magical items it carried are destroyed."],																				
["SUMMON GIANT",	"C",	14,	4,	1,	"+GIANT",	"Brings a giant (ST 30, DX 9, IQ 8, MA 8, no armor, club does 3 + 3 damage) to follow wizard’s orders. (See SUMMONED CREATURES.)"],																				
["4-HEX ILLUSION",	"C",	14,	3,	0, "+ILLUSION",	"Lets wizard create any illusion (see IMAGES AND ILLUSIONS) no greater than 4 hexes in size."],																				
["REMOVE THROWN SPELL",	"T",	14,	2, 0, "REMOVE SPELL(T)",	"Negates the effect of any Thrown- type spell...can be used to dissolve an enemy spell, or to eliminate a foe’s own magic protection. Has no effect on spells other than Thrown type, or on the Spell Shield."],																				
["DISPEL ILLUSIONS",	"S",	14,	5,	0, "DISPEL ILLUSIONS",	"Causes all illusions within 5 megahexes of the wizard’s own megahex to vanish immediately, regardless of their size and who created them."],																				
["SPELL SHIELD",	"T",	14,	3,	1,	"SPELL SHIELD",	"Prevents any spells (hostile or otherwise) from being cast on its subject — that is, protects against effects of all Special, Missile, and Thrown spells. Does NOT affect spells already cast; does NOT protect against ordinary physical force, including damage done by created beings or things, damage done by weapons (ordinary, magical, or staffs), or the effects of magic ropes and slippery ﬂoors. When a spell hits a ﬁgure protected by Spell Shield, the wizard casting the spell loses the entire ST cost for that spell, because it succeeded but was nulliﬁed. Exception — a wizard casting the Death Spell at a protected ﬁgure loses only 1 ST."]
],
[
["IRON FLESH",	"T",	15,	3,	1,	"ARMOUR (6)",	"Similar to Stone Flesh, but better: lets subject’s body stop 6 hits per attack."],																				
["TELEPORT",	"S",	15,	"n",	0,	"n-MHEX",	'Instantly “blinks” wizard to another hex. He may choose any facing he likes in the new hex. He does not have to be able to see the hex he is going to, but if he comes out in a hex with a solid object, he dies — and so does the object, if it was alive. Illusions count as solid; images disappear.'],																				
["SUMMON SMALL DRAGON",	"C",	15,	5, 1, "+SMALL DRAGON",	"Brings a small (4-hex) dragon (ST 30, DX 13, IQ 16, MA 6 on ground, 16 in air; breath 2d, claw does 2d-2) to follow wizard’s orders. (See DRAGONS and SUMMONED CREATURES.)	"],																			
["GIANT ROPE",	"C",	15,	5,	0,	"+GIANT ROPE",	"A strong version of the Rope spell. Cast on a creature of ST 20 or more, it has just the same effect that an ordinary Rope spell has on a human. Cast on a weaker creature, it has the effect of two simultaneous Rope spells, which must be removed one at a time."],																				
["7-HEX SHADOW", 	"C",	15,	3,	0,	"+SHADOW",	"Like a Shadow spell, but affecting up to 7 connected hexes."],																				
["7-HEX IMAGE",	"C",	15,	4,	0,	"+IMAGE",	"Lets wizard create any image occupying up to 7 connected hexes. (See IMAGES AND ILLUSIONS.)"],																				
["MEGAHEX AVERT",	"T",	15,	3,	1,	"MEGAHEX AVERT",	"Like an Avert spell, but cast on the occupants of a whole megahex at once...that is, any hex and all hexes adjacent to it. If the spell works, every figure in the MH is under an Avert spell, as above."]
],
[
["7-HEX ILLUSION",	"C",	16,	5,	0, "+ILLUSION",	"Creates an illusion of anything occupying no more than 7 connected hexes (see IMAGES AND ILLUSIONS)."],																				
["SUMMON DRAGON",	"C",	16,	5,	2,	"+DRAGON",	"Brings a 7-hex dragon (ST 60, DX 14, IQ 20, MA 8 on ground, 20 in air; breath does 3 dice damage, claw does 2 dice damage) to serve wizard (see DRAGONS and SUMMONED CREATURES)."],																				
["DEATH SPELL",	"T",	16,	"oST", 0, "oDIES",	"When this spell is cast, compare the ST of the wizard with that of the victim. The LOWER strength (at that moment) is the amount of ST lost by EACH of the two. In other words, the weaker one immediately dies, and the stronger one loses that much ST. Therefore, if a wizard uses this spell on a stronger opponent, it means his own death instead. Armor, Stone or Iron Flesh, etc., do NOT protect against this spell, although the Spell Shield stops it."],																				
["7-HEX FIRE",	"C",	16,	4,	0,	"+FIRE",	"Like the Fire spell, but cast on any 7 connected hexes."],																				
["7-HEX WALL",	"C",	16,	6,	1,	"+WALL",	"Like the Wall spell, but affecting any 7 connected hexes. NOTE: Although you cannot entomb a ﬁgure by putting a wall in its own hex, this spell can let you put walls in every hex surrounding a ﬁgure, thus trapping it."],																				
["MEGAHEX SLEEP",	"T",	16,	8,	0,	"MEGAHEX oSLEEP",	"A Sleep spell which affects every figure with ST less than 20 (except the wizard himself) in a single megahex, OR any single figure with ST of 50 or less. Otherwise, just like Sleep, above."]
]
];

var attributeWeights=[1,1,1];

function generate() {
  //The generation code goes here

  //Name generation code
  character[0]="";
  while (character[0]=="") {
    for(var i=0; i<namePrimitives.length; i++) {
      if(Math.random()<=namePrimitives[i][0]) {
        character[0]+= namePrimitives[i][rndBetween(1,(namePrimitives[i].length-1))];
      }
    }
  }
  while(character[0].length < 3) {
    var i = namePrimitives.length - 1;
    character[0]+= namePrimitives[i][rndBetween(1,namePrimitives[i].length)];
  }
  character[0] = proper(character[0]) + " the " + proper(adjectivesList[rndBetween(1,adjectivesList.length)]);

  //Counter number generation codo
  character[1] = characterCounters[rndBetween(0,characterCounters.length-1)];

  //Race genertion code
  character[2] = "Human";

  //Gender generation code
  if(rndBetween(0,1)==0) {
    character[3] = "M";
  } else {
    character[3] = "F";
  }

  //Legend generation code
  character[4] = "WIZARD";

  //Attribute generation code
  var points = 8;
  var weightsTotal = 0;

  for(var i=5; i<=7; i++) {
    character[i]=8;
  }

  for(var i=0; i<attributeWeights.length; i++) {
    weightsTotal += attributeWeights[i];
  }
  for(var i=1; i<=points; i++) {
    allocationRoll = Math.random();
    if(allocationRoll<=(attributeWeights[0]/weightsTotal)) {
      character[5]++;
    } else if(allocationRoll>=(1-(attributeWeights[2]/weightsTotal))) {
      character[7]++;
    } else {
      character[6]++;
    }
  }
  //XP tally
  character[8] = 0;

  //adjDX
  character[9] = character[6];

  //MA
  character[10] = 10;

  //Dam
  character[11] = character[5];

  //Spells
  var spellSelectionFinished_f = false;
  var spellBookTotalLength = 0;
  spellSelection = [];

  for(var i=0; i<(spellBook.length-1); i++) {
//193
    spellBookTotalLength+=spellBook[i].length;
  }

  if(character[7]==8) {
    spellSelection = [[0,0],[0,1],[0,2],[0,3],[0,4],[0,5]];
    spellSelectionFinished_f = true;
  }

  while (!spellSelectionFinished_f) {
    var iqSelection = rndBetween(0,(character[7]-8));

    if(iqSelection>=spellBook.length) {iqSelection=spellBook.length-2;}

    var numberSelection = rndBetween(0,(spellBook[iqSelection].length-1));
    var alreadyLearned_f = false;

    for(var i=0; i<spellSelection.length; i++) {
      if((spellSelection[i][0]==iqSelection)&&(spellSelection[i][1]==numberSelection)) {alreadyLearned_f = true;}
    }
    if(!alreadyLearned_f) {
      spellSelection.push([iqSelection,numberSelection]);
    }
    if(spellSelection.length>=character[7]){
      spellSelectionFinished_f = true;
    }
    if(spellSelection.length==spellBookTotalLength){
      spellSelectionFinished_f = true;
    }
  }
  //Order spells code here?

//test.innerHTML = spellSelection;

  //Skills Code
  
  //Equipment Code
  
  displayCharacter();
}

function displayCharacter() {
  characterName.innerHTML = character[0];
  counterNumber.innerHTML = character[1];
  raceValue.innerHTML = character[2];
  if(character[3]=="M") {
    raceValue.innerHTML += " &#9794";
  } else {
    raceValue.innerHTML += " &#9792"
  }
  legend.innerHTML = character[4];
  stValue.innerHTML = character[5];
  dxValue.innerHTML = character[6];
  iqValue.innerHTML = character[7];
  var tallyChar = "l";
  xpTally.innerHTML = 'XP tally: <b style="color:black;">'+tallyChar.repeat(character[8])+'</b>';
  adjDx.innerHTML = 'AdjDX: <b style="color:black;">'+character[9]+'</b>';
  maValue.innerHTML = 'MA: <b style="color:black;">'+character[10]+'</b>';
  //Dam code
  var O = "O";
  var X = "X";
  if(character[11]>=5){
    dam1_5.innerHTML="OOOOO<br>OOOOO";
  } else {
    dam1_5.innerHTML=O.repeat(character[11])+X.repeat(5-character[11])+"<br>"+O.repeat(character[11])+X.repeat(5-character[11]);
  }
  if(character[11]>=10){
    dam6_10.innerHTML="OOOOO<br>OOOOO";
  } else if (character[11]<=5) {
    dam6_10.innerHTML="XXXXX<br>XXXXX";
  } else {
    dam6_10.innerHTML=O.repeat(character[11]-5)+X.repeat(10-character[11])+"<br>"+O.repeat(character[11]-5)+X.repeat(10-character[11]);
  }
  if(character[11]>=15){
    dam11_15.innerHTML="OOOOO<br>OOOOO";
  } else if (character[11]<=10) {
    dam11_15.innerHTML="XXXXX<br>XXXXX";
  } else {
    dam11_15.innerHTML=O.repeat(character[11]-10)+X.repeat(15-character[11])+"<br>"+O.repeat(character[11]-10)+X.repeat(15-character[11]);
  }
  if(character[11]>=20){
    dam16_20.innerHTML="OOOOO<br>OOOOO";
  } else if (character[11]<=15) {
    dam16_20.innerHTML="XXXXX<br>XXXXX";
  } else {
    dam16_20.innerHTML=O.repeat(character[11]-15)+X.repeat(20-character[11])+"<br>"+O.repeat(character[11]-15)+X.repeat(20-character[11]);
  }
  //Display spells
  var spellsListDisplay = "Spells:<br>";
  for(var i=0; i<spellSelection.length; i++) {
    spellsListDisplay += spellBook[spellSelection[i][0]][spellSelection[i][1]][0] + "(";
    spellsListDisplay += spellBook[spellSelection[i][0]][spellSelection[i][1]][1] + ") IQ:";
    spellsListDisplay += spellBook[spellSelection[i][0]][spellSelection[i][1]][2] + " ST:";
    spellsListDisplay += spellBook[spellSelection[i][0]][spellSelection[i][1]][3] + "(";
    spellsListDisplay += spellBook[spellSelection[i][0]][spellSelection[i][1]][4] + ") ";
    spellsListDisplay += '<u onClick="'+"alert('"+spellBook[spellSelection[i][0]][spellSelection[i][1]][6]+"')"+'">'+spellBook[spellSelection[i][0]][spellSelection[i][1]][5] + "</u><br>";
  }
  spellsList.innerHTML = spellsListDisplay;
}

function proper(improperString) {
  var first = improperString.charAt(0);
  var rest = improperString.slice(1);

  first = first.toUpperCase();

  return first + rest;
}

function rndBetween(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) ) + min;
}

addEventListener('load', function(e) {
  test.innerHTML = 'Shiny :)';
});
