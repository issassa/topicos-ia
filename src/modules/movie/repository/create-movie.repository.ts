import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";
import { CreateMovieDto } from "../dto/create-movie.dto";

@Injectable()
export class CreateMovieRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(data: CreateMovieDto) {
        return await this.prisma.movie.create({
            data: {
                title: data.title,
                description: data.description,
                genreId: data.genreId,
            },
        });
    }
}
