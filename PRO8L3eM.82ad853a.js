let e=document.getElementById("track-list"),u=[{id:1,title:"Styl sportowy",time:"2:52"},{id:2,title:"Macki meduzy",time:"3:04"},{id:3,title:"V8",time:"2:49"},{id:4,title:"Miedzynarodowa #1",time:"0:37"},{id:5,title:"Lody włoskie",time:"3:06"},{id:6,title:"Gry losowe",time:"1:32"},{id:7,title:"Międzynarodowa #2",time:"0:22"},{id:8,title:"Na audiencji",time:"3:33"},{id:9,title:"Fair play",time:"3:24"},{id:10,title:"Rewia",time:"3:37"},{id:11,title:"Krajowa #1",time:"0:24"},{id:12,title:"Gramażeria",time:"1:54"},{id:13,title:"Flary",time:"3:31"},{id:14,title:"Kluby i restauracje",time:"1:09"},{id:15,title:"Puerto Rico",time:"1:50"},{id:16,title:"Międzynarodowa #3",time:"0:23"},{id:17,title:"Hazard",time:"2:38"},{id:18,title:"Międzynarodowa #4",time:"0:51"},{id:19,title:"Magnolie",time:"3:05"},{id:20,title:"Międzynarodowa #5",time:"0:23"},{id:21,title:"Golden",time:"3:41"},{id:22,title:"Iskry",time:"2:24"},{id:23,title:"Vanitas",time:"3:28"},{id:24,title:"Krajowa #2",time:"0:41"},{id:25,title:"Półsny",time:"2:01"},{id:26,title:"Sick boy",time:"1:38"},{id:27,title:"Byłem tam",time:""}];u.length;let a=document.querySelector("#track-title"),i=u.length;for(let a=0;a<i;a++){let i=document.createElement("li");i.id="li"+a,i.classList.add("list-item"),i.innerText=`[ ${u[a].id} ] ${u[a].title}`,i.setAttribute("title",`${u[a].id} | ${u[a].title}`);let o=document.createElement("span");o.classList.add("track-time"),o.innerText=` ${u[a].time}`,e.appendChild(i),document.getElementById("li"+a).appendChild(o)}let o=document.querySelector("#track-time");document.querySelector("#li0").textContent.charAt(2),document.querySelector("#li0").textContent.charAt(3);let t="default";e.addEventListener("click",function(){let e=event.target.id;switch(console.log(e),e){case"li0":console.log('you clicked "styl sportowy"'+e),t="styl_sportowy",a.innerText=u[0].title,o.innerText=u[0].time;break;case"li1":console.log("you clicked "+e),t="macki_meduzy",a.innerText=u[1].title,o.innerText=u[1].time;break;case"li2":console.log("you clicked "+e),t="v8",a.innerText=u[2].title,o.innerText=u[2].time;break;case"li3":console.log("you clicked "+e),t="miedzynarodowa_1",a.innerText=u[3].title,o.innerText=u[3].time;break;case"li4":console.log("you clicked "+e),t="lody_wloskie",a.innerText=u[4].title,o.innerText=u[4].time;break;case"li5":console.log("you clicked "+e),t="gry_losowe",a.innerText=u[5].title,o.innerText=u[5].time;break;case"li6":console.log("you clicked "+e),t="miedzynarodowa_2",a.innerText=u[6].title,o.innerText=u[6].time;break;case"li7":console.log("you clicked "+e),t="na_audiencji",a.innerText=u[7].title,o.innerText=u[7].time;break;case"li8":console.log("you clicked "+e),t="fair_play",a.innerText=u[8].title,o.innerText=u[8].time;break;case"li9":console.log("you clicked "+e),t="rewia",a.innerText=u[9].title,o.innerText=u[9].time;break;case"li10":console.log("you clicked "+e),t="krajowa_1",a.innerText=u[10].title,o.innerText=u[10].time;break;case"li11":console.log("you clicked "+e),t="gramazeria",a.innerText=u[11].title,o.innerText=u[11].time;break;case"li12":console.log("you clicked "+e),t="flary",a.innerText=u[12].title,o.innerText=u[12].time;break;case"li13":console.log("you clicked "+e),t="kluby_i_restauracje",a.innerText=u[13].title,o.innerText=u[13].time;break;case"li14":console.log("you clicked "+e),t="puerto_rico",a.innerText=u[14].title,o.innerText=u[14].time;break;case"li15":console.log("you clicked "+e),t="miedzynarodowa_3",a.innerText=u[15].title,o.innerText=u[15].time;break;case"li16":console.log("you clicked "+e),t="hazard",a.innerText=u[16].title,o.innerText=u[16].time;break;case"li17":console.log("you clicked "+e),t="miedzynarodowa_4",a.innerText=u[17].title,o.innerText=u[17].time;break;case"li18":console.log("you clicked "+e),t="magnolie",a.innerText=u[18].title,o.innerText=u[18].time;break;case"li19":console.log("you clicked "+e),t="miedzynarodowa_5",a.innerText=u[19].title,o.innerText=u[19].time;break;case"li20":console.log("you clicked "+e),t="golden",a.innerText=u[20].title,o.innerText=u[20].time;break;case"li21":console.log("you clicked "+e),t="iskry",a.innerText=u[21].title,o.innerText=u[21].time;break;case"li22":console.log("you clicked "+e),t="vanitas",a.innerText=u[22].title,o.innerText=u[22].time;break;case"li23":console.log("you clicked "+e),t="krajowa_2",a.innerText=u[23].title,o.innerText=u[23].time;break;case"li24":console.log("you clicked "+e),t="polsny",a.innerText=u[24].title,o.innerText=u[24].time;break;case"li25":console.log("you clicked "+e),t="sick_boy",a.innerText=u[25].title,o.innerText=u[25].time;break;case"li26":console.log("you clicked "+e),t="bylem_tam",a.innerText=u[26].title,o.innerText=u[26].time}});let n=[{type:"verse",index:1,text:`[Oskar] <br />
        Mia\u{142}em \u{17C}ycie ale nie mam, mia\u{142}em w g\u{142}owie spowied\u{17A}, tak\u{17C}e nie mam
        Mia\u{142}em \u{17C}\u{105}dze, par\u{119} spojrze\u{144} mord pchaj\u{105}cych mnie do d\u{105}\u{17C}e\u{144}, \u{17C}adnej nie mam
        Mia\u{142}em rzeczy do zrobienia, par\u{119} spraw do zarzucenia sobie dalej miewam
        Mia\u{142}em tobie co\u{15B} powiedzie\u{107}, ale nie mam
        Bo cz\u{142}owieka na kt\xf3rym polega\u{107} mog\u{142}em nagle nie znam
        Mia\u{142}em skrawek sumienia, my\u{15B}la\u{142}em, \u{17C}e mam ich, a tylko zna\u{142}em imienia
        Mia\u{142}em sw\xf3j stres, sw\xf3j gniew, chwa\u{142}\u{119}, cierpienia
        Warto\u{15B}ci si\u{119} jak olej w aucie wymienia`},{type:"chours",index:2,text:`[Oskar] <br />
        Widz\u{119} lepiej kiedy s\u{142}o\u{144}ce zasz\u{142}o za horyzont
        Robi\u{119} rzeczy, kt\xf3re mnie tak bardzo, bardzo brzydz\u{105}
        Daj mi co\u{15B}, ja przepierdol\u{119} \u{142}atwo ka\u{17C}d\u{105} ilo\u{15B}\u{107}
        Dzi\u{15B} mam tylko j\u{105} i jej cierpliwo\u{15B}\u{107}
        I wiem p\xf3ki tu stoj\u{119}, \u{17C}e to nie, jeszcze nie koniec
        A spi\u{119}cie puszcza me d\u{142}onie, a na gleb\u{119} lec\u{105} naboje
        I ledwo muskam jej skronie, my\u{15B}li jej goni\u{105} te moje
        Brudna krew, brudne magnolie
        G\u{119}sty tlen dusi oboje`},{type:"verse",index:3,text:`Mia\u{142}em sny i nie mam, mia\u{142}em pasj\u{119}, mia\u{142}em, jednak nie mam
        Mia\u{142}em swe marzenia, mia\u{142}em rany, mia\u{142}em plany
        Chore stany, dzi\u{15B} ich nie pami\u{119}tam niemal
        Mia\u{142}em cz\u{142}owiecze\u{144}stwa przejaw, mia\u{142}em dar
        Mia\u{142}em fart nic teraz niewart
        Mia\u{142}em si\u{142}\u{119}, mia\u{142}em tajemnic\u{119} i zw\u{105}tpienia
        Dzi\u{15B} przed gadk\u{105} z samym sob\u{105} stwierdzam - jeba\u{107}
        Mia\u{142}em my\u{15B}li, czas by je pozbiera\u{107}
        Mia\u{142}em pustk\u{119}, j\u{105} wype\u{142}nia\u{142}y wspomnienia
        Widz\u{119} w lustrze refleks mojej twarzy, to nie ja
        To co mia\u{142}em w\u{142}a\u{15B}nie si\u{119} sma\u{17C}y w p\u{142}omieniach`},{type:"chours",index:4,text:`[Oskar] <br />
        Widz\u{119} lepiej kiedy s\u{142}o\u{144}ce zasz\u{142}o za horyzont
        Robi\u{119} rzeczy, kt\xf3re mnie tak bardzo, bardzo brzydz\u{105}
        Daj mi co\u{15B}, ja przepierdol\u{119} \u{142}atwo ka\u{17C}d\u{105} ilo\u{15B}\u{107}
        Dzi\u{15B} mam tylko j\u{105} i jej cierpliwo\u{15B}\u{107}
        I wiem p\xf3ki tu stoj\u{119}, \u{17C}e to nie, jeszcze nie koniec
        A spi\u{119}cie puszcza me d\u{142}onie, a na gleb\u{119} lec\u{105} naboje
        I ledwo muskam jej skronie, my\u{15B}li jej goni\u{105} te moje
        Brudna krew, brudne magnolie
        G\u{119}sty tlen dusi oboje`},{src:"https://www.youtube.com/embed/d4GKd5asrBc?rel=0"}],r=[{type:"verse",index:1,text:`[Oskar] <br />
        Zamknij oczy i uwierz mi, zapij to w\xf3d\u{105} i le\u{107}my
        Ten miks nie jest bezpieczny, ale pigu\u{142}a jest dzi\u{15B} nieobecny
        Krwi nie wida\u{107} na powierzchni, wi\u{119}c i tak chuj z jego interwencji
        Z ni\u{105} i z zapa\u{142}kami jest jak z dzie\u{107}mi
        Spalmy miasto, pojar\u{119} zamie\u{107}my
        Typy wzywaj\u{105} posi\u{142}ki, ona t\u{142}ucze butle poni\u{17C}ej szyjki
        Ksi\u{119}\u{17C}yc, wyjemy jak wilki, stoj\u{105} jak pizdy po odbi\xf3r przesy\u{142}ki
        Ich trzymamy za \u{142}by jak pacynki, ona trzyma lini\u{119}, bo je pastylki
        G\u{142}owy lec\u{105} od linijki, ale jest s\u{142}odko, bo jemy muffinki
        Opory wysch\u{142}y, jej chore pomys\u{142}y
        Widz\u{119} j\u{105} w ciszy, w czarnym obcis\u{142}ym
        Straci\u{142}bym zmys\u{142}y, ale nie czas na namys\u{142}y
        Z\u{142}udzenia dawno prys\u{142}y, sumienia dawno zawis\u{142}y, tam
        Zabij go, zabij, ta, jak krwawi to krwawi
        Strach j\u{105} bawi, to bawi, wal, gouda, to i dragi
        Nam to barwy jaskrawi, patrz s\u{142}abi odpadli
        Raz b\u{119}dzie co ma by\u{107} ona mnie jednocze\u{15B}nie pali i pali, wabi i wabi`},{type:"chours",index:2,text:`[Oskar] <br />
        Ona szepcze mi do ucha, a jej szapcze diabe\u{142}
        Jest jak nad miastem koszmar, kt\xf3ry musi wreszcie nadej\u{15B}\u{107}
        By\u{142}em z\u{142}y, z ni\u{105} jestem jeszcze bardziej
        Chc\u{119} jej nagiej, albo ona, albo nie chc\u{119} \u{17C}adnej`},{type:"verse",index:3,text:`[Oskar] <br />
        Polubi\u{142}em troch\u{119} b\xf3l, najpierw troch\u{119}, potem full
        Do przera\u{17C}enia doszed\u{142} b\xf3l, gdy zamieniamy twoj\u{105} flot\u{119} w null
        Wchodzimy w ten t\u{142}um, t\u{142}um, t\u{142}um, walimy ten rum, rum, rum
        Ich nerwowy, szum, szum, szum, wychodzimy i bum
        Ona nie ma przyjaci\xf3\u{142}ek, ma fanki, ale ma w trupie czaszki pi\u{17C}amki
        Chcia\u{142}em jej nala\u{107} do miarki, ale wy\u{15B}mia\u{142}a i przela\u{142}a do szklanki
        Panna pokaza\u{142}a ci majtki, ona mi po co naprawd\u{119} s\u{105} kajdanki
        Dobrze, \u{17C}e mam twarde nadgarski, gorzej znosz\u{105} to jej kole\u{17C}anki
        Po prawej diabe\u{142}, po lewej szaber, podajesz \u{17C}e spa\u{142}e\u{15B}, polej se kaw\u{119}
        Odmawiasz r\xf3\u{17C}aniec, czy dukasz alfabet?
        Straci\u{142}e\u{15B} w\u{142}adz\u{119}, robisz co ona ka\u{17C}e
        Piszesz co\u{15B} w e-dur, co, to jaki\u{15B} rebus? No
        Czerwie\u{144} na \u{15B}niegu, to jest wynik gniewu
        Zamierasz w biegu, blok to macki meduz
        Stop, dobra dobremu, a z\u{142}a jest tu z\u{142}emu
        I w sumie to chuj mnie obchodzi ju\u{17C} czemu`},{src:"https://www.youtube.com/embed/euqTBWHl1N8?rel=0"}],s=[{type:"verse",index:1,text:`[Oskar] <br />
        Na butli nie ma banderoli, grudy nie ma tam na dnie folii
        Ona t\u{142}ustych bardziej woli, potem kluby, najpierw molly
        S\u{105} patrole, jest Yanosik, nie przyswajasz tych ilo\u{15B}ci
        Na ulicach Eskimosi, rzygasz? To ponad twoje mo\u{17C}liwo\u{15B}ci
        Wyb\xf3r jak na Ceneo, sporo typ\xf3w, WWA, Mondeo
        Co jest? Lekko spi\u{119}\u{142}o? Nie grzej, jaki\u{15B} testosteron
        \u{17B}\xf3\u{142}te daj\u{105} jak stroboskopy, u\u{15B}miech kurwa, robi\u{105} foty
        Nie ma torby, to s\u{105} fochy, m\xf3wi\u{142}em ju\u{17C}, s\u{105} mordo grochy
        `},{type:"chours",index:2,text:`[Oskar i Steez] x2 <br />
        Linia szybka, bo powoli mi odbija palma
        Ona jak wida\u{107} fajna, z twarzy jak Jessica Alba
        Kto\u{15B} poszed\u{142} w cug, do kogo\u{15B} wraca d\u{142}ug, do kogo\u{15B} karma
        Skrajny pas, dusz\u{119} gaz, nie s\u{142}ucham mordo ballad`},{type:"verse",index:3,text:`[Oskar] <br />
        Pitstop, by zala\u{107} na stacji Vervy
        Typ pyta "p\xf3\u{142} la\u{107}, czy pe\u{142}ny"?
        Ej, zjad\u{142} mi nerwy
        Ty, mo\u{17C}e id\u{17A} se zam\xf3w p\xf3\u{142} szklanki herby
        Pierwsza w nocy, ja po obiedzie
        Tak si\u{119} szamie, mordo w mie\u{15B}cie
        Sw\u{119}dzi ci\u{119} nos, to w mi\u{119}sie\u{144}
        Robi\u{105} ca\u{142}y rok na \u{15B}rodkow\u{105} kiesze\u{144}
        Mijam jedn\u{105} i jest flexy
        Obok sze\u{15B}ciu typa gnije w nexii
        Na banerze wy\u{17C}ej Messi
        S\u{142}ucham transu, pij\u{119} Pepsi
        \u{141}atwo si\u{119} floty pozby\u{107}
        S\u{105}dy, loty, squaty, pozwy
        Przydymione wloty nozdrzy
        But i pierdolony rozb\u{142}ysk`},{type:"chours",index:4,text:`[Oskar i Steez] x2 <br />
        Linia szybka, bo powoli mi odbija palma
        Ona jak wida\u{107} fajna, z twarzy jak Jessica Alba
        Kto\u{15B} poszed\u{142} w cug, do kogo\u{15B} wraca d\u{142}ug, do kogo\u{15B} karma
        Skrajny pas, dusz\u{119} gaz, nie s\u{142}ucham mordo ballad`},{src:"https://www.youtube.com/embed/Y9jZXrckXyY?rel=0"}],c=[{type:"verse",index:1,text:`[Steez] <br />
        No siemasz, siemasz, dobrze, \u{17C}e oddzwaniasz. Poczekaj, 
        tylko se s\u{142}uchawki wrzuc\u{119}. No, jest git, co tam, jak tam? O kurwa, 
        tutaj jest z dwadzie\u{15B}cia stopni. Dobra, ty, ale nie o tym. 
        Ka\u{15B}ka do mnie dzwoni\u{142}a przed chwil\u{105}. Co? No, nie wiem sk\u{105}d mia\u{142}a, 
        ja jej nie da\u{142}em, nie. A sportowego na chacie nie zostawi\u{142}e\u{15B}? A, 
        no to chyba jednak zna\u{142}a has\u{142}o, albo jakie\u{15B} lepsze fotostory z Anet\u{105} namierzy\u{142}a. 
        Afera na bogato si\u{119} szykuje jak wr\xf3cisz. No, m\xf3wi\u{119} ci, kurwa, dar\u{142}a si\u{119} do s\u{142}uchawki. 
        No, wiem ziomu\u{15B}, u mnie noc si\u{119} zaczyna, ale wiesz, chcia\u{142}em ci\u{119} uprzedzi\u{107}`},{src:""}],z=[{type:"chours",index:1,text:`[Oskar] <br />
        Jest czas, nie ma hajsu, jem ry\u{17C} po tajsku jest kac
        Nie ma blant\xf3w, marlboro light\xf3w, jest kwas
        Po ostatnim zaj\u{15B}ciu zamiast romansu jest jej p\u{142}aszcz
        `},{type:"verse",index:2,text:`[Oskar] <br />
        Trzask i wybieg\u{142}a, a by\u{142} to czwartek, \u{15B}rodek zimy
        Troch\u{119} chujowo wysz\u{142}o, bo mia\u{142}a w \u{15B}rod\u{119} imieniny
        S\u{142}o\u{144}ce, raz zdarzy\u{142}o si\u{119} ma\u{142}y, raz jeden jedyny
        No, nie r\xf3bmy rutyny, bo jestem niewinny, oo
        Co ja zrobi\u{142}em? Jak\u{105} dziewczyn\u{119}?
        Patrzy\u{142}em chwil\u{119}, co, nie na ty\u{142}ek
        Gdzie\u{15B} zadzwoni\u{142}em, do jakiej by\u{142}ej?
        B\u{119}d\u{105}c pod kinem, wzi\u{105}\u{142}em ci bilet
        Ja jestem bydle? Col\u{119} wypi\u{142}em
        Rybko, z Emilem, bo wzi\u{105}\u{142} zasi\u{142}ek
        Bar odwiedzi\u{142}em, tam zjad\u{142}em posi\u{142}ek
        Popi\u{142}em kefirem i w sumie to tyle, kotku
        Gra\u{142}a Borussia Dortmund, nosi\u{142}em paczki w pe\u{142}nym s\u{142}o\u{144}cu
        Podstaw mnie przed egzekucyjny korpus
        Nie widzia\u{142}em \u{17C}adnej ma\u{142}olatki w tym miesi\u{105}cu
        Na mie\u{15B}cie poch\xf3d zwi\u{105}zkowc\xf3w
        Roz\u{142}o\u{17C}y\u{142} mi si\u{119} samoch\xf3d przy dworcu
        Ju\u{17C} mia\u{142}em wraca\u{107}, ale w korku, bez transportu?
        No i na ko\u{144}cu musia\u{142}em pom\xf3c ojcu
        
        To chwila - dzi\u{15B} jest, jutro ju\u{17C} by\u{142}a
        To chwila - dzi\u{15B} nienawidzi mnie, jutro jest mi\u{142}a
        Sama sobie jest winna
        M\xf3wi\u{119} trudno jest inna
        Nie w tym rzecz, \u{17C}e si\u{119} zmy\u{142}a
        Rzecz w tym, \u{17C}e mnie nakry\u{142}a`},{type:"chours",index:3,text:`[Oskar] <br />
        Jest czas, nie ma hajsu, jem ry\u{17C} po tajsku jest kac
        Nie ma blant\xf3w, Marlboro light\xf3w, jest kwas
        Po ostatnim zaj\u{15B}ciu zamiast romansu jest jej p\u{142}aszcz`},{type:"verse",index:4,text:`[Oskar] <br />
        Plask na mojej twarzy jej palc\xf3w \u{15B}lad, a nie szminki
        Troch\u{119} chujowo to wysz\u{142}o, bo by\u{142}y walentynki
        Mia\u{142}em kupi\u{107} prezent jej, skarbie, kupi\u{107} chcia\u{142}em stringi
        St\xf3j kochanie gdzie biegniesz niecodziennie wal\u{119} drinki
        \u{17B}abko, kroj\u{105}c chleb rano sko\u{144}czy\u{142}em z ran\u{105}
        Wyszed\u{142}em krwawi\u{105}c, d\u{142}ugo to trwa\u{142}o
        Gada\u{142}em z Mari\u{105}, \u{17A}le to zabrzmia\u{142}o
        Znaczy si\u{119} z Mario, szed\u{142} gdzie\u{15B} ze star\u{105}
        To w skr\xf3cie ca\u{142}o\u{15B}\u{107}, czerwon\u{105} strza\u{142}\u{105}
        Podjecha\u{142} Maro, a z tak\u{105} Ani\u{105}
        \u{15A}cina\u{142}em auto, a nie na jej cia\u{142}o
        Czekali\u{15B}my pal\u{105}c tam, a\u{17C} si\u{119} oddal\u{105}
        Myszko, wiesz \u{17C}e moj\u{105} tradycj\u{105}
        Wtorki praca nad kondycj\u{105}
        Wyszed\u{142}em z misj\u{105} po tw\xf3j prezent na dzi\u{15B}
        To akurat szli do monopolu z ekspedycj\u{105}
        I by\u{142}o zimno i \u{15B}lisko
        Ja ju\u{17C} by\u{142}em w drodze na z bielizn\u{105} stoisko
        I przypadkiem spotka\u{142}em si\u{119} z Patrycj\u{105}
        Ten jeden wyskok, to rybko nie wszystko
        
        To chwila - dzi\u{15B} jest, jutro ju\u{17C} by\u{142}a
        To chwila - dzi\u{15B} nienawidzi mnie, jutro jest mi\u{142}a
        Sama sobie jest winna
        Ta, a potem jest inna
        Nie w tym rzecz, \u{17C}e si\u{119} zmy\u{142}a
        Rzecz w tym, \u{17C}e mnie nakry\u{142}a`},{src:"https://www.youtube.com/embed/935hsUAVNYo?rel=0"}],m=[{type:"cut",index:1,text:`[W\u{142}odi] <br />
        Te\u{17C} b\u{142}\u{105}dz\u{119} w ciemno\u{15B}ci, ale koniec ko\u{144}c\xf3w
        Urodzi\u{142}em si\u{119} po to, \u{17C}eby chodzi\u{107} w s\u{142}o\u{144}cu
        `},{type:"verse",index:2,text:`[Oskar] <br />
        Dzie\u{144} by\u{142} s\u{142}oneczny, odwiedzi\u{142}em bar mleczny
        Zjad\u{142}em kotlet jajeczny i przyjeba\u{142}em w \u{15B}mietnik na wstecznym
        B\u{142}\u{105}d niebolesny, bo lakier by\u{142} i tak konieczny
        Min\u{105}\u{142}em par\u{119} przecznic my\u{15B}l\u{105}c kto jest, a kto nie jest wart obietnic
        To nie op\u{142}atek, a to nie taca jak si\u{119} op\u{142}aca
        To jest praca, jak jest sprawa, to jest rasa, \u{17C}ycie stres skraca Wczoraj nafta, wi\u{119}c mia\u{142}em dzi\u{15B} kaca
        Ta pogi\u{119}ta blacha, nie b\u{119}d\u{119} p\u{142}aka\u{107}, bo ten automat wyp\u{142}aca
        Nic? Dry\u{144}, dzwoni kto\u{15B} robi zakupy
        By\u{15B} la\u{142} w mord\u{119} goudy, jad\u{142} w\u{142}oskie kluchy
        No i na ciuchy, na skr\xf3ty w bramie dwa buchy
        Mia\u{142}em zje\u{15B}\u{107} racuchy obrzydzi\u{142} mi je bej zapluty
        Kt\xf3ry akurat tam s\u{119}pi\u{142} na ruchy
        Ja g\u{142}uchy na pro\u{15B}by, a on czarny jak Bill Cosby
        Obok monopolowy, mordy dla hobby brali litr goudy
        Wszed\u{142}em, jeden u\u{15B}piony obaj nie mieli zbyt formy
        Lecz w sumie \u{17C}aden z nich nie zd\u{105}\u{17C}y\u{142} przekroczy\u{107} dzi\u{15B} normy`},{type:"cuts",index:3,text:`
        Te\u{17C} b\u{142}\u{105}dz\u{119} w ciemno\u{15B}ci, ale koniec ko\u{144}c\xf3w
        Je\u{15B}li chodzi o hajs, jestem jeban\u{105} maszynk\u{105}
        Te\u{17C} b\u{142}\u{105}dz\u{119} w ciemno\u{15B}ci, ale koniec ko\u{144}c\xf3w`},{src:""}],y=[{type:"VERSE",index:1,text:`[Steez] <br />
        No, siemasz. No i jak? Nie, no jad\u{119} co\u{15B} ogarn\u{105}\u{107}. 
        Aha. Co ty pierdolisz? Nie, no to szach mat. Aa, ta. 
        Co, przychodzi? \u{15A}wieczki odpalisz, wanna i si\u{119} rebus rozwi\u{105}\u{17C}e. 
        Dobra, poczekaj, czekaj, psy jad\u{105}, zaraz oddzwoni\u{119}
        `},{src:""}],d=[{type:"cut",index:1,text:`[W\u{142}odi] <br />
        Te\u{17C} b\u{142}\u{105}dz\u{119} w ciemno\u{15B}ci, ale koniec ko\u{144}c\xf3w
        Urodzi\u{142}em si\u{119} po to, \u{17C}eby chodzi\u{107} w s\u{142}o\u{144}cu
        `},{type:"verse",index:2,text:`[Oskar] <br />
        Dzie\u{144} by\u{142} s\u{142}oneczny, odwiedzi\u{142}em bar mleczny
        Zjad\u{142}em kotlet jajeczny i przyjeba\u{142}em w \u{15B}mietnik na wstecznym
        B\u{142}\u{105}d niebolesny, bo lakier by\u{142} i tak konieczny
        Min\u{105}\u{142}em par\u{119} przecznic my\u{15B}l\u{105}c kto jest, a kto nie jest wart obietnic
        To nie op\u{142}atek, a to nie taca jak si\u{119} op\u{142}aca
        To jest praca, jak jest sprawa, to jest rasa, \u{17C}ycie stres skraca Wczoraj nafta, wi\u{119}c mia\u{142}em dzi\u{15B} kaca
        Ta pogi\u{119}ta blacha, nie b\u{119}d\u{119} p\u{142}aka\u{107}, bo ten automat wyp\u{142}aca
        Nic? Dry\u{144}, dzwoni kto\u{15B} robi zakupy
        By\u{15B} la\u{142} w mord\u{119} goudy, jad\u{142} w\u{142}oskie kluchy
        No i na ciuchy, na skr\xf3ty w bramie dwa buchy
        Mia\u{142}em zje\u{15B}\u{107} racuchy obrzydzi\u{142} mi je bej zapluty
        Kt\xf3ry akurat tam s\u{119}pi\u{142} na ruchy
        Ja g\u{142}uchy na pro\u{15B}by, a on czarny jak Bill Cosby
        Obok monopolowy, mordy dla hobby brali litr goudy
        Wszed\u{142}em, jeden u\u{15B}piony obaj nie mieli zbyt formy
        Lecz w sumie \u{17C}aden z nich nie zd\u{105}\u{17C}y\u{142} przekroczy\u{107} dzi\u{15B} normy`},{type:"cuts",index:3,text:`
        Te\u{17C} b\u{142}\u{105}dz\u{119} w ciemno\u{15B}ci, ale koniec ko\u{144}c\xf3w
        Je\u{15B}li chodzi o hajs, jestem jeban\u{105} maszynk\u{105}
        Te\u{17C} b\u{142}\u{105}dz\u{119} w ciemno\u{15B}ci, ale koniec ko\u{144}c\xf3w`},{src:"https://www.youtube.com/embed/ZFVCiU9w7Mk?rel=0"}],k=[{type:"verse",index:1,text:`[Oskar] <br />
        Lubi\u{119} towar trefny, lubi\u{119} browar wczesny
        Lubi\u{119} Alpin\u{119}, Bety, AMG 6.3, lubi\u{119} diamenty
        Na szyi kobiety i si\u{119} z ni\u{105} pieprzy\u{107}
        A inna sprawa jaki przed tym fetysz
        Lubi\u{119} zjes\u{107} kwasa, blackjack, hazard
        Nie lubi\u{119} w niej zasad, lubi\u{119} jej masa\u{17C}
        Jestem chuj, zdradzam
        Lubi\u{119} j\u{105} w d\xf3\u{142}, od pasa
        A inna sprawa, \u{17C}e jak jest naga te\u{17C} mi nie przeszkadza
        Lubi\u{119} pi\u{107} szampan, lubi\u{119} je\u{15B}\u{107} w knajpach
        Lubi\u{119} ten kajdan, zup\u{119} jak jest pikantna
        W pi\u{105}tek falstart, kocha\u{107} si\u{119} w jej kszta\u{142}tach
        Inna sprawa, \u{17C}e mam na ni\u{105} wyjebane jajca
        Lubi\u{119} w dzie\u{144} zaspa\u{107}, w nocy sen miasta
        Ten dres Ralpha, w ciszy d\u{17A}wi\u{119}k blanta
        Fajer\u{119} auta, szum v6 wa\u{142}ka
        Inna rzecz, \u{17C}e w\u{142}a\u{15B}nie odwiedzam dzi\u{15B} warsztat
        `},{type:"chours",index:2,text:`[Oskar & Steez] x2 <br />
        To inna historia, \u{17C}e gadam z bogiem o piekle
        Inna, \u{17C}e \u{15B}migam ostro, bo nie wiem jak wcisn\u{105}\u{107} heble
        Inna, \u{17C}e trzymam fason, a jestem jak ma\u{142}olat we mgle
        Ale to kurwa nie Wembley
        A \u{17C}ycie to nie fair play`},{type:"verse",index:3,text:`[Oskar] <br />
        Lubi\u{119} De Niro, lubi\u{119} Ground Zero
        Lubi\u{119} pi\u{119}\u{107} kilo, nie lubi\u{119} tych co nie pij\u{105}
        Lubi\u{119} seks z by\u{142}\u{105}, toast tequill\u{105}
        Inna sprawa, \u{17C}e wola\u{142}bym \u{15B}wi\u{119}towa\u{107} ten milion
        Lubi\u{119} Black Mirror, goud\u{119} zimn\u{105}
        Przerw\u{119} godzinn\u{105}, bud\u{119} z kebsem czynn\u{105}, buritto z tortill\u{105}
        Gara\u{17C} pod will\u{105}, na razie nie, mo\u{17C}e gdybym ostatnio nie pop\u{142}yn\u{105}\u{142}
        Nie lubi\u{119} zim, polskich tych w kit porcji
        Z rana win, s\u{142}odkich, a na zrzucie torsji
        Lubi\u{119} sprint sporty, ale bieg\u{142}em ostatnio jak mi nie odda\u{142} typ floty
        Lubi\u{119} gdy jest w\xf3da, lubi\u{119} jej uda
        Lubi\u{119} gdy jest chuda, lubi\u{119} gdy jest gruba
        Lubi\u{119} gdy jest druga, lubi\u{119} gdy jest grupa
        Inna historia jak si\u{119} przypadkowo trafi cudza`},{type:"chours",index:2,text:`[Oskar & Steez] x2 <br />
        To inna historia, \u{17C}e gadam z bogiem o piekle
        Inna, \u{17C}e \u{15B}migam ostro, bo nie wiem jak wcisn\u{105}\u{107} heble
        Inna, \u{17C}e trzymam fason, a jestem jak ma\u{142}olat we mgle
        Ale to kurwa nie Wembley
        A \u{17C}ycie to nie fair play`},{src:"https://www.youtube.com/embed/5pM0_Q7vMTA?rel=0"}],l=[{type:"verse",index:1,text:`[Oskar] <br />
        Te same g\u{119}by, rave'y
        Zn\xf3w mendy, spierdolimy t\u{119}dy
        Wetrzyj w z\u{119}by
        B\u{119}bny, k\u{142}\u{119}by
        DJ gra blendy
        Odpierdalam rewi\u{119}, zjad\u{142}em dziewi\u{119}\u{107}
        Le\u{17C}\u{119} na glebie, ona te\u{17C} zje
        One we dwie, nic nie wiem
        Gadam do siebie, \u{15B}lady na niebie x2
        `},{type:"verse",index:2,text:`[Oskar] <br />
        Te same ksywki, listki
        Brak dykcji, ich wygi\u{119}te pyski
        \u{15A}lady jej szminki, gwizdki
        Whisky, id\u{17A} we\u{17A} to ze skrytki
        Trutka, zdr\xf3wka
        W grudkach, 0,6 z grubsza
        Z bazy lub kubka
        Rundka, trzydni\xf3wka
        Jestem n\xf3wka x2`},{src:""}],w=[{type:"verse",index:1,text:`[Oskar] <br />
        No i to jest jedzenie. To rozumiem. Czekaj, akurat kto\u{15B} mi tu tarabani, 
        akurat teraz. Smarkaj dzidziu\u{15B}. Co? Jeszcze raz powiedz. Co zrobi\u{142}e\u{15B}? 
        Oj, Bo\u{17C}e... No, to przyjd\u{17A} tam zaraz, odkr\u{119}cimy
        `},{src:""}],j=[{type:"verse",index:1,text:`[Oskar] <br />
        To miejsce gdzie si\u{119} wszyscy znamy
        Wchodz\u{105} ch\u{142}opcy, z nimi damy
        Wychodz\u{105} dziwki i chamy
        \u{15A}ciany maj\u{105} uszy wi\u{119}c nie jest nikt pijany
        Chcia\u{142}by\u{15B} sztuk\u{119}, zmieniasz plany
        Szybki odwr\xf3t gdy jeste\u{15B} bliski bramy
        To gra o flot\u{119}, walka o fotel
        Gouda co pi\u{105}tek, kac w sobot\u{119}
        To pi\u{119}\u{15B}\u{107} i m\u{142}otek, dwa do trzech to je\u{17A}dzi\u{107} szrotem
        Ona ma ochot\u{119}, ty marsz z powrotem
        Pa, krzyk jest g\u{142}uchy, ta krzycz jak musisz
        Ja milcz\u{119} skuty, fakt stycze\u{144} drugi
        O, \u{15B}wiat nie ko\u{144}czy si\u{119} na szlugu, ko\u{144}cz\u{105} mi si\u{119} szlugi
        \u{15A}wiat nie ko\u{144}czy si\u{119} na d\u{142}ugu, nie ko\u{144}cz\u{105} mi si\u{119} d\u{142}ugi
        Nie ko\u{144}czy si\u{119} flota i nie ko\u{144}cz\u{105} mi si\u{119} dni gdy
        Wydaj\u{119} plik do ko\u{144}ca, bo si\u{119} nie zacz\u{119}\u{142}y nigdy
        Modlitwy, by przesta\u{107} traci\u{107} czas na litry
        Litry, by przesta\u{107} traci\u{107} czas na modlitwy
        `},{src:""}],p=[{type:"verse",index:1,text:`[Oskar] <br />
        \u{15A}cinam przez \u{17C}aluzje na okolic\u{119}
        Ona milczy g\u{142}o\u{15B}niej ni\u{17C} krzycz\u{119}
        Chc\u{119} j\u{105} lekko musn\u{105}\u{107} w policzek
        Zostawia mnie, a obok cisz\u{119}
        S\u{142}odkie \u{17C}ycie, s\u{142}ysz\u{119} bluzgi jej pod prysznicem
        Woda p\u{142}ynie jak obietnice, chmury wisz\u{105} jak szubienice
        Siada naprzeciwko mnie, jest w\u{15B}ciek\u{142}a jak krzyk
        Ona przeciwko mnie, jej wzrok tylko czeka na cynk
        Gdyby m\xf3g\u{142} zabi\u{107} to bym jak skiepowany blant styg\u{142}
        Jeste\u{15B}my nadzy, dawno si\u{119} wykrwawi\u{142} nasz wstyd
        (Like the air that I breathe) Nasze zmys\u{142}y
        (That's what she is to me) Czuj\u{105} bitwy
        (Like coming home) Nasze my\u{15B}li
        (When I've been gone too long) Wr\xf3\u{17C}\u{105} blizny
        Wojna, wojna, m\xf3wi\u{119} jej: dobra, dobra
        Patrzy spokojna, ch\u{142}odna, bo jest do tornad zdolna
        Wskazania ponad pomiar, to b\u{119}dzie zbrodnia, ognia
        Jeden tylko drobiazg, to by\u{142}o wczoraj, a dzi\u{15B}
        `},{type:"chours",index:2,text:`
        Nie pami\u{119}tam jak grozi
        Jak pachnie jej pot i
        Jak szepcz\u{105} jej kroki
        Jak si\u{119} kr\u{119}c\u{105} jej loki czarne jak b\xf3r
        Jak pragn\u{105} jej oczy
        Jak pachn\u{105} jej w\u{142}osy
        Dym, papierosy k\u{142}ad\u{119} na st\xf3\u{142}
        Nie pami\u{119}tam, jak prosi
        Jak koi jej dotyk
        I nie pami\u{119}tam nago\u{15B}ci bia\u{142}ej jak s\xf3l
        Nad ulic\u{105} tej nocy, walki gasn\u{105} odg\u{142}osy
        To, co mieli\u{15B}my, rozszarpane na p\xf3\u{142}
        Nie pami\u{119}tam jak, nie pami\u{119}tam jak
        Nie pami\u{119}tam jak, nie pami\u{119}tam jak
        (Like the air that I breathe)
        (That's what she is to me)`},{type:"verse",index:3,text:`
        Nie wiem co za klub to, t\u{142}ok, lufa za luf\u{105}, nos
        Krok w ty\u{142} i p\xf3\u{142} w bok, sport, oblewam si\u{119} w\xf3dk\u{105}, shot
        Ona szarpie moj\u{105} kurtk\u{105}, blond w\u{142}osy spi\u{119}te gumk\u{105}
        Z\u{142}o\u{15B}\u{107}, na gleb\u{119} leci Tuborg, stop, odpycham j\u{105} m\xf3wi\u{105}c do\u{15B}\u{107}
        Idziesz albo koniec - krzyczy, ja ledwo stoj\u{119}
        Spity \u{15B}miej\u{119} si\u{119} do niej, s\u{142}yszysz, rzuca we mnie szkopek \u{142}ychy
        Jak gaszony p\u{142}omie\u{144} syczy i znika jak w pi\u{105}tek dychy
        T\u{142}uk\u{119} luf\u{119} o ten bar, krew cieknie przez palce ju\u{17C}`},{type:"chours",index:2,text:`
        Nie pami\u{119}tam jak grozi
        Jak pachnie jej pot i
        Jak szepcz\u{105} jej kroki
        Jak si\u{119} kr\u{119}c\u{105} jej loki czarne jak b\xf3r
        Jak pragn\u{105} jej oczy
        Jak pachn\u{105} jej w\u{142}osy
        Dym, papierosy k\u{142}ad\u{119} na st\xf3\u{142}
        Nie pami\u{119}tam, jak prosi
        Jak koi jej dotyk
        I nie pami\u{119}tam nago\u{15B}ci bia\u{142}ej jak s\xf3l
        Nad ulic\u{105} tej nocy, walki gasn\u{105} odg\u{142}osy
        To, co mieli\u{15B}my, rozszarpane na p\xf3\u{142}
        Nie pami\u{119}tam jak, nie pami\u{119}tam jak
        Nie pami\u{119}tam jak, nie pami\u{119}tam jak
        (Like the air that I breathe)
        (That's what she is to me)`},{type:"verse",index:3,text:`
        Ulica i \u{15B}wiat\u{142}o lamp, zataczam si\u{119} kaszl\u{105}c, czkam
        Mija mnie patrol, fart, rzygam, dr\u{119} gard\u{142}o, chlam
        Rozbita jak szk\u{142}o twarz, na r\u{119}ce ju\u{17C} zasch\u{142}o
        P\u{142}aszcz na glebie, a ponadto blant, to chyba jej auto tam
        Podje\u{17C}d\u{17C}a jak zjawa w becie, bredz\u{119} jaki\u{15B} bana\u{142}
        Dreszcze, co robisz, wsiadaj - szepcze
        Cedz\u{119}: spierdalaj, nie chc\u{119}
        Ona nie b\u{142}aga wi\u{119}cej, odje\u{17C}d\u{17C}a sama
        Wreszcie t\u{142}uk\u{119} butl\u{119} o kraw\u{119}\u{17C}nik
        Ksi\u{119}\u{17C}yc i noc g\u{119}sta jak krew`},{src:"https://www.youtube.com/embed/ltH9IgyZKbw?rel=0"}],b=[{type:"verse",index:1,text:`[Oskar] <br />
        Kiedy ten bit wje\u{17C}d\u{17C}a? O
        We \u{142}bie kr\u{119}ci si\u{119} jak w wanklu
        Dochodzi wi\u{119}c do spi\u{119}\u{107} i awantur
        Gramy? Ja bankrut
        Nikt nie ma jednej, ka\u{17C}dy ma fanklub
        O, zdrowie na pi\u{119}\u{107} luf
        Ale czym jest pi\u{119}\u{107} luf na pi\u{119}\u{107} g\u{142}\xf3w
        Ch\u{142}opie, daj pi\u{119}\u{107}, pi\u{119}\u{107} zn\xf3w
        Mia\u{142} by\u{107} hajs, jest pi\u{119}\u{107} st\xf3w
        Kluby i restauracje, substancje s\u{105} r\xf3\u{17C}ne, wariacje
        Czekam na tak, masz racj\u{119}
        Gouda i kwit, podaj\u{105} mi narracj\u{119}
        O, brak tu mojego gniewu
        Z w\xf3dk\u{105} wyla\u{142}em go do tamtego zlewu
        \u{15A}wiat\u{142}o koloru md\u{142}ego z LED\xf3w
        Leci z dwiewi\u{119}\u{107}dziesi\u{105}tego przeb\xf3j
        `},{src:""}],x=[{type:"chours",index:1,text:`[Oskar] <br />
        Dzieci weso\u{142}o pobieg\u{142}y do szko\u{142}y, posypa\u{142}y si\u{119} na blat przetwory
        Puszcza go, powoli wygl\u{105}da jak chory
        Ona wrzuca to na swoje story
        `},{type:"verse",index:2,text:`[Oskar] <br />
        Koka, psycho, z Puerto Rico
        On jest szych\u{105}, ona z wszywk\u{105}
        Troch\u{119} zryto, troch\u{119} tylko
        Z\u{142}ota rybko, prosz\u{119} tysi\u{105}c
        Zacz\u{119}li bez intra, knajpa nie wykwintna
        Leciutka napinka, ciasno jest na winklach
        Ona co\u{15B} zamilk\u{142}a, dosta\u{142}a do drinka`},{type:"chours",index:3,text:`[Oskar] <br />
        Dzieci weso\u{142}o pobieg\u{142}y do szko\u{142}y, posypa\u{142}y si\u{119} na blat przetwory
        Puszcza go, powoli wygl\u{105}da jak chory
        Ona wrzuca to na swoje story`},{src:""}],h=[{type:"verse",index:1,text:`[Steez] <br />
        Halo, halo? No, jestem. Ju\u{17C} jestem. Aa, kurwa, bo ta mi co\u{15B} pierdoli. 
        No, m\xf3wi\u{142}em mu, \u{17C}e to ryzykowne, ale ci\u{119}\u{17C}ko si\u{119} nie po\u{142}asi\u{107}, jak wiesz, \u{142}ap\u{119} liza\u{142} przez p\xf3\u{142} roku. 
        No, ja to to bym si\u{119} w to nie wpierdala\u{142}. Eh, kurwa, co zrobisz. Napali\u{142} si\u{119} jak szczerbaty na suchary
        `},{src:""}],g=[{type:"verse",index:1,text:`[Oskar] <br />
        Pogoda nie rozpieszcza, ale jak masz to grzeje
        Odkleja si\u{119} jak paznokcie jej, a twarz matowieje
        Ta, nie ma kto pola\u{107}, sam polej\u{119}
        2018, nie bior\u{105} aut z\u{142}odzieje
        Nie b\u{119}dzie drugich ofert, m\xf3j ko\u{144} to sz\xf3stka
        Hydrokortyzon, po co\u{15B} wzi\u{105}\u{142} te st\xf3wy d\u{17C}okej
        Przy barze obok pusty hoker
        Plan na potem - na kuponie pi\u{119}\u{107} oczek
        Ona hotel, szkopek w\xf3dy, poker
        450, ciut za drogo, id\u{17A} marudzi\u{107} kurwa obok
        Nie masz, a przejeba\u{142}e\u{15B} na bluzach logo
        Cyganki nie powr\xf3\u{17C}\u{105} z r\u{119}ki, w fusach mog\u{105}
        Na pobudk\u{119} nie ma kawy, kop zamyka usta wrogom
        Ciasno tu jak w awionetce, jest wilgotno
        Ale r\u{119}ce i tak ka\u{17C}dy mia\u{142} bardzo lepkie
        W prawej trzymam to co ka\u{17C}demu jest tak konieczne
        W lewej trzymam krzy\u{17C}ak, nitki s\u{105} w marionetce
        `},{type:"verse",index:2,text:`[Oskar] <br />
        Nie jeste\u{15B} tu bezpieczny, ona nie ma majtek
        Ale w sumie nie krzycz, na jednej ma dziar\u{119}, a na drugiej pieprzyk
        Je\u{15B}li nie ma \u{107}wiartek, to pi\u{119}\u{107} rudej wi\u{119}kszych
        Kolejny pies w T-czw\xf3rce, wal\u{119} na inwencje tw\xf3rcze
        Magnez na cz\u{119}ste skurcze, blant te\u{17C}, i jeszcze w rurce
        Marzn\u{119}, trzymam r\u{119}ce w kurtce
        Da\u{142}nie, to nie hajs te par\u{119} st\xf3w spi\u{119}tych w recepturce
        Pal\u{119}, p\u{142}onie, nalej, podnie\u{15B}
        Mam je obie, w telefonie
        Bajek troch\u{119}, k\u{142}amie dobrze
        Wstan\u{119} mo\u{17C}e, wal\u{119}, koniec
        Nie ma si\u{119} co przejmowa\u{107}, my\u{15B}li coraz zdrowsze
        Paranoje produkuje coraz s\u{142}odsze g\u{142}owa
        Auta coraz m\u{142}odsze, dupy coraz dro\u{17C}sze
        Narkotyki coraz nowsze, coraz kr\xf3tsza jest po nocce doba`},{type:"Hook",index:3,text:`[Oskar & Steez] (x2) <br />
        Dwie dyscyplinarne
        I wchodz\u{105} czarne
        Mordo si\u{119} szarpn\u{119}
        Obstawiam skrajne
        Braciszku, jest pretekst
        Bo krzywo na b\u{119}bnie
        Ryjku lornet\u{119}
        Bo gramy sp\xf3\u{142}dzielnie`},{src:"https://www.youtube.com/embed/vFMaAGU59b4?rel=0"}],f=[{type:"verse",index:1,text:`[Oskar] <br />
        No, siemasz. Siemasz, \u{141}u... a. Cz\u{142}owieku, bajkowy nastr\xf3j, pij\u{119} kawk\u{119}, wiesz, my\u{15B}l\u{119} - zadzwoni\u{119}. Aha, a o czym? 
        Nie, nie s\u{142}ysza\u{142}em o tym. Nikt mi nie powiedzia\u{142}, jak to m\xf3wi\u{105}. Aha, to pogadamy, to mi co\u{15B} wi\u{119}cej opowiesz. No, to cze\u{15B}\u{107}
        `},{src:""}],B=[{type:"verse",index:1,text:`[Oskar] <br />
        Mia\u{142}em \u{17C}ycie ale nie mam, mia\u{142}em w g\u{142}owie spowied\u{17A}, tak\u{17C}e nie mam
        Mia\u{142}em \u{17C}\u{105}dze, par\u{119} spojrze\u{144} mord pchaj\u{105}cych mnie do d\u{105}\u{17C}e\u{144}, \u{17C}adnej nie mam
        Mia\u{142}em rzeczy do zrobienia, par\u{119} spraw do zarzucenia sobie dalej miewam
        Mia\u{142}em tobie co\u{15B} powiedzie\u{107}, ale nie mam
        Bo cz\u{142}owieka na kt\xf3rym polega\u{107} mog\u{142}em nagle nie znam
        Mia\u{142}em skrawek sumienia, my\u{15B}la\u{142}em, \u{17C}e mam ich, a tylko zna\u{142}em imienia
        Mia\u{142}em sw\xf3j stres, sw\xf3j gniew, chwa\u{142}\u{119}, cierpienia
        Warto\u{15B}ci si\u{119} jak olej w aucie wymienia
        `},{type:"chours",index:2,text:`[Oskar] <br />
        Widz\u{119} lepiej kiedy s\u{142}o\u{144}ce zasz\u{142}o za horyzont
        Robi\u{119} rzeczy, kt\xf3re mnie tak bardzo, bardzo brzydz\u{105}
        Daj mi co\u{15B}, ja przepierdol\u{119} \u{142}atwo ka\u{17C}d\u{105} ilo\u{15B}\u{107}
        Dzi\u{15B} mam tylko j\u{105} i jej cierpliwo\u{15B}\u{107}
        I wiem p\xf3ki tu stoj\u{119}, \u{17C}e to nie, jeszcze nie koniec
        A spi\u{119}cie puszcza me d\u{142}onie, a na gleb\u{119} lec\u{105} naboje
        I ledwo muskam jej skronie, my\u{15B}li jej goni\u{105} te moje
        Brudna krew, brudne magnolie
        G\u{119}sty tlen dusi oboje
        
        Mia\u{142}em sny i nie mam, mia\u{142}em pasj\u{119}, mia\u{142}em, jednak nie mam
        Mia\u{142}em swe marzenia, mia\u{142}em rany, mia\u{142}em plany
        Chore stany, dzi\u{15B} ich nie pami\u{119}tam niemal
        Mia\u{142}em cz\u{142}owiecze\u{144}stwa przejaw, mia\u{142}em dar
        Mia\u{142}em fart nic teraz niewart
        Mia\u{142}em si\u{142}\u{119}, mia\u{142}em tajemnic\u{119} i zw\u{105}tpienia
        Dzi\u{15B} przed gadk\u{105} z samym sob\u{105} stwierdzam - jeba\u{107}
        Mia\u{142}em my\u{15B}li, czas by je pozbiera\u{107}
        Mia\u{142}em pustk\u{119}, j\u{105} wype\u{142}nia\u{142}y wspomnienia
        Widz\u{119} w lustrze refleks mojej twarzy, to nie ja
        To co mia\u{142}em w\u{142}a\u{15B}nie si\u{119} sma\u{17C}y w p\u{142}omieniach`},{type:"verse",index:3,text:`[Oskar] <br />
        Widz\u{119} lepiej kiedy s\u{142}o\u{144}ce zasz\u{142}o za horyzont
        Robi\u{119} rzeczy, kt\xf3re mnie tak bardzo, bardzo brzydz\u{105}
        Daj mi co\u{15B}, ja przepierdol\u{119} \u{142}atwo ka\u{17C}d\u{105} ilo\u{15B}\u{107}
        Dzi\u{15B} mam tylko j\u{105} i jej cierpliwo\u{15B}\u{107}
        I wiem p\xf3ki tu stoj\u{119}, \u{17C}e to nie, jeszcze nie koniec
        A spi\u{119}cie puszcza me d\u{142}onie, a na gleb\u{119} lec\u{105} naboje
        I ledwo muskam jej skronie, my\u{15B}li jej goni\u{105} te moje
        Brudna krew, brudne magnolie
        G\u{119}sty tlen dusi oboje`},{src:""}],C=[{type:"verse",index:1,text:`[Steez] <br />
        No, elo. I co, masz to? A jak ogarn\u{105}\u{142}e\u{15B}? 
        Aa, tu na torze te\u{17C} wszystko jest. Ta, trzeba tylko wiedzie\u{107} jak szuka\u{107}. 
        A\u{17C} tyle? Ty, \u{17C}eby\u{15B} Ty wr\xf3ci\u{142} z tej wycieczki, materia\u{142} mamy jeszcze do sko\u{144}czenia. 
        No, dobra, jak co\u{15B} to dzwo\u{144}. B\u{119}d\u{119} pod telefonem
        `},{src:""}],T=[{type:"chours",index:1,text:`[Oskar] (x2) <br />
        Pok\xf3j tonie w brudach, za szyb\u{105} jest l\xf3d, na lustrze fant
        Nie wiem kto zblad\u{142}, bo nie ma tu w sumie lamp
        Nie ufam nam, nie ufam nawet sobie sam
        Nabijam i jaram, a jak \u{17C}ar nie dzia\u{142}a drugi ogie\u{144} mam
        `},{type:"verse",index:2,text:`[Oskar] <br />
        Okno si\u{119} odsuwa, ja odczuwam
        \u{17C}e \u{15B}ciany staj\u{105} si\u{119} jak milion okr\u{105}g\u{142}e
        Skupiam wzrok ci\u{105}gle, a parkiet sk\u{142}ada si\u{119} w blond Giocond\u{119}
        Ona gnie si\u{119} jak promile mord\u{119}
        Wyci\u{105}ga sztylet, by wbi\u{107} mi w \u{17C}o\u{142}\u{105}dek
        Siadam na fotel, a dopiero potem my\u{15B}l\u{119}, \u{17C}e na chwil\u{119} usi\u{105}d\u{119}
        Ooo, sufit jest niebem, sztos, diamenty \u{15B}niegiem
        Co? Pu\u{15B}ci\u{107} si\u{119} biegiem? Ej, dajcie mi jeden
        I p\u{142}acze, si\u{119} \u{15B}miej\u{119}, i bawi\u{119} si\u{119} z cieniem
        Ucisk mdleje, od w\xf3dy? Nie wiem
        I nagle ten pok\xf3j, ten brud
        A na ogniu topnieje ten l\xf3d jakbym powr\xf3ci\u{142} z piekie\u{142}`},{type:"chours",index:3,text:`[Oskar] (x2) <br />
        Pok\xf3j tonie w brudach, za szyb\u{105} jest l\xf3d, na lustrze fant
        Nie wiem kto zblad\u{142}, bo nie ma tu w sumie lamp
        Nie kocham nas, nie kocham nawet siebie sam
        Nabijam i jaram, a jak \u{17C}ar nie dzia\u{142}a drugi jeszcze mam`},{type:"verse",index:4,text:`[Oskar] <br />
        Pok\xf3j si\u{119} rozje\u{17C}d\u{17C}a, czuj\u{119} r\u{105}k ci\u{119}\u{17C}ar
        Padam jak brzoza, \u{15B}ciany szamie po\u{17C}ar
        K\u{142}uje alert jak sonar w lustrze jej twarz
        Cho\u{107} j\u{105} pozna\u{142}em wczoraj
        Kiedy do niej co\u{15B} wo\u{142}am
        Zwierciad\u{142}o wci\u{105}ga me d\u{142}onie jak smo\u{142}a
        Jej twarz z lustra myj\u{105} fale z morza
        A moj\u{105} g\u{142}ow\u{119} muska aureola
        Gdzie si\u{119} kr\u{119}c\u{105} butle i pe\u{142}zn\u{105} pliki
        A jak kr\u{119}c\u{105}c lustrem, rozkr\u{119}cam pok\xf3j
        Jak typy strucle na trybiki
        I kr\u{119}ci si\u{119} \u{15B}wiat, m\u{119}cz\u{105} krzyki
        Co\u{15B} j\u{119}czy? To ja, przed tym lustrem zbitym
        I nagle ten pok\xf3j wraca
        Obskurne \u{15B}ciany, a na grzybie \u{17C}\xf3\u{142}te graffiti`},{type:"chours",index:5,text:`[Oskar] (x2) <br />
        Pok\xf3j tonie w brudach, za szyb\u{105} jest l\xf3d, na lustrze fant
        Nie wiem kto zblad\u{142}, bo nie ma tu w sumie lamp
        Nie szanuj\u{119} nas, nie szanuj\u{119} nawet siebie sam
        Nabijam i jaram, a jak \u{17C}ar nie dzia\u{142}a drugi przecie\u{17C} mam`},{type:"verse",index:6,text:`[Oskar] <br />
        \u{15A}ciana odp\u{142}ywa ja odkrywam, \u{17C}e nie ma \u{15B}ciany zosta\u{142}y plamy
        Plamy w kszta\u{142}cie ludzkich twarzy, przeze mnie oszukanych
        Na glebie dywany, toccat\u{119} D minor graj\u{105} nam organy
        Moje oblicze to odbicie w ich ga\u{142}kach ze szk\u{142}a odlanych
        Ich \u{15B}miech mroczny, ja w strachu oczy odbijaj\u{105} si\u{119} jak kauczuk
        To skraj dachu ja jak na kacu
        Skoczy\u{107}? Pokaza\u{107} \u{15B}wiatu?
        I biegn\u{119} w miejscu, koniec, do piachu
        Groby, kwiaty, p\u{119}tla czasu i gdy ju\u{17C} mam do\u{15B}\u{107} kazamat\xf3w
        Wracaj\u{105} brudne \u{15B}ciany i zerwany brzeg plakatu`},{src:"https://www.youtube.com/embed/vOMV9fjrtC8?rel=0"}],M=[{type:"verse",index:1,text:`[Oskar] <br />
        To jest naprawd\u{119} g\u{142}upie, s\u{142}owa jak nab\xf3j w spluwie
        Sentecje mam w lufie i zamiast strza\u{142}u m\xf3wi\u{119}
        Ko\u{144}cz\u{105}c kolejn\u{105} k\u{142}\xf3tni\u{119}, w otwartej ranie d\u{142}ubi\u{119}
        I zabijam zn\xf3w, co bywa w sumie dla mnie jak ja drugie, o
        Nigdy teraz zawsze p\xf3\u{17A}niej, przez to przesta\u{107} jak\u{17C}e trudniej
        Zupe\u{142}nie oblepi\u{142} brud mnie i ton\u{119} w udawanej dumie
        Siebie odnajduje w w\xf3dzie, s\u{142}owa p\u{142}yn\u{105}, a ich nurt rwie
        P\xf3\u{142}noc juz wybi\u{142}a u mnie, a \u{142}zy lec\u{105} na po\u{142}udnie
        `},{type:"chours",index:2,text:`[Oskar] <br />
        Dotknij, zobacz blizny
        Ja rozrywam to jak listy
        Niepotrzebne s\u{142}owa s\u{105} jak iskry
        P\xf3\u{17A}niejsza cisza to kanistry
        `},{type:"verse",index:3,text:`[Oskar] <br />
        Stoj\u{119} sam przed tob\u{105} nagi
        Nigdy nie pomy\u{15B}la\u{142}bym, \u{17C}e b\u{119}d\u{105} sob\u{105} gardzi\u{107}
        Wym\xf3wi\u{142}bym przepraszam, ale mnie to s\u{142}owo d\u{142}awi
        Proste sprawy mog\u{105} rani\u{107}, proste zdania mog\u{105} zabi\u{107}`},{src:""}],O=[{type:"chours",index:1,text:`[Oskar] <br />
        Jestem zdyscyplinowany, mam siln\u{105} wol\u{119}
        Wi\u{119}c si\u{119} o przysz\u{142}o\u{15B}\u{107} nie martwi\u{119}
        Mam zaci\u{119}cie, na\u{142}og\xf3w si\u{119} wyrzec potrafi\u{119}
        Bo znam rzeczy hierarchi\u{119}
        Mam gruby plan, samorealizacja da mi gratyfikacj\u{119}
        Ale to jutro, jutro, bo jest tyle rzeczy
        Kt\xf3re musz\u{119} zrobi\u{107} najpierw        
        `},{type:"verse",index:2,text:`[Oskar] <br />
        S\u{105}, panny, kt\xf3re musz\u{105} si\u{119} dowiedzie\u{107} jaki jestem fajny
        Typy, kt\xf3rzy musz\u{105} si\u{119} dowiedzie\u{107} jaki jestem wa\u{17C}ny
        Pieni\u{105}dze, kt\xf3re musz\u{105} si\u{119} dowiedzie\u{107} jaki jestem stratny
        Ludzie, kt\xf3rzy musz\u{105} si\u{119} dowiedzie\u{107} jaki jestem bogaty
        Rzeczy, kt\xf3re musz\u{119} kupi\u{107}, \u{17C}eby sprawdzi\u{107} jakie s\u{105} naprawd\u{119}
        Narkotyki, kt\xf3re musz\u{119} wzi\u{105}\u{107}, \u{17C}eby sprawdzi\u{107} czy dam rad\u{119}
        Filmy, kt\xf3re musz\u{105} zosta\u{107} przeze mnie obejrzane
        W\xf3dki, kt\xf3re musz\u{105} zosta\u{107} wypite o sz\xf3stej nad ranem
        Pizze, kt\xf3re musz\u{105} zosta\u{107} wszamane z mordami na podw\xf3rku
        Ustawki, kt\xf3re musz\u{105} doj\u{15B}\u{107} do skutku, najbardziej te na murku
        Dyskusje, kt\xf3re musz\u{105} doj\u{15B}\u{107} do granic absurdu
        Auta na Allegro, kt\xf3re musz\u{105} mi pozwoli\u{107} na przekroczenie dwudziestu czterech punkt\xf3w
        Rysunki, kt\xf3re musz\u{119} zrobi\u{107} w zeszycie na marginesie
        D\u{142}onie, kt\xf3re musz\u{119} u\u{15B}cisn\u{105}\u{107}, by sprawdzi\u{107} si\u{119} w biznesie
        Zakr\u{119}ty, kt\xf3re musz\u{119} wybra\u{107}, by wiedzie\u{107} co ka\u{17C}dy przyniesie
        Zrobi\u{119} to wszystko i zajm\u{119} si\u{119} sob\u{105}, wreszcie, bo przecie\u{17C}`},{type:"chours",index:3,text:`[Oskar] <br />
        Jestem zdyscyplinowany, mam siln\u{105} wol\u{119}
        Wi\u{119}c si\u{119} o przysz\u{142}o\u{15B}\u{107} nie martwi\u{119}
        Mam zaci\u{119}ci\u{119}, na\u{142}og\xf3w si\u{119} wyrzec potrafi\u{119}
        Bo znam rzeczy hierarchi\u{119}
        Mam gruby plan, samorealizacja da mi gratyfikacj\u{119}
        Ale to jutro, jutro, bo jest tyle rzeczy
        Kt\xf3re musz\u{119} zrobi\u{107} najpierw`},{type:"verse",index:4,text:`[Oskar] <br />
        S\u{105}, problemy, kt\xf3re musz\u{105} sprawdzi\u{107}, czy z nich wybrn\u{119}
        Wyroki, kt\xf3re musz\u{105} sprawdzi\u{107} czy je kiwn\u{119}
        Kwoty, kt\xf3re musz\u{105} sprawdzi\u{107} za ile z\u{142}ami\u{119} wytyczne
        \u{15B}rodki, kt\xf3re musz\u{105} wstrzykn\u{105}\u{107}, \u{17C}eby sprawdzi\u{107} czy poprawiaj\u{105} warunki fizyczne
        Rolexy, kt\xf3re musz\u{105} pokaza\u{107}, \u{17C}e czas leci wolniej
        Perfumy, kt\xf3re musz\u{105} maskowa\u{107} jej zapach, by zapobiec wojnie
        Garnitury, kt\xf3re musz\u{105} nosi\u{107}, by wygl\u{105}da\u{107} modnie
        I lustra, kt\xf3re musz\u{105} odbi\u{107} moj\u{105} twarz, bym umia\u{142} patrze\u{107} na nich z g\xf3ry ch\u{142}odniej
        Lili\u{119}, kt\xf3re musz\u{105} zosta\u{107} spuszczone przez ni\u{105} w kibel
        Blizny, kt\xf3re musz\u{105} zosta\u{107}, gdy rozpierdalam szyb\u{119}
        Naboje, kt\xf3rych musz\u{105} u\u{17C}y\u{107}, niewa\u{17C}ny kaliber
        Religie, kt\xf3re musz\u{119} sprawdzi\u{107}, by wiedzie\u{107}, kt\xf3re piek\u{142}o jest najmniej uci\u{105}\u{17C}liwe
        Czerwone, kt\xf3re musz\u{105} mnie stopowa\u{107} jak tych obok
        Buty, kt\xf3re musz\u{119} mie\u{107}, by sprawdzi\u{107}, kiedy zetrze si\u{119} logo
        Maski, kt\xf3re musz\u{119} w\u{142}o\u{17C}y\u{107}, \u{17C}eby sprawdzi\u{107} jak to jest by\u{107} tob\u{105}
        Zrobi\u{119} to wszystko i na mi\u{142}o\u{15B}\u{107} bogom, wtedy zajm\u{119} si\u{119} sob\u{105}`},{type:"chours",index:5,text:`[Oskar] <br />
        Jestem zdyscyplinowany, mam siln\u{105} wol\u{119}
        Wi\u{119}c si\u{119} o przysz\u{142}o\u{15B}\u{107} nie martwi\u{119}
        Mam zaci\u{119}ci\u{119}, na\u{142}og\xf3w si\u{119} wyrzec potrafi\u{119}
        Bo znam rzeczy hierarchi\u{119}
        Mam gruby plan, samorealizacja da mi gratyfikacj\u{119}
        Ale to jutro, jutro, bo jest tyle rzeczy
        Kt\xf3re musz\u{119} zrobi\u{107} najpierw`},{src:"https://www.youtube.com/embed/Hha6pwTpDSk?rel=0"}],L=[{type:"verse",index:1,text:`[Oskar] <br />
        Czekaj, Ty, bo jebni\u{119}ta dzwoni. Ty, zobacz. 
        Jeszcze od siostry dzwoni, my\u{15B}li, \u{17C}e ja nie wiem co to za numer jest. Halo? No i co? 
        No, a co ci m\xf3wi\u{142}em? \u{17B}eby\u{15B} dzwoni\u{142}a, ci m\xf3wi\u{142}em. Jeszcze od siostry dzwonisz, a widzisz, a ja mam jej numer. 
        Chcia\u{142}a\u{15B} by\u{107} cwana, a zosta\u{142}a\u{15B} wy... I mi nie przerywaj. Dobra, roz\u{142}\u{105}czam si\u{119}, roz\u{142}\u{105}czam si\u{119}
        `},{src:""}],N=[{type:"chours",index:1,text:`[Oskar] <br />
        P\u{142}yn\u{105} dni, godziny, minuty, sekundy
        I coraz wi\u{119}cej mi\u{119}dzy nami jest r\xf3\u{17C}nic
        A ty zamykasz si\u{119} sama w swej pr\xf3\u{17C}ni
        \u{15A}ni\u{105}c swoje p\xf3\u{142}sny
        
        Ten pok\xf3j jest dla nas zbyt duszny
        Jest noc, a snop \u{15B}wiat\u{142}a jest dla nas zbyt brudny
        Na ko\u{144}cu tej drogi jest \u{15B}ciana, zawr\xf3\u{107}my
        Nie pomo\u{17C}e ju\u{17C} nic       
        `},{type:"verse",index:2,text:`[Oskar] <br />
        Chcia\u{142}bym przesta\u{107} ucieka\u{107}, biec zn\xf3w za czym\u{15B}
        Ale nie potrafi\u{119}, a ty nigdy nie zrozumiesz ca\u{142}kiem
        Nic wi\u{119}cej nie musz\u{119} t\u{142}umaczy\u{107}
        Gdybym musia\u{142}, to wszystko to musia\u{142}oby mniej znaczy\u{107}
        Wtedy wykop dziur\u{119} zapomnienia i mnie w niej zasyp
        Gdy mnie przestanie budzi\u{107} tw\xf3j wrzask, a ciebie m\xf3j kac
        I nie b\u{119}dzie ju\u{17C} szans, bo zbyt du\u{17C}y b\u{119}dzie tw\xf3j strach
        I zostanie tw\xf3j p\u{142}acz, bo to ostatni ju\u{17C} raz
        Pami\u{119}taj, \u{17C}e czas kt\xf3ry prze\u{17C}yli\u{15B}my razem jest ju\u{17C} nasz`},{type:"chours",index:3,text:`[Oskar] <br />
        Godziny, minuty, sekundy
        I coraz wi\u{119}cej mi\u{119}dzy nami jest r\xf3\u{17C}nic
        A ty zamykasz si\u{119} sama w swej pr\xf3\u{17C}ni
        \u{15A}ni\u{105}c swoje p\xf3\u{142}sny
        
        Ten pok\xf3j jest dla nas zbyt duszny
        Jest noc, a snop \u{15B}wiat\u{142}a jest dla nas zbyt brudny
        Na ko\u{144}cu tej drogi jest \u{15B}ciana, zawr\xf3\u{107}my
        Nie pomo\u{17C}e ju\u{17C} nic`},{src:""}],A=[{type:"verse",index:1,text:`[Oskar] <br />
        Wybra\u{142}e\u{15B}, wi\u{119}c \u{17C}yj
        Pracuj, si\u{119} spe\u{142}niaj, miej cel
        Marzenia, przyjaci\xf3\u{142}, b\u{142}\u{119}dy pope\u{142}niaj, miej rodzin\u{119}
        Cierpienia, nie miej hajsu, sad\u{17A} drzewa
        We\u{17A} kredyt, sp\u{142}a\u{107} kredyt, nie miej czasu
        Biegaj, sko\u{144}cz studia, miej dziewczyn\u{119}
        We\u{17A} \u{15B}lub, miej c\xf3rk\u{119}, miej k\u{142}\xf3tni\u{119}
        We\u{17A} rozw\xf3d, o\u{17C}e\u{144} si\u{119} ponownie
        Miej dw\xf3jk\u{119} i znowu oddaj jej dom
        Mercedesa, lod\xf3wk\u{119} i rozs\u{105}dek i sukces
        A niech mieszka z tym chujkiem
        Pij w\xf3dk\u{119}, \u{107}paj troch\u{119}
        Zabaw si\u{119}, proste
        Weneryczne zapalenie, nabaw si\u{119}, jest ostre
        Miej kace, melan\u{17C}e, powroty nocne
        Tra\u{107} zdrowie, miej k\u{142}opoty, tra\u{107} prac\u{119}, pieni\u{105}dze
        Zdob\u{105}d\u{17A} szacunek, fortun\u{119}, stabilno\u{15B}\u{107}, przysz\u{142}o\u{15B}\u{107}
        B\u{105}d\u{17A} wierny, odwied\u{17A} \u{15B}wiat, odwied\u{17A} kasyno, aj
        Blisko, jedz zdrowo, \u{17C}yj d\u{142}ugo
        Pij wino, uwa\u{17C}aj gdy \u{15B}lisko
        Niech ci\u{119} reanimuj\u{105}, ty umrzyj
        Pomimo to wszystko     
        `},{src:""}],S=[{type:"verse",index:1,text:`[Oskar]
        By\u{142}em po\u{15B}r\xf3d rozbitych szyb i klatek zat\u{119}ch\u{142}ych
        Ma\u{142}olatek walni\u{119}tych, ich matek nami\u{119}tnych
        Atmosfer napi\u{119}tych, ruch\xf3w szale\u{144}czych
        Lokali zast\u{119}pczych, zrzut\xf3w pami\u{119}tnych
        Klin\xf3w zbawiennych, wyrzut\xf3w wzajemnych
        Ekip szlachetnych, d\u{142}ug\xf3w zaleg\u{142}ych
        \u{15A}rodk\xf3w nasennych, klub\xf3w tandetnych
        Mord zapadni\u{119}tych, strup\xf3w zakrzep\u{142}ych
        
        Po\u{15B}r\xf3d ma\u{142}ych piersi, marnych pensji, pi\u{119}kna w\xf3zk\xf3w
        Tanich lekcji, rannych sesji, kebab kuskus
        Lepszych wersji, cwanych dup, ich ust retuszu
        Wielkich \u{17A}renic, starych szlug\xf3w, w trumnie trup\xf3w
        Kart srebrnych, aut, benzyn, d\u{142}ugich delir
        Bram, dzielnic, rad cennych, brudnych melin
        Samar pe\u{142}nych chemii, z gard\u{142}a wydzielin
        Kilku popelin, z kt\xf3rych bym si\u{119} chcia\u{142} wybieli\u{107}
        Sn\xf3w na jawie, p\u{142}aczu, zmarnowanych szans na kacu
        Steryd\xf3w w igle, zwid\xf3w, migren, hajsu w materacu
        Nocnych zwi\u{105}zk\xf3w, dowod\xf3w, wniosk\xf3w, s\u{105}d\xf3w, strachu, papug
        Cug\xf3w, goudy, czub\xf3w, strat kontaktu, braku fakt\xf3w
        Po\u{15B}r\xf3d mi\u{142}o\u{15B}ci do niej, \u{17C}eby j\u{105} przesta\u{107} kocha\u{107}
        Po\u{15B}r\xf3d tlenu, kt\xf3ry ch\u{142}on\u{119}, \u{17C}eby go przesta\u{107} wci\u{105}ga\u{107}
        Po\u{15B}r\xf3d ludzi, kt\xf3rych krzywdz\u{119}, by od nich przesta\u{107} \u{17C}\u{105}da\u{107}
        Posr\xf3d reszty, kt\xf3r\u{105} widz\u{119}, by j\u{105} przesta\u{107} ogl\u{105}da\u{107}
        `},{src:""}],v=[n.length,r.length,s.length,c.length,z.length,m.length,y.length,d.length,k.length,l.length,w.length,j.length,p.length,b.length,x.length,h.length,g.length,f.length,B.length,C.length,T.length,M.length,O.length,L.length,N.length,A.length,S.length];document.querySelector("#verse-heading"),document.querySelector("#verse"),document.querySelector("#chours-heading"),document.querySelector("#chours"),console.log(`ilosc zwrotek + refren:  ${n.length}`);let H=document.querySelector("#lirycs-wrapper"),W=n.length,P=document.getElementById("track-list"),I=0,R=document.querySelector("#background");P.addEventListener("click",function(){let e=t;I=0,document.querySelector("#lirycs-wrapper").innerHTML="",H.style.display="block",R.classList.add("bg-blur");for(let i=0;i<W;i++){let o=document.createElement("h4");function u(){H.appendChild(o)}o.id="verse-heading",o.classList.add("verseInfoClass");let t=document.createElement("p");function a(){H.appendChild(t)}t.id="verse",t.setAttribute("title","wykonawca oskar"),t.classList.add("verseClass");let W=document.querySelector("#iframe-yt-song");switch(e){case"styl_sportowy":++I<=v[0]-1?(t.innerHTML=n[i].text,o.innerHTML=n[i].type,W.src=n[v[0]-1].src,u(),a()):console.log("You cannot display next time the same song BRO! "+I);break;case"macki_meduzy":++I<=v[1]-1?(t.innerHTML=r[i].text,o.innerHTML=r[i].type,W.src=r[v[1]-1].src,u(),a()):console.log("You cannot display next time the same song BRO! "+I);break;case"v8":++I<=v[2]-1?(t.innerHTML=s[i].text,o.innerHTML=s[i].type,W.src=s[v[2]-1].src,u(),a()):console.log("You cannot display next time the same song BRO! "+I);break;case"miedzynarodowa_1":++I<=v[3]-1?(t.innerHTML=c[i].text,o.innerHTML=c[i].type,W.src=c[v[3]-1].src,u(),a()):console.log("You cannot display next time the same song BRO! "+I);break;case"lody_wloskie":++I<=v[4]-1?(t.innerHTML=z[i].text,o.innerHTML=z[i].type,W.src=z[v[4]-1].src,u(),a()):console.log("You cannot display next time the same song BRO! "+I);break;case"gry_losowe":++I<=v[5]-1?(t.innerHTML=m[i].text,o.innerHTML=m[i].type,W.src=m[v[5]-1].src,u(),a()):console.log("You cannot display next time the same song BRO! "+I);break;case"miedzynarodowa_2":++I<=v[6]-1?(t.innerHTML=y[i].text,o.innerHTML=y[i].type,W.src=y[v[6]-1].src,u(),a()):console.log("You cannot display next time the same song BRO! "+I);break;case"na_audiencji":++I<=v[7]-1?(t.innerHTML=d[i].text,o.innerHTML=d[i].type,W.src=d[v[7]-1].src,u(),a()):console.log("You cannot display next time the same song BRO! "+I);break;case"fair_play":++I<=v[8]-1?(t.innerHTML=k[i].text,o.innerHTML=k[i].type,W.src=k[v[8]-1].src,u(),a()):console.log("You cannot display next time the same song BRO! "+I);break;case"rewia":++I<=v[9]-1?(t.innerHTML=l[i].text,o.innerHTML=l[i].type,W.src=l[v[9]-1].src,u(),a()):console.log("You cannot display next time the same song BRO! "+I);break;case"krajowa_1":++I<=v[10]-1?(t.innerHTML=w[i].text,o.innerHTML=w[i].type,W.src=w[v[10]-1].src,u(),a()):console.log("You cannot display next time the same song BRO! "+I);break;case"gramazeria":++I<=v[11]-1?(t.innerHTML=j[i].text,o.innerHTML=j[i].type,W.src=j[v[11]-1].src,u(),a()):console.log("You cannot display next time the same song BRO! "+I);break;case"flary":++I<=v[12]-1?(t.innerHTML=p[i].text,o.innerHTML=p[i].type,W.src=p[v[12]-1].src,u(),a()):console.log("You cannot display next time the same song BRO! "+I);break;case"kluby_i_restauracje":++I<=v[13]-1?(t.innerHTML=b[i].text,o.innerHTML=b[i].type,W.src=b[v[13]-1].src,u(),a()):console.log("You cannot display next time the same song BRO! "+I);break;case"puerto_rico":++I<=v[14]-1?(t.innerHTML=x[i].text,o.innerHTML=x[i].type,W.src=x[v[14]-1].src,u(),a()):console.log("You cannot display next time the same song BRO! "+I);break;case"miedzynarodowa_3":++I<=v[15]-1?(t.innerHTML=h[i].text,o.innerHTML=h[i].type,W.src=h[v[15]-1].src,u(),a()):console.log("You cannot display next time the same song BRO! "+I);break;case"hazard":++I<=v[16]-1?(t.innerHTML=g[i].text,o.innerHTML=g[i].type,W.src=g[v[16]-1].src,u(),a()):console.log("You cannot display next time the same song BRO! "+I);break;case"miedzynarodowa_4":++I<=v[17]-1?(t.innerHTML=f[i].text,o.innerHTML=f[i].type,W.src=f[v[17]-1].src,u(),a()):console.log("You cannot display next time the same song BRO! "+I);break;case"magnolie":++I<=v[18]-1?(t.innerHTML=B[i].text,o.innerHTML=B[i].type,W.src=B[v[18]-1].src,u(),a()):console.log("You cannot display next time the same song BRO! "+I);break;case"miedzynarodowa_5":++I<=v[19]-1?(t.innerHTML=C[i].text,o.innerHTML=C[i].type,W.src=C[v[19]-1].src,u(),a()):console.log("You cannot display next time the same song BRO! "+I);break;case"golden":++I<=v[20]-1?(t.innerHTML=T[i].text,o.innerHTML=T[i].type,W.src=T[v[20]-1].src,u(),a()):console.log("You cannot display next time the same song BRO! "+I);break;case"iskry":++I<=v[21]-1?(t.innerHTML=M[i].text,o.innerHTML=M[i].type,W.src=M[v[21]-1].src,u(),a()):console.log("You cannot display next time the same song BRO! "+I);break;case"vanitas":++I<=v[22]-1?(t.innerHTML=O[i].text,o.innerHTML=O[i].type,W.src=O[v[22]-1].src,u(),a()):console.log("You cannot display next time the same song BRO! "+I);break;case"krajowa_2":++I<=v[23]-1?(t.innerHTML=L[i].text,o.innerHTML=L[i].type,W.src=L[v[23]-1].src,u(),a()):console.log("You cannot display next time the same song BRO! "+I);break;case"polsny":++I<=v[24]-1?(t.innerHTML=N[i].text,o.innerHTML=N[i].type,W.src=N[v[24]-1].src,u(),a()):console.log("You cannot display next time the same song BRO! "+I);break;case"sick_boy":++I<=v[25]-1?(t.innerHTML=A[i].text,o.innerHTML=A[i].type,W.src=A[v[25]-1].src,u(),a()):console.log("You cannot display next time the same song BRO! "+I);break;case"bylem_tam":++I<=v[26]-1?(t.innerHTML=S[i].text,o.innerHTML=S[i].type,W.src=S[v[26]-1].src,u(),a()):console.log("You cannot display next time the same song BRO! "+I)}}}),document.querySelector("#iframe-yt-song");let J=0;document.querySelector(".mobile-menu").addEventListener("click",function(){console.log("menu button clikc: "+ ++J),1==J?(document.querySelector(".navbar").style.opacity=1,document.querySelector(".navbar").style.left="0vw",document.querySelector(".mobile-menu").classList.toggle("mobile-menu-animation-in")):(document.querySelector(".mobile-menu").classList.toggle("mobile-menu-animation-out"),document.querySelector(".navbar").style.opacity=1,document.querySelector(".navbar").style.left="100%",J=0)}),document.querySelector("#track-list").addEventListener("click",function(){document.querySelector("#track-title").classList.add("animation1"),document.querySelector("#track-author").classList.add("animation1"),document.querySelector("#track-time").classList.add("animation1"),window.innerWidth<1240&&(document.querySelector(".navbar").style.left="100%")});
//# sourceMappingURL=PRO8L3eM.82ad853a.js.map
