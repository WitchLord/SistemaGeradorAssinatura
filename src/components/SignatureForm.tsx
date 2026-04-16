import type { SignatureData } from '../types/signature'
import { FormField } from './FormField'

interface SignatureFormProps {
  data: SignatureData
  onChange: <K extends keyof SignatureData>(field: K, value: SignatureData[K]) => void
}

function Section({ title }: { title: string }) {
  return <h2 className="section-title">{title}</h2>
}

export function SignatureForm({ data, onChange }: SignatureFormProps) {
  const updateField = (field: string, value: string | number) => {
    onChange(field as keyof SignatureData, value as SignatureData[keyof SignatureData])
  }

  return (
    <div className="form-card">
      <h1>Gerador de Assinaturas - Barrela</h1>
      <p className="subtitle">Preencha os campos para gerar a assinatura de e-mail em tempo real.</p>

      <Section title="Dados pessoais" />
      <FormField label="Nome completo" name="fullName" value={data.fullName} onChange={updateField} />
      <FormField label="Cargo" name="role" value={data.role} onChange={updateField} />
      <FormField label="E-mail" name="email" value={data.email} type="email" onChange={updateField} />
      <FormField
        label="Instagram (texto)"
        name="instagramText"
        value={data.instagramText}
        onChange={updateField}
      />
      <FormField label="Instagram (URL)" name="instagramUrl" value={data.instagramUrl} type="url" onChange={updateField} />
      <FormField label="Telefone (texto)" name="phoneText" value={data.phoneText} onChange={updateField} />
      <FormField label="Telefone (URL)" name="phoneUrl" value={data.phoneUrl} type="url" onChange={updateField} />
      <FormField label="Endereço (texto)" name="addressText" value={data.addressText} onChange={updateField} />
      <FormField label="Endereço (URL)" name="addressUrl" value={data.addressUrl} type="url" onChange={updateField} />
      <FormField label="Website (texto)" name="websiteText" value={data.websiteText} onChange={updateField} />
      <FormField label="Website (URL)" name="websiteUrl" value={data.websiteUrl} type="url" onChange={updateField} />

      <Section title="Assets visuais" />
      <FormField label="Arte principal (Logo+BG) URL" name="logoUrl" value={data.logoUrl} onChange={updateField} />
      <FormField label="Ícone E-mail URL" name="emailIconUrl" value={data.emailIconUrl} onChange={updateField} />
      <FormField label="Ícone Instagram URL" name="instagramIconUrl" value={data.instagramIconUrl} onChange={updateField} />
      <FormField label="Ícone Telefone URL" name="phoneIconUrl" value={data.phoneIconUrl} onChange={updateField} />
      <FormField label="Ícone Endereço URL" name="locationIconUrl" value={data.locationIconUrl} onChange={updateField} />
      <FormField
        label="Textura de fundo URL (opcional)"
        name="backgroundTextureUrl"
        value={data.backgroundTextureUrl || ''}
        onChange={updateField}
      />

      <Section title="Aparência" />
      <div className="grid-two">
        <FormField label="Largura" name="width" type="number" value={data.width} min={420} max={1200} onChange={updateField} />
        <FormField label="Altura" name="height" type="number" value={data.height} min={220} max={600} onChange={updateField} />
      </div>
      <div className="grid-two">
        <FormField label="Fundo" name="backgroundColor" type="color" value={data.backgroundColor} onChange={updateField} />
        <FormField label="Amarelo" name="primaryYellow" type="color" value={data.primaryYellow} onChange={updateField} />
      </div>
      <div className="grid-two">
        <FormField label="Vermelho" name="primaryRed" type="color" value={data.primaryRed} onChange={updateField} />
        <FormField label="Texto" name="textColor" type="color" value={data.textColor} onChange={updateField} />
      </div>
      <FormField label="Texto secundário" name="mutedTextColor" type="color" value={data.mutedTextColor} onChange={updateField} />
    </div>
  )
}
