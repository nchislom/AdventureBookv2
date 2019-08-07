var seeds = [
    {
        id: 1,
        scene_title: "Scene 1",
        scene_text: "<p>In a land not so far away</p><p>A war of epic proportion rages</p><p>You have escaped from a town on fire</p><p>You run to the woods, your home</p><p>Just when you think you are safe in your hiding place...</p><p>You see a badly injured woman dressed in soldiers’ gear</p><p>She falls to the ground.</p>",
        next_scene: 2,
        correct_choice: "choice_a",
        choice_a: "LEAVE YOUR HIDING PLACE TO HELP",
        choice_b: "STAY HIDDEN",
        wrong_choice_result: "<p>You stay in your hiding place</p><p>You hide from the soldiers</p><p>The next day you journey to a nearby town</p><p>Three days later the war claims your life</p>",
        image_url: ""
    },
    {
        id: 2,
        scene_title: "Scene 2",
        scene_text: "<p>You see no one else nearby</p><p>So you hurry to the woman</p><p>In a hurry you roll her on her back</p><p>You immediately see that she isn’t breathing</p><p>Suddenly her eyes open</p><p>They shine a brilliant purple</p><p>You stare into them and feel dread fill your heart</p><p>When you snap back into consciousness you see the woman is gone</p><p>And soldiers are closing in on you</p><p>You see an opening</p>",
        next_scene: 3,
        correct_choice: "choice_b",
        choice_a: "YOU MAKE A BREAK FOR IT",
        choice_b: "HOLD YOUR GROUND",
        wrong_choice_result: "<p>You sprint to the opening</p><p>A bullet pierces your heart</p><p>You burst into a violet inferno that engulfs anybody close enough</p><p>The war continues</p>",
        image_url: ""
    },
    {
        id: 3,
        scene_title: "Scene 3",
        scene_text: "<p>You tense up, preparing yourself for whatever is about to happen</p><p>The soldiers have already surrounded you</p><p>Their weapons are drawn</p><p>The cacophony of an engine roars nearby</p><p>It stops, the soldiers make an opening</p><p>A large man in immaculate white marches towards you</p><p>He grabs you by the neck and pins you to a tree</p><p>He stares into you with pupil-less, blue eyes</p><p>“I came here for a woman. She was seen escaping in this direction.</p><p>Where is she?”</p>",
        next_scene: 4,
        correct_choice: "choice_b",
        choice_a: "ANSWER HIS QUESTION",
        choice_b: "SPIT IN HIS FACE",
        wrong_choice_result: "<p>You tell him you saw her fall to the ground</p><p>And that she wasn’t breathing</p><p>And about her unbelievable eyes</p><p>The man grins at you in a way that makes you feel sick</p><p>His grip tightens</p><p>You hear a snap</p><p>Everything fades to black</p>",
        image_url: ""
    },
    {
        id: 4,
        scene_title: "Scene 4",
        scene_text: "<p>Fury fills his eyes</p><p>His grip tightens</p><p>Darkness creeps across your eyes</p><p>Suddenly your neck is freed</p><p>You land on the ground with a thud and you hear the most horrible scream you’ve ever heard</p><p>Your would-be murderer writhes in pain</p><p>He grabs at his face</p><p>Flesh is falling off of it</p><p>Bone is seen by all</p><p>The soldiers look at you in terror</p><p>One falls to the ground</p><p>Then another, then another</p><p>By the time they realize their comrades have fallen you hear a great roar</p><p>A giant beast tackles a soldier</p><p>Flesh tears and bones crack</p><p>The last two soldiers run for their lives</p><p>One gets away</p><p>But the other chose poorly</p><p>The beast grabs him as he rushes past you</p><p>In the moonlight you see your savior, a giant red tiger</p><p>You’re frozen as you watch it devour the soldier</p><p>“You let one escape, Babylon.”</p><p>You turn around to see the speaker, her eyes blaze purple</p><p>“Lady Deborah is gone. I needed her power to end this nightmare.”</p><p>She leaps at you, her hand raised to strike your chest</p>",
        next_scene: 5,
        correct_choice: "choice_a",
        choice_a: "COUNTER",
        choice_b: "DODGE",
        wrong_choice_result: "<p>You avoid the woman’s strike</p><p>But the tiger grabs you by the back of your collar like you were its kitten</p><p>“You are not ready for the burden she placed on you.”</p><p>The woman makes a hand gesture</p><p>You wake up days later in a hotel</p><p>No woman, no tiger</p><p>You wander the world looking for an explanation of that strange night</p>",
        image_url: ""
    },
    {
        id: 5,
        scene_title: "Scene 5",
        scene_text: "<p>You duck just in time to avoid her blow</p><p>You land your own attack on her gut</p><p>She flies back 20 feet and lands on her back</p><p>The tiger roars</p><p>You turn to face it</p><p>It’s readying itself to pounce</p><p>“Babylon, no!” the woman yells.</p><p>The tiger stills but remains ready to attack you</p><p>“That was impressive. You’ll need that kinda attitude to survive what you’ve gotten yourself into.”</p>",
        next_scene: 6,
        correct_choice: "choice_b",
        choice_a: "I DON’T WANT TO BE A PART OF ANYTHING!",
        choice_b: "GOTTEN MYSELF INTO?",
        wrong_choice_result: "<p>“Fine. This time I’ll ask.”</p><p>The woman explains there are bigger forces at work than just a petty war for resources.</p><p>She needs The Lady Deborah’s power to win the battle this night.</p><p>You gratefully relinquish your inheritance.</p><p>You pass out from the shock.</p><p>You wake up to a new day.</p><p>Life goes on.</p>",
        image_url: ""
    },
    {
        id: 6,
        scene_title: "Scene 6",
        scene_text: "<p>“This isn’t a war like anything in history. Well, your history at least.</p><p>Listen, we don’t have time for a lecture. It’s time to end this.</p><p>My name is Eve.</p><p>I needed The Lady Deborah. She’s moved on. I have you.</p><p>Absorb the fire. Pull it into you. Let go of the dread you feel.</p> <p>Believe that the fire is yours. If you can do that you will save us.”</p><p>Close your eyes and focus. You feel a warmth begin to swell within you.</p><p>You think:</p>",
        next_scene: 7,
        correct_choice: "choice_b",
        choice_a: "IT BURNS! WHAT AM I EVEN DOING?",
        choice_b: "I WILL DO THIS.",
        wrong_choice_result: "<p>You manage to save the lives like Eve said,</p><p>But the flames engulf you.</p>",
        image_url: ""
    },
    {
        id: 7,
        scene_title: "Scene 7",
        scene_text: "<p>You feel a powerful warmth throughout your body</p><p>You open your eyes</p><p>The fires are extinguished</p><p>Eve claps and Babylon purrs.</p><p>“Well done! And look at you, still alive. Standing too!”</p><p>You fall to the ground. Eve laughs.</p><p>“Eh, close enough! Alright, listen. The soldiers will find us if we don’t get moving.</p><p>Come with me. I have so much to tell and you have ten lifetimes worth of learning to do.”</p><p>You and your new mentor mount her fantastic beast.</p><p>This is the start of your journey.</p><p>You do not know it, but you will end this war.</p><p>You will create a new world.</p>",
        next_scene: 0,
        correct_choice: "",
        choice_a: "",
        choice_b: "",
        wrong_choice_result: "",
        image_url: ""
    }
];

module.exports = seeds;