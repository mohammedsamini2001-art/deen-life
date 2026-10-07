import type { SahihBukhariHadith } from './sahih-bukhari-hadith-types'
import { SAHIH_BUKHARI_SOURCE_UNITS } from './sahih-bukhari-source-units'

const sourceName = 'DEEN LIFE — Original Kiswahili Translation'
const sourceUrl = 'https://mohammedsamini2001-art.github.io/deen-life/'

const sw = (text: string) => ({
  language: 'sw' as const,
  text,
  sourceName,
  sourceUrl,
})

const references = (hadithNumber: number) => [
  {
    sourceName: `Sahih al-Bukhari ${hadithNumber} — Arabic source`,
    sourceUrl:
      'https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/ara-bukhari.min.json',
  },
]

const translations: Record<number, string> = {
  1: `Matendo yote hutegemea nia, na kila mtu atapata kile alichokusudia. Basi yule ambaye hijra yake ilikuwa kwa ajili ya kupata jambo la kidunia au kwa ajili ya mwanamke wa kumuoa, basi hijra yake ni kwa ajili ya kile alichohamia.`,

  2: `Aisha, Mama wa Waumini, alisema: Mwanzo wa wahyi kwa Mtume wa Allah (Swalla Allahu 'alayhi wa sallam) ulikuwa kwa njia ya ndoto njema usingizini; na kila alipoota ndoto, ilikuwa wazi kama mapambazuko ya asubuhi. Kisha akapenda kujitenga, na alikuwa akijitenga katika pango la Hira ambako alikuwa akijitolea kwa ibada kwa idadi ya siku kadhaa kabla ya kurejea kwa familia yake. Alikuwa akichukua chakula kwa ajili ya kipindi hicho. Kisha alikuwa akirudi kwa Khadijah na kuchukua chakula kama hicho tena, mpaka haki ikamjia akiwa katika pango la Hira. Malaika akamjia na akamwambia: “Soma!” Akasema: “Mimi sijui kusoma.” Mtume wa Allah (Swalla Allahu 'alayhi wa sallam) alisema: “Kisha akanishika na akanibana kwa nguvu mpaka nikapata taabu sana, kisha akaniachia na akasema: ‘Soma!’ Nikasema: ‘Mimi sijui kusoma.’ Kisha akanishika tena na akanibana kwa nguvu mara ya pili mpaka nikapata taabu sana, kisha akaniachia na akasema: ‘Soma!’ Nikasema: ‘Mimi sijui kusoma.’ Kisha akanishika na akanibana kwa nguvu mara ya tatu, kisha akaniachia na akasema: ‘Soma kwa Jina la Mola wako Aliyeumba; amemuumba mwanadamu kutokana na pande la damu lililoganda. Soma, na Mola wako ni Mkarimu Zaidi.’”`,

  3: `Kisha Mtume wa Allah (Swalla Allahu 'alayhi wa sallam) akarudi kwa Khadijah akiwa moyo wake ukitetemeka kwa hofu. Akaingia kwake na kusema: “Nifunikeni! Nifunikeni!” Wakawafunika mpaka hofu ikamwondoka. Kisha akamwambia Khadijah: “Kuna nini kwangu? Nimeogopa juu yangu mwenyewe.” Akamweleza yaliyotokea. Khadijah akasema: “Hapana! Wallahi, Allah hatakudhalilisha kamwe. Kwa hakika, wewe unaunga udugu, unabeba mzigo wa wasioweza kujisaidia, unawapatia wasio na kitu, unamkirimu mgeni, na unawasaidia wale wanaopatwa na misiba.” Kisha Khadijah akamchukua mpaka kwa Waraqah bin Nawfal bin Asad bin Abdul-'Uzza, bin ami yake wa baba. Waraqah alikuwa mtu aliyekuwa Mkristo wakati wa Jahiliyyah. Alikuwa akiandika kitabu kwa Kiebrania na kuandika kutoka katika Injili kwa Kiebrania kile ambacho Allah alitaka aandike. Alikuwa mzee na alikuwa amepofuka. Khadijah akamwambia: “Ewe bin ami yangu, msikilize mwana wa ndugu yako.” Waraqah akamwambia: “Ewe mwana wa ndugu yangu, unaona nini?” Mtume wa Allah (Swalla Allahu 'alayhi wa sallam) akamweleza yaliyompata. Waraqah akasema: “Huyu ndiye An-Namus ambaye Allah alimtuma kwa Musa. Laiti ningekuwa kijana wakati watu wako watakapokufukuza!” Mtume wa Allah (Swalla Allahu 'alayhi wa sallam) akasema: “Je, watanifukuza?” Waraqah akasema: “Ndiyo. Hakuna mtu aliyewahi kuja na mfano wa yale uliyokuja nayo isipokuwa alipata uadui. Na ikiwa nitakuwa hai mpaka siku yako hiyo, nitakusaidia kwa nguvu zangu zote.” Lakini baada ya muda mfupi Waraqah akafariki, na wahyi ukakatika kwa muda.`,

  4: `Na wakati Mtume wa Allah (Swalla Allahu 'alayhi wa sallam) alipokuwa akitembea, alisikia sauti kutoka mbinguni. Akatazama juu na akamwona yule malaika aliyemjia katika pango la Hira akiwa ameketi juu ya kiti kati ya mbingu na ardhi. Mtume wa Allah (Swalla Allahu 'alayhi wa sallam) aliingiwa na hofu kubwa kwa kumwona, akarudi na kusema: “Nifunikeni! Nifunikeni!” Ndipo Allah Mtukufu akateremsha: “Ewe uliyejifunika! Simama uonye! Na Mola wako mtukuze! Na nguo zako zisafishe! Na masanamu yaepuke.” Kisha wahyi ukaja kwa nguvu na ukaendelea kushuka mfululizo.`,

  5: `Ibn Abbas alisema kuhusu kauli ya Allah, “Usiutikise ulimi wako kwa ajili yake ili uharakishe kuipokea”: Mtume wa Allah (Swalla Allahu 'alayhi wa sallam) alikuwa akipata taabu kubwa wakati wa kupokea wahyi, na alikuwa akitikisa midomo yake. Ibn Abbas akasema: “Mimi ninaitikisa midomo yangu kama ninavyokuona wewe ukiitikisa.” Sa'id akasema: “Mimi ninaitikisa midomo yangu kama ninavyomwona Ibn Abbas akiitikisa.” Kisha Ibn Abbas akasema: “Basi Allah akateremsha: ‘Usiutikise ulimi wako kwa ajili yake ili uharakishe kuipokea. Hakika ni juu Yetu kuikusanya na kuifanya isomeke. Basi tunapoisoma, fuata usomaji wake. Kisha hakika ni juu Yetu kuibainisha.’” Baada ya hapo, Mtume wa Allah (Swalla Allahu 'alayhi wa sallam) alipokuwa akija Jibril, alikuwa akimsikiliza. Jibril alipokuwa ameondoka, Mtume wa Allah (Swalla Allahu 'alayhi wa sallam) alikuwa akiisoma kama vile Jibril alivyokuwa ameisoma.`,

  6: `Ibn Abbas alisema: Mtume wa Allah (Swalla Allahu 'alayhi wa sallam) alikuwa mkarimu zaidi kuliko watu wote katika kufanya kheri, na alikuwa mkarimu zaidi katika Ramadhani wakati Jibril alipokutana naye. Jibril alikuwa akikutana naye kila usiku katika Ramadhani mpaka mwezi huo uishe, na alikuwa akimfundisha na kumkagua Qur'ani. Kwa hakika, Mtume wa Allah (Swalla Allahu 'alayhi wa sallam) alikuwa mkarimu zaidi katika kufanya kheri kuliko upepo unaovuma kwa nguvu.`,

  7: `Ibn Abbas alisema: Abu Sufyan bin Harb alimweleza kwamba Heraclius alimtuma mjumbe wake kumwita akiwa pamoja na msafara wa Quraysh, ambao walikuwa wafanyabiashara huko Sham, wakati huo ambapo Mtume wa Allah (Swalla Allahu 'alayhi wa sallam) alikuwa amewapa Abu Sufyan na makafiri wa Quraysh muda wa mapatano. Basi wao wakamjia wakiwa Iliya. Heraclius akawaita katika baraza lake, akiwa amezungukwa na wakuu wa Warumi. Kisha akamwita mkalimani wake na kusema: “Ni nani miongoni mwenu aliye karibu zaidi kwa nasaba na huyu mtu anayesema kuwa yeye ni nabii?” Abu Sufyan akasema: “Mimi ndiye niliye karibu zaidi kwa nasaba naye.” Heraclius akasema: “Mlete karibu yangu na waweke wenzake nyuma yake.” Kisha akamwambia mkalimani wake: “Waambie wenzake kwamba nitamuuliza kuhusu huyu mtu. Ikiwa atasema uongo, basi wamkanushe.” Abu Sufyan akasema: “Wallahi, lau si aibu ya kwamba watasimulia kwamba nilisema uongo, ningesema uongo juu yake.”

Kisha Heraclius akaniuliza: “Nasaba yake iko vipi miongoni mwenu?” Nikasema: “Yeye ni mwenye nasaba tukufu miongoni mwetu.” Akauliza: “Je, kuna yeyote miongoni mwenu aliyewahi kusema maneno haya kabla yake?” Nikasema: “Hapana.” Akauliza: “Je, yeyote katika mababu zake alikuwa mfalme?” Nikasema: “Hapana.” Akauliza: “Ni watu wenye heshima wanaomfuata au ni watu dhaifu?” Nikasema: “Ni watu dhaifu ndio wanaomfuata.” Akauliza: “Wanaongezeka au wanapungua?” Nikasema: “Wanaongezeka.” Akauliza: “Je, kuna yeyote anayekwishamfuata kisha akairudia dini yake kwa kuchukizwa nayo?” Nikasema: “Hapana.” Akauliza: “Je, mlikuwa mkimtuhumu kwa kusema uongo kabla hajasema haya anayosema?” Nikasema: “Hapana.” Akauliza: “Je, anasaliti?” Nikasema: “Hapana, isipokuwa sasa tuko katika muda wa mapatano naye, na hatujui atafanya nini katika kipindi hiki.” Abu Sufyan akasema: “Sikupata nafasi ya kuongeza neno lolote juu ya yale aliyoniuliza isipokuwa hilo.” Akauliza: “Je, mmepigana naye?” Nikasema: “Ndiyo.” Akauliza: “Vita vimekuwaje kati yenu?” Nikasema: “Vita ni zamu; mara tunapata ushindi dhidi yake na mara yeye anapata ushindi dhidi yetu.” Akauliza: “Anaamrisha nini?” Nikasema: “Anasema: ‘Muabuduni Allah Peke Yake na msimshirikishe na chochote, na acheni yale ambayo baba zenu walikuwa wakiabudu.’ Anatuamrisha kuswali, kutoa Zaka, kusema kweli, kujisitiri na kujiepusha na machafu, na kuunga udugu.”

Heraclius akamwambia mkalimani wake: “Mwambie: Nilikuuliza kuhusu nasaba yake, ukasema kuwa yeye ana nasaba tukufu miongoni mwenu. Na hivi ndivyo walivyo Mitume; hutumwa miongoni mwa wenye nasaba tukufu za watu wao. Nilikuuliza kama kuna yeyote miongoni mwenu aliyewahi kusema maneno haya kabla yake, ukasema hapana. Nilisema kwamba lau angekuwepo mtu aliyesema maneno haya kabla yake, ningesema huenda anafuata tu maneno yaliyosemwa kabla yake. Nilikuuliza kama yeyote katika mababu zake alikuwa mfalme, ukasema hapana. Nilisema kwamba lau yeyote katika mababu zake angekuwa mfalme, ningesema huenda anatafuta kurudisha ufalme wa mababu zake. Nilikuuliza kama mlimtuhumu kwa kusema uongo kabla ya madai yake haya, ukasema hapana. Kwa hiyo, siwezi kufikiri kwamba mtu ambaye hakuwahi kusema uongo juu ya watu ataanza kusema uongo juu ya Allah. Nilikuuliza ni watu gani wanaomfuata, wenye heshima au walio dhaifu, ukasema walio dhaifu ndio wanaomfuata. Na hao ndio wafuasi wa Mitume. Nilikuuliza kama wanaongezeka au wanapungua, ukasema wanaongezeka. Na hivi ndivyo ilivyo imani mpaka ikamilike. Nilikuuliza kama kuna yeyote anayekwishamfuata kisha akaacha dini yake kwa kuchukizwa nayo, ukasema hapana. Na hivi ndivyo ilivyo imani pindi furaha yake na mwanga wake unapoingia ndani ya nyoyo. Nilikuuliza kama anasaliti, ukasema hapana. Na hivi ndivyo walivyo Mitume; hawasaliti. Nilikuuliza anaamrisha nini, ukasema anaamrisha kumuabudu Allah Peke Yake na kuacha ibada ya yale ambayo baba zenu walikuwa wakiabudu, na kwamba anaamrisha kuswali, kutoa Zaka, kusema kweli, kujisitiri na kujiweka mbali na machafu, na kuunga udugu.”

Kisha Heraclius akasema: “Ikiwa yale unayosema ni kweli, basi hakika atamiliki eneo hili nililopo. Nilijua kwamba yeye atatokea, lakini sikujua kwamba atakuwa miongoni mwenu. Lau ningejua kwamba ningeweza kumfikia, ningejitahidi sana kukutana naye; na kama ningekuwa pamoja naye, ningemwosha miguu yake.”

Kisha Heraclius akaomba barua ya Mtume wa Allah (Swalla Allahu 'alayhi wa sallam) ambayo Dihya alikuwa ameipeleka kwa gavana wa Busra, naye akampelekea Heraclius. Heraclius akaisoma. Ilikuwa hivi: “Kwa Jina la Allah, Mwingi wa Rehema, Mwenye Kurehemu. Kutoka kwa Muhammad, mja wa Allah na Mtume Wake, kwenda kwa Heraclius, mtawala mkuu wa Warumi. Amani iwe juu ya anayefuata uongofu. Ama baada ya hayo: Hakika ninakuita kwa mwito wa Uislamu. Silimu, utasalimika, na Allah atakupa ujira maradufu. Lakini ukikataa, basi juu yako itakuwa dhambi ya Arisiyyin. ‘Enyi Watu wa Kitabu! Njooni kwenye neno lililo sawa baina yetu na nyinyi: kwamba tusimuabudu yeyote isipokuwa Allah, wala tusimshirikishe na chochote, wala baadhi yetu tusiwafanye baadhi ya wengine kuwa ni mabwana badala ya Allah. Wakigeuka, basi semeni: Shuhudieni kwamba sisi ni Waislamu.’”`,
}

export const SAHIH_BUKHARI_BOOK_1_KISWAHILI: SahihBukhariHadith[] =
  SAHIH_BUKHARI_SOURCE_UNITS.map((unit) => ({
    hadithNumber: unit.hadithNumber,
    bookNumber: 1,
    chapterNumber: unit.chapterNumber,
    original: {
      language: 'ar',
      text: unit.arabic,
    },
    translations: [sw(translations[unit.hadithNumber])],
    references: references(unit.hadithNumber),
  }))
