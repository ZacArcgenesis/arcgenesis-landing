import { useState } from 'react'

/**
 * VideoEmbed — a privacy-friendly, fast YouTube embed using the "facade"
 * pattern: it renders only a poster image + play button until the visitor
 * clicks. The real player iframe (and its ~1MB of scripts) loads on click,
 * so the embed costs almost nothing on initial page load.
 *
 * Uses youtube-nocookie.com with related-videos suppressed, so it stays
 * clean and doesn't set tracking cookies until play.
 *
 * Self-hides when no `youtubeId` is set, so the section can ship inert and
 * switch on the moment a real ID lands in config (mirrors the buyer-page
 * walkthrough pattern).
 *
 * Props:
 *   youtubeId — the id after watch?v= (e.g. 'dQw4w9WgXcQ'). Empty = hidden.
 *   title     — accessible label + iframe title.
 *   poster    — optional custom poster path in /public. Defaults to the
 *               video's own YouTube thumbnail.
 */
export default function VideoEmbed({ youtubeId, title = 'Video', poster }) {
  const [playing, setPlaying] = useState(false)
  // Thumbnail quality ladder. maxresdefault only exists for HD uploads and
  // 404s otherwise; hqdefault/mqdefault exist for any non-private video. A
  // custom `poster` skips the ladder entirely (and is the reliable choice).
  const ytLadder = [
    `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`,
    `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`,
    `https://i.ytimg.com/vi/${youtubeId}/mqdefault.jpg`,
  ]
  const [rung, setRung] = useState(0)
  const posterSrc = poster || ytLadder[rung]

  if (!youtubeId) return null

  const src =
    `https://www.youtube-nocookie.com/embed/${youtubeId}` +
    `?autoplay=1&rel=0&modestbranding=1&playsinline=1`

  return (
    <div className="video-embed">
      {playing ? (
        <iframe
          className="video-embed-frame"
          src={src}
          title={title}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className="video-embed-poster"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
        >
          <img
            src={posterSrc}
            alt=""
            loading="lazy"
            /* Step down the quality ladder if a thumbnail size is missing.
               Only applies to the auto YouTube thumbnail, not a custom poster. */
            onError={() => {
              if (!poster && rung < ytLadder.length - 1) setRung(rung + 1)
            }}
          />
          <span className="video-embed-play" aria-hidden="true" />
        </button>
      )}
    </div>
  )
}
