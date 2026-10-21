# Mavila — e-commerce com Mercado Pago

## Decisão de arquitetura
- Frontend: React + Vite, preservando identidade e botão Comprar Agora.
- Backend: endpoints serverless (hospedagem compatível com Vercel).
- Pagamento: Mercado Pago Checkout Pro, com checkout hospedado pelo Mercado Pago.
- Banco recomendado: PostgreSQL (ex.: Supabase), com pedidos, itens, variantes, reservas de estoque e auditoria.
- **Status:** infraestrutura inicial em construção. O endpoint bloqueia pagamentos de propósito; não há cobrança real.

## Antes de habilitar vendas
1. Criar tabelas de produtos/variantes, estoque e pedidos com autorização de acesso.
2. Criar pedido pendente no servidor, com preços obtidos do banco e reserva de estoque atômica.
3. Implementar criação de checkout do Mercado Pago **no backend**; nunca expor access token no Vite.
4. Implementar webhook com verificação da assinatura, consulta de pagamento à API, idempotência e conciliação de pedido.
5. Implementar cálculo de frete real, cadastro/endereço e validação de CEP.
6. Implementar autenticação de clientes e painel administrativo com papéis e RLS.
7. Testar pagamentos sandbox e cenários de falha/cancelamento/reembolso.
8. Somente então ativar vendas e substituir dados demonstrativos do catálogo por estoque real.

## Variáveis de ambiente (backend)
- MERCADOPAGO_ACCESS_TOKEN (secreta; nunca colocar em VITE_)
- ENABLE_SALES=false (até homologação)
- ORDERS_BACKEND_READY=false (até banco, webhook e reserva estarem implementados)

O Checkout Pro via Orders API é a recomendação atual do Mercado Pago para novas integrações. A implementação definitiva será feita depois da persistência de pedidos.

**Importante:** GitHub Pages hospeda apenas frontend estático; /api/checkout exige backend em serviço como Vercel.
