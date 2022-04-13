
export default function handler(req, res) {
    fetch(`http://localhost:3000/data.json`)
        .then(res => res.json())
        .then(data => {
            res.status(200).json(data)
        })
  }