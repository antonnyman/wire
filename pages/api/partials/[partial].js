import { renderToStaticMarkup, renderToString } from 'react-dom/server'
import sendHtml from '../../../lib/sendHtml'
export default function partial(req, res) {
  const { Biff } = require('../../../partials/biff')
  const something = renderToString(<Biff />)
  return sendHtml(req, res, something)
}
