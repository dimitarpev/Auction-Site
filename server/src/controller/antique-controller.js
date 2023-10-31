import statusCodes from "http-status-codes";
import {isLoggedIn} from "../middleware/isLoggedIn.js";
import {isAdmin} from "../middleware/isAdmin.js";
import {v4 as uuidv4} from 'uuid';

let now = new Date();
now.setDate(now.getDate() + 3);
const endTime = now.getTime();

// TODO: figure out the dateTimes
let antiques = [
    {
        id: "1",
        name: "Bulgarian Orthodox Vase",
        type: "vase",
        origin: "Bulgaria",
        year: 1760,
        material: "Porcelain",
        description: "old vase",
        startTime: Date.now(),
        endTime: endTime,
        startingPrice: 800,
        image: "https://i.etsystatic.com/12242579/r/il/600d1c/4006288033/il_fullxfull.4006288033_ah1y.jpg"
    },
    {
        id: "2",
        name: "Panagyurishte Treasure",
        type: "Treasure",
        origin: "Bulgaria",
        year: -400,
        material: "Gold",
        description: "The treasure consists of a phiale, an amphora, three oinochoai and four rhytons with total weight of 6.164 kg of 24-karat gold. All nine vessels are richly and skilfully decorated. It is dated from the turn of the 4th-3rd centuries BC. It is thought to have been used as a royal ceremonial set by the Thracian king Seuthes III.",
        startTime: Date.now(),
        endTime: endTime,
        startingPrice: 10000000,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sofia_-_Panagyurishte_Thracian_Gold_Treasure.jpg/1280px-Sofia_-_Panagyurishte_Thracian_Gold_Treasure.jpg"

    }
]



export function getAllAntiques(req, res) {
    // TODO: write test cases for filtering
    const origin = req.query.origin;
    const material = req.query.material;
    const year = Number(req.query.year);
    const search = req.query.search;
    if (origin === "All" && material === "All" && year === 0) {
        // If both filters are "All", return all antiques
        res.json(antiques);
        return;
    }

    let filteredAntiques = antiques;

    if (material && material !== "All") {
        filteredAntiques = filteredAntiques.filter(antique => antique.material === material);
    }

    if (origin && origin !== "All") {
        filteredAntiques = filteredAntiques.filter(antique => antique.origin === origin);
    }

    if (year && year !== 0){
        if (year > 0){
            filteredAntiques = filteredAntiques.filter(antique => antique.year >= year && antique.year < year + 100);
        } else {
            filteredAntiques = filteredAntiques.filter(antique => antique.year <= year && antique.year > year - 100);
        }
    }

    if (search && search !== ""){
        filteredAntiques = filteredAntiques.filter(antique => antique.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (filteredAntiques.length === 0) {
        // If no matching antiques found, return an empty array
        return res.json([]);
    } else {
        return res.json(filteredAntiques);
    }
}


export function getSpecificAntique(req, res) {
    const antiqueId = req.params.antiqueId;

    const specificAntique = antiques.find(antique => antique.id === antiqueId);

    if (specificAntique) {
        res.json(specificAntique);
    } else {
        res.status(statusCodes.NOT_FOUND).json({error: 'Antique not found'});
    }
}

export function addAntique(req, res) {
    const antique = req.body;
    antique.id = uuidv4();
    const errors = checkAntiqueForErrors(antique);

    if (errors.length > 0){
        return res.status(statusCodes.BAD_REQUEST).json({error: errors});
    }

    antiques.push(antique);
    console.log(antique);
    res.status(statusCodes.CREATED).json({message: 'Antique was added!'});
}

export function editAntique(req,res) {
    const antique = req.body;
    const antiqueId = req.params.antiqueId;
    const errors = checkAntiqueForErrors(antique);

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
    const antiqueId = req.params.antiqueId;
    console.log(antique);
    const antiqueIndex = antiques.findIndex(antique => antique.id === antiqueId);
    if (antiqueIndex !== -1) {
        const deletedAntique = antiques.splice(antiqueIndex, 1)[0];
        res.json({ message: 'Antique was deleted', deletedAntique });
    } else {
        res.status(statusCodes.NOT_FOUND).json({ error: 'Antique not found' });
    }
}

function checkAntiqueForErrors(antique) {
    const errors = [];

    if (!("name" in antique) || antique.name === '' || antique.name.length < 5) {
        errors.push("Name needs to be at least 5 characters long");
    }
    if (!("type" in antique) || antique.type === '' || antique.type.length < 3){
        errors.push("Type needs to be at least 3 characters long");
    }
    if (!("origin" in antique) || antique.origin === '') {
        errors.push("No origin in antique");
    }
    if (!("year" in antique) || antique.year === '' || typeof antique.year === 'number' && isFinite(antique.year)){
        errors.push("No year in antique");
    }
    if (!("material" in antique) || antique.material === ''){
        errors.push("No material in antique");
    }
    if (!("description" in antique) || antique.description === '') {
        errors.push("No description in antique");
    }
    if (!("endTime" in antique) || antique.endTime === ''){
        errors.push("No endTime in antique");
    }
    if (!("startingPrice" in antique) || antique.startingPrice < 0 || typeof antique.startingPrice !== 'number' && !isFinite(antique.startingPrice)){
        errors.push("No starting price in antique or starting price less than 0")
    }
    if (!("image" in antique) || antique.image === '') {
        errors.push("No image in antique");
    }

    return errors;
}
