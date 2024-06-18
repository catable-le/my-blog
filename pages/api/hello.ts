// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { mock,Random } from 'mockjs';
type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json(
    mock({
      'list|1-3': [
        {
        'name|1':[Random.cname(),Random.cname(),Random.cname()],
        'birthday|1':[Random.date('yyyy-MM-dd'),Random.date('yyyy-MM-dd'),Random.date('yyyy-MM-dd')],
        'address|1':[Random.county(true),Random.county(true),Random.county(true)],
        },
  ],
    })
  );
}
