import fs from 'fs'
import completion from './completion'
import rephrase from './rephrase'

const main = async () => {
  const args = process.argv.slice(2)
  const iterations = parseInt(args[1] ?? 1)
  const slugIdStarter = parseInt(args[2] ?? 1)
  const reviewsResults = fs.createWriteStream('results.csv', { flags: 'a' })

  const methodIsRephrase = process.argv.indexOf('rephrase') !== -1
  const generationMethod = methodIsRephrase ? rephrase : completion

  for (let i = 0; i < iterations; i++) {
    const { prompt, result } = await generationMethod()
    const review = methodIsRephrase
      ? result
      : `Bonjour, ${result.replace(/\n/g, ' ')}`
    const slugId = i + slugIdStarter
    const csv = `Message ${slugId},message-${slugId},${JSON.stringify(
      review
    ).replace(/\s+/g, ' ')}\n`

    console.log(`##### Prompt #####\n\n ${prompt}`)
    console.log(`##### Review #####\n\n ${review}`)
    reviewsResults.write(csv)
  }
}

main()
