import { examples } from './prompt'
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
export default async function () {
  const example = examples[Math.floor(Math.random() * examples.length)]
  const source = example.replace('Exemple : ', '')
  const foreignLanguage =
    languages[Math.floor(Math.random() * languages.length)]
  const translated = await translator.translateText(
    source,
    'fr',
    foreignLanguage
  )
  const rephrased = await translator.translateText(
    translated.text,
    foreignLanguage,
    'fr'
  )
  return {
    prompt: `Language ${foreignLanguage}\n\n##### SOURCE #####\n${source}\n\n##### TRANSLATED #####${translated.text}`,
    result: rephrased.text,
  }
}
