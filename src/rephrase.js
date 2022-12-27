import * as deepl from 'deepl-node'

const translator = new deepl.Translator(process.env.DEEPL_API_KEY)
const languages = [
  'BG' /* Bulgarian */,
  'CS' /* Czech */,
  'DA' /* Danish */,
  // "DE" /* German */,
  'EL' /* Greek */,
  // "EN" /* English */,
  // "ES" /* Spanish */,
  'ET' /* Estonian */,
  'FI' /* Finnish */,
  'HU' /* Hungarian */,
  'ID' /* Indonesian */,
  // "IT" /* Italian */,
  'JA' /* Japanese */,
  'LT' /* Lithuanian */,
  'LV' /* Latvian */,
  'NL' /* Dutch */,
  'PL' /* Polish */,
  // "PT" /* Portuguese */,
  'RO' /* Romanian */,
  'RU' /* Russian */,
  'SK' /* Slovak */,
  'SL' /* Slovenian */,
  'SV' /* Swedish */,
  'TR' /* Turkish */,
  'UK' /* Ukrainian */,
  'ZH' /* Chinese */,
]
export default async function (source) {
  const foreignLanguage =
    languages[Math.floor(Math.random() * languages.length)]
  const translated = await translator.translateText(
    source,
    'fr',
    foreignLanguage
  )
  console.log(`\nTranslated in ${foreignLanguage} \n`, translated.text)
  const rephrased = await translator.translateText(
    translated.text,
    foreignLanguage,
    'fr'
  )
  // Manually fix bad translation
  rephrased.text = rephrased.text.replace(' ouvert ', ' allumé ')
  console.log(`\nRephrased in french\n`, rephrased.text)

  return rephrased.text
}
