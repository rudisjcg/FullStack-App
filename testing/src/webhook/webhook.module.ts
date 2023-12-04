import { Module } from '@nestjs/common';
import { WebhookController } from './webhook.controller';
import { WebhookService } from './webhook.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [WebhookController],
  providers: [WebhookService],
  imports: [HttpModule],
})
export class WebhookModule {
  
}
