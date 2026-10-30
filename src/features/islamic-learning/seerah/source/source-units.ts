import type { SeerahSourceUnit } from './seerah-types';

/**
 * Arabic excerpts transcribed from the Ibn Hisham Wikisource text.
 * Printed pages remain unset until checked against the scanned edition.
 */
export const SEERAH_SOURCE_UNITS: SeerahSourceUnit[] = [
  {
    id: 'ibn-hisham-prophetic-lineage',
    titleArabic: 'ذكر سرد النسب الزكي',
    textArabic:
      'قال: محمد بن عبد الله ابن عبد المطلب، واسم عبد المطلب: شيبة بن هاشم، واسم هاشم: عمرو بن عبد مناف، واسم عبد مناف: المغيرة بن قصي، واسم قصي: زيد بن كلاب بن مرة بن كعب بن لؤي بن غالب بن فهر بن مالك بن النضر ابن كنانة بن خزيمة بن مدركة، واسم مدركة: عامر بن إلياس بن مضر بن نزار بن معد بن عدنان.',
    volume: 1,
    page: null,
    sourceName: 'Ibn Hisham, al-Sirah al-Nabawiyyah, ذكر سرد النسب الزكي',
    verificationStatus: 'needs-review',
  },
  {
    id: 'ibn-hisham-origin-of-arabs',
    titleArabic: 'أصل العرب',
    textArabic:
      'قال ابن هشام: فالعرب كلها من ولد إسماعيل وقحطان. وبعض أهل اليمن يقول: قحطان من ولد إسماعيل، ويقول: إسماعيل أبو العرب كلها. قال ابن إسحاق: عاد بن عوض بن إرم بن سام بن نوح، وثمود وجديس ابنا عابر بن إرم بن سام بن نوح، وطمس وعملاق وأميم بنو لاوذ بن سام بن نوح: عرب كلهم.',
    volume: 1,
    page: null,
    sourceName: 'Ibn Hisham, al-Sirah al-Nabawiyyah, أصل العرب',
    verificationStatus: 'needs-review',
  },
];
