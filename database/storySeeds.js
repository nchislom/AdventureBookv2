var seeds = [
    {
        id: 1,
        scene_title: "Scene 1",
        scene_text: "In a land not so far away. A war of epic proportion rages. You have escaped from a town on fire. You run to the woods, your home. Just when you think you are safe in your hiding place... You see a badly injured woman dressed in soldiers’ gear. She falls to the ground.",
        next_scene: 2,
        correct_choice: "choice_a",
        choice_a: "LEAVE YOUR HIDING PLACE TO HELP",
        choice_b: "STAY HIDDEN",
        wrong_choice_result: "You stay in your hiding place. You hide from the soldiers. The next day you journey to a nearby town. Three days later the war claims your life."
    },
    {
        id: 2,
        scene_title: "Scene 2",
        scene_text: "You see no one else nearby. So you hurry to the woman. In a hurry you roll her on her back. You immediately see that she isn’t breathing. Suddenly her eyes open. They shine a brilliant purple. You stare into them and feel dread fill your heart. When you snap back into consciousness you see the woman is gone. And soldiers are closing in on you. You see an opening.",
        next_scene: 3,
        correct_choice: "choice_b",
        choice_a: "YOU MAKE A BREAK FOR IT",
        choice_b: "HOLD YOUR GROUND",
        wrong_choice_result: "You sprint to the opening. A bullet pierces your heart. You burst into a violet inferno that engulfs anybody close enough. The war continues. "
    },
    {
        id: 3,
        scene_title: "Scene 3",
        scene_text: "You tense up, preparing yourself for whatever is about to happen. The soldiers have already surrounded you. Their weapons are drawn. The cacophony of an engine roars nearby. It stops, the soldiers make an opening. A large man in immaculate white marches towards you. He grabs you by the neck and pins you to a tree. He stares into you with pupil-less, blue eyes. “I came here for a woman. She was seen escaping in this direction... Where is she?",
        next_scene: 4,
        correct_choice: "choice_b",
        choice_a: "ANSWER HIS QUESTION",
        choice_b: "SPIT IN HIS FACE",
        wrong_choice_result: "You tell him you saw her fall to the ground. And that she wasn’t breathing. And about her unbelievable eyes. The man grins at you in a way that makes you feel sick. His grip tightens. You hear a snap. Everything fades to black."
    },
    {
        id: 4,
        scene_title: "Scene 4",
        scene_text: "Fury fills his eyes. His grip tightens. Darkness creeps across your eyes. Suddenly your neck is freed. You land on the ground with a thud and you hear the most horrible scream you’ve ever heard. Your would-be murderer writhes in pain. He grabs at his face. Flesh is falling off of it. Bone is seen by all. The soldiers look at you in terror. One falls to the ground. Then another, then another. By the time they realize their comrades have fallen you hear a great roar. A giant beast tackles a soldier. Flesh tears and bones crack. The last two soldiers run for their lives. One gets away. But the other chose poorly. The beast grabs him as he rushes past you. In the moonlight you see your savior, a giant red tiger. You’re frozen as you watch it devour the soldier. “You let one escape, Babylon.” You turn around to see the speaker, her eyes blaze purple. “Lady Deborah is gone. I needed her power to end this nightmare.” She leaps at you, her hand raised to strike your chest.",
        next_scene: 5,
        correct_choice: "choice_a",
        choice_a: "COUNTER",
        choice_b: "DODGE",
        wrong_choice_result: "You avoid the woman’s strike. But the tiger grabs you by the back of your collar like you were its kitten. “You are not ready for the burden she placed on you.” The woman makes a hand gesture. You wake up days later in a hotel. No woman, no tiger. You wander the world looking for an explanation of that strange night."
    },
    {
        id: 5,
        scene_title: "Scene 5",
        scene_text: "You duck just in time to avoid her blow. You land your own attack on her gut. She flies back 20 feet and lands on her back. The tiger roars. You turn to face it. It’s readying itself to pounce. “Babylon, no!” the woman yells... The tiger stills but remains ready to attack you. “That was impressive. You’ll need that kinda attitude to survive what you’ve gotten yourself into.”",
        next_scene: 6,
        correct_choice: "choice_b",
        choice_a: "I DON’T WANT TO BE A PART OF ANYTHING!",
        choice_b: "GOTTEN MYSELF INTO?",
        wrong_choice_result: "“Fine. This time I’ll ask.” The woman explains there are bigger forces at work than just a petty war for resources... She needs The Lady Deborah’s power to win the battle this night... You gratefully relinquish your inheritance.. You pass out from the shock... You wake up to a new day... Life goes on... "
    },
    {
        id: 6,
        scene_title: "Scene 6",
        scene_text: "“This isn’t a war like anything in history. Well, your history at least... Listen, we don’t have time for a lecture. It’s time to end this... My name is Eve... I needed The Lady Deborah. She’s moved on. I have you... Absorb the fire. Pull it into you. Let go of the dread you feel.  Believe that the fire is yours. If you can do that you will save us.” Close your eyes and focus. You feel a warmth begin to swell within you. You think:",
        next_scene: 7,
        correct_choice: "choice_b",
        choice_a: "IT BURNS! WHAT AM I EVEN DOING?",
        choice_b: "I WILL DO THIS.",
        wrong_choice_result: "You manage to save the lives like Eve said,. But the flames engulf you."
    },
    {
        id: 7,
        scene_title: "Scene 7",
        scene_text: "You feel a powerful warmth throughout your body. You open your eyes. The fires are extinguished. Eve claps and Babylon purrs. “Well done! And look at you, still alive. Standing too!” You fall to the ground. Eve laughs. “Eh, close enough! Alright, listen. The soldiers will find us if we don’t get moving. Come with me. I have so much to tell and you have ten lifetimes worth of learning to do.” You and your new mentor mount her fantastic beast. This is the start of your journey. You do not know it, but you will end this war. You will create a new world.",
        next_scene: 0,
        correct_choice: "",
        choice_a: "",
        choice_b: "",
        wrong_choice_result: ""
    }
];

module.exports = seeds;