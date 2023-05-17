import { SHA256 } from "crypto-js";

export function getHashedPassword(text) {
	const hash = SHA256(text).toString();
	return hash;
}
