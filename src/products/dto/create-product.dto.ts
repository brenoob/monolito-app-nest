import {
  IsString,
  IsNumber,
  IsOptional,
  Min,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MinLength(3, { message: 'O nome deve ter pelo menos 3 caracteres.' })
  name: string;

  @IsNumber()
  @Min(0, { message: 'O preço deve ser maior ou igual a zero.' })
  price: number;

  @IsString()
  @IsOptional()
  @MinLength(10, { message: 'A descrição deve ter pelo menos 10 caracteres.' })
  description?: string;

  @IsNumber()
  @Min(0, { message: 'O estoque deve ser maior ou igual a zero.' })
  stock: number;
}
