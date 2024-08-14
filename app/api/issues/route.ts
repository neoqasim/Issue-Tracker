import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const prisma = new PrismaClient();

const createIssueSchema = z.object({
    name: z.string().min(1).max(255),
    description: z.string().min(1),
});

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = createIssueSchema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json({ errors: validation.error.errors }, { status: 400 });
    }

    const newIssue = await prisma.issue.create({
        data: { name: body.name, description: body.description },
    });

    return NextResponse.json(newIssue, { status: 201 });
}
