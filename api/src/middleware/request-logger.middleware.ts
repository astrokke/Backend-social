import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger('RequestLogger');
  private readonly logFilePath = path.join(process.cwd(), '..', 'requests.log');

  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl, ip } = req;
    const userAgent = req.get('User-Agent') || '';
    const timestamp = new Date().toISOString();
    
    const logEntry = {
      timestamp,
      method,
      url: originalUrl,
      ip,
      userAgent,
      statusCode: res.statusCode,
    };

    this.logger.log(`${method} ${originalUrl} - ${ip}`);

    const logLine = JSON.stringify(logEntry) + '\n';
    fs.appendFile(this.logFilePath, logLine, (err) => {
      if (err) {
        this.logger.error('Erreur log file:', err);
      }
    });

    next();
  }
}
