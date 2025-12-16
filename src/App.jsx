import { useState, useEffect } from 'react'
import { marked } from 'marked'
import html2pdf from 'html2pdf.js'
import './styles.css'

function App() {
  const [markdown, setMarkdown] = useState(`# サンプルドキュメント

これは**マークダウン**からPDFを生成するツールです。

## 機能

- マークダウンエディタ
- リアルタイムプレビュー
- PDF出力

### 使い方

1. 左側のエディタにマークダウンを入力
2. 右側でプレビューを確認
3. 「PDFを生成」ボタンをクリック

---

> 引用文の例です。

\`\`\`javascript
console.log('Hello, World!');
\`\`\`

- リスト項目1
- リスト項目2
- リスト項目3

**太字**と*斜体*のテキストも使用できます。
`)

  const [html, setHtml] = useState('')

  useEffect(() => {
    const convertedHtml = marked(markdown)
    setHtml(convertedHtml)
  }, [markdown])

  const handleGeneratePDF = () => {
    const element = document.getElementById('preview-content')
    const opt = {
      margin: [15, 15, 15, 15],
      filename: 'document.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    }

    html2pdf().set(opt).from(element).save()
  }

  return (
    <div className="app">
      <a
        href="https://github.com/kater-iam/markdown-to-pdf"
        className="github-ribbon"
        target="_blank"
        rel="noopener noreferrer"
      >
        Fork me on GitHub
      </a>
      <header className="header">
        <h1>Markdown to PDF</h1>
        <p>マークダウンからPDFを生成するツール</p>
      </header>
      
      <div className="container">
        <div className="editor-section">
          <div className="section-header">
            <h2>マークダウンエディタ</h2>
          </div>
          <textarea
            className="markdown-editor"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            placeholder="マークダウンを入力してください..."
          />
        </div>

        <div className="preview-section">
          <div className="section-header">
            <h2>プレビュー</h2>
            <button className="generate-btn" onClick={handleGeneratePDF}>
              PDFを生成
            </button>
          </div>
          <div 
            id="preview-content"
            className="preview-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </div>
  )
}

export default App


