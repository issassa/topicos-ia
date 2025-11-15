import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";

@Injectable()
export class FavoriteMovieRepository {
    constructor(private readonly prisma: PrismaService) {}

    async favorite (id: string) {
        return this.prisma.movie.update({ where: { id: id }, data: { isFavorite: true }, });
    }
}
