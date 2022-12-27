import fs from 'fs'
import completion from './completion'
import rephrase from './rephrase'

const main = async () => {
  const args = process.argv.slice(2)
  const iterations = parseInt(args[0] ?? 1)
  const slugIdStarter = parseInt(args[1] ?? 1)
  const reviewsResults = fs.createWriteStream('results.csv', { flags: 'a' })

  for (let i = 0; i < iterations; i++) {
    const { prompt, result } = await completion()
    console.log(`##### Prompt #####\n\n ${prompt}`)
    const review = `Bonjour, ${result.replace(/\n/g, ' ')}`
    console.log(`##### Review #####\n\n ${review}`)
    const rephrasedReview = await rephrase(review)
    const slugId = i + slugIdStarter
    const csv = `Message ${slugId},message-${slugId},${JSON.stringify(
      rephrasedReview
    ).replace(/\s+/g, ' ')}\n`
    reviewsResults.write(csv)
  }
}

main()
