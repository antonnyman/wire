import generateETag from 'etag'
import fresh from 'fresh'

function isResSent(res) {
  return res.finished || res.headersSent
}

export default function sendHtml(req, res, html) {
  if (isResSent(res)) return

  const etag = generateETag(html)

  if (fresh(req.headers, { etag })) {
    return res.status(304).end()
  }

  if (etag) {
    res.setHeader('ETag', etag)
  }

  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.setHeader('Content-Length', Buffer.byteLength(html))
  res.end(req.method === 'HEAD' ? null : html)
}
