import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
export declare class BoardController {
    private readonly boardService;
    constructor(boardService: BoardService);
    create(createBoardDto: CreateBoardDto): Promise<CreateBoardDto & import("./entities/board.entity").Board>;
    findAll(): Promise<import("./entities/board.entity").Board[]>;
    findOne(id: string): Promise<import("./entities/board.entity").Board | null>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    handleOptions(): {
        statusCode: number;
    };
}
