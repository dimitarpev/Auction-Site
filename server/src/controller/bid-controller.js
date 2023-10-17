import statusCodes from "http-status-codes";
import {v4 as uuidv4} from 'uuid';
// TODO: figure out the dateTimes
// FIXME: complete the bid controller
let lastBidId = 1;
let bids = [
    {
        id: 1,
        amount: 900,
        dateTime: "09/09/2023",
        userEmail: "djimi2992@outlook.com",
        antiqueId: "1"
    }
]



export function getAllBidsOfUser(req, res) {
    const email = req.params.email;
    const userBids = bids.filter(bid => bid.userEmail === email);
    res.json(userBids);
}

export function getAllBidsOfAntique(req, res) {
    const antiqueId = req.params.antiqueId;
    const antiqueBids = bids.filter(bid => bid.antiqueId === antiqueId);
    if (antiqueBids) {
        res.json(antiqueBids);
    } else {
        return res.status(statusCodes.NOT_FOUND).json({error: "No bids fount for that antique"});
    }
}



export function addBid(req, res) {
    const bid = req.body;
    lastBidId++;
    bid.id = lastBidId;
    console.log(bid);
    const errors = [];

    //Check if any of the fields are empty
    if (!("amount" in bid) || bid.amount < '') {
        errors.push("No amount in bid");
    }
    if (!("dateTime" in bid) || bid.dateTime === ''){
        errors.push("No dateTime in bid");
    }
    if (!("userEmail" in bid)) {
        errors.push("No userEmail in bid");
    }
    if (!("antiqueId" in bid)){
        errors.push("No antiqueId in bid");
    }
    if (errors.length > 0){
        return res.status(statusCodes.BAD_REQUEST).json({error: errors});
    }

    bids.push(bid);
    console.log(bid);
    res.status(statusCodes.CREATED).json({message: 'Bid was added!'});
}


export function deleteBid(req,res) {
    const bidId = Number(req.params.id);
    const antiqueId = req.params.antiqueId;
    const bidIndex = bids.findIndex(bid => bid.antiqueId === antiqueId && bid.id === bidId);
    if (bidIndex !== -1) {
        const deletedBid = bids.splice(bidIndex, 1)[0];
        res.json({ message: 'Bid was deleted', deletedBid });
    } else {
        res.status(statusCodes.NOT_FOUND).json({ error: 'Bid not found' });
    }
}
