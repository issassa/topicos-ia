import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";

@Injectable()
export class DeleteScoreRepository {
    constructor(private readonly prisma: PrismaService) {}

    async delete (id: string) {
        return this.prisma.score.delete({ where: { id: id }, });
    }
}