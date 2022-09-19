import {IsString,IsNumber,IsBoolean} from 'class-validator'
export class CreateMessageDto{
    @IsString()
    name:string;
    @IsNumber()
    grade:number;
    @IsBoolean()
    admin:boolean;

} 