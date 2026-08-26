// for VPS that we have container for backend
export const API_BASE =
  process.env.NEXT_PUBLIC_API_URL ?? "";

//local without docker,...
// export const API_BASE =
//  process.env.NEXT_PUBLIC_API_URL ?? "httpS://localhost:7004";
// or create .env.local and inside it: 
// NEXT_PUBLIC_API_URL=https://localhost:7004

