/*!
 * jQuery Transit - CSS3 transitions and transformations
 * Copyright(c) 2011 Rico Sta. Cruz <rico@ricostacruz.com>
 * MIT Licensed.
 *
 * http://ricostacruz.com/jquery.transit
 * http://github.com/rstacruz/jquery.transit
 */
(function(d){function k(a){var b=["Moz","Webkit","O","ms"],c=a.charAt(0).toUpperCase()+a.substr(1);if(a in i.style)return a;for(a=0;a<b.length;++a){var d=b[a]+c;if(d in i.style)return d}}function j(a){"string"===typeof a&&this.parse(a);return this}function p(a,b,c){!0===b?a.queue(c):b?a.queue(b,c):c()}function m(a){var b=[];d.each(a,function(a){a=d.camelCase(a);a=d.transit.propertyMap[a]||a;a=r(a);-1===d.inArray(a,b)&&b.push(a)});return b}function q(a,b,c,e){a=m(a);d.cssEase[c]&&(c=d.cssEase[c]);
var h=""+n(b)+" "+c;0<parseInt(e,10)&&(h+=" "+n(e));var f=[];d.each(a,function(a,b){f.push(b+" "+h)});return f.join(", ")}function f(a,b){b||(d.cssNumber[a]=!0);d.transit.propertyMap[a]=e.transform;d.cssHooks[a]={get:function(b){return(d(b).css("transform")||new j).get(a)},set:function(b,e){var h=d(b).css("transform")||new j;h.setFromString(a,e);d(b).css({transform:h})}}}function r(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}function g(a,b){return"string"===typeof a&&!a.match(/^[\-0-9\.]+$/)?
a:""+a+b}function n(a){d.fx.speeds[a]&&(a=d.fx.speeds[a]);return g(a,"ms")}d.transit={version:"0.1.3",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:!0,useTransitionEnd:!1};var i=document.createElement("div"),e={},s=-1<navigator.userAgent.toLowerCase().indexOf("chrome");e.transition=k("transition");e.transitionDelay=k("transitionDelay");e.transform=k("transform");
e.transformOrigin=k("transformOrigin");i.style[e.transform]="";i.style[e.transform]="rotateY(90deg)";e.transform3d=""!==i.style[e.transform];d.extend(d.support,e);var o=e.transitionEnd={MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"}[e.transition]||null,i=null;d.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)"};d.cssHooks.transform={get:function(a){return d(a).data("transform")},
set:function(a,b){var c=b;c instanceof j||(c=new j(c));a.style[e.transform]="WebkitTransform"===e.transform&&!s?c.toString(!0):c.toString();d(a).data("transform",c)}};d.cssHooks.transformOrigin={get:function(a){return a.style[e.transformOrigin]},set:function(a,b){a.style[e.transformOrigin]=b}};f("scale");f("translate");f("rotate");f("rotateX");f("rotateY");f("rotate3d");f("perspective");f("skewX");f("skewY");f("x",!0);f("y",!0);j.prototype={setFromString:function(a,b){var c="string"===typeof b?b.split(","):
b.constructor===Array?b:[b];c.unshift(a);j.prototype.set.apply(this,c)},set:function(a){var b=Array.prototype.slice.apply(arguments,[1]);this.setter[a]?this.setter[a].apply(this,b):this[a]=b.join(",")},get:function(a){return this.getter[a]?this.getter[a].apply(this):this[a]||0},setter:{rotate:function(a){this.rotate=g(a,"deg")},rotateX:function(a){this.rotateX=g(a,"deg")},rotateY:function(a){this.rotateY=g(a,"deg")},scale:function(a,b){void 0===b&&(b=a);this.scale=a+","+b},skewX:function(a){this.skewX=
g(a,"deg")},skewY:function(a){this.skewY=g(a,"deg")},perspective:function(a){this.perspective=g(a,"px")},x:function(a){this.set("translate",a,null)},y:function(a){this.set("translate",null,a)},translate:function(a,b){void 0===this._translateX&&(this._translateX=0);void 0===this._translateY&&(this._translateY=0);null!==a&&(this._translateX=g(a,"px"));null!==b&&(this._translateY=g(b,"px"));this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||
0},scale:function(){var a=(this.scale||"1,1").split(",");a[0]&&(a[0]=parseFloat(a[0]));a[1]&&(a[1]=parseFloat(a[1]));return a[0]===a[1]?a[0]:a},rotate3d:function(){for(var a=(this.rotate3d||"0,0,0,0deg").split(","),b=0;3>=b;++b)a[b]&&(a[b]=parseFloat(a[b]));a[3]&&(a[3]=g(a[3],"deg"));return a}},parse:function(a){var b=this;a.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(a,d,e){b.setFromString(d,e)})},toString:function(a){var b=[],c;for(c in this)if(this.hasOwnProperty(c)&&(e.transform3d||!("rotateX"===
c||"rotateY"===c||"perspective"===c||"transformOrigin"===c)))"_"!==c[0]&&(a&&"scale"===c?b.push(c+"3d("+this[c]+",1)"):a&&"translate"===c?b.push(c+"3d("+this[c]+",0)"):b.push(c+"("+this[c]+")"));return b.join(" ")}};d.fn.transition=d.fn.transit=function(a,b,c,f){var h=this,g=0,i=!0;"function"===typeof b&&(f=b,b=void 0);"function"===typeof c&&(f=c,c=void 0);"undefined"!==typeof a.easing&&(c=a.easing,delete a.easing);"undefined"!==typeof a.duration&&(b=a.duration,delete a.duration);"undefined"!==typeof a.complete&&
(f=a.complete,delete a.complete);"undefined"!==typeof a.queue&&(i=a.queue,delete a.queue);"undefined"!==typeof a.delay&&(g=a.delay,delete a.delay);"undefined"===typeof b&&(b=d.fx.speeds._default);"undefined"===typeof c&&(c=d.cssEase._default);var b=n(b),j=q(a,b,c,g),l=d.transit.enabled&&e.transition?parseInt(b,10)+parseInt(g,10):0;if(0===l)return p(h,i,function(b){h.css(a);f&&f();b()}),h;var k={},m=function(b){var c=false,g=function(){c&&h.unbind(o,g);l>0&&h.each(function(){this.style[e.transition]=
k[this]||null});typeof f==="function"&&f.apply(h);typeof b==="function"&&b()};if(l>0&&o&&d.transit.useTransitionEnd){c=true;h.bind(o,g)}else window.setTimeout(g,l);h.each(function(){l>0&&(this.style[e.transition]=j);d(this).css(a)})};p(h,i,function(a){var b=0;e.transition==="MozTransition"&&b<25&&(b=25);window.setTimeout(function(){m(a)},b)});return this};d.transit.getTransitionValue=q})(jQuery);


var Gen = {
	button_text : ["Change the World",'Make a million','Be famous','Start a Business','Make a startup','Do something','New weekend project'],
	locked:[],
	selected:[],
	data:[
		['big','colossal','fat','gigantic','great','huge','immense','large','little','mammoth','massive','miniature','petite','puny','scrawny','short','small','tall','teeny','teeny-tiny','tiny'],
		['red','orange','yellow','green','blue','purple','gray','black','white'],
		['account','achiever','acoustics','act','action','activity','actor','addition','adjustment','advertisement','advice','aftermath','afternoon','afterthought','agreement','air','airplane','airport','alarm','amount','amusement','anger','angle','animal','nswer','ant','ants','pparatus','apparel','apple','apples','appliance','approval','arch','argument','arithmetic','arm','army','art','attack','attempt','attention','attraction','aunt','authorit','abies','aby','ack','badge','bag','bait','balance','ball','balloon','balls','anana','band','base','baseball','basin','basket','basketball','bat','bath','battle','bead','beam','bean','bear','bears','east','bed','bedroom','beds','ee','beef','beetle','beggar','beginner','behavior','belief','believe','bell','bells','erry','bike','bikes','ird','birds','irth','birthday','bit','bite','blade','blood','blow','board','boat','boats','ody','bomb','bone','book','books','oot','border','bottle','boundary','box','boy','boys','rain','brake','branch','brass','bread','breakfast','breath','brick','bridge','brother','brothers','rush','bubble','bucket','building','bulb','bun','burn','burst','bushes','business','butter','button','abbage','cable','cactus','cake','cakes','alculator','calendar','camera','camp','can','cannon','canvas','cap','caption','car','ard','care','carpenter','carriage','cars','art','cast','cat','cats','attle','cause','cave','celery','cellar','cemetery','cent','chain','chair','hairs','halk','chance','change','channel','cheese','cherries','cherry','chess','chicken','hickens','hildren','chin','church','circle','clam','class','clock','clocks','loth','cloud','clouds','lover','club','coach','coal','coast','coat','cobweb','coil','collar','color','comb','comfort','committee','company','comparison','competition','condition','connection','control','cook','copper','copy','cord','cork','corn','ough','country','cover','cow','cows','rack','cracker','crate','crayon','cream','creator','creature','credit','crib','crime','crook','crow','crowd','crown','crush','cry','cub','cup','current','curtain','curve','cushion','ad','daughter','day','death','debt','decision','deer','degree','design','desire','desk','destruction','detail','development','digestion','dime','dinner','dinosaurs','irection','dirt','discovery','discussion','disease','disgust','distance','distribution','division','dock','doctor','dog','dogs','oll','dolls','onkey','door','downtown','drain','drawer','dress','drink','driving','drop','drug','drum','duck','ucks','ust','ar','earth','earthquake','edge','education','effect','egg','eggnog','eggs','lbow','end','engine','error','event','example','exchange','existence','expansion','experience','expert','eye','eyes','ace','fact','fairies','all','family','fan','fang','arm','farmer','ather','father','faucet','fear','feast','feather','feeling','feet','fiction','field','fifth','fight','finger','finger','fire','ireman','fish','flag','flame','flavor','flesh','flight','flock','floor','flower','flowers','ly','fog','fold','food','foot','force','fork','form','fowl','frame','friction','friend','friends','rog','frogs','ront','fruit','fuel','furniture','lley','game','garden','gate','geese','ghost','giants','iraffe','girl','girls','lass','glove','glue','goat','gold','goldfish','good','bye','oose','government','governor','grade','grain','grandfather','grandmother','grape','grass','grip','ground','group','growth','guide','guitar','gun','air','haircut','hall','hammer','hand','hands','arbor','harmony','hat','hate','head','health','hearing','heart','heat','help','hen','hill','istory','hobbies','hole','holiday','home','oney','hook','hope','horn','horse','horses','ose','hospital','hot','hour','house','houses','umor','hydrant','ce','icicle','idea','impulse','income','increase','industry','ink','insect','instrument','insurance','interest','invention','iron','island','ail','jam','jar','jeans','jelly','jellyfish','jewel','join','joke','journey','judge','juice','jump','ettle','key','kick','kiss','kite','kitten','kittens','itty','nee','knife','knot','knowledge','aborer','lace','ladybug','lake','lamp','land','language','laugh','lawyer','lead','leaf','learning','leather','leg','egs','letter','letters','ettuce','level','library','lift','light','limit','line','linen','lip','liquid','list','lizards','oaf','lock','locket','look','loss','love','low','lumber','lunch','lunchroom','achine','magic','maid','mailbox','man','manager','map','marble','mark','market','mask','mass','match','meal','measure','meat','meeting','memory','men','metal','mice','iddle','milk','mind','mine','minister','mint','minute','mist','mitten','mom','money','monkey','month','moon','morning','mother','motion','mountain','mouth','move','muscle','music','N','ail','name','nation','neck','need','needle','nerve','nest','et','news','night','noise','north','nose','note','notebook','number','nut','atmeal','observation','ocean','offer','office','oil','operation','opinion','orange','oranges','rder','organization','ornament','oven','owl','owner','age','pail','pain','paint','pan','pancake','paper','parcel','parent','park','part','partner','party','passenger','paste','patch','payment','peace','pear','pen','pencil','person','pest','pet','pets','ickle','picture','pie','pies','ig','pigs','in','pipe','pizzas','lace','plane','planes','lant','plantation','plants','lastic','plate','play','playground','pleasure','plot','plough','pocket','point','poison','police','polish','pollution','popcorn','porter','position','pot','potato','powder','power','price','print','prison','process','produce','profit','property','prose','protest','pull','pump','punishment','purpose','push','uarter','quartz','queen','question','quicksand','quiet','quill','quilt','quince','quiver','rabbit','abbits','ail','railway','rain','rainstorm','rake','range','rat','rate','ray','reaction','reading','reason','receipt','recess','record','regret','relation','religion','representative','request','respect','rest','reward','rhythm','rice','riddle','rifle','ring','rings','iver','road','robin','ock','rod','roll','roof','room','root','rose','route','rub','rule','run','ack','sail','salt','sand','scale','scarecrow','scarf','scene','scent','school','science','scissors','screw','sea','seashore','seat','secretary','seed','selection','self','sense','servant','shade','shake','shame','shape','sheep','sheet','shelf','ship','shirt','shock','shoe','shoes','hop','show','side','sidewalk','sign','silk','silver','sink','sister','sisters','ize','skate','skin','skirt','sky','slave','sleep','sleet','slip','slope','smash','smell','smile','smoke','snail','snails','nake','snakes','neeze','snow','soap','society','sock','soda','sofa','son','song','songs','ort','sound','soup','space','spade','spark','spiders','ponge','spoon','spot','spring','spy','square','squirrel','stage','stamp','star','start','statement','station','steam','steel','stem','step','stew','stick','sticks','titch','stocking','stomach','stone','stop','store','story','stove','stranger','straw','stream','street','stretch','string','structure','substance','sugar','suggestion','suit','summer','sun','support','surprise','sweater','swim','swing','system','table','tail','talk','tank','taste','tax','teaching','team','teeth','emper','tendency','tent','territory','test','texture','theory','thing','things','hought','thread','thrill','throat','throne','thumb','thunder','ticket','tiger','time','tin','title','toad','toe','toes','tomatoes','ongue','tooth','toothbrush','toothpaste','top','ouch','town','toy','oys','rade','trail','train','trains','ramp','transport','tray','treatment','tree','trees','rick','trip','trouble','trousers','truck','trucks','ub','turkey','turn','twig','twist','mbrella','uncle','underwear','unit','use','acation','value','van','vase','vegetable','veil','vein','verse','vessel','vest','view','visitor','voice','volcano','volleyball','voyage','alk','wall','war','wash','waste','watch','water','wave','waves','ax','way','wealth','weather','week','weight','wheel','whip','whistle','wilderness','wind','indow','ine','wing','winter','wire','wish','woman','women','wood','wool','word','work','worm','wound','wren','wrench','wrist','writer','writing','ak','yam','yard','yarn','year','yoke','ebra','ephyr','zinc','zipper','zoo']
	],
	text:'I just came up with an idea for ',
	text_end:'. Thanks to Idea Gen',
	twitter:'http://twitter.com/share?url=http://bit.ly/PpmS6K&via=alme1304&text=',
	facebook:'https://www.facebook.com/dialog/feed?app_id=395525953840852&link=http://bit.ly/PpmS6K&name=Idea%20Generator&redirect_uri=http://bit.ly/PpmS6K&caption=',
	url:window.location.origin + window.location.path,

	init:function(){
		Gen.set_unlock();
		// Gen.button();
		Gen.show();
	},
	//generates random numbers
	random:function(max){
		var random = Math.floor(Math.random()*max);
		return random;
	},

	//generates the words and dumps them into selected[]
	get_item:function(){
		// var selected=[];
		for(var a=0;a<Gen.data.length;a++){
			if(Gen.locked[a]==false){
				Gen.selected[a]=Gen.data[a][Gen.random(Gen.data[a].length)];
			} else {
				continue;
				return Gen.selected;
			}
		}
		return Gen.selected;
	},

	//takes care of the showing of the words
	show:function(){
		var idea= Gen.get_item(),
			words = $('#words');

		words.transition({opacity:'0'},function(){
			for(var i=0,l=idea.length;l>i;i++){
				$('#'+i).text(idea[i]);
			}
		});
		words.transition({opacity:'1'});
	},

	set_unlock:function(){
		//make a function so all the words are locked from the getgo(?),
		//no matter how many types there are
		for (var i=0;Gen.data.length>i;i++){
			Gen.locked[i]=false;
		}
	},//end set_unlock()

	update_social:function(){
		var words_s = Gen.selected.join();
		words_s = words_s.replace(/,/g,' ');
		// words_s = Gen.text + words_s + Gen.text_end;
		Gen.twitter = Gen.twitter+ Gen.text +words_s +Gen.text_end;
		Gen.facebook = Gen.facebook +Gen.text+words_s+'&description=' +Gen.text_end;
		// Gen.twitter = encodeURIComponent(Gen.twitter);

		return Gen.twitter, Gen.facebook;

	}
};
$(document).ready(function(){

	$(window).on('load',function(){
		// var butt_text = ["Change the World",'Make a million','Be famous','Start a Business','Make a startup','Do something','New weekend project'];
		// $('#button').attr('value',butt_text[Math.floor(Math.random()*butt_text.length)]);
		// Gen.show();
		Gen.init();
	});

	//generates the words
	$("input").on('click',function(){
		Gen.show();
	});

	//changes the color of the words if they are clicked on
	$('p').on('click',function(){
		var id= $(this).attr('id');
		if(Gen.locked[id]==false){
			Gen.locked[id]=true;
			$(this).css('color','black');
		} else {
			Gen.locked[id]=false;
			$(this).css('color','white');
		}
	});

	//shows the measurements of the window
	//disable on release
	// $(window).on('resize load',function() {
	// 	console.log('width= '+$(window).innerWidth()+' height= '+$(window).innerHeight());
	// 	$('#size').text($(window).innerWidth() +' X '+$(window).innerHeight());
	// });

	//changes the words of the button on every refresh

	//shows the modal
	$('a.modal_link').on('click',function(){
		obj = $('#modal_'+$(this).attr('id'));
		if(obj.css('opacity')==0){
			$('#cont .modal').hide();
			$('.modal').transition({opacity:'0'});
			obj.show().transition({opacity:'1'});
		} else {
			obj.show().transition({opacity:'0'});
		}
	});

	//closes the modal
	$('#modal_share h3.close,#modal_about .close').on('click',function(){
		$('#cont .modal').transition({opacity:'0'},function(){
			$(this).hide();
		});
	});

	$('#share').on('click',function(){
		Gen.update_social();
		// $('.twitter').attr('href','');
		$('.twitter').attr('href',Gen.twitter);
		$('.facebook').attr('href',Gen.facebook);
	});
});//end of jquery
