type InvoiceStatus = 'paid' | 'pending';

interface Customer {
    name: string;
    email: string;
};

interface Invoice {
    id: number;
    amount: number;
    status: InvoiceStatus;
    issueDate: string;
    dueDate: string;
    customer: Customer;
};

const invoices: Invoice[] = [{
    id: 1,
    amount: 120354,
    status: 'paid',
    issueDate: '2026-07-08',
    dueDate: '2026-08-23',
    customer: {
        name: 'Construtora Meridiano',
        email: 'comercial@meridiano.com.br'
    }
}, {
    id: 2,
    amount: 223898,
    status: 'paid',
    issueDate: '2026-05-15',
    dueDate: '2026-06-30',
    customer: {
        name: 'Bwinner',
        email: 'bwinner@models.com.br'
    }
}, {
    id: 3,
    amount: 896701,
    status: 'pending',
    issueDate: '2026-10-07',
    dueDate: '2026-11-22',
    customer: {
        name: 'Saul Goodman & Associados',
        email: 'saulgoodman@zipmail.com.br'
    }
} ]

export function findManyInvoices(): Invoice[] {
    return invoices;
}