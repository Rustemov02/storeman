export default function handler(req , res){
    
    if(req.method === 'POST') {
        const userData = req.body;

        res.status(200).json({message : 'Data received'})

        console.log('Received data : ' , userData)
    }else {
        res.status(405).json({message : "Method not allowed !"})
    }
}