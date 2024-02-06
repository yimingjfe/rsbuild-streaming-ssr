import fs from 'node:fs'
import path from 'node:path'
import { renderToPipeableStream } from 'react-dom/server';
import App from '../src/App'
import { Request, Response } from 'express'

export const handleRequest = (req: Request, res: Response) => {
  const shellHtml = fs.readFileSync(path.join(__dirname, '../index.html'));
  const { pipe, abort } = renderToPipeableStream(
    <App />,
    {
      onShellReady() {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        res.write(shellHtml);
        pipe(res);
        res.end();
      },
      onShellError(error) {
        console.error(error);
        res.statusCode = 200;
        
        res.write(shellHtml);
        res.end();
      },
      onError(error) {
        // Handle errors that occur during streaming
        console.error(error);
        abort();
      },
    }
  );
}