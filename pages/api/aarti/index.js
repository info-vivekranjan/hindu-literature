import data from '../../../utils/data.json'

export default function handler(req, res) {
    const { substring } = req.query;
  
    const filteredData = data?.filter(item =>
      item?.title.toLowerCase().includes(substring?.toLowerCase())
    );


    let totalData;
    if(substring){
        totalData = filteredData
    }else{
        totalData = data
    }

    res.status(200).json({ data: totalData })
}