import { Controller,Get,Post} from '@nestjs/common';

@Controller('messages')
export class MessagesController {
    @Get('/messages')
    listMessages(){

    }
    @Post('/messages')
    createMessage(){

    }
    @Get('/messages/:id')
    listMessage(){

    }

}
