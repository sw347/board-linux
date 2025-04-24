import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './entities/board.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board) private boardRepository: Repository<Board>
  ) {}

  create(createBoardDto: CreateBoardDto) {
    return this.boardRepository.save(createBoardDto);
  }

  findAll() {
    return this.boardRepository.find();
  }

  findOne(id: number) {
    return this.boardRepository.findOne({where: {id: id}});
  }

  delete(id: string) {
    return this.boardRepository.delete(id);
  }
}
