import fs from 'fs'
import completion from './completion'

const main = async () => {
  const args = process.argv.slice(2);
  const iterations = parseInt(args[0] ?? 1)
  const slugIdStarter = parseInt(args[1] ?? 1)
  const reviewsResults = fs.createWriteStream('results.csv', { flags: 'a' })

  for (let i = 0; i < iterations; i++) {
    const { prompt, result } = await completion()
    const review = `Bonjour, ${result.replace(/\n/g, ' ')}`
    const slugId = i + slugIdStarter
    const csv = `Message ${slugId},message-${slugId},${JSON.stringify(review).replace(/\s+/g, ' ')}\n`

    console.log(`##### Prompt #####\n\n ${prompt}`)
    console.log(`##### Review #####\n\n ${review}`)
    reviewsResults.write(csv)
  }
}

main()
