import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './entities/board.entity';
import { Repository } from 'typeorm';
export declare class BoardService {
    private boardRepository;
    constructor(boardRepository: Repository<Board>);
    create(createBoardDto: CreateBoardDto): Promise<CreateBoardDto & Board>;
    findAll(): Promise<Board[]>;
    findOne(id: number): Promise<Board | null>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
}
