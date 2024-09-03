function calculatePercentages() {
    const faturamento = {
        SP: 67836.43,
        RJ: 36678.66,
        MG: 29229.88,
        ES: 27165.48,
        Outros: 19849.53
    };

    const total = faturamento.SP + faturamento.RJ + faturamento.MG + faturamento.ES + faturamento.Outros;

    const spPercent = ((faturamento.SP / total) * 100).toFixed(2);
    const rjPercent = ((faturamento.RJ / total) * 100).toFixed(2);
    const mgPercent = ((faturamento.MG / total) * 100).toFixed(2);
    const esPercent = ((faturamento.ES / total) * 100).toFixed(2);
    const outrosPercent = ((faturamento.Outros / total) * 100).toFixed(2);

    document.getElementById('spPercent').textContent = spPercent;
    document.getElementById('rjPercent').textContent = rjPercent;
    document.getElementById('mgPercent').textContent = mgPercent;
    document.getElementById('esPercent').textContent = esPercent;
    document.getElementById('outrosPercent').textContent = outrosPercent;
}
