# Pré-lançamento da Mavila

A página inicial e o botão **Comprar Agora** permanecem. O botão continua levando à apresentação do MV-01; a partir dela, a navegação ao checkout mostra apenas a prévia do carrinho, sem coletar CPF, cartão ou endereço e sem confirmar pedidos.

## Cadastro MV Club com Supabase
1. Crie um projeto no Supabase e execute `supabase/early_access.sql` no SQL Editor.
2. Copie `.env.example` para `.env.local`, preencha `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` com a chave pública/anon do projeto.
3. Configure as mesmas variáveis no ambiente de hospedagem e gere novo build.
4. Faça um teste de inscrição com consentimento; confirme no painel do Supabase que o e-mail foi armazenado.
5. Antes de abrir inscrições ao público, publique uma política de privacidade, ofereça canal para exclusão/descadastro e ative medidas antispam como CAPTCHA/rate limiting.

Sem configuração, o formulário fica indisponível de maneira explícita; nenhuma inscrição é fingida. O projeto ainda não envia e-mails automaticamente, nem possui login de membros ou painel administrativo.

## Testes mínimos
- `npm ci` e `npm run build`
- Verificar Home, /mv01, /club, /checkout e navegação no celular.
- Confirmar que nenhuma tela registra pagamento ou pedido real.
- Validar cadastro com e-mail válido, inválido, duplicado e falha de rede.
- Verificar acessibilidade de teclado e mensagens de erro.
