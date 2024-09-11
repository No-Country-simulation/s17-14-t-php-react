
export default function averageAndCommetsNum(rating) {
    // Calcular el promedio de puntajes
    let average = 0;

    if (rating && rating.length > 0) {
        const totalPuntaje = rating.reduce(
            (sum, review) => sum + parseFloat(review.puntaje),
            0
        );
        const countComents = rating.length;
        const averagePuntaje = totalPuntaje / countComents;
        average = averagePuntaje.toFixed(1)

        return ({average, countComents})
    }
}
