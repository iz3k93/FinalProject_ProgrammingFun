var yourName = "";
var herName = "";7

yourName = prompt("What is your character name?", "Romeo");
herName = prompt("What is the name of the girl companion?", "Juliet");
var phrases = [//1
               ["Instructions:<br>All question must be answered with their respective multiple choice number<br>Chose wisely",
                "..........",
                "You are just a normal wannabe painter<br>on your way to your art school in the cities<br>like any other day.",
                "As you began to cross the road,<br>you notice a pretty cute Girl<br>that just so happen to be walking next to you.",
                "you start to think to yourself,<br>\"..hmm...she is quite cute.\"",
                "BUT, ALL OF A SUDDEN,",
                "A Semi truck rams both you and the girl out of nowhere.",
                "On that day, the accident had killed you both.",
                "............",
                "You wake up to what appears to be a void,<br>where you're surrounded with nothing but pure white space.",
                "You suddenly see that Girl from earlier",
                yourName + ": Hey, your that Girl from before.",
                "Girl: what is this place?",
                "1. Well we're dead, what else.\n2. uh..sorry, even i don't know the situation.",
                yourName + ": well, we're dead, what else do think this is?",
                yourName + ": uh..sorry, even i don't know the situation were in."],
                //2
                ["GOD:<br>YOU TWO ARE SIMPLY DEAD.",
                "Girl: eh.....wh...who?",
                yourName + ": What kind of place is this?",
                "GOD:<br>THIS PLACE IS THE BOUNDARY OF LIFE AND DEATH",
                "GOD:<br>FROM NOW ON<br>YOUR SOULS HAVE BEEN INJECTED INTO<br>THE UNDERWORLD",
                "Girl: What!? This is no joke here!!",
                "Girl: There is no way i could die in this place!!",
                yourName + ": Me too!!",
                "1. I just got into art school.\n2. I'm still a virgin.\n3. I don't want to die.",
                yourName + ": I Just recently got into Art School.",
                yourName + ": I'm still just a virgin.",
                yourName + ": I don't want to die just yet."],
                //3
                ["GOD:<br>IN THAT CASE...",
                "GOD:<br>I WILL LET ONLY ONE OF YOU LIVE",
                yourName + "/Girl: EH?..one..ONE.",
                "GOD:<br>NOT JUST TODAY, I WILL GIVE YOU SEVEN DAYS<br>TO TALK AMONGST YOURSELVES ON WHO SHALL LIVE",
                "Girl: Wait, cut this out, who are you !?<br>What did you just say now!",
                "GOD:<br>BY THAT DAY YOU TWO...",
                "GOD:<br>YOUR ENTIRE LIFE WILL BE SHARED",
                "GOD:<br>BE SURE THAT YOU DO NOT<br>LEAVE THE OTHERS SIDE",
                "a bright light flashes and you both end up back in the real world",
                yourName + ": ...wh...what, a park?",
                "Girl: It looks like it",
                "You both look at each other in an awkward silence",
                yourName + ": i wonder what that was,<br>was it god?",
                "Girl: That is just stupid.",
                "Girl: But oh well.",
                "Girl: I don't really understand what is gong on,<br>but it does look like were alive.",
                "Girl: Either way, I'm pretty busy.",
                "afterwards, she begins to leave",
                "1. Tell her to wait a moment\n2. Ignore her",
                "You ask her to wait for a sec, but",
                "You ignored her, but"],
                //4
                ["as she continues to leave,<br>you fall hard onto the ground<br>you start feeling like<br>you are about to have a heart attack.",
                "At that same moment you see that she is also having the same problem",
                "All of a sudden, you reflect on what \"GOD\" had spoken",
                "~BE SURE THAT YOU DO NOT LEAVE THE OTHERS SIDE~",
                "Instinctively, you begin to crawl towards the Girl",
                "Girl: ...uggg......uh....huh..it stopped?",
                yourName + ": Thought so.",
                "Girl: Wha...What is up with this?",
                yourName + ": He said so, earlier.",
                yourName + ": Our entire life will be shared",
                yourName + ": So probably our two lives<br>have become one,<br>and we cant separate ourselves",
                "Girl: What!?",
                "..............",
                "Girl: So....",
                "Girl: So you believe in the after seven days,<br>who will die thing as well?",
                yourName + ": .....Looks like....i have.",
                "Girl: Don't joke around,<br>I have lots of things i have to do!!!<br>So you just go and die!!",
                yourName + ": N..No way!!<br>I also have a lot of things i have to do!!",
                "Girl: Just go and die already!!!",
                "As she was saying that, she started to swing her purse at you.",
                "1. take the hit\n2. dodge and avoid being hit",
                "You took the hit and she hits you in the head",
                "You dodged away but you hit your head on a pole"],
                //5
                ["Girl: OWW!!",
                yourName + ": Wha..Whats wrong?",
                "Girl: I don't know,<br>if you get hit,<br>I get hurt as well",
                yourName + ": Come to think of it,<br>the voice did say \"share everything\"",
                "Girl: EHH!?",
                "Girl: Does that mean stimulation as well!?",
                yourName + ": Probably.",
                yourName + ": maybe this is is to prevent us<br>from trying to kill the other off",
                "Girl: Ehh...So i just cant kill you right now!?",
                yourName + ": You shouldn't  be thinking such dangerous thought.",
                yourName + ": Just now,...",
                yourName + ": I Received a murderous intent.",
                "Girl: MUR-DER-OUS!!?",
                yourName + ": Looks like even our emotions are shared.",
                "Girl: E~~~EWW, Creepy~~~!!DIE!!!",
                yourName + ": I don't want this either!",
                "She looks at you with a tired expression as she asks you a question",
                "Girl: hey, so..whats your name?",
                "1. its " + yourName + ".\n2. would it matter in a week.",
                yourName + ": ehh..well, its " + yourName + ".",
                yourName + ": Would it matter in a week from now",
                "Girl: I wouldn't know until then,<br>but until then, what is your name?",
                "You then took a small deep breath",
                yourName + ": Well any ways, my name is " + yourName + "."],
                //6
                ["Girl: so it's " + yourName + ",...ok.",
                "Girl: I am...",
                "Girl: ..........",
                herName + ": I am " + herName + ".",
                herName + ": For the time being, i am in your care for a week.",
                "Afterward, you both leave the park and head towards your apartment",
                "Once you both go back to your place<br>and she starts to explores your room with amazement<br>with all the art stull you ",
                herName + ": uwaa...you really are an art student,<br>this painting, did you do it?",
                "1. No, i bought it from an online auction.\n2. yea, for the most part.",
                yourName + ": No, it's something i won from an online auction.",
                herName + ": Really, and here i was about to praise you for it.",
                yourName + ": Yea, for the most part.",
                herName + ": Well, it's not like I'm praising you or anything."],
                //7
                [yourName + ": What a person",
                yourName + ": But anyways, what reason did you come to my place for.",
                yourName + ": Two people in a studio is pretty tight.",
                herName + ": Well do you want to go to my place? ",
                herName + ": I have my famly there.",
                yourName + ": ah..that is..troublesome.",
                herName + ": For now since its summer vacation,",
                herName + ": I got a phone call from my family earlier,<br>saying that they are going on a trip with a friend.",
                "You sense a feeling of guilt coming from her.",
                "1. Tell her that you know she is lying.\n2. Don't say anything.",
                yourName + ": I see you are lying.",
                herName + ": YOU KNOW!! Can you NOT read every little thing that i FEEL?<br>That is sexual harassment.",
                yourName + ": Even if you say that, I just can't..",
                "You just sit there feeling frustrated, little did you know, she caught a glimpse of your frustration.",
                herName + ": Whats wrong with you?",
                yourName + ": Nothing is wrong with me..."],
                //8
                [herName + ": If that is the case, then if I do this....What will happen to you...",
                herName + " grabs her chest and fondles with them",
                yourName + ": OWWWAAAA!!",
                yourName + ": What is this?",
                herName + ": HAHAHAHA!!I thought so.",
                yourName + ": You idiot, stop that!!",
                herName + ": Wha~t, still have that attitude?",
                yourName + ": Eh?",
                herName + ": Well,....if i do something here,<br>what will happen to you~~~~~~!?",
                yourName + ": STO....STOP IT!!!!!",
                "From that day forth, " + herName + " and your peculiar life style began.",
                "It is the next morning.<br>As you wake up early to leave<br>you suddenly woke up " + herName + ".",
                herName + ": mmm...huh..Where are you going?",
                "1. No where\n2. going out to draw",
                yourName + ": Thats none of your business.",
                herName + ": Geezz, i was just curious.",
                yourName + ": Well, don't.",
                "The weather is nice, thought I'd out to draw a sketch."],
                //9
                [herName + ": I see, well be careful then.",
                yourName + ": yea, " + herName + " be quiet while im gone.",
                "As you are about to leave, both  you and " + herName + " start to feel the chest pain again.",
                yourName + "/" + herName + ": OOOWWWWWWWWW!!!",
                "...............",
                yourName + ": I forgot, if we separate, we'll die.",
                herName + ": Ri--ght.",
                yourName + ": Sorry but, can you come with me?",
                herName + ": ok but afterwards, you will go panty shopping with me.",
                yourName + ": EH?",
                "Soon afterwards, you both arrive at the park.",
                "...............",
                herName + ": You sure are going all out on this troublesome activity.",
                herName + ": Get tired of it?",
                "1. Not really\n2. Sometimes\n3. Of course",
                yourName + ": No, not really",
                yourName + ": Sometimes i do",
                "She sense hesitation in you words",
                yourName + ": Of course i do.",
                "She can tell your lying"],
                //10
                ["As she looks at you drawing, she gets a sense of emotion from you",
                herName + ": *huh, i wonder what this is?*",
                herName + ": *Even though it is hard, he is enjoying it.*",
                herName + ": *He is impatient, but he seems happy.*",
                herName + ": *Ahh, i get it,*",
                herName + ": *This is what " + yourName + " is feeling when he draws.",
                herName + ": You really love drawing, don't you?",
                "1. Naw\n2. Ehh\n3. Yup",
                yourName + ": Not really",
                yourName + ": Ehh...here and there.",
                yourName + ": Yup...of course.",
                herName + ": So why did you get interested in drawing?",
                "1. Just because\n2. I was just good at it\n3. I don't know the reason but it's fun",
                yourName + ": Ehh..just because.",
                yourName + ": I was just really good at it",
                yourName + ": I don't know the reason why, but its fun.",
                yourName + ": Thought that i could make a living off of this.",
                yourName + ": So i entered an art school in the cities",
                herName + ": Hmmmm...",
                "1. Ask her if she has any dreams\n2. remain silence",
                yourName + ":" + herName + ", do you have any dreams.?",
                herName + ": Hmm...me? Let's see here.",
                "........"],
                //11
                [herName + ": Well, i was scouted earlier for a television show but<br>I want to have fun at my school.",
                herName + ": I also want to do some traveling",
                herName + ": There was so much i couldn't decide, so much filled with fun....",
                "As she spoke those words, you look to her as you sense that feeling of guilt coming from her again",
                "She then catches you looking at her",
                herName + ": ...What?",
                yourName + "..its nothing",
                yourName + ": *No...it's just my imagination,",
                yourName + ": *There is no way reason to keep secrets from me.*",
                "Soon afterwards, you both return to your place as " + herName + " begins dinner.",
                "You constantly stare at " + herName + " as she prepares",
                herName + ": Gees, What is up with all of the fidgeting, i can't focus with it.",
                yourName + ":..So..sorry.",
                "1. Tell her that this is the first time a Girl has come to your room and cook\n2. Tell her you never had anyone cooked for you before",
                yourName + ": This is the first time a Girl has come to my room and cooked for me.",
                yourName + ": I never had anyone cooked for me before.",
                herName + ": So you don't have a Girlfriend?",
                "1. We broke up\n2. Of corse i do",
                yourName + ": Well, last week we broke up.",
                yourName + ": What!!, of corse i do.",
                herName + ": Ok i get it, you're lying",
                "You look at her awkwardly and embarrassed.",
                "Afterward you both prepare to eat dinner just as you see her dish.",
                "1. This is amazing, you made all this?\n2. It looks ok, is that all?",
                yourName + ": This is amazing, you made all this?",
                yourName + ": It looks ok, is that all?",
                herName + ": Well yea, Hamburger is my specialty dish.",
                yourName + ": So you say, It must be something really awful then.",
                "As you say that, you take a bite.",
                herName + ": So?",
                "1. it was ok\n2. It was not that great",
                yourName + ": it was ok, just normal.",
                yourName + ": It's not that great."],
                //12
                ["She senses you feeling of joy while eating.",
                herName + ": I see I see, it was that delicious huh!",
                yourName + ": If...if you know already, do't ask!!",
                "You begin to realize that she gets happy when she is praised.",
                "1. Even " + herName + " gets happy\n2. don't say anything",
                yourName + ": Whats this, even " + herName + " gets happy when she is praised.",
                yourName + ":..............",
                herName + ": When you are praised, you don't feel bad right?",
                ".............",
                "........................",
                herName + ": Also sitting like this,",
                herName + ": Its like were a couple right?",
                yourName + ": Wha!?...what is up with this...",
                herName + ": You really are blushing.",
                "1. you tell her that this is sexual harassment\n2. ignore her",
                yourName + ": You,...This is sexual harassment!",
                yourName + ": ..............",
                herName + ": It can't be helped now, i will find out either way",
                yourName + ": .....",
                "You soon begin to wonder.",
                yourName + ": *If out stimulations are shared so we dont kill each other off,*",
                yourName + ": *Then,*",
                yourName + ": *What reason did god have, for us to share our emotions as well.*",
                herName + ": What are you thinking?",
                yourName + ": Eh..ummm...",
                "1. Tell her \"Nothing\"\n2. Don't respond",
                yourName + ": Nothing",
                herName + ": Really?",
                yourName + ": Yea.",
                yourName + ": ..............",
                herName + " looks to you in silence as you both finished your meal and called it a night."],
                //13
                ["Even though the two of you were told to decides who lives in two days,",
                "Whenever you guys talked, it never came up",
                "You guys enjoyed the week and spend time accompanying each other at the store",
                herName + ": Hurry hurry! We dont have time to waste",
                yourName + ": Hey wait up! Don't get to far ahead!",
                herName + ": I'm going out with the Girlfriend-less " + yourName + ".",
                herName + ": You should be happy.",
                yourName + ": Liar, you just want to play around",
                herName + ": Hahahaha...I know.",
                "But more importantly, in the past few days,",
                herName + ": hey, aren't you drawing that all wrong..hehe.",
                yourName + ": I will look at that afterwards and balance it out.",
                "It's just that the time you spent with " + herName + " was fun.",
                "You are happy looking like a couple.",
                "And you're pretty sure that you have been found out already.",
                "Even in the situation you guys are in,",
                "You had fallen in love with her.",
                "Even thought the two of you enjoyed the week as it came,",
                "Whenever you guys talked, you just wonder what will happen after the week was done",
                herName + ": Hurry hurry! We dont have time to waste",
                yourName + ": Hey wait up! Don't get to far ahead!",
                herName + ": I'm going out with the Girlfriend-less " + yourName + ".",
                herName + ": You should be happy.",
                yourName + ": Liar, you just want to play around",
                herName + ": Hahahaha...I know.",
                "But more importantly, in the past few days,",
                herName + ": hey, aren't you drawing that all wrong..hehe.",
                yourName + ": I will look at that afterwards and balance it out.",
                "It's just that the time you spent with " + herName + " was fun.",
                "You are just unsure on how this will lead things",
                "And you're pretty unsure on what she is thinking of as well",
                "Even in the situation you guys are in,",
                "All you could think about was what will happen.",
                "Even thought the two of you enjoyed the week as it came,",
                "All you could think about was how to convince her to let you live",
                herName + ": Hurry hurry! We dont have time to waste",
                yourName + ": Hey wait up! Don't get to far ahead!",
                herName + ": I'm going out with the Girlfriend-less " + yourName + ".",
                herName + ": You should be happy.",
                yourName + ": Liar, you just want to play around",
                herName + ": Hahahaha...I know.",
                "But more importantly, in the past few days,",
                herName + ": hey, aren't you drawing that all wrong..hehe.",
                yourName + ": I will look at that afterwards and balance it out.",
                "It's just that the time you spent with " + herName + " was time consuming.",
                "You are just unsure on how this will lead things",
                "And you're pretty unsure on what she is thinking of as well",
                "Even in the situation you guys are in,",
                "All you could think about was trying to convince her to die."],
                //14
                ["You both stay home on the last night of the week",
                herName + ": eh..me model?",
                yourName + ": Yea, if you're ok with it,",
                yourName + ": I'm sure that even " +herName + " wants to be drawn.",
                herName + ": It's fine for me but why so suddenly?",
                yourName + ": Well. i kind of want to draw a portrait occasionally",
                yourName + ": *Tomorrow is already the seventh day,*",
                yourName + ": *Once i finish this drawing*",
                yourName + ": *That of which is most important to me.*",
                yourName + ": *and for her sake,*",
                yourName + " *I wouldn't Mind dying.*.....",
                herName + ": a~~~perhaps you want a nude?",
                yourName + ": Dork, you can wear your clothes.",
                yourName + ": eh..me paint a picture of you?",
                herName + ": Yea, if you're ok with it,",
                herName + ": I'm sure that even " +yourName + " wants to draw me.",
                yourName +  ": It's fine for me but why so suddenly?",
                yourName + ": Well. i kind of wanted you to draw a portrait of me.",
                yourName + ": *Tomorrow is already the seventh day,*",
                yourName + ": *Once i finish this painting, i had to convince her to let me live*",
                "Moments goes by while you painted her",
                herName + ": Hey " + yourName + " I - am - bored.",
                yourName + ": hey, don't move.",
                herName + ": But I'm tired.",
                yourName + ": Then do you want to be painted with a plain face?",
                herName + ": I don't want that.",
                ".................",
                herName + ": hey, " + yourName,
                yourName + ": What is it now?",
                herName + ": Just maybe,",
                herName + ": Do you like me?",
                "You are shocked and surprised by this question",
                yourName + ": I..I'm sure that even if i don't say anything, you already know, right.",
                herName + ": Its ok, just say it.",
                yourName + ": What!?",
                herName + ": I want to hear it.",
                herName + ": If you don't, then I wont model anymore",
                yourName + ": ..........",
                ". I love you\n2. I like you\n3. Say nothing",
                yourName + ":....I love you..",
                yourName + ":......I like you.",
                yourName + ":............",
                herName + ": Me too.",
                yourName + ": I know.",
                herName + ": I understand."],
                //15
                ["Soon night falls and both go to sleep.",
                herName + " wakes up early unable to sleep.",
                "She sees you sleeping behind your painting.",
                herName + ": Geez..he's going to catch a cold if he sleeps like this.",
                "She turns and sees the complete portrait of your painting",
                herName + ": You finished the picture....",
                "As a tear flows down her eye, she tells you one last thing",
                herName + ": Make sure that your dreams comes true.",
                "She thanks you and gives you one last kiss,",
                "She gives you one last hug,",
                "and says her goodbye....",
                "...............",
                "You scream her name while waking up the next morning",
                yourName + ":....." + herName + "!!!",
                "You look around only to find out that she is nowhere to be found.",
                yourName + ": What, where is she? The bathroom.",
                yourName + ": Hey, you shouldn't go too far away or you'll die."],
                //16
                ["you see an envelope next to you painting",
                yourName + ": What is this, a letter",
                "It was address to you from " + herName,
                herName + ": -Dear, " + yourName + ",-",
                herName + ": -If you are reading this letter than i am probably not here anymore,-",
                herName + ": -Because I asked GOD to give my soul to " + yourName + ",-",
                herName + ": -But I don't regret it,-",
                herName + ": -Originally,i was sick,-",
                herName + ": -I have a body that only has half a year left to live,-",
                herName + ": -But for one time i wanted to live with the person that i love.-",
                herName + ": -As long as that dream wasn't fulfilled,<br>i really didn't want to die,",
                herName + ": -With that thought, the day i ran away from the hospital,<br>was the day i began living with you.",
                herName + ": -From the beginning,<br>I hated that our body and hearts were connected,<br>but it couldn't be helped,-",
                herName + ": -But if i think about it now,-",
                herName + ": -I have a feeling that GOD gave me a present, just before i died,-",
                herName + ": -Because i was connected to " + yourName + "'s heart.-",
                herName + ": -For just one week, i was able to get a lifetime amount of love.-",
                herName + ": -I was able to feel a lifetime amount of happiness.-",
                herName + ": -Even though I'm already gone, it isn't like I'm already gone.-",
                herName + ": -Inside your pictures, inside your dreams,",
                herName + ": -From now on, i can live forever and ever,",
                herName + ": -So don't cry too much and always know,-",
                herName + ": -That i will always love you.",
                herName + ": -" + herName + "-",
                "As you finished reading,<br>you cried your heart out as you come to understand why she had feeling of guilt",
                "Time goes by as you continue to draw.",
                yourName + ": If i can draw like this, i can feel " + herName + " sometimes",
                yourName + ": We can both aim for that dream and can advance one step at a time,",
                yourName + ": For our dream.",
                "TRUE END",//<----i had set this but decided not to use it , and removing without ruining the program was troublesome.
                "You see an envelope next to you painting",
                yourName + ": What is this, a letter",
                "It was address to you from " + herName,
                herName + ": -Dear, " + yourName + ",-",
                herName + ": -If you are reading this letter than i am probably not here anymore,-",
                herName + ": -Because I asked GOD to to let you live,-",
                herName + ": -I believed that if one of us had to live,-",
                herName + ": -It had to be you.-",
                herName + ": -You don't need to worry about me,-",
                herName + ": -Go and follow your dreams,-",
                herName + ": -I'll be cheering for you on the sidelines,-",
                herName + ": -You have been an amazing friend.-",
                herName + ": -Even though life was short,-",
                herName + ": -I want to believe that you can accomplish your dreams,-",
                herName + ": -So keep drawing, draw into the future-",
                herName + ": -So that one day,-",
                herName + ": -You will be able to shape the world-",
                herName + ": -" + herName  + "-",
                "As you finished reading,<br>you you come to reason with the world, as you come to understand why she had let you live",
                "Time goes by as you continue to draw.",
                yourName + ": If i can draw like this, i can feel the world sometimes",
                yourName + ": I can both aim for that dream and can advance one step at a time,",
                yourName + ": For My dream.",
                "............",
                "But for some reason,",
                "You cant understand why,...",
                "Why your still sad inside.",
                "GOOD END",//<----i had set this but decided not to use it , and removing without ruining the program was troublesome.
                "You soon realize that she was no longer there,You survived and " + herName + " was gone,",
                "To why she was gone, you don't know,",
                "She didn't even leave a note",
                "Now puzzling with Questions, all you can do now is wonder,",
                yourName + ": Why......why,why,why...",
                yourName + ": Why am I alive?"]
              ]