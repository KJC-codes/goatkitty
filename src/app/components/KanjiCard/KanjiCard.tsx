import { KanjiEntry } from "@/app/types/kanji";
import { capilatize } from "@/app/lib/helpers/capilatize";

export const KanjiCard = ({ kanji }: { kanji: KanjiEntry }) => (
  <div key={kanji.kanji} className="bg-zinc-900 text-amber-400  text-white rounded-lg p-8" >
    <h3 className="text-7xl jp-text mb-8">{kanji.kanji}</h3>
    <p className="text-sm line-height-lg flex"><span className="text-zinc-400 mr-3">Onyomi: </span><span className="jp-text">{kanji.readings.onyomi.join(', ') || '--'}</span></p>
    <p className="text-sm line-height-lg flex"><span className="text-zinc-400 mr-3">Kunyomi: </span><span className="jp-text">{kanji.readings.kunyomi.join(', ') || '--'}</span></p>
    <p className="text-sm line-height-lg flex"><span className="text-zinc-400 mr-3">Concept: </span>{kanji.concept.map(concept => capilatize(concept)).join(', ')}</p>
    <p className="text-sm line-height-lg flex"><span className="text-zinc-400 mr-3">Strokes: </span>{kanji.strokes}</p>
    <p className="text-2xl mt-4">{kanji.meaning.map(concept => capilatize(concept)).join(', ')}</p>
  </div>
)