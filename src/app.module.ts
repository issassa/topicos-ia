import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GenreController } from './modules/genre/genre.controller';
import { GenreService } from './modules/genre/genre.service';
import { GenreModule } from './modules/genre/genre.module';
import { MovieService } from './modules/movie/movie.service';
import { MovieController } from './modules/movie/movie.controller';
import { MovieModule } from './modules/movie/movie.module';

@Module({
  imports: [GenreModule, MovieModule],
  controllers: [AppController, GenreController, MovieController],
  providers: [AppService, GenreService, MovieService],
})
export class AppModule {}
