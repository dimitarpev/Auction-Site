import statusCodes from "http-status-codes";

let now = new Date();
now.setDate(now.getDate() + 3);
const endTime = now.getTime();

// TODO: figure out the dateTimes
// FIXME: complete the bid controller
let bids = [
    {
        id: 1,
        amount: 900,
        dateTime: "09/09/2023",
        userId: 1,
        antiqueId: 1
    }
]



export function getAllBids(req, res) {
    res.json(bids);
}


export function getSpecificBid(req, res) {
    const bidId = Number(req.params.bidId);

    const specificBid = bids.find(bid => bid.id === bidId);

    if (specificBid) {
        res.json(specificBid);
    } else {
        res.status(statusCodes.NOT_FOUND).json({error: 'Bid not found'});
    }
}
export function addBid(req, res) {
    const bid = req.body;
    const errors = [];

    //Check if any of the fields are empty
    if (!("amount" in bid) || bid.amount < '') {
        errors.push("No amount in bid");
    }
    if (!("type" in bid) || bid.type === ''){
        errors.push("No type in bid");
    }
    if (!("origin" in bid) || bid.origin === '') {
        errors.push("No origin in bid");
    }
    if (!("year" in bid) || bid.year === ''){
        errors.push("No year in bid");
    }
    if (!("material" in bid) || bid.material === ''){
        errors.push("No material in bid");
    }
    if (!("description" in bid) || bid.description === '') {
        errors.push("No description in bid");
    }
    if (!("endTime" in bid)){
        errors.push("No endTime in bid");
    }
    if (!("startingPrice" in bid) || bid.startingPrice < 0){
        errors.push("No starting price in bid or starting price less than 0")
    }
    if (!("image" in bid) || bid.image === '') {
        errors.push("No image in bid");
    }
    if (errors.length > 0){
        return res.status(statusCodes.BAD_REQUEST).json({error: errors});
    }

    bids.push(bid);
    console.log(bid);
    res.status(statusCodes.CREATED).json({message: 'Bid was added!'});
}
export function editBid(req,res) {
    const bid = req.body;
    const bidId = Number(req.params.bidId);
    const errors = [];

    //Check if any of the fields are empty
    if (!("amount" in bid) || bid.amount === '') {
        errors.push("No amount in bid");
    }
    if (!("type" in bid) || bid.type === ''){
        errors.push("No type in bid");
    }
    if (!("origin" in bid) || bid.origin === '') {
        errors.push("No origin in bid");
    }
    if (!("year" in bid) || bid.year === ''){
        errors.push("No year in bid");
    }
    if (!("material" in bid) || bid.material === ''){
        errors.push("No material in bid");
    }
    if (!("description" in bid) || bid.description === '') {
        errors.push("No description in bid");
    }
    if (!("endTime" in bid)){
        errors.push("No endTime in bid");
    }
    if (!("startingPrice" in bid) || bid.startingPrice < 0){
        errors.push("No starting price in bid or starting price less than 0")
    }
    if (!("image" in bid) || bid.image === '') {
        errors.push("No image in bid");
    }
    if (errors.length > 0){
        return res.status(statusCodes.BAD_REQUEST).json({error: errors});
    }

    const bidIndex = bids.findIndex(bid => bid.id === bidId);

    bids[bidIndex] = {
        ...bids[bidIndex],
        ...bid
    };
    console.log(bids[bidIndex]);
    res.json({ message: 'Bid was updated!' });
}

export function deleteBid(req,res) {
    const bid = req.body;
    const bidId = Number(req.params.bidId);
    console.log(bid);
    const bidIndex = bids.findIndex(bid => bid.id === bidId);
    if (bidIndex !== -1) {
        const deletedBid = bids.splice(bidIndex, 1)[0];
        res.json({ message: 'Bid was deleted', deletedBid });
    } else {
        res.status(statusCodes.NOT_FOUND).json({ error: 'Bid not found' });
    }
}
