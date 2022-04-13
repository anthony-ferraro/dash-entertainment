import {server} from '../../../config/'

export default function handler(req, res) {
    fetch(`${server}/data.json`)
        .then(res => res.json())
        .then(data => {
            res.status(200).json(data)
        })
  }