import statusCodes from "http-status-codes";

let now = new Date();
now.setDate(now.getDate() + 3);
const endTime = now.getTime();

// TODO: figure out the dateTimes
let antiques = [
    {
        id: 1,
        name: "Bulgarian Orthodox Vase",
        type: "vase",
        origin: "Bulgaria",
        year: 1760,
        material: "porcelain",
        description: "old vase",
        startTime: Date.now(),
        endTime: endTime,
        startingPrice: 800,
        image: "https://i.etsystatic.com/12242579/r/il/600d1c/4006288033/il_fullxfull.4006288033_ah1y.jpg"
    },
    {
        id: 2,
        name: "Panagyurishte Treasure",
        type: "Treasure",
        origin: "Bulgaria",
        year: -400,
        material: "Gold",
        description: "The treasure consists of a phiale, an amphora, three oinochoai and four rhytons with total weight of 6.164 kg of 24-karat gold.[2][3][4] All nine vessels are richly and skilfully decorated.[5] It is dated from the turn of the 4th-3rd centuries BC.[6] It is thought to have been used as a royal ceremonial set by the Thracian king Seuthes III.[7][8][9]",
        startTime: Date.now(),
        endTime: endTime,
        startingPrice: 10000000,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sofia_-_Panagyurishte_Thracian_Gold_Treasure.jpg/1280px-Sofia_-_Panagyurishte_Thracian_Gold_Treasure.jpg"

    }
]



export function getAllAntiques(req, res) {
    res.json(antiques);
}


export function getSpecificAntique(req, res) {
    const antiqueId = Number(req.params.antiqueId);

    const specificAntique = antiques.find(antique => antique.id === antiqueId);

    if (specificAntique) {
        res.json(specificAntique);
    } else {
        res.status(statusCodes.NOT_FOUND).json({error: 'Antique not found'});
    }
}
export function addAntique(req, res) {
    const antique = req.body;
    const errors = [];

    //Check if any of the fields are empty
    if (!("name" in antique) || antique.name === '') {
        errors.push("No name in antique");
    }
    if (!("type" in antique) || antique.type === ''){
        errors.push("No type in antique");
    }
    if (!("origin" in antique) || antique.origin === '') {
        errors.push("No origin in antique");
    }
    if (!("year" in antique) || antique.year === ''){
        errors.push("No year in antique");
    }
    if (!("material" in antique) || antique.material === ''){
        errors.push("No material in antique");
    }
    if (!("description" in antique) || antique.description === '') {
        errors.push("No description in antique");
    }
    if (!("endTime" in antique)){
        errors.push("No endTime in antique");
    }
    if (!("startingPrice" in antique) || antique.startingPrice < 0){
        errors.push("No starting price in antique or starting price less than 0")
    }
    if (!("image" in antique) || antique.image === '') {
        errors.push("No image in antique");
    }
    if (errors.length > 0){
        return res.status(statusCodes.BAD_REQUEST).json({error: errors});
    }

    antiques.push(antique);
    console.log(antique);
    res.status(statusCodes.CREATED).json({message: 'Antique was added!'});
}
export function editAntique(req,res) {
    const antique = req.body;
    const antiqueId = Number(req.params.antiqueId);
    const errors = [];

    //Check if any of the fields are empty
    if (!("name" in antique) || antique.name === '') {
        errors.push("No name in antique");
    }
    if (!("type" in antique) || antique.type === ''){
        errors.push("No type in antique");
    }
    if (!("origin" in antique) || antique.origin === '') {
        errors.push("No origin in antique");
    }
    if (!("year" in antique) || antique.year === ''){
        errors.push("No year in antique");
    }
    if (!("material" in antique) || antique.material === ''){
        errors.push("No material in antique");
    }
    if (!("description" in antique) || antique.description === '') {
        errors.push("No description in antique");
    }
    if (!("endTime" in antique)){
        errors.push("No endTime in antique");
    }
    if (!("startingPrice" in antique) || antique.startingPrice < 0){
        errors.push("No starting price in antique or starting price less than 0")
    }
    if (!("image" in antique) || antique.image === '') {
        errors.push("No image in antique");
    }
    if (errors.length > 0){
        return res.status(statusCodes.BAD_REQUEST).json({error: errors});
    }

    const antiqueIndex = antiques.findIndex(antique => antique.id === antiqueId);

        antiques[antiqueIndex] = {
            ...antiques[antiqueIndex],
            ...antique
        };
        console.log(antiques[antiqueIndex]);
        res.json({ message: 'Antique was updated!' });
}

export function deleteAntique(req,res) {
    const antique = req.body;
    const antiqueId = Number(req.params.antiqueId);
    console.log(antique);
    const antiqueIndex = antiques.findIndex(antique => antique.id === antiqueId);
    if (antiqueIndex !== -1) {
        const deletedAntique = antiques.splice(antiqueIndex, 1)[0];
        res.json({ message: 'Antique was deleted', deletedAntique });
    } else {
        res.status(statusCodes.NOT_FOUND).json({ error: 'Antique not found' });
    }
}
