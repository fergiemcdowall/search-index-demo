import fs from 'fs'
import path from 'path'
import { eng } from 'stopword'
import { SearchIndex } from 'search-index'
import { URL } from 'url'

const __dirname = new URL('.', import.meta.url).pathname
const data = JSON.parse(
  fs.readFileSync(path.join(__dirname, '/EarthPorn-top-processed.json'))
)

const { INDEX, EXPORT, PUT } = new SearchIndex({
  name: path.join(__dirname, '/earthporn'),
  stopwords: eng
})

INDEX.STORE.clear()
  .then(() =>
    PUT(data, {
      doNotIndexField: ['thumbnail', 'url_overridden_by_dest']
    })
  )
  .then(() => EXPORT())
  .then(idx =>
    fs.writeFileSync(
      path.join(__dirname, '/EarthPorn-top-search-index.json'),
      JSON.stringify(idx, null, 2)
    )
  )
