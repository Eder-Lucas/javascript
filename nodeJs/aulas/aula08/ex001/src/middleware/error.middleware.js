export function errorMiddleware(erro, req, res, next) {
    res.status(erro.status || 500).json({
        erro: erro.message || "Erro interno no servidor"
    })
}