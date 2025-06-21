import { Injectable } from '@nestjs/common';
import { UserInput } from 'src/lib';
import { LoggerService } from 'src/modules/common';

@Injectable()
export class StaticService {
    public constructor(private readonly logger: LoggerService) {}

    public async getTokens(input: UserInput): Promise<[]> {
        this.logger.info('getTokens');

        return [];
    }

    public async getLinks(input: UserInput): Promise<[]> {
        this.logger.info('getLinks');

        return [];
    }

    public async getTxnHistory(input: UserInput): Promise<[]> {
        this.logger.info('getTxnHistory');

        return [];
    }
}
