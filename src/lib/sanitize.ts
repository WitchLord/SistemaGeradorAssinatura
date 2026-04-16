const escapeMap: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}

export function sanitizeText(input: string): string {
  return input.replace(/[&<>"']/g, (char) => escapeMap[char])
}

export function sanitizeUrl(url: string): string {
  const trimmed = url.trim()
  if (!trimmed) {
    return '#'
  }

  const lowered = trimmed.toLowerCase()
  const isAllowedProtocol =
    lowered.startsWith('http://') ||
    lowered.startsWith('https://') ||
    lowered.startsWith('mailto:') ||
    lowered.startsWith('tel:') ||
    lowered.startsWith('/') ||
    lowered.startsWith('./') ||
    lowered.startsWith('../')

  if (!isAllowedProtocol) {
    return '#'
  }

  return sanitizeText(trimmed)
}
