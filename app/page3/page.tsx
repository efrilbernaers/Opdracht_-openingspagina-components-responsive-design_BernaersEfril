"use client";
import Link from "next/dist/client/link";
import Image from "next/image";


export default function AboutPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-6 space-y-6">

      {/* Rubriek */}
      <p className="text-sm text-gray-500 uppercase tracking-wide">
        DE TECHNOCRAAT
      </p>

      {/* Titel */}
      <h1 className="text-3xl md:text-4xl font-bold leading-tight">
        Was het verzet van Dario Amodei tegenminister Hegseth het “Ik ben Spartacus!”-moment van Silicon Valley?
      </h1>

      {/* Intro */}
      <p className="text-lg text-gray-700">
       Het verzet van Dario Amodei tegen minister van “Oorlog” Pete Hegseth,en de rechtszaak waar dat nu op uitdraait, 
       lijkt steeds meer op eenkeerpunt. Al keert Silicon Valley nooit meer terug naar vroeger.
      </p>

<div className="flex items-center gap-3">

  {/* Profielfoto */}
  <div className="w-10 h-10 relative">
      <img
        src="/Was het verzet van Dar-moment van Silicon Valley_ _ De Standaard.jpeg"
        alt="Auteur foto"
        className="rounded-full object-cover w-full h-full"
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
          src="/Was het verzet van Dario Amodei tegen minister Hegseth het ÔÇ£Ik ben Spartacus!ÔÇØ-moment van Silicon Valley_ _ De Standaard.jpeg"
          alt="Schattige katten gegenereerd door AI"
          width={800}
          height={450}
          className="rounded-lg"
        />
        <figcaption className="text-sm text-gray-500 mt-2">
          Dario Amodei neemt heel nadrukkelijk een ethisch standpunt in over AI.
          © getty
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
         Big tech schaarde zich deze week haast eenstemmig achter Dario Amodei, de bevlogen entegendraadse oprichter van 
         Anthropic die de confrontatie met Maga (Make America GreatAgain) aandurft. Wie had dat zien aankomen? Ze doen dat weliswaar 
         niet via grotepublieke verklaringen. En ze hoeden er zich voor om Trump frontaal aan te vallen. Dekritiek zit, in advocatentaal 
         omzwachteld, in een aantal zogenoemde amicus briefs,documenten waarin deze bedrijven hun steun uitspreken voor Anthropic in zijn 
         juridischestrijd tegen het Pentagon.
        </p>

        <p>
         Toch staat er rake taal in. De strafmaatregel die minister van “Oorlog” Pete HegsethAnthropic oplegt, namelijk het uitroepen tot 
         “risico voor de toeleveringsketen”, creëert“een cultuur van dwang, medeplichtigheid en stilte waarbij het publiek begrijpt dat 
         de regering alle middelen waarover het beschikt zal gebruiken om te straffen wie hetaandurft het oneens te zijn”. En dat staat  
         in een document dat – indirect – ondertekend isdoor Amazon, Google en Apple (via de belangengroep Chamber of Progress).
        </p>

        <p>
          Is dit nu het “Ik ben Spartacus!’” moment van Silicon Valley? Nee, daarvoor is het allemaalveel te voorzichtig. Chamber of Progress 
          argumenteert vooral dat Anthropics recht op vrijemeningsuiting wordt geschonden. Het is Anthropics goed recht om ethische bezwaren 
          teformuleren, zeggen ze. Microsoft gaat, opmerkelijk, net iets verder: het spreekt zelfsvoorzichtige steun uit voor die ethische 
          bezwaren, met heel wat mitsen en maren.
        </p>

        <p>
          Opkomen voor het recht op vrije meningsuiting, daarmee steek je in de VS je nek niet tever uit. Trump en zijn Maga-beweging hebben 
          van dat begrip natuurlijk wel een heel eigeninvulling: jaren hebben ze luid geklaagd dat big tech hun eigen meningsuiting beknot,
           nuverdragen ze amper tegenspraak. Maar in wat bredere conservatieve kringen is er best nogwel steun voor het idee dat iedereen zijn 
           zegje mag hebben.
        </p>

        <p>
          Heeft big tech deze week echt een bocht genomen? Waarschijnlijk wel. Of dat is vanwegehet inspirerende voorbeeld van Amodei, 
          of omdat ze voelen dat de politieke wind stilaanvan richting verandert: moeilijk te zeggen. Maar hoe dan ook: het wordt niet 
          meer zoals vroeger. We zullen van deze ceo’s de komende jaren waarschijnlijk weinig politiekegevoelige uitspraken horen.
        </p>

        <p>
          Wanneer deze ceo’s zich in het verleden van hun progressiefste kant lieten zien, was dat(zoveel is ondertussen duidelijk) 
          zelden vanuit een diepe overtuiging. Het was eerderomdat veel van hun waardevolste werknemers dat op prijs stellen. Zo kregen 
          dewerknemers van Google het bedrijf ooit zo ver dat het een uiterst lucratief contract metDefensie liet vallen.
        </p>

        <p>
          Tegenwoordig hebben de werknemers van Silicon Valley veel minder in de pap te brokken,en dat merk je. Met één uitzondering, 
          weliswaar: de paar honderd AI-experts die de meestgeavanceerde LLM’s kunnen bouwen. Die zijn zo in trek, en zo rijk, dat ze 
          wél nog de luxehebben om volgens hun overtuiging te handelen.
        </p>

        <p>
          Daarom is het waarschijnlijk geen toeval dat de technologiebedrijven net nu en in dezezaak beslissen hun rug te rechten: 
          Amodei neemt heel nadrukkelijk en moedig eenethisch standpunt in over AI. Dat is bij die topontwikkelaars erg goed ontvangen.
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
        href="/page2"
        className="text-gray-700 text-sm hover:underline hover:text-gray-900 transition"
      >
       Vibecoding: zo maak je in enkele minuten je eigen games, websites en apps met AI
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
      src="/Vibecoding - zo maak je in enkele minuten je eigen games, websites en apps met AI.jpeg"
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
