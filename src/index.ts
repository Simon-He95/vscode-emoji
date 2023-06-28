import type * as vscode from 'vscode'
import { createCompletionItem, registerCompletionItemProvider } from '@vscode-use/utils'
import { data } from './data'

export function activate(context: vscode.ExtensionContext) {
  const cacheMap = data.map(([content, detail]) => createCompletionItem({ content: `${content}${detail}`, detail, snippet: detail }))
  context.subscriptions.push(registerCompletionItemProvider(['markdown', 'plaintext', 'javascript', 'javascriptreact', 'typescriptreact', 'html', 'vue', 'css'], () => cacheMap, [':']))
}

export function deactivate() {

}
