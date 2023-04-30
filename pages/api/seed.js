//kad si napravio supabase bazu, prisma semu(da ne bi sam pisao SQL), sad pomocu prizme pravis podatke ovde 
import {prisma} from "../../server/db/client"


export default async function handle (req,res) {
    await prisma.blog.deleteMany();
    await prisma.vrstaBloga.deleteMany();

    await prisma.vrstaBloga.createMany({
        data:[{title:"bosch"},{title:"dewalt"},{title: "makita"}]
    })

    const vrste = await prisma.vrstaBloga.findMany();

    const boschVrstaId = 
    vrste.find((vrsta)=> vrsta.title === "bosch")?.id || 1;
    const dewaltVrstaId = 
    vrste.find((vrsta)=> vrsta.title === "dewalt")?.id || 1;
    const makitaVrstaId = 
    vrste.find((vrsta)=> vrsta.title === "makita")?.id || 1;

    await prisma.blog.createMany({
        data:[
        {
            title:"Bosch je najbolji",
            main_img:"/boschlogo.png",
            description:"A powerful and emotional film about hope, friendship, and redemption set in a prison.A powerful and emotional film about hope, friendship, and redemption set in a prison.create interactive effects within web browsers.",
            slug:"boschjenajbolji",
            vrsta_id: boschVrstaId
        },
        {
            title:"Bosch je drugi najbolji",
            main_img:"/boschlogo.png",
            description:"A powerfula and emotional film about hope, friendship, and redemption set in a prison.A powerful and emotional film about hope, friendship, and redemption set in a prison.create interactive effects within web browsers.",
            slug:"boschjedruginajbolji",
            vrsta_id: boschVrstaId
        },
        {
            title:"Dewalt je najbolji",
            main_img:"/dewaltlogo.png",
            description:"A powerful and emotional film about hope, friendship, and redemption set in a prison.A powerful and emotional film about hope, friendship, and redemption set in a prison.create interactive effects within web browsers.",
            slug:"dewaltjenajbolji",
            vrsta_id: dewaltVrstaId
        },
        {
            title:"Makita je najbolji",
            main_img:"/boschlogo.png",
            description:"A powerful and emotional film about hope, friendship, and redemption set in a prison.A powerful and emotional film about hope, friendship, and redemption set in a prison.create interactive effects within web browsers.",
            slug:"makitajenajbolji",
            vrsta_id: makitaVrstaId
        },
    ]
    })
    res.status(200).json({ name: 'It\'s all good!' })
}