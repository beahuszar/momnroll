export type Pitch = 'flat' | 'sharp'
type BassString = 'G' | 'D' | 'A' | 'E'
export interface Note {
  note: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'
  hasModifier: boolean
  localization: string
}

type FretBoard = {
  [pitch in Pitch]: Record<BassString, Note[]>
}

// TODO: separate localization from note
export const fretBoard: FretBoard = {
  // B
  flat: {
    G: [
      { note: 'A', hasModifier: true, localization: 'Asz' },
      { note: 'A', hasModifier: false, localization: 'A' },
      { note: 'B', hasModifier: true, localization: 'Bé' },
      { note: 'B', hasModifier: false, localization: 'H (Cesz)' },
      { note: 'C', hasModifier: false, localization: 'C' },
      { note: 'D', hasModifier: true, localization: 'Desz' },
      { note: 'D', hasModifier: false, localization: 'D' },
      { note: 'E', hasModifier: true, localization: 'Esz' },
      { note: 'E', hasModifier: false, localization: 'E (Fesz)' },
      { note: 'F', hasModifier: false, localization: 'F' },
      { note: 'G', hasModifier: true, localization: 'Gesz' },
      { note: 'G', hasModifier: false, localization: 'G' },
      { note: 'A', hasModifier: true, localization: 'Asz' },
      { note: 'A', hasModifier: false, localization: 'A' },
      { note: 'B', hasModifier: true, localization: 'Bé' },
      { note: 'B', hasModifier: false, localization: 'H (Cesz)' },
      { note: 'C', hasModifier: false, localization: 'C' },
      { note: 'D', hasModifier: true, localization: 'Desz' },
      { note: 'D', hasModifier: false, localization: 'D' },
      { note: 'E', hasModifier: true, localization: 'Esz' }
    ],
    D: [
      { note: 'E', hasModifier: true, localization: 'Esz' },
      { note: 'E', hasModifier: false, localization: 'E (Fesz)' },
      { note: 'F', hasModifier: false, localization: 'F' },
      { note: 'G', hasModifier: true, localization: 'Gesz' },
      { note: 'G', hasModifier: false, localization: 'G' },
      { note: 'A', hasModifier: true, localization: 'Asz' },
      { note: 'A', hasModifier: false, localization: 'A' },
      { note: 'B', hasModifier: true, localization: 'Bé' },
      { note: 'B', hasModifier: false, localization: 'H (Cesz)' },
      { note: 'C', hasModifier: false, localization: 'C' },
      { note: 'D', hasModifier: true, localization: 'Desz' },
      { note: 'D', hasModifier: false, localization: 'D' },
      { note: 'E', hasModifier: true, localization: 'Esz' },
      { note: 'E', hasModifier: false, localization: 'E (Fesz)' },
      { note: 'F', hasModifier: false, localization: 'F' },
      { note: 'G', hasModifier: true, localization: 'Gesz' },
      { note: 'G', hasModifier: false, localization: 'G' },
      { note: 'A', hasModifier: true, localization: 'Asz' },
      { note: 'A', hasModifier: false, localization: 'A' },
      { note: 'B', hasModifier: true, localization: 'Bé' }
    ],
    A: [
      { note: 'B', hasModifier: true, localization: 'Bé' },
      { note: 'B', hasModifier: false, localization: 'H (Cesz)' },
      { note: 'C', hasModifier: false, localization: 'C' },
      { note: 'D', hasModifier: true, localization: 'Desz' },
      { note: 'D', hasModifier: false, localization: 'D' },
      { note: 'E', hasModifier: true, localization: 'Esz' },
      { note: 'E', hasModifier: false, localization: 'E (Fesz)' },
      { note: 'F', hasModifier: false, localization: 'F' },
      { note: 'G', hasModifier: true, localization: 'Gesz' },
      { note: 'G', hasModifier: false, localization: 'G' },
      { note: 'A', hasModifier: true, localization: 'Asz' },
      { note: 'A', hasModifier: false, localization: 'A' },
      { note: 'B', hasModifier: true, localization: 'Bé' },
      { note: 'B', hasModifier: false, localization: 'H (Cesz)' },
      { note: 'C', hasModifier: false, localization: 'C' },
      { note: 'D', hasModifier: true, localization: 'Desz' },
      { note: 'D', hasModifier: false, localization: 'D' },
      { note: 'E', hasModifier: true, localization: 'Esz' },
      { note: 'E', hasModifier: false, localization: 'E (Fesz)' },
      { note: 'F', hasModifier: false, localization: 'F' }
    ],
    E: [
      { note: 'F', hasModifier: false, localization: 'F' },
      { note: 'G', hasModifier: true, localization: 'Gesz' },
      { note: 'G', hasModifier: false, localization: 'G' },
      { note: 'A', hasModifier: true, localization: 'Asz' },
      { note: 'A', hasModifier: false, localization: 'A' },
      { note: 'B', hasModifier: true, localization: 'Bé' },
      { note: 'B', hasModifier: false, localization: 'H (Cesz)' },
      { note: 'C', hasModifier: false, localization: 'C' },
      { note: 'D', hasModifier: true, localization: 'Desz' },
      { note: 'D', hasModifier: false, localization: 'D' },
      { note: 'E', hasModifier: true, localization: 'Esz' },
      { note: 'E', hasModifier: false, localization: 'E (Fesz)' },
      { note: 'F', hasModifier: false, localization: 'F' },
      { note: 'G', hasModifier: true, localization: 'Gesz' },
      { note: 'G', hasModifier: false, localization: 'G' },
      { note: 'A', hasModifier: true, localization: 'Asz' },
      { note: 'A', hasModifier: false, localization: 'A' },
      { note: 'B', hasModifier: true, localization: 'Bé' },
      { note: 'B', hasModifier: false, localization: 'H (Cesz)' },
      { note: 'C', hasModifier: false, localization: 'C' }
    ]
  },
  // #
  sharp: {
    G: [
      { note: 'G', hasModifier: true, localization: 'Gisz' },
      { note: 'A', hasModifier: false, localization: 'A' },
      { note: 'A', hasModifier: true, localization: 'Aisz' },
      { note: 'B', hasModifier: false, localization: 'H' },
      { note: 'C', hasModifier: false, localization: 'C (Hisz)' },
      { note: 'C', hasModifier: true, localization: 'Cisz' },
      { note: 'D', hasModifier: false, localization: 'D' },
      { note: 'D', hasModifier: true, localization: 'Disz' },
      { note: 'E', hasModifier: false, localization: 'E' },
      { note: 'F', hasModifier: false, localization: 'F (Eisz)' },
      { note: 'F', hasModifier: true, localization: 'Fisz' },
      { note: 'G', hasModifier: false, localization: 'G' },
      { note: 'G', hasModifier: true, localization: 'Gisz' },
      { note: 'A', hasModifier: false, localization: 'A' },
      { note: 'A', hasModifier: true, localization: 'Aisz' },
      { note: 'B', hasModifier: false, localization: 'H' },
      { note: 'C', hasModifier: false, localization: 'C (Hisz)' },
      { note: 'C', hasModifier: true, localization: 'Cisz' },
      { note: 'D', hasModifier: false, localization: 'D' },
      { note: 'D', hasModifier: true, localization: 'Disz' }
    ],
    D: [
      { note: 'D', hasModifier: true, localization: 'Disz' },
      { note: 'E', hasModifier: false, localization: 'E' },
      { note: 'F', hasModifier: false, localization: 'F (Eisz)' },
      { note: 'F', hasModifier: true, localization: 'Fisz' },
      { note: 'G', hasModifier: false, localization: 'G' },
      { note: 'G', hasModifier: true, localization: 'Gisz' },
      { note: 'A', hasModifier: false, localization: 'A' },
      { note: 'A', hasModifier: true, localization: 'Aisz' },
      { note: 'B', hasModifier: false, localization: 'H' },
      { note: 'C', hasModifier: false, localization: 'C (Hisz)' },
      { note: 'C', hasModifier: true, localization: 'Cisz' },
      { note: 'D', hasModifier: false, localization: 'D' },
      { note: 'D', hasModifier: true, localization: 'Disz' },
      { note: 'E', hasModifier: false, localization: 'E' },
      { note: 'F', hasModifier: false, localization: 'F (Eisz)' },
      { note: 'F', hasModifier: true, localization: 'Fisz' },
      { note: 'G', hasModifier: false, localization: 'G' },
      { note: 'G', hasModifier: true, localization: 'Gisz' },
      { note: 'A', hasModifier: false, localization: 'A' },
      { note: 'A', hasModifier: true, localization: 'Aisz' }
    ],
    A: [
      { note: 'A', hasModifier: true, localization: 'Aisz' },
      { note: 'B', hasModifier: false, localization: 'H' },
      { note: 'C', hasModifier: false, localization: 'C (Hisz)' },
      { note: 'C', hasModifier: true, localization: 'Cisz' },
      { note: 'D', hasModifier: false, localization: 'D' },
      { note: 'D', hasModifier: true, localization: 'Disz' },
      { note: 'E', hasModifier: false, localization: 'E' },
      { note: 'F', hasModifier: false, localization: 'F (Eisz)' },
      { note: 'F', hasModifier: true, localization: 'Fisz' },
      { note: 'G', hasModifier: false, localization: 'G' },
      { note: 'G', hasModifier: true, localization: 'Gisz' },
      { note: 'A', hasModifier: false, localization: 'A' },
      { note: 'A', hasModifier: true, localization: 'Aisz' },
      { note: 'B', hasModifier: false, localization: 'H' },
      { note: 'C', hasModifier: false, localization: 'C (Hisz)' },
      { note: 'C', hasModifier: true, localization: 'Cisz' },
      { note: 'D', hasModifier: false, localization: 'D' },
      { note: 'D', hasModifier: true, localization: 'Disz' },
      { note: 'E', hasModifier: false, localization: 'E' },
      { note: 'F', hasModifier: false, localization: 'F (Eisz)' }
    ],
    E: [
      { note: 'F', hasModifier: false, localization: 'F (Eisz)' },
      { note: 'F', hasModifier: true, localization: 'Fisz' },
      { note: 'G', hasModifier: false, localization: 'G' },
      { note: 'G', hasModifier: true, localization: 'Gisz' },
      { note: 'A', hasModifier: false, localization: 'A' },
      { note: 'A', hasModifier: true, localization: 'Aisz' },
      { note: 'B', hasModifier: false, localization: 'H' },
      { note: 'C', hasModifier: false, localization: 'C (Hisz)' },
      { note: 'C', hasModifier: true, localization: 'Cisz' },
      { note: 'D', hasModifier: false, localization: 'D' },
      { note: 'D', hasModifier: true, localization: 'Disz' },
      { note: 'E', hasModifier: false, localization: 'E' },
      { note: 'F', hasModifier: false, localization: 'F (Eisz)' },
      { note: 'F', hasModifier: true, localization: 'Fisz' },
      { note: 'G', hasModifier: false, localization: 'G' },
      { note: 'G', hasModifier: true, localization: 'Gisz' },
      { note: 'A', hasModifier: false, localization: 'A' },
      { note: 'A', hasModifier: true, localization: 'Aisz' },
      { note: 'B', hasModifier: false, localization: 'H' },
      { note: 'C', hasModifier: false, localization: 'C (Hisz)' }
    ]
  }
}

export const uniqueNotes = {
  flat: ['C', 'Desz', 'D', 'Esz', 'E (Fesz)', 'F', 'Gesz', 'G', 'Asz', 'A', 'Bé', 'H (Cesz)'],
  sharp: ['C (Hisz)', 'Cisz', 'D', 'Disz', 'E', 'F (Eisz)', 'Fisz', 'G', 'Gisz', 'A', 'Aisz', 'H']
}
