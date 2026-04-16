import type { SignatureData } from '../types/signature'

export const defaultSignatureData: SignatureData = {
  fullName: 'Nayara Zimenez',
  role: 'EXECUTIVA DE CONTAS',
  email: 'nayara@barrellaeventos.com.br',
  instagramText: '@barrellaeventos',
  instagramUrl: 'https://instagram.com/barrellaeventos',
  phoneText: '11 99536-9201',
  phoneUrl: 'https://wa.me/5511995369201',
  addressText: 'Rua Ourinhos, 376 - Vila Bertioga',
  addressUrl:
    'https://www.google.com/maps/search/?api=1&query=Rua+Ourinhos,+376+-+Vila+Bertioga',
  websiteText: 'www.barrellaeventos.com.br',
  websiteUrl: 'https://www.barrellaeventos.com.br',
  logoUrl: '/assets/logo-bg.png',
  emailIconUrl: '/assets/icon-email.png',
  instagramIconUrl: '/assets/icon-instagram.png',
  phoneIconUrl: '/assets/icon-phone.png',
  locationIconUrl: '/assets/icon-location.png',
  backgroundTextureUrl: '',
  width: 700,
  height: 250,
  backgroundColor: '#0B0B0B',
  primaryYellow: '#FFC400',
  primaryRed: '#E31B23',
  textColor: '#FFFFFF',
  mutedTextColor: '#D6D6D6',
}

export function cloneDefaultSignatureData(): SignatureData {
  return { ...defaultSignatureData }
}

