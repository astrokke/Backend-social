import { IsString, IsOptional, IsUrl, MaxLength } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @MaxLength(2000)
  content: string;

  @IsOptional()
  @IsUrl()
  imageUrl?: string;
}
