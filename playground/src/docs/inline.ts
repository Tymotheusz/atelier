const ESC: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;' }

/** Rend `code` et **gras** dans les textes de la documentation. Le texte est échappé d'abord. */
export function inline(text: string) {
  return text
    .replace(/[&<>]/g, c => ESC[c])
    .replace(/`([^`]+)`/g, '<code class="t-code">$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
}
