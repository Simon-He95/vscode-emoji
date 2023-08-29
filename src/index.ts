import type * as vscode from 'vscode'
import { createCompletionItem, createRange, getSelection, registerCommand, registerCompletionItemProvider, updateText } from '@vscode-use/utils'
import { data } from './data'

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(registerCommand('emoji.select', (emoji) => {
    const { line, lineText } = getSelection()!
    const word = `:${emoji}`
    const lineStart = lineText.indexOf(word)
    updateText((edit) => {
      edit.replace(createRange([line, lineStart], [line, lineStart + word.length - 1]), word.slice(1))
    })
  }))

  const names: string[] = []
  const cacheMap = data.map(([content, detail]: any) => {
    if (names.includes(content))
      return undefined
    names.push(content)
    const item = createCompletionItem({ content: `${content}${detail}`, detail, snippet: detail, type: 4 })
    item.command = {
      title: detail,
      command: 'emoji.select',
      arguments: [detail],
    }
    return item
  }).filter(Boolean) as vscode.CompletionItem[]
  context.subscriptions.push(registerCompletionItemProvider(['markdown', 'plaintext'], () => cacheMap, [':']))
}

export function deactivate() {

}
