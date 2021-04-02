import { query as q } from 'faunadb';

import { serverClient } from '../../../utils/fauna-auth';

export default async (req, res) => {
  try {
    const customers = await serverClient.query(
      q.Map(
        q.Paginate(
          q.Match(
            q.Index('all_customers')
          )
        ),
        (ref) => q.Get(ref)
      )
    );

    res.status(200).json(customers.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}