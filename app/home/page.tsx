import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">

      {/* Intro */}
      <h1 className="text-4xl font-bold">Welkom bij onze artikels</h1>

      <p className="text-lg text-gray-700">
        Welkom op onze website, waar technologie en actualiteit samenkomen.
        Ontdek hoe AI onze sociale media verandert, hoe je zelf in enkele minuten apps en games kan bouwen, en wat er zich afspeelt achter de schermen van Silicon Valley.
        Drie artikels, elk met een eigen blik op de toekomst.
      </p>

      {/* 👇 Artikels */}
      <div className="mt-10 space-y-4">

        <h2 className="text-2xl font-semibold">Laatste artikels</h2>

        {/* Artikel 1 */}
        <Link
          href="/page1"
          className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50 transition"
        >
          <div className="flex-1">
            <h3 className="font-semibold">
              Leidt AI-slop tot de dood van socialemedia?
            </h3>
          </div>

          <Image
            src="/Leidt AI-slop tot de dood van sociale media_ _ De Standaard.jpeg"
            alt="Artikel 1"
            width={120}
            height={80}
            className="rounded-md object-cover"
          />
        </Link>

        {/* Artikel 2 */}
        <Link
          href="/page2"
          className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50 transition"
        >
          <div className="flex-1">
            <h3 className="font-semibold">
              Vibecoding: zo maak je in enkele minuten je eigen games, websites en apps met AI
            </h3>
          </div>

          <Image
            src="/Vibecoding - zo maak je in enkele minuten je eigen games, websites en apps met AI.jpeg"
            alt="Artikel 2"
            width={120}
            height={80}
            className="rounded-md object-cover"
          />
        </Link>

        {/* Artikel 3 */}
        <Link
          href="/page3"
          className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50 transition"
        >
          <div className="flex-1">
            <h3 className="font-semibold">
              Was het verzet van Dario Amodei tegenminister Hegseth het “Ik ben Spartacus!”-moment van Silicon Valley?
            </h3>
          </div>

          <Image
            src="/Was het verzet van Dario Amodei tegen minister Hegseth het ÔÇ£Ik ben Spartacus!ÔÇØ-moment van Silicon Valley_ _ De Standaard.jpeg"
            alt="Artikel 3"
            width={120}
            height={80}
            className="rounded-md object-cover"
          />
        </Link>

      </div>

    </div>
  );
}

