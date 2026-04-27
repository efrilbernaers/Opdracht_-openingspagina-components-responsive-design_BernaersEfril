"use client";
import Link from "next/link";
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
        Leidt AI-slop tot de dood van socialemedia?
      </h1>

      {/* Intro */}
      <p className="text-lg text-gray-700">
       Sociale media slibben de jongste paar maanden angstwekkend sneldicht met AI-slop: 
       video’s met mensen die niet bestaan engebeurtenissen die zich niet hebben voorgedaan. 
       Blijven we daar in2026 naar kijken?
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
          src="/Leidt AI-slop tot de dood van sociale media_ _ De Standaard.jpeg"
          alt="Schattige katten gegenereerd door AI"
          width={800}
          height={450}
          className="rounded-lg"
        />
        <figcaption className="text-sm text-gray-500 mt-2">
          Schattige katten, gegenereerd door AI. © YouTube
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
         De grootste technologische doorbraak van 2025, of toch die met de zichtbaarste gevolgen, 
        zijn de videogenerators als Sora en Veo, waardoor iedereen nu in enkele seconden een realistisch 
        uitziende video kan maken over elk onderwerp. De grote vraag voor 2026 is:willen we daarnaar blijven kijken?
        </p>

        <p>
         Dat we zoveel AI-slop te zien krijgen de jongste weken, heeft niet alleen te maken met deenorm toegenomen productie, 
         maar ook met wat algoritmes ons aanbevelen. Met keuzesdie bedrijven als Meta, Google en Bytedance (Tiktok) voor ons maken, dus. 
         Als je op Youtube een nieuwe account aanmaakt, dan is 20 procent van de video’s die je wordenaangeboden van AI afkomstig.
        </p>

        <p>
          Mark Zuckerberg heeft het in oktober letterlijk gezegd: AI-gegenereerde inhoud
          betekent een nieuw tijdperk in sociale media.
          Tijdens het eerste tijdperk deelden we ons eigen leven op Facebook en Instagram,
          zei hij. Maar al snel bleek dat we ons liever vergapen aan de levens van
          celebrity’s en influencers – tijdperk twee. En nu komt er een stortvloed van
          AI-video’s aan.
        </p>

        <p>
          Zuckerberg stelt het voor alsof die AI-inhoud er gewoon bovenop komt. Maar laten we
          wel wezen: hoe meer AI in onze feed, hoe minder video’s we bekijken van professionele
          makers en van onze eigen vrienden.Nochtans hadden sociale media echt wel eenbestaansreden, 
          namelijk dat we geïnteresseerd zijn in wat er gebeurt met echte mensen.
          Zijn we in 2026 dan zo veranderd?
        </p>

        <p>
          Volgens Zuckerberg wel. Hij denkt dat dit is wat we écht willen: boven op de algoritmes die 
          ons altijd precies tonen wat we graag zien, komen nu de videogenerators die daar zonderenige beperking 
          eindeloos meer van kunnen genereren. Nog meer kattenvideo’s,onmogelijke stunts, spectaculaire taarten of gewelddadige pranks, 
          of wat ook je ding magzijn (elders op het internet krijgen pornoliefhebbers nu video’s te zien die almaar meertonen van wat ze 
          willen, ook als dat anatomisch totaal onmogelijk is).
        </p>

        <p>
          Die beelden zijn niet echt. Die mensen bestaan niet, die dingen zijn nooit gebeurd.
          Maar Zuckerberg gaat ervan uit dat dat er niet toe doet: u wilt kattenvideo’s, u krijgt
          kattenvideo’s die nog veel schattiger zijn dan in het echt.
        </p>

        <p>
          Misschien. Maar zelf ben ik de afgelopen twee maanden uiterst gevoelig geworden voorAI-slop: 
          vanaf het moment dat ik de indruk krijg dat een video AI-gegenereerd is, klik ik’m weg. Net zoals ik 
          stop met een tekst te lezen zodra ik vermoed dat ChatGPT devoornaamste auteur was.
        </p>

        <p>
          De eerste paar weken was AI-video nieuw en verrassend, dat wel. En nu nog is het somslachen geblazen met 
          sommige van die Sora-filmpjes (ook al mijd ik ze). Er is heus wel eenplaats voor AI-video, bijvoorbeeld om 
          speciale effecten te produceren in films. En er zijncreatieve mensen die toffe, vaak heel grappige video’s 
          maken die zonder AI onbetaalbaarduur zouden zijn.
        </p>

        <p>
          Maar horen ze thuis op Instagram en Facebook? Dat waren toch ‘sociale’ media, niet waar? Wat precies is de sociale 
          dimensie van kijken naar een eindeloze stroom van door eencomputer gegenereerde video’s, aanbevolen door een algoritme? 
          In die zin zien we nu dedood van sociale media. Al lijkt Zuckerberg daar niet echt van wakker te liggen.
        </p>

        <p>
          Technocraat Dominique Deckmyn is elke vrijdag te horen in de podcast ‘Bits & atomen’.
        </p>

      </div>

<div className="flex gap-6 items-start">

  {/* LINKER KANT */}
  <div className="flex-1 space-y-6">

    <div>
      <p className="font-semibold text-lg">Lees ook</p>

      <Link
        href="/page2"
        className="text-gray-700 text-sm hover:underline hover:text-gray-900 transition"
      >
        Vibecoding: zo maak je in enkele minuten je eigen games, websites en apps met AI
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
      src="/Vibecoding - zo maak je in enkele minuten je eigen games, websites en apps met AI.jpeg"
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
