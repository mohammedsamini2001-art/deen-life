import fs from 'node:fs';
import path from 'node:path';
import { XMLParser } from 'fast-xml-parser';

const projectRoot = process.cwd();

const sourceFile = path.join(
  projectRoot,
  'src/features/quran/data/quran-tanzil.xml'
);

const outputDir = path.join(
  projectRoot,
  'src/features/quran/data/generated/surahs'
);

const xml = fs.readFileSync(sourceFile, 'utf8');

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
});

const parsed = parser.parse(xml);

const rawSurahs = Array.isArray(parsed.quran.sura)
  ? parsed.quran.sura
  : [parsed.quran.sura];

const surahs = rawSurahs.map((sura) => {
  const rawAyahs = Array.isArray(sura.aya)
    ? sura.aya
    : [sura.aya];

  return {
    index: Number(sura['@_index']),
    nameArabic: sura['@_name'],
    ayahs: rawAyahs.map((aya) => ({
      index: Number(aya['@_index']),
      text: aya['@_text'],
    })),
  };
});

const totalAyahs = surahs.reduce(
  (total, surah) => total + surah.ayahs.length,
  0
);

fs.rmSync(outputDir, { recursive: true, force: true });
fs.mkdirSync(outputDir, { recursive: true });

const index = surahs.map((surah) => ({
  index: surah.index,
  nameArabic: surah.nameArabic,
  ayahCount: surah.ayahs.length,
  file: `${String(surah.index).padStart(3, '0')}.json`,
}));

for (const surah of surahs) {
  const filename = `${String(surah.index).padStart(3, '0')}.json`;

  fs.writeFileSync(
    path.join(outputDir, filename),
    JSON.stringify(surah)
  );
}

fs.writeFileSync(
  path.join(outputDir, 'index.json'),
  JSON.stringify({
    source: 'tanzil',
    version: '1.1',
    textType: 'uthmani',
    totalSurahs: surahs.length,
    totalAyahs,
    surahs: index,
  })
);

console.log('=== QURAN DATA GENERATION ===');
console.log(`Source: ${sourceFile}`);
console.log(`Output: ${outputDir}`);
console.log(`Surahs: ${surahs.length}`);
console.log(`Ayahs: ${totalAyahs}`);
console.log(`Generated files: ${surahs.length + 1}`);

console.log(
  'PASS:',
  surahs.length === 114 &&
  totalAyahs === 6236
);
