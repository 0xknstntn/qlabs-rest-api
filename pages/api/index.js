export default async function handler(req, res) {
        switch (req.method) {
                case "POST":
                        if (req.body == null) {
                                res.setHeader('Access-Control-Allow-Origin', '*');
                                res.status(200).json(JSON.parse('"{\"code\": 12,\"message\": \"Not Implemented\",\"details\":[]}"'));
                        }
                        var data = await fetch("http://89.108.83.252:1317", {
                                method: 'POST',
                                headers: {
                                        'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(req.body),
                        });

                        var dataJson = await data.json()
                        console.log(dataJson)
                        res.setHeader('Access-Control-Allow-Origin', '*');
                        res.status(200).json(dataJson);
                        break;
                case "GET":
                        res.setHeader('Access-Control-Allow-Origin', '*');
                        res.status(200).json(JSON.parse('"{\"code\": 12,\"message\": \"Not Implemented\",\"details\":[]}"'));
        }
}