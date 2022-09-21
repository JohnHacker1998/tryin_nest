import { Controller,Get,Post,Body,Param} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';
@Controller('/messages')
export class MessagesController {
    messageServ:MessagesService
    constructor(){
        this.messageServ=new MessagesService();
    }
    @Get()
    listMessages(){
        return this.messageServ.findAll()

    }
    @Post()
    createMessage(@Body() body:CreateMessageDto){
        return this.messageServ.create(body.name)
    }
    @Get('/:id')
    listMessage(@Param('id') id:String){
        return this.messageServ.findOne(id)

    }


}
