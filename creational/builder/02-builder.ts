


export class QueryBuilder {
    private readonly table: string;
    private fields: string[] = [];
    private conditions: string[] = [];
    private orderFields: string[] = [];
    private limitCount?: number;

    constructor(table: string) {
        this.table = table;
    }

    select(...fields: string[]): QueryBuilder {
        this.fields = fields;
        return this;
    }

    where(condition: string): QueryBuilder {
        this.conditions.push(condition);
        return this;
    }

    orderBy(field: string, direction: 'ASC' | 'DESC' = 'ASC'): QueryBuilder {
        this.orderFields.push(`${field} ${direction}`);
        return this;
    }

    limit(count: number): QueryBuilder {
        this.limitCount = count;
        return this;
    }

    execute(): string {
        const fields = this.fields.length > 0 ? this.fields.join(', ') : '*';

        const whereClause =
            this.conditions.length > 0
                ? `WHERE ${this.conditions.join(' AND ')}`
                : ' ';

        const orderByClause =
            this.orderFields.length > 0
                ? `ORDER BY ${this.orderFields.join(', ')}`
                : '';

        const limitClause = this.limitCount ? `LIMIT ${this.limitCount}` : '';

        return `SELECT ${fields} 
                FROM ${this.table} 
                ${whereClause} 
                ${orderByClause} 
                ${limitClause};
               `.trim();
    }
}