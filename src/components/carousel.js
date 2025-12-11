import React, { useEffect, useMemo, useRef, useState } from 'react'
import ModalImage from '../lightbox-components/Modal'

export default function Carousel({ images = [], width = 900, height = 600, showThumbnails = true }) {
  // Normalize images: accept nested arrays, strings or objects
  const flat = useMemo(() => {
    const list = Array.isArray(images) ? images.flat(Infinity) : []
    return list.map((it) => {
      if (typeof it === 'string') return { src: it, thumb: it, caption: '' }
      // support objects that use `file`, `large_file`, or `src`
      const src = it.file || it.src || it.small || it
      const large = it.large_file || it.large || it.file || src
      const thumb = it.thumb || it.file || it.src || src
      return {
        src,
        large,
        thumb,
        caption: it.caption || it.alt || ''
      }
    })
  }, [images])

  const count = flat.length
  const [index, setIndex] = useState(0)
  const trackRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + count) % count)
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % count)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [count])

  useEffect(() => {
    if (index >= count) setIndex(Math.max(0, count - 1))
  }, [count])

  if (count === 0) return null

  const current = flat[index]

  function shouldShowCaption(caption) {
    if (!caption) return false
    if (/\.[a-zA-Z0-9]{2,4}$/.test(caption)) return false
    return true
  }

  const containerStyle = {
    width: '100%',
    maxWidth: typeof width === 'number' ? `${width}px` : width,
    margin: '0 auto'
  }

  const viewportStyle = {
    width: '100%',
    height: typeof height === 'number' ? `${height}px` : height,
    overflow: 'hidden',
    position: 'relative',
    background: '#000'
  }

  const trackStyle = {
    display: 'flex',
    transition: 'transform 400ms ease',
    transform: `translateX(-${index * 100}%)`
  }

  const slideStyle = {
    flex: '0 0 100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  const imgStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain'
  }

  const arrowBase = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(0,0,0,0.5)',
    border: 'none',
    color: '#fff',
    width: 44,
    height: 44,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 20,
    pointerEvents: 'auto',
    borderRadius: 4
  }

  const thumbBarStyle = {
    display: 'flex',
    gap: 8,
    overflowX: 'auto',
    paddingTop: 12,
    justifyContent: 'center'
  }

  const thumbStyle = (active) => ({
    width: 80,
    height: 60,
    objectFit: 'cover',
    cursor: 'pointer',
    border: active ? '3px solid #007acc' : '2px solid rgba(0,0,0,0.15)',
    boxSizing: 'border-box'
  })

  return (
    <div ref={containerRef} style={containerStyle}>
      <div style={viewportStyle} aria-roledescription="carousel">
        <button
          type="button"
          aria-label="Previous"
          onClick={() => setIndex((i) => (i - 1 + count) % count)}
          style={{ ...arrowBase, left: 8 }}
        >
          ‹
        </button>

        <div ref={trackRef} style={trackStyle}>
          {flat.map((item, i) => (
            <div key={i} style={slideStyle}>
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ maxWidth: '100%', maxHeight: '100%' }}>
                  <ModalImage
                    small={item.src}
                    large={item.large}
                    alt={shouldShowCaption(item.caption) ? item.caption : ''}
                    height={typeof height === 'number' ? `${height}px` : height}
                    width="100%"
                    style={imgStyle}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          aria-label="Next"
          onClick={() => setIndex((i) => (i + 1) % count)}
          style={{ ...arrowBase, right: 8 }}
        >
          ›
        </button>

        <div style={{ position: 'absolute', bottom: 8, right: 12, color: '#fff', background: 'rgba(0,0,0,0.4)', padding: '4px 8px', borderRadius: 4, fontSize: 13 }}>
          {index + 1} / {count}
        </div>
      </div>

      {showThumbnails && (
        <div style={thumbBarStyle} role="tablist" aria-label="Thumbnails">
          {flat.map((item, i) => (
            <img
              key={i}
              src={item.thumb}
              alt={''}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIndex(i) }}
              onClick={() => setIndex(i)}
              style={thumbStyle(i === index)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
