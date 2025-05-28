import { NextRequest, NextResponse } from 'next/server';
import openai from '@/lib/openai';

export async function POST(req: NextRequest) {
  const { documentUrl } = await req.json();
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      temperature: 0.0,
      max_tokens: 2048,
      messages: [
        { role: 'system', content: 'You are a precise parser. Extract table items as JSON.' },
        { role: 'user', content: documentUrl },
      ],
      functions: [
        {
          name: 'extract_items',
          description: 'Extract table items as JSON array',
          parameters: {
            type: 'object',
            properties: {
              items: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    name: { type: 'string' },
                    amount: { type: 'number' },
                  },
                  required: ['name', 'amount'],
                },
              },
            },
            required: ['items'],
          },
        },
      ],
      function_call: { name: 'extract_items' },
    });
    const funcResponse = response.choices[0].message.function_call;
    const result = JSON.parse(funcResponse.arguments || '{}');
    return NextResponse.json({ result });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
} 