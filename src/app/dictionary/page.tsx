import N5_KANJI from "@/app//lib/constants/N5";
import { KanjiEntry } from "../types/kanji";
// import LookupComponent from "../components/LookupComponent/LookupComponent";
import { Footer } from "@/app/components/Footer/Footer";
import { KanjiCard } from "../components/KanjiCard/KanjiCard";
import { capilatize } from "../lib/helpers/capilatize";

export default async function Home() {
  const currentConcept = 'time';
  // const allConcepts = [...new Set(N5_KANJI.flatMap(item => item.concept))];
  const list = currentConcept ? N5_KANJI.filter(kanji => kanji.concept.includes(currentConcept)) : N5_KANJI
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8  gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="rounded-2xl backdrop-blur-3xl flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-amber-400 text-6xl">Basic {capilatize(currentConcept || '')} Kanji ({list.length})</h1>
        {/* <select>
          {allConcepts.sort((a, b) => a.localeCompare(b)).map(concept => (
            <option key={concept} value={concept}>{capilatize(concept)}</option>
          ))}
        </select> */}
        <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 break-words break-keep">
          {list.map((kanji: KanjiEntry) => (<KanjiCard kanji={kanji} />))}
        </div>
        {/* <LookupComponent /> */}
      </main>
      <Footer />
    </div>
  )
}
