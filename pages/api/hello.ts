import { NextApiRequest, NextApiResponse } from 'next'
import { httpLogger } from '../../lib/logging';

export default (req: NextApiRequest, res: NextApiResponse) => {
  httpLogger(req, res);
  res.status(200).json({ text: 'Hello' })
}