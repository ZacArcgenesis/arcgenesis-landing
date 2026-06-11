import { useState } from 'react'
import { CONTENT } from '../config/content.js'
import Highlight from '../components/Highlight.jsx'
import ProseBlocks from '../components/ProseBlocks.jsx'

/**
 * Guide — white band. The founder / credibility section: the visitor (hero)
 * meets the guide right after the problem. Photo on one side, story on the
 * other; stacked on mobile with the photo first.
 *
 * The photo at public/zac.webp is the same image used on the social media
 * profiles, so video viewers recognize the face. If the file ever goes
 * missing, a quiet placeholder panel renders in its place.
 */
export default function Guide() {
  const { guide } = CONTENT
  const [photoMissing, setPhotoMissing] = useState(false)

  return (
    <section id="guide" className="section-wrap bg-white">
      <div className="container section-pad">
        <div className="founder-grid">
          <div className="founder-photo-wrap">
            {photoMissing ? (
              <div className="founder-photo founder-photo-placeholder" aria-hidden="true">
                <span>ZB</span>
              </div>
            ) : (
              <img
                src="/zac.webp"
                alt={guide.photoAlt}
                className="founder-photo"
                loading="lazy"
                onError={() => setPhotoMissing(true)}
              />
            )}
          </div>

          <div className="founder-copy">
            <div className="accent-bar" />
            <h2 className="headline-lg">
              <Highlight text={guide.headline} />
            </h2>
            <div className="founder-body">
              <ProseBlocks blocks={guide.body} />
            </div>
            <p className="founder-attribution">{guide.attribution}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
