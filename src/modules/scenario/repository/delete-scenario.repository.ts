import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";

@Injectable()
export class DeleteScenarioRepository {
    constructor(private readonly prisma: PrismaService) {}

    async delete (id: string) {
        return this.prisma.scenario.delete({ where: { id: id }, });
    }
}