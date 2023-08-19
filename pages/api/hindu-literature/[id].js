import data from '../../../utils/data.json'

export default function handler(req, res) {
    const { id } = req.query
    let filterData = data.filter(item => item.id == id)
    res.status(200).json({ data: filterData })
  }