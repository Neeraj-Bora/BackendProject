import { asyncHandler } from "../utils/asyncHandler";


export const verifyJWT = asyncHandler((req,res,next)=>{
    req.cookies?.accessToken || req.header("Authorization")
})