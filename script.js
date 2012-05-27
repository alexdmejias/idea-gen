$(document).ready(function(){		
		var button = document.getElementById('generate');
		var par = document.getElementById('par');
		var Gen = {
			data:[
				['big','colossal','fat','gigantic','great','huge','immense','large','little','mammoth','massive','miniature','petite','puny','scrawny','short','small','tall','teeny','teeny-tiny','tiny'],
				['red','orange','yellow','green','blue','purple','gray','black','white'],
				['account','achiever','acoustics','act','action','activity','actor','addition','adjustment','advertisement','advice','aftermath','afternoon','afterthought','agreement','air','airplane','airport','alarm','amount','amusement','anger','angle','animal','nswer','ant','ants','pparatus','apparel','apple','apples','ppliance','approval','arch','argument','arithmetic','arm','army','art','attack','attempt','attention','attraction','aunt','authorit','abies','aby','ack','badge','bag','bait','balance','ball','balloon','balls','anana','band','base','baseball','basin','basket','basketball','bat','bath','battle','bead','beam','bean','bear','bears','east','bed','bedroom','beds','ee','beef','beetle','beggar','beginner','behavior','belief','believe','bell','bells','erry','bike','bikes','ird','birds','irth','birthday','bit','bite','blade','blood','blow','board','boat','boats','ody','bomb','bone','book','books','oot','border','bottle','boundary','box','boy','boys','rain','brake','branch','brass','bread','breakfast','breath','brick','bridge','brother','brothers','rush','bubble','bucket','building','bulb','bun','burn','burst','bushes','business','butter','button','abbage','cable','cactus','cake','cakes','alculator','calendar','camera','camp','can','cannon','canvas','cap','caption','car','ard','care','carpenter','carriage','cars','art','cast','cat','cats','attle','cause','cave','celery','cellar','cemetery','cent','chain','chair','hairs','halk','chance','change','channel','cheese','cherries','cherry','chess','chicken','hickens','hildren','chin','church','circle','clam','class','clock','clocks','loth','cloud','clouds','lover','club','coach','coal','coast','coat','cobweb','coil','collar','color','comb','comfort','committee','company','comparison','competition','condition','connection','control','cook','copper','copy','cord','cork','corn','ough','country','cover','cow','cows','rack','cracker','crate','crayon','cream','creator','creature','credit','crib','crime','crook','crow','crowd','crown','crush','cry','cub','cup','current','curtain','curve','cushion','ad','daughter','day','death','debt','decision','deer','degree','design','desire','desk','destruction','detail','development','digestion','dime','dinner','dinosaurs','irection','dirt','discovery','discussion','disease','disgust','distance','distribution','division','dock','doctor','dog','dogs','oll','dolls','onkey','door','downtown','drain','drawer','dress','drink','driving','drop','drug','drum','duck','ucks','ust','ar','earth','earthquake','edge','education','effect','egg','eggnog','eggs','lbow','end','engine','error','event','example','exchange','existence','expansion','experience','expert','eye','eyes','ace','fact','fairies','all','family','fan','fang','arm','farmer','ather','father','faucet','fear','feast','feather','feeling','feet','fiction','field','fifth','fight','finger','finger','fire','ireman','fish','flag','flame','flavor','flesh','flight','flock','floor','flower','flowers','ly','fog','fold','food','foot','force','fork','form','fowl','frame','friction','friend','friends','rog','frogs','ront','fruit','fuel','furniture','lley','game','garden','gate','geese','ghost','giants','iraffe','girl','girls','lass','glove','glue','goat','gold','goldfish','good','bye','oose','government','governor','grade','grain','grandfather','grandmother','grape','grass','grip','ground','group','growth','guide','guitar','gun','air','haircut','hall','hammer','hand','hands','arbor','harmony','hat','hate','head','health','hearing','heart','heat','help','hen','hill','istory','hobbies','hole','holiday','home','oney','hook','hope','horn','horse','horses','ose','hospital','hot','hour','house','houses','umor','hydrant','ce','icicle','idea','impulse','income','increase','industry','ink','insect','instrument','insurance','interest','invention','iron','island','ail','jam','jar','jeans','jelly','jellyfish','jewel','join','joke','journey','judge','juice','jump','ettle','key','kick','kiss','kite','kitten','kittens','itty','nee','knife','knot','knowledge','aborer','lace','ladybug','lake','lamp','land','language','laugh','lawyer','lead','leaf','learning','leather','leg','egs','letter','letters','ettuce','level','library','lift','light','limit','line','linen','lip','liquid','list','lizards','oaf','lock','locket','look','loss','love','low','lumber','lunch','lunchroom','achine','magic','maid','mailbox','man','manager','map','marble','mark','market','mask','mass','match','meal','measure','meat','meeting','memory','men','metal','mice','iddle','milk','mind','mine','minister','mint','minute','mist','mitten','mom','money','monkey','month','moon','morning','mother','motion','mountain','mouth','move','muscle','music','N','ail','name','nation','neck','need','needle','nerve','nest','et','news','night','noise','north','nose','note','notebook','number','nut','atmeal','observation','ocean','offer','office','oil','operation','opinion','orange','oranges','rder','organization','ornament','oven','owl','owner','age','pail','pain','paint','pan','pancake','paper','parcel','parent','park','part','partner','party','passenger','paste','patch','payment','peace','pear','pen','pencil','person','pest','pet','pets','ickle','picture','pie','pies','ig','pigs','in','pipe','pizzas','lace','plane','planes','lant','plantation','plants','lastic','plate','play','playground','pleasure','plot','plough','pocket','point','poison','police','polish','pollution','popcorn','porter','position','pot','potato','powder','power','price','print','prison','process','produce','profit','property','prose','protest','pull','pump','punishment','purpose','push','uarter','quartz','queen','question','quicksand','quiet','quill','quilt','quince','quiver','rabbit','abbits','ail','railway','rain','rainstorm','rake','range','rat','rate','ray','reaction','reading','reason','receipt','recess','record','regret','relation','religion','representative','request','respect','rest','reward','rhythm','rice','riddle','rifle','ring','rings','iver','road','robin','ock','rod','roll','roof','room','root','rose','route','rub','rule','run','ack','sail','salt','sand','scale','scarecrow','scarf','scene','scent','school','science','scissors','screw','sea','seashore','seat','secretary','seed','selection','self','sense','servant','shade','shake','shame','shape','sheep','sheet','shelf','ship','shirt','shock','shoe','shoes','hop','show','side','sidewalk','sign','silk','silver','sink','sister','sisters','ize','skate','skin','skirt','sky','slave','sleep','sleet','slip','slope','smash','smell','smile','smoke','snail','snails','nake','snakes','neeze','snow','soap','society','sock','soda','sofa','son','song','songs','ort','sound','soup','space','spade','spark','spiders','ponge','spoon','spot','spring','spy','square','squirrel','stage','stamp','star','start','statement','station','steam','steel','stem','step','stew','stick','sticks','titch','stocking','stomach','stone','stop','store','story','stove','stranger','straw','stream','street','stretch','string','structure','substance','sugar','suggestion','suit','summer','sun','support','surprise','sweater','swim','swing','system','table','tail','talk','tank','taste','tax','teaching','team','teeth','emper','tendency','tent','territory','test','texture','theory','thing','things','hought','thread','thrill','throat','throne','thumb','thunder','ticket','tiger','time','tin','title','toad','toe','toes','tomatoes','ongue','tooth','toothbrush','toothpaste','top','ouch','town','toy','oys','rade','trail','train','trains','ramp','transport','tray','treatment','tree','trees','rick','trip','trouble','trousers','truck','trucks','ub','turkey','turn','twig','twist','mbrella','uncle','underwear','unit','use','acation','value','van','vase','vegetable','veil','vein','verse','vessel','vest','view','visitor','voice','volcano','volleyball','voyage','alk','wall','war','wash','waste','watch','water','wave','waves','ax','way','wealth','weather','week','weight','wheel','whip','whistle','wilderness','wind','indow','ine','wing','winter','wire','wish','woman','women','wood','wool','word','work','worm','wound','wren','wrench','wrist','writer','writing','ak','yam','yard','yarn','year','yoke','ebra','ephyr','zinc','zipper','zoo']
			], 

			//generates random numbers
			random:function(max){
				var random = Math.floor(Math.random()*max);
				return random;

			},
			//Gets one item from each list. 
			//for cycles through the DATA array. 
			//
			get_item:function(){
				var selected = [];
				for(var i = 0;i<this.data.length;i++){
					var r = this.random(this.data[i].length);
					//console.info(r);
					selected[i] = this.data[i][r];
				}
				return selected;
			},

			show:function(){
				var idea= Gen.get_item();
				$('#words p').fadeOut(0);

				// $.each(idea, function(key, value) { 
				// 	var timer= 1000;
				// 	$('#idea'+key+'').text(value).fadeIn(timer*(key+1));
				// 	console.log(value);
				// });
				for(var i=0,l=idea.length;l>i;i++){
					$('#words p').eq(i).text(idea[i]);
					console.log('new '+idea[i]);

				}
				$('#words p').fadeIn('slow');
			}
		}


		$("input").click(function(){
			Gen.show();
		});

		$(window).on('resize load',function() {
  			console.log('width= '+$(window).innerWidth()+' height= '+$(window).innerHeight());
		});

});

