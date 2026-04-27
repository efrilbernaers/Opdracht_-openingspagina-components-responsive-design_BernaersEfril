"use client";
import Link from "next/dist/client/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-6 space-y-6">

      {/* Rubriek */}
      <p className="text-sm text-gray-500 uppercase tracking-wide">
        DE HELPDESK
      </p>

      {/* Titel */}
      <h1 className="text-3xl md:text-4xl font-bold leading-tight">
        Vibecoding: zo maak je in enkele minuten 
        je eigen games, websites en apps met AI
      </h1>

      {/* Intro */}
      <p className="text-lg text-gray-700">
       Waarom zou je een app gebruiken die geld kost of een abonnement
       vereist, en toch niet helemaal doet wat je nodig hebt? Met vibecoding
       maak je een app of website op maat. Of liever: AI maakt die voor je.
      </p>

<div className="flex items-center gap-3">

  {/* Profielfoto */}
  <div className="w-10 h-10 relative">
    <Image
      src="/Was het verzet van Dar-moment van Silicon Valley_ _ De Standaard.jpeg"
      alt="Auteur foto"
      fill
      className="rounded-full object-cover"
    />
  </div>

  {/* Auteur + datum */}
  <div className="text-sm text-gray-500">
    <p className="font-medium">Dominique Deckmyn</p>
    <p>2 januari 2026 om 23:59</p>
  </div>

</div>

      {/* Afbeelding */}
      <figure>
        <Image
          src="/Vibecoding - zo maak je in enkele minuten je eigen games, websites en apps met AI.jpeg"
          alt="eigen games, websites en apps maken met AI"
          width={800}
          height={450}
          className="rounded-lg"
        />
        <figcaption className="text-sm text-gray-500 mt-2">
          © De Standaard
        </figcaption>
      </figure>

<div className="flex gap-4 mt-3">

  <button
    onClick={() => alert("Audio komt hier 🎧")}
    className="px-4 py-2 bg-gray-100 rounded-full text-sm 
               hover:bg-blue-600 hover:text-white transition"
  >
    🎧 Luisteren
  </button>

  <button
    onClick={() => {
      navigator.clipboard.writeText(window.location.href);
      alert("Link gekopieerd!");
    }}
    className="px-4 py-2 bg-gray-100 rounded-full text-sm 
               hover:bg-green-600 hover:text-white transition"
  >
    🔗 Delen
  </button>

</div>

      {/* Artikel */}
      <div className="space-y-4 text-gray-800 leading-relaxed">

        <p>
         Het is nog maar januari, maar ‘vibecoding’, ofwel coderen met AI, maakt al een goede 
         kans om het woord van 2026 te worden. AI gebruiken om je eigen apps en websites te
         bouwen is eigenlijk al twee jaar in opmars. Maar de jongste weken lijkt het fenomeen in
         een stroomversnelling te zijn gekomen. Onder meer omdat de nieuwste versies van
         Claude, Gemini en ChatGPT zo betrouwbaar kunnen programmeren, dat je er zonder
         aardige voorkennis aan zou kunnen beginnen.
        </p>

        <p>
         Maar is dat zo? Wel: ja en nee. Ja: een simpel programma, zoals een spelletje dat je in je
         browser kunt spelen, dat kun je nu werkelijk in een-twee-drie maken met alleen maar
         een prompt. Denk aan “maak een spel waarbij je cocktails moet mixen”. Al helpt het wel
         om eerst een paar handigheidjes te leren, wat we hieronder zullen doen.
        </p>

        <p>
          Wil je iets ambitieuzers ontwikkelen, zoals de gezinskalender-app die ik vorige week
          bouwde, dan moet je wel een beetje weten waar je mee bezig bent. Je hoeR niet te
          kunnen programmeren, je hoeR zelfs geen programmacode te kunnen lezen, wel moet
          je nadenken over wat je precies wilt bouwen en welke componenten daarvoor nodig
          zijn. Maar hier is het goede nieuws: je kunt klein beginnen en heel snel je grenzen
          verleggen.
        </p>

        <h2 className="text-2xl font-semibold mt-8">
          Een eenvoudig spel
        </h2>

        <p>
          Hoe klein? Wel, laten we beginnen met zo’n spelletje. Open een chatbot naar keuze:
          Gemini, ChatGPT, Copilot, Claude. De gratis versie volstaat. En vraag om een simpel
          spel. Ik probeerde bijvoorbeeld: “Schrijf een spel waarbij een dinosaurus een bal moet
          koppen.”
        </p>

    {/* Afbeelding */}
      <figure>
        <Image
          src="/Vibecoding - zo maak je in enkele minuten je eigen games, websites en apps met AI - De Standaard.jpeg"
          alt="eigen games, websites en apps maken met AI"
          width={800}
          height={450}
          className="rounded-lg"
        />
        <figcaption className="text-sm text-gray-500 mt-2">
          Dit spel in Javascript is gegenereerd door Gemini met één prompt: “Maak een spel waarbij een t-rex een bal moet koppen.”
        </figcaption>
      </figure>

        <p>
          Zowel Gemini als ChatGPT doet dat meestal in een paar seconden. Beide produceren
          dan een hoop code in een combinatie van HTML (de opmaaktaal van het web) en de
          programmeertaal Javascript. Wat doe je met die code? Die bewaar je in een document
          met de extensie ‘.html’, bijvoorbeeld ‘Mijnspelletje.html’ op je computer.
        </p>

       <p>
        Op een Windows-pc:  
       </p>   

    <ol className="list-decimal pl-6 space-y-2 text-gray-700">
         <li>
            Klik op de code die de chatbot genereerde (meestal op het ‘copy’-knopje bovenaan of onderaan)
         </li>

         <li>
            Plak de code in een programma als Windows Kladblok of Macintosh TextEdit
         </li>

         <li>
           Bewaar het bestand met een naam als ‘dinospel.html’
         </li>

         <li>
           Klik op dinospel.html
         </li>

         <li>
            Het spel opent in je standaardbrowser. En spelen maar!
         </li>
    </ol>

        <p>
          Als je MicrosoR Kladblok gebruikt (dat op elke Windows-pc geïnstalleerd zou moeten
          zijn), moet je wel op één ding letten: het programma heeR de neiging om elk document
          te bewaren met de extensie “.txt”. Hou dus in de gaten dat hij er niet stiekem
          dinospel.html.txt van heeR gemaakt.
        </p>

        <p>
          Ik vibecode het liefst op mijn laptop, maar het kan ook op een smartphone. Wil ik het
          programma dat ik op mijn pc maakte op mijn smartphone spelen, dan kan ik het
          bijvoorbeeld naar mijzelf e-mailen en op mijn smartphone de bijlage bewaren.
        </p>

        <p>
          Lukt dat allemaal elke keer? Nee, maar meestal wel, eigenlijk. Soms begrijpt de chatbot
          je verkeerd, en moet je wat meer preciseren: “Schrijf het programma in Javascript en zet
          alles in één bestand.” En je kunt ook aanwijzingen geven over de visuele stijl (‘laat het
          eruitzien als een 8-bit computerspel’), de bediening (‘met de pijltjestoetsen’) of het
          spelverloop.
        </p>

        <p>
          Vaak zit de eerste versie niet helemaal goed: er wordt geen score bijgehouden,
          bijvoorbeeld, of de voorwerpen in het spel bewegen te snel of juist te traag. Dan doe je
          een tweede ronde: je vraagt aan ChatGPT of Gemini om de nodige aanpassingen. En
          hop: een verbeterde versie verschijnt, die je op dezelfde manier op je harde schijf
          bewaart.
        </p>

        <p>
          Op die manier krijg je meestal spelletjes die sterk geïnspireerd zijn op wat al bestaat.
          Maar het is zeker ook mogelijk om meer originele spelletjes te bouwen, als je een meer
          gedetailleerde beschrijving geeR. Stap voor stap uitbreiden met extra functies of
          effecten (geluid!) kan ook.
        </p>

        <p>
          Zo bouwde ik in vijf stappen een ‘cocktailspel’, waarbij je in enkele seconden een
          cocktail moet mixen op basis van een recept. De eerste versie was wat saai, dus ik
          voegde er opties als ‘schudden’ en ‘parasolletje’ aan toe.
        </p>

      {/* Afbeelding */}
      <figure>
        <Image
          src="/Vibecoding - zo maak je in enkele minuten je eigen games, websites d.jpeg"
          alt="eigen games, websites en apps maken met AI"
          width={800}
          height={450}
          className="rounded-lg"
        />
        <figcaption className="text-sm text-gray-500 mt-2">
          ChatGPT schreef dit spel in een aantal stappen, na telkens een kleine bijsturing.
        </figcaption>
      </figure>

        <p>
          Elke keer dat een programma een foutmelding geeR, kleef je die foutmelding in
          ChatGPT met de vraag om die fout te repareren. Dat lukt vaak meteen, soms moet je
          een paar keer proberen.
        </p>

       <h2 className="text-2xl font-semibold mt-8">
          Ambitieuzer: een gezinskalender
        </h2>

        <p>
          Na een tijdje durfde ik iets meer complexe apps aan. Terwijl de AI voor gradsche apps
          zoals spelletjes en websites meestal spontaan naar HTML en Javascript zal grijpen, kom
          je voor apps met meer tekst of cijfers eerder bij de programmeertaal Python uit. Dat is
          een prachtige taal om mee aan de slag te gaan, maar je moet wel eerst een werkende
          Python-omgeving op je computer hebben staan. Installeer gratis de recentste versie van
          Python via python.org.
        </p>
        
        <p>
          Wil je iets met Python uitproberen, dan kun je op dezelfde manier te werk gaan als met
          Javascript: ChatGPT of Gemini schrijR de code, je plakt die in Kladblok en bewaart hem
          op je harde schijf – maar nu met de extensie ‘.py’. Om hem uit te voeren, moet je dan,
          vanaf de opdrachtprompt, in de juiste map gaan staan en ‘python mijnprogramma.py’
          intikken. Beetje omslachtig, dus.
        </p>

        <p>
          Voor mijn app Gezinskalender gebruikte ik toch maar Javascript. Het moest een app
          worden voor alle leden van een gezin. Eentje waarin ze elkaars activiteiten zien, maar
          bijvoorbeeld ook kunnen zien wie van de ouders het zoontje op dinsdagavond naar de
          voetbaltraining moet brengen. Ieder gezinslid moet een activiteit kunnen toevoegen.
        </p>

        <p>
          Dat is te ingewikkeld voor een programma van één bestand. De app bestaat dus,
          opnieuw, uit HTML en Javascript. De tabel met alle activiteiten moet toegankelijk zijn
          voor iedereen en moet dus ergens centraal worden bewaard. ChatGPT suggereerde een
          paar opties, ik koos daaruit Supabase, een cloud-database. Om iedereen toegang te
          geven tot dezelfde versie van het programma, heb ik het ‘gehost’ op een site die Vercel
          heet. Op beide sites maakte ik gratis accounts aan. Ik liet me elke stap in detail
          uitleggen door ChatGPT, het lukte zonder dat ik iets moest leren over Vercel of
          Supabase.
        </p>
        
        <p>
          Ik besliste uiteindelijk, alweer op advies van ChatGPT, om mijn programma niet 
          altijd kunt terugkeren naar een eerdere, werkende versie.
        </p>

      {/* Afbeelding */}
      <figure>
        <Image
          src="/Vibecoding - zo maak je in enkele minuten je eigen games, websites en apps met AI - De Standaard3.jpeg"
          alt="eigen games, websites en apps maken met AI"
          width={800}
          height={450}
          className="rounded-lg"
        />
        <figcaption className="text-sm text-gray-500 mt-2">
          Deze gezinskalender draait op smartphone en pc, de gegevens worden in de “cloud” bewaard. De eerste versie werd
          geschreven door ChatGPT, maar de afwerking gebeurde met hulp van ChatGPT Codex.
        </figcaption>
      </figure>

        <p>
          ChatGPT stelde voor eerst een versie te maken met minimale functionaliteit. Die
          bestond al uit een viertal verschillende bestanden die ik telkens, met de juiste naam, in
          dezelfde map moest bewaren. Bij foutmeldingen plakte ik die melding opnieuw in
          ChatGPT, dat een verbeterde versie van de bestanden maakte. Ja, dat kan behoorlijk
          omslachtig worden.
        </p>

        <p>
          Met al dat knippen en plakken was ik zo al snel drie uur bezig. Het resultaat: een
          werkende app, maar wel een die er nogal belabberd uitzag en waar je, bijvoorbeeld, een
          activiteit wel kon toevoegen maar niet kon wissen of wijzigen.
        </p>

        <h2 className="text-2xl font-semibold mt-8">
          Echt agentic werken
        </h2>

        <p>
          Wie verder wil gaan dan dat – zonder zelf te gaan programmeren – moet ‘agentic’ gaan
          werken: met een AI-systeem dat zelfstandig aan de slag gaat en je programmabestanden
          kan zien en zelf kan wijzigen. Dan gaat alles veel sneller en kun je eigenlijk haast alles
          bouwen. Je kunt de werking en de vormgeving eindeloos verdjnen. Maar je moet wel
          een beetje begrijpen waar je mee bezig bent.
        </p>

        <p>
          Je hoort dezer dagen veel over Claude Code, maar ik opteerde voor het gelijkaardige
          ChatGPT Codex. Dat vereist de betaalversie van ChatGPT, ChatGPT Plus (23 euro per
          maand). Codex is een ‘agent’: je geeR nog altijd een instructie via een tekstprompt,
          maar dan gaat de AI zelfstandig verschillende stappen na elkaar zetten en zelf ook eigen
          wijzigingen voorstellen. Je moet alleen nog af en toe op ‘ja’ klikken.
        </p>

        <p>
          Er zijn ook talloze gespecialiseerde vibecoding-instrumenten, zoals Cursor, Replit en
          Lovable. Die laatste twee heb ik vrij uitgebreid uitgeprobeerd, ze werken minstens even
          goed als Codex en hebben een rijkere interface. Het probleem is dat je er doorgaans
          niet in slaagt om een app helemaal af te werken met de gratis versie van Replit of
          Lovable, dus je moet betalen – en dan betaal ik liever voor ChatGPT Plus of Gemini Pro,
          zodat ik én kan vibecoden én een betere chatbot ter beschikking heb.
        </p>

        <p>
          Mijn Gezinskalender besloot ik dus verder af te werken met ChatGPT Codex. Dat kan
          gewoon op het web, maar ik installeerde het programma ChatGPT Codex CLI. Zo had
          Codex rechtstreeks toegang tot de bestanden op mijn pc. En, simpel gezegd: wat toen
          gebeurde, lijkt wel toverij. Stap voor stap begon Codex mijn programma te verbeteren,
          op basis van mijn suggesties maar ook op eigen initiatief. Twintig minuten later leek de
          app eigenlijk klaar om in de app stores van Apple en Google aan te bieden (behalve dat
          het, strikt gesproken, geen echte app maar een Progressive Web App is: je kunt haar
          bewaren met een icoontje op je smartphone-scherm, maar je downloadt haar niet via
          de appstore).
        </p>

        <p>
          In totaal heeR mijn afgewerkte Gezinskalender mij een halve dag werk gekost. Maar in
          die tijd heb ik enorm veel geleerd en bijvoorbeeld ook accounts op Supabase en Vercel
          gemaakt. Ik weet zeker dat ik een app van deze complexiteit een volgende keer in de
          helft van die tijd in elkaar gestoken krijg.
        </p>

        <h2 className="text-2xl font-semibold mt-8">
          Voorkennis
        </h2>

        <p>
          Nog een tip voor wie zijn weg zoekt in vibecoding: in plaats van Kladblok te gebruiken,
          heb ik intussen een ander gratis programma van MicrosoR geïnstalleerd, VS Code. Met
          Codex, VS Code en Github, soms nog gecombineerd met Supabase en Vercel, kun je
          haast alles bouwen. Letterlijk zonder een lijn code te schrijven, of zelfs maar te lezen.
          Tussen mijn eerste Javascript-game en de apps die ik nu met Codex bouw, moest ik wel
          heel wat kennis opbouwen over al die componenten. Ik schat dat ik daar twee of drie
          dagen over heb gedaan.
        </p>        

        <p>
          Hoe groot je voorkennis is, maakt een verschil. Ik heb in mijn jeugd wat leren
          programmeren, in de programmeertaal Basic (op een Sinclair ZX-81, heus!). Net
          voldoende om een beetje te begrijpen wat er aan het gebeuren is als die chatbot code
          genereert. Dat heeR mij zeker geholpen, maar mensen zonder enige
          programmeerkennis slagen erin om gelijkaardige apps te vibecoden.
        </p> 

        <p>
          Nog iets: agentic programmeren evolueert momenteel razendsnel. Wat zes maanden
          geleden uren werk kostte, komt nu in één keer uit ChatGPT gerold. Iets vrij complex als
          mijn Gezinskalender duurt nu enkele uren, maar kun je over een paar weken of
          maanden waarschijnlijk met twee-drie prompts genereren
        </p> 
      </div>

<div className="flex gap-6 items-start">

  {/* LINKER KANT */}
  <div className="flex-1 space-y-6">

    <div>
      <p className="font-semibold text-lg">Lees ook</p>

      <Link
        href="/page1"
        className="text-gray-700 text-sm hover:underline hover:text-gray-900 transition"
      >
        Leidt AI-slop tot de dood van socialemedia?
      </Link>
    </div>

    <div>
      <p className="font-semibold text-lg">Lees ook</p>

      <Link
        href="/page3"
        className="text-gray-700 text-sm hover:underline hover:text-gray-900 transition"
      >
        Was het verzet van Dario Amodei tegenminister Hegseth het “Ik ben Spartacus!”-moment van Silicon Valley?
      </Link>
    </div>

  </div>

  {/* RECHTER KANT */}
  <div className="flex flex-col gap-4">

    <img
      src="/Leidt AI-slop tot de dood van sociale media_ _ De Standaard.jpeg"
      alt="Afbeelding 1"
      className="w-40 h-18 object-cover rounded-lg"
    />

    <img
      src="/Was het verzet van Dario Amodei tegen minister Hegseth het ÔÇ£Ik ben Spartacus!ÔÇØ-moment van Silicon Valley_ _ De Standaard.jpeg"
      alt="Afbeelding 2"
      className="w-40 h-18 object-cover rounded-lg"
    />

  </div>

</div>

<div className="mt-12 border-t pt-4 text-sm text-gray-500">

  <a
    href="/contact"
    className="hover:underline hover:text-gray-800 transition"
  >
    Fout gezien? Meld het ons hier
  </a>

</div>

    </article>
  );
}
