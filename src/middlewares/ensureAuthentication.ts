// import { Request, Response, NextFunction } from "express";
// import { verify } from "jsonwebtoken";
// import { UserRepository } from "../modules/accounts/repositories/Implemententions/UserRepository";
// import { AppError } from "../errors/AppError";

// interface IPayload {
//   sub: string;
// }

// const ensureAuthentication = async (
//   request: Request,
//   response: Response,
//   next: NextFunction
// ) => {
//   const userRepository = new UserRepository();
//   const authHeader = request.headers.authorization;
//   if (!authHeader) {
//     throw new AppError("Token missing", 401);
//   }
//   const [, token] = authHeader.split(" ");

//   try {
//     const decoded = verify(
//       token,
//       "4dc3b6faee9b1081c985224820bd3248f4934b3c"
//     ) as IPayload;
//     const { sub: user_id } = decoded;
//     const user = await userRepository.findById(user_id);
//     if (!user) {
//       throw new AppError("Invalid Tokken");
//     }

//     request.user = {
//       id: user.id,
//     };

//     next();
//   } catch (err) {
//     throw new AppError("Invalid Tokken");
//   }
// };

// export { ensureAuthentication };
