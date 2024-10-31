import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    vus: 10,  // Número de usuarios virtuales
    duration: '10s',  // Duración de la prueba
};

// Lista de URLs a probar
const urls = [
    'http://localhost:8080',      // URL 1
    'http://localhost:8080/endponts/one', // URL 2
    'http://localhost:8080/endponts/two', // URL 3
];

export default function () {
    // Ejecuta las solicitudes en paralelo usando batch
    const responses = http.batch(urls.map(url => ['GET', url]));

    // Verifica cada respuesta de las URLs solicitadas
    responses.forEach((res, index) => {
        check(res, {
            [`status es 200 en URL ${urls[index]}`]: (r) => r.status === 200,
            [`contiene "World" en URL ${urls[index]}`]: (r) => r.body.includes('World'),
        });
    });

    sleep(0);  // Tiempo de espera entre iteraciones de usuario
}
