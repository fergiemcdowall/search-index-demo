import fs from 'fs'
import path from 'path'
import { URL } from 'url'
const __dirname = new URL('.', import.meta.url).pathname
const json = JSON.parse(
  fs.readFileSync(path.join(__dirname, '/EarthPorn-top-raw.json'))
)

console.log()

fs.writeFileSync(
  path.join(__dirname, '/EarthPorn-top-processed.json'),
  JSON.stringify(
    json.map((r, i) => {
      const d = new Date(r.data.created_utc * 1000)
      return {
        _id: i + '',
        author: r.data.author,
        created_utc: r.data.created_utc,
        month: d.toLocaleString('default', { month: 'long' }),
        permalink: r.data.permalink,
        year: d.getFullYear() + '',
        title: r.data.title,
        thumbnail: r.data.thumbnail,
        url_overridden_by_dest: r.data.url_overridden_by_dest
      }
    }),
    null,
    2
  )
)
