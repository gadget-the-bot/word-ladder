// Curated list of common 4-letter English words
const WORDS = [
  'able','acid','aged','also','area','army','away','baby','back','ball',
  'band','bank','bare','bark','barn','base','bath','bead','beam','bean',
  'bear','beat','been','beer','bell','belt','bend','best','bike','bill',
  'bind','bird','bite','blow','blue','blur','boat','body','bold','bolt',
  'bomb','bond','bone','book','boot','bore','born','boss','both','bowl',
  'bulk','bull','bump','burn','bush','busy','buzz','cafe','cage','cake',
  'call','calm','came','camp','card','care','cart','case','cash','cast',
  'cave','chip','city','clad','clam','clap','claw','clay','clip','club',
  'clue','coal','coat','code','coil','coin','cold','cole','come','cook',
  'cool','cope','copy','cord','core','cork','corn','cost','coup','cowl',
  'crew','crop','crow','cube','cult','cure','curl','cute','dale','dame',
  'damp','dare','dark','dart','dash','data','date','dawn','dead','deaf',
  'deal','dear','debt','deck','deed','deem','deep','deer','demo','deny',
  'desk','dial','dice','died','diet','dire','dirt','disc','dish','disk',
  'dock','does','dome','done','doom','door','dose','down','drag','draw',
  'drew','drip','drop','drum','dual','duck','dude','duel','duke','dull',
  'dumb','dump','dune','dusk','dust','duty','each','earl','earn','ease',
  'east','easy','edge','else','emit','euro','even','ever','evil','exam',
  'exit','face','fact','fade','fail','fair','fake','fall','fame','fang',
  'fare','farm','fast','fate','fear','feat','feed','feel','feet','fell',
  'felt','file','fill','film','find','fine','fire','firm','fish','fist',
  'five','flag','flame','flap','flat','flaw','fled','flew','flex','flip',
  'flit','flog','flow','foam','fold','folk','fond','font','food','fool',
  'foot','ford','fore','fork','form','fort','foul','four','free','from',
  'fuel','full','fund','fuse','fuss','gain','gale','game','gang','gape',
  'garb','gash','gasp','gate','gave','gaze','gear','gene','gift','girl',
  'give','glad','glow','glue','goat','goes','gold','golf','gone','good',
  'grab','gram','gray','grew','grid','grim','grin','grip','grow','gulf',
  'guru','gust','guts','hack','hail','hair','hale','half','hall','halt',
  'hand','hang','hard','hare','harm','harp','hash','hate','haul','have',
  'haze','head','heal','heap','hear','heat','heel','held','hell','help',
  'herb','herd','here','hero','hide','high','hike','hill','hint','hire',
  'hold','hole','holy','home','hood','hook','hope','horn','host','hour',
  'huge','hull','hung','hunt','hurt','hush','hymn','icon','idea','inch',
  'into','iron','isle','item','jack','jade','jail','jazz','jean','jerk',
  'jest','jobs','join','joke','jump','jury','just','keen','keep','kept',
  'kick','kill','kind','king','kiss','kite','knee','knew','knit','knob',
  'knot','know','lace','lack','laid','lake','lame','lamp','land','lane',
  'lard','last','late','lawn','lead','leaf','leak','lean','leap','left',
  'lend','lens','less','lick','lied','life','lift','like','limb','lime',
  'limp','line','link','lint','lion','lips','list','live','load','loaf',
  'loan','lock','loft','logo','lone','long','look','loop','lord','lore',
  'lose','loss','lost','loud','love','luck','lump','lung','lure','lurk',
  'made','mail','main','make','male','mall','mane','many','mare','mark',
  'mars','mash','mask','mass','mast','mate','maze','meal','mean','meat',
  'meet','meld','melt','memo','mend','menu','mere','mesh','mess','mild',
  'mile','milk','mill','mind','mine','mint','miss','mist','moan','moat',
  'mock','mode','mold','mole','mood','moon','more','moss','most','moth',
  'move','much','mule','muse','mush','must','mute','myth','nail','name',
  'navy','near','neat','neck','need','nest','news','next','nice','nine',
  'node','none','norm','nose','note','noun','nude','obey','odds','only',
  'onto','open','oral','ours','oval','oven','over','pace','pack','page',
  'paid','pain','pair','pale','palm','pane','park','part','pass','past',
  'path','peak','peal','pear','peel','peer','perk','pest','pick','pier',
  'pile','pine','pink','pipe','plan','play','plea','plot','plug','plum',
  'plus','poem','poet','pole','poll','polo','pond','pool','poor','pope',
  'pork','port','pose','post','pour','pray','prop','pull','pulp','pump',
  'pure','push','race','rack','rage','raid','rail','rain','rake','ramp',
  'rang','rank','rare','rash','rate','read','real','rear','reed','reef',
  'reel','rein','rely','rend','rent','rest','rice','rich','ride','rift',
  'ring','riot','rise','risk','road','roam','roar','robe','rock','rode',
  'role','roll','roof','room','root','rope','rose','ruin','rule','rump',
  'rung','rush','rust','sack','safe','sage','said','sail','sake','sale',
  'salt','same','sand','sane','sang','save','seal','seam','sear','seat',
  'seed','seek','seem','seen','self','sell','send','sent','shed','shin',
  'ship','shop','shot','show','shut','sick','side','sigh','sign','silk',
  'sing','sink','site','size','slam','slap','slat','sled','slew','slid',
  'slim','slip','slit','slot','slow','slug','snap','snip','snow','soak',
  'soar','sock','soft','soil','sold','sole','solo','some','song','soon',
  'sort','soul','sour','span','spar','spin','spit','spot','star','stay',
  'stem','step','stew','stir','stop','stub','stud','such','suit','sulk',
  'sure','surf','swan','swap','swim','tail','take','tale','talk','tall',
  'tame','tank','tape','taps','task','taxi','team','tear','tell','tend',
  'tent','term','test','text','than','that','them','then','they','thin',
  'this','tide','tidy','tied','tier','tile','till','tilt','time','tiny',
  'tire','toad','toil','told','toll','tomb','tone','took','tool','tops',
  'tore','torn','toss','tour','town','trap','tray','tree','trim','trio',
  'trip','trod','true','tube','tuck','tune','turn','twin','type','ugly',
  'unit','unto','upon','urge','used','user','vale','vane','vary','vast',
  'veil','vein','verb','very','vest','veto','vice','view','vine','void',
  'volt','vote','wade','wage','wait','wake','walk','wall','wane','ward',
  'warm','warn','warp','wars','wash','wave','weak','wear','weed','week',
  'weir','well','went','were','west','what','when','whom','wick','wide',
  'wife','wild','will','wilt','wily','wind','wine','wing','wink','wipe',
  'wire','wise','wish','with','woke','wolf','wood','wool','word','wore',
  'work','worm','worn','wrap','yard','yarn','year','yell','your','zeal',
  'zero','zinc','zone','zoom'
];

// Simple seeded random number generator
function seededRandom(seed) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(31, h) + seed.charCodeAt(i) | 0;
  }
  return function() {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    h ^= h >>> 16;
    return (h >>> 0) / 4294967296;
  };
}

// Check if two words differ by exactly one letter
function diffByOne(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) diff++;
    if (diff > 1) return false;
  }
  return diff === 1;
}

// BFS to find shortest path between two words
function bfs(start, end, wordSet) {
  if (start === end) return [start];
  const queue = [[start, [start]]];
  const visited = new Set([start]);
  
  while (queue.length > 0) {
    const [current, path] = queue.shift();
    const chars = current.split('');
    
    for (let i = 0; i < chars.length; i++) {
      const original = chars[i];
      for (let c = 97; c <= 122; c++) {
        chars[i] = String.fromCharCode(c);
        const next = chars.join('');
        if (next === end) return [...path, end];
        if (wordSet.has(next) && !visited.has(next)) {
          visited.add(next);
          queue.push([next, [...path, next]]);
        }
      }
      chars[i] = original;
    }
  }
  return null;
}

// Get today's puzzle
function getDailyPuzzle(dateStr) {
  const wordSet = new Set(WORDS);
  const rand = seededRandom(dateStr || getTodayUTC());
  
  // Try to find a valid puzzle pair
  for (let attempt = 0; attempt < 200; attempt++) {
    const i = Math.floor(rand() * WORDS.length);
    const j = Math.floor(rand() * WORDS.length);
    if (i === j) continue;
    
    const start = WORDS[i];
    const end = WORDS[j];
    const path = bfs(start, end, wordSet);
    
    if (path && path.length >= 4 && path.length <= 7) {
      return {
        start: start.toUpperCase(),
        end: end.toUpperCase(),
        optimalSteps: path.length - 1,
        date: dateStr || getTodayUTC()
      };
    }
  }
  
  // Fallback
  return { start: 'COLD', end: 'WARM', optimalSteps: 4, date: dateStr || getTodayUTC() };
}

function getTodayUTC() {
  const d = new Date();
  return d.toISOString().split('T')[0];
}

function isValidWord(word) {
  return WORDS.includes(word.toLowerCase());
}

module.exports = { WORDS, diffByOne, bfs, getDailyPuzzle, getTodayUTC, isValidWord, seededRandom };
