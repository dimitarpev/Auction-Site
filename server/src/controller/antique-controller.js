import statusCodes from "http-status-codes";
import {v4 as uuidv4} from 'uuid';
import {antiques} from "../utils/utils.js";

export function getAllAntiques(req, res) {
    const origin = req.query.origin;
    const material = req.query.material;
    const year = Number(req.query.year);
    const search = req.query.search;
    if (origin === "All" && material === "All" && year === 0) {
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
        res.json({ message: 'Antique was updated!' });
}
export function deleteAntique(req,res) {
    const antique = req.body;
    const antiqueId = req.params.antiqueId;
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
    if (!("endTime" in antique) || antique.endTime === '' || antique.endTime === null){
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
