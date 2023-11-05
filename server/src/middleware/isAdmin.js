import statusCodes from "http-status-codes";
export function isAdmin(req, res, next) {
   if (req.user.isAdmin){
       next();
   } else {
       return res.status(statusCodes.UNAUTHORIZED).json({error: "You must be an admin!"});
   }
}