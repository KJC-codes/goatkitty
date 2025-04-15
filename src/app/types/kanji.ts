export type KanjiEntry = {
  kanji: string;                
  meaning: string[];  
  concept: string[];
  strokes: number; 
  readings: {
    kunyomi: string[]; 
    onyomi: string[];
  };
};

export type Kanji = KanjiEntry[];