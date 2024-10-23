import { generateFiles } from 'fumadocs-openapi';

void generateFiles({
    input: ['./content/scale/openapi-v1.json'],
    output: './content/scale/api',
    per: 'operation',
    groupBy: "route",
});