import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class CustomPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    // value = parseInt(value);
    // const test = parseInt(metadata.data);
    console.log(metadata);

    return value;
  }
}
