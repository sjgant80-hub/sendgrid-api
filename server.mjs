#!/usr/bin/env node
/**
 * sendgrid-api · HTTP proxy for SendGrid
 * Sovereign estate wrapper for SendGrid · Email
 * Docs: https://www.twilio.com/docs/sendgrid/api-reference
 */
import { createServer } from 'node:http';
const PORT = process.env.PORT || 4200;
createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.url === '/health') return res.end(JSON.stringify({ status: 'ok', wraps: 'SendGrid' }));
  res.end(JSON.stringify({ name: 'sendgrid-api', wraps: 'SendGrid', docs: 'https://www.twilio.com/docs/sendgrid/api-reference' }));
}).listen(PORT, () => console.log('sendgrid-api on', PORT));
