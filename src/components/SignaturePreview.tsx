import { useEffect, useRef, useState } from 'react'

interface SignaturePreviewProps {
  html: string
  width: number
  height: number
}

export function SignaturePreview({ html, width, height }: SignaturePreviewProps) {
  const stageRef = useRef<HTMLDivElement | null>(null)
  const [stageWidth, setStageWidth] = useState(760)

  useEffect(() => {
    const element = stageRef.current
    if (!element) {
      return
    }

    const updateMetrics = () => {
      setStageWidth(element.clientWidth)
    }

    updateMetrics()

    const observer = new ResizeObserver(updateMetrics)
    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const availableWidth = Math.max(280, stageWidth - 48)
  const availableHeight = 330
  const scale = Math.min(1, availableWidth / width, availableHeight / height)

  return (
    <div className="preview-card">
      <div className="preview-header">
        <h2>Preview da assinatura</h2>
        <span>
          {width} x {height}px
        </span>
      </div>
      <div ref={stageRef} className="preview-stage">
        <div
          className="preview-frame"
          style={{
            width: `${width}px`,
            height: `${height}px`,
            transform: `scale(${scale})`,
          }}
        >
          <iframe
            key={html}
            title="Preview da assinatura"
            srcDoc={html}
            scrolling="no"
            style={{ width: `${width}px`, height: `${height}px`, border: 'none', background: '#fff' }}
          />
        </div>
      </div>
    </div>
  )
}
