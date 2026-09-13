
// O express traz os erros até aqui,
// eles são respondidos ao front pela rede que fez a requisição
export function errorMiddleware(erro, req, res, next) {
    res.status(erro.status || 500).json({
        erro: erro.message || "Erro interno no servidor"
    })
}