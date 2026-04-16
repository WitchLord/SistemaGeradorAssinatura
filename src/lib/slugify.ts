import type { SignatureData } from '../types/signature'

function normalize(input: string): string {
  return input
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function buildDownloadFileName(data: Pick<SignatureData, 'fullName'>): string {
  const nameSlug = normalize(data.fullName) || 'colaborador'
  return `assinatura-barrella-${nameSlug}.html`
}
