import fs from 'node:fs';
import path from 'node:path';
import { XMLParser } from 'fast-xml-parser';

const projectRoot = process.cwd();

const sourceFile = path.join(
  projectRoot,
  'src/features/quran/data/quran-tanzil.xml'
);

const generatedDir = path.join(
  projectRoot,
  'src/features/quran/data/generated/surahs'
);

const runtimeDir = path.join(
  projectRoot,
  'public/quran/surahs'
);

const metadataFile = path.join(
  projectRoot,
  'src/features/quran/data/metadata/surahs.json'
);

const translationFile = path.join(
  projectRoot,
  'src/features/quran/data/pickthall-en.json'
);

const xml = fs.readFileSync(sourceFile, 'utf8');
const metadataSource = JSON.parse(fs.readFileSync(metadataFile, 'utf8'));

const translationSource = fs.existsSync(translationFile)
  ? JSON.parse(fs.readFileSync(translationFile, 'utf8'))
  : null;

const translationByRef = new Map();
if (translationSource) {
  for (const item of translationSource.quran) {
    translationByRef.set(`${item.chapter}:${item.verse}`, item.text);
  }
}

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
    ayahs: rawAyahs.map((aya) => {
      const ayahIndex = Number(aya['@_index']);
      const translation = translationByRef.get(
        `${Number(sura['@_index'])}:${ayahIndex}`
      );

      return {
        index: ayahIndex,
        text: aya['@_text'],
        ...(aya['@_bismillah']
          ? { bismillah: aya['@_bismillah'] }
          : {}),
        ...(translation ? { translation } : {}),
      };
    }),
  };
});

const totalAyahs = surahs.reduce(
  (total, surah) => total + surah.ayahs.length,
  0
);

fs.rmSync(generatedDir, { recursive: true, force: true });
fs.rmSync(runtimeDir, { recursive: true, force: true });

fs.mkdirSync(generatedDir, { recursive: true });
fs.mkdirSync(runtimeDir, { recursive: true });

const index = surahs.map((surah) => {
  const metadata = metadataSource.surahs.find(
    (item) => item.index === surah.index
  );

  if (!metadata) {
    throw new Error(`Missing metadata for surah ${surah.index}.`);
  }

  return {
    index: surah.index,
    nameArabic: surah.nameArabic,
    nameEnglish: metadata.nameEnglish,
    nameEnglishTranslation: metadata.nameEnglishTranslation,
    ayahCount: surah.ayahs.length,
    revelationType: metadata.revelationType,
    file: `${String(surah.index).padStart(3, '0')}.json`,
  };
});

for (const surah of surahs) {
  const filename = `${String(surah.index).padStart(3, '0')}.json`;

  const json = JSON.stringify(surah);

  fs.writeFileSync(
    path.join(generatedDir, filename),
    json
  );

  fs.writeFileSync(
    path.join(runtimeDir, filename),
    json
  );
}

fs.writeFileSync(
  path.join(generatedDir, 'index.json'),
  JSON.stringify({
    source: 'tanzil',
    version: '1.1',
    textType: 'uthmani',
    translation: translationSource ? 'en.pickthall' : null,
    totalSurahs: surahs.length,
    totalAyahs,
    surahs: index,
  })
);

fs.copyFileSync(
  path.join(generatedDir, 'index.json'),
  path.join(runtimeDir, 'index.json')
);

console.log('=== QURAN DATA GENERATION ===');
console.log(`Source: ${sourceFile}`);
console.log(`Generated output: ${generatedDir}`);
console.log(`Runtime output: ${runtimeDir}`);
console.log(`Surahs: ${surahs.length}`);
console.log(`Ayahs: ${totalAyahs}`);
console.log(`Generated files: ${surahs.length + 1}`);

console.log(
  'PASS:',
  surahs.length === 114 &&
  totalAyahs === 6236
);
