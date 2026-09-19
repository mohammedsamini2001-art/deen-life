export interface AiMessage {
  role: 'system' | 'user'
  content: string
}

export interface AiProviderResult {
  text: string
}

export interface AiProvider {
  generate(messages: AiMessage[]): Promise<AiProviderResult>
}
