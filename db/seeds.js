var mongoose = require('mongoose');

var databaseUrl = 'mongodb://localhost:27017/zodiac-app';
mongoose.connect(databaseUrl);

var Sign   = require('../models/sign');
var Scope  = require('../models/hscope');

function saveToDb(err, sign){
  if (err) console.log(err);
  console.log("Sign saved " + sign);
}

// var signs = [
//   {
//     image: "/images/aries.png",
//     name: "ARIES",
//     period: "Mar 21 - Apr 19",
//     description: "Aries people have a great instinct for what needs to be done, and once you decide what it is, then it is full steam ahead. You can never be accused of laziness because 110% is where you kick off each day. Of course, not all Aries traits are positive ones. Being a fire sign means you are energetic, so you want to go out there and change the world with no half-measures in sight. This can come across as arrogant, but it is only because you have incredible confidence in you ability to get things done. You don’t like being told what to do."
//   },
//   {
//     image: "/images/taurus.png",
//     name: "TAURUS",
//     period: "Apr 21 - May 21",
//     description: "You have an earthy nature, and because of the practicality of your star sign, you can be thought of as a bit tight-fisted, but that is only because you are concerned about your financial security and that of your family. It’s true that you have a fear of change, but loved ones and work colleagues understand that you need to think before you leap into the abyss. When you take on a project, you give it a great deal of thought, focus completely on the task and won’t cut corners. You also dislike doing more than one thing at a time, but whatever you do is done properly."
//   },
//   {
//     image: "/images/gemini.png",
//     name: "GEMINI",
//     period: "May 22 - Jun 21",
//     description: "Geminis are known as eternal students, always wanting to learn—and they don’t mind what the subject is. They are good at assembling a multitude of facts and then turning them into their next ’great idea’. However, they don’t always stay with this idea to the end, but it doesn’t concern them too much. What would concern them is not having the ‘great idea’ in the first place!"
//   },
//   {
//     image: "/images/cancer.png",
//     name: "CANCER",
//     period: "Jun 22 - Jul 23",
//     description: "Cancer, you're generally sensitive, emotional, selfless, caring and loving, and like to demonstrate your feelings for others. You often exhibit an uncanny ability to get right to the heart of things without any intellectual sidetracking. Because you’re so connected to your feelings and understand the feelings of others, you make this a part of your life, which impacts favourably on those who come into contact with you."
//   },
//   {
//     image: "/images/leo.png",
//     name: "LEO",
//     period: "Jul 24 - Aug 23",
//     description: "Your ruler, the Sun, is the centre of the Solar System (some might say the Universe) and that is exactly where you see your place in the world. You are a powerhouse of energy, and few star signs have the same level of drive and motivation that you do. At the heart of this Leo energy is your fire element, which is recognisable in every aspect of your life—work, love or play."
//   },
//   {
//     image: "/images/virgo.png",
//     name: "VIRGO",
//     period: "Aug 24 - Sep 23",
//     description: "You are seen as an introverted individual by many, and your combination of the intellectual and the practical can sometimes be taken for coolness. You are conservative, undemonstrative and somewhat fussy, but you are also witty, charming and sympathetic. You are emotionally warm, but may find it hard to express sincere love, especially if you are a male Virgo. You have a strong personality on the outside but tend to be weak on the inside."
//   },
//   {
//     image: "/images/libra.png",
//     name: "LIBRA",
//     period: "Sep 24 - Oct 23",
//     description: "You are known to be an extremely sociable individual. Your outgoing nature and love of communicating ideas to everyone around you is one of the high points of your character. You are rarely at a loss for words, and even on your worst days you still seem to have the gift of the gab."
//   },
//   {
//     image: "/images/scorpio.png",
//     name: "SCORPIO",
//     period: "Oct 24 - Nov 22",
//     description: "Scorpio is probably one of the most misunderstood signs of the zodiac. People learn to fear what they don’t understand, and your cool aloofness may send some people running in the opposite direction.  Underneath your icy exterior, Mars sees to it that you have a passionate and sizzling nature. You are emotional and can sometimes take it to extreme levels. When you love, you do so with 110 per cent of your body and soul. What you demand of others you also demand of yourself, and when you give your heart to someone, there are definitely no half- measures. However, you expect the same in return, and this is not always easy to find."
//   },
//   {
//     image: "/images/sagittarius.png",
//     name: "SAGITTARIUS",
//     period: "Nov 23 - Dec 22",
//     description: "Fortune seems to favour you as you are one of the luckiest signs, whether you plan it or not. You are extremely confident in everything you do and don’t mind taking a risk or two if the moment catches you. You don’t plan on losing and this upbeat attitude is what attracts people into your orbit."
//   },
//   {
//     image: "/images/capricorn.png",
//     name: "CAPRICORN",
//     period: "Dec 23 - Jan 20",
//     description: "You were born under the sign of Capricorn, which is the tenth in the zodiac sequence. Ruled by the element of earth, you’re one of the most practical of the star signs. This means you have your feet firmly planted on the ground and that you tend to be cautious in everything you do."
//   },
//   {
//     image: "/images/aquarius.png",
//     name: "AQUARIUS",
//     period: "Jan 21 - Feb 19",
//     description: "Born under the sign of Aquarius, the eleventh in the mystical circle of the heavens, you are ruled by the electric and progressive planet Uranus. This makes you forward-thinking and independent in the way you approach most things in life. Actually, you could be termed a born rebel!"
//   },
//   {
//     image: "/images/pisces.png",
//     name: "PISCES",
//     period: "Feb 20 - Mar 20",
//     description: "You are a  compassionate individual and  this  is  the  most  notable characteristic of your star sign. You are the person who will pull over to the side of the road to help someone who is in difficulty, or perhaps a creature that is in danger of being run over. Your compassionate nature is in demand by your friends, family and co-workers. If they are in any distress, your presence alone will make them feel calm and reassured."
//   }
// ]

// signs.forEach(function(sign, index){
//   var newSign = new Sign(sign);
//   newSign.save(saveToDb);
// });

var scopes = [
  {
    created_at: 2015-11-16,
    title: "ARIES WEEKLY",
    luckyNumbers:"",
    description: "You need a visual kit to help you just now. The visuals will help you accomplisyour tasks and if necessary, explain what you want to others. You need to regroup your ideaand make some required changes to help you get back on track. Someone you know may havparallel issues and you can talk about these things.",
    sign_id: "56491f9aa509f6aaf472fa68"
  },
  {
    created_at: 2015-11-16,
    title: "TAURUS WEEKLY",
    luckyNumbers:"",
    description: "You need a visual kit to help you just now. The visuals will help you accomplisyour tasks and if necessary, explain what you want to others. You need to regroup your ideaand make some required changes to help you get back on track. Someone you know may havparallel issues and you can talk about these things.",
    sign_id: "56491f9aa509f6aaf472fa69"
  },
  {
    created_at: 2015-11-16,
    title: "GEMINI WEEKLY",
    luckyNumbers:"",
    description: "You need a visual kit to help you just now. The visuals will help you accomplisyour tasks and if necessary, explain what you want to others. You need to regroup your ideaand make some required changes to help you get back on track. Someone you know may havparallel issues and you can talk about these things.",
    sign_id: "56491f9aa509f6aaf472fa6a"
  },
  {
    created_at: 2015-11-16,
    title: "CANCER WEEKLY",
    luckyNumbers:"",
    description: "You need a visual kit to help you just now. The visuals will help you accomplisyour tasks and if necessary, explain what you want to others. You need to regroup your ideaand make some required changes to help you get back on track. Someone you know may havparallel issues and you can talk about these things.",
    sign_id: "56491f9aa509f6aaf472fa6b"
  },
  {
    created_at: 2015-11-16,
    title: "LEO WEEKLY",
    luckyNumbers:"",
    description: "You need a visual kit to help you just now. The visuals will help you accomplisyour tasks and if necessary, explain what you want to others. You need to regroup your ideaand make some required changes to help you get back on track. Someone you know may havparallel issues and you can talk about these things.",
    sign_id: "56491f9aa509f6aaf472fa6c"
  },
  {
    created_at: 2015-11-16,
    title: "VIRGO WEEKLY",
    luckyNumbers:"",
    description: "You need a visual kit to help you just now. The visuals will help you accomplisyour tasks and if necessary, explain what you want to others. You need to regroup your ideaand make some required changes to help you get back on track. Someone you know may havparallel issues and you can talk about these things.",
    sign_id: "56491f9aa509f6aaf472fa6d"
  },
  {
    created_at: 2015-11-16,
    title: "LIBRA WEEKLY",
    luckyNumbers:"",
    description: "You need a visual kit to help you just now. The visuals will help you accomplisyour tasks and if necessary, explain what you want to others. You need to regroup your ideaand make some required changes to help you get back on track. Someone you know may havparallel issues and you can talk about these things.",
    sign_id: "56491f9aa509f6aaf472fa6e"
  },
  {
    created_at: 2015-11-16,
    title: "SCORPIO WEEKLY",
    luckyNumbers:"",
    description: "You need a visual kit to help you just now. The visuals will help you accomplisyour tasks and if necessary, explain what you want to others. You need to regroup your ideaand make some required changes to help you get back on track. Someone you know may havparallel issues and you can talk about these things.",
    sign_id: "56491f9aa509f6aaf472fa6f"
  },
  {
    created_at: 2015-11-16,
    title: "SAGITTARIUS WEEKLY",
    luckyNumbers:"",
    description: "You need a visual kit to help you just now. The visuals will help you accomplisyour tasks and if necessary, explain what you want to others. You need to regroup your ideaand make some required changes to help you get back on track. Someone you know may havparallel issues and you can talk about these things.",
    sign_id: "56491f9aa509f6aaf472fa70"
  },
  {
    created_at: 2015-11-16,
    title: "CAPRICORN WEEKLY",
    luckyNumbers:"",
    description: "You need a visual kit to help you just now. The visuals will help you accomplisyour tasks and if necessary, explain what you want to others. You need to regroup your ideaand make some required changes to help you get back on track. Someone you know may havparallel issues and you can talk about these things.",
    sign_id: "56491f9aa509f6aaf472fa71"
  },
  {
    created_at: 2015-11-16,
    title: "AQUARIUS WEEKLY",
    luckyNumbers:"",
    description: "You need a visual kit to help you just now. The visuals will help you accomplisyour tasks and if necessary, explain what you want to others. You need to regroup your ideaand make some required changes to help you get back on track. Someone you know may havparallel issues and you can talk about these things.",
    sign_id: "56491f9aa509f6aaf472fa72"
  },
  {
    created_at: 2015-11-16,
    title: "PISCES WEEKLY",
    luckyNumbers:"",
    description: "You need a visual kit to help you just now. The visuals will help you accomplisyour tasks and if necessary, explain what you want to others. You need to regroup your ideaand make some required changes to help you get back on track. Someone you know may havparallel issues and you can talk about these things.",
    sign_id: "56491f9aa509f6aaf472fa73"
  }
]

scopes.forEach(function(scope, index){
  var newScope = new Scope(scope);
  newScope.save(saveToDb);
});

