import type { SignatureData } from '../types/signature'
import { sanitizeText, sanitizeUrl } from './sanitize'

function buildContactRow(
  iconUrl: string,
  text: string,
  href: string,
  textColor: string,
  iconSize: number,
  fontSize: number,
): string {
  const lineHeight = fontSize + 4
  const iconCellWidth = iconSize + 12
  const iconOffset = 3

  return `
    <tr>
      <td width="${iconCellWidth}" style="padding:0 0 8px 0; vertical-align:middle; text-align:right;">
        <img src="${sanitizeUrl(iconUrl)}" alt="" width="${iconSize}" height="${iconSize}" style="display:block; border:0; width:${iconSize}px; height:${iconSize}px; margin-left:auto; margin-right:${iconOffset}px;" />
      </td>
      <td style="padding:0 0 8px 0; vertical-align:middle;">
        <a href="${sanitizeUrl(href)}" style="font-family:Arial, Helvetica, sans-serif; font-size:${fontSize}px; line-height:${lineHeight}px; color:${textColor}; text-decoration:none;">
          ${sanitizeText(text)}
        </a>
      </td>
    </tr>
  `
}

export function buildSignatureHtml(data: SignatureData): string {
  const width = Math.max(420, Math.min(1200, Number(data.width) || 700))
  const height = Math.max(220, Math.min(600, Number(data.height) || 250))
  const leftWidth = Math.round(width * 0.46)
  const rightWidth = width - leftWidth
  const contentPaddingTop = Math.max(28, Math.min(44, Math.round(height * 0.16)))
  const contentPaddingRight = Math.max(18, Math.min(28, Math.round(width * 0.035)))
  const contentPaddingLeft = Math.max(16, Math.min(28, Math.round(width * 0.03)))
  const nameFontSize = Math.max(20, Math.min(28, Math.round(width * 0.036)))
  const roleFontSize = Math.max(10, Math.min(13, Math.round(width * 0.017)))
  const roleSpacing = Math.max(2, Math.min(6, Math.round(width * 0.006)))
  const contactFontSize = Math.max(11, Math.min(14, Math.round(width * 0.018)))
  const siteFontSize = Math.max(11, Math.min(13, Math.round(width * 0.017)))
  const iconSize = Math.max(16, Math.min(20, Math.round(width * 0.026)))
  const dividerTop = Math.max(8, Math.min(12, Math.round(height * 0.04)))
  const websitePadding = Math.max(8, Math.min(14, Math.round(height * 0.045)))
  const emailHref = `mailto:${sanitizeText(data.email.trim())}`
  const backgroundImage = data.logoUrl.trim()
    ? `background-image:url('${sanitizeUrl(data.logoUrl)}'); background-size:cover; background-repeat:no-repeat; background-position:center center;`
    : ''

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Assinatura Barrella</title>
</head>
<body style="margin:0; padding:0;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="${width}" height="${height}" style="width:${width}px; height:${height}px; border-collapse:collapse; background-color:${sanitizeText(data.backgroundColor)}; ${backgroundImage}">
    <tr>
      <td width="${leftWidth}" style="width:${leftWidth}px; font-size:0; line-height:0;">&nbsp;</td>
      <td width="${rightWidth}" valign="top" style="width:${rightWidth}px; padding:${contentPaddingTop}px ${contentPaddingRight}px ${websitePadding}px ${contentPaddingLeft}px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="width:100%; border-collapse:collapse;">
          <tr>
            <td colspan="2" style="padding:0 0 4px 10px; font-family:Arial, Helvetica, sans-serif; font-size:${nameFontSize}px; line-height:${nameFontSize + 3}px; font-weight:700; color:${sanitizeText(data.primaryYellow)}; white-space:nowrap;">
              ${sanitizeText(data.fullName)}
            </td>
          </tr>
          <tr>
            <td colspan="2" style="padding:0 0 ${dividerTop}px 10px; font-family:Arial, Helvetica, sans-serif; font-size:${roleFontSize}px; line-height:${roleFontSize + 3}px; letter-spacing:${roleSpacing}px; color:${sanitizeText(data.textColor)}; white-space:nowrap;">
              ${sanitizeText(data.role)}
            </td>
          </tr>
          ${buildContactRow(data.emailIconUrl, data.email, emailHref, sanitizeText(data.mutedTextColor), iconSize, contactFontSize)}
          ${buildContactRow(data.instagramIconUrl, data.instagramText, data.instagramUrl, sanitizeText(data.mutedTextColor), iconSize, contactFontSize)}
          ${buildContactRow(data.phoneIconUrl, data.phoneText, data.phoneUrl, sanitizeText(data.mutedTextColor), iconSize, contactFontSize)}
          ${buildContactRow(data.locationIconUrl, data.addressText, data.addressUrl, sanitizeText(data.mutedTextColor), iconSize, contactFontSize)}
        </table>
      </td>
    </tr>
    <tr>
      <td colspan="2" align="center" style="padding:0 0 ${websitePadding}px 0; font-family:Arial, Helvetica, sans-serif; font-size:${siteFontSize}px; line-height:${siteFontSize + 3}px;">
        <a href="${sanitizeUrl(data.websiteUrl)}" style="color:${sanitizeText(data.textColor)}; text-decoration:none;">
          ${sanitizeText(data.websiteText)}
        </a>
      </td>
    </tr>
  </table>
</body>
</html>`
}
