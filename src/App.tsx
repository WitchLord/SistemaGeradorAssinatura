import { useMemo, useState } from 'react'
import './index.css'
import { ExportButtons } from './components/ExportButtons'
import { SignatureForm } from './components/SignatureForm'
import { SignaturePreview } from './components/SignaturePreview'
import { buildSignatureHtml } from './lib/buildSignatureHtml'
import { cloneDefaultSignatureData } from './lib/defaults'
import { downloadHtml } from './lib/downloadHtml'
import { copyHtml } from './lib/copyHtml'
import { buildDownloadFileName } from './lib/slugify'
import type { SignatureData } from './types/signature'

function App() {
  const [formData, setFormData] = useState<SignatureData>(cloneDefaultSignatureData)
  const [feedback, setFeedback] = useState('')
  const [showHtml, setShowHtml] = useState(false)

  const html = useMemo(() => buildSignatureHtml(formData), [formData])

  const updateField = <K extends keyof SignatureData>(field: K, value: SignatureData[K]) => {
    setFormData((current) => ({ ...current, [field]: value }))
  }

  const handleCopy = async () => {
    try {
      const success = await copyHtml(html)
      setFeedback(success ? 'HTML copiado para a área de transferência.' : 'Não foi possível copiar o HTML.')
    } catch {
      setFeedback('Falha ao copiar HTML. Verifique permissões do navegador.')
    }
  }

  const handleDownload = () => {
    const filename = buildDownloadFileName(formData)
    downloadHtml(filename, html)
    setFeedback(`Arquivo ${filename} baixado.`)
  }

  const handleReset = () => {
    setFormData(cloneDefaultSignatureData())
    setFeedback('Campos restaurados para os valores padrão.')
  }

  return (
    <div className="app-layout">
      <aside>
        <SignatureForm data={formData} onChange={updateField} />
      </aside>

      <main>
        <SignaturePreview html={html} width={formData.width} height={formData.height} />
        <ExportButtons
          onCopy={handleCopy}
          onDownload={handleDownload}
          onReset={handleReset}
          onToggleHtml={() => setShowHtml((value) => !value)}
          showHtml={showHtml}
          feedback={feedback}
        />

        {showHtml && (
          <section className="html-card">
            <h2>HTML gerado</h2>
            <textarea readOnly value={html} />
          </section>
        )}
      </main>
    </div>
  )
}

export default App
