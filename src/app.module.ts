import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
//d
@Module({
  imports: [BoardsModule],
})
export class AppModule {}
