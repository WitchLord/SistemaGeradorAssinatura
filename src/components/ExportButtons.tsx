interface ExportButtonsProps {
  onCopy: () => Promise<void>
  onDownload: () => void
  onReset: () => void
  onToggleHtml: () => void
  showHtml: boolean
  feedback: string
}

export function ExportButtons({
  onCopy,
  onDownload,
  onReset,
  onToggleHtml,
  showHtml,
  feedback,
}: ExportButtonsProps) {
  return (
    <div className="export-card">
      <h2>Ações</h2>
      <div className="actions">
        <button className="btn btn-primary" type="button" onClick={() => void onCopy()}>
          Copiar HTML
        </button>
        <button className="btn btn-secondary" type="button" onClick={onDownload}>
          Baixar HTML
        </button>
        <button className="btn btn-ghost" type="button" onClick={onReset}>
          Resetar
        </button>
        <button className="btn" type="button" onClick={onToggleHtml}>
          {showHtml ? 'Ocultar HTML' : 'Visualizar HTML'}
        </button>
      </div>
      <p className="feedback">{feedback || ' '}</p>
    </div>
  )
}
