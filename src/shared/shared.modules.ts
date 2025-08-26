import { PrismaService } from "./databases/prisma.database"; 
import { Global, Logger, Module } from "@nestjs/common";


@Global ()
@Module ({
    imports: [],
    providers: [PrismaService, Logger],
    exports: [PrismaService],
})

export class SharedModule {}