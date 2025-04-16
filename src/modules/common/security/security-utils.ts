import { FastifyRequest } from "fastify";
import * as jwt from "jsonwebtoken";

import { Role } from "../../tokens";
import { secrets } from "../model";

export function extractTokenPayload(
    request: FastifyRequest
): { role: Role } | null {
    const header = request.headers.authorization;
    if (!header || !header.startsWith("Bearer ")) {
        return null;
    }

    const [, tokenChunk] = header.split(" ");
    if (!tokenChunk) {
        return null;
    }

    try {
        const payload = jwt.verify(tokenChunk, `${secrets.JWT_SECRET}`, {
            algorithms: ["HS256"],
            issuer: secrets.JWT_ISSUER,
        });

        if (typeof payload === "string") {
            return null;
        }

        return payload as { role: Role };
    } catch (err) {
        return null;
    }
}
