//CAROUSEL*************************************************************
let items = document.querySelectorAll(".carousel .carousel-item");

items.forEach((el) => {
  const minPerSlide = 4;
  let next = el.nextElementSibling;
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      next = items[0];
    }
    let cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});

//EVENTS***************************************************************************************************************8
const eventsContainer = document.getElementById("events");
const eventsData = [
  {
    id: 1,
    image: "images/covers/Cover1.jpg",
    name: "Summer in the City Festival",
    artist: "Sam Smith",
    location: "Piata Constitutiei",
    city: "Bucuresti",
    date: "2023-06-04",
    hour: "17:00",
    type: "muzica",
    description:
      "Sam Smith este, fără îndoială, unul dintre cei mai mari artiști britanici ai tuturor timpurilor. Cu un Oscar și patru premii Grammy, Sam a primit un American Music Award și un Glob de Aur. Un artist complex ale cărui melodii au adunat miliarde de vizualizări pe platformele de streaming, vine pentru prima dată la București! Pe scena din Piata Constitutiei la Festivalul Summer in the City vor rasuna I'm not the only one, Too Good at Goodbyes sau Dancing with a Stranger. Cea mai recentă colaborare a sa cu Kim Petras pe piesa Unholy, i-a adus deja primul loc în topurile din Statele Unite, piesa urmând să fie prezentă pe următorul său album, Gloria, album care va fi lansat în 2023 și de pe care vom auzi câteva piese la București.",
  },
  {
    id: 2,
    image: "images/covers/Cover2.jpg",
    name: "Summer in the City Festival",
    artist: "Robbie Williams",
    location: "Piata Constitutiei",
    city: "Bucuresti",
    date: "2023-06-03",
    hour: "21:00",
    type: "muzica",
    description:
      "Cel mai mare entertainer al erei sale, Robbie Williams revine la București după show-ul sold out din aceeași locație din 2015. Hituri precum Let Me Entertain You, Angels, Millenium, She's the One, I’ve Been Expecting You precum și multe altele vor fi cantate din nou în Piața Constituției într-un concert full length. Robbie deține și Guiness World Record pentru 1,6 milioane de bilete vândute într-o singură zi, pe lângă faptul că șase dintre albumele sale fac parte din top 100 cele mai bine vândute în Marea Britanie.",
  },
  {
    id: 3,
    image: "images/covers/Cover3.jpg",
    name: "Hollywood Vampires",
    artist: "",
    location: "Romexpo",
    city: "Bucuresti",
    date: "2023-06-08",
    hour: "19:00",
    type: "muzica",
    description:
      "Supergrupul din care fac parte Alice Cooper, Johnny Depp si Joe Perry (Aerosmith) revine la Bucuresti pe 8 iunie 2023 la Romexpo, in aer liber. Trupa promite fanilor rock-ului de alta data un concert pe care nu il vor uita prea curand!",
  },
  {
    id: 4,
    image: "images/covers/Cover4.jpg",
    name: "BRAND MINDS",
    artist: "",
    location: "Romexpo",
    city: "Bucuresti",
    date: "2023-06-02",
    hour: "12:30",
    type: "altele",
    description:
      "BRAND MINDS este evenimentul de business al anului din Europa Centrala si de Est. Ediția din 2023 are loc la Romexpo, în perioada 2 și 3 iunie, unde sunt așteptați 7000 de CEO’s, Brand Manageri, antreprenori, investitori, Marketing Managers si HR’s din peste 70 de companii de top.",
  },
  {
    id: 5,
    image: "images/covers/Cover5.jpg",
    name: "Faust de Johann Wolfgang von Goethe",
    artist: "",
    location: "Teatrul Infinit",
    city: "Bucuresti",
    date: "2023-03-06",
    hour: "19:30",
    type: "teatru",
    description:
      "Faust de J.W.Goethe este un spectacol impresionant, o comoară a culturii care ne sugerează soluții pentru o viață înțeleaptă prin cunoașterea spirituală. Fiind si azi de o actualitate zguduitoare, marea tragedie Faust este considerata, in traditie, ca fiind o drama a cunoasterii, Dr. Faustus fiind reprezentantul omului de la renastere incoace, deci inclusiv al omului modern, cu setea lui, etern nesaturata, de cunoastere.",
  },
  {
    id: 6,
    image: "images/covers/Cover6.jpg",
    name: "Cocoșatul de la Notre-Dame",
    location: "Teatrul National",
    artist: "Opera Maghiara",
    city: "Bucuresti",
    date: "2023-03-06",
    hour: "16:30",
    type: "altele",
    description:
      "Spectacol extraordinar de balet, având ca subiect romanul Notre-Dame de Paris de Victor Hugo (1802-1885) poet, dramaturg și romancier francez. Este un spectacol grandios, care aduce pentru prima dată împreună pe aceeași scenă 3 ansambluri profesioniste de balet: ANSAMBLUL DE BALET AL OPEREI MAGHIARE DE STAT DIN CLUJ-NAPOCA, ANSAMBLUL DE BALET AL TEATRO D’OPERA ITALIANA și ANSAMBLUL DE BALET AL OPEREI VOX, însumând peste 50 de balerini profesioniști din țară și din străinătate, soliști balerini care dansează în teatre importante din Europa.",
  },
  {
    id: 7,
    image: "images/covers/Cover7.jpg",
    name: "Micul Infern",
    artist: "",
    city: "Bucuresti",
    location: "TNB",
    date: "2023-04-10",
    hour: "19:30",
    type: "teatru",
    description:
      "O comedie despre iadul conjugal, așa cum numim, cei mai mulți dintre noi, instituția matrimonială, un spectacol care propune publicului contemporan - pentru care o căsnicie de peste patru decenii poate părea curată utopie -un elogiu al vieții de familie.",
  },
  {
    id: 8,
    image: "images/covers/Cover8.jpg",
    name: "ARTmania Festival 2023",
    artist: "",
    city: "Sibiu",
    location: "Piata Mare",
    date: "2023-03-06",
    hour: "18:30",
    type: "altele",
    description:
      "Ediția a șaisprezecea a festivalului ARTmania va avea loc între 28-30 iulie 2023, în Piața Mare din Sibiu. Printre trupele de anul acesta se vor afla Porcupine Tree, Emperor, Samael, Pain of Salvation, Wardruna, Haken, TesseracT, Port Noir și Vulture Industries. Cum v-am obișnuit, noaptea aprindem centrul Sibiului, iar ziua o petrecem savant la film, la muzeu și la expoziții.",
  },
  {
    id: 9,
    image: "images/covers/Cover9.jpg",
    name: "Bucharest Gaming Week",
    artist: "",
    city: "Bucuresti",
    location: "Palatul Parlamentului",
    date: "2023-10-14",
    hour: "14:30",
    type: "altele",
    description:
      "Evenimentul central al Bucharest Gaming Week 2023, cel mai mare eveniment de gaming din România, are loc pe 14 și 15 octombrie 2023! La Palatul Parlamentului, cei mai populari youtuberi organizează super competiții cu multe premii, gamerii descoperă cele mai noi jocuri lansate iar cosplay-ul revine la #BGW2023 cu o super competiție.",
  },
  {
    id: 10,
    image: "images/covers/Cover10.jpg",
    name: "Art Safari - editia 11",
    artist: "",
    city: "Bucuresti",
    location: "Palatul Dacia-România",
    date: "2023-05-14",
    hour: "14:30",
    type: "altele",
    description:
      "Din 2014 până în prezent, deschidem bijuterii ascunse ale Bucureștiului și le readucem la viață prin artă, pentru oameni. Art Safari poposește acum în centrul Capitalei, în Palatul Dacia-România, ridicat în 1882. Am transformat Palatul într-un hotspot cultural în care iubești să-ți petreci timpul. 4 expoziții de artă românească și internațională, instalații imersive, o librărie și o cafenea.Tururi ghidate, Night Tours, evenimente interactive și educative. Aducem sub același acoperiș arta prestigioasă a trecutului și arta fresh a prezentului, arta internațională din marile muzee ale lumii și arta românească îndrăgită, pictură, sculptură, instalațiile imersive și new media. Suntem mai mult decât un muzeu.",
  },
  {
    id: 11,
    image: "images/covers/Cover11.jpg",
    name: "Calugarita feministra si Misoginul modernist",
    artist: "",
    city: "Bucuresti",
    location: "Teatrul Infinit",
    date: "2023-02-26",
    hour: "19:30",
    type: "teatru",
    description:
      "Spectacolul Călugărița feministă si Misoginul modernist este o comedie spectaculoasă, adaptare după Ursul de A. P. Cehov. Universul lui Cehov este fascinant, iar montarea lui Alexandru P. Rusu aduce în contemporaneitate lumea plină de farmec și profunzime a personajelor sale.",
  },
  {
    id: 12,
    image: "images/covers/Cover12.jpg",
    name: "Shaffir",
    artist: "Ari Shaffir",
    city: "Bucuresti",
    location: "Sala Radio București",
    date: "2023-05-13",
    hour: "20:00",
    type: "altele",
    description:
      "Cu un umor ce se revendica de la Sam Kinison, Dave Chapelle si Andrew Dice Clay, artistul american de stand up comedy Ari Shaffir ajunge pentru prima oara la Bucuresti cu un show programat sambata, 13 mai la Sala Radio. Avand descendenti originari din Romania, Ari este cunoscut publicului prin comedy special-urile si emisiunile sale de pe Netflix, Comedy Central sau Youtube dar si in calitate de invitat frecvent al podcasturilor The Joe Rogan Experience, Your Mom’s House al lui Tom Segura sau The Adam Carolla Show.",
  },
  {
    id: 13,
    image: "images/covers/Cover13.jpg",
    name: "NEVERSEA 2023",
    artist: "Salvatore Ganacci",
    location: "Neversea Beach",
    city: "Constanta",
    date: "2023-07-06",
    hour: "21:00",
    type: "muzica",
    description:
      "NEVERSEA Festival te așteaptă să retrăiești visul celei mai mari petreceri de pe malul Mării Negre, unde apusurile de neuitat, vibrația valurilor și muzica artiștilor preferați se împletesc în experiența pe care trebuie să o trăiești. Următoarea aventură de 4 zile va avea loc pe Neversea Beach în Constanța, România, pe 6-9 iulie 2023.",
  },
  {
    id: 14,
    image: "images/covers/Cover14.jpg",
    name: "Concert ZAZ",
    artist: "",
    city: "București",
    location: "Sala Palatului",
    date: "2023-06-11",
    hour: "20:00",
    type: "muzica",
    description:
      "ZAZ şi-a denumit turneul Organique Tour. Și, într-adevăr, melodiile incluse pe lista concertelor sunt organice, aproape de natura. Publicul va putea să simtă şi să vadă imaginea cu totul specială şi unică a cântăreței, să descopere noi fațete ale creativității sale, să se apropie de misterioasa ZAZ.",
  },
  {
    id: 15,
    image: "images/covers/Cover15.jpg",
    name: "Memento",
    artist: "Depeche Mode",
    city: "București",
    location: "Arena Nationala",
    date: "2023-07-26",
    hour: "20:00",
    type: "muzica",
    description:
      "Depeche Mode, incluși în 2020 pe lista Rock & Roll Hall of Fame, au anunțat pe 4 octombrie, în cadrul unei conferințe de presă susținute la Berlin, lansarea unui nou album, urmată de un turneu mondial. Cel de-al cinsprezecelea album de studio Depeche Mode va purta numele de Memento Mori și se va lansa în primăvara lui 2023.",
  },
  {
    id: 16,
    image: "images/covers/Cover16.jpg",
    name: "Trooper",
    artist: "Iron Maiden",
    city: "Cluj-Napoca",
    location: "Hardward Pub",
    date: "2023-05-22",
    hour: "20:00",
    type: "muzica",
    description:
      "În cei 27 de ani de activitate, Trooper a lansat zece albume de studio, a cântat pentru mai mult de 900.000 de oameni în peste 900 de concerte, şi a urcat pe scenă alături de Iron Maiden, Scorpions, Deep Purple, Judas Priest, Whitesnake, Europe, Manowar, Nazareth, WASP, Sepultura, Prodigy.",
  },
  {
    id: 17,
    image: "images/covers/Cover17.jpg",
    name: "Concert Passenger",
    artist: "",
    city: "București",
    location: "Arenele Romane",
    date: "2023-05-09",
    hour: "19:00",
    type: "muzica",
    description:
      "Mike Rosenberg, cunoscut mai mult sub numele sau de scena - PASSENGER, este un cântăreț-compozitor de folk-rock din Brighton, Anglia, ce a castigat un numar impresionant de premii pentru activitatea sa muzicala. Cu toate ca si-a pornit cariera cantand la colturile strazilor din UK, a ajuns in scurt timp sa umple stadioane din toata lumea, dupa ce single-ul Let Her Go s-a clasat pe prima pozitie in topurile din mai multe tari si a atins succesul international, avand acum peste trei miliarde de vizualizari pe YouTube.",
  },
  {
    id: 18,
    image: "images/covers/Cover18.jpg",
    name: "Faith in the Future World Tour",
    artist: "Louis Tomlinson",
    city: "București",
    location: "Arenele Romane",
    date: "2023-09-17",
    hour: "19:00",
    type: "muzica",
    description:
      "Louis William Tomlinson este un cantaret si compozitor englez care a ajuns faimos fiind membru al celebrei trupe One Direction. Louis Tomlinson canta in premiera in Romania pe 17 septembrie la Arenele Romane din Bucuresti, in aer liber. Artistul britanic care a reusit sa bata recorduri dupa recorduri impreuna cu fostii colegi de trupa nu mai are nevoie de nicio prezentare.",
  },
  {
    id: 19,
    image: "images/covers/Cover19.jpg",
    name: "Classix Festival 2023",
    artist: "",
    city: "Iasi",
    location: "Ateneu",
    date: "2023-03-06",
    hour: "13:00",
    type: "altele",
    description:
      "Într-o eră a schimbării constante, urcușurile și coborâșurile vieții ne oferă o altă înfățișare de fiecare dată. Societatea evoluează, artiștii se reinventează, oamenii se adaptează. Ne schimbăm - uneori în bine, alteori nu. Muzica ne însoțește în tot acest periplu al metamorfozei interioare cât și din jurul nostru. Evoluția capătă noi semnificații în funcție de experiențele vieților noastre. 7 zile de festival, 8 concerte, peste 90 de artiști din 17 țări, 68 de masterclass-uri, panel-uri și dezbateri, instalații multimedia și alte evenimente conexe.",
  },
  {
    id: 20,
    image: "images/covers/Cover20.jpg",
    name: "MASSIF 2023",
    artist: "Dimitri Vegas",
    location: "Poiana Brasov Partie",
    city: "Poiana Brasov",
    date: "2023-03-06",
    hour: "18:00",
    type: "muzica",
    description:
      "Massif este o experiență unică și exclusivă pentru această parte a Europei, o preluare completă, adaptată special pentru frumoasa stațiune montană Poiana Brașov.Limitat la o capacitate totală de 12.000 de persoane/zi, Massif te aduce mai aproape de artiștii tăi preferați decât orice alt festival și este asezonat cu zăpadă, pârtii, schi, snowboard, cele mai cool ținute de iarnă, muzică distribuită pe 3 scene principale și 4 scene partenere, producție tematică de festival, rasete si voie buna.",
  },
  {
    id: 21,
    image: "images/covers/Cover21.jpg",
    name: "MAY, BE ROCK",
    artist: "",
    city: "Costinesti",
    location: "White Horse Rock n Roll",
    date: "2023-05-28",
    hour: "18:00",
    type: "altele",
    description:
      "A doua editie a festivalului MAY,BE ROCK isi doreste sa continue spiritul rock în perioada în Costinești si in sufletelor tuturor iubitorilor de gen, așa cum se obișnuia odată. Locația White Horse, așa-zisul ultim bastion al rockerilor din stațiune, ne găzduieste cu bucurie și ne pune la dispoziție curtea generoasă pentru a ne monta scena și primi invitații, ba mai mult, ne promite un after-party în stilul caracteristic cu DJ-ii casei.",
  },
  {
    id: 22,
    image: "images/covers/Cover22.jpg",
    name: "Strauss Orchestra",
    artist: "Andre Rieu",
    city: "Bucuresti",
    location: "Sala Palatului",
    date: "2023-02-28",
    hour: "18:00",
    type: "muzica",
    description:
      "André Rieu este pur și simplu un fenomen muzical ca nimeni altul, un adevărat rege al romantismului, care a vândut peste 40 de milioane de CD-uri și DVD-uri și a fost de 30 de ori pe poziția nr. 1 în topurile din întreaga lume. Împreună cu Johann Strauss Orchestra, alcătuită din 60 de muzicieni (cea mai mare orchestră privată din lume), André a creat o renaștere globală a muzicii de vals, punând în scenă spectacole extravagante pe măsură.",
  },
  {
    id: 23,
    image: "images/covers/Cover23.jpg",
    name: "Courage",
    artist: "Celine Dion",
    location: "Arena Nationala",
    city: "Bucuresti",
    date: "2023-05-11",
    hour: "18:30",
    type: "muzica",
    description:
      "Declarata de multi una dintre cele mai bune voci de care s-a bucurat lumea, cantareata fenomen Celine Dion vine la Bucuresti in cadrul turneului international Courage. Hit-urile de care ne-am indragostit toti vor fi fredonate in prezenta a mii de oameni. Vino si tu sa ne distram impreuna!",
  },
  {
    id: 24,
    image: "images/covers/Cover24.jpg",
    name: "Fool's Night Out",
    artist: "Micutzu",
    city: "Bucuresti",
    location: "Sala Palatului",
    date: "2023-03-11",
    hour: "19:30",
    type: "altele",
    description:
      "Fool's Night Out este un show cu unii dintre cei mai buni și nebuni comedianți: Bordea, Micutzu și Nelu Cortea. Considerati cei mai buni comedianti de la momentul actual, cei 3 vor incerca sa iti faca ziua mai frumoasa, cu cele mai fresh bancuri si cele mai amuzante povesti.",
  },
  {
    id: 25,
    image: "images/covers/Cover25.jpg",
    name: "Untold",
    artist: "Imagine Dragons",
    location: "Cluj Arena",
    city: "Cluj Napoca",
    date: "2023-03-1",
    hour: "21:30",
    type: "muzica",
    description:
      "Recompensată cu un Premiu Grammy, 10 premii Billboard Music Awards, 5 trofee Teen Choice Awards, 3 American Music Awards, 8 premii BMI Pop Music, un trofeu Echo Music, un MTV Video Music Award și un World Music Award, Imagine Dragons a inclus festivalul Untold în turneul mondial pe care îl va susține în 2023. Melodia Radioactive a fost numită de publicația Rolling Stone cel mai mare hit rock din 2012, fiind și piesa cu cele mai multe săptămâni de prezență în clasamentul oficial al Statelor Unite, Billboard Hot 100.",
  },
  {
    id: 26,
    image: "images/covers/Cover26.jpg",
    name: "I Love '90S",
    artist: "N&d",
    city: "Bucuresti",
    location: "One Club",
    date: "2023-03-11",
    hour: "20:30",
    type: "muzica",
    description:
      " Dam timpul inapoi cu 30 de ani si ne distram impreuna pe ritmurile extrem de cunoscute si iubite pe care ne distram la maxim cand eram copii. Trupe ca Sweet Kiss, N&D sau Class te asteapta sa iti amintesti versurile hiturilor lor si sa petreci o seara de vis alaturi de ei.",
  },
  {
    id: 27,
    image: "images/covers/Cover27.jpg",
    name: "Tribute Queen",
    artist: "Lee Jackson",
    city: "Bucuresti",
    location: "Hard Rock Cafe",
    date: "2023-04-07",
    hour: "19:30",
    type: "muzica",
    description:
      "Un show electrizant și legendarele hituri Queen vă vor bucura din nou, pe 7 aprilie, la Hard Rock Cafe. Show-ul tribut îl va avea în prim-plan pe Joseph Lee Jackson, solistul ce redă cu mare fidelitate inflexiunile vocii inegalabilului Freddie Mercury și care aduce în scenă un show cu o coregrafie și costume ce catapultează publicul în lumea magică a unui concert Queen.",
  },
  {
    id: 28,
    image: "images/covers/Cover28.jpg",
    name: "Balade Rock",
    artist: "Cargo",
    city: "Bucuresti",
    location: "Sala Palatului",
    date: "2023-02-26",
    hour: "20:00",
    type: "muzica",
    description:
      "CARGO va invita la Sala Palatului la un eveniment cu totul si cu totul special: Balade Rock! Trupa sarbatoreste 20 de ani de la aparitia megahitului Ploaia si pregateste un playlist dedicat baladelor trupei. Balade rock e probabil cel mai mare eveniment pe care greii rockului românesc îl oferă anul acesta fanilor. Membrii trupei au promis că cei care vor ajunge la Sala Palatului se vor bucura de un setlist complex, care va include de la cele mai cunoscute piese Cargo până la cântece pe care nu le-au mai cântat live de ani de zile.",
  },
  {
    id: 29,
    image: "images/covers/Cover29.jpg",
    name: "Descult in Parc",
    artist: "Mihai Bendeac",
    city: "Bucuresti",
    location: "Teatru de comedie",
    date: "2023-03-06",
    hour: "20:00",
    type: "teatru",
    description:
      "Timp de patru zile, cuplul învață să se confrunte cu provocările obișnuite ale vieții și caută modalități prin care să le trateze cu mai multă lejeritate.Cum ar fi, de exemplu, să alergi desculț prin parc. O comedie nouă, savuroasă, în care te vei întâlni cu actorii Anca Dinicu, Mihai Bendeac, Mihaela Teleoacă, George Mihăiță, Șerban Georgevici, Matei Arvunescu.",
  },
  {
    id: 30,
    image: "images/covers/Cover30.jpg",
    name: "O casa deschisa",
    artist: "Elvira Deatcu",
    city: "Bucuresti",
    location: "Teatru ODEON",
    date: "2023-02-28",
    hour: "19:00",
    type: "teatru",
    description:
      "Teatrul Odeon prezintă în Sala Studio prima premieră a anului 2023, primul spectacol din cele două proiecte câștigătoare ale concursului Tineri regizori, texte contemporane, ediția 2022, „O casă deschisă” de Will Eno, regia și traducerea Teodora Petre, cu Adrian Titieni, Elvira Deatcu, Ioan Batinaș, Ioana Bugarin, Eduard Trifa / Niko Becker.",
  },
];

//Filtrare
const filters = document.querySelectorAll(".filter-btn");
filters.forEach((filter) => {
  filter.addEventListener("click", function (event) {
    event.preventDefault();
    const filterValue = this.dataset.filter;
    for (let i = 0; i < eventsData.length; i++) {
      const event = eventsData[i];
      const eventElements = document.querySelectorAll(".product");
      const eventElement = eventElements[i];
      if (filterValue === "all" || event.type === filterValue) {
        eventElement.style.display = "block";
      } else {
        eventElement.style.display = "none";
      }
    }
  });
});

const buttons = document.querySelectorAll(".details-btn");
buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    document.querySelector(`#eventModal-${i}`).classList.add("show");
    document
      .querySelector(`#eventModal-${i}`)
      .setAttribute("aria-modal", "true");
    document.querySelector(`#eventModal-${i}`).style.display = "block";
  });
});

for (let i = 0; i < eventsData.length; i++) {
  const event = eventsData[i];
  eventsContainer.innerHTML += `
    <div class="product text-center col-lg-3 col-md-6 col-12">
      <img class="img-thumbnail mb-3" src="${event.image}" alt="">
      <button class="btn details-btn d-none" data-toggle="modal" data-target="#eventModal-${i}">Detalii</button>
    </div>              
<!-- Modal -->
    <div class="modal fade" id="eventModal-${i}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
            <h5 class="p-name text-uppercase text-center">${event.artist}</h5>
            <h5 class="p-artist fw-bold text-center">&nbsp;&nbsp;${
              event.name
            }</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          </div>
          <div class="modal-body mt-2">
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-12">
                  <img class="img-thumbnail_modal mb-3" src="${
                    event.image
                  }" alt="">
                 </div>
                <div class="col-lg-8 col-md-8 col-sm-12">
                  <p><i class="bi bi-geo-alt"></i>&nbsp;<span class="text-uppercase fs-6 fw-bold">${
                    event.location
                  }</span></p>
                  <p><i class="bi bi-pin-map-fill"></i>&nbsp;<span class="text-uppercase fs-6 fw-bold">${
                    event.city
                  }</span></p>
                  <p><i class="bi bi-calendar-event"></i>&nbsp;<span class="fw-bold">${new Date(
                    event.date
                  ).toLocaleDateString("ro-RO", {
                    day: "numeric",
                    month: "long",
                  })}</span></p>
                  <p><i class="bi bi-clock"></i>&nbsp;<span>${
                    event.hour
                  }</span></p>
                  <p class="fw-lighter"><i class="bi bi-bookmark-fill"></i>&nbsp;${
                    event.description
                  }</span></p>
                </div>
              </div>
            </div>
          </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-light" data-dismiss="modal">Inchide</button>
        </div>
       </div>
      </div>
    </div>`;
}

/*searchbar*/
const searchInput = document.getElementById("search-item");
let filteredEvents = eventsData;

searchInput.addEventListener("input", (event) => {
  const searchTerm = event.target.value.toLowerCase();
  filteredEvents = eventsData.filter((event) => {
    return (
      event.name.toLowerCase().includes(searchTerm) ||
      event.artist.toLowerCase().includes(searchTerm) ||
      event.city.toLowerCase().includes(searchTerm)
    );
  });
  displayEvents();
});

const displayEvents = () => {
  eventsContainer.innerHTML = "";
  filteredEvents.forEach((event, i) => {
    eventsContainer.innerHTML += `
    <div class="product text-center col-lg-3 col-md-6 col-12">
    <img class="img-thumbnail mb-3" src="${event.image}" alt="">
    <button class="btn details-btn d-none" data-toggle="modal" data-target="#eventModal-${i}">Detalii</button>
  </div>              
  <!-- Modal -->
  <div class="modal fade" id="eventModal-${i}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
          <h5 class="p-name text-uppercase text-center">${event.artist}</h5>
          <h5 class="p-artist fw-bold text-center">&nbsp;&nbsp;${
            event.name
          }</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        </div>
        <div class="modal-body mt-2">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-12">
                <img class="img-thumbnail_modal mb-3" src="${
                  event.image
                }" alt="">
              </div>
              <div class="col-lg-8 col-md-8 col-sm-12">
                <p><i class="bi bi-geo-alt"></i>&nbsp;<span class="text-uppercase fs-6 fw-bold">${
                  event.location
                }</span></p>
                <p><i class="bi bi-pin-map-fill"></i>&nbsp;<span class="text-uppercase fs-6 fw-bold">${
                  event.city
                }</span></p>
                <p><i class="bi bi-calendar-event"></i>&nbsp;<span class="fw-bold">${new Date(
                  event.date
                ).toLocaleDateString("ro-RO", {
                  day: "numeric",
                  month: "long",
                })}</span></p>
                <p><i class="bi bi-alarm"></i>&nbsp;<span>${
                  event.hour
                }</span></p>
                <p class="fw-lighter"><i class="bi bi-bookmark-fill"></i>&nbsp;${
                  event.description
                }</span></p>
              </div>
            </div>
          </div>
        </div>
      <div class="modal-footer">
       <!-- <button type="button" class="btn btn-buy">Cumpara bilet</button>-->
        <button type="button" class="btn btn-light" data-dismiss="modal">Inchide</button>
      </div>
    </div>
    </div>
  </div>`;
  });
};

/*recomandari*/
let marketingDiv = document.querySelector(".marketing");

for (let i = 0; i < eventsData.length; i++) {
  let event = eventsData[i];
  if (event.id >= 7 && event.id <= 12) {
    marketingDiv.innerHTML += `
      <div class="product text-center col-lg-2 col-md-4 col-6 col-sm-12">
      <img class="img-thumbnail_recom mb-3" src="${event.image}" alt="">
      <button class="btn details-btn d-none" data-toggle="modal" data-target="#eventModal-${i}">Detalii</button>
    </div>   
        `;
  }
}

//COUNTDOWN***********************************************************
//crearea unei functii
const countDate = new Date("July 6, 2023 00:00:00").getTime();
// Updateul countdownului
var x = setInterval(function () {
  //datele de azi
  var now = new Date().getTime();
  //distanta dintre azi si data setata
  const gap = countDate - now;

  //calculare
  const textDay = Math.floor(gap / (1000 * 60 * 60 * 24));
  const textHour = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const textMinute = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  const textSecond = Math.floor((gap % (1000 * 60)) / 1000);

  document.getElementById("day").innerHTML = textDay;
  document.getElementById("hour").innerHTML = textHour;
  document.getElementById("minute").innerHTML = textMinute;
  document.getElementById("second").innerHTML = textSecond;
  document.getElementById("demo").innerHTML = "EXPIRAT";

  //expirat
  if (gap < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRAT";
  }
}, 1000);

/*picker */

$(document).ready(function () {
  $("#datepicker")
    .datepicker()
    .on("changeDate", function (e) {
      const selectedDate = e.format("yyyy-mm-dd");
      handleDateChange(selectedDate);
    });

  $("#datepicker").on("input", function () {
    const manualDate = $(this).val();
    if (isValidDate(manualDate)) {
      handleDateChange(manualDate);
    } else {
      $("#eventsTable tbody").empty();
      $("#eventsTable tbody").append(`
        <tr>
          <td colspan="5" class="text-center text-danger">
            Data introdusă nu este validă.
          </td>
        </tr>
      `);
    }
  });

  function isValidDate(dateString) {
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!datePattern.test(dateString)) return false;

    const date = new Date(dateString);
    return (
      date instanceof Date &&
      !isNaN(date.getTime()) &&
      date.toISOString().slice(0, 10) === dateString
    );
  }

  function handleDateChange(selectedDate) {
    $("#eventsTable tbody").empty();
    $("#eventsTable thead").html(`
      <tr>
        <th><i class="bi bi-calendar-check"></i></th>
        <th><i class="bi bi-card-image"></i></th>
        <th><i class="bi bi-bookmark-heart"></i></th>
        <th><i class="bi bi-star"></i></th>
        <th></th>
      </tr>
    `);

    let eventsFound = false;
    for (let i = 0; i < eventsData.length; i++) {
      let event = eventsData[i];
      if (event.date === selectedDate) {
        eventsFound = true;
        $("#eventsTable tbody").append(`<tr>
          <td class="table_data align-middle text-uppercase fw-bold">
            <span class="table_data_day">${new Date(
              event.date
            ).toLocaleDateString("ro-RO", { day: "numeric" })}</span>
            <span class="table_data_month text-uppercase fw-bold">${new Date(
              event.date
            ).toLocaleDateString("ro-RO", { month: "long" })}</span>
          </td>        
          <td><img src="${
            event.image
          }" height="140" width="100" class="image-responsive"></td>
          <td class="align-middle fs-5 ">${event.name}</td>
          <td class="align-middle fs-6 fw-bold table_data_artist">${
            event.artist
          }</td>
          <td class="align-middle text-center">
            <button class="btn table_btn text-uppercase" data-toggle="modal" data-target="#eventModal-${i}">Detalii</button>
          </td>
        </tr>`);
      }
    }

    if (!eventsFound) {
      $("#eventsTable tbody").append(`
        <tr>
          <td colspan="5" class="text-center text-warning">
            Ne pare rău, dar nu sunt evenimente la această dată.
          </td>
        </tr>
      `);
    }
  }
});

/**validare formular */
$.validator.addMethod(
  "lettersonly",
  function (value, element) {
    return this.optional(element) || /^[a-zA-Z]+$/i.test(value);
  },
  "Numele și prenumele pot conține doar litere."
);

$(document).ready(function () {
  $("#form").validate({
    rules: {
      yourName: {
        required: true,
        lettersonly: true,
        minlength: 3,
        maxlength: 15,
      },
      pname: {
        required: true,
        lettersonly: true,
        minlength: 3,
        maxlength: 15,
      },
      email: {
        required: true,
        email: true,
      },
      phone: {
        required: true,
        minlength: 10,
        maxlength: 10,
        digits: true,
      },
      message: {
        required: true,
        minlength: 5,
      },
    },
    messages: {
      yourName: {
        required: "Introduceți numele dvs.",
        minlength: "Numele trebuie sa fie intre 3-15 litere",
        maxlength: "Numele trebuie sa fie intre 3-15 litere",
      },
      pname: {
        required: "Introduceți prenumele dvs.",
        minlength: "Numele trebuie sa fie intre 3-15 litere",
        maxlength: "Numele trebuie sa fie intre 3-15 litere",
      },
      email: {
        required: "Introduceți adresa dvs. de email.",
        email: "Introduceți o adresă de email validă.",
      },
      phone: {
        required: "Please enter your phone number",
        minlength: "Numarul trebuie sa fie mai mare",
        maxlength: "Numarul trebuie sa fie de 10 cifre",
        digits: "Numerele de telefon trebuie sa fie formate doar din cifre",
      },
      message: {
        required: "Introduceți mesajul dvs.",
        minlength: "Introduceti mesajul dvs",
      },
    },
    submitHandler: function (form) {
      var formData = {};
      $(form)
        .find("input, textarea")
        .each(function () {
          formData[this.name] = $(this).val();
        });
      $("#form").append('<p class="text-form">Mesajul dvs a fost trimis</p>');
      console.log(formData);
    },
  });
});
