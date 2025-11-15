import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";

@Injectable()
export class FindOneScoreRepository {
    constructor(private readonly prisma: PrismaService) {}
    
    async findOne (id: string) {
        const score = await this.prisma.score.findUnique({ where: { id } });
        return score;
    }
}