import statusCodes from "http-status-codes";
import {antiques} from "../utils/utils.js";

let lastBidId = 1;
let bids = [
    {
        id: 1,
        amount: 900,
        dateTime: Date.now(),
        userEmail: "djimi2992@outlook.com",
        antiqueId: "1",
        isWinningBid: true
    }
]



export function getAllBidsOfUser(req, res) {
    const email = req.params.email;
    const userBids = bids.filter(bid => bid.userEmail === email);
    if (userBids){
        res.json(userBids);
    } else {
        return res.status(statusCodes.NOT_FOUND).json({error: "No bids found for that user"});
    }
}

export function getAllBidsOfAntique(req, res) {
    const antiqueId = req.params.antiqueId;
    const antiqueBids = bids.filter(bid => bid.antiqueId === antiqueId);
    if (antiqueBids) {
        res.json(antiqueBids);
    } else {
        return res.status(statusCodes.NOT_FOUND).json({error: "No bids found for that antique"});
    }
}

export function getWinningBidsOfUser(req, res) {
    const email = req.params.email;
    const userWinningBids = bids.filter(bid => bid.userEmail === email && bid.isWinningBid);

    const validWinningBids = userWinningBids.filter(bid => {
        const antique = antiques.find(item => item.id === bid.antiqueId);
        return antique && Date.now() > antique.endTime;
    });
    if (validWinningBids.length > 0){
        res.json(validWinningBids);
    } else {
        res.json([]);
    }
}

export function addBid(req, res) {
    const bid = req.body;
    lastBidId++;
    bid.id = lastBidId;
    const errors = [];

    //Check if any of the fields are empty
    if (!("amount" in bid) || typeof bid.amount !== 'number' || bid.amount <= 0) {
        errors.push("Invalid amount in bid");
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

    const antique = antiques.find(antique => antique.id === bid.antiqueId);

    if (!antique) {
        return res.status(statusCodes.NOT_FOUND).json({error: "Antique to place a bid to not found"});
    }
    if (antique.endTime <= Date.now()){
        return res.status(statusCodes.BAD_REQUEST).json({error: "Cannot add bid to auction that has ended"});
    }
    const antiqueBids = bids.filter(existingBid => existingBid.antiqueId === bid.antiqueId);
    const maxPreviousBidAmount = Math.max(...antiqueBids.map(existingBid => existingBid.amount), 0);
    if (bid.amount <= maxPreviousBidAmount) {
        errors.push("Bid amount must be higher than all previous bids for the same antique");
    }

    if (errors.length > 0){
        return res.status(statusCodes.BAD_REQUEST).json({error: errors});
    }

    if (bid.amount > maxPreviousBidAmount) {
        bid.isWinningBid = true;

        antiqueBids.forEach(existingBid => {
            if (existingBid.isWinningBid) {
                existingBid.isWinningBid = false;
            }
        });
    }

    bids.push(bid);
    res.status(statusCodes.CREATED).json({message: 'Bid was added!'});
}


export function deleteBid(req,res) {
    const bidId = Number(req.params.id);
    const antiqueId = req.params.antiqueId;
    const bidIndex = bids.findIndex(bid => bid.antiqueId === antiqueId && bid.id === bidId);
    const antique = antiques.find(antique => antique.id === antiqueId);
    if (antique.endTime <= Date.now()){
        return res.status(statusCodes.BAD_REQUEST).json({error: "Cannot delete bid from auction that has ended"})
    }
    if (bidIndex !== -1) {
        const deletedBid = bids.splice(bidIndex, 1)[0];
        res.json({ message: 'Bid was deleted', deletedBid });
    } else {
        res.status(statusCodes.NOT_FOUND).json({ error: 'Bid not found' });
    }
}
