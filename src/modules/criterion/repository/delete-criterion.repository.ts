import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";

@Injectable()
export class DeleteCriterionRepository {
    constructor(private readonly prisma: PrismaService) {}

    async delete (id: string) {
        return this.prisma.criterion.delete({ where: { id: id }, });
    }
}