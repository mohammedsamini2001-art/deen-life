# DEEN LIFE Qur'an Data

## Source

The Arabic Qur'an text in this directory is sourced from the **Tanzil Quran Text** project.

- Source: https://tanzil.net/
- Text: Uthmani
- Version: 1.1
- License: Creative Commons Attribution 3.0 (CC BY 3.0)

The original Tanzil XML source is preserved as:

`quran-tanzil.xml`

The generated JSON files are derived from that source without modifying the Qur'anic Arabic text.

## Integrity

Verified on 2026-09-04:

- 114 surahs
- 6,236 ayahs
- Sequential surah indices
- Sequential ayah indices within each surah
- Source-to-generated text comparison: 0 mismatches
- Source-to-chunk text comparison: 0 mismatches

## Generation

The generated dataset is produced by:

`scripts/build-quran-data.mjs`

Do not manually edit the generated Qur'an text. Regenerate it from the preserved source instead.

## Attribution

DEEN LIFE uses Qur'an text from the Tanzil Quran Text project.

Tanzil:
https://tanzil.net/

Tanzil Quran Text:
https://tanzil.net/docs/Uthmani

Tanzil Text License:
https://tanzil.net/docs/Text_License
